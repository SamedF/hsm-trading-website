import { AnimatePresence, motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Bot,
  CheckCircle2,
  MessageCircle,
  Send,
  Sparkles,
  User,
  X,
  Zap,
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

  if (text.includes("bobine") || text.includes("coil")) {
    return lang === "fr"
      ? "HSM Trading propose des bobines d’acier pour la transformation, la fabrication et les applications industrielles. Pour un devis précis, indiquez l’épaisseur, la largeur, la quantité et le lieu de livraison."
      : "HSM Trading offers steel coils for processing, manufacturing and industrial applications. For an accurate quote, please share thickness, width, quantity and delivery location.";
  }

  if (
    text.includes("tôle") ||
    text.includes("tole") ||
    text.includes("sheet")
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
      ? "Les panneaux sandwich HSM sont adaptés aux entrepôts, façades, toitures et bâtiments industriels. Précisez l’épaisseur, le type d’isolation et la surface totale."
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

    setMessages((current) => [
      ...current,
      { role: "user", text: finalMessage },
      { role: "bot", text: getBotAnswer(finalMessage, lang) },
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
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: 28,
              scale: 0.96,
            }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              y: 24,
              scale: 0.96,
            }}
            transition={{
              duration: 0.28,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="fixed bottom-[5.5rem] left-3 right-3 z-50 flex max-h-[calc(100dvh-6.5rem)] flex-col overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-2xl shadow-slate-900/25 sm:bottom-24 sm:left-auto sm:right-5 sm:w-[calc(100%-2.5rem)] sm:max-w-md sm:rounded-[2rem]"
          >
            <div className="relative overflow-hidden bg-[#0f3347] p-4 text-white sm:p-5">
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#e68613]/30 blur-2xl" />
              <div className="absolute -bottom-12 left-12 h-32 w-32 rounded-full bg-green-400/20 blur-2xl" />

              <div className="relative flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                    {mode === "assistant" ? (
                      <Bot size={22} className="text-orange-200" />
                    ) : (
                      <MessageCircle size={22} className="text-green-300" />
                    )}
                  </div>

                  <div>
                    <p className="flex items-center gap-2 font-black">
                      {mode === "assistant" ? t.chat.title : "WhatsApp"}
                      <Sparkles size={15} className="text-orange-200" />
                    </p>
                    <p className="text-sm text-slate-300">
                      {mode === "assistant" ? t.chat.subtitle : company.phone}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="rounded-full bg-white/10 p-2 transition hover:bg-white/20"
                  aria-label="Close chat"
                  type="button"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-2 border-b border-slate-200 bg-slate-50 p-3">
              <button
                onClick={() => setMode("assistant")}
                className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
                  mode === "assistant"
                    ? "bg-[#0f3347] text-white shadow-lg shadow-slate-900/10"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
                type="button"
              >
                Assistant
              </button>

              <button
                onClick={() => setMode("whatsapp")}
                className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
                  mode === "whatsapp"
                    ? "bg-green-500 text-white shadow-lg shadow-green-900/15"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
                type="button"
              >
                WhatsApp
              </button>
            </div>

            {mode === "assistant" ? (
              <>
                <div className="flex-1 space-y-4 overflow-y-auto p-4 sm:p-5">
                  {messages.map((item, index) => (
                    <motion.div
                      key={`${item.role}-${index}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.22 }}
                      className={`flex gap-3 ${
                        item.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      {item.role === "bot" && (
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-[#e68613]">
                          <Bot size={17} />
                        </div>
                      )}

                      <div
                        className={`max-w-[82%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                          item.role === "user"
                            ? "bg-[#0f3347] text-white"
                            : "bg-slate-100 text-slate-700"
                        }`}
                      >
                        {item.text}
                      </div>

                      {item.role === "user" && (
                        <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-700">
                          <User size={17} />
                        </div>
                      )}
                    </motion.div>
                  ))}

                  <div className="grid gap-2 pt-2">
                    {starterQuestions[lang].map((question) => (
                      <button
                        key={question}
                        onClick={() => sendAssistantMessage(question)}
                        className="rounded-2xl border border-slate-200 px-4 py-3 text-left text-sm font-semibold text-slate-700 transition hover:border-orange-200 hover:bg-orange-50"
                        type="button"
                      >
                        {question}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="border-t border-slate-200 p-4">
                  <div className="flex gap-2">
                    <input
                      value={message}
                      onChange={(event) => setMessage(event.target.value)}
                      onKeyDown={(event) => {
                        if (event.key === "Enter") sendAssistantMessage();
                      }}
                      placeholder={t.chat.placeholder}
                      className="min-w-0 flex-1 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
                    />

                    <button
                      onClick={() => sendAssistantMessage()}
                      className="rounded-2xl bg-[#e68613] px-4 text-white transition hover:bg-[#cc720d]"
                      aria-label="Send message"
                      type="button"
                    >
                      <Send size={18} />
                    </button>
                  </div>

                  <button
                    onClick={resetConversation}
                    className="mt-3 text-xs font-bold text-slate-500 transition hover:text-[#e68613]"
                    type="button"
                  >
                    {lang === "fr"
                      ? "Réinitialiser la conversation"
                      : "Reset conversation"}
                  </button>
                </div>
              </>
            ) : (
              <div className="overflow-y-auto p-4 sm:p-5">
                <div className="rounded-3xl bg-green-50 p-5 text-green-900">
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
                  onChange={(event) => setMessage(event.target.value)}
                  rows={5}
                  placeholder={
                    lang === "fr"
                      ? "Bonjour HSM Trading, je souhaite..."
                      : "Hello HSM Trading, I would like..."
                  }
                  className="mt-4 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
                />

                <button
                  onClick={sendWhatsappMessage}
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-green-500 px-5 py-4 font-black text-white transition hover:bg-green-600"
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