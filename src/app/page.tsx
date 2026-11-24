import React from "react";
import { SitePreloader } from "@/components/common/SitePreloader";
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/home/Hero";
import { ScrollCinematic } from "@/components/home/ScrollCinematic";
import { ClinicaSection } from "@/components/home/ClinicaSection";
import { EspecialidadesSection } from "@/components/home/EspecialidadesSection";
import { DiferenciaisSection } from "@/components/home/DiferenciaisSection";
import { AgendamentoSection } from "@/components/home/AgendamentoSection";
import { Footer } from "@/components/layout/Footer";
import { Container } from "@/components/ui/Container";
import { Typography } from "@/components/ui/Typography";

export default function HomePage() {
  return (
    <>
      {/* Pré-carregamento completo dos 192 frames e mídia do Hero antes de liberar o scroll */}
      <SitePreloader />

      {/* Header Premium com navegação e CTA */}
      <Header />

      <main className="min-h-screen bg-grafite">
        {/* Dobra 01: Hero Cinematográfico com vídeo de 8s e poster estático */}
        <Hero />

        {/* Transição Editorial Conectada */}
        <section
          id="filosofia"
          className="relative bg-offwhite text-grafite py-16 sm:py-24 md:py-28 border-t border-taupe/15"
        >
          <Container size="default" className="text-center">
            <span className="h-[1px] w-12 bg-dourado mx-auto block mb-5" />
            <Typography variant="eyebrow" className="text-petroleo mb-3 block">
              Filosofia & Propósito
            </Typography>
            <h2 className="font-serif text-[32px] sm:text-4xl md:text-5xl text-grafite font-normal max-w-2xl mx-auto mb-5 leading-[1.16] tracking-tight">
              Um novo capítulo para o seu sorriso.
            </h2>
            <Typography variant="subtitle" className="max-w-xl mx-auto text-taupe-dark font-light text-[15px] sm:text-lg leading-relaxed">
              Na Revive, acreditamos em um cuidado odontológico próximo, atento e humano.
            </Typography>
          </Container>
        </section>

        {/* Dobra 02: Experiência Cinematográfica Controlada pelo Scroll (GSAP + Canvas) */}
        <ScrollCinematic />

        {/* Seção A: Apresentação da Clínica */}
        <ClinicaSection />

        {/* Seção B: Especialidades */}
        <EspecialidadesSection />

        {/* Seção C: Diferenciais */}
        <DiferenciaisSection />

        {/* Seção D: Agendamento / Conversão */}
        <AgendamentoSection />
      </main>

      {/* Rodapé Institucional */}
      <Footer />
    </>
  );
}
