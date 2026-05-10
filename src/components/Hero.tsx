import { ArrowRight, Building2, Globe2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../assets/hero.png";
import logo from "../assets/hsm-logo.jpeg";
import { company, content } from "../data/siteData";
import type { Lang } from "../data/siteData";

type HeroProps = {
  lang: Lang;
};

export default function Hero({ lang }: HeroProps) {
  const t = content[lang];

  return (
    <section id="home" className="relative overflow-hidden bg-[#0f3347] text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(230,134,19,0.35),transparent_35%),radial-gradient(circle_at_90%_20%,rgba(98,124,78,0.4),transparent_30%)]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-8 inline-flex rounded-3xl bg-white p-4 shadow-2xl shadow-black/20">
            <img src={logo} alt="HSM Trading" className="h-16 w-auto" />
          </div>

          <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-orange-100 backdrop-blur">
            {t.hero.badge}
          </p>

          <h1 className="max-w-4xl text-5xl font-black tracking-tight md:text-7xl">
            {t.hero.title}
          </h1>

          <p className="mt-7 max-w-2xl text-lg leading-9 text-slate-200 md:text-xl">
            {t.hero.text}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#e68613] px-6 py-4 font-black text-white shadow-lg shadow-orange-700/25 transition hover:bg-[#cc720d]"
            >
              {t.hero.primary}
              <ArrowRight size={18} />
            </a>

            <a
              href="#quote"
              className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/20 bg-white/10 px-6 py-4 font-black text-white backdrop-blur transition hover:bg-white/15"
            >
              {t.hero.secondary}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {t.stats.map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur"
              >
                <p className="text-3xl font-black text-white">{value}</p>
                <p className="mt-1 text-sm leading-5 text-slate-300">{label}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="rounded-[2rem] border border-white/10 bg-white/10 p-4 shadow-2xl backdrop-blur"
        >
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <img
              src={heroImage}
              alt="Steel and industrial products"
              className="h-[470px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-[#0f3347]/80 via-transparent to-[#e68613]/35" />

            <div className="absolute bottom-5 left-5 right-5 grid gap-4 md:grid-cols-3">
              {[
                [ShieldCheck, "Quality"],
                [Globe2, "Africa Export"],
                [Building2, "Industrial Supply"],
              ].map(([Icon, label]) => (
                <div
                  key={label as string}
                  className="rounded-2xl border border-white/15 bg-white/15 p-4 backdrop-blur-xl"
                >
                  <Icon className="text-orange-300" size={24} />
                  <p className="mt-3 text-sm font-black">{label as string}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="relative border-t border-white/10 bg-white/5 px-5 py-4 text-center text-sm font-semibold text-slate-200">
        {company.location} · {company.email} · {company.phone}
      </div>
    </section>
  );
}