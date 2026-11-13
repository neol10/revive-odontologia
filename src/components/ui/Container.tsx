import React from "react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "narrow" | "wide" | "full";
  children: React.ReactNode;
}

export function Container({
  size = "default",
  className,
  children,
  ...props
}: ContainerProps) {
  const sizeClasses = {
    narrow: "max-w-4xl",
    default: "max-w-6xl",
    wide: "max-w-7xl",
    full: "max-w-full",
  };

  return (
    <div
      className={twMerge(
        clsx(
          "mx-auto w-full px-5 sm:px-8 md:px-12",
          sizeClasses[size],
          className
        )
      )}
      {...props}
    >
      {children}
    </div>
  );
}
