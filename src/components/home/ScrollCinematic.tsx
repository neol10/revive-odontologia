"use client";

import React, { useEffect, useLayoutEffect, useRef, useState, useCallback } from "react";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const TOTAL_FRAMES = 192;

interface SceneConfig {
  id: number;
  text: string;
  subtext?: string;
  start: number;
  fadeInEnd: number;
  fadeOutStart: number;
  end: number;
}

const scenes: SceneConfig[] = [
  {
    id: 1,
    text: "Tudo começa com um sorriso.",
    start: 0.0,
    fadeInEnd: 0.05,
    fadeOutStart: 0.15,
    end: 0.20,
  },
  {
    id: 2,
    text: "A beleza está nos detalhes.",
    start: 0.20,
    fadeInEnd: 0.25,
    fadeOutStart: 0.40,
    end: 0.45,
  },
  {
    id: 3,
    text: "Cuidado que inspira confiança.",
    start: 0.45,
    fadeInEnd: 0.50,
    fadeOutStart: 0.68,
    end: 0.73,
  },
  {
    id: 4,
    text: "Vizotto Odontologia",
    subtext: "Seu sorriso merece atenção especial.",
    start: 0.73,
    fadeInEnd: 0.78,
    fadeOutStart: 0.96,
    end: 1.0,
  },
];

