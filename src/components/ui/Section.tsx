import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  spacing?: "none" | "compact" | "default" | "generous";
  bg?: "marfim" | "bege" | "areia" | "white" | "grafite" | "verde";
  children: React.ReactNode;
}

export function Section({
  spacing = "default",
  bg = "marfim",
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
    marfim: "bg-marfim text-grafite",
    bege: "bg-bege text-grafite",
    areia: "bg-areia text-grafite",
    white: "bg-white text-grafite",
    grafite: "bg-grafite text-marfim",
    verde: "bg-verde-profundo text-marfim",
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
