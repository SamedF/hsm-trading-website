import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Bot,
  CheckCircle2,
  MessageCircle,
  Phone,
  RotateCcw,
  Send,
  Sparkles,
  User,
  X,
  Zap,
} from "lucide-react";
import { company, content } from "../data/siteData";
import {
  createWhatsAppLink,
  getDefaultWhatsAppMessage,
  getInquiryFromText,
} from "../utils/whatsapp";
import type { Lang, WhatsAppInquiry } from "../data/siteData";

type ChatBubbleProps = {
  lang: Lang;
};

type ChatMode = "assistant" | "whatsapp";

type ChatMessage = {
  role: "bot" | "user";
  text: string;
  action?: "send_quote";
};

type QuoteStep =
  | "department"
  | "product"
  | "quantity"
  | "dimensions"
  | "location"
  | "details"
  | "ready";

type QuoteData = {
  department: WhatsAppInquiry | null;
  product: string;
  quantity: string;
  dimensions: string;
  location: string;
  details: string;
};

const emptyQuote: QuoteData = {
  department: null,
  product: "",
  quantity: "",
  dimensions: "",
  location: "",
  details: "",
};

const starterQuestions = {
  fr: [
    "Je veux un devis métal / acier",
    "Je veux un devis aluminium",
    "Quels produits propose HSM Trading ?",
    "Quel numéro WhatsApp dois-je utiliser ?",
  ],
  en: [
    "I need a metal / steel quote",
    "I need an aluminum quote",
    "What products does HSM Trading offer?",
    "Which WhatsApp number should I use?",
  ],
};

const genericBadAnswers = [
  "test",
  "testing",
  "asdf",
  "qwerty",
  "abc",
  "abcd",
  "hello",
  "hi",
  "hey",
  "ok",
  "okay",
  "yes",
  "yeah",
  "yep",
  "no",
  "nope",
  "oui",
  "non",
  "bonjour",
  "salut",
];

function normalizeText(text: string) {
  return text.toLowerCase().trim();
}

function hasNumber(text: string) {
  return /\d/.test(text);
}

function wordCount(text: string) {
  return normalizeText(text).split(/\s+/).filter(Boolean).length;
}

function isTooGeneric(text: string) {
  const normalized = normalizeText(text);

  if (!normalized) return true;
  if (normalized.length < 3) return true;
  if (genericBadAnswers.includes(normalized)) return true;

  return false;
}

function includesAny(text: string, words: string[]) {
  const normalized = normalizeText(text);
  return words.some((word) => normalized.includes(word));
}

function detectDepartment(message: string): WhatsAppInquiry | null {
  const text = normalizeText(message);

  const aluminumWords = [
    "aluminium",
    "aluminum",
    "alu",
    "fenêtre",
    "fenetre",
    "window",
    "moustiquaire",
    "fly screen",
    "flyscreen",
    "fly-screen",
    "garde-corps",
    "guardrail",
    "profile",
    "profil",
    "profiles",
    "profils",
  ];

  const steelWords = [
    "steel",
    "metal",
    "métal",
    "acier",
    "iron",
    "coil",
    "bobine",
    "sheet",
    "sheets",
    "tôle",
    "tole",
    "tube",
    "beam",
    "poutrelle",
    "sandwich",
    "shutter",
    "rideau",
    "door",
    "doors",
    "porte",
    "portes",
  ];

  if (includesAny(text, aluminumWords)) return "aluminium";
  if (includesAny(text, steelWords)) return "steel";

  return null;
}

function isQuoteRequest(message: string) {
  return includesAny(message, [
    "quote",
    "quotation",
    "price",
    "pricing",
    "devis",
    "prix",
    "cost",
    "combien",
    "need",
    "want",
    "cherche",
    "besoin",
    "demande",
  ]);
}

function isContactRequest(message: string) {
  return includesAny(message, [
    "contact",
    "phone",
    "whatsapp",
    "number",
    "numéro",
    "numero",
    "call",
    "appeler",
    "téléphone",
    "telephone",
  ]);
}

