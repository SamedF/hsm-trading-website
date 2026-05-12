import {
  Building2,
  CircleDot,
  CircuitBoard,
  DoorOpen,
  Factory,
  Grid2X2,
  Hammer,
  KeyRound,
  Layers3,
  LockKeyhole,
  PanelsTopLeft,
  ShieldCheck,
  SlidersHorizontal,
  SquareStack,
  Warehouse,
  Wrench,
  Zap,
} from "lucide-react";

export const productCategories = [
  {
    key: "steel",
    labelFr: "Acier",
    labelEn: "Steel",
  },
  {
    key: "aluminium",
    labelFr: "Aluminium",
    labelEn: "Aluminium",
  },
  {
    key: "engines",
    labelFr: "Moteurs",
    labelEn: "Engines",
  },
  {
    key: "axes",
    labelFr: "Axes",
    labelEn: "Axes",
  },
  {
    key: "fly-screens",
    labelFr: "Moustiquaires",
    labelEn: "Fly Screens",
  },
  {
    key: "guardrail",
    labelFr: "Garde-corps",
    labelEn: "Guardrail",
  },
  {
    key: "laser-doors",
    labelFr: "Portes laser",
    labelEn: "Laser Doors",
  },
  {
    key: "metal-shutter",
    labelFr: "Rideaux métalliques",
    labelEn: "Metal Shutter",
  },
];

