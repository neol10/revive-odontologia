import React from "react";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/common/Wordmark";
import { CONTACT_INFO } from "@/constants/contact";

/**
 * FOOTER — RODAPÉ INSTITUCIONAL
 *
 * Atualizado com dados oficiais de contato, horários e redes sociais (Ajuste 05.2).
 * Dados de e-mail e responsável técnico CRO/SP preservados como pendentes.
 */

const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#agendamento" },
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="relative w-full bg-grafite overflow-hidden"
      role="contentinfo"
      aria-label="Rodapé da Vizotto Odontologia"
    >
      {/* Detalhe decorativo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -top-24 right-0 w-72 h-72 rounded-full bg-champagne/[0.02] blur-3xl" />
      </div>

      {/* Separador decorativo topo */}
      <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-champagne/30 to-transparent" />

      {/* Conteúdo principal */}
      <div className="relative z-10 py-16 sm:py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
            {/* Coluna 1 — Identidade */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="mb-5">
                <Wordmark tone="light" size="sm" />
              </div>
              <p className="font-sans text-sm text-marfim/40 font-light leading-relaxed max-w-xs">
                {/* ⚠️ PLACEHOLDER — Aguardando tagline institucional oficial */}
                Cuidado odontológico personalizado com atenção, dedicação e
                respeito a cada sorriso.
              </p>
            </div>

            {/* Coluna 2 — Navegação */}
            <div>
              <h3 className="font-sans text-[11px] uppercase tracking-luxury font-medium text-champagne/60 mb-5">
                Navegação
              </h3>
              <nav aria-label="Links do rodapé">
                <ul className="space-y-3">
                  {NAV_LINKS.map((link) => (
                    <li key={link.href}>
                      <a
                        href={link.href}
                        className="font-sans text-sm text-marfim/60 hover:text-champagne transition-colors duration-200"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Coluna 3 — Contato */}
            <div>
              <h3 className="font-sans text-[11px] uppercase tracking-luxury font-medium text-champagne/60 mb-5">
                Contato
              </h3>
              <ul className="space-y-3">
                <li>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-champagne/70 block mb-0.5">
                    WhatsApp / Telefone
                  </span>
                  <a
                    href={CONTACT_INFO.whatsapp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-sans text-sm text-marfim/80 hover:text-champagne transition-colors duration-200 inline-flex items-center gap-1.5"
                    aria-label={`Conversar no WhatsApp: ${CONTACT_INFO.whatsapp.number}`}
                  >
                    <span>{CONTACT_INFO.whatsapp.number}</span>
                    <span className="text-xs text-champagne">↗</span>
                  </a>
                </li>
                <li>
                  <span className="font-sans text-[11px] uppercase tracking-wider text-champagne/70 block mb-0.5">
                    Localização
                  </span>
                  <address className="not-italic font-sans text-sm text-marfim/60 leading-relaxed">
                    {CONTACT_INFO.address.street}
                    <br />
                    {CONTACT_INFO.address.city} – {CONTACT_INFO.address.state}
                    <br />
                    CEP {CONTACT_INFO.address.cep}
                  </address>
                </li>
                <li>
                  <span className="font-mono text-[10px] text-champagne/40 block mb-0.5">
                    ⚠️ PENDENTE
                  </span>
                  <span className="font-sans text-sm text-marfim/40">
                    E-mail institucional
                  </span>
                </li>
              </ul>
            </div>

            {/* Coluna 4 — Horários e Redes */}
            <div>
              <h3 className="font-sans text-[11px] uppercase tracking-luxury font-medium text-champagne/60 mb-5">
                Horários
              </h3>
              <ul className="space-y-2.5 mb-8 text-sm">
                <li className="font-sans text-marfim/70">
                  <span className="text-marfim/40 block text-xs">Segunda a Sexta</span>
                  09h às 19h
                </li>
                <li className="font-sans text-marfim/70">
                  <span className="text-marfim/40 block text-xs">Sábado e Domingo</span>
                  Fechado
                </li>
              </ul>

              {/* Redes Sociais Oficiais */}
              <h3 className="font-sans text-[11px] uppercase tracking-luxury font-medium text-champagne/60 mb-4">
                Redes Sociais
              </h3>
              <div className="flex items-center gap-4">
                {/* Instagram Oficial */}
                <a
                  href={CONTACT_INFO.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-marfim/20 flex items-center justify-center text-marfim/70 hover:text-champagne hover:border-champagne hover:bg-white/5 transition-all duration-200"
                  title="Acessar Instagram da Vizotto Odontologia"
                  aria-label="Instagram da Vizotto Odontologia (abre em nova aba)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.4}
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
                  </svg>
                </a>

                {/* Facebook Oficial */}
                <a
                  href={CONTACT_INFO.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-marfim/20 flex items-center justify-center text-marfim/70 hover:text-champagne hover:border-champagne hover:bg-white/5 transition-all duration-200"
                  title="Acessar Facebook da Vizotto Odontologia"
                  aria-label="Facebook da Vizotto Odontologia (abre em nova aba)"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.4}
                    className="w-4 h-4"
                    aria-hidden="true"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Separador */}
      <div className="h-[1px] w-full bg-marfim/8" />

      {/* Barra Inferior */}
      <div className="relative z-10 py-6">
        <Container size="wide">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            {/* Copyright */}
            <p className="font-sans text-xs text-marfim/30">
              © {currentYear} Vizotto Odontologia. Todos os direitos
              reservados.
            </p>

            {/* Responsável Técnico + Links legais */}
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-5">
              <span className="font-mono text-[10px] text-champagne/30">
                ⚠️ Responsável Técnico: [Nome] — CRO/[UF] [Número] (pendente)
              </span>
              <span className="hidden sm:inline text-marfim/15">·</span>
              <a
                href="#"
                className="font-sans text-xs text-marfim/30 hover:text-champagne/60 transition-colors duration-200"
              >
                Política de Privacidade
              </a>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