export function ScrollCinematic() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<(HTMLImageElement | null)[]>(new Array(TOTAL_FRAMES).fill(null));
  const currentFrameRef = useRef<number>(1);
  const lastDrawnFrameRef = useRef<number>(1);
  const rafIdRef = useRef<number | null>(null);

  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [initialFrameLoaded, setInitialFrameLoaded] = useState(false);

  // Renderização do frame no Canvas com proporção 16:9 estritamente preservada
  const renderFrame = useCallback((frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Busca o frame solicitado ou o último frame válido em cache
    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      img = imagesRef.current[lastDrawnFrameRef.current - 1];
    }
    if (!img || !img.complete || img.naturalWidth === 0) return;

    lastDrawnFrameRef.current = frameIndex;

    const canvasWidth = canvas.width;
    const canvasHeight = canvas.height;
    const imgWidth = img.naturalWidth || 1920;
    const imgHeight = img.naturalHeight || 1080;

    // Verificação de viewport: no desktop mantém o cover clássico aprovado.
    // No mobile vertical (onde canvasHeight / canvasWidth > 1.2), o cover em 16:9 cortaria 70% da largura,
    // dando a impressão de um zoom excessivo no rosto.
    const isMobilePortrait = canvasHeight / canvasWidth > 1.2;

    ctx.clearRect(0, 0, canvasWidth, canvasHeight);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = "high";

    if (isMobilePortrait) {
      // Solução híbrida cinematográfica:
      // 1. Fundo com blur e escurecimento derivado do próprio frame (evita barras pretas secas)
      const bgScale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const bgWidth = Math.round(imgWidth * bgScale);
      const bgHeight = Math.round(imgHeight * bgScale);
      const bgOffsetX = Math.round((canvasWidth - bgWidth) / 2);
      const bgOffsetY = Math.round((canvasHeight - bgHeight) / 2);

      ctx.save();
      ctx.filter = "blur(18px) brightness(0.45)";
      ctx.drawImage(img, bgOffsetX, bgOffsetY, bgWidth, bgHeight);
      ctx.restore();

      // 2. Camada principal em proporção natural (contain enriquecido com largura total da tela)
      const mainScale = canvasWidth / imgWidth;
      const mainWidth = canvasWidth;
      const mainHeight = Math.round(imgHeight * mainScale);
      const mainOffsetX = 0;
      const mainOffsetY = Math.round((canvasHeight - mainHeight) / 2);

      // Sombra suave para separar a camada principal do fundo estendido
      ctx.save();
      ctx.shadowColor = "rgba(0, 0, 0, 0.45)";
      ctx.shadowBlur = 24;
      ctx.drawImage(img, mainOffsetX, mainOffsetY, mainWidth, mainHeight);
      ctx.restore();
    } else {
      // Desktop / Landscape: Cover proporcional aprovado com mesma escala em X e Y
      const scale = Math.max(canvasWidth / imgWidth, canvasHeight / imgHeight);
      const drawWidth = Math.round(imgWidth * scale);
      const drawHeight = Math.round(imgHeight * scale);
      const offsetX = Math.round((canvasWidth - drawWidth) / 2);
      const offsetY = Math.round((canvasHeight - drawHeight) / 2);

      ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    }
  }, []);

  // Redimensionamento responsivo síncrono com devicePixelRatio e proporção de tela
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const rect = canvas.getBoundingClientRect();

    if (rect.width > 0 && rect.height > 0) {
      const targetWidth = Math.round(rect.width * dpr);
      const targetHeight = Math.round(rect.height * dpr);

      if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
        canvas.width = targetWidth;
        canvas.height = targetHeight;
      }

      renderFrame(currentFrameRef.current);
    }
  }, [renderFrame]);

  // Carregamento assíncrono de imagem com cache em memória
  const loadImage = useCallback((index: number): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      if (imagesRef.current[index - 1]) {
        resolve(imagesRef.current[index - 1]!);
        return;
      }

      const img = new Image();
      const padded = String(index).padStart(4, "0");
      img.src = `/assets/scroll-sequence/frame-${padded}.webp`;
      img.decoding = "async";

      img.onload = () => {
        imagesRef.current[index - 1] = img;
        resolve(img);
      };
      img.onerror = reject;
    });
  }, []);

  // Detecção de prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Ajuste de layout imediato na montagem para evitar dimensões padrão de 300x150
  useLayoutEffect(() => {
    handleResize();
  }, [handleResize]);

  // Inicialização e Carregamento Progressivo Inteligente
  useEffect(() => {
    if (prefersReducedMotion) return;

    let isCancelled = false;

    // 1. Carrega imediatamente o primeiro frame (Full HD 1080p)
    loadImage(1).then(() => {
      if (isCancelled) return;
      setInitialFrameLoaded(true);
      handleResize();
      renderFrame(1);
    });

    // 2. Pré-carregamento prioritário dos primeiros 12 frames
    const preloadImmediate = async () => {
      for (let i = 2; i <= 12; i++) {
        if (isCancelled) return;
        await loadImage(i).catch(() => {});
      }
    };
    preloadImmediate();

    // 3. Pré-carregamento em background com controle de concorrência
    const preloadRemaining = async () => {
      const BATCH_SIZE = 6;
      for (let i = 13; i <= TOTAL_FRAMES; i += BATCH_SIZE) {
        if (isCancelled) return;
        const batchPromises: Promise<any>[] = [];
        for (let j = i; j < Math.min(i + BATCH_SIZE, TOTAL_FRAMES + 1); j++) {
          batchPromises.push(loadImage(j).catch(() => {}));
        }
        await Promise.all(batchPromises);
        // Intervalo de 35ms para manter a thread da GPU 100% responsiva
        await new Promise((res) => setTimeout(res, 35));
      }
    };

    if (typeof window !== "undefined" && "requestIdleCallback" in window) {
      const idleId = (window as any).requestIdleCallback(() => preloadRemaining(), { timeout: 1500 });
      return () => {
        isCancelled = true;
        if ("cancelIdleCallback" in window) (window as any).cancelIdleCallback(idleId);
      };
    } else {
      const timer = setTimeout(preloadRemaining, 150);
      return () => {
        isCancelled = true;
        clearTimeout(timer);
      };
    }
  }, [loadImage, handleResize, renderFrame, prefersReducedMotion]);

  // Listener de Resize com debounce visual
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  // Orquestração com GSAP ScrollTrigger
  useEffect(() => {
    if (prefersReducedMotion) return;

    gsap.registerPlugin(ScrollTrigger);

    const container = containerRef.current;
    if (!container) return;

    const trigger = ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: "+=280%",
      pin: true,
      pinSpacing: true,
      scrub: 0.35,
      onUpdate: (self) => {
        const progress = self.progress;
        setScrollProgress(progress);

        // Mapeia linearmente 0.0 a 1.0 para o índice de frame (1 a 192)
        const targetFrame = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(progress * (TOTAL_FRAMES - 1)) + 1));

        if (targetFrame !== currentFrameRef.current) {
          currentFrameRef.current = targetFrame;
          if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
          rafIdRef.current = requestAnimationFrame(() => {
            renderFrame(targetFrame);
          });
        }
      },
    });

    return () => {
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
      trigger.kill();
    };
  }, [prefersReducedMotion, renderFrame]);

  // Cálculo de opacidade e translação para os momentos narrativos
  const getSceneStyle = (scene: SceneConfig) => {
    const p = scrollProgress;
    let opacity = 0;
    let translateY = 16;

    if (p >= scene.start && p <= scene.end) {
      if (p < scene.fadeInEnd) {
        const t = (p - scene.start) / (scene.fadeInEnd - scene.start);
        opacity = t;
        translateY = 16 * (1 - t);
      } else if (p > scene.fadeOutStart) {
        const t = (p - scene.fadeOutStart) / (scene.end - scene.fadeOutStart);
        opacity = 1 - t;
        translateY = -12 * t;
      } else {
        opacity = 1;
        translateY = 0;
      }
    }

    return {
      opacity,
      transform: `translateY(${translateY}px)`,
      visibility: opacity > 0.01 ? ("visible" as const) : ("hidden" as const),
    };
  };

  // Fallback estático para prefers-reduced-motion
  if (prefersReducedMotion) {
    return (
      <section className="py-24 bg-grafite text-marfim border-t border-taupe/20">
        <Container size="default">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="rounded-2xl overflow-hidden border border-white/10 shadow-xl">
              <img
                src="/assets/scroll-sequence/frame-0001.webp"
                alt="Detalhe de sorriso e ambiente odontológico"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="space-y-6">
              <Typography variant="eyebrow" className="text-champagne block">
                Experiência Cinematográfica
              </Typography>
              <Typography variant="h2" className="text-marfim font-serif">
                A harmonia e a ciência do seu melhor sorriso.
              </Typography>
              <div className="space-y-4 pt-4 border-t border-white/10">
                {scenes.map((s) => (
                  <p key={s.id} className="text-marfim/80 font-serif text-lg">
                    • {s.text} {s.subtext && <span className="block text-sm text-champagne">{s.subtext}</span>}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[100svh] bg-grafite overflow-hidden select-none"
      aria-label="Narrativa cinematográfica do sorriso"
    >
      {/* Canvas 2D com resolução interna Full HD 16:9 inicial explícita */}
      <canvas
        ref={canvasRef}
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full block"
        style={{ touchAction: "none" }}
      />

      {/* Camada Editorial de Contraste Suave (Vignette sutil) */}
      <div className="absolute inset-0 bg-gradient-to-t from-grafite/70 via-transparent to-grafite/50 pointer-events-none" />

      {/* Camada Textual Sincronizada com a Narrativa */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none p-6 sm:p-12">
        <Container size="default" className="text-center">
          {scenes.map((scene) => {
            const style = getSceneStyle(scene);
            return (
              <div
                key={scene.id}
                className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex flex-col items-center justify-center px-4 max-w-lg sm:max-w-3xl mx-auto transition-all duration-75 ease-out"
                style={style}
              >
                {scene.id === 4 ? (
                  <div className="space-y-3 bg-grafite/40 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none p-4 rounded-2xl">
                    <span className="h-[1px] w-12 bg-champagne mx-auto block mb-2" />
                    <h2 className="font-serif text-[30px] sm:text-5xl md:text-6xl text-marfim font-normal tracking-tight drop-shadow-lg">
                      {scene.text}
                    </h2>
                    {scene.subtext && (
                      <p className="font-sans text-[15px] sm:text-xl text-champagne font-light tracking-wide max-w-lg mx-auto drop-shadow-md">
                        {scene.subtext}
                      </p>
                    )}
                  </div>
                ) : (
                  <div className="bg-grafite/40 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none px-5 py-3 rounded-2xl max-w-[340px] sm:max-w-none">
                    <h2 className="font-serif text-[26px] sm:text-4xl md:text-5xl lg:text-6xl text-marfim font-normal leading-[1.18] sm:leading-[1.2] tracking-tight drop-shadow-lg">
                      {scene.text}
                    </h2>
                  </div>
                )}
              </div>
            );
          })}
        </Container>
      </div>

      {/* Barra de Progresso Cinematográfica Discreta na Base */}
      <div className="absolute bottom-6 inset-x-0 z-20 flex justify-center pointer-events-none">
        <div className="w-28 sm:w-36 h-[2px] bg-white/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-champagne transition-all duration-75 ease-out"
            style={{ width: `${Math.round(scrollProgress * 100)}%` }}
          />
        </div>
      </div>
    </div>
  );
}
