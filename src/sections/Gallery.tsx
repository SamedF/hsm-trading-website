import SectionHeader from "../components/SectionHeader";

const items = [
  "Structure acier",
  "Garde-corps inox",
  "Atelier aluminium",
  "Rideau métallique",
  "Découpe laser",
  "Portail décoratif",
  "Profilés industriels",
  "Installation chantier",
];

export default function Gallery() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          eyebrow="Galerie"
          title="Aperçu des réalisations."
          text="Une galerie propre pour présenter les produits, ateliers et chantiers."
        />

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item}
              className="flex min-h-48 items-end rounded-3xl bg-gradient-to-br from-slate-800 to-red-800 p-5 text-white"
            >
              <p className="text-lg font-black">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}