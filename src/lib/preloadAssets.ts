/**
 * CACHE GLOBAL DE PRÉ-CARREGAMENTO DE ASSETS CINEMATOGRÁFICOS
 * Revive Odontologia Especializada
 *
 * Garante que todos os 192 frames WebP do ScrollCinematic, o poster e o vídeo
 * do Hero estejam carregados e prontos em memória antes da liberação do scroll,
 * evitando travamentos ou saltos durante a rolagem.
 */

export const TOTAL_SCROLL_FRAMES = 192;
const CACHE_NAME = "revive-cinematic-assets-v1";
const WARM_FLAG_KEY = "revive_assets_cached_v1";

// Cache persistente em memória compartilhado entre SitePreloader e ScrollCinematic
export const scrollFramesCache: (HTMLImageElement | null)[] = new Array(
  TOTAL_SCROLL_FRAMES
).fill(null);

let isPreloadComplete = false;
let activePreloadPromise: Promise<void> | null = null;

export function getIsPreloadComplete(): boolean {
  return isPreloadComplete;
}

export function hasPersistentAssetCache(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return window.localStorage.getItem(WARM_FLAG_KEY) === "true";
  } catch {
    return false;
  }
}

function markPersistentAssetCache(): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(WARM_FLAG_KEY, "true");
  } catch {
    // Ignora caso modo privado bloqueie localStorage
  }
}

export function getFrameSrc(index: number): string {
  const padded = String(index).padStart(4, "0");
  return `/assets/scroll-sequence/frame-${padded}.webp`;
}

/**
 * Busca a URL priorizando a Cache API persistente do navegador (disco local).
 * Na primeira visita baixa da rede e salva no cache persistente;
 * nos próximos reloads lê direto do disco em milissegundos sem depender da rede.
 */
async function getCachedBlobUrl(
  url: string,
  cache: Cache | null
): Promise<{ src: string; revoke?: () => void }> {
  if (!cache) return { src: url };

  try {
    let response = await cache.match(url);
    if (!response) {
      response = await fetch(url, { cache: "force-cache" });
      if (response.ok) {
        // Salva cópia em disco no Cache Storage sem bloquear
        cache.put(url, response.clone()).catch(() => {});
      }
    }

    if (response && response.ok) {
      const blob = await response.blob();
      const objectUrl = URL.createObjectURL(blob);
      return {
        src: objectUrl,
        revoke: () => URL.revokeObjectURL(objectUrl),
      };
    }
  } catch {
    // Fallback silencioso para carregamento direto via URL
  }

  return { src: url };
}

/**
 * Carrega e decodifica um único frame WebP armazenando-o no cache compartilhado.
 */
export async function loadScrollFrame(
  index: number,
  cache?: Cache | null
): Promise<HTMLImageElement | null> {
  const existing = scrollFramesCache[index - 1];
  if (existing && existing.complete && existing.naturalWidth > 0) {
    return existing;
  }

  const url = getFrameSrc(index);
  let activeCache = cache;
  if (activeCache === undefined && typeof window !== "undefined" && "caches" in window) {
    try {
      activeCache = await window.caches.open(CACHE_NAME);
    } catch {
      activeCache = null;
    }
  }

  const { src, revoke } = await getCachedBlobUrl(url, activeCache ?? null);

  return new Promise((resolve) => {
    const img = new Image();
    img.decoding = "async";

    const finalize = () => {
      scrollFramesCache[index - 1] = img;
      // Libera o blob URL após o decode estar em memória para evitar vazamento de RAM
      if (revoke) revoke();
      resolve(img);
    };

    img.onload = () => {
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
      if (revoke) revoke();
      resolve(null);
    };

    img.src = src;
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

    // Abre a Cache API persistente uma única vez para todos os 192 frames
    let persistentCache: Cache | null = null;
    if (typeof window !== "undefined" && "caches" in window) {
      try {
        persistentCache = await window.caches.open(CACHE_NAME);
      } catch {
        persistentCache = null;
      }
    }

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

    // Em visitas subsequentes (cache já aquecido em disco), hidrata em lotes maiores (24 por vez)
    // para liberar o site quase instantaneamente; na primeira visita usa lotes de 12 para a rede
    const isWarm = hasPersistentAssetCache();
    const BATCH_SIZE = isWarm ? 24 : 12;
    for (let i = 1; i <= TOTAL_SCROLL_FRAMES; i += BATCH_SIZE) {
      const batch: Promise<void>[] = [];
      for (
        let j = i;
        j < Math.min(i + BATCH_SIZE, TOTAL_SCROLL_FRAMES + 1);
        j++
      ) {
        batch.push(loadScrollFrame(j, persistentCache).then(() => report()));
      }
      await Promise.all(batch);
    }

    await criticalParallel;

    isPreloadComplete = true;
    markPersistentAssetCache();
    onProgress?.(100);
  })();

  return activePreloadPromise;
}
