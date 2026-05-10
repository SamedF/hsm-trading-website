import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ProductCardProps = {
  product: {
    title: string;
    description: string;
    specs: string[];
    icon: LucideIcon;
  };
};

export default function ProductCard({ product }: ProductCardProps) {
  const Icon = product.icon;

  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10">
      <div className="bg-gradient-to-br from-slate-900 to-red-800 p-6 text-white">
        <Icon size={38} />
        <h3 className="mt-16 text-2xl font-black">{product.title}</h3>
      </div>

      <div className="p-6">
        <p className="leading-7 text-slate-600">{product.description}</p>

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
          href="#quote"
          className="mt-6 inline-flex items-center gap-2 font-black text-red-600 group-hover:gap-3"
        >
          Demander ce produit
          <ArrowRight size={17} />
        </a>
      </div>
    </article>
  );
}