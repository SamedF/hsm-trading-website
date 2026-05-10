import {
  Building2,
  Factory,
  Hammer,
  Layers3,
  ShieldCheck,
  Warehouse,
  PanelsTopLeft,
} from "lucide-react";

export const productCategories = [
  "Steel",
  "Tubes",
  "Sheets",
  "Beams",
  "Panels",
  "Shutters",
];

export const productsDatabase = [
  {
    id: 1,
    category: "Steel",
    nameFr: "Steel Coils",
    nameEn: "Steel Coils",
    image: "/products/steel-coils.jpeg",
    descriptionFr:
      "Bobines d’acier de haute qualité disponibles en plusieurs épaisseurs et largeurs, idéales pour la fabrication, la transformation et les applications industrielles.",
    descriptionEn:
      "High-quality steel coils available in various thicknesses and widths, ideal for manufacturing, fabrication and industrial processing.",
    icon: Layers3,
    specs: ["Steel", "Coils", "Processing", "Industrial"],
  },
  {
    id: 2,
    category: "Sheets",
    nameFr: "Steel Sheet",
    nameEn: "Steel Sheet",
    image: "/products/steel-sheets.jpeg",
    descriptionFr:
      "Tôles d’acier disponibles en plusieurs épaisseurs et finitions, adaptées à la construction, la fabrication et l’industrie.",
    descriptionEn:
      "Steel sheets available in multiple thicknesses and finishes, suitable for construction, manufacturing and industrial applications.",
    icon: PanelsTopLeft,
    specs: ["Sheets", "Construction", "Cladding", "Manufacturing"],
  },
  {
    id: 3,
    category: "Tubes",
    nameFr: "Round Steel Tubes",
    nameEn: "Round Steel Tubes",
    image: "/products/round-tubes.jpeg",
    descriptionFr:
      "Tubes ronds solides et durables pour la construction, les installations mécaniques, les structures et les systèmes industriels.",
    descriptionEn:
      "Strong and durable round steel tubes for construction, mechanical installations, frameworks and industrial systems.",
    icon: ShieldCheck,
    specs: ["Round tubes", "Structures", "Mechanical", "Durable"],
  },
  {
    id: 4,
    category: "Tubes",
    nameFr: "Square Steel Tubes",
    nameEn: "Square Steel Tubes",
    image: "/products/square-tubes.jpeg",
    descriptionFr:
      "Tubes carrés en acier adaptés aux structures métalliques, projets architecturaux, cadres et applications industrielles.",
    descriptionEn:
      "Square steel tubes for metal frameworks, architectural projects, structures and industrial applications.",
    icon: Warehouse,
    specs: ["Square tubes", "Frameworks", "Architecture", "Industrial"],
  },
  {
    id: 5,
    category: "Beams",
    nameFr: "Steel Beams",
    nameEn: "Steel Beams",
    image: "/products/steel-beams.jpeg",
    descriptionFr:
      "Poutrelles structurelles conçues pour offrir résistance, stabilité et performance dans les grands projets de construction.",
    descriptionEn:
      "Structural steel beams designed to provide strength, stability and performance for large-scale construction projects.",
    icon: Factory,
    specs: ["I profiles", "H profiles", "U profiles", "Structures"],
  },
  {
    id: 6,
    category: "Panels",
    nameFr: "Sandwich Panels",
    nameEn: "Sandwich Panels",
    image: "/products/Sandwich-panels.jpeg",
    descriptionFr:
      "Panneaux composés de deux tôles acier et d’un noyau isolant, idéals pour façades, toitures, entrepôts et bâtiments industriels.",
    descriptionEn:
      "Panels composed of two steel sheets with an insulating core, ideal for facades, roofing, warehouses and industrial buildings.",
    icon: Hammer,
    specs: ["Insulation", "Roofing", "Facades", "Warehouses"],
  },
  {
    id: 7,
    category: "Shutters",
    nameFr: "Metal Shutter Slats",
    nameEn: "Metal Shutter Slats",
    image: "/products/shutter-slats.jpeg",
    descriptionFr:
      "Lames de rideaux métalliques combinant sécurité, durabilité et esthétique pour projets commerciaux, industriels et résidentiels.",
    descriptionEn:
      "Metal shutter slats combining security, durability and aesthetic appeal for commercial, industrial and residential projects.",
    icon: Factory,
    specs: ["Bottom slats", "Flat slats", "Curved slats", "Custom sizes"],
  },
  {
    id: 8,
    category: "Shutters",
    nameFr: "Metal Shutter Guides",
    nameEn: "Metal Shutter Guides",
    image: "/products/Shutter-guides.jpeg",
    descriptionFr:
      "Guides robustes pour rideaux métalliques, conçus pour assurer un fonctionnement fluide, durable et sécurisé.",
    descriptionEn:
      "Strong guides for metal shutters, designed to ensure smooth, durable and secure operation.",
    icon: Building2,
    specs: ["40/25 - 12/10", "50/30 - 15/10", "Secure", "Durable"],
  },
];