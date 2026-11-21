# NEWNEO PROJECT STATE — Revive Odontologia Especializada

## 1. Contexto do Projeto
- **Cliente / Marca:** Revive Odontologia Especializada
- **Instagram:** [@reviveodontologia](https://www.instagram.com/reviveodontologia/)
- **WhatsApp Oficial:** `5519999063666` (`(19) 99906-3666`)
- **Cidade / UF:** Mogi-Guaçu / SP
- **Corpo Clínico Confirmado:**
  - Dr. Caio Zavarize — CRO/SP 162.974
  - Dra. Sthela Jorge — CRO/SP 163.325
- **Metodologia:** NEWNEO Web Architect v1.0
- **Diretriz Cinematográfica:** Preservar 100% da estrutura, vídeos (`video-hero.mp4`, `hero-poster.jpg`, `video-scroll.mp4`), 192 frames WebP (`scroll-sequence`), Canvas 2D, GSAP `ScrollTrigger`, animações, enquadramentos e comportamento mobile da base de referência, adaptando apenas textos e cores institucionais.

---

## 2. Stack e Infraestrutura
- **Framework:** Next.js `^16.4.6` (App Router) + React `^19.3.1` + TypeScript `^7.0.2`
- **Estilização:** Tailwind CSS `^3.4.19` + `clsx` + `tailwind-merge`
- **Animação:** GSAP `^3.15.1` (`ScrollTrigger`)
- **Tipografia:** `Playfair Display` (Serif) + `Plus Jakarta Sans` (Sans)
- **Isolamento Git:** Remote `origin` da Vizotto (`https://github.com/neol10/vizzoto-odontologia.git`) **REMOVIDO** (`git remote -v` vazio). Nenhum commit, push ou deploy realizado sem autorização.

---

## 3. Paleta Institucional & Cores Extraídas da Logo (Aprovada)
- **Extração Direta de `public/assets/brand/logo.jpg` (150x150):**
  - **Traço Azul-Petróleo (Letra R):** `#0D4756`
  - **Traço Dourado (Símbolo do Dente):** `#AF9F75`
  - **Fundo Original:** `#D9D9D9`
- **Tokens Semânticos Oficiais:** `petroleo` (`#174B59` / `#0D4756`), `dourado` (`#B6A16A` / `#AF9F75`), `offwhite` (`#F8F7F4`), `cinza` (`#E5E5E5`), `grafite` (`#24282B`).
- **Monograma 1:1:** `public/assets/brand/logo-transparent.png`.

---

## 4. Roadmap de Etapas e Status

| Etapa | Descrição | Status |
| :--- | :--- | :--- |
| **FASE 1** | Auditoria Inicial e Planejamento de Clonagem Independente | `APROVADA` |
| **ETAPA 1** | Isolamento Git, atualização do `package.json` e criação do `NEWNEO_PROJECT_STATE.md` | `APROVADA` |
| **ETAPA 2** | Design System, cores e logo oficial Revive | `APROVADA` |
| **ETAPA 3** | Dados institucionais (`contact.ts`), SEO (`layout.tsx`), Header e Footer | `APROVADA` |
| **ETAPA 4** | Adaptação dos textos e cores do `Hero.tsx`, `#filosofia` (`page.tsx`) e `ScrollCinematic.tsx` | `APROVADA` |
| **ETAPA 5** | Adaptação das seções institucionais (`ClinicaSection`, `EspecialidadesSection`, `DiferenciaisSection`, `AgendamentoSection`) | `APROVADA` |
| **ETAPA 6** | Ajuste autorizado do Header `768px`, testes em 7 viewports (`320px–1920px`), acessibilidade e auditoria final | `AGUARDANDO_APROVACAO` |

---

## 5. Áreas Congeladas e Integridade Confirmada
- **Mídias Cinematográficas:** `video-hero.mp4`, `hero-poster.jpg`, `video-scroll.mp4` e todos os 192 frames WebP (`frame-0001.webp`..`frame-0192.webp`) preservados byte a byte.
- **Motor Cinematográfico:** `Hero.tsx` e `ScrollCinematic.tsx` com mesmos parâmetros GSAP `ScrollTrigger` (`end: "+=280%"`, `pin: true`, `scrub: 0.35`), Canvas 2D, preload e `prefers-reduced-motion`.
- **Integridade de Marca:** Zero referências a `Vizotto`, telefone antigo ou cidade anterior em `src/` e no DOM final; zero imagens da clínica anterior renderizadas.

---

## 6. Pendências Institucionais (Para Futura Atualização pelo Cliente)
- [ ] Fotografias oficiais da clínica Revive e retratos do Dr. Caio Zavarize e da Dra. Sthela Jorge.
- [ ] Lista oficial de especialidades/tratamentos confirmados (estrutura pronta em `EspecialidadesSection.tsx`).
- [ ] Endereço completo em Mogi-Guaçu/SP, e-mail institucional e horários de atendimento.
- [ ] Domínio definitivo (`metadataBase`), imagem OpenGraph (`og:image`) e Favicon exclusivos da Revive.

---

## 7. Histórico de Validações — Auditoria Final (Etapa 6)
- **Etapa 6 (2026-11-21):**
  - Ajuste pontual autorizado em `src/components/layout/Header.tsx` (`md:` → `lg:` para exibição da navegação desktop/drawer), eliminando o corte do CTA no breakpoint `768px`.
  - `npx tsc --noEmit` e `npm run build` concluídos com **0 erros**.
  - **Matriz de 7 Viewports (`320×568`, `360×800`, `390×844`, `430×932`, `768×1024`, `1440×900`, `1920×1080`):** **7/7 PASS**, `0` overflow horizontal, `0` erros de console, `0/50` falhas de rede.
  - **Acessibilidade e Segurança:** Landmarks semânticos (`banner`, `main`, `contentinfo`), único `<h1>`, `8/8` links `target="_blank"` protegidos com `rel="noopener noreferrer"`, rota `/design-system` protegida com `noindex, nofollow`.
  - **Pronto para decisão do cliente:** Criação de repositório GitHub independente e deploy na Vercel mediante autorização explícita.