export const productsDatabase = [
  {
    id: 1,
    slug: "steel-strips",
    category: "steel",
    nameFr: "Feuillards d’acier",
    nameEn: "Steel Strips",
    subcategoryFr: "Produits acier",
    subcategoryEn: "Steel Products",
    image: "/products/steel-strips.jpeg",
    descriptionFr:
      "Feuillards d’acier de précision destinés à la transformation industrielle, au cerclage, à l’emboutissage, au renforcement et aux travaux de tôlerie.",
    descriptionEn:
      "High-precision steel strips designed for industrial processing, strapping, stamping, reinforcement and sheet metal applications.",
    technicalSheetFr: [
      "Largeurs et épaisseurs variables",
      "Finition lisse et régulière",
      "Usage industriel et métallurgique",
    ],
    technicalSheetEn: [
      "Variable widths and thicknesses",
      "Smooth and consistent finish",
      "Industrial and metallurgical use",
    ],
    specs: ["Steel", "Strips", "Processing"],
    icon: Layers3,
  },
  {
    id: 2,
    slug: "round-tubes",
    category: "steel",
    nameFr: "Tubes ronds",
    nameEn: "Round Tubes",
    subcategoryFr: "Tubes acier",
    subcategoryEn: "Steel Tubes",
    image: "/products/round-tubes.jpeg",
    descriptionFr:
      "Tubes ronds en acier conçus pour la construction, les installations mécaniques, les structures métalliques et les applications industrielles.",
    descriptionEn:
      "Round steel tubes designed for construction, mechanical installations, metal structures and industrial applications.",
    technicalSheetFr: [
      "Diamètres variés",
      "Bonne résistance mécanique",
      "Applications structurelles et industrielles",
    ],
    technicalSheetEn: [
      "Various diameters",
      "Strong mechanical resistance",
      "Structural and industrial applications",
    ],
    specs: ["Round Tubes", "Structure", "Industrial"],
    icon: ShieldCheck,
  },
  {
    id: 3,
    slug: "steel-sheets",
    category: "steel",
    nameFr: "Tôles d’acier",
    nameEn: "Steel Sheets",
    subcategoryFr: "Tôles et plaques",
    subcategoryEn: "Sheets and Plates",
    image: "/products/steel-sheets.jpeg",
    descriptionFr:
      "Tôles d’acier destinées à la construction, au bardage, à la fabrication métallique, aux structures et aux applications industrielles.",
    descriptionEn:
      "Steel sheets for construction, cladding, metal fabrication, structures and industrial applications.",
    technicalSheetFr: [
      "Formats et épaisseurs sur demande",
      "Utilisation intérieure et extérieure",
      "Adaptées au bardage et à la fabrication",
    ],
    technicalSheetEn: [
      "Custom formats and thicknesses",
      "Indoor and outdoor use",
      "Suitable for cladding and fabrication",
    ],
    specs: ["Sheets", "Cladding", "Construction"],
    icon: PanelsTopLeft,
  },
  {
    id: 4,
    slug: "beams",
    category: "steel",
    nameFr: "Poutrelles",
    nameEn: "Beams",
    subcategoryFr: "Structure métallique",
    subcategoryEn: "Metal Structure",
    image: "/products/steel-beams.jpeg",
    descriptionFr:
      "Poutrelles en acier pour bâtiments industriels, charpentes métalliques, infrastructures et structures lourdes.",
    descriptionEn:
      "Steel beams for industrial buildings, metal frameworks, infrastructure and heavy-duty structures.",
    technicalSheetFr: [
      "Profils I, H et U",
      "Haute résistance structurelle",
      "Construction et infrastructure",
    ],
    technicalSheetEn: [
      "I, H and U profiles",
      "High structural resistance",
      "Construction and infrastructure",
    ],
    specs: ["Beams", "I/H/U", "Framework"],
    icon: Factory,
  },
  {
    id: 5,
    slug: "sandwich-panels",
    category: "steel",
    nameFr: "Panneaux sandwich",
    nameEn: "Sandwich Panels",
    subcategoryFr: "Bâtiments industriels",
    subcategoryEn: "Industrial Buildings",
    image: "/products/sandwich-panels.jpeg",
    descriptionFr:
      "Panneaux sandwich isolants composés de deux parements métalliques et d’un noyau isolant pour toitures, façades et bâtiments industriels.",
    descriptionEn:
      "Insulated sandwich panels made of two metal sheets and an insulating core for roofing, façades and industrial buildings.",
    technicalSheetFr: [
      "Isolation thermique et acoustique",
      "Toiture, façade et bardage",
      "Adaptés aux bâtiments industriels",
    ],
    technicalSheetEn: [
      "Thermal and acoustic insulation",
      "Roofing, façade and cladding",
      "Suitable for industrial buildings",
    ],
    specs: ["Panels", "Insulation", "Roofing"],
    icon: Hammer,
  },
  {
    id: 6,
    slug: "square-tubes",
    category: "steel",
    nameFr: "Tubes carrés",
    nameEn: "Square Tubes",
    subcategoryFr: "Tubes acier",
    subcategoryEn: "Steel Tubes",
    image: "/products/square-tubes.jpeg",
    descriptionFr:
      "Tubes carrés en acier pour structures métalliques, cadres, projets architecturaux, construction industrielle et fabrication sur mesure.",
    descriptionEn:
      "Square steel tubes for metal structures, frames, architectural projects, industrial construction and custom fabrication.",
    technicalSheetFr: [
      "Sections carrées",
      "Épaisseurs variables",
      "Cadres, supports et structures",
    ],
    technicalSheetEn: [
      "Square sections",
      "Variable thicknesses",
      "Frames, supports and structures",
    ],
    specs: ["Square Tubes", "Framework", "Fabrication"],
    icon: Warehouse,
  },

  {
    id: 7,
    slug: "cremon-for-windows",
    category: "aluminium",
    nameFr: "Crémone pour fenêtres",
    nameEn: "Cremon for Windows",
    subcategoryFr: "Accessoires",
    subcategoryEn: "Accessories",
    image: "/products/cremon-for-windows.jpeg",
    descriptionFr:
      "Crémone pour fenêtres aluminium ouvrantes, conçue pour assurer sécurité, fonctionnalité et finition moderne.",
    descriptionEn:
      "Cremone system for hinged aluminium windows, designed to provide security, smooth functionality and a modern finish.",
    technicalSheetFr: [
      "Compatible profils aluminium ouvrants",
      "Système réversible droite/gauche",
      "Finitions selon projet",
    ],
    technicalSheetEn: [
      "Compatible with hinged aluminium profiles",
      "Reversible left/right system",
      "Finishes depending on project",
    ],
    specs: ["Windows", "Aluminium", "Accessory"],
    icon: Grid2X2,
  },
  {
    id: 8,
    slug: "hook-bolt",
    category: "aluminium",
    nameFr: "Serrure Hook BOLT",
    nameEn: "Hook BOLT",
    subcategoryFr: "Accessoires",
    subcategoryEn: "Accessories",
    image: "/products/hook-bolt.jpeg",
    descriptionFr:
      "Serrure à crochet conçue pour renforcer la sécurité des fenêtres coulissantes en acier ou aluminium.",
    descriptionEn:
      "Hook bolt lock designed to improve security for sliding steel and aluminium windows.",
    technicalSheetFr: [
      "Idéale pour fenêtres coulissantes",
      "Compatible acier et aluminium",
      "Système à crochet sécurisé",
    ],
    technicalSheetEn: [
      "Ideal for sliding windows",
      "Compatible with steel and aluminium",
      "Secure hook locking system",
    ],
    specs: ["Hook Lock", "Sliding", "Security"],
    icon: KeyRound,
  },
  {
    id: 9,
    slug: "handles-with-metal-rosettes",
    category: "aluminium",
    nameFr: "Poignées avec rosaces métalliques",
    nameEn: "Handles with Metal Rosettes",
    subcategoryFr: "Accessoires",
    subcategoryEn: "Accessories",
    image: "/products/handles-with-metal-rosettes.jpeg",
    descriptionFr:
      "Poignées avec rosaces métalliques adaptées aux profils aluminium et portes en bois.",
    descriptionEn:
      "Handles with metal rosettes suitable for aluminium profiles and wooden doors.",
    technicalSheetFr: [
      "Compatibles profils aluminium",
      "Plusieurs formes et finitions",
      "Fixation stable avec base métallique",
    ],
    technicalSheetEn: [
      "Compatible with aluminium profiles",
      "Several shapes and finishes",
      "Stable fixing with metal base",
    ],
    specs: ["Handles", "Rosettes", "Doors"],
    icon: Wrench,
  },
  {
    id: 10,
    slug: "mortise-lock-for-doors",
    category: "aluminium",
    nameFr: "Serrure encastrée pour portes",
    nameEn: "Mortise Lock for Doors",
    subcategoryFr: "Accessoires",
    subcategoryEn: "Accessories",
    image: "/products/mortise-lock-for-doors.jpeg",
    descriptionFr:
      "Serrure encastrée pour portes aluminium ou métalliques, conçue pour améliorer la sécurité et la fiabilité des systèmes de fermeture.",
    descriptionEn:
      "Mortise lock for aluminium or metal doors, designed to improve security and reliability for closing systems.",
    technicalSheetFr: [
      "Serrure encastrée",
      "Usage portes aluminium et métal",
      "Sécurité et durabilité",
    ],
    technicalSheetEn: [
      "Mortise lock system",
      "For aluminium and metal doors",
      "Security and durability",
    ],
    specs: ["Mortise Lock", "Doors", "Security"],
    icon: LockKeyhole,
  },
  {
    id: 11,
    slug: "electric-door-openers",
    category: "aluminium",
    nameFr: "Ouvre-portes électriques",
    nameEn: "Electric Door Openers",
    subcategoryFr: "Accessoires",
    subcategoryEn: "Accessories",
    image: "/products/electric-door-openers.jpeg",
    descriptionFr:
      "Ouvre-portes électriques pour systèmes d’accès professionnels, facilitant l’ouverture contrôlée des portes.",
    descriptionEn:
      "Electric door openers for professional access systems, supporting controlled door opening.",
    technicalSheetFr: [
      "Commande électrique",
      "Contrôle d’accès",
      "Usage résidentiel et professionnel",
    ],
    technicalSheetEn: [
      "Electric operation",
      "Access control",
      "Residential and professional use",
    ],
    specs: ["Electric", "Access", "Doors"],
    icon: Zap,
  },
  {
    id: 13,
    slug: "econ",
    category: "aluminium",
    nameFr: "Cylindre ECON",
    nameEn: "ECON Cylinder",
    subcategoryFr: "Accessoires",
    subcategoryEn: "Accessories",
    image: "/products/econ.jpeg",
    descriptionFr:
      "Cylindre ECON destiné aux systèmes de fermeture aluminium et métalliques.",
    descriptionEn:
      "ECON cylinder for aluminium and metal locking systems.",
    technicalSheetFr: [
      "Cylindre de serrure",
      "Compatible systèmes de portes",
      "Solution pratique et fiable",
    ],
    technicalSheetEn: [
      "Lock cylinder",
      "Compatible with door systems",
      "Practical and reliable solution",
    ],
    specs: ["Cylinder", "ECON", "Lock"],
    icon: CircleDot,
  },
  {
    id: 14,
    slug: "euro-handles-with-escutcheon",
    category: "aluminium",
    nameFr: "Poignées Euro avec plaque",
    nameEn: "Euro Handles with Escutcheon",
    subcategoryFr: "Accessoires",
    subcategoryEn: "Accessories",
    image: "/products/euro-handles-with-escutcheon.jpeg",
    descriptionFr:
      "Poignées Euro avec plaque de finition pour portes aluminium ou métalliques.",
    descriptionEn:
      "Euro handles with escutcheon plates for aluminium or metal doors.",
    technicalSheetFr: [
      "Poignée avec plaque",
      "Finition professionnelle",
      "Compatible portes aluminium",
    ],
    technicalSheetEn: [
      "Handle with escutcheon",
      "Professional finish",
      "Compatible with aluminium doors",
    ],
    specs: ["Euro Handle", "Escutcheon", "Doors"],
    icon: DoorOpen,
  },

  {
    id: 15,
    slug: "evo-m01000",
    category: "engines",
    nameFr: "EVO M01000",
    nameEn: "EVO M01000",
    subcategoryFr: "Moteurs",
    subcategoryEn: "Engines",
    image: "/products/evo-m01000.jpeg",
    descriptionFr:
      "Moteur EVO M01000 pour stores, volets et rideaux métalliques, conçu pour automatiser les ouvertures avec fiabilité.",
    descriptionEn:
      "EVO M01000 motor for shutters, blinds and metal curtains, designed to automate openings reliably.",
    technicalSheetFr: [
      "Motorisation stores et rideaux",
      "Commande pratique",
      "Usage professionnel",
    ],
    technicalSheetEn: [
      "Motorization for shutters and curtains",
      "Practical control",
      "Professional use",
    ],
    specs: ["EVO", "Motor", "Shutters"],
    icon: CircuitBoard,
  },
  {
    id: 16,
    slug: "evo-m01001",
    category: "engines",
    nameFr: "EVO M01001",
    nameEn: "EVO M01001",
    subcategoryFr: "Moteurs",
    subcategoryEn: "Engines",
    image: "/products/evo-m01001.jpeg",
    descriptionFr:
      "Moteur EVO M01001 pour systèmes de stores et rideaux métalliques.",
    descriptionEn:
      "EVO M01001 motor for shutter and metal curtain systems.",
    technicalSheetFr: [
      "Motorisation fiable",
      "Pour stores et rideaux métalliques",
      "Installation professionnelle",
    ],
    technicalSheetEn: [
      "Reliable motorization",
      "For shutters and metal curtains",
      "Professional installation",
    ],
    specs: ["EVO", "Motor", "Automation"],
    icon: CircuitBoard,
  },
  {
    id: 17,
    slug: "evo-m01019",
    category: "engines",
    nameFr: "EVO M01019",
    nameEn: "EVO M01019",
    subcategoryFr: "Moteurs",
    subcategoryEn: "Engines",
    image: "/products/evo-m01019.jpeg",
    descriptionFr:
      "Moteur EVO M01019 pour systèmes motorisés de stores et rideaux métalliques.",
    descriptionEn:
      "EVO M01019 motor for motorized shutter and metal curtain systems.",
    technicalSheetFr: [
      "Moteur EVO",
      "Applications rideaux métalliques",
      "Confort et sécurité",
    ],
    technicalSheetEn: [
      "EVO motor",
      "Metal curtain applications",
      "Comfort and security",
    ],
    specs: ["EVO", "M01019", "Motor"],
    icon: CircuitBoard,
  },
  {
    id: 18,
    slug: "evo-m01030",
    category: "engines",
    nameFr: "EVO M01030",
    nameEn: "EVO M01030",
    subcategoryFr: "Moteurs",
    subcategoryEn: "Engines",
    image: "/products/evo-m01030.jpeg",
    descriptionFr:
      "Moteur EVO M01030 conçu pour rideaux métalliques et stores motorisés.",
    descriptionEn:
      "EVO M01030 motor for metal curtains and motorized shutters.",
    technicalSheetFr: [
      "Motorisation rideaux",
      "Usage commercial",
      "Système fiable",
    ],
    technicalSheetEn: [
      "Curtain motorization",
      "Commercial use",
      "Reliable system",
    ],
    specs: ["EVO", "M01030", "Shutters"],
    icon: CircuitBoard,
  },
  {
    id: 19,
    slug: "evo-m01021",
    category: "engines",
    nameFr: "EVO M01021",
    nameEn: "EVO M01021",
    subcategoryFr: "Moteurs",
    subcategoryEn: "Engines",
    image: "/products/evo-m01021.jpeg",
    descriptionFr:
      "Moteur EVO M01021 pour rideaux métalliques et installations motorisées professionnelles.",
    descriptionEn:
      "EVO M01021 motor for metal curtains and professional motorized installations.",
    technicalSheetFr: [
      "Pour rideaux métalliques",
      "Motorisation professionnelle",
      "Utilisation durable",
    ],
    technicalSheetEn: [
      "For metal curtains",
      "Professional motorization",
      "Durable use",
    ],
    specs: ["EVO", "M01021", "Curtains"],
    icon: CircuitBoard,
  },

  {
    id: 20,
    slug: "octagonal-axes",
    category: "axes",
    nameFr: "Axes octogonaux",
    nameEn: "Octagonal Axes",
    subcategoryFr: "Axes",
    subcategoryEn: "Axes",
    image: "/products/octagonal-axes.jpeg",
    descriptionFr:
      "Axes octogonaux pour volets roulants, stores et rideaux métalliques, assurant support, rotation et stabilité.",
    descriptionEn:
      "Octagonal axes for roller shutters, blinds and metal curtains, providing support, rotation and stability.",
    technicalSheetFr: [
      "Profil octogonal",
      "Volets et rideaux métalliques",
      "Systèmes motorisés ou manuels",
    ],
    technicalSheetEn: [
      "Octagonal profile",
      "Shutters and metal curtains",
      "Motorized or manual systems",
    ],
    specs: ["Axes", "Octagonal", "Shutters"],
    icon: SquareStack,
  },

  {
    id: 21,
    slug: "horizontal-aluminum-fly-screens",
    category: "fly-screens",
    nameFr: "Moustiquaires aluminium horizontales",
    nameEn: "Horizontal Aluminum Fly Screens",
    subcategoryFr: "Moustiquaires",
    subcategoryEn: "Fly Screens",
    image: "/products/horizontal-aluminum-fly-screens.jpeg",
    descriptionFr:
      "Moustiquaires aluminium horizontales pour fenêtres et ouvertures, conçues pour assurer protection et confort.",
    descriptionEn:
      "Horizontal aluminium fly screens for windows and openings, designed to provide protection and comfort.",
    technicalSheetFr: [
      "Ouverture horizontale",
      "Protection contre insectes",
      "Compatible fenêtres aluminium",
    ],
    technicalSheetEn: [
      "Horizontal opening",
      "Insect protection",
      "Compatible with aluminium windows",
    ],
    specs: ["Fly Screen", "Horizontal", "Aluminium"],
    icon: PanelsTopLeft,
  },
  {
    id: 22,
    slug: "vertical-aluminum-fly-screens",
    category: "fly-screens",
    nameFr: "Moustiquaires aluminium verticales",
    nameEn: "Vertical Aluminum Fly Screens",
    subcategoryFr: "Moustiquaires",
    subcategoryEn: "Fly Screens",
    image: "/products/vertical-aluminum-fly-screens.jpeg",
    descriptionFr:
      "Moustiquaires aluminium verticales pour fenêtres et ouvertures, offrant protection contre les insectes et intégration discrète.",
    descriptionEn:
      "Vertical aluminium fly screens for windows and openings, offering insect protection and discreet integration.",
    technicalSheetFr: [
      "Ouverture verticale",
      "Protection contre insectes",
      "Compatible systèmes aluminium",
    ],
    technicalSheetEn: [
      "Vertical opening",
      "Insect protection",
      "Compatible with aluminium systems",
    ],
    specs: ["Fly Screen", "Vertical", "Aluminium"],
    icon: SlidersHorizontal,
  },

  {
    id: 23,
    slug: "aluminum-guardrails",
    category: "guardrail",
    nameFr: "Garde-corps aluminium",
    nameEn: "Aluminum Guardrails",
    subcategoryFr: "Garde-corps",
    subcategoryEn: "Guardrail",
    image: "/products/aluminum-guardrails.jpeg",
    descriptionFr:
      "Garde-corps aluminium pour balcons, escaliers, terrasses et espaces professionnels.",
    descriptionEn:
      "Aluminum guardrails for balconies, stairs, terraces and professional spaces.",
    technicalSheetFr: [
      "Sécurité architecturale",
      "Usage intérieur et extérieur",
      "Finition aluminium moderne",
    ],
    technicalSheetEn: [
      "Architectural safety",
      "Indoor and outdoor use",
      "Modern aluminium finish",
    ],
    specs: ["Guardrail", "Aluminium", "Safety"],
    icon: ShieldCheck,
  },
  {
    id: 24,
    slug: "crystal-line-guardrails",
    category: "guardrail",
    nameFr: "Garde-corps Crystal Line",
    nameEn: "Crystal Line Guardrails",
    subcategoryFr: "Garde-corps",
    subcategoryEn: "Guardrail",
    image: "/products/crystal-line-guardrails.jpeg",
    descriptionFr:
      "Garde-corps Crystal Line pour projets modernes nécessitant transparence, sécurité et esthétique haut de gamme.",
    descriptionEn:
      "Crystal Line guardrails for modern projects requiring transparency, safety and premium aesthetics.",
    technicalSheetFr: [
      "Design transparent",
      "Balcons, escaliers et terrasses",
      "Finition haut de gamme",
    ],
    technicalSheetEn: [
      "Transparent design",
      "Balconies, stairs and terraces",
      "Premium finish",
    ],
    specs: ["Crystal Line", "Guardrail", "Design"],
    icon: ShieldCheck,
  },
  {
    id: 25,
    slug: "guardrail-025",
    category: "guardrail",
    nameFr: "Garde-corps 025",
    nameEn: "Guardrail 025",
    subcategoryFr: "Garde-corps",
    subcategoryEn: "Guardrail",
    image: "/products/guardrail-025.jpeg",
    descriptionFr:
      "Garde-corps 025 au design contemporain pour balcons, escaliers et projets architecturaux.",
    descriptionEn:
      "Guardrail 025 with a contemporary design for balconies, stairs and architectural projects.",
    technicalSheetFr: [
      "Design contemporain",
      "Usage architectural",
      "Sécurité et finition",
    ],
    technicalSheetEn: [
      "Contemporary design",
      "Architectural use",
      "Safety and finish",
    ],
    specs: ["025", "Guardrail", "Aluminium"],
    icon: ShieldCheck,
  },
  {
    id: 26,
    slug: "guardrail-140",
    category: "guardrail",
    nameFr: "Garde-corps 140",
    nameEn: "Guardrail 140",
    subcategoryFr: "Garde-corps",
    subcategoryEn: "Guardrail",
    image: "/products/guardrail-140.jpeg",
    descriptionFr:
      "Garde-corps 140 pour projets nécessitant une solution robuste, moderne et sécurisée.",
    descriptionEn:
      "Guardrail 140 for projects requiring a robust, modern and secure solution.",
    technicalSheetFr: [
      "Système garde-corps",
      "Finition aluminium",
      "Sécurité et résistance",
    ],
    technicalSheetEn: [
      "Guardrail system",
      "Aluminium finish",
      "Safety and resistance",
    ],
    specs: ["140", "Guardrail", "Safety"],
    icon: ShieldCheck,
  },

  {
    id: 27,
    slug: "motif-e63",
    category: "laser-doors",
    nameFr: "Motif E63",
    nameEn: "Motif E63",
    subcategoryFr: "Portes et motifs laser",
    subcategoryEn: "Laser Doors / Motifs",
    image: "/products/motif-e63.jpeg",
    descriptionFr:
      "Motif décoratif laser E63 pour portes, panneaux et projets architecturaux personnalisés.",
    descriptionEn:
      "Laser decorative motif E63 for doors, panels and custom architectural projects.",
    technicalSheetFr: [
      "Découpe laser",
      "Motif décoratif",
      "Personnalisation possible",
    ],
    technicalSheetEn: [
      "Laser cutting",
      "Decorative motif",
      "Customization available",
    ],
    specs: ["Laser", "Motif", "E63"],
    icon: DoorOpen,
  },
  {
    id: 28,
    slug: "motif-e02",
    category: "laser-doors",
    nameFr: "Motif E02",
    nameEn: "Motif E02",
    subcategoryFr: "Portes et motifs laser",
    subcategoryEn: "Laser Doors / Motifs",
    image: "/products/motif-e02.jpeg",
    descriptionFr:
      "Motif décoratif laser E02 pour créations métalliques modernes et portes personnalisées.",
    descriptionEn:
      "Laser decorative motif E02 for modern metal creations and custom doors.",
    technicalSheetFr: [
      "Motif E02",
      "Découpe précise",
      "Usage décoratif",
    ],
    technicalSheetEn: [
      "E02 motif",
      "Precise cutting",
      "Decorative use",
    ],
    specs: ["Laser", "Motif", "E02"],
    icon: DoorOpen,
  },
  {
    id: 29,
    slug: "motif-e57",
    category: "laser-doors",
    nameFr: "Motif E57",
    nameEn: "Motif E57",
    subcategoryFr: "Portes et motifs laser",
    subcategoryEn: "Laser Doors / Motifs",
    image: "/products/motif-e57.jpeg",
    descriptionFr:
      "Motif E57 pour panneaux et portes métalliques décoratives, adapté aux projets modernes.",
    descriptionEn:
      "Motif E57 for decorative metal panels and doors, suitable for modern projects.",
    technicalSheetFr: [
      "Design décoratif",
      "Panneaux métalliques",
      "Découpe laser",
    ],
    technicalSheetEn: [
      "Decorative design",
      "Metal panels",
      "Laser cutting",
    ],
    specs: ["Laser", "Motif", "E57"],
    icon: DoorOpen,
  },
  {
    id: 30,
    slug: "motif-e88",
    category: "laser-doors",
    nameFr: "Motif E88",
    nameEn: "Motif E88",
    subcategoryFr: "Portes et motifs laser",
    subcategoryEn: "Laser Doors / Motifs",
    image: "/products/motif-e88.jpeg",
    descriptionFr:
      "Motif E88 pour portes laser et panneaux décoratifs métalliques sur mesure.",
    descriptionEn:
      "Motif E88 for laser doors and custom decorative metal panels.",
    technicalSheetFr: [
      "Motif laser",
      "Finition personnalisée",
      "Usage architectural",
    ],
    technicalSheetEn: [
      "Laser motif",
      "Custom finish",
      "Architectural use",
    ],
    specs: ["Laser", "Motif", "E88"],
    icon: DoorOpen,
  },
  {
    id: 31,
    slug: "motif-e14",
    category: "laser-doors",
    nameFr: "Motif E14",
    nameEn: "Motif E14",
    subcategoryFr: "Portes et motifs laser",
    subcategoryEn: "Laser Doors / Motifs",
    image: "/products/motif-e14.jpeg",
    descriptionFr:
      "Motif E14 pour portes et panneaux métalliques décoratifs, avec découpe laser précise.",
    descriptionEn:
      "Motif E14 for decorative metal doors and panels with precise laser cutting.",
    technicalSheetFr: [
      "Découpe laser précise",
      "Motif décoratif",
      "Application portes et panneaux",
    ],
    technicalSheetEn: [
      "Precise laser cutting",
      "Decorative motif",
      "Doors and panels application",
    ],
    specs: ["Laser", "Motif", "E14"],
    icon: DoorOpen,
  },
  {
    id: 32,
    slug: "doors-e42",
    category: "laser-doors",
    nameFr: "Doors E42",
    nameEn: "Doors E42",
    subcategoryFr: "Portes laser",
    subcategoryEn: "Laser Doors",
    image: "/products/doors-e42.jpeg",
    descriptionFr:
      "Porte laser E42 pour projets modernes nécessitant sécurité, design et finition métallique.",
    descriptionEn:
      "Laser door E42 for modern projects requiring security, design and metal finishing.",
    technicalSheetFr: [
      "Porte métallique",
      "Design laser",
      "Usage résidentiel et professionnel",
    ],
    technicalSheetEn: [
      "Metal door",
      "Laser design",
      "Residential and professional use",
    ],
    specs: ["Door", "E42", "Laser"],
    icon: DoorOpen,
  },
  {
    id: 33,
    slug: "doors-e01",
    category: "laser-doors",
    nameFr: "Doors E01",
    nameEn: "Doors E01",
    subcategoryFr: "Portes laser",
    subcategoryEn: "Laser Doors",
    image: "/products/doors-e01.jpeg",
    descriptionFr:
      "Porte laser E01 adaptée aux projets architecturaux, décoratifs et sécurisés.",
    descriptionEn:
      "Laser door E01 suitable for architectural, decorative and secure projects.",
    technicalSheetFr: [
      "Porte laser",
      "Finition décorative",
      "Sécurité et design",
    ],
    technicalSheetEn: [
      "Laser door",
      "Decorative finish",
      "Security and design",
    ],
    specs: ["Door", "E01", "Laser"],
    icon: DoorOpen,
  },

  {
    id: 34,
    slug: "final-slats",
    category: "metal-shutter",
    nameFr: "Lames finales",
    nameEn: "Final Slats",
    subcategoryFr: "Rideaux métalliques",
    subcategoryEn: "Metal Shutter Products",
    image: "/products/final-slats.jpeg",
    descriptionFr:
      "Lames finales pour rideaux métalliques, conçues pour renforcer la fermeture, améliorer la sécurité et assurer une finition propre.",
    descriptionEn:
      "Final slats for metal shutters, designed to reinforce closing, improve security and provide a clean finish.",
    technicalSheetFr: [
      "Fermeture renforcée",
      "Finition inférieure",
      "Rideaux métalliques",
    ],
    technicalSheetEn: [
      "Reinforced closing",
      "Lower finishing",
      "Metal shutters",
    ],
    specs: ["Final Slats", "Shutters", "Security"],
    icon: Layers3,
  },
  {
    id: 35,
    slug: "metal-shutter-tracks",
    category: "metal-shutter",
    nameFr: "Coulisses pour rideaux métalliques",
    nameEn: "Metal Shutter Tracks",
    subcategoryFr: "Rideaux métalliques",
    subcategoryEn: "Metal Shutter Products",
    image: "/products/metal-shutter-tracks.jpeg",
    descriptionFr:
      "Coulisses et rails de guidage pour rideaux métalliques, destinés à assurer un mouvement fluide, stable et durable.",
    descriptionEn:
      "Tracks and guiding rails for metal shutters, designed to ensure smooth, stable and durable movement.",
    technicalSheetFr: [
      "Guidage fluide",
      "Installation commerciale et industrielle",
      "Bonne résistance",
    ],
    technicalSheetEn: [
      "Smooth guiding",
      "Commercial and industrial installation",
      "Strong resistance",
    ],
    specs: ["Tracks", "Guides", "Durable"],
    icon: Building2,
  },
  {
    id: 36,
    slug: "flat-metal-curtain-slats",
    category: "metal-shutter",
    nameFr: "Lames plates de rideaux métalliques",
    nameEn: "Flat Metal Curtain Slats",
    subcategoryFr: "Rideaux métalliques",
    subcategoryEn: "Metal Shutter Products",
    image: "/products/flat-metal-curtain-slats.jpeg",
    descriptionFr:
      "Lames plates pour rideaux métalliques destinées aux commerces, garages, entrepôts et sites professionnels nécessitant sécurité et durabilité.",
    descriptionEn:
      "Flat metal curtain slats for stores, garages, warehouses and professional sites requiring security and durability.",
    technicalSheetFr: [
      "Lames plates",
      "Usage commercial",
      "Sécurité et durabilité",
    ],
    technicalSheetEn: [
      "Flat slats",
      "Commercial use",
      "Security and durability",
    ],
    specs: ["Flat Slats", "Curtain", "Security"],
    icon: Factory,
  },
  {
    id: 37,
    slug: "curved-slat-type-c",
    category: "metal-shutter",
    nameFr: "Lame courbée type C",
    nameEn: "Curved Slat Type C",
    subcategoryFr: "Rideaux métalliques",
    subcategoryEn: "Metal Shutter Products",
    image: "/products/curved-slat-type-c.jpeg",
    descriptionFr:
      "Lames courbées type C pour rideaux métalliques, conçues pour une meilleure rigidité, un bon enroulement et une protection efficace.",
    descriptionEn:
      "Curved Type C slats for metal shutters, designed for better rigidity, smooth rolling and effective protection.",
    technicalSheetFr: [
      "Profil courbé type C",
      "Bon enroulement",
      "Protection efficace",
    ],
    technicalSheetEn: [
      "Curved Type C profile",
      "Smooth rolling",
      "Effective protection",
    ],
    specs: ["Curved Slats", "Type C", "Shutters"],
    icon: SquareStack,
  },
];