function isProductQuestion(message: string) {
  return includesAny(message, [
    "product",
    "products",
    "produit",
    "produits",
    "offer",
    "propose",
    "catalog",
    "catalogue",
    "sell",
    "vente",
  ]);
}

function getDepartmentLabel(department: WhatsAppInquiry, lang: Lang) {
  if (department === "aluminium") {
    return lang === "fr" ? "Aluminium" : "Aluminum";
  }

  return lang === "fr" ? "Métal / Acier" : "Metal / Steel";
}

function getContactDetails() {
  return company.whatsappContacts
    .map((contact) => {
      const label = contact.key === "steel" ? "Metal / Steel" : "Aluminum";
      return `${label}: ${contact.label}`;
    })
    .join(" | ");
}

function getInitialMessage(lang: Lang) {
  return lang === "fr"
    ? "Bonjour, je suis l’assistant HSM. Je peux préparer votre demande de devis et choisir le bon service."
    : "Hello, I am the HSM assistant. I can prepare your quote request and choose the right department.";
}

function validateDepartmentAnswer(text: string) {
  return detectDepartment(text) !== null;
}

function validateProductAnswer(text: string, department: WhatsAppInquiry | null) {
  const normalized = normalizeText(text);

  if (isTooGeneric(normalized)) return false;

  const questionLikeWords = [
    "?",
    "what",
    "which",
    "how",
    "why",
    "when",
    "où",
    "ou",
    "comment",
    "pourquoi",
    "quel",
    "quelle",
  ];

  if (questionLikeWords.some((word) => normalized.includes(word))) return false;

  const productWords = [
    "sheet",
    "sheets",
    "coil",
    "coils",
    "tube",
    "tubes",
    "profile",
    "profiles",
    "profil",
    "profils",
    "door",
    "doors",
    "porte",
    "portes",
    "window",
    "windows",
    "fenêtre",
    "fenetre",
    "guardrail",
    "garde-corps",
    "fly screen",
    "moustiquaire",
    "shutter",
    "rideau",
    "sandwich",
    "beam",
    "poutrelle",
    "aluminum",
    "aluminium",
    "steel",
    "metal",
    "acier",
    "métal",
    "tole",
    "tôle",
    "inox",
    "galvanized",
    "galvanisé",
  ];

  const hasProductWord = includesAny(normalized, productWords);

  if (department === "aluminium") {
    const steelOnlyWords = ["steel", "acier", "métal", "metal", "coil", "bobine"];
    if (
      includesAny(normalized, steelOnlyWords) &&
      !includesAny(normalized, ["aluminium", "aluminum", "alu"])
    ) {
      return false;
    }
  }

  if (department === "steel") {
    const aluminumOnlyWords = ["aluminium", "aluminum", "alu"];
    if (
      includesAny(normalized, aluminumOnlyWords) &&
      !includesAny(normalized, ["steel", "acier", "metal", "métal"])
    ) {
      return false;
    }
  }

  if (hasProductWord) return true;
  if (wordCount(normalized) >= 2 && normalized.length >= 6) return true;

  return false;
}

function validateQuantityAnswer(text: string) {
  const normalized = normalizeText(text);

  if (isTooGeneric(normalized)) return false;

  const contactWords = ["phone", "whatsapp", "contact", "numéro", "numero"];
  if (includesAny(normalized, contactWords)) return false;

  if (hasNumber(normalized)) return true;

  const quantityWords = [
    "one",
    "two",
    "three",
    "ten",
    "hundred",
    "thousand",
    "piece",
    "pieces",
    "pcs",
    "meter",
    "meters",
    "metre",
    "metres",
    "mètre",
    "mètres",
    "ton",
    "tons",
    "tonne",
    "tonnes",
    "kg",
    "kilogram",
    "kilograms",
    "few",
    "many",
    "some",
    "plusieurs",
    "beaucoup",
    "carton",
    "cartons",
    "box",
    "boxes",
  ];

  return includesAny(normalized, quantityWords);
}

