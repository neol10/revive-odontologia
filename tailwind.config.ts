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
        // Tokens Semânticos Oficiais — Revive Odontologia Especializada
        petroleo: {
          DEFAULT: "#174B59", // Azul-petróleo oficial
          core: "#0D4756",    // Azul-petróleo profundo extraído da logo
          light: "#216375",
          dark: "#0F3540",
        },
        dourado: {
          DEFAULT: "#B6A16A", // Dourado suave oficial
          core: "#AF9F75",    // Dourado extraído da logo
          light: "#C9B785",
          dark: "#96824E",
        },
        offwhite: {
          DEFAULT: "#F8F7F4", // Off-white principal
          light: "#FCFBF9",
          dark: "#F1EFEA",
        },
        cinza: {
          DEFAULT: "#E5E5E5", // Cinza claro institucional
          logo: "#D9D9D9",    // Fundo original da logo
          light: "#EFEFEF",
          dark: "#D4D4D4",
        },
        // Mapeamento de compatibilidade estrutural para preservar componentes existentes
        bege: {
          DEFAULT: "#F1EFEA", // Superfície secundária acolhedora (Off-white suave)
          light: "#F8F7F4",
          dark: "#E5E5E5",
        },
        marfim: {
          DEFAULT: "#F8F7F4", // Superfície principal (Off-white Revive)
          quente: "#F8F7F4",
          light: "#FCFBF9",
          dark: "#F1EFEA",
        },
        areia: {
          DEFAULT: "#E5E5E5", // Superfície alternada (Cinza claro Revive)
          light: "#F1EFEA",
          dark: "#D9D9D9",
        },
        champagne: {
          DEFAULT: "#B6A16A", // Acento nobre (Dourado suave Revive)
          light: "#C9B785",
          dark: "#96824E",
        },
        taupe: {
          DEFAULT: "#6E767B", // Apoio neutro frio
          light: "#9AA1A6",
          dark: "#495055",
          deep: "#363B3F",
        },
        grafite: {
          DEFAULT: "#24282B", // Grafite oficial Revive
          light: "#363B3F",
          dark: "#171A1C",
        },
        verde: {
          profundo: "#174B59", // Mapeado para Azul-petróleo Revive
          light: "#216375",
          dark: "#0F3540",
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
