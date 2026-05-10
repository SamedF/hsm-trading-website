import { useState } from "react";
import { Send } from "lucide-react";
import { company, content } from "../data/siteData";
import { productsDatabase } from "../data/products";
import type { Lang } from "../data/siteData";

type QuoteFormProps = {
  lang: Lang;
};

export default function QuoteForm({ lang }: QuoteFormProps) {
  const t = content[lang];
  const [form, setForm] = useState({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  function updateField(field: keyof typeof form, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function buildWhatsappLink() {
    const intro =
      lang === "fr"
        ? "Bonjour HSM Trading, je souhaite demander un devis."
        : "Hello HSM Trading, I would like to request a quote.";

    const text = `
${intro}

Name: ${form.name}
Company: ${form.companyName}
Phone: ${form.phone}
Email: ${form.email}
Product: ${form.product}
Message: ${form.message}
    `.trim();

    return `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(text)}`;
  }

  return (
    <section id="quote" className="bg-slate-50 px-5 py-24">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-[#e68613]">
            {t.quote.eyebrow}
          </p>

          <h2 className="text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
            {t.quote.title}
          </h2>

          <p className="mt-6 text-lg leading-9 text-slate-600">
            {t.quote.text}
          </p>

          <div className="mt-8 rounded-3xl bg-white p-6 shadow-sm">
            <p className="font-black text-slate-950">HSM Trading</p>
            <p className="mt-2 text-slate-600">{company.phone}</p>
            <p className="text-slate-600">{company.email}</p>
            <p className="text-slate-600">{company.shortLocation}</p>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-xl shadow-slate-900/5 md:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <input
              value={form.name}
              onChange={(e) => updateField("name", e.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
              placeholder={t.quote.name}
            />

            <input
              value={form.companyName}
              onChange={(e) => updateField("companyName", e.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
              placeholder={t.quote.company}
            />

            <input
              value={form.phone}
              onChange={(e) => updateField("phone", e.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
              placeholder={t.quote.phone}
            />

            <input
              value={form.email}
              onChange={(e) => updateField("email", e.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
              placeholder={t.quote.email}
            />

            <select
              value={form.product}
              onChange={(e) => updateField("product", e.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#e68613] focus:ring-4 focus:ring-orange-100 md:col-span-2"
            >
              <option value="">{t.quote.product}</option>
              {productsDatabase.map((product) => (
                <option key={product.id} value={lang === "fr" ? product.nameFr : product.nameEn}>
                  {lang === "fr" ? product.nameFr : product.nameEn}
                </option>
              ))}
            </select>

            <textarea
              value={form.message}
              onChange={(e) => updateField("message", e.target.value)}
              className="rounded-2xl border border-slate-200 px-4 py-3 outline-none focus:border-[#e68613] focus:ring-4 focus:ring-orange-100 md:col-span-2"
              rows={6}
              placeholder={t.quote.message}
            />
          </div>

          <a
            href={buildWhatsappLink()}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e68613] px-6 py-4 font-black text-white transition hover:bg-[#cc720d]"
          >
            {t.quote.send}
            <Send size={18} />
          </a>
        </form>
      </div>
    </section>
  );
}