function validateDimensionsAnswer(text: string) {
  const normalized = normalizeText(text);

  if (!normalized) return false;

  const unsureWords = [
    "not sure",
    "not-sure",
    "unsure",
    "i don't know",
    "i dont know",
    "no idea",
    "pas sûr",
    "pas sur",
    "je ne sais pas",
  ];

  if (includesAny(normalized, unsureWords)) return true;
  if (isTooGeneric(normalized)) return false;

  const irrelevantWords = [
    "phone",
    "whatsapp",
    "contact",
    "delivery",
    "livraison",
    "location",
    "adresse",
  ];

  if (includesAny(normalized, irrelevantWords)) return false;

  const dimensionPattern =
    /(\d+\s?(mm|cm|m|meter|meters|metre|metres|mètre|mètres|kg|ton|tons|tonne|tonnes|gauge|epaisseur|épaisseur|thick|thickness))/i;

  const sizePattern = /\d+\s?(x|×|\*)\s?\d+/i;

  if (dimensionPattern.test(normalized)) return true;
  if (sizePattern.test(normalized)) return true;

  const referenceWords = [
    "standard",
    "custom",
    "sur mesure",
    "reference",
    "référence",
    "ref",
    "model",
    "modèle",
    "modele",
  ];

  if (includesAny(normalized, referenceWords)) return true;

  return false;
}

function validateLocationAnswer(text: string) {
  const normalized = normalizeText(text);

  if (isTooGeneric(normalized)) return false;
  if (normalized.length < 4) return false;

  const invalidLocationWords = [
    "product",
    "produit",
    "quantity",
    "quantité",
    "dimension",
    "price",
    "prix",
    "quote",
    "devis",
    "phone",
    "whatsapp",
  ];

  if (includesAny(normalized, invalidLocationWords)) return false;

  const knownLocationWords = [
    "tunis",
    "sousse",
    "sfax",
    "monastir",
    "mahdia",
    "nabeul",
    "bizerte",
    "gabes",
    "gabès",
    "kairouan",
    "medenine",
    "médenine",
    "tunisia",
    "tunisie",
    "algeria",
    "algérie",
    "libya",
    "libye",
    "france",
    "adresse",
    "address",
    "street",
    "rue",
    "zone",
    "industrial",
    "industrielle",
  ];

  if (includesAny(normalized, knownLocationWords)) return true;
  if (wordCount(normalized) >= 2) return true;

  return false;
}

function validateDetailsAnswer(text: string) {
  const normalized = normalizeText(text);

  if (!normalized) return false;

  const noDetailsWords = ["no", "none", "nothing", "non", "aucun", "rien"];
  if (noDetailsWords.includes(normalized)) return true;

  if (normalized.length >= 3) return true;

  return false;
}

function getValidationMessage(step: QuoteStep, lang: Lang) {
  switch (step) {
    case "department":
      return lang === "fr"
        ? "Veuillez choisir le service concerné: métal / acier ou aluminium."
        : "Please choose the correct department: metal / steel or aluminum.";

    case "product":
      return lang === "fr"
        ? "Cette réponse ne semble pas être un produit. Écrivez par exemple: tôle acier, tube, profil aluminium, porte, fenêtre ou garde-corps."
        : "That does not look like a product. Please write something like: steel sheet, tube, aluminum profile, door, window, or guardrail.";

    case "quantity":
      return lang === "fr"
        ? "Cette réponse ne semble pas être une quantité. Écrivez par exemple: 50 pièces, 200 mètres, 2 tonnes ou 100 kg."
        : "That does not look like a quantity. Please write something like: 50 pieces, 200 meters, 2 tons, or 100 kg.";

    case "dimensions":
      return lang === "fr"
        ? "Cette réponse ne semble pas être une dimension ou référence. Écrivez par exemple: 2mm, 40x40, 3m, référence ABC. Si vous ne savez pas, écrivez: pas sûr."
        : "That does not look like dimensions or a reference. Please write something like: 2mm, 40x40, 3m, reference ABC. If you do not know, write: not sure.";

    case "location":
      return lang === "fr"
        ? "Cette réponse ne semble pas être un lieu de livraison. Écrivez par exemple: Sousse, Tunis, Sfax, Monastir ou votre adresse."
        : "That does not look like a delivery location. Please write something like: Sousse, Tunis, Sfax, Monastir, or your address.";

    case "details":
      return lang === "fr"
        ? "Veuillez ajouter un détail ou écrire simplement: non."
        : "Please add a detail or simply write: no.";

    default:
      return lang === "fr"
        ? "Je n’ai pas bien compris. Pouvez-vous répondre à la question actuelle ?"
        : "I did not fully understand. Please answer the current question.";
  }
}

