import SectionHeader from "../components/SectionHeader";
import { content, strengths } from "../data/siteData";
import type { Lang } from "../data/siteData";

type AboutProps = {
  lang: Lang;
};

export default function About({ lang }: AboutProps) {
  const t = content[lang];

  return (
    <section id="about" className="bg-white px-5 py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="sticky top-28 rounded-[2rem] bg-slate-100 p-6">
          <div className="rounded-[1.5rem] bg-gradient-to-br from-[#0f3347] to-[#557447] p-8 text-white">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-orange-200">
              HSM Trading
            </p>
            <h3 className="mt-6 text-4xl font-black">
              Together, we shape excellence.
            </h3>
            <p className="mt-6 leading-8 text-slate-200">
              Your reliable partner in aluminum and steel.
            </p>
          </div>
        </div>

        <div>
          <SectionHeader
            align="left"
            eyebrow={t.about.eyebrow}
            title={t.about.title}
          />

          <div className="mt-7 space-y-5 text-lg leading-9 text-slate-600">
            {t.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {strengths.map((item) => {
              const Icon = item.icon;
              const title = lang === "fr" ? item.titleFr : item.titleEn;
              const description =
                lang === "fr" ? item.descriptionFr : item.descriptionEn;

              return (
                <div key={title} className="rounded-3xl bg-slate-50 p-5">
                  <Icon className="text-[#e68613]" />
                  <h4 className="mt-4 font-black text-slate-950">{title}</h4>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}