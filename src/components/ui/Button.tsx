import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  target?: string;
  rel?: string;
  children: React.ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  className,
  children,
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-sans tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dourado focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none";

  const sizeClasses = {
    sm: "min-h-[44px] text-xs px-5 py-2.5 rounded-full tracking-editorial uppercase",
    md: "min-h-[48px] text-[13px] sm:text-sm px-6 py-3 rounded-full tracking-editorial uppercase",
    lg: "min-h-[52px] text-[13px] sm:text-sm md:text-base px-7 sm:px-8 py-3.5 sm:py-4 rounded-full tracking-editorial uppercase",
  };

  const variantClasses = {
    primary:
      "bg-petroleo text-offwhite hover:bg-petroleo-light active:bg-petroleo-dark shadow-sm hover:shadow-md",
    secondary:
      "bg-dourado text-grafite-dark hover:bg-dourado-light active:bg-dourado-dark font-medium shadow-sm",
    outline:
      "border border-petroleo/35 text-grafite hover:border-petroleo hover:text-petroleo hover:bg-cinza/40 transition-colors",
    ghost:
      "text-grafite hover:text-petroleo hover:bg-dourado/15 transition-colors",
  };

  const combinedClasses = twMerge(
    clsx(baseClasses, sizeClasses[size], variantClasses[variant], className)
  );

  if (href) {
    return (
      <a href={href} className={combinedClasses} {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