function getNextQuestion(step: QuoteStep, quote: QuoteData, lang: Lang) {
  const department = quote.department
    ? getDepartmentLabel(quote.department, lang)
    : "";

  switch (step) {
    case "department":
      return lang === "fr"
        ? "Votre demande concerne quel service: métal / acier ou aluminium ?"
        : "Which department is your request for: metal / steel or aluminum?";

    case "product":
      return lang === "fr"
        ? `Parfait, service: ${department}. Quel produit souhaitez-vous ?`
        : `Perfect, department: ${department}. What product do you need?`;

    case "quantity":
      return lang === "fr"
        ? "Quelle quantité souhaitez-vous ?"
        : "What quantity do you need?";

    case "dimensions":
      return lang === "fr"
        ? "Quelles sont les dimensions, épaisseur ou références ? Si vous ne savez pas, écrivez: pas sûr."
        : "What are the dimensions, thickness, or references? If you are not sure, write: not sure.";

    case "location":
      return lang === "fr"
        ? "Quel est le lieu de livraison ?"
        : "What is the delivery location?";

    case "details":
      return lang === "fr"
        ? "Avez-vous des détails supplémentaires ? Si non, écrivez: non."
        : "Do you have any extra details? If not, write: no.";

    case "ready":
      return lang === "fr"
        ? "Votre demande est prête. Voulez-vous l’envoyer sur WhatsApp ?"
        : "Your request is ready. Do you want to send it on WhatsApp?";

    default:
      return "";
  }
}

function buildQuoteMessage(quote: QuoteData, lang: Lang) {
  const department = quote.department
    ? getDepartmentLabel(quote.department, lang)
    : lang === "fr"
      ? "Non précisé"
      : "Not specified";

  if (lang === "fr") {
    return [
      "Bonjour HSM Trading,",
      "Je souhaite demander un devis.",
      "",
      `Service: ${department}`,
      `Produit: ${quote.product || "Non précisé"}`,
      `Quantité: ${quote.quantity || "Non précisée"}`,
      `Dimensions / Références: ${quote.dimensions || "Non précisées"}`,
      `Lieu de livraison: ${quote.location || "Non précisé"}`,
      `Détails supplémentaires: ${quote.details || "Aucun"}`,
    ].join("\n");
  }

  return [
    "Hello HSM Trading,",
    "I would like to request a quote.",
    "",
    `Department: ${department}`,
    `Product: ${quote.product || "Not specified"}`,
    `Quantity: ${quote.quantity || "Not specified"}`,
    `Dimensions / References: ${quote.dimensions || "Not specified"}`,
    `Delivery location: ${quote.location || "Not specified"}`,
    `Extra details: ${quote.details || "None"}`,
  ].join("\n");
}

function getGeneralAnswer(message: string, lang: Lang) {
  const department = detectDepartment(message);

  if (isContactRequest(message)) {
    const contacts = getContactDetails();

    return lang === "fr"
      ? `Voici les bons contacts WhatsApp: ${contacts}. Le premier numéro est pour métal / acier. Le deuxième est pour aluminium.`
      : `Here are the correct WhatsApp contacts: ${contacts}. The first number is for metal / steel. The second number is for aluminum.`;
  }

  if (isProductQuestion(message)) {
    return lang === "fr"
      ? "HSM Trading propose des produits métal / acier et aluminium. Je peux aussi vous aider à préparer une demande de devis étape par étape."
      : "HSM Trading offers metal / steel and aluminum products. I can also help you prepare a quote request step by step.";
  }

  if (department === "aluminium") {
    return lang === "fr"
      ? "Votre demande semble concerner l’aluminium. Je peux préparer un devis pour le deuxième numéro WhatsApp. Quel produit aluminium souhaitez-vous ?"
      : "Your request seems related to aluminum. I can prepare a quote request for the second WhatsApp number. What aluminum product do you need?";
  }

  if (department === "steel") {
    return lang === "fr"
      ? "Votre demande semble concerner métal / acier. Je peux préparer un devis pour le premier numéro WhatsApp. Quel produit souhaitez-vous ?"
      : "Your request seems related to metal / steel. I can prepare a quote request for the first WhatsApp number. What product do you need?";
  }

  return lang === "fr"
    ? "Je peux vous aider à préparer un devis. Dites-moi si votre demande concerne métal / acier ou aluminium."
    : "I can help you prepare a quote request. Tell me if your request is for metal / steel or aluminum.";
}

