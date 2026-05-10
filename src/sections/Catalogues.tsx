import { Download, FileText } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { company, content } from "../data/siteData";
import type { Lang } from "../data/siteData";

type CatalogProps = {
  lang: Lang;
};

export default function Catalog({ lang }: CatalogProps) {
  const t = content[lang];

  const message =
    lang === "fr"
      ? "Bonjour HSM Trading, je souhaite recevoir votre catalogue produits."
      : "Hello HSM Trading, I would like to receive your product catalog.";

  return (
    <section id="catalog" className="bg-[#0f3347] px-5 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.9fr]">
        <SectionHeader
          align="left"
          eyebrow={t.catalog.eyebrow}
          title={t.catalog.title}
          text={t.catalog.text}
          light
        />

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 backdrop-blur">
          <div className="rounded-[1.5rem] bg-white p-8 text-slate-950">
            <FileText className="text-[#557447]" size={42} />
            <h3 className="mt-6 text-3xl font-black">HSM Product Catalog</h3>
            <p className="mt-4 leading-8 text-slate-600">
              Steel Products · Metal Shutters · Shutter Guides · Industrial Solutions
            </p>

            <a
              href={`https://wa.me/${company.whatsapp}?text=${encodeURIComponent(
                message
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-[#e68613] px-6 py-4 font-black text-white transition hover:bg-[#cc720d]"
            >
              {t.catalog.cta}
              <Download size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}