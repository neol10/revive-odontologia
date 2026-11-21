import React from "react";
import { Container } from "@/components/ui/Container";

/**
 * SEÇÃO C — DIFERENCIAIS INSTITUCIONAIS
 *
 * Revive Odontologia Especializada — Mogi-Guaçu / SP.
 * Linguagem institucional acolhedora e objetiva, sem afirmações não verificadas
 * (equipamentos exclusivos, resultados garantidos, promessas clínicas ou comparações).
 */

const DIFERENCIAIS = [
  {
    number: "01",
    title: "Atendimento Individualizado",
    description:
      "Cada paciente é ouvido com atenção. Planejamos e acompanhamos cada etapa respeitando o ritmo e as necessidades de cada sorriso.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Cuidado Acolhedor",
    description:
      "Buscamos oferecer uma experiência tranquila e respeitosa, do primeiro contato até o acompanhamento após a consulta.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Planejamento Transparente",
    description:
      "Avaliação criteriosa e orientações claras para que você compreenda cada etapa do seu cuidado odontológico.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="w-7 h-7"
        aria-hidden="true"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Equipe Próxima",
    description:
      "Atendimento conduzido com dedicação pelo Dr. Caio Zavarize e pela Dra. Sthela Jorge, com foco no cuidado humano.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.2}
        className="w-7 h-7"
        aria-hidden="true"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

export function DiferenciaisSection() {
  return (
    <section
      id="diferenciais"
      className="relative w-full bg-petroleo overflow-hidden py-16 sm:py-24 md:py-32"
      aria-labelledby="diferenciais-titulo"
    >
      {/* Detalhe decorativo de fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-offwhite/[0.02] blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-dourado/[0.04] blur-3xl" />
      </div>

      <Container size="wide" className="relative z-10">
        {/* Cabeçalho */}
        <div className="mb-12 sm:mb-16 md:mb-20">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <span className="h-[1px] w-8 bg-dourado" />
            <span className="text-[11px] uppercase tracking-luxury font-sans font-medium text-dourado/85">
              Por que a Revive
            </span>
          </div>

          <h2
            id="diferenciais-titulo"
            className="font-serif text-[32px] sm:text-4xl md:text-5xl text-offwhite font-normal leading-[1.15] tracking-tight max-w-2xl"
          >
            Um cuidado pensado{" "}
            <span className="italic text-dourado-light">para você.</span>
          </h2>
        </div>

        {/* Grid de Diferenciais */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-offwhite/10 rounded-2xl overflow-hidden">
          {DIFERENCIAIS.map((item) => (
            <div
              key={item.number}
              className="relative flex flex-col bg-petroleo px-6 py-8 sm:px-8 sm:py-10 group hover:bg-offwhite/[0.04] transition-colors duration-300"
            >
              {/* Ícone */}
              <div className="text-dourado mb-5 sm:mb-6">{item.icon}</div>

              {/* Número tipográfico decorativo */}
              <span className="font-serif text-5xl sm:text-6xl text-offwhite/[0.07] font-normal leading-none select-none absolute top-6 right-6 pointer-events-none">
                {item.number}
              </span>

              {/* Título */}
              <h3 className="font-sans text-base sm:text-lg font-semibold text-offwhite mb-2 sm:mb-3 tracking-wide leading-snug">
                {item.title}
              </h3>

              {/* Descrição */}
              <p className="font-sans text-[15px] sm:text-sm text-offwhite/75 font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
