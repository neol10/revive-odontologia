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
  title: "Revive Odontologia Especializada | Mogi-Guaçu, SP",
  description:
    "Conheça a Revive Odontologia Especializada em Mogi-Guaçu, SP. Entre em contato com nossa equipe e saiba mais sobre nossos atendimentos.",
  openGraph: {
    title: "Revive Odontologia Especializada",
    description: "Cuidado odontológico e atendimento em Mogi-Guaçu, São Paulo.",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#174B59",
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
      <body className="font-sans bg-offwhite text-grafite antialiased">
        {children}
      </body>
    </html>
  );
}
