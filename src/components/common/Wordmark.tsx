import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface WordmarkProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  showMonogram?: boolean;
}

/**
 * Identidade Oficial da Revive Odontologia Especializada.
 * Utiliza o monograma oficial original (símbolo do dente em dourado suave + letra R em azul-petróleo)
 * extraído com fidelidade 1:1 de public/assets/brand/logo.jpg, combinado com tipografia editorial
 * (Playfair Display + Plus Jakarta Sans) sem inventar traços ou alterar proporções.
 */
export function Wordmark({
  tone = "dark",
  size = "md",
  showMonogram = true,
  className,
  ...props
}: WordmarkProps) {
  const isLight = tone === "light";

  const sizeStyles = {
    sm: {
      containerGap: "gap-2.5",
      logoBox: "w-9 h-9",
      brand: "text-lg tracking-[0.2em]",
      sub: "text-[8.5px] tracking-[0.28em] mt-0.5",
    },
    md: {
      containerGap: "gap-3.5",
      logoBox: "w-12 h-12 sm:w-14 sm:h-14",
      brand: "text-2xl sm:text-3xl tracking-[0.22em]",
      sub: "text-[10px] sm:text-[11px] tracking-[0.32em] mt-1",
    },
    lg: {
      containerGap: "gap-4",
      logoBox: "w-16 h-16 sm:w-20 sm:h-20",
      brand: "text-3xl sm:text-4xl md:text-5xl tracking-[0.24em]",
      sub: "text-[11px] sm:text-xs tracking-[0.36em] mt-1.5",
    },
  };

  return (
    <div
      className={twMerge(
        clsx(
          "inline-flex items-center select-none",
          sizeStyles[size].containerGap,
          className
        )
      )}
      aria-label="Revive Odontologia Especializada"
      {...props}
    >
      {showMonogram && (
        <div
          className={clsx(
            "relative shrink-0 rounded-full overflow-hidden flex items-center justify-center transition-colors",
            sizeStyles[size].logoBox,
            isLight
              ? "bg-offwhite/95 ring-1 ring-dourado/40 shadow-sm"
              : "bg-transparent"
          )}
        >
          <img
            src="/assets/brand/logo-transparent.png"
            alt="Monograma oficial Revive Odontologia Especializada"
            className="w-full h-full object-contain scale-110"
            decoding="async"
          />
        </div>
      )}

      <div className="inline-flex flex-col items-start text-left">
        <span
          className={clsx(
            "font-serif uppercase font-normal transition-colors leading-none",
            sizeStyles[size].brand,
            isLight ? "text-offwhite" : "text-petroleo"
          )}
        >
          REVIVE
        </span>
        <span
          className={clsx(
            "font-sans uppercase font-medium transition-colors leading-none",
            sizeStyles[size].sub,
            isLight ? "text-dourado" : "text-dourado-dark"
          )}
        >
          ODONTOLOGIA ESPECIALIZADA
        </span>
      </div>
    </div>
  );
}
