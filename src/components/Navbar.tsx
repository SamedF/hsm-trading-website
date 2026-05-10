import { AnimatePresence, motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";
import { company, content, navItems } from "../data/siteData";
import type { Lang } from "../data/siteData";
import logo from "../assets/hsm-logo.jpeg";

type NavbarProps = {
  lang: Lang;
  setLang: (lang: Lang) => void;
};

function FlagIcon({ lang }: { lang: Lang }) {
  if (lang === "fr") {
    return (
      <span className="grid h-5 w-7 grid-cols-3 overflow-hidden rounded-[4px] border border-slate-200 shadow-sm">
        <span className="bg-blue-700" />
        <span className="bg-white" />
        <span className="bg-red-600" />
      </span>
    );
  }

  return (
    <span className="relative h-5 w-7 overflow-hidden rounded-[4px] border border-slate-200 bg-white shadow-sm">
      <span className="absolute left-0 top-0 h-[7.69%] w-full bg-red-600" />
      <span className="absolute left-0 top-[7.69%] h-[7.69%] w-full bg-white" />
      <span className="absolute left-0 top-[15.38%] h-[7.69%] w-full bg-red-600" />
      <span className="absolute left-0 top-[23.07%] h-[7.69%] w-full bg-white" />
      <span className="absolute left-0 top-[30.76%] h-[7.69%] w-full bg-red-600" />
      <span className="absolute left-0 top-[38.45%] h-[7.69%] w-full bg-white" />
      <span className="absolute left-0 top-[46.14%] h-[7.69%] w-full bg-red-600" />
      <span className="absolute left-0 top-[53.83%] h-[7.69%] w-full bg-white" />
      <span className="absolute left-0 top-[61.52%] h-[7.69%] w-full bg-red-600" />
      <span className="absolute left-0 top-[69.21%] h-[7.69%] w-full bg-white" />
      <span className="absolute left-0 top-[76.9%] h-[7.69%] w-full bg-red-600" />
      <span className="absolute left-0 top-[84.59%] h-[7.69%] w-full bg-white" />
      <span className="absolute left-0 top-[92.28%] h-[7.69%] w-full bg-red-600" />

      <span className="absolute left-0 top-0 h-[54%] w-[42%] bg-blue-700">
        <span className="absolute left-[3px] top-[3px] h-1 w-1 rounded-full bg-white" />
        <span className="absolute left-[9px] top-[3px] h-1 w-1 rounded-full bg-white" />
        <span className="absolute left-[15px] top-[3px] h-1 w-1 rounded-full bg-white" />
        <span className="absolute left-[5px] top-[8px] h-1 w-1 rounded-full bg-white" />
        <span className="absolute left-[12px] top-[8px] h-1 w-1 rounded-full bg-white" />
      </span>
    </span>
  );
}

const navContainerVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -18,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
      staggerChildren: 0.055,
      delayChildren: 0.12,
    },
  },
};

const navItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const mobileMenuVariants: Variants = {
  closed: {
    opacity: 0,
    height: 0,
    transition: {
      duration: 0.25,
      ease: "easeInOut",
      when: "afterChildren",
      staggerChildren: 0.025,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    height: "auto",
    transition: {
      duration: 0.35,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.055,
    },
  },
};

const mobileItemVariants: Variants = {
  closed: {
    opacity: 0,
    x: -14,
  },
  open: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.26,
      ease: "easeOut",
    },
  },
};

