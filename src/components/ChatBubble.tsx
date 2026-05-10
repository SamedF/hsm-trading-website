import { useMemo, useState } from "react";
import {
  Bot,
  CheckCircle2,
  MessageCircle,
  Send,
  Sparkles,
  User,
  X,
} from "lucide-react";
import { company, content } from "../data/siteData";
import type { Lang } from "../data/siteData";

type ChatBubbleProps = {
  lang: Lang;
};

type ChatMessage = {
  role: "bot" | "user";
  text: string;
};

type ChatMode = "assistant" | "whatsapp";

const starterQuestions = {
  fr: [
    "Je veux un devis pour des bobines d’acier",
    "Je cherche des panneaux sandwich",
    "Avez-vous des tôles d’acier disponibles ?",
    "Quels produits propose HSM Trading ?",
  ],
  en: [
    "I need a quote for steel coils",
    "I am looking for sandwich panels",
    "Do you have steel sheets available?",
    "What products does HSM Trading offer?",
  ],
};

function getBotAnswer(message: string, lang: Lang) {
  const text = message.toLowerCase();

  if (
    text.includes("bobine") ||
    text.includes("coil") ||
    text.includes("coils")
  ) {
    return lang === "fr"
      ? "HSM Trading propose des bobines d’acier pour la transformation, la fabrication et les applications industrielles. Pour un devis précis, indiquez l’épaisseur, la largeur, la quantité et le lieu de livraison."
      : "HSM Trading offers steel coils for processing, manufacturing and industrial applications. For an accurate quote, please share thickness, width, quantity and delivery location.";
  }

  if (
    text.includes("tôle") ||
    text.includes("tole") ||
    text.includes("sheet") ||
    text.includes("sheets")
  ) {
    return lang === "fr"
      ? "Nous proposons des tôles d’acier pour la construction, la fabrication et les applications industrielles. Donnez-nous l’épaisseur, les dimensions et la quantité souhaitée."
      : "We provide steel sheets for construction, manufacturing and industrial applications. Please send thickness, dimensions and required quantity.";
  }

  if (
    text.includes("sandwich") ||
    text.includes("panel") ||
    text.includes("panneaux")
  ) {
    return lang === "fr"
      ? "Les panneaux sandwich HSM sont adaptés aux entrepôts, façades, toitures et bâtiments industriels. Pour vous orienter, précisez l’épaisseur, le type d’isolation et la surface totale."
      : "HSM sandwich panels are suitable for warehouses, facades, roofing and industrial buildings. Please share thickness, insulation type and total surface area.";
  }

  if (
    text.includes("rideau") ||
    text.includes("shutter") ||
    text.includes("slats") ||
    text.includes("guide")
  ) {
    return lang === "fr"
      ? "HSM propose des lames et guides pour rideaux métalliques, adaptés aux projets commerciaux, industriels et résidentiels. Vous pouvez préciser le type de lame, les dimensions et la quantité."
      : "HSM offers metal shutter slats and guides for commercial, industrial and residential projects. Please specify slat type, dimensions and quantity.";
  }

  if (
    text.includes("produit") ||
    text.includes("products") ||
    text.includes("offer") ||
    text.includes("propose")
  ) {
    return lang === "fr"
      ? "HSM Trading propose des bobines d’acier, tôles d’acier, tubes ronds et carrés, poutrelles, panneaux sandwich, lames de rideaux métalliques et guides."
      : "HSM Trading offers steel coils, steel sheets, round and square tubes, steel beams, sandwich panels, metal shutter slats and guides.";
  }

  if (
    text.includes("contact") ||
    text.includes("phone") ||
    text.includes("email") ||
    text.includes("whatsapp")
  ) {
    return lang === "fr"
      ? `Vous pouvez contacter HSM Trading par téléphone ou WhatsApp au ${company.phone}, ou par email à ${company.email}.`
      : `You can contact HSM Trading by phone or WhatsApp at ${company.phone}, or by email at ${company.email}.`;
  }

  return lang === "fr"
    ? "Merci pour votre message. Pour vous répondre précisément, indiquez le produit recherché, la quantité, les dimensions, l’épaisseur et le lieu de livraison. Vous pouvez aussi basculer vers WhatsApp."
    : "Thank you for your message. To answer accurately, please share the product needed, quantity, dimensions, thickness and delivery location. You can also switch to WhatsApp.";
}

