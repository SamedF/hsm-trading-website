import { useMemo, useState } from "react";
import { ArrowRight, Search } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { company, content } from "../data/siteData";
import { productCategories, productsDatabase } from "../data/products";
import type { Lang } from "../data/siteData";

type ProductsProps = {
  lang: Lang;
};

export default function Products({ lang }: ProductsProps) {
  const t = content[lang];
  const [active, setActive] = useState("All");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return productsDatabase.filter((product) => {
      const name = lang === "fr" ? product.nameFr : product.nameEn;
      const description =
        lang === "fr" ? product.descriptionFr : product.descriptionEn;

      const matchesCategory = active === "All" || product.category === active;

      const matchesQuery =
        !query.trim() ||
        `${name} ${description} ${product.specs.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase());

      return matchesCategory && matchesQuery;
    });
  }, [active, query, lang]);

  function whatsappProduct(productName: string) {
    const text =
      lang === "fr"
        ? `Bonjour HSM Trading, je souhaite demander un devis pour: ${productName}`
        : `Hello HSM Trading, I would like to request a quote for: ${productName}`;

    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  return (
    <section id="products" className="bg-slate-50 px-5 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeader
            align="left"
            eyebrow={t.products.eyebrow}
            title={t.products.title}
            text={t.products.text}
          />

          <div className="relative w-full max-w-sm">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
              size={18}
            />

            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={t.products.search}
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
            />
          </div>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {["All", ...productCategories].map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full px-4 py-2 text-sm font-black transition ${
                active === category
                  ? "bg-[#0f3347] text-white"
                  : "bg-white text-slate-700 hover:bg-slate-100"
              }`}
              type="button"
            >
              {category === "All" ? t.products.all : category}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-4">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            const name = lang === "fr" ? product.nameFr : product.nameEn;
            const description =
              lang === "fr" ? product.descriptionFr : product.descriptionEn;

            return (
              <article
                key={product.id}
                className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="relative h-56 overflow-hidden bg-slate-200">
                  <img
                    src={product.image}
                    alt={name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f3347]/90 via-[#0f3347]/25 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="mb-3 inline-flex rounded-2xl bg-white/15 p-3 backdrop-blur">
                      <Icon size={24} />
                    </div>

                    <p className="text-xs font-black uppercase tracking-[0.2em] text-orange-200">
                      {product.category}
                    </p>

                    <h3 className="mt-1 text-2xl font-black">{name}</h3>
                  </div>
                </div>

                <div className="p-6">
                  <p className="line-clamp-4 leading-7 text-slate-600">
                    {description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {product.specs.map((spec) => (
                      <span
                        key={spec}
                        className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>

                  <a
                    href={whatsappProduct(name)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-black text-[#e68613] transition group-hover:gap-3"
                  >
                    {t.products.request}
                    <ArrowRight size={17} />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}