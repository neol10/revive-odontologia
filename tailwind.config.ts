import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bege: {
          DEFAULT: "#F0E9DF", // Bege principal
          light: "#F7F1E8",
          dark: "#E8DDCF",
        },
        marfim: {
          DEFAULT: "#F7F1E8", // Marfim quente
          quente: "#F7F1E8",
          light: "#FAF8F4",
          dark: "#F0E9DF",
        },
        areia: {
          DEFAULT: "#E8DDCF", // Areia suave
          light: "#F0E9DF",
          dark: "#DFD2C2",
        },
        champagne: {
          DEFAULT: "#D9C4A3",
          light: "#E4D4BC",
          dark: "#C7AF8A",
        },
        taupe: {
          DEFAULT: "#A59683",
          light: "#B8ABA0",
          dark: "#6E5D4C",
          deep: "#544638",
        },
        grafite: {
          DEFAULT: "#262724",
          light: "#3A3B37",
          dark: "#1A1A18",
        },
        verde: {
          profundo: "#263C35",
          light: "#345047",
          dark: "#1A2B25",
        },
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "serif"],
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
      letterSpacing: {
        editorial: "0.08em",
        luxury: "0.15em",
        tightest: "-0.04em",
      },
    },
  },
  plugins: [],
};

export default config;
