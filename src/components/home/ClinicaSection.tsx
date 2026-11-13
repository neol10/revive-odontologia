import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/constants/contact";

/**
 * SEÇÃO A — APRESENTAÇÃO DA CLÍNICA
 *
 * ⚠️ CONTEÚDO PROVISÓRIO:
 * O texto institucional abaixo é um placeholder editorial neutro.
 * Deve ser substituído pelo conteúdo oficial aprovado pela Vizotto Odontologia
 * antes da publicação em produção.
 *
 * ⚠️ FOTOGRAFIA PENDENTE:
 * O bloco visual à direita (desktop) / topo (mobile) aguarda
 * fotografia real do ambiente da clínica.
 */

export function ClinicaSection() {
  return (
    <section
      id="clinica"
      className="relative w-full bg-bege overflow-hidden py-16 sm:py-24 md:py-32 border-t border-taupe/15"
      aria-labelledby="clinica-titulo"
    >
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Bloco de Texto — Esquerda no desktop */}
          <div className="flex flex-col order-2 lg:order-1">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-4 sm:mb-5">
              <span className="h-[1px] w-8 bg-champagne-dark" />
              <span className="text-[11px] uppercase tracking-luxury font-sans font-medium text-taupe-dark">
                A Clínica
              </span>
            </div>

            {/* Título editorial */}
            <h2
              id="clinica-titulo"
              className="font-serif text-[32px] sm:text-4xl lg:text-5xl text-grafite font-normal leading-[1.15] tracking-tight mb-6"
            >
              Um espaço pensado para{" "}
              <span className="italic">o seu bem-estar.</span>
            </h2>

            {/* Texto institucional */}
            <div className="space-y-4 mb-8">
              <p className="font-sans text-base sm:text-lg text-taupe-deep font-normal leading-relaxed">
                Na Vizotto Odontologia, cada detalhe foi pensado para proporcionar uma experiência de cuidado genuíno — desde o primeiro contato até o acompanhamento do seu tratamento.
              </p>
              <p className="font-sans text-base sm:text-lg text-taupe-deep font-normal leading-relaxed">
                Acreditamos que um sorriso saudável transforma vidas, e que o caminho até ele deve ser tão confortável quanto o resultado.
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

          {/* Bloco Visual — Direita no desktop com fotografia real da clínica */}
          <div className="relative order-1 lg:order-2">
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-xl shadow-grafite/10 bg-areia/30"
              style={{ aspectRatio: "4 / 5" }}
            >
              <Image
                src="/assets/clinica/a-clinica.png"
                alt="Ambiente acolhedor e consultório da Vizotto Odontologia"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
                className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
              />
            </div>

            {/* Detalhe decorativo — blocos quentes deslocados */}
            <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 rounded-xl bg-champagne/25 -z-10" />
            <div className="absolute -top-4 -right-4 w-16 h-16 sm:w-20 sm:h-20 rounded-xl bg-areia/60 -z-10" />
          </div>
        </div>
      </Container>
    </section>
  );
}
