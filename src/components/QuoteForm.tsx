import { Send } from "lucide-react";
import { useState } from "react";
import { company, content } from "../data/siteData";
import { productsDatabase } from "../data/products";
import type { Lang } from "../data/siteData";

type QuoteFormProps = {
  lang: Lang;
};

type FormState = {
  name: string;
  companyName: string;
  phone: string;
  email: string;
  product: string;
  message: string;
};

type FormErrors = {
  name?: string;
  phone?: string;
  email?: string;
  product?: string;
};

export default function QuoteForm({ lang }: QuoteFormProps) {
  const t = content[lang];

  const [form, setForm] = useState<FormState>({
    name: "",
    companyName: "",
    phone: "",
    email: "",
    product: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({
      ...current,
      [field]: value,
    }));

    setErrors((current) => ({
      ...current,
      [field]: undefined,
    }));
  }

  function validateForm() {
    const nextErrors: FormErrors = {};

    if (!form.name.trim()) {
      nextErrors.name =
        lang === "fr" ? "Le nom est obligatoire." : "Name is required.";
    }

    if (!form.phone.trim()) {
      nextErrors.phone =
        lang === "fr"
          ? "Le téléphone est obligatoire."
          : "Phone is required.";
    }

    if (!form.email.trim()) {
      nextErrors.email =
        lang === "fr" ? "L’email est obligatoire." : "Email is required.";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.trim())) {
      nextErrors.email =
        lang === "fr" ? "Email invalide." : "Invalid email address.";
    }

    if (!form.product.trim()) {
      nextErrors.product =
        lang === "fr"
          ? "Le produit est obligatoire."
          : "Product is required.";
    }

    setErrors(nextErrors);

    return Object.keys(nextErrors).length === 0;
  }

  function sendToWhatsapp(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!validateForm()) return;

    const message =
      lang === "fr"
        ? `Bonjour HSM Trading,

Je souhaite demander un devis.

Nom: ${form.name}
Société: ${form.companyName || "Non renseignée"}
Téléphone: ${form.phone}
Email: ${form.email}
Produit: ${form.product}
Message: ${form.message || "Non renseigné"}`
        : `Hello HSM Trading,

I would like to request a quote.

Name: ${form.name}
Company: ${form.companyName || "Not provided"}
Phone: ${form.phone}
Email: ${form.email}
Product: ${form.product}
Message: ${form.message || "Not provided"}`;

    window.open(
      `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  }

  return (
    <section id="quote" className="bg-slate-50 px-5 py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="font-black uppercase tracking-[0.25em] text-[#e68613]">
            {t.quote.eyebrow}
          </p>

          <h2 className="mt-4 text-4xl font-black leading-tight text-slate-950 md:text-5xl">
            {t.quote.title}
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
            {t.quote.text}
          </p>

          <div className="mt-8 rounded-[2rem] bg-[#0f3347] p-6 text-white">
            <p className="text-xl font-black">HSM Trading</p>
            <p className="mt-3 text-slate-300">{company.email}</p>
            <p className="mt-2 text-slate-300">{company.phone}</p>
            <p className="mt-2 text-slate-300">{company.shortLocation}</p>
          </div>
        </div>

        <form
          onSubmit={sendToWhatsapp}
          className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/5 sm:p-8"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <input
                value={form.name}
                onChange={(event) => updateField("name", event.target.value)}
                placeholder={`${t.quote.name} *`}
                required
                className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none transition focus:ring-4 ${
                  errors.name
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-slate-200 focus:border-[#e68613] focus:ring-orange-100"
                }`}
              />
              {errors.name && (
                <p className="mt-2 text-sm font-bold text-red-500">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <input
                value={form.companyName}
                onChange={(event) =>
                  updateField("companyName", event.target.value)
                }
                placeholder={t.quote.company}
                className="w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
              />
            </div>

            <div>
              <input
                value={form.phone}
                onChange={(event) => updateField("phone", event.target.value)}
                placeholder={`${t.quote.phone} *`}
                required
                className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none transition focus:ring-4 ${
                  errors.phone
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-slate-200 focus:border-[#e68613] focus:ring-orange-100"
                }`}
              />
              {errors.phone && (
                <p className="mt-2 text-sm font-bold text-red-500">
                  {errors.phone}
                </p>
              )}
            </div>

            <div>
              <input
                type="email"
                value={form.email}
                onChange={(event) => updateField("email", event.target.value)}
                placeholder={`${t.quote.email} *`}
                required
                className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none transition focus:ring-4 ${
                  errors.email
                    ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                    : "border-slate-200 focus:border-[#e68613] focus:ring-orange-100"
                }`}
              />
              {errors.email && (
                <p className="mt-2 text-sm font-bold text-red-500">
                  {errors.email}
                </p>
              )}
            </div>
          </div>

          <div className="mt-5">
            <select
              value={form.product}
              onChange={(event) => updateField("product", event.target.value)}
              required
              className={`w-full rounded-2xl border bg-white px-5 py-4 outline-none transition focus:ring-4 ${
                errors.product
                  ? "border-red-400 focus:border-red-500 focus:ring-red-100"
                  : "border-slate-200 focus:border-[#e68613] focus:ring-orange-100"
              }`}
            >
              <option value="">{`${t.quote.product} *`}</option>

              {productsDatabase.map((product) => {
                const productName =
                  lang === "fr" ? product.nameFr : product.nameEn;

                return (
                  <option key={product.id} value={productName}>
                    {productName}
                  </option>
                );
              })}
            </select>

            {errors.product && (
              <p className="mt-2 text-sm font-bold text-red-500">
                {errors.product}
              </p>
            )}
          </div>

          <textarea
            value={form.message}
            onChange={(event) => updateField("message", event.target.value)}
            placeholder={t.quote.message}
            rows={6}
            className="mt-5 w-full rounded-2xl border border-slate-200 bg-white px-5 py-4 outline-none transition focus:border-[#e68613] focus:ring-4 focus:ring-orange-100"
          />

          <button
            type="submit"
            className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#e68613] px-6 py-4 font-black text-white shadow-lg shadow-orange-600/20 transition hover:-translate-y-0.5 hover:bg-[#cc720d] hover:shadow-xl hover:shadow-orange-600/25"
          >
            {t.quote.send}
            <Send size={18} />
          </button>

          <p className="mt-4 text-center text-sm text-slate-500">
            {lang === "fr"
              ? "* Nom, téléphone, email et produit sont obligatoires."
              : "* Name, phone, email and product are required."}
          </p>
        </form>
      </div>
    </section>
  );
}