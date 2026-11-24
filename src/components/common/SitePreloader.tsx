"use client";

import React, { useEffect, useState } from "react";
import {
  getIsPreloadComplete,
  hasPersistentAssetCache,
  preloadAllSiteAssets,
} from "@/lib/preloadAssets";

/**
 * TELA DE PRÉ-CARREGAMENTO EDITORIAL — REVIVE ODONTOLOGIA ESPECIALIZADA
 *
 * - Na 1ª visita: bloqueia o scroll e pré-carrega todos os 192 frames WebP + mídia
 *   do Hero salvando-os na Cache API persistente em disco do navegador.
 * - A partir da 2ª visita / atualização (F5): detecta o cache persistente, libera
 *   o site imediatamente sem bloquear a tela e hidrata os frames direto do disco
 *   em segundo plano em milissegundos.
 */
export function SitePreloader() {
  const [progress, setProgress] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // 1. Se movimento reduzido ou já carregado em memória: libera na hora
    if (reducedMotion || getIsPreloadComplete()) {
      setProgress(100);
      setIsDismissed(true);
      return;
    }

    // 2. Se os assets já foram baixados e salvos em disco na visita anterior:
    //    libera a tela imediatamente e hidrata os 192 frames do disco local em background!
    if (hasPersistentAssetCache()) {
      setProgress(100);
      setIsDismissed(true);
      preloadAllSiteAssets();
      return;
    }

    // Trava o scroll da página durante o pré-carregamento
    const prevBodyOverflow = document.body.style.overflow;
    const prevHtmlOverflow = document.documentElement.style.overflow;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";

    let isCancelled = false;
    let fadeTimer: ReturnType<typeof setTimeout> | null = null;
    let dismissTimer: ReturnType<typeof setTimeout> | null = null;

    const releaseSite = () => {
      if (isCancelled) return;
      setProgress(100);

      // Pequena pausa editorial no 100% para transição elegante
      fadeTimer = setTimeout(() => {
        if (isCancelled) return;
        setIsFadingOut(true);
        document.body.style.overflow = prevBodyOverflow;
        document.documentElement.style.overflow = prevHtmlOverflow;

        dismissTimer = setTimeout(() => {
          if (isCancelled) return;
          setIsDismissed(true);
        }, 650);
      }, 220);
    };

    // Timeout máximo de segurança (25s) para nunca travar o usuário em redes extremamente lentas
    const safetyTimeout = setTimeout(releaseSite, 25000);

    preloadAllSiteAssets((pct) => {
      if (!isCancelled) {
        setProgress((prev) => Math.max(prev, pct));
      }
    }).then(() => {
      clearTimeout(safetyTimeout);
      releaseSite();
    });

    return () => {
      isCancelled = true;
      clearTimeout(safetyTimeout);
      if (fadeTimer) clearTimeout(fadeTimer);
      if (dismissTimer) clearTimeout(dismissTimer);
      document.body.style.overflow = prevBodyOverflow;
      document.documentElement.style.overflow = prevHtmlOverflow;
    };
  }, []);

  if (isDismissed) {
    return null;
  }

  return (
    <div
      role="status"
      aria-live="polite"
      aria-label={`Carregando experiência Revive Odontologia Especializada: ${progress}%`}
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-petroleo-dark text-offwhite px-6 transition-opacity duration-700 ease-out ${
        isFadingOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      {/* Brilho radial sutil de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] h-[360px] sm:w-[480px] sm:h-[480px] rounded-full bg-dourado/[0.06] blur-3xl" />
      </div>

      {/* Bloco central de identidade e progresso */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-xs w-full">
        {/* Monograma Oficial Revive */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-offwhite/95 ring-1 ring-dourado/50 shadow-lg flex items-center justify-center overflow-hidden mb-6">
          <img
            src="/assets/brand/logo-transparent.png"
            alt="Monograma oficial Revive Odontologia Especializada"
            className="w-full h-full object-contain scale-110"
            decoding="async"
          />
        </div>

        {/* Nome da Marca */}
        <span className="font-serif text-2xl sm:text-3xl tracking-[0.24em] uppercase text-offwhite font-normal leading-none">
          REVIVE
        </span>
        <span className="font-sans text-[10px] sm:text-[11px] tracking-[0.34em] uppercase text-dourado font-medium mt-2 mb-8">
          ODONTOLOGIA ESPECIALIZADA
        </span>

        {/* Barra de Progresso Real */}
        <div className="w-full h-[2px] bg-offwhite/15 rounded-full overflow-hidden mb-3">
          <div
            className="h-full bg-dourado transition-all duration-200 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Indicador percentual */}
        <div className="flex items-center justify-between w-full text-[11px] font-sans tracking-luxury uppercase text-offwhite/65">
          <span>Preparando experiência</span>
          <span className="tabular-nums text-dourado font-medium">
            {progress}%
          </span>
        </div>
      </div>
    </div>
  );
}
