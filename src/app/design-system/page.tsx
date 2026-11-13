import type { Metadata } from "next";
import React from "react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { Typography } from "@/components/ui/Typography";
import { Button } from "@/components/ui/Button";
import { Wordmark } from "@/components/common/Wordmark";

export const metadata: Metadata = {
  title: "Design System & Guia de Estilo | Vizotto Odontologia",
  description: "Área interna de documentação técnica e visual da Vizotto Odontologia.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function DesignSystemPage() {
  const colorPalette = [
    { name: "Bege Principal", hex: "#F0E9DF", token: "bg-bege", text: "text-grafite", border: "border-taupe/30", role: "Superfície da Clínica" },
    { name: "Marfim Quente", hex: "#F7F1E8", token: "bg-marfim", text: "text-grafite", border: "border-taupe/30", role: "Superfície Principal" },
    { name: "Areia Suave", hex: "#E8DDCF", token: "bg-areia", text: "text-grafite", border: "border-taupe/30", role: "Superfície Alternada" },
    { name: "Champagne", hex: "#D9C4A3", token: "bg-champagne", text: "text-grafite", border: "border-taupe/30", role: "Detalhes & Acentos" },
    { name: "Taupe", hex: "#A59683", token: "bg-taupe", text: "text-white", border: "border-transparent", role: "Apoio & Subtítulos" },
    { name: "Grafite", hex: "#262724", token: "bg-grafite", text: "text-marfim", border: "border-transparent", role: "Texto Principal & Contraste" },
    { name: "Verde Profundo", hex: "#263C35", token: "bg-verde-profundo", text: "text-marfim", border: "border-transparent", role: "Ação & Identidade Nobre" },
  ];

  return (
    <main className="min-h-screen bg-marfim text-grafite flex flex-col">
      {/* Topo / Barra de Validação */}
      <header className="border-b border-taupe/20 bg-marfim/80 backdrop-blur-sm py-5">
        <Container size="wide" className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-verde-profundo animate-pulse" />
            <Typography variant="caption" className="tracking-luxury uppercase text-taupe-dark">
              Área Interna — Documentação Visual & Tokens
            </Typography>
          </div>
          <Wordmark size="sm" />
        </Container>
      </header>

      {/* Bloco 1: Wordmark Provisória */}
      <Section spacing="default" bg="marfim">
        <Container size="default">
          <div className="mb-8 text-center sm:text-left">
            <Typography variant="eyebrow" className="mb-2 block">
              01. Identidade Tipográfica Provisória
            </Typography>
            <Typography variant="h2" className="mb-3">
              Wordmark Institucional
            </Typography>
            <Typography variant="body" className="max-w-2xl text-taupe-dark">
              Tipografia com serifas nobres equilibrada com sans-serif geométrica em proporções editoriais,
              preservando a seriedade da clínica sem criação de símbolos não-oficiais.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-10 rounded-2xl bg-bege border border-taupe/20 flex flex-col items-center justify-center min-h-[180px] shadow-sm">
              <Wordmark size="lg" tone="dark" />
              <Typography variant="caption" className="mt-6 text-taupe-dark">
                Aplicação em Fundo Claro (Bege / Marfim)
              </Typography>
            </div>

            <div className="p-10 rounded-2xl bg-verde-profundo flex flex-col items-center justify-center min-h-[180px] shadow-sm">
              <Wordmark size="lg" tone="light" />
              <Typography variant="caption" className="mt-6 text-champagne/80">
                Aplicação em Fundo Nobre (Verde Profundo / Grafite)
              </Typography>
            </div>
          </div>
        </Container>
      </Section>

      {/* Bloco 2: Paleta de Cores Oficial */}
      <Section spacing="default" bg="marfim" className="border-t border-taupe/15">
        <Container size="default">
          <div className="mb-8">
            <Typography variant="eyebrow" className="mb-2 block">
              02. Sistema de Cores
            </Typography>
            <Typography variant="h2" className="mb-3">
              Paleta Aprovada
            </Typography>
            <Typography variant="body" className="max-w-2xl text-taupe-dark">
              Tons terrosos, superfícies quentes acolhedoras (bege, marfim e areia) e verde profundo que transmitem acolhimento e sofisticação
              com contrastes em conformidade WCAG.
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
      <footer className="mt-auto border-t border-taupe/20 bg-grafite text-marfim py-8">
        <Container size="wide" className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <Typography variant="caption" className="text-taupe-light">
            Vizotto Odontologia — Documentação do Design System Interno.
          </Typography>
          <Button variant="outline" size="sm" href="/" className="text-marfim border-white/30 hover:border-white">
            ← Voltar para o Site Oficial
          </Button>
        </Container>
      </footer>
    </main>
  );
}
