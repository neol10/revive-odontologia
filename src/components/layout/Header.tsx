"use client";

import React, { useState, useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Wordmark } from "@/components/common/Wordmark";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO } from "@/constants/contact";

interface NavItem {
  label: string;
  href: string;
  ariaLabel?: string;
}

const navItems: NavItem[] = [
  { label: "Início", href: "#inicio" },
  { label: "A Clínica", href: "#clinica" },
  { label: "Especialidades", href: "#especialidades" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  // Monitora scroll para transição suave do header
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Bloqueio de scroll do body quando o menu mobile está aberto e suporte à tecla Escape
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setIsMobileMenuOpen(false);
          toggleButtonRef.current?.focus();
        }
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  const handleNavClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${
        isScrolled
          ? "bg-petroleo/95 backdrop-blur-md py-3.5 border-b border-dourado/20 shadow-lg shadow-black/15"
          : "bg-gradient-to-b from-grafite/85 via-grafite/35 to-transparent py-5 sm:py-6"
      }`}
      role="banner"
    >
      <Container size="wide" className="flex items-center justify-between gap-2">
        {/* Logotipo / Wordmark Oficial Revive à esquerda */}
        <a
          href="#inicio"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dourado rounded-sm py-1 transition-opacity hover:opacity-90 shrink-0"
          aria-label="Revive Odontologia Especializada — Voltar ao topo"
          onClick={handleNavClick}
        >
          <Wordmark tone="light" size="sm" className="items-center text-left" />
        </a>

        {/* Navegação Desktop */}
        <nav
          className="hidden lg:flex items-center space-x-8 xl:space-x-10"
          aria-label="Navegação principal"
        >
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-xs lg:text-sm font-sans tracking-luxury uppercase text-offwhite/85 hover:text-dourado transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dourado rounded-sm py-1"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA Agendamento Desktop */}
        <div className="hidden lg:flex items-center shrink-0">
          <Button
            variant="secondary"
            size="sm"
            href={CONTACT_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            className="tracking-luxury text-[11px] shadow-sm hover:shadow-dourado/25"
          >
            Agendar Avaliação
          </Button>
        </div>

        {/* Botão Hambúrguer Mobile/Tablet com área de toque mínima de 48px */}
        <button
          ref={toggleButtonRef}
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden relative min-w-[48px] min-h-[48px] flex items-center justify-center rounded-lg text-offwhite hover:text-dourado focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dourado transition-colors shrink-0"
          aria-label={isMobileMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
          aria-expanded={isMobileMenuOpen}
          aria-controls="mobile-drawer"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span
              className={`h-[1.5px] bg-current transition-all duration-300 ease-out origin-right ${
                isMobileMenuOpen ? "w-6 -rotate-45 translate-y-[2px]" : "w-6"
              }`}
            />
            <span
              className={`h-[1.5px] bg-current transition-all duration-200 ease-out ${
                isMobileMenuOpen ? "opacity-0 w-0" : "w-4"
              }`}
            />
            <span
              className={`h-[1.5px] bg-current transition-all duration-300 ease-out origin-right ${
                isMobileMenuOpen ? "w-6 rotate-45 -translate-y-[2px]" : "w-5"
              }`}
            />
          </div>
        </button>
      </Container>

      {/* Drawer Mobile / Tablet */}
      <div
        id="mobile-drawer"
        ref={drawerRef}
        aria-hidden={!isMobileMenuOpen}
        className={`fixed inset-0 top-[72px] bg-petroleo/98 backdrop-blur-xl transition-all duration-400 ease-out lg:hidden flex flex-col justify-between p-6 sm:p-8 ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
      >
        <div className="pt-6">
          <span className="text-[10px] tracking-luxury uppercase text-dourado/80 block mb-6">
            Navegação
          </span>
          <nav className="flex flex-col space-y-5" aria-label="Navegação móvel">
            {navItems.map((item, idx) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="text-xl sm:text-2xl font-serif text-offwhite hover:text-dourado transition-colors py-1 border-b border-offwhite/10 flex items-center justify-between"
                tabIndex={isMobileMenuOpen ? 0 : -1}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${idx * 60}ms` : "0ms",
                }}
              >
                <span>{item.label}</span>
                <span className="text-xs font-sans text-dourado/75 tracking-widest">0{idx + 1}</span>
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-8 border-t border-offwhite/15 flex flex-col gap-4">
          <Button
            variant="secondary"
            size="lg"
            href={CONTACT_INFO.whatsapp.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleNavClick}
            className="w-full text-center"
            tabIndex={isMobileMenuOpen ? 0 : -1}
          >
            Agendar Avaliação
          </Button>

          <p className="text-[11px] text-center text-offwhite/65 tracking-wider font-light mt-2">
            Atendimento via WhatsApp — {CONTACT_INFO.brand.cityDisplay}
          </p>
        </div>
      </div>
    </header>
  );
}
