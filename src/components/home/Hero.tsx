"use client";

import React, { useEffect, useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/constants/contact";

export function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  // Detecção de prefers-reduced-motion para acessibilidade estrita
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  // Tenta iniciar a reprodução com garantia de autoplay mobile (muted + playsInline nativo)
  useEffect(() => {
    if (prefersReducedMotion) return;
    const video = videoRef.current;
    if (video) {
      video.muted = true;
      video.defaultMuted = true;
      video.setAttribute("playsinline", "");
      video.setAttribute("webkit-playsinline", "");

      const attemptPlay = () => {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              setVideoLoaded(true);
            })
            .catch(() => {
              // Bloqueio de autoplay do navegador: poster de alta definição assume elegantemente como fallback
            });
        }
      };

      attemptPlay();
    }
  }, [prefersReducedMotion]);

  return (
    <section
      id="inicio"
      className="relative w-full h-[100svh] min-h-[640px] flex items-center overflow-hidden bg-grafite"
      aria-label="Apresentação inicial da Vizotto Odontologia"
    >
      {/* Camada de Mídia: Vídeo Cinematográfico + Poster de Fallback */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none">
        {/* Imagem Pôster Estática com Prioridade de Exibição */}
        <img
          src="/assets/videos/hero-poster.jpg"
          alt="Ambiente odontológico cinematográfico Vizotto Odontologia"
          className={`absolute inset-0 w-full h-full object-cover object-[center_center] sm:object-[65%_center] lg:object-[60%_center] transition-opacity duration-1000 ${
            videoLoaded && !prefersReducedMotion ? "opacity-0" : "opacity-100"
          }`}
          loading="eager"
          decoding="async"
        />

        {/* Vídeo Cinematográfico Real (8s, 1280x720) */}
        {!prefersReducedMotion && (
          <video
            ref={videoRef}
            src="/assets/videos/video-hero.mp4"
            poster="/assets/videos/hero-poster.jpg"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            onLoadedData={() => setVideoLoaded(true)}
            onPlaying={() => setVideoLoaded(true)}
            className={`absolute inset-0 w-full h-full object-cover object-[center_center] sm:object-[65%_center] lg:object-[60%_center] transition-opacity duration-1000 ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
          />
        )}

        {/* Editorial Veil — Gradiente Multicamada para Legibilidade Absoluta */}
        {/* Gradiente lateral à esquerda para proteger os textos */}
        <div className="absolute inset-0 bg-gradient-to-r from-grafite/95 via-grafite/70 to-transparent sm:via-grafite/50 sm:to-transparent" />

        {/* Gradiente superior suave para ancoragem do Header */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-grafite/85 via-grafite/40 to-transparent" />

        {/* Gradiente inferior sutil para a transição de base */}
        <div className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-grafite/85 via-grafite/30 to-transparent" />
      </div>

      {/* Conteúdo Editorial do Hero */}
      <Container size="wide" className="relative z-10 w-full pt-24 sm:pt-28 pb-20 sm:pb-16">
        <div className="max-w-2xl sm:max-w-xl lg:max-w-2xl flex flex-col text-left">
          {/* Eyebrow de Marca */}
          <div className="mb-4 sm:mb-6 flex items-center gap-3">
            <span className="h-[1px] w-8 sm:w-12 bg-champagne/80" />
            <Typography
              variant="eyebrow"
              className="text-champagne tracking-luxury text-[11px] sm:text-xs font-medium"
            >
              VIZOTTO ODONTOLOGIA
            </Typography>
          </div>

          {/* Título Principal Editorial com clamp() responsivo */}
          <h1
            className="font-serif text-marfim font-normal tracking-tight mb-5 sm:mb-6 drop-shadow-sm"
            style={{
              fontSize: "clamp(2.125rem, 4vw + 1.25rem, 3.75rem)",
              lineHeight: 1.12,
            }}
          >
            A arte e a ciência <br className="hidden sm:inline" />
            <span className="text-marfim-light italic font-normal">
              do seu melhor sorriso.
            </span>
          </h1>

          {/* Subtítulo Humanizado */}
          <Typography
            variant="subtitle"
            className="text-marfim/90 text-[15px] sm:text-lg md:text-xl font-light leading-relaxed max-w-lg mb-8 sm:mb-10 text-pretty"
          >
            Um olhar cuidadoso para cada detalhe do seu sorriso.
          </Typography>

          {/* Duplo CTA Estratégico com altura acessível e consistência mobile */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-5 w-full sm:w-auto max-w-md sm:max-w-none">
            <Button
              variant="secondary"
              size="lg"
              href={CONTACT_INFO.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="min-h-[52px] text-[13px] sm:text-sm tracking-luxury shadow-md hover:shadow-champagne/30 text-center w-full sm:w-auto"
            >
              Agendar Consulta
            </Button>

            <Button
              variant="outline"
              size="lg"
              href="#clinica"
              className="min-h-[52px] border-white/30 text-marfim hover:border-champagne hover:text-champagne hover:bg-white/5 backdrop-blur-sm tracking-luxury text-[13px] sm:text-sm text-center w-full sm:w-auto"
            >
              Conheça a Vizotto
            </Button>
          </div>
        </div>
      </Container>

      {/* Indicador de Rolagem Discreto (Scroll Indicator) */}
      <a
        href="#filosofia"
        aria-label="Rolar para conhecer a clínica"
        className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-marfim/60 hover:text-champagne transition-colors group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne rounded-sm p-1"
      >
        <span className="text-[10px] uppercase tracking-luxury font-sans font-light">
          Explorar
        </span>
        <div className="w-5 h-8 sm:h-9 rounded-full border border-white/20 flex items-start justify-center p-1 group-hover:border-champagne/60 transition-colors">
          <span className="w-1 h-2 rounded-full bg-champagne animate-bounce mt-1" />
        </div>
      </a>
    </section>
  );
}
