import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "h4"
  | "subtitle"
  | "body"
  | "body-large"
  | "caption"
  | "eyebrow";

export interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  as?: React.ElementType;
  variant?: TypographyVariant;
  serif?: boolean;
  children: React.ReactNode;
}

export function Typography({
  as,
  variant = "body",
  serif,
  className,
  children,
  ...props
}: TypographyProps) {
  // Define default HTML tag according to variant if 'as' is not specified
  const defaultTagMap: Record<TypographyVariant, React.ElementType> = {
    display: "h1",
    h1: "h1",
    h2: "h2",
    h3: "h3",
    h4: "h4",
    subtitle: "p",
    "body-large": "p",
    body: "p",
    caption: "span",
    eyebrow: "span",
  };

  const Component = as || defaultTagMap[variant] || "p";

  const isSerif =
    serif !== undefined
      ? serif
      : variant === "display" || variant === "h1" || variant === "h2" || variant === "h3";

  const variantClasses: Record<TypographyVariant, string> = {
    display: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal leading-[1.08] tracking-tight",
    h1: "text-3xl sm:text-4xl md:text-5xl font-normal leading-[1.15] tracking-tight",
    h2: "text-2xl sm:text-3xl md:text-4xl font-normal leading-[1.2] tracking-normal",
    h3: "text-xl sm:text-2xl md:text-3xl font-medium leading-[1.25]",
    h4: "text-lg sm:text-xl font-medium leading-snug",
    subtitle: "text-lg sm:text-xl font-light leading-relaxed text-taupe-dark",
    "body-large": "text-base sm:text-lg font-normal leading-relaxed",
    body: "text-sm sm:text-base font-light leading-relaxed text-grafite/90",
    caption: "text-xs sm:text-sm font-normal tracking-wide text-taupe",
    eyebrow: "text-xs uppercase tracking-luxury font-medium text-petroleo",
  };

  return (
    <Component
      className={twMerge(
        clsx(
          isSerif ? "font-serif" : "font-sans",
          variantClasses[variant],
          className
        )
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
