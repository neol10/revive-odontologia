import React from "react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/constants/contact";

/**
 * SEÇÃO A — APRESENTAÇÃO DA CLÍNICA & CORPO CLÍNICO
 *
 * Revive Odontologia Especializada — Mogi-Guaçu / SP.
 * Exibe exclusivamente informações institucionais confirmadas.
 *
 * PENDÊNCIA DE MÍDIA DOCUMENTADA:
 * A fotografia /assets/clinica/a-clinica.png pertence à clínica anterior (Vizotto)
 * e foi removida desta seção para evitar atribuição incorreta de imagem.
 * O bloco visual editorial apresenta a identidade oficial da Revive e o corpo clínico
 * confirmado até o envio das fotografias reais da clínica e dos profissionais.
 */

export function ClinicaSection() {
  return (
    <section
      id="clinica"
      className="relative w-full bg-offwhite-dark overflow-hidden py-16 sm:py-24 md:py-32 border-t border-taupe/15"
      aria-labelledby="clinica-titulo"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Bloco de Texto — Esquerda no desktop */}
          <div className="flex flex-col order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="h-[1px] w-8 bg-dourado" />
              <span className="text-[11px] uppercase tracking-luxury font-sans font-medium text-petroleo">
                A Clínica
              </span>
            </div>

            {/* Título editorial */}
            <h2
              id="clinica-titulo"
              className="font-serif text-[32px] sm:text-4xl lg:text-5xl text-grafite font-normal leading-[1.15] tracking-tight mb-6"
            >
              Um novo olhar{" "}
              <span className="italic text-petroleo">para o seu sorriso.</span>
            </h2>

            {/* Texto institucional */}
            <div className="space-y-4 mb-8">
              <p className="font-sans text-base sm:text-lg text-taupe-deep font-normal leading-relaxed">
                Na Revive Odontologia Especializada, cada sorriso merece atenção,
                respeito e cuidado individualizado.
              </p>
              <p className="font-sans text-base sm:text-lg text-taupe-deep font-normal leading-relaxed">
                Em {CONTACT_INFO.brand.cityDisplay}, conduzimos cada etapa do
                atendimento com escuta ativa, transparência e proximidade.
              </p>
            </div>

            {/* CTA Contextual */}
            <div>
              <Button
                variant="primary"
                size="lg"
                href={CONTACT_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto tracking-luxury text-center min-h-[48px] sm:min-h-[52px]"
              >
                Agendar Avaliação
              </Button>
            </div>
          </div>

          {/* Bloco Visual Editorial — Direita no desktop (substitui foto da clínica anterior) */}
          <div className="relative order-1 lg:order-2">
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-xl shadow-grafite/10 bg-petroleo text-offwhite flex flex-col justify-between p-8 sm:p-10 md:p-12"
              style={{ aspectRatio: "4 / 5" }}
            >
              {/* Detalhe sutil de luz */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full bg-dourado/10 blur-3xl"
              />

              {/* Topo: Monograma oficial e localização */}
              <div className="relative z-10 flex items-center justify-between gap-4 border-b border-offwhite/15 pb-6">
                <div className="w-12 h-12 rounded-full bg-offwhite/95 ring-1 ring-dourado/40 flex items-center justify-center overflow-hidden shrink-0">
                  <img
                    src="/assets/brand/logo-transparent.png"
                    alt="Monograma oficial Revive Odontologia Especializada"
                    className="w-full h-full object-contain scale-110"
                    decoding="async"
                  />
                </div>
                <span className="text-[11px] uppercase tracking-luxury font-sans text-dourado text-right">
                  {CONTACT_INFO.brand.cityDisplay}
                </span>
              </div>

              {/* Centro: Mensagem institucional */}
              <div className="relative z-10 my-auto py-8">
                <span className="h-[1px] w-10 bg-dourado block mb-5" />
                <p className="font-serif text-2xl sm:text-3xl text-offwhite font-normal leading-snug mb-3">
                  {CONTACT_INFO.brand.name}
                </p>
                <p className="font-sans text-sm sm:text-base text-offwhite/75 font-light leading-relaxed">
                  Atendimento odontológico pautado por cuidado humano e
                  planejamento individualizado.
                </p>
              </div>

              {/* Base: Corpo Clínico Confirmado */}
              <div className="relative z-10 border-t border-offwhite/15 pt-6">
                <span className="text-[10px] uppercase tracking-luxury font-sans text-dourado/85 block mb-4">
                  Corpo Clínico
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {CONTACT_INFO.professionals.map((professional) => (
                    <div
                      key={professional.cro}
                      className="rounded-xl bg-petroleo-dark/60 border border-offwhite/10 px-4 py-3.5"
                    >
                      <p className="font-serif text-base sm:text-lg text-offwhite font-normal leading-tight">
                        {professional.name}
                      </p>
                      <p className="font-sans text-xs text-dourado tracking-wide mt-1">
                        {professional.cro}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Detalhe decorativo — blocos deslocados na paleta Revive */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-dourado/20 -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-cinza/80 -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
