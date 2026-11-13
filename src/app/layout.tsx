import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "@/styles/globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vizotto Odontologia | Experiência e Cuidado Especial",
  description:
    "Clínica odontológica de alto padrão dedicada à saúde, estética do sorriso e bem-estar, unindo precisão técnica, acolhimento humanizado e conforto.",
  metadataBase: new URL("https://vizotto-odontologia.vercel.app"),
  openGraph: {
    title: "Vizotto Odontologia | Cuidado que Inspira Confiança",
    description:
      "Atendimento odontológico personalizado em ambiente acolhedor e sofisticado.",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#263C35",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${plusJakarta.variable}`}>
      <body className="font-sans bg-marfim text-grafite antialiased">
        {children}
      </body>
    </html>
  );
}