export default function Navbar({ lang, setLang }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  

  const t = content[lang];
  const nextLang = lang === "fr" ? "en" : "fr";

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 16);

      const sections = navItems
        .map((item) => item.href.replace("#", ""))
        .map((id) => document.getElementById(id))
        .filter(Boolean) as HTMLElement[];

      const current = sections.find((section) => {
        const rect = section.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom >= 140;
      });

      if (current?.id) {
        setActiveSection(current.id);
      }
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

 function switchLanguage() {
  setLang(nextLang);
}

  function closeMobileMenu() {
    setOpen(false);
  }

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={navContainerVariants}
      className={`sticky top-0 z-50 border-b transition-colors duration-300 ${
        scrolled
          ? "border-slate-200 bg-white/95 shadow-lg shadow-slate-900/5 backdrop-blur-xl"
          : "border-slate-100 bg-white"
      }`}
    >
      <motion.div
        layout
        className={`mx-auto grid max-w-[1500px] grid-cols-[auto_1fr_auto] items-center gap-8 px-8 transition-all duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <motion.a
          href="#home"
          className="flex shrink-0 items-center"
          variants={navItemVariants}
          whileHover={{ scale: 1.035 }}
          whileTap={{ scale: 0.97 }}
          transition={{ type: "spring", stiffness: 320, damping: 22 }}
        >
          <motion.img
            src={logo}
            alt="HSM Trading"
            className="h-11 w-auto max-w-[210px] object-contain"
            animate={{
              height: scrolled ? 40 : 44,
            }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          />
        </motion.a>

        <motion.nav
          className="hidden min-w-0 items-center justify-center gap-1 xl:flex"
          variants={navContainerVariants}
        >
          {navItems.map((item) => {
            const sectionId = item.href.replace("#", "");
            const isActive = activeSection === sectionId;

            return (
              <motion.a
                key={item.key}
                href={item.href}
                variants={navItemVariants}
                whileHover={{
                  y: -2,
                  scale: 1.03,
                }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 360, damping: 24 }}
                className={`group relative whitespace-nowrap rounded-xl px-3 py-2 text-[13px] font-black transition 2xl:px-4 2xl:text-sm ${
                  isActive
                    ? "text-[#0f3347]"
                    : "text-slate-700 hover:text-[#0f3347]"
                }`}
              >
                {t.nav[item.key as keyof typeof t.nav]}

                <motion.span
                  className="absolute bottom-1 left-3 h-[2px] rounded-full bg-[#e68613]"
                  initial={false}
                  animate={{
                    width: isActive ? "calc(100% - 1.5rem)" : "0%",
                  }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                />

                <span className="absolute inset-0 -z-10 rounded-xl bg-orange-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </motion.a>
            );
          })}
        </motion.nav>

        <motion.div
          className="hidden shrink-0 items-center justify-end gap-2 xl:flex"
          variants={navContainerVariants}
        >
          <button
  onClick={switchLanguage}
  className="relative top-[2px] inline-flex h-11 items-center gap-2 rounded-2xl border border-slate-200 bg-white px-3 text-sm font-black text-slate-700 shadow-sm transition hover:border-[#e68613]/40 hover:bg-orange-50"
  aria-label="Switch language"
  type="button"
>
  <AnimatePresence mode="wait" initial={false}>
    <motion.span
      key={nextLang}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="inline-flex"
    >
      <FlagIcon lang={nextLang} />
    </motion.span>
  </AnimatePresence>

  <AnimatePresence mode="wait" initial={false}>
    <motion.span
      key={lang}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.18 }}
    >
      {lang === "fr" ? "EN" : "FR"}
    </motion.span>
  </AnimatePresence>
</button>

          <motion.a
            variants={navItemVariants}
            href={`tel:${company.phone}`}
            whileHover={{
              y: -2,
              scale: 1.025,
            }}
            whileTap={{ scale: 0.96 }}
            className="hidden h-11 items-center gap-2 rounded-2xl px-3 text-sm font-black text-slate-700 transition hover:bg-slate-100 2xl:inline-flex"
          >
            <Phone size={16} />
            <span>{company.phone}</span>
          </motion.a>

          <motion.a
            variants={navItemVariants}
            href="#quote"
            whileHover={{
              y: -3,
              scale: 1.035,
              boxShadow: "0 18px 35px rgba(230, 134, 19, 0.35)",
            }}
            whileTap={{ scale: 0.96 }}
            className="relative inline-flex h-12 items-center overflow-hidden rounded-2xl bg-[#e68613] px-5 text-sm font-black text-white shadow-lg shadow-orange-600/20 transition hover:bg-[#cc720d] 2xl:px-6"
          >
            <motion.span
              className="absolute inset-0 bg-white/20"
              initial={{ x: "-120%" }}
              whileHover={{ x: "120%" }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
            />
            <span className="relative z-10">{t.nav.quote}</span>
          </motion.a>
        </motion.div>

        <motion.button
          variants={navItemVariants}
          onClick={() => setOpen((current) => !current)}
          whileTap={{ scale: 0.92 }}
          whileHover={{ scale: 1.04 }}
          className="ml-auto rounded-2xl border border-slate-200 bg-white p-2 text-slate-800 shadow-sm transition hover:bg-slate-50 xl:hidden"
          aria-label="Menu"
          type="button"
        >
          <AnimatePresence mode="wait" initial={false}>
            {open ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <X />
              </motion.span>
            ) : (
              <motion.span
                key="menu"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.18 }}
              >
                <Menu />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="mobile-menu"
            variants={mobileMenuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="overflow-hidden border-t border-slate-200 bg-white xl:hidden"
          >
            <motion.div className="flex flex-col gap-2 px-5 py-5">
              {navItems.map((item) => (
                <motion.a
                  key={item.key}
                  href={item.href}
                  variants={mobileItemVariants}
                  onClick={closeMobileMenu}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-2xl px-4 py-3 font-black text-slate-700 transition hover:bg-slate-100"
                >
                  {t.nav[item.key as keyof typeof t.nav]}
                </motion.a>
              ))}

              <motion.button
                onClick={switchLanguage}
                variants={mobileItemVariants}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 px-4 py-3 text-left font-black text-slate-700 transition hover:bg-slate-50"
                type="button"
              >
                <FlagIcon lang={nextLang} />
                <span>
                  {lang === "fr" ? "English version" : "Version française"}
                </span>
              </motion.button>

              <motion.a
                variants={mobileItemVariants}
                href={`tel:${company.phone}`}
                className="rounded-2xl px-4 py-3 font-black text-slate-700 transition hover:bg-slate-100"
              >
                {company.phone}
              </motion.a>

              <motion.a
                variants={mobileItemVariants}
                href="#quote"
                onClick={closeMobileMenu}
                whileTap={{ scale: 0.97 }}
                className="mt-3 rounded-2xl bg-[#e68613] px-5 py-4 text-center text-sm font-black text-white"
              >
                {t.nav.quote}
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}