import { Mail, MapPin, Phone } from "lucide-react";
import { company, content } from "../data/siteData";
import type { Lang } from "../data/siteData";
import logo from "../assets/hsm-logo.jpeg";

type FooterProps = {
  lang: Lang;
};

export default function Footer({ lang }: FooterProps) {
  const t = content[lang];

  return (
    <footer id="contact" className="bg-[#0f3347] px-5 py-14 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <div className="inline-flex rounded-3xl bg-white p-3">
            <img src={logo} alt="HSM Trading" className="h-12 w-auto" />
          </div>

          <p className="mt-6 max-w-md leading-8 text-slate-300">
            {t.footer.text}
          </p>
        </div>

        <div>
          <h4 className="font-black">Navigation</h4>
          <div className="mt-5 flex flex-col gap-3 text-slate-300">
            <a href="#about">{t.nav.about}</a>
            <a href="#products">{t.nav.products}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#catalog">{t.nav.catalog}</a>
          </div>
        </div>

        <div>
          <h4 className="font-black">{t.nav.contact}</h4>
          <div className="mt-5 space-y-4 text-slate-300">
            <p className="flex gap-3">
              <Phone className="shrink-0 text-[#e68613]" size={18} />
              {company.phone}
            </p>

            <p className="flex gap-3">
              <Mail className="shrink-0 text-[#e68613]" size={18} />
              {company.email}
            </p>

            <p className="flex gap-3">
              <MapPin className="shrink-0 text-[#e68613]" size={18} />
              {company.location}
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-sm text-slate-400">
        © 2026 {company.name}. {t.footer.rights}
      </div>
    </footer>
  );
}