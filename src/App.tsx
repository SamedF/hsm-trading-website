import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import type { Lang } from "./data/siteData";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./sections/About";
import Products from "./sections/Products";
import Services from "./sections/Services";
import Catalog from "./sections/Catalogues";
import QuoteForm from "./components/QuoteForm";
import Footer from "./components/Footer";
import ChatBubble from "./components/ChatBubble";

export default function App() {
  const [lang, setLang] = useState<Lang>("fr");
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  function handleLanguageChange(nextLang: Lang) {
    if (nextLang === lang || isChangingLanguage) return;

    setIsChangingLanguage(true);

    window.setTimeout(() => {
      setLang(nextLang);
    }, 220);

    window.setTimeout(() => {
      setIsChangingLanguage(false);
    }, 720);
  }

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  return (
    <div className="min-h-screen bg-white text-slate-950">
      <Navbar lang={lang} setLang={handleLanguageChange} />

      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{
            opacity: 0,
            y: 18,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          exit={{
            opacity: 0,
            y: -18,
            filter: "blur(8px)",
          }}
          transition={{
            duration: 0.48,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          <Hero lang={lang} />
          <About lang={lang} />
          <Products lang={lang} />
          <Services lang={lang} />
          <Catalog lang={lang} />
          <QuoteForm lang={lang} />
          <Footer lang={lang} />
        </motion.main>
      </AnimatePresence>

      <ChatBubble lang={lang} />

      <AnimatePresence>
        {isChangingLanguage && (
          <motion.div
            className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center bg-[#0f3347]/35 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <motion.div
              initial={{ scale: 0.86, opacity: 0, y: 14 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.92, opacity: 0, y: -10 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="rounded-[2rem] border border-white/20 bg-white px-7 py-5 text-center shadow-2xl shadow-slate-950/20"
            >
              <p className="text-sm font-black uppercase tracking-[0.24em] text-[#e68613]">
                HSM Trading
              </p>

              <p className="mt-2 text-xl font-black text-[#0f3347]">
                {lang === "fr"
                  ? "Switching to English"
                  : "Passage au français"}
              </p>

              <div className="mx-auto mt-4 flex w-32 items-center justify-center gap-2">
                <motion.span
                  className="h-2 w-2 rounded-full bg-[#e68613]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.span
                  className="h-2 w-2 rounded-full bg-[#e68613]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.12,
                  }}
                />
                <motion.span
                  className="h-2 w-2 rounded-full bg-[#e68613]"
                  animate={{ y: [0, -6, 0] }}
                  transition={{
                    duration: 0.6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 0.24,
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}