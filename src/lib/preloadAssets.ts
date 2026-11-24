/**
 * CACHE GLOBAL DE PRÉ-CARREGAMENTO DE ASSETS CINEMATOGRÁFICOS
 * Revive Odontologia Especializada
 *
 * Garante que todos os 192 frames WebP do ScrollCinematic, o poster e o vídeo
 * do Hero estejam carregados e prontos em memória antes da liberação do scroll,
 * evitando travamentos ou saltos durante a rolagem.
 */

export const TOTAL_SCROLL_FRAMES = 192;

// Cache persistente em memória compartilhado entre SitePreloader e ScrollCinematic
export const scrollFramesCache: (HTMLImageElement | null)[] = new Array(
  TOTAL_SCROLL_FRAMES
).fill(null);

let isPreloadComplete = false;
let activePreloadPromise: Promise<void> | null = null;

export function getIsPreloadComplete(): boolean {
  return isPreloadComplete;
}

export function getFrameSrc(index: number): string {
  const padded = String(index).padStart(4, "0");
  return `/assets/scroll-sequence/frame-${padded}.webp`;
}

/**
 * Carrega e decodifica um único frame WebP armazenando-o no cache compartilhado.
 */
export function loadScrollFrame(index: number): Promise<HTMLImageElement | null> {
  const existing = scrollFramesCache[index - 1];
  if (existing && existing.complete && existing.naturalWidth > 0) {
    return Promise.resolve(existing);
  }

  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.src = getFrameSrc(index);

    const finalize = () => {
      scrollFramesCache[index - 1] = img;
      resolve(img);
    };

    img.onload = () => {
      // Pré-decodifica na GPU quando suportado para eliminar jank na primeira passagem do scroll
      if (typeof img.decode === "function") {
        img
          .decode()
          .then(finalize)
          .catch(finalize);
      } else {
        finalize();
      }
    };

    img.onerror = () => {
      resolve(null);
    };
  });
}

function preloadStaticImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve();
    img.onerror = () => resolve();
    img.src = src;
  });
}

function preloadHeroVideo(src: string, timeoutMs = 8000): Promise<void> {
  return new Promise((resolve) => {
    if (typeof document === "undefined") {
      resolve();
      return;
    }

    let settled = false;
    const done = () => {
      if (settled) return;
      settled = true;
      clearTimeout(timer);
      video.removeAttribute("src");
      video.load();
      resolve();
    };

    const timer = setTimeout(done, timeoutMs);

    const video = document.createElement("video");
    video.muted = true;
    video.playsInline = true;
    video.preload = "auto";
    video.oncanplaythrough = done;
    video.onloadeddata = done;
    video.onerror = done;
    video.src = src;
    video.load();
  });
}

/**
 * Executa o pré-carregamento completo de todos os assets críticos do site
 * reportando progresso real (0 a 100) via callback.
 */
export function preloadAllSiteAssets(
  onProgress?: (percent: number) => void
): Promise<void> {
  if (isPreloadComplete) {
    onProgress?.(100);
    return Promise.resolve();
  }

  if (activePreloadPromise) {
    return activePreloadPromise;
  }

  activePreloadPromise = (async () => {
    // 192 frames + poster + logo + video + fonts = 196 unidades reais
    const EXTRA_ASSETS = 4;
    const totalUnits = TOTAL_SCROLL_FRAMES + EXTRA_ASSETS;
    let loadedUnits = 0;

    const report = () => {
      loadedUnits = Math.min(totalUnits, loadedUnits + 1);
      const pct = Math.min(100, Math.round((loadedUnits / totalUnits) * 100));
      onProgress?.(pct);
    };

    // Inicia assets paralelos de alta prioridade (poster, monograma, vídeo do hero e fontes)
    const criticalParallel = Promise.all([
      preloadStaticImage("/assets/videos/hero-poster.jpg").then(report),
      preloadStaticImage("/assets/brand/logo-transparent.png").then(report),
      preloadHeroVideo("/assets/videos/video-hero.mp4", 7000).then(report),
      (typeof document !== "undefined" && document.fonts?.ready
        ? Promise.race([
            document.fonts.ready,
            new Promise((r) => setTimeout(r, 3000)),
          ])
        : Promise.resolve()
      ).then(report),
    ]);

    // Carrega todos os 192 frames WebP em lotes paralelos (12 por vez) para máxima velocidade
    // sem saturar conexões HTTP/2 ou travar a thread principal
    const BATCH_SIZE = 12;
    for (let i = 1; i <= TOTAL_SCROLL_FRAMES; i += BATCH_SIZE) {
      const batch: Promise<void>[] = [];
      for (
        let j = i;
        j < Math.min(i + BATCH_SIZE, TOTAL_SCROLL_FRAMES + 1);
        j++
      ) {
        batch.push(loadScrollFrame(j).then(() => report()));
      }
      await Promise.all(batch);
    }

    await criticalParallel;

    isPreloadComplete = true;
    onProgress?.(100);
  })();

  return activePreloadPromise;
}
