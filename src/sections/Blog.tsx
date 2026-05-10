import SectionHeader from "../components/SectionHeader";

const posts = [
  {
    title: "Comment choisir le bon acier",
    text: "Les critères essentiels pour choisir entre résistance, coût et finition.",
  },
  {
    title: "Pourquoi entretenir un rideau métallique",
    text: "La maintenance préventive réduit les pannes et prolonge la durée de vie.",
  },
  {
    title: "Aluminium architectural",
    text: "Applications modernes pour façades, menuiseries et projets premium.",
  },
];

export default function Blog() {
  return (
    <section className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Blog"
          title="Conseils et actualités."
          text="Un espace éditorial pour améliorer la confiance et le référencement naturel."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-[2rem] bg-white p-6 shadow-sm">
              <p className="text-sm font-bold text-red-600">Actualité</p>
              <h3 className="mt-3 text-xl font-black text-slate-950">{post.title}</h3>
              <p className="mt-4 leading-7 text-slate-600">{post.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}