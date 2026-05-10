import { Download, ExternalLink, FileText } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { content } from "../data/siteData";
import type { Lang } from "../data/siteData";

type CatalogProps = {
  lang: Lang;
};

export default function Catalogues({ lang }: CatalogProps) {
  const t = content[lang];

  const catalogPath = "/catalogs/hsm-product-catalog.pdf";

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

        <div className="rounded-[2rem] border border-white/10 bg-white/10 p-6 shadow-2xl shadow-slate-950/20 backdrop-blur">
          <div className="rounded-[1.5rem] bg-white p-8 text-slate-950">
            <div className="inline-flex rounded-2xl bg-[#557447]/10 p-4 text-[#557447]">
              <FileText size={42} />
            </div>

            <h3 className="mt-6 text-3xl font-black">
              HSM Product Catalog
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Steel Products · Metal Shutters · Metal Shutter Guides · Industrial Solutions
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              <a
                href={catalogPath}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#e68613] px-6 py-4 font-black text-white transition hover:-translate-y-0.5 hover:bg-[#cc720d]"
              >
                {t.catalog.cta}
                <ExternalLink size={18} />
              </a>

              <a
                href={catalogPath}
                download
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-6 py-4 font-black text-[#0f3347] transition hover:-translate-y-0.5 hover:bg-slate-50"
              >
                {lang === "fr" ? "Télécharger" : "Download"}
                <Download size={18} />
              </a>
            </div>

            <p className="mt-5 text-sm leading-6 text-slate-500">
              {lang === "fr"
                ? "Le catalogue s’ouvrira dans un nouvel onglet."
                : "The catalog will open in a new tab."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}