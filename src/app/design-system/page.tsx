import type { Metadata } from "next";
import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/common/Wordmark";

export const metadata: Metadata = {
  title: "Design System & Guia de Estilo | Revive Odontologia Especializada",
  description: "Área interna de documentação técnica e visual da Revive Odontologia Especializada.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemPage() {
  const colorPalette = [
    { name: "Azul-Petróleo", hex: "#174B59", token: "bg-petroleo", text: "text-offwhite", border: "border-transparent", role: "Identidade Nobre & CTAs Primários" },
    { name: "Petróleo Core (Logo)", hex: "#0D4756", token: "bg-petroleo-core", text: "text-offwhite", border: "border-transparent", role: "Traço Original da Letra R" },
    { name: "Dourado Suave", hex: "#B6A16A", token: "bg-dourado", text: "text-grafite", border: "border-taupe/20", role: "Acentos, Filetes & CTAs Secundários" },
    { name: "Dourado Core (Logo)", hex: "#AF9F75", token: "bg-dourado-core", text: "text-grafite", border: "border-taupe/20", role: "Traço Original do Símbolo Dental" },
    { name: "Off-White", hex: "#F8F7F4", token: "bg-offwhite", text: "text-grafite", border: "border-taupe/30", role: "Superfície Principal Luminosa" },
    { name: "Cinza Claro", hex: "#E5E5E5", token: "bg-cinza", text: "text-grafite", border: "border-taupe/30", role: "Superfície Alternada & Bordas" },
    { name: "Grafite", hex: "#24282B", token: "bg-grafite", text: "text-offwhite", border: "border-transparent", role: "Texto Principal & Contraste Profundo" },
  ];

  return (
    <main className="min-h-screen bg-offwhite text-grafite flex flex-col">
      {/* Topo / Barra de Validação */}
      <header className="border-b border-taupe/20 bg-offwhite/90 backdrop-blur-sm py-5">
        <Container size="wide" className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-petroleo animate-pulse" />
            <Typography variant="caption" className="tracking-luxury uppercase text-taupe-dark">
              Área Interna — Documentação Visual & Tokens Revive
            </Typography>
          </div>
          <Wordmark size="sm" />
        </Container>
      </header>

      {/* Bloco 1: Identidade Oficial & Monograma Original */}
      <Section spacing="default" bg="offwhite">
        <Container size="default">
          <div className="mb-8 text-center sm:text-left">
            <Typography variant="eyebrow" className="mb-2 block">
              01. Identidade Oficial & Monograma
            </Typography>
            <Typography variant="h2" className="mb-3">
              Logo Oficial & Wordmark Revive
            </Typography>
            <Typography variant="body" className="max-w-2xl text-taupe-dark">
              Preservação 1:1 do monograma oficial (símbolo do dente em dourado suave integrado à letra R em azul-petróleo)
              combinado com tipografia editorial em Playfair Display e Plus Jakarta Sans.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-2xl bg-[#D9D9D9] border border-taupe/20 flex flex-col items-center justify-center min-h-[200px] shadow-sm">
              <img
                src="/assets/brand/logo.jpg"
                alt="Arquivo original logo.jpg da Revive Odontologia Especializada"
                className="w-24 h-24 object-contain rounded-lg"
              />
              <Typography variant="caption" className="mt-4 text-grafite font-medium text-center">
                Arquivo Original (logo.jpg • 150×150)
              </Typography>
            </div>

            <div className="p-8 rounded-2xl bg-offwhite border border-taupe/20 flex flex-col items-center justify-center min-h-[200px] shadow-sm">
              <Wordmark size="md" tone="dark" />
              <Typography variant="caption" className="mt-6 text-taupe-dark text-center">
                Aplicação em Superfície Clara (Off-White #F8F7F4)
              </Typography>
            </div>

            <div className="p-8 rounded-2xl bg-petroleo flex flex-col items-center justify-center min-h-[200px] shadow-sm">
              <Wordmark size="md" tone="light" />
              <Typography variant="caption" className="mt-6 text-dourado/90 text-center">
                Aplicação em Fundo Nobre (Azul-Petróleo #174B59)
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bloco 2: Paleta de Cores Oficial */}
      <Section spacing="default" bg="offwhite" className="border-t border-taupe/15">
        <Container size="default">
          <div className="mb-8">
            <Typography variant="eyebrow" className="mb-2 block">
              02. Sistema de Cores
            </Typography>
            <Typography variant="h2" className="mb-3">
              Paleta Institucional Revive
            </Typography>
            <Typography variant="body" className="max-w-2xl text-taupe-dark">
              Harmonia entre o Azul-Petróleo (#174B59 / #0D4756), Dourado Suave (#B6A16A / #AF9F75),
              superfícies luminosas em Off-White (#F8F7F4), Cinza Claro (#E5E5E5) e Grafite (#24282B).
            </Typography>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3.5">
            {colorPalette.map((color) => (
              <div
                key={color.name}
                className="flex flex-col rounded-xl overflow-hidden border border-taupe/20 bg-bege shadow-sm"
              >
                <div
                  className={`h-28 w-full ${color.token} ${color.border} flex items-end p-3`}
                >
                  <span className={`text-xs font-mono font-medium ${color.text}`}>
                    {color.hex}
                  </span>
                </div>
                <div className="p-3 bg-marfim flex flex-col">
                  <span className="font-sans font-medium text-xs sm:text-sm text-grafite leading-tight">
                    {color.name}
                  </span>
                  <span className="text-[10px] text-taupe mt-0.5 leading-tight">
                    {color.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Bloco 3: Tipografia */}
      <Section spacing="default" bg="marfim" className="border-t border-taupe/15">
        <Container size="default">
          <div className="mb-8">
            <Typography variant="eyebrow" className="mb-2 block">
              03. Sistema Tipográfico
            </Typography>
            <Typography variant="h2" className="mb-3">
              Hierarquia Editorial
            </Typography>
            <Typography variant="body" className="max-w-2xl text-taupe-dark">
              Harmonia entre Playfair Display para elegância clássica e Plus Jakarta Sans para clareza e precisão.
            </Typography>
          </div>

          <div className="space-y-8 bg-bege/80 p-6 sm:p-10 rounded-2xl border border-taupe/20">
            <div>
              <Typography variant="caption" className="text-taupe-dark uppercase tracking-editorial block mb-1">
                Display (Playfair Display)
              </Typography>
              <Typography variant="display">
                O cuidado e a arte do sorriso.
              </Typography>
            </div>

            <div className="border-t border-taupe/15 pt-6">
              <Typography variant="caption" className="text-taupe-dark uppercase tracking-editorial block mb-1">
                Título H1 (Playfair Display)
              </Typography>
              <Typography variant="h1">
                Excelência clínica e acolhimento humano.
              </Typography>
            </div>

            <div className="border-t border-taupe/15 pt-6">
              <Typography variant="caption" className="text-taupe-dark uppercase tracking-editorial block mb-1">
                Título H2 (Playfair Display)
              </Typography>
              <Typography variant="h2">
                Tratamentos pensados para a sua individualidade.
              </Typography>
            </div>

            <div className="border-t border-taupe/15 pt-6">
              <Typography variant="caption" className="text-taupe-dark uppercase tracking-editorial block mb-1">
                Subtítulo (Plus Jakarta Sans)
              </Typography>
              <Typography variant="subtitle">
                Ambiente sereno e tecnologia diagnóstica precisa, projetados para transformar sua visita ao dentista.
              </Typography>
            </div>

            <div className="border-t border-taupe/15 pt-6">
              <Typography variant="caption" className="text-taupe-dark uppercase tracking-editorial block mb-1">
                Corpo de Texto (Plus Jakarta Sans)
              </Typography>
              <Typography variant="body">
                Compreendemos que cada sorriso possui uma história única. Nossa abordagem combina rigor científico,
                avaliação minuciosa e conforto para proporcionar uma experiência tranquila e resultados duradouros.
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bloco 4: Componentes Fundamentais */}
      <Section spacing="default" bg="areia" className="border-t border-taupe/15">
        <Container size="default">
          <div className="mb-8">
            <Typography variant="eyebrow" className="mb-2 block">
              04. Componentes Fundamentais
            </Typography>
            <Typography variant="h2" className="mb-3">
              Botões e Variantes Interativas
            </Typography>
            <Typography variant="body" className="max-w-2xl text-taupe-dark">
              Controles desenhados para interação tátil acessível, com foco e estados definidos.
            </Typography>
          </div>

          <div className="bg-marfim p-6 sm:p-10 rounded-2xl border border-taupe/20 space-y-6">
            <div>
              <Typography variant="caption" className="text-taupe-dark uppercase tracking-editorial block mb-3">
                Variantes de Ação
              </Typography>
              <div className="flex flex-wrap gap-4 items-center">
                <Button variant="primary">Agendar Consulta</Button>
                <Button variant="secondary">Conheça o Espaço</Button>
                <Button variant="outline">Ver Especialidades</Button>
                <Button variant="ghost">Saiba Mais →</Button>
              </div>
            </div>

            <div className="border-t border-taupe/15 pt-6">
              <Typography variant="caption" className="text-taupe-dark uppercase tracking-editorial block mb-3">
                Escala de Tamanhos (Tátil / Desktop)
              </Typography>
              <div className="flex flex-wrap items-center gap-4">
                <Button variant="primary" size="sm">Pequeno (sm)</Button>
                <Button variant="primary" size="md">Médio (md - Padrão)</Button>
                <Button variant="primary" size="lg">Grande (lg)</Button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Rodapé da Validação */}
      <footer className="mt-auto border-t border-taupe/20 bg-grafite text-offwhite py-8">
        <Container size="wide" className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <Typography variant="caption" className="text-taupe-light">
            Revive Odontologia Especializada — Documentação do Design System Interno.
          </Typography>
          <Button variant="outline" size="sm" href="/" className="text-offwhite border-white/30 hover:border-white hover:text-white">
            ← Voltar para o Site Oficial
          </Button>
        </Container>
      </footer>
    </main>
  );
}
