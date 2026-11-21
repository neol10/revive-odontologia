import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/constants/contact";

export function AgendamentoSection() {
  return (
    <section
      id="agendamento"
      className="relative w-full bg-petroleo-dark overflow-hidden scroll-mt-12 border-t border-offwhite/10"
      aria-labelledby="agendamento-titulo"
    >
      <div id="contato" className="absolute -top-16 left-0" aria-hidden="true" />
      {/* Textura sutil: linhas diagonais imperceptíveis sobre o azul-petróleo */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage:
            "repeating-linear-gradient(135deg, #B6A16A 0px, #B6A16A 1px, transparent 1px, transparent 60px)",
        }}
      />

      <Container size="narrow" className="relative z-10 py-16 sm:py-28 md:py-36 text-center">
        {/* Acento decorativo dourado */}
        <div className="flex items-center justify-center gap-4 mb-6 sm:mb-8">
          <span className="h-[1px] w-10 sm:w-16 bg-dourado/65" />
          <span className="text-[10px] uppercase tracking-luxury font-sans font-medium text-dourado/90">
            Revive Odontologia Especializada
          </span>
          <span className="h-[1px] w-10 sm:w-16 bg-dourado/65" />
        </div>

        {/* Título principal */}
        <h2
          id="agendamento-titulo"
          className="font-serif text-[32px] sm:text-4xl md:text-5xl lg:text-6xl text-offwhite font-normal leading-[1.12] tracking-tight mb-5 sm:mb-8"
        >
          Seu novo sorriso{" "}
          <span className="italic text-dourado-light">começa aqui.</span>
        </h2>

        {/* Subtítulo */}
        <p className="font-sans text-base sm:text-lg text-offwhite/85 font-light leading-relaxed max-w-md mx-auto mb-8 sm:mb-10">
          Entre em contato pelo WhatsApp e saiba mais sobre nossos atendimentos
          em {CONTACT_INFO.brand.cityDisplay}.
        </p>

        {/* CTA Principal */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 w-full sm:w-auto max-w-sm sm:max-w-none mx-auto mb-6">
          <Button
            variant="secondary"
            size="lg"
            href={CONTACT_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[52px] tracking-luxury shadow-lg shadow-black/20 hover:shadow-dourado/25 text-center"
          >
            Agendar Avaliação
          </Button>
          <Button
            variant="ghost"
            size="lg"
            href="#clinica"
            className="text-offwhite/80 hover:text-dourado hover:bg-offwhite/5 tracking-luxury w-full sm:w-auto min-h-[52px] text-center"
          >
            Conheça a Clínica
          </Button>
        </div>

        {/* Indicação direta do canal */}
        <p className="text-xs font-sans text-offwhite/55 tracking-wide">
          Atendimento via WhatsApp:{" "}
          <a
            href={CONTACT_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-dourado hover:underline"
          >
            {CONTACT_INFO.whatsapp.display}
          </a>
        </p>
      </Container>
    </section>
  );
}
