import React from "react";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/common/Wordmark";
import { CONTACT_INFO } from "@/constants/contact";

/**
 * FOOTER — RODAPÉ INSTITUCIONAL
 *
 * Revive Odontologia Especializada — Mogi-Guaçu / SP.
 * Exibe exclusivamente dados institucionais confirmados.
 * Endereço detalhado, e-mail e horários são ocultados condicionalmente enquanto pendentes.
 */

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full bg-grafite overflow-hidden"
      role="contentinfo"
      aria-label="Rodapé da Revive Odontologia Especializada"
    >
      {/* Detalhe decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-dourado/[0.03] blur-3xl" />
      </div>

      {/* Separador decorativo topo */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-dourado/35 to-transparent" />

      {/* Conteúdo principal */}
      <div className="relative z-10 py-16 sm:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Coluna 1 — Identidade */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-5">
                <Wordmark tone="light" size="sm" />
              </div>
              <p className="font-sans text-sm text-offwhite/60 font-light leading-relaxed max-w-xs">
                Cuidado odontológico e atendimento especializado em{" "}
                {CONTACT_INFO.brand.cityDisplay}.
              </p>
            </div>

            {/* Coluna 2 — Navegação */}
            <div>
              <h3 className="font-sans text-[11px] uppercase tracking-luxury font-medium text-dourado/75 mb-5">
                Navegação
              </h3>
              <nav aria-label="Links do rodapé">
                <ul className="space-y-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="font-sans text-sm text-offwhite/70 hover:text-dourado transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Coluna 3 — Contato e Localização */}
            <div>
              <h3 className="font-sans text-[11px] uppercase tracking-luxury font-medium text-dourado/75 mb-5">
                Contato
              </h3>
              <ul className="space-y-4">
                <li>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-dourado/80 block mb-0.5">
                    WhatsApp
                  </span>
                  <a
                    href={CONTACT_INFO.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-offwhite/85 hover:text-dourado transition-colors duration-200 inline-flex items-center gap-1.5"
                    aria-label={`Conversar no WhatsApp: ${CONTACT_INFO.whatsapp.display}`}
                  >
                    <span>{CONTACT_INFO.whatsapp.display}</span>
                    <span className="text-xs text-dourado">↗</span>
                  </a>
                </li>
                <li>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-dourado/80 block mb-0.5">
                    Localização
                  </span>
                  <address className="not-italic font-sans text-sm text-offwhite/70 leading-relaxed">
                    {CONTACT_INFO.address.street && (
                      <>
                        {CONTACT_INFO.address.street}
                        <br />
                      </>
                    )}
                    {CONTACT_INFO.address.city} / {CONTACT_INFO.address.state}
                    {CONTACT_INFO.address.cep && (
                      <>
                        <br />
                        CEP {CONTACT_INFO.address.cep}
                      </>
                    )}
                  </address>
                </li>
                {CONTACT_INFO.pending.email && (
                  <li>
                    <span className="font-sans text-[11px] uppercase tracking-wider text-dourado/80 block mb-0.5">
                      E-mail
                    </span>
                    <a
                      href={`mailto:${CONTACT_INFO.pending.email}`}
                      className="font-sans text-sm text-offwhite/70 hover:text-dourado transition-colors duration-200"
                    >
                      {CONTACT_INFO.pending.email}
                    </a>
                  </li>
                )}
              </ul>
            </div>

            {/* Coluna 4 — Corpo Clínico e Redes Sociais */}
            <div>
              <h3 className="font-sans text-[11px] uppercase tracking-luxury font-medium text-dourado/75 mb-5">
                Corpo Clínico
              </h3>
              <ul className="space-y-3 mb-7 text-sm">
                {CONTACT_INFO.professionals.map((professional) => (
                  <li key={professional.cro} className="font-sans text-offwhite/80">
                    <span className="block font-medium text-offwhite/90">
                      {professional.name}
                    </span>
                    <span className="text-xs text-dourado/80 tracking-wide">
                      {professional.cro}
                    </span>
                  </li>
                ))}
              </ul>

              {CONTACT_INFO.hours.confirmed && CONTACT_INFO.hours.weekdays && (
                <div className="mb-7">
                  <h3 className="font-sans text-[11px] uppercase tracking-luxury font-medium text-dourado/75 mb-3">
                    Horários
                  </h3>
                  <p className="font-sans text-sm text-offwhite/70">
                    {CONTACT_INFO.hours.weekdays}
                  </p>
                </div>
              )}

              {/* Redes Sociais Oficiais */}
              <h3 className="font-sans text-[11px] uppercase tracking-luxury font-medium text-dourado/75 mb-4">
                Redes Sociais
              </h3>
              <div className="flex items-center gap-3">
                <a
                  href={CONTACT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 px-3.5 py-2 rounded-full border border-offwhite/20 text-offwhite/80 hover:text-dourado hover:border-dourado hover:bg-offwhite/5 transition-all duration-200"
                  title="Acessar Instagram da Revive Odontologia Especializada"
                  aria-label="Instagram da Revive Odontologia Especializada (abre em nova aba)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.4}
                    className="w-4 h-4 shrink-0"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                  <span className="font-sans text-xs tracking-wide">
                    {CONTACT_INFO.social.instagramHandle}
                  </span>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Separador */}
      <div className="h-[1px] w-full bg-offwhite/10" />

      {/* Barra Inferior */}
      <div className="relative z-10 py-6">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            {/* Copyright */}
            <p className="font-sans text-xs text-offwhite/45">
              © {currentYear} {CONTACT_INFO.brand.name}. Todos os direitos
              reservados.
            </p>

            {/* Registros Profissionais */}
            <div className="flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1 text-[11px] font-sans text-offwhite/45">
              {CONTACT_INFO.professionals.map((professional, idx) => (
                <React.Fragment key={professional.cro}>
                  <span>
                    {professional.name} — {professional.cro}
                  </span>
                  {idx < CONTACT_INFO.professionals.length - 1 && (
                    <span className="hidden sm:inline text-offwhite/20">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
