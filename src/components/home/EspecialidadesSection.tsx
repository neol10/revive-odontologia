import React from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO, getWhatsAppLink } from "@/constants/contact";

/**
 * SEÇÃO B — ESPECIALIDADES / ATENDIMENTOS
 *
 * AUDITORIA DE CONTEÚDO CLÍNICO — REVIVE ODONTOLOGIA ESPECIALIZADA:
 * A. Tratamentos confirmados da Revive: Nenhum procedimento clínico individual
 *    foi formalmente confirmado até o momento.
 * B. Tratamentos ainda não confirmados: Aguardando lista oficial do Dr. Caio Zavarize
 *    e da Dra. Sthela Jorge.
 * C. Conteúdo exclusivo da Vizotto (REMOVIDO DA EXIBIÇÃO PÚBLICA):
 *    Ortodontia, Implantodontia, Periodontia, Endodontia, Cirurgia Bucomaxilo,
 *    Odontopediatria, Dentística, Estética, Harmonização Facial, Prótese Dental,
 *    Clínica Geral e DTM/ATM + fotografias /assets/especialidades/*.
 *
 * A estrutura de destaque e lista é preservada via arrays tipados vazios até a
 * confirmação oficial, exibindo apenas orientação neutra de avaliação presencial.
 */

interface FeaturedSpecialty {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  textSide: "left" | "right";
  whatsappMessage: string;
}

interface SpecialtyListItem {
  number: string;
  name: string;
}

const FEATURED_SPECIALTIES: FeaturedSpecialty[] = [];

const OTHER_SPECIALTIES: SpecialtyListItem[] = [];

export function EspecialidadesSection() {
  return (
    <section
      id="especialidades"
      className="relative w-full overflow-hidden"
      aria-labelledby="especialidades-titulo"
    >
      {/* Cabeçalho da Seção */}
      <div className="bg-offwhite py-16 sm:py-24 md:py-28 border-t border-taupe/15">
        <Container size="default" className="text-center">
          {/* Eyebrow */}
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-5">
            <span className="h-[1px] w-8 bg-dourado" />
            <span className="text-[11px] uppercase tracking-luxury font-sans font-medium text-petroleo">
              Especialidades
            </span>
            <span className="h-[1px] w-8 bg-dourado" />
          </div>

          <h2
            id="especialidades-titulo"
            className="font-serif text-[32px] sm:text-4xl md:text-5xl text-grafite font-normal leading-[1.15] tracking-tight max-w-2xl mx-auto mb-5"
          >
            Atendimento planejado para a sua{" "}
            <span className="italic text-petroleo">individualidade.</span>
          </h2>

          <p className="font-sans text-base text-taupe-dark font-light leading-relaxed max-w-xl mx-auto">
            Na Revive Odontologia Especializada, cada plano de cuidado começa
            com uma avaliação atenta às necessidades de cada paciente.
          </p>
        </Container>
      </div>

      {/* Especialidades em Destaque — Renderização condicional somente para itens confirmados */}
      {FEATURED_SPECIALTIES.map((specialty, index) => (
        <div
          key={specialty.id}
          className={`py-14 sm:py-20 md:py-24 ${
            index % 2 === 0 ? "bg-offwhite" : "bg-cinza"
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
                <div className="flex items-center gap-3 mb-4 sm:mb-5">
                  <span className="font-serif text-5xl text-dourado font-normal leading-none select-none">
                    0{index + 1}
                  </span>
                  <div className="flex flex-col">
                    <span className="h-[1px] w-6 bg-dourado mb-1" />
                    <span className="text-[11px] uppercase tracking-luxury font-sans font-medium text-petroleo">
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
                    className="inline-flex items-center gap-2 py-2 text-[15px] sm:text-base font-sans font-medium text-grafite hover:text-petroleo transition-colors duration-200 group"
                    aria-label={`Saber mais sobre ${specialty.title} via WhatsApp`}
                  >
                    <span>Agendar Avaliação</span>
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>

              {/* Bloco Visual */}
              <div
                className={
                  specialty.textSide === "left"
                    ? "order-1 lg:order-1"
                    : "order-1 lg:order-2"
                }
              >
                <div
                  className="relative w-full rounded-2xl overflow-hidden shadow-lg shadow-grafite/8 bg-cinza/40"
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

      {/* Lista de Especialidades Confirmadas ou Orientação Institucional Neutra */}
      <div className="bg-offwhite pb-16 sm:pb-24">
        <Container size="default">
          {OTHER_SPECIALTIES.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 border border-taupe/20 bg-offwhite-dark rounded-2xl overflow-hidden">
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
                  } hover:bg-cinza/50 transition-colors duration-200 group cursor-default`}
                >
                  <span className="font-serif text-2xl text-dourado font-normal leading-none select-none shrink-0">
                    {item.number}
                  </span>
                  <span className="font-sans text-sm font-medium text-grafite tracking-wide group-hover:text-petroleo transition-colors duration-200">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-2xl border border-petroleo/15 bg-offwhite-dark p-8 sm:p-12 text-center max-w-3xl mx-auto">
              <span className="h-[1px] w-10 bg-dourado mx-auto block mb-5" />
              <h3 className="font-serif text-2xl sm:text-3xl text-grafite font-normal leading-snug mb-4">
                Atendimentos sob avaliação personalizada
              </h3>
              <p className="font-sans text-sm sm:text-base text-taupe-dark font-light leading-relaxed max-w-xl mx-auto mb-8">
                Para conhecer os atendimentos realizados pela equipe da Revive
                Odontologia Especializada em {CONTACT_INFO.brand.cityDisplay},
                fale diretamente conosco pelo WhatsApp e tire suas dúvidas sobre
                uma avaliação.
              </p>
              <Button
                variant="primary"
                size="lg"
                href={CONTACT_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto tracking-luxury min-h-[48px] sm:min-h-[52px]"
              >
                Agendar Avaliação
              </Button>
            </div>
          )}

          {OTHER_SPECIALTIES.length > 0 && (
            <div className="text-center mt-10 sm:mt-12">
              <Button
                variant="primary"
                size="lg"
                href={CONTACT_INFO.whatsapp.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto tracking-luxury min-h-[48px] sm:min-h-[52px]"
              >
                Agendar Avaliação
              </Button>
            </div>
          )}
        </Container>
      </div>
    </section>
  );
}
