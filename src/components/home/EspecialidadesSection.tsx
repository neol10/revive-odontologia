import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO, getWhatsAppLink } from "@/constants/contact";

/**
 * SEÇÃO B — ESPECIALIDADES
 *
 * Atualizado com fotografias editoriais oficiais (Ajuste 05.3).
 */

const FEATURED_SPECIALTIES = [
  {
    id: "ortodontia",
    eyebrow: "Alinhamento & Função",
    title: "Ortodontia",
    description:
      "Tratamentos que harmonizam a função e a estética, adaptados ao seu estilo de vida e ao ritmo do seu sorriso.",
    imageSrc: "/assets/especialidades/ortodontia.jpg",
    imageAlt: "Tratamento ortodôntico e alinhamento do sorriso",
    textSide: "right" as const,
    whatsappMessage: "Olá! Gostaria de agendar uma consulta de Ortodontia na Vizotto Odontologia.",
  },
  {
    id: "implantodontia",
    eyebrow: "Reabilitação Oral",
    title: "Implantodontia",
    description:
      "Soluções modernas para a reabilitação oral, com planejamento individualizado e foco no resultado natural e duradouro.",
    imageSrc: "/assets/especialidades/implante-dentario.jpg",
    imageAlt: "Tratamento de implantodontia e reabilitação oral",
    textSide: "left" as const,
    whatsappMessage: "Olá! Gostaria de agendar uma consulta de Implantodontia na Vizotto Odontologia.",
  },
];

const OTHER_SPECIALTIES = [
  { number: "03", name: "Periodontia" },
  { number: "04", name: "Endodontia" },
  { number: "05", name: "Cirurgia Bucomaxilo" },
  { number: "06", name: "Odontopediatria" },
  { number: "07", name: "Dentística" },
  { number: "08", name: "Estética" },
  { number: "09", name: "Harmonização Facial" },
  { number: "10", name: "Prótese Dental" },
  { number: "11", name: "Clínica Geral" },
  { number: "12", name: "Disfunção Temporomandibular (DTM/ATM)" },
];

export function EspecialidadesSection() {
  return (
    <section
      id="especialidades"
      className="relative w-full overflow-hidden"
      aria-labelledby="especialidades-titulo"
    >
      {/* Cabeçalho da Seção */}
      <div className="bg-marfim py-16 sm:py-24 md:py-28 border-t border-taupe/15">
        <Container size="default" className="text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="h-[1px] w-8 bg-champagne-dark" />
            <span className="text-[11px] uppercase tracking-luxury font-sans font-medium text-taupe-dark">
              Especialidades
            </span>
            <span className="h-[1px] w-8 bg-champagne-dark" />
          </div>

          <h2
            id="especialidades-titulo"
            className="font-serif text-[32px] sm:text-4xl md:text-5xl text-grafite font-normal leading-[1.15] tracking-tight max-w-2xl mx-auto mb-5"
          >
            Tratamentos que respeitam a sua{" "}
            <span className="italic">individualidade.</span>
          </h2>

          <p className="font-sans text-base text-taupe-dark font-light leading-relaxed max-w-xl mx-auto">
            Cada pessoa carrega uma história única. Nossos tratamentos são
            planejados para acompanhar a sua.
          </p>
        </Container>
      </div>

      {/* Especialidades em Destaque — Layout Alternado com Marfim e Areia */}
      {FEATURED_SPECIALTIES.map((specialty, index) => (
        <div
          key={specialty.id}
          className={`py-14 sm:py-20 md:py-24 ${
            index % 2 === 0 ? "bg-marfim" : "bg-areia"
          } border-t border-taupe/15`}
        >
          <Container size="wide">
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                specialty.textSide === "left" ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Bloco de Texto */}
              <div
                className={`flex flex-col ${
                  specialty.textSide === "left"
                    ? "order-2 lg:order-2"
                    : "order-2 lg:order-1"
                }`}
              >
                {/* Número + Eyebrow */}
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <span className="font-serif text-5xl text-champagne font-normal leading-none select-none">
                    0{index + 1}
                  </span>
                  <div className="flex flex-col">
                    <span className="h-[1px] w-6 bg-champagne-dark mb-1" />
                    <span className="text-[11px] uppercase tracking-luxury font-sans font-medium text-taupe-dark">
                      {specialty.eyebrow}
                    </span>
                  </div>
                </div>

                <h3 className="font-serif text-[30px] sm:text-3xl lg:text-4xl text-grafite font-normal leading-tight mb-4 sm:mb-5">
                  {specialty.title}
                </h3>

                <p className="font-sans text-base sm:text-lg text-taupe-deep font-normal leading-relaxed mb-6 sm:mb-8 max-w-md">
                  {specialty.description}
                </p>

                <div>
                  <a
                    href={getWhatsAppLink(specialty.whatsappMessage)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-2 text-[15px] sm:text-base font-sans font-medium text-grafite hover:text-verde-profundo transition-colors duration-200 group"
                    aria-label={`Agendar consulta de ${specialty.title} via WhatsApp`}
                  >
                    <span>Agendar Consulta</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Bloco Visual com Fotografia Editorial */}
              <div
                className={
                  specialty.textSide === "left"
                    ? "order-1 lg:order-1"
                    : "order-1 lg:order-2"
                }
              >
                <div
                  className="relative w-full rounded-2xl overflow-hidden shadow-lg shadow-grafite/8 bg-areia/20"
                  style={{ aspectRatio: "3 / 4" }}
                >
                  <Image
                    src={specialty.imageSrc}
                    alt={specialty.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 hover:scale-[1.02]"
                  />
                </div>
              </div>
            </div>
          </Container>
        </div>
      ))}

      {/* Lista Restante das Especialidades */}
      <div className="bg-marfim py-16 sm:py-20 border-t border-taupe/15">
        <Container size="default">
          {/* Confirmação dos atendimentos */}
          <div className="text-[11px] text-taupe-dark border border-taupe/20 bg-bege/70 rounded px-3 py-2 font-mono leading-relaxed mb-8 sm:mb-10 text-center">
            ✓ Lista oficial dos atendimentos e especialidades da Vizotto Odontologia.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-taupe/20 bg-bege/70 rounded-2xl overflow-hidden">
            {OTHER_SPECIALTIES.map((item, index) => (
              <div
                key={item.number}
                className={`flex items-center gap-4 sm:gap-5 px-6 sm:px-7 py-5 sm:py-6 border-taupe/20 ${
                  index < OTHER_SPECIALTIES.length - 1
                    ? "border-b sm:border-b lg:border-b"
                    : ""
                } ${
                  index % 2 === 0 && index < OTHER_SPECIALTIES.length - 1
                    ? "sm:border-r"
                    : ""
                } hover:bg-areia/50 transition-colors duration-200 group cursor-default`}
              >
                <span className="font-serif text-2xl text-champagne font-normal leading-none select-none shrink-0">
                  {item.number}
                </span>
                <span className="font-sans text-sm font-medium text-grafite tracking-wide group-hover:text-verde-profundo transition-colors duration-200">
                  {item.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-10 sm:mt-12">
            <Button
              variant="primary"
              size="lg"
              href={CONTACT_INFO.whatsapp.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto tracking-luxury min-h-[48px] sm:min-h-[52px]"
            >
              Agendar Avaliação no WhatsApp
            </Button>
          </div>
        </Container>
      </div>
    </section>
  );
}
