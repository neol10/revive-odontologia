/**
 * DADOS OFICIAIS DE CONTATO, LOCALIZAÇÃO E ATENDIMENTO
 * Vizotto Odontologia — Atualizado conforme Ajuste 05.2
 */

export const CONTACT_INFO = {
  whatsapp: {
    number: "+55 19 98425-6768",
    display: "(19) 98425-6768",
    defaultMessage: "Olá! Gostaria de agendar uma consulta na Vizotto Odontologia.",
    link: "https://wa.me/5519984256768?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20consulta%20na%20Vizotto%20Odontologia.",
  },
  address: {
    street: "Rua Treze de Maio",
    numberPending: true,
    city: "Engenheiro Coelho",
    state: "SP",
    cep: "13445-015",
    fullDisplay: "Rua Treze de Maio (número a confirmar), Engenheiro Coelho – SP, CEP 13445-015",
  },
  hours: {
    weekdays: "Segunda a sexta: 09h às 19h",
    saturday: "Sábado: Fechado",
    sunday: "Domingo: Fechado",
  },
  social: {
    instagram: "https://www.instagram.com/vizottoodonto/",
    facebook: "https://www.facebook.com/vizotto.odontologia/",
  },
  pending: {
    email: "E-mail de contato pendente",
    technicalResponsible: "Nome do Responsável Técnico — CRO/SP (pendente)",
  },
};

/**
 * Gera o link direto para o WhatsApp com mensagem educada customizada
 */
export function getWhatsAppLink(customMessage?: string): string {
  const message = customMessage || CONTACT_INFO.whatsapp.defaultMessage;
  return `https://wa.me/5519984256768?text=${encodeURIComponent(message)}`;
}
