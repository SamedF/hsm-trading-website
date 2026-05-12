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

function getSavedLanguage(): Lang {
  const savedLang = localStorage.getItem("hsm-language");

  if (savedLang === "fr" || savedLang === "en") {
    return savedLang;
  }

  return "fr";
}

export default function App() {
  const [lang, setLangState] = useState<Lang>(getSavedLanguage);
  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  function setLang(nextLang: Lang) {
    localStorage.setItem("hsm-language", nextLang);
    setLangState(nextLang);
  }

  function handleLanguageChange(nextLang: Lang) {
    if (nextLang === lang || isChangingLanguage) return;

    setIsChangingLanguage(true);

    window.setTimeout(() => {
      setLang(nextLang);
    }, 180);

    window.setTimeout(() => {
      setIsChangingLanguage(false);
    }, 560);
  }

  useEffect(() => {
    document.documentElement.lang = lang;
    localStorage.setItem("hsm-language", lang);
  }, [lang]);

  return (
    <div className="no-drag min-h-screen overflow-x-hidden bg-white text-slate-950">
      <Navbar lang={lang} setLang={handleLanguageChange} />

      <AnimatePresence mode="wait">
        <motion.main
          key={lang}
          initial={{
            opacity: 0,
            y: 12,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -12,
          }}
          transition={{
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="overflow-x-hidden"
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
            className="pointer-events-none fixed inset-0 z-[999] flex items-center justify-center bg-[#0f3347]/25 px-5 backdrop-blur-[2px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.18 }}
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
              className="w-full max-w-xs rounded-[1.5rem] border border-white/20 bg-white px-6 py-5 text-center shadow-2xl shadow-slate-950/20"
            >
              <p className="text-xs font-black uppercase tracking-[0.22em] text-[#e68613]">
                HSM Trading
              </p>

              <p className="mt-2 text-lg font-black text-[#0f3347]">
                {lang === "fr" ? "Switching to English" : "Passage au français"}
              </p>

              <div className="mx-auto mt-4 flex items-center justify-center gap-2">
                {[0, 0.12, 0.24].map((delay) => (
                  <motion.span
                    key={delay}
                    className="h-2 w-2 rounded-full bg-[#e68613]"
                    animate={{ y: [0, -5, 0] }}
                    transition={{
                      duration: 0.55,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay,
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}