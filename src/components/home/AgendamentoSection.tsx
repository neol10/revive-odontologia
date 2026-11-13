import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/constants/contact";

export function AgendamentoSection() {
  return (
    <section
      id="agendamento"
      className="relative w-full bg-verde-profundo overflow-hidden scroll-mt-12"
      aria-labelledby="agendamento-titulo"
    >
      <div id="contato" className="absolute -top-16 left-0" aria-hidden="true" />
      {/* Textura sutil: linhas diagonais imperceptíveis sobre o verde */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #D9C4A3 0px, #D9C4A3 1px, transparent 1px, transparent 60px)",
        }}
      />

      <Container size="narrow" className="relative z-10 py-16 sm:py-28 md:py-36 text-center">
        {/* Acento decorativo champagne */}
        <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
          <span className="h-[1px] w-10 sm:w-16 bg-champagne/60" />
          <span className="text-[10px] uppercase tracking-luxury font-sans font-medium text-champagne/80">
            Vizotto Odontologia
          </span>
          <span className="h-[1px] w-10 sm:w-16 bg-champagne/60" />
        </div>

        {/* Título principal */}
        <h2
          id="agendamento-titulo"
          className="font-serif text-[32px] sm:text-4xl md:text-5xl lg:text-6xl text-marfim font-normal leading-[1.12] tracking-tight mb-5 sm:mb-8"
        >
          Seu próximo sorriso{" "}
          <span className="italic text-champagne">começa aqui.</span>
        </h2>

        {/* Subtítulo */}
        <p className="font-sans text-base sm:text-lg text-marfim/85 font-light leading-relaxed max-w-md mx-auto mb-8 sm:mb-10">
          Entre em contato pelo WhatsApp e saiba mais sobre nossos atendimentos.
        </p>

        {/* CTA Principal */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto mb-6">
          <Button
            variant="secondary"
            size="lg"
            href={CONTACT_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[52px] tracking-luxury shadow-lg shadow-black/20 hover:shadow-champagne/20 text-center"
          >
            Agendar pelo WhatsApp
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="#especialidades"
            className="text-marfim/80 hover:text-champagne hover:bg-white/5 tracking-luxury w-full sm:w-auto min-h-[52px] text-center"
          >
            Ver Especialidades
          </Button>
        </div>

        {/* Indicação direta do canal */}
        <p className="text-xs font-sans text-marfim/50 tracking-wide">
          Atendimento via WhatsApp:{" "}
          <a
            href={CONTACT_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-champagne hover:underline"
          >
            {CONTACT_INFO.whatsapp.number}
          </a>
        </p>
      </Container>
    </section>
  );
}
