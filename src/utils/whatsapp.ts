import { company } from "../data/siteData";
import type { Lang, WhatsAppInquiry } from "../data/siteData";

export function getWhatsAppContact(inquiry: WhatsAppInquiry = "steel") {
  return (
    company.whatsappContacts.find((contact) => contact.key === inquiry) ??
    company.whatsappContacts[0]
  );
}

export function getDefaultWhatsAppMessage(
  inquiry: WhatsAppInquiry,
  lang: Lang
) {
  if (inquiry === "aluminium") {
    return lang === "fr"
      ? "Bonjour HSM Trading, je souhaite avoir des informations concernant l’aluminium."
      : "Hello HSM Trading, I would like information about aluminum.";
  }

  return lang === "fr"
    ? "Bonjour HSM Trading, je souhaite avoir des informations concernant le métal / acier."
    : "Hello HSM Trading, I would like information about metal / steel.";
}

export function createWhatsAppLink(inquiry: WhatsAppInquiry, text: string) {
  const contact = getWhatsAppContact(inquiry);

  return `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(text)}`;
}

export function getInquiryFromProductCategory(category: string): WhatsAppInquiry {
  const normalizedCategory = category.toLowerCase();

  const aluminiumCategories = ["aluminium", "aluminum"];

  return aluminiumCategories.includes(normalizedCategory)
    ? "aluminium"
    : "steel";
}

export function getInquiryFromText(text: string): WhatsAppInquiry {
  const normalizedText = text.toLowerCase();

  const aluminiumKeywords = [
    "aluminium",
    "aluminum",
    "alu",
    "window",
    "fenêtre",
    "fenetre",
    "moustiquaire",
    "fly screen",
    "fly-screen",
    "guardrail",
    "garde-corps",
  ];

  return aluminiumKeywords.some((keyword) => normalizedText.includes(keyword))
    ? "aluminium"
    : "steel";
}