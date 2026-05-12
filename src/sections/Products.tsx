import { useMemo, useState } from "react";
import { ArrowRight, FileText, Search } from "lucide-react";
import SectionHeader from "../components/SectionHeader";
import { company, content } from "../data/siteData";
import { productCategories, productsDatabase } from "../data/products";
import type { Lang } from "../data/siteData";

type ProductsProps = {
  lang: Lang;
};

export default function Products({ lang }: ProductsProps) {
  const t = content[lang];
  const [activeCategory, setActiveCategory] = useState("all");
  const [query, setQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return productsDatabase.filter((product) => {
      const name = lang === "fr" ? product.nameFr : product.nameEn;
      const description =
        lang === "fr" ? product.descriptionFr : product.descriptionEn;
      const subcategory =
        lang === "fr" ? product.subcategoryFr : product.subcategoryEn;

      const categoryMatch =
        activeCategory === "all" || product.category === activeCategory;

      const searchMatch =
        !query.trim() ||
        `${name} ${description} ${subcategory} ${product.specs.join(" ")}`
          .toLowerCase()
          .includes(query.toLowerCase());

      return categoryMatch && searchMatch;
    });
  }, [activeCategory, query, lang]);

  function getCategoryLabel(categoryKey: string) {
    const category = productCategories.find((item) => item.key === categoryKey);
    if (!category) return categoryKey;
    return lang === "fr" ? category.labelFr : category.labelEn;
  }

  function whatsappProduct(productName: string) {
    const text =
      lang === "fr"
        ? `Bonjour HSM Trading, je souhaite demander un devis pour: ${productName}`
        : `Hello HSM Trading, I would like to request a quote for: ${productName}`;

    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  return (
    <section id="products" className="bg-slate-50 px-5 py-20 sm:py-24">
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
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
            />
          </div>
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 sm:flex-wrap sm:overflow-visible">
          <button
            onClick={() => setActiveCategory("all")}
            className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-black transition ${
              activeCategory === "all"
                ? "bg-[#0f3347] text-white shadow-lg shadow-slate-900/10"
                : "bg-white text-slate-700 hover:bg-slate-100"
            }`}
            type="button"
          >
            {t.products.all}
          </button>

          {productCategories.map((category) => {
            const label = lang === "fr" ? category.labelFr : category.labelEn;

            return (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm font-black transition ${
                  activeCategory === category.key
                    ? "bg-[#0f3347] text-white shadow-lg shadow-slate-900/10"
                    : "bg-white text-slate-700 hover:bg-slate-100"
                }`}
                type="button"
              >
                {label}
              </button>
            );
          })}
        </div>

        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-5 text-sm leading-7 text-slate-600">
          {lang === "fr" ? (
            <>
              <strong className="text-slate-950">Base produits HSM :</strong>{" "}
              catégories, sous-catégories, fiches techniques, galerie produits et
              demandes de devis via WhatsApp.
            </>
          ) : (
            <>
              <strong className="text-slate-950">HSM product database:</strong>{" "}
              categories, sub-categories, technical sheets, product gallery and
              quote requests via WhatsApp.
            </>
          )}
        </div>

        <div className="mt-10 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {filteredProducts.map((product) => {
            const Icon = product.icon;
            const name = lang === "fr" ? product.nameFr : product.nameEn;
            const description =
              lang === "fr" ? product.descriptionFr : product.descriptionEn;
            const subcategory =
              lang === "fr" ? product.subcategoryFr : product.subcategoryEn;
            const technicalSheet =
              lang === "fr" ? product.technicalSheetFr : product.technicalSheetEn;

            return (
              <article
                id={`product-${product.slug}`}
                key={product.id}
                className="group scroll-mt-32 overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10"
              >
                <div className="relative h-60 overflow-hidden bg-[#0f3347]">
                  <img
                    src={product.image}
                    alt={name}
                    draggable={false}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    onError={(event) => {
                      event.currentTarget.style.display = "none";
                    }}
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f3347]/95 via-[#0f3347]/40 to-transparent" />

                  <div className="absolute bottom-5 left-5 right-5 text-white">
                    <div className="mb-3 inline-flex rounded-2xl bg-white/15 p-3 backdrop-blur">
                      <Icon size={24} />
                    </div>

                    <p className="text-xs font-black uppercase tracking-[0.18em] text-orange-200">
                      {getCategoryLabel(product.category)}
                    </p>

                    <h3 className="mt-1 text-2xl font-black">{name}</h3>

                    <p className="mt-1 text-sm font-semibold text-slate-200">
                      {subcategory}
                    </p>
                  </div>
                </div>

                <div className="p-6">
                  <p className="line-clamp-4 leading-7 text-slate-600">
                    {description}
                  </p>

                  <div className="mt-5">
                    <div className="flex items-center gap-2 font-black text-[#0f3347]">
                      <FileText size={17} />
                      <span>
                        {lang === "fr" ? "Fiche technique" : "Technical sheet"}
                      </span>
                    </div>

                    <ul className="mt-3 space-y-2 text-sm text-slate-600">
                      {technicalSheet.map((item) => (
                        <li key={item} className="flex gap-2">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e68613]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

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

        {filteredProducts.length === 0 && (
          <div className="mt-10 rounded-[2rem] border border-slate-200 bg-white p-10 text-center">
            <p className="text-lg font-black text-slate-950">
              {lang === "fr" ? "Aucun produit trouvé." : "No products found."}
            </p>
            <p className="mt-2 text-slate-600">
              {lang === "fr"
                ? "Essayez une autre recherche ou une autre catégorie."
                : "Try another search or category."}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}