export default function ChatBubble({ lang }: ChatBubbleProps) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<ChatMode>("assistant");
  const [message, setMessage] = useState("");

  const initialMessages = useMemo<ChatMessage[]>(
    () => [
      {
        role: "bot",
        text:
          lang === "fr"
            ? "Bonjour, je suis l’assistant HSM. Je peux vous aider à choisir un produit, préparer un devis ou vous rediriger vers WhatsApp."
            : "Hello, I am the HSM assistant. I can help you choose a product, prepare a quote request or redirect you to WhatsApp.",
      },
    ],
    [lang]
  );

  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const t = content[lang];

  function openWhatsapp(text: string) {
    window.open(
      `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`,
      "_blank"
    );
  }

  function sendAssistantMessage(customText?: string) {
    const finalMessage = (customText || message).trim();

    if (!finalMessage) return;

    const botAnswer = getBotAnswer(finalMessage, lang);

    setMessages((current) => [
      ...current,
      { role: "user", text: finalMessage },
      { role: "bot", text: botAnswer },
    ]);

    setMessage("");
  }

  function sendWhatsappMessage() {
    const fallback =
      lang === "fr"
        ? "Bonjour HSM Trading, je souhaite avoir plus d’informations sur vos produits."
        : "Hello HSM Trading, I would like more information about your products.";

    openWhatsapp(message.trim() || fallback);
    setMessage("");
  }

  function resetConversation() {
    setMessages(initialMessages);
  }

  return (
    <>
      {open && (
        <div className="fixed bottom-24 right-4 z-50 flex max-h-[calc(100vh-8rem)] w-[calc(100%-2rem)] max-w-md flex-col overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/20 dark:border-slate-700 dark:bg-slate-950">
          <div className="flex items-center justify-between bg-[#0f3347] p-5 text-white">
            <div>
              <p className="flex items-center gap-2 font-black">
                <Sparkles size={18} />
                {mode === "assistant" ? t.chat.title : "WhatsApp"}
              </p>
              <p className="text-sm text-slate-300">
                {mode === "assistant" ? t.chat.subtitle : company.phone}
              </p>
            </div>

            <button
              onClick={() => setOpen(false)}
              className="rounded-full bg-white/10 p-2 hover:bg-white/20"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-2 border-b border-slate-200 bg-slate-50 p-3 dark:border-slate-800 dark:bg-slate-900">
            <button
              onClick={() => setMode("assistant")}
              className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
                mode === "assistant"
                  ? "bg-[#0f3347] text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              Assistant
            </button>

            <button
              onClick={() => setMode("whatsapp")}
              className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
                mode === "whatsapp"
                  ? "bg-green-500 text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100 dark:bg-slate-950 dark:text-slate-200 dark:hover:bg-slate-800"
              }`}
            >
              WhatsApp
            </button>
          </div>

          {mode === "assistant" ? (
            <>
              <div className="flex-1 space-y-4 overflow-y-auto p-5">
                {messages.map((item, index) => (
                  <div
                    key={`${item.role}-${index}`}
                    className={`flex gap-3 ${
                      item.role === "user" ? "justify-end" : "justify-start"
                    }`}
                  >
                    {item.role === "bot" && (
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#e68613] dark:bg-orange-900/30">
                        <Bot size={17} />
                      </div>
                    )}

                    <div
                      className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                        item.role === "user"
                          ? "bg-[#0f3347] text-white"
                          : "bg-slate-100 text-slate-700 dark:bg-slate-900 dark:text-slate-200"
                      }`}
                    >
                      {item.text}
                    </div>

                    {item.role === "user" && (
                      <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                        <User size={17} />
                      </div>
                    )}
                  </div>
                ))}

                <div className="grid gap-2 pt-2">
                  {starterQuestions[lang].map((question) => (
                    <button
                      key={question}
                      onClick={() => sendAssistantMessage(question)}
                      className="rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50 dark:border-slate-800 dark:text-slate-200 dark:hover:bg-slate-900"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-200 p-4 dark:border-slate-800">
                <div className="flex gap-2">
                  <input
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") sendAssistantMessage();
                    }}
                    placeholder={t.chat.placeholder}
                    className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#e68613] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
                  />

                  <button
                    onClick={() => sendAssistantMessage()}
                    className="rounded-2xl bg-[#e68613] px-4 text-white hover:bg-[#cc720d]"
                    aria-label="Send message"
                  >
                    <Send size={18} />
                  </button>
                </div>

                <button
                  onClick={resetConversation}
                  className="mt-3 text-xs font-bold text-slate-500 hover:text-[#e68613]"
                >
                  {lang === "fr" ? "Réinitialiser la conversation" : "Reset conversation"}
                </button>
              </div>
            </>
          ) : (
            <div className="p-5">
              <div className="rounded-3xl bg-green-50 p-5 text-green-900 dark:bg-green-900/20 dark:text-green-100">
                <CheckCircle2 />
                <h3 className="mt-4 text-xl font-black">
                  {lang === "fr"
                    ? "Contact direct WhatsApp"
                    : "Direct WhatsApp contact"}
                </h3>
                <p className="mt-3 text-sm leading-6">
                  {lang === "fr"
                    ? "Écrivez votre message, puis ouvrez WhatsApp pour discuter directement avec HSM Trading."
                    : "Write your message, then open WhatsApp to speak directly with HSM Trading."}
                </p>
              </div>

              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={5}
                placeholder={
                  lang === "fr"
                    ? "Bonjour HSM Trading, je souhaite..."
                    : "Hello HSM Trading, I would like..."
                }
                className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#e68613] dark:border-slate-700 dark:bg-slate-900 dark:text-white"
              />

              <button
                onClick={sendWhatsappMessage}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 font-black text-white transition hover:bg-green-600"
              >
                <MessageCircle size={20} />
                {lang === "fr" ? "Ouvrir WhatsApp" : "Open WhatsApp"}
              </button>
            </div>
          )}
        </div>
      )}

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-5 z-50 inline-flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl shadow-green-900/30 transition hover:scale-105 hover:bg-green-600"
        aria-label="Open chat"
      >
        <MessageCircle size={30} />
      </button>
    </>
  );
}