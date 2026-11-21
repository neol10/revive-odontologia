/**
 * DADOS OFICIAIS DE CONTATO, LOCALIZAÇÃO E CORPO CLÍNICO
 * Revive Odontologia Especializada — Mogi-Guaçu / SP
 *
 * Regra de integridade: apenas informações oficialmente confirmadas.
 * Campos ainda não confirmados permanecem nulos/vazios para ocultação condicional.
 */

const WHATSAPP_RAW_NUMBER = "5519999063666";
const WHATSAPP_DEFAULT_MESSAGE =
  "Olá! Conheci a Revive Odontologia Especializada pelo site e gostaria de saber mais sobre uma avaliação.";

export const CONTACT_INFO = {
  brand: {
    name: "Revive Odontologia Especializada",
    shortName: "Revive",
    city: "Mogi-Guaçu",
    state: "SP",
    cityDisplay: "Mogi-Guaçu / SP",
  },
  professionals: [
    {
      name: "Dr. Caio Zavarize",
      cro: "CRO/SP 162.974",
    },
    {
      name: "Dra. Sthela Jorge",
      cro: "CRO/SP 163.325",
    },
  ],
  whatsapp: {
    raw: WHATSAPP_RAW_NUMBER,
    number: "+55 19 99906-3666",
    display: "(19) 99906-3666",
    defaultMessage: WHATSAPP_DEFAULT_MESSAGE,
    link: `https://wa.me/${WHATSAPP_RAW_NUMBER}?text=${encodeURIComponent(
      WHATSAPP_DEFAULT_MESSAGE
    )}`,
  },
  address: {
    street: null as string | null,
    numberPending: true,
    city: "Mogi-Guaçu",
    state: "SP",
    cep: null as string | null,
    fullDisplay: "Mogi-Guaçu / SP",
  },
  hours: {
    confirmed: false,
    weekdays: null as string | null,
    saturday: null as string | null,
    sunday: null as string | null,
  },
  social: {
    instagram: "https://www.instagram.com/reviveodontologia/",
    instagramHandle: "@reviveodontologia",
  },
  pending: {
    email: null as string | null,
    address: "Endereço completo em Mogi-Guaçu/SP (pendente de confirmação)",
    hours: "Horários de funcionamento (pendente de confirmação)",
  },
};

/**
 * Gera o link direto para o WhatsApp oficial da Revive com mensagem customizada
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || CONTACT_INFO.whatsapp.defaultMessage;
  return `https://wa.me/${CONTACT_INFO.whatsapp.raw}?text=${encodeURIComponent(
    message
  )}`;
}
