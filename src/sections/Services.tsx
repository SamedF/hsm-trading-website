import SectionHeader from "../components/SectionHeader";
import { content, services } from "../data/siteData";
import type { Lang } from "../data/siteData";

type ServicesProps = {
  lang: Lang;
};

export default function Services({ lang }: ServicesProps) {
  const t = content[lang];

  return (
    <section id="services" className="bg-white px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          text={t.services.text}
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const Icon = service.icon;
            const title = lang === "fr" ? service.titleFr : service.titleEn;
            const description =
              lang === "fr" ? service.descriptionFr : service.descriptionEn;

            return (
              <div
                key={title}
                className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="mb-6 inline-flex rounded-2xl bg-orange-50 p-4 text-[#e68613]">
                  <Icon size={28} />
                </div>

                <h3 className="text-xl font-black text-slate-950">{title}</h3>

                <p className="mt-4 leading-7 text-slate-600">{description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}