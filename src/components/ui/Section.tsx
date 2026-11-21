import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "compact" | "default" | "generous";
  bg?: "offwhite" | "cinza" | "petroleo" | "marfim" | "bege" | "areia" | "white" | "grafite" | "verde";
  children: React.ReactNode;
}

export function Section({
  spacing = "default",
  bg = "offwhite",
  className,
  children,
  ...props
}: SectionProps) {
  const spacingClasses = {
    none: "py-0",
    compact: "py-10 md:py-16",
    default: "py-16 md:py-24",
    generous: "py-24 md:py-36",
  };

  const bgClasses = {
    offwhite: "bg-offwhite text-grafite",
    cinza: "bg-cinza text-grafite",
    petroleo: "bg-petroleo text-offwhite",
    marfim: "bg-offwhite text-grafite",
    bege: "bg-bege text-grafite",
    areia: "bg-cinza text-grafite",
    white: "bg-white text-grafite",
    grafite: "bg-grafite text-offwhite",
    verde: "bg-petroleo text-offwhite",
  };

  return (
    <section
      className={twMerge(
        clsx("w-full transition-colors", spacingClasses[spacing], bgClasses[bg], className)
      )}
      {...props}
    >
      {children}
    </section>
  );
}
