import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface WordmarkProps extends React.HTMLAttributes<HTMLDivElement> {
  tone?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

/**
 * Wordmark provisória da Vizotto Odontologia.
 * Utiliza tipografia com serifas nobres (Playfair Display) e sans-serif geométrica (Plus Jakarta Sans)
 * com espaçamento editorial refinado, sem criar símbolos arbitrários ou distorcer a marca.
 */
export function Wordmark({
  tone = "dark",
  size = "md",
  className,
  ...props
}: WordmarkProps) {
  const isLight = tone === "light";

  const sizeStyles = {
    sm: {
      brand: "text-lg tracking-[0.2em]",
      sub: "text-[9px] tracking-[0.35em] mt-0.5",
    },
    md: {
      brand: "text-2xl sm:text-3xl tracking-[0.22em]",
      sub: "text-[11px] sm:text-xs tracking-[0.4em] mt-1",
    },
    lg: {
      brand: "text-3xl sm:text-4xl md:text-5xl tracking-[0.24em]",
      sub: "text-xs sm:text-sm tracking-[0.45em] mt-1.5",
    },
  };

  return (
    <div
      className={twMerge(
        clsx(
          "inline-flex flex-col items-center select-none text-center",
          className
        )
      )}
      aria-label="Vizotto Odontologia"
      {...props}
    >
      <span
        className={clsx(
          "font-serif uppercase font-normal transition-colors leading-none",
          sizeStyles[size].brand,
          isLight ? "text-marfim" : "text-grafite"
        )}
      >
        VIZOTTO
      </span>
      <span
        className={clsx(
          "font-sans uppercase font-medium transition-colors leading-none",
          sizeStyles[size].sub,
          isLight ? "text-champagne" : "text-taupe"
        )}
      >
        ODONTOLOGIA
      </span>
    </div>
  );
}