export default function ChatBubble({ lang }: ChatBubbleProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>("assistant");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [quoteMode, setQuoteMode] = useState(false);
  const [quoteStep, setQuoteStep] = useState<QuoteStep>("department");
  const [quote, setQuote] = useState<QuoteData>(emptyQuote);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const t = content[lang];

  const initialMessages = useMemo<ChatMessage[]>(
    () => [
      {
        role: "bot",
        text: getInitialMessage(lang),
      },
    ],
    [lang]
  );

  useEffect(() => {
    setMessages(initialMessages);
    setQuoteMode(false);
    setQuoteStep("department");
    setQuote(emptyQuote);
    setMessage("");
  }, [initialMessages]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, mode]);

  function addMessages(newMessages: ChatMessage[]) {
    setMessages((current) => [...current, ...newMessages]);
  }

  function startQuoteFlow(initialText?: string) {
    const detectedDepartment = initialText ? detectDepartment(initialText) : null;

    const nextQuote: QuoteData = {
      ...emptyQuote,
      department: detectedDepartment,
    };

    const nextStep: QuoteStep = detectedDepartment ? "product" : "department";

    setQuoteMode(true);
    setQuote(nextQuote);
    setQuoteStep(nextStep);

    addMessages([
      {
        role: "bot",
        text: getNextQuestion(nextStep, nextQuote, lang),
      },
    ]);
  }

  function updateQuoteFlow(userText: string) {
    let nextQuote = { ...quote };
    let nextStep: QuoteStep = quoteStep;

    if (quoteStep === "department") {
      if (!validateDepartmentAnswer(userText)) {
        addMessages([
          {
            role: "bot",
            text: getValidationMessage("department", lang),
          },
        ]);
        return;
      }

      nextQuote.department = detectDepartment(userText);
      nextStep = "product";
    } else if (quoteStep === "product") {
      if (!validateProductAnswer(userText, quote.department)) {
        addMessages([
          {
            role: "bot",
            text: getValidationMessage("product", lang),
          },
        ]);
        return;
      }

      nextQuote.product = userText;
      nextStep = "quantity";
    } else if (quoteStep === "quantity") {
      if (!validateQuantityAnswer(userText)) {
        addMessages([
          {
            role: "bot",
            text: getValidationMessage("quantity", lang),
          },
        ]);
        return;
      }

      nextQuote.quantity = userText;
      nextStep = "dimensions";
    } else if (quoteStep === "dimensions") {
      if (!validateDimensionsAnswer(userText)) {
        addMessages([
          {
            role: "bot",
            text: getValidationMessage("dimensions", lang),
          },
        ]);
        return;
      }

      nextQuote.dimensions = userText;
      nextStep = "location";
    } else if (quoteStep === "location") {
      if (!validateLocationAnswer(userText)) {
        addMessages([
          {
            role: "bot",
            text: getValidationMessage("location", lang),
          },
        ]);
        return;
      }

      nextQuote.location = userText;
      nextStep = "details";
    } else if (quoteStep === "details") {
      if (!validateDetailsAnswer(userText)) {
        addMessages([
          {
            role: "bot",
            text: getValidationMessage("details", lang),
          },
        ]);
        return;
      }

      nextQuote.details = userText;
      nextStep = "ready";
    } else if (quoteStep === "ready") {
      const text = normalizeText(userText);

      if (
        text.includes("yes") ||
        text.includes("send") ||
        text.includes("ok") ||
        text.includes("oui") ||
        text.includes("envoyer")
      ) {
        openQuoteWhatsapp(nextQuote);
        return;
      }

      addMessages([
        {
          role: "bot",
          text:
            lang === "fr"
              ? "D’accord. Vous pouvez cliquer sur le bouton WhatsApp ci-dessous pour envoyer la demande."
              : "Alright. You can click the WhatsApp button below to send the request.",
          action: "send_quote",
        },
      ]);
      return;
    }

    setQuote(nextQuote);
    setQuoteStep(nextStep);

    if (nextStep === "ready") {
      const finalText = buildQuoteMessage(nextQuote, lang);

      addMessages([
        {
          role: "bot",
          text:
            lang === "fr"
              ? `Votre demande est prête:\n\n${finalText}`
              : `Your request is ready:\n\n${finalText}`,
          action: "send_quote",
        },
      ]);

      return;
    }

    addMessages([
      {
        role: "bot",
        text: getNextQuestion(nextStep, nextQuote, lang),
      },
    ]);
  }

  function sendAssistantMessage(customText?: string) {
    const finalMessage = (customText || message).trim();

    if (!finalMessage) return;

    setMessage("");

    addMessages([
      {
        role: "user",
        text: finalMessage,
      },
    ]);

    if (quoteMode) {
      updateQuoteFlow(finalMessage);
      return;
    }

    if (isQuoteRequest(finalMessage) || detectDepartment(finalMessage)) {
      startQuoteFlow(finalMessage);
      return;
    }

    addMessages([
      {
        role: "bot",
        text: getGeneralAnswer(finalMessage, lang),
      },
    ]);
  }

  function openQuoteWhatsapp(quoteToSend = quote) {
    const messageToSend = buildQuoteMessage(quoteToSend, lang);
    const department =
      quoteToSend.department || getInquiryFromText(messageToSend);

    window.open(createWhatsAppLink(department, messageToSend), "_blank");
  }

  function sendWhatsappMessage() {
    const fallback =
      lang === "fr"
        ? "Bonjour HSM Trading, je souhaite avoir plus d’informations sur vos produits."
        : "Hello HSM Trading, I would like more information about your products.";

    const finalMessage = message.trim() || fallback;

    window.open(
      createWhatsAppLink(getInquiryFromText(finalMessage), finalMessage),
      "_blank"
    );

    setMessage("");
  }

  function resetConversation() {
    setMessages(initialMessages);
    setQuoteMode(false);
    setQuoteStep("department");
    setQuote(emptyQuote);
    setMessage("");
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-[5.5rem] left-3 right-3 z-50 flex h-[min(680px,calc(100dvh-7rem))] flex-col overflow-hidden rounded-[1.6rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/25 sm:bottom-24 sm:left-auto sm:right-5 sm:w-[430px]"
          >
            <div className="shrink-0 bg-[#0f3347] px-4 py-3 text-white">
              <div className="flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 ring-1 ring-white/10">
                    {mode === "assistant" ? (
                      <Bot size={21} className="text-orange-200" />
                    ) : (
                      <MessageCircle size={21} className="text-green-300" />
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="flex items-center gap-2 truncate text-base font-black leading-tight">
                      {mode === "assistant"
                        ? lang === "fr"
                          ? "Assistant HSM"
                          : "HSM Assistant"
                        : "WhatsApp"}
                      <Sparkles size={14} className="shrink-0 text-orange-200" />
                    </p>

                    <p className="mt-1 truncate text-xs font-medium leading-tight text-slate-300">
                      {mode === "assistant"
                        ? lang === "fr"
                          ? "Devis métal, acier & aluminium"
                          : "Metal, steel & aluminum quotes"
                        : lang === "fr"
                          ? "Choisissez le bon numéro"
                          : "Choose the right number"}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 transition hover:bg-white/20"
                  aria-label="Close chat"
                  type="button"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="shrink-0 grid grid-cols-2 gap-2 border-b border-slate-200 bg-slate-50 p-2.5">
              <button
                onClick={() => setMode("assistant")}
                className={`rounded-2xl px-4 py-2.5 text-sm font-black transition ${
                  mode === "assistant"
                    ? "bg-[#0f3347] text-white shadow-md shadow-slate-900/10"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
                type="button"
              >
                Assistant
              </button>

              <button
                onClick={() => setMode("whatsapp")}
                className={`rounded-2xl px-4 py-2.5 text-sm font-black transition ${
                  mode === "whatsapp"
                    ? "bg-green-500 text-white shadow-md shadow-green-900/15"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
                type="button"
              >
                WhatsApp
              </button>
            </div>

            {mode === "assistant" ? (
              <>
                <div className="min-h-0 flex-1 overflow-y-auto bg-white p-4">
                  <div className="space-y-4">
                    {messages.map((item, index) => (
                      <motion.div
                        key={`${item.role}-${index}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.22 }}
                        className={`flex gap-3 ${
                          item.role === "user"
                            ? "justify-end"
                            : "justify-start"
                        }`}
                      >
                        {item.role === "bot" && (
                          <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#e68613]">
                            <Bot size={17} />
                          </div>
                        )}

                        <div
                          className={`max-w-[82%] whitespace-pre-line rounded-2xl px-4 py-3 text-sm leading-6 ${
                            item.role === "user"
                              ? "bg-[#0f3347] text-white"
                              : "bg-slate-100 text-slate-700"
                          }`}
                        >
                          {item.text}

                          {item.action === "send_quote" && (
                            <button
                              onClick={() => openQuoteWhatsapp()}
                              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-green-500 px-4 py-3 font-black text-white transition hover:bg-green-600"
                              type="button"
                            >
                              <MessageCircle size={18} />
                              {lang === "fr"
                                ? "Envoyer sur WhatsApp"
                                : "Send on WhatsApp"}
                            </button>
                          )}
                        </div>

                        {item.role === "user" && (
                          <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                            <User size={17} />
                          </div>
                        )}
                      </motion.div>
                    ))}

                    {!quoteMode && (
                      <div className="grid gap-2 pt-1">
                        {starterQuestions[lang].map((question) => (
                          <button
                            key={question}
                            onClick={() => sendAssistantMessage(question)}
                            className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50"
                            type="button"
                          >
                            {question}
                          </button>
                        ))}
                      </div>
                    )}

                    {quoteMode && quote.department && quoteStep !== "ready" && (
                      <div className="rounded-2xl border border-orange-100 bg-orange-50 p-3 text-xs font-bold text-orange-900">
                        {lang === "fr"
                          ? "Service sélectionné:"
                          : "Selected department:"}{" "}
                        {getDepartmentLabel(quote.department, lang)}
                      </div>
                    )}

                    <div ref={messagesEndRef} />
                  </div>
                </div>

                <div className="shrink-0 border-t border-slate-200 bg-slate-50 p-3">
                  <div className="flex gap-2">
                    <input
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") sendAssistantMessage();
                      }}
                      placeholder={
                        quoteMode
                          ? lang === "fr"
                            ? "Répondez ici..."
                            : "Reply here..."
                          : t.chat.placeholder
                      }
                      className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
                    />

                    <button
                      onClick={() => sendAssistantMessage()}
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e68613] text-white transition hover:bg-[#cc720d]"
                      aria-label="Send message"
                      type="button"
                    >
                      <Send size={18} />
                    </button>
                  </div>

                  <div className="mt-3 flex items-center justify-between gap-3">
                    <button
                      onClick={resetConversation}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-500 transition hover:text-[#e68613]"
                      type="button"
                    >
                      <RotateCcw size={13} />
                      {lang === "fr" ? "Réinitialiser" : "Reset"}
                    </button>

                    {!quoteMode && (
                      <button
                        onClick={() => startQuoteFlow()}
                        className="text-xs font-black text-[#e68613] transition hover:text-[#cc720d]"
                        type="button"
                      >
                        {lang === "fr" ? "Créer un devis" : "Create a quote"}
                      </button>
                    )}
                  </div>
                </div>
              </>
            ) : (
              <div className="min-h-0 flex-1 overflow-y-auto bg-white p-4">
                <div className="rounded-3xl bg-green-50 p-4 text-green-900">
                  <CheckCircle2 size={24} />
                  <h3 className="mt-3 text-lg font-black">
                    {lang === "fr"
                      ? "Contact direct WhatsApp"
                      : "Direct WhatsApp contact"}
                  </h3>
                  <p className="mt-2 text-sm leading-6">
                    {lang === "fr"
                      ? "Le message sera envoyé au bon service selon votre demande."
                      : "Your message will be sent to the right department based on your request."}
                  </p>
                </div>

                <div className="mt-4 grid gap-3">
                  {company.whatsappContacts.map((contact) => (
                    <a
                      key={contact.key}
                      href={createWhatsAppLink(
                        contact.key,
                        getDefaultWhatsAppMessage(contact.key, lang)
                      )}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-4 transition hover:border-green-300 hover:bg-green-50"
                    >
                      <div>
                        <p className="text-xs font-black uppercase tracking-wide text-slate-500">
                          {contact.key === "steel"
                            ? "Metal / Steel"
                            : "Aluminum"}
                        </p>
                        <p className="mt-1 font-black text-slate-900">
                          {contact.label}
                        </p>
                      </div>

                      <Phone size={19} className="text-green-600" />
                    </a>
                  ))}
                </div>

                <textarea
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                  rows={4}
                  placeholder={
                    lang === "fr"
                      ? "Bonjour HSM Trading, je souhaite..."
                      : "Hello HSM Trading, I would like..."
                  }
                  className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
                />

                <button
                  onClick={sendWhatsappMessage}
                  className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 font-black text-white transition hover:bg-green-600"
                  type="button"
                >
                  <MessageCircle size={20} />
                  {lang === "fr" ? "Ouvrir WhatsApp" : "Open WhatsApp"}
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((current) => !current)}
        className="fixed bottom-5 right-4 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#0f3347] text-white shadow-2xl shadow-slate-900/30 sm:bottom-6 sm:right-5 sm:h-16 sm:w-16"
        aria-label="Open chat"
        type="button"
        initial={{ opacity: 0, scale: 0.8, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        <motion.span
          className="absolute inset-0 rounded-full bg-[#e68613]/30"
          animate={{
            scale: [1, 1.35, 1],
            opacity: [0.5, 0, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.span
          className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-green-500"
          animate={{
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Zap size={12} fill="white" />
        </motion.span>

        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span
              key="close-icon"
              initial={{ opacity: 0, rotate: -90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <X size={27} />
            </motion.span>
          ) : (
            <motion.span
              key="bot-icon"
              initial={{ opacity: 0, rotate: 90, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: -90, scale: 0.8 }}
              transition={{ duration: 0.2 }}
              className="relative z-10"
            >
              <Bot size={28} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </>
  );
}