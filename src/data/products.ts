import {
  Building2,
  CircuitBoard,
  DoorOpen,
  Factory,
  Grid2X2,
  Hammer,
  KeyRound,
  Layers3,
  LockKeyhole,
  PanelsTopLeft,
  Settings,
  ShieldCheck,
  SquareStack,
  Warehouse,
  Wrench,
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
    key: "guardrails",
    labelFr: "Garde-corps",
    labelEn: "Guardrails",
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
    subcategoryFr: "Produits sidérurgiques",
    subcategoryEn: "Steel Products",
    image: "/products/steel-strips.jpeg",
    descriptionFr:
      "Feuillards d’acier de précision destinés à la transformation industrielle, au cerclage, à l’emboutissage, au renforcement et aux travaux de tôlerie. Disponibles en plusieurs largeurs, épaisseurs et finitions selon les besoins du projet.",
    descriptionEn:
      "High-precision steel strips designed for industrial processing, strapping, stamping, reinforcement and sheet metal applications. Available in several widths, thicknesses and finishes depending on project requirements.",
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
      "Tubes ronds en acier conçus pour la construction, les installations mécaniques, les structures métalliques, les cadres et les applications industrielles. Leur forme circulaire permet une bonne répartition des charges et une excellente durabilité.",
    descriptionEn:
      "Round steel tubes designed for construction, mechanical installations, metal structures, frameworks and industrial applications. Their circular shape supports reliable load distribution and strong durability.",
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
      "Tôles d’acier destinées à la construction, au bardage, à la fabrication métallique, aux structures et aux applications industrielles. Elles offrent résistance, stabilité et performance pour les usages professionnels.",
    descriptionEn:
      "Steel sheets for construction, cladding, metal fabrication, structures and industrial applications. They offer strength, stability and reliable performance for professional use.",
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
    slug: "steel-beams",
    category: "steel",
    nameFr: "Poutrelles en acier",
    nameEn: "Steel Beams",
    subcategoryFr: "Structure métallique",
    subcategoryEn: "Metal Structure",
    image: "/products/steel-beams.jpeg",
    descriptionFr:
      "Poutrelles en acier pour projets de construction, bâtiments industriels, charpentes métalliques, infrastructures et structures lourdes. Disponibles en plusieurs profils selon les exigences techniques.",
    descriptionEn:
      "Steel beams for construction projects, industrial buildings, metal frameworks, infrastructure and heavy-duty structures. Available in several profiles depending on technical requirements.",
    technicalSheetFr: [
      "Profils I, H et U",
      "Haute résistance structurelle",
      "Utilisation construction et infrastructure",
    ],
    technicalSheetEn: [
      "I, H and U profiles",
      "High structural resistance",
      "Construction and infrastructure use",
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
      "Panneaux sandwich isolants composés de deux parements métalliques et d’un noyau isolant. Ils sont adaptés aux entrepôts, chambres froides, façades, toitures et bâtiments industriels.",
    descriptionEn:
      "Insulated sandwich panels made of two metal sheets and an insulating core. Suitable for warehouses, cold rooms, façades, roofing and industrial buildings.",
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
      "Tubes carrés en acier pour structures métalliques, cadres, projets architecturaux, construction industrielle et fabrication sur mesure. Leur section carrée offre stabilité et facilité d’assemblage.",
    descriptionEn:
      "Square steel tubes for metal structures, frames, architectural projects, industrial construction and custom fabrication. Their square section offers stability and easy assembly.",
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
    slug: "aluminium-profiles",
    category: "aluminium",
    nameFr: "Profilés aluminium",
    nameEn: "Aluminium Profiles",
    subcategoryFr: "Profilés aluminium",
    subcategoryEn: "Aluminium Profiles",
    image: "/products/aluminium-profiles.jpeg",
    descriptionFr:
      "Profilés aluminium pour fenêtres, portes, façades, garde-corps, structures légères et systèmes de construction. Une solution durable pour les projets modernes et professionnels.",
    descriptionEn:
      "Aluminium profiles for windows, doors, façades, guardrails, light structures and construction systems. A durable solution for modern professional projects.",
    technicalSheetFr: [
      "Profils standards et techniques",
      "Usage bâtiment et menuiserie",
      "Finitions selon projet",
    ],
    technicalSheetEn: [
      "Standard and technical profiles",
      "Building and joinery use",
      "Finishes depending on project",
    ],
    specs: ["Aluminium", "Profiles", "Systems"],
    icon: Grid2X2,
  },
  {
    id: 8,
    slug: "aluminium-accessories",
    category: "aluminium",
    nameFr: "Accessoires aluminium",
    nameEn: "Aluminium Accessories",
    subcategoryFr: "Accessoires aluminium",
    subcategoryEn: "Aluminium Accessories",
    image: "/products/aluminium-accessories.jpeg",
    descriptionFr:
      "Accessoires aluminium pour assemblage, installation, finition et maintenance des systèmes aluminium professionnels.",
    descriptionEn:
      "Aluminium accessories for assembly, installation, finishing and maintenance of professional aluminium systems.",
    technicalSheetFr: [
      "Assemblage et finition",
      "Compatibles menuiserie aluminium",
      "Applications professionnelles",
    ],
    technicalSheetEn: [
      "Assembly and finishing",
      "Compatible with aluminium joinery",
      "Professional applications",
    ],
    specs: ["Accessories", "Aluminium", "Finishing"],
    icon: Settings,
  },
  {
    id: 9,
    slug: "aluminium-window-systems",
    category: "aluminium",
    nameFr: "Systèmes fenêtres aluminium",
    nameEn: "Aluminium Window Systems",
    subcategoryFr: "Systèmes aluminium",
    subcategoryEn: "Aluminium Systems",
    image: "/products/aluminium-window-systems.jpeg",
    descriptionFr:
      "Systèmes de fenêtres aluminium pour projets résidentiels, commerciaux et industriels. Ils offrent durabilité, performance et finition moderne.",
    descriptionEn:
      "Aluminium window systems for residential, commercial and industrial projects. They provide durability, performance and a modern finish.",
    technicalSheetFr: [
      "Fenêtres coulissantes et battantes",
      "Systèmes sur mesure",
      "Bonne durabilité",
    ],
    technicalSheetEn: [
      "Sliding and casement windows",
      "Custom systems",
      "Strong durability",
    ],
    specs: ["Windows", "Systems", "Aluminium"],
    icon: Building2,
  },
  {
    id: 10,
    slug: "window-handles",
    category: "aluminium",
    nameFr: "Poignées de fenêtres",
    nameEn: "Window Handles",
    subcategoryFr: "Accessoires fenêtres",
    subcategoryEn: "Window Accessories",
    image: "/products/window-handles.jpeg",
    descriptionFr:
      "Poignées de fenêtres pour systèmes aluminium et métalliques, disponibles en plusieurs modèles et finitions pour installations professionnelles.",
    descriptionEn:
      "Window handles for aluminium and metal systems, available in several models and finishes for professional installations.",
    technicalSheetFr: [
      "Modèles variés",
      "Finitions modernes",
      "Compatibles systèmes aluminium",
    ],
    technicalSheetEn: [
      "Various models",
      "Modern finishes",
      "Compatible with aluminium systems",
    ],
    specs: ["Handles", "Windows", "Accessories"],
    icon: Wrench,
  },
  {
    id: 11,
    slug: "door-locks",
    category: "aluminium",
    nameFr: "Serrures de portes",
    nameEn: "Door Locks",
    subcategoryFr: "Serrurerie",
    subcategoryEn: "Lock Systems",
    image: "/products/door-locks.jpeg",
    descriptionFr:
      "Serrures de portes pour systèmes résidentiels, commerciaux et industriels, conçues pour renforcer la sécurité et la fiabilité des accès.",
    descriptionEn:
      "Door locks for residential, commercial and industrial systems, designed to improve access security and reliability.",
    technicalSheetFr: [
      "Sécurité renforcée",
      "Usage professionnel",
      "Compatibles portes aluminium et métal",
    ],
    technicalSheetEn: [
      "Reinforced security",
      "Professional use",
      "Compatible with aluminium and metal doors",
    ],
    specs: ["Locks", "Doors", "Security"],
    icon: LockKeyhole,
  },
  {
    id: 12,
    slug: "hook-locks",
    category: "aluminium",
    nameFr: "Serrures à crochet",
    nameEn: "Hook Locks",
    subcategoryFr: "Serrures",
    subcategoryEn: "Locks",
    image: "/products/hook-locks.jpeg",
    descriptionFr:
      "Serrures à crochet adaptées aux portes, portails et systèmes coulissants nécessitant un verrouillage solide et durable.",
    descriptionEn:
      "Hook locks for doors, gates and sliding systems requiring strong and durable locking.",
    technicalSheetFr: [
      "Crochet renforcé",
      "Systèmes coulissants",
      "Sécurité et durabilité",
    ],
    technicalSheetEn: [
      "Reinforced hook",
      "Sliding systems",
      "Security and durability",
    ],
    specs: ["Hook", "Locks", "Security"],
    icon: KeyRound,
  },
  {
    id: 13,
    slug: "cylinders",
    category: "aluminium",
    nameFr: "Cylindres",
    nameEn: "Cylinders",
    subcategoryFr: "Serrurerie",
    subcategoryEn: "Locksmithing",
    image: "/products/cylinders.jpeg",
    descriptionFr:
      "Cylindres pour systèmes de fermeture, portes et installations nécessitant sécurité, fiabilité et compatibilité professionnelle.",
    descriptionEn:
      "Cylinders for locking systems, doors and installations requiring security, reliability and professional compatibility.",
    technicalSheetFr: [
      "Cylindres standards",
      "Compatibles portes",
      "Sécurité quotidienne",
    ],
    technicalSheetEn: [
      "Standard cylinders",
      "Door compatible",
      "Daily security",
    ],
    specs: ["Cylinders", "Locks", "Hardware"],
    icon: LockKeyhole,
  },
  {
    id: 14,
    slug: "electric-door-openers",
    category: "aluminium",
    nameFr: "Ouvre-portes électriques",
    nameEn: "Electric Door Openers",
    subcategoryFr: "Automatisme",
    subcategoryEn: "Automation",
    image: "/products/electric-door-openers.jpeg",
    descriptionFr:
      "Ouvre-portes électriques pour améliorer l’accès, le confort et la sécurité des installations professionnelles.",
    descriptionEn:
      "Electric door openers to improve access, comfort and security for professional installations.",
    technicalSheetFr: [
      "Contrôle d’accès",
      "Automatisme professionnel",
      "Installation pratique",
    ],
    technicalSheetEn: [
      "Access control",
      "Professional automation",
      "Practical installation",
    ],
    specs: ["Electric", "Access", "Automation"],
    icon: CircuitBoard,
  },
  {
    id: 15,
    slug: "fly-screens",
    category: "aluminium",
    nameFr: "Moustiquaires",
    nameEn: "Fly Screens",
    subcategoryFr: "Systèmes fenêtres",
    subcategoryEn: "Window Systems",
    image: "/products/fly-screens.jpeg",
    descriptionFr:
      "Moustiquaires pour fenêtres et ouvertures, conçues pour apporter protection, confort et intégration discrète aux systèmes aluminium.",
    descriptionEn:
      "Fly screens for windows and openings, designed to provide protection, comfort and discreet integration with aluminium systems.",
    technicalSheetFr: [
      "Protection contre insectes",
      "Intégration discrète",
      "Fenêtres et ouvertures",
    ],
    technicalSheetEn: [
      "Insect protection",
      "Discreet integration",
      "Windows and openings",
    ],
    specs: ["Fly Screens", "Windows", "Comfort"],
    icon: Grid2X2,
  },

  {
    id: 16,
    slug: "aluminium-guardrails",
    category: "guardrails",
    nameFr: "Garde-corps aluminium",
    nameEn: "Aluminium Guardrails",
    subcategoryFr: "Sécurité architecturale",
    subcategoryEn: "Architectural Safety",
    image: "/products/aluminium-guardrails.jpeg",
    descriptionFr:
      "Garde-corps aluminium pour balcons, escaliers, terrasses et projets architecturaux. Ils combinent sécurité, finition moderne et durabilité.",
    descriptionEn:
      "Aluminium guardrails for balconies, stairs, terraces and architectural projects. They combine safety, modern finishing and durability.",
    technicalSheetFr: [
      "Balcons et escaliers",
      "Finition moderne",
      "Sécurité architecturale",
    ],
    technicalSheetEn: [
      "Balconies and stairs",
      "Modern finish",
      "Architectural safety",
    ],
    specs: ["Guardrails", "Aluminium", "Safety"],
    icon: ShieldCheck,
  },
  {
    id: 17,
    slug: "crystal-line-guardrails",
    category: "guardrails",
    nameFr: "Garde-corps Crystal Line",
    nameEn: "Crystal Line Guardrails",
    subcategoryFr: "Garde-corps design",
    subcategoryEn: "Design Guardrails",
    image: "/products/crystal-line-guardrails.jpeg",
    descriptionFr:
      "Systèmes de garde-corps Crystal Line pour projets modernes nécessitant transparence, sécurité et esthétique haut de gamme.",
    descriptionEn:
      "Crystal Line guardrail systems for modern projects requiring transparency, safety and premium aesthetics.",
    technicalSheetFr: [
      "Design transparent",
      "Usage balcon et terrasse",
      "Finition haut de gamme",
    ],
    technicalSheetEn: [
      "Transparent design",
      "Balcony and terrace use",
      "Premium finish",
    ],
    specs: ["Crystal", "Guardrails", "Design"],
    icon: ShieldCheck,
  },

  {
    id: 18,
    slug: "laser-cut-decorative-motifs",
    category: "laser-doors",
    nameFr: "Motifs décoratifs laser",
    nameEn: "Laser Cut Decorative Motifs",
    subcategoryFr: "Découpe laser",
    subcategoryEn: "Laser Cutting",
    image: "/products/laser-cut-decorative-motifs.jpeg",
    descriptionFr:
      "Motifs décoratifs découpés au laser pour portes, panneaux et projets architecturaux. Ils permettent une finition moderne et personnalisée.",
    descriptionEn:
      "Laser-cut decorative motifs for doors, panels and architectural projects. They provide a modern and customized finish.",
    technicalSheetFr: [
      "Découpe précise",
      "Motifs personnalisés",
      "Usage décoratif et architectural",
    ],
    technicalSheetEn: [
      "Precise cutting",
      "Custom motifs",
      "Decorative and architectural use",
    ],
    specs: ["Laser", "Motifs", "Custom"],
    icon: DoorOpen,
  },
  {
    id: 19,
    slug: "custom-laser-panels",
    category: "laser-doors",
    nameFr: "Panneaux laser sur mesure",
    nameEn: "Custom Laser Panels",
    subcategoryFr: "Panneaux métalliques",
    subcategoryEn: "Metal Panels",
    image: "/products/custom-laser-panels.jpeg",
    descriptionFr:
      "Panneaux métalliques découpés au laser selon les dimensions, motifs et exigences spécifiques du client.",
    descriptionEn:
      "Laser-cut metal panels made according to client dimensions, patterns and specific requirements.",
    technicalSheetFr: [
      "Fabrication sur mesure",
      "Motifs personnalisables",
      "Applications décoratives et industrielles",
    ],
    technicalSheetEn: [
      "Custom fabrication",
      "Customizable patterns",
      "Decorative and industrial applications",
    ],
    specs: ["Panels", "Laser", "Custom"],
    icon: SquareStack,
  },
  {
    id: 20,
    slug: "decorative-metal-doors",
    category: "laser-doors",
    nameFr: "Portes métalliques décoratives",
    nameEn: "Decorative Metal Doors",
    subcategoryFr: "Portes décoratives",
    subcategoryEn: "Decorative Doors",
    image: "/products/decorative-metal-doors.jpeg",
    descriptionFr:
      "Portes métalliques décoratives combinant sécurité, robustesse et esthétique pour villas, commerces et projets architecturaux.",
    descriptionEn:
      "Decorative metal doors combining security, strength and aesthetics for villas, stores and architectural projects.",
    technicalSheetFr: [
      "Design personnalisé",
      "Sécurité renforcée",
      "Finition moderne",
    ],
    technicalSheetEn: [
      "Custom design",
      "Reinforced security",
      "Modern finish",
    ],
    specs: ["Doors", "Decorative", "Security"],
    icon: DoorOpen,
  },
  {
    id: 21,
    slug: "industrial-laser-cut-doors",
    category: "laser-doors",
    nameFr: "Portes industrielles découpées laser",
    nameEn: "Industrial Laser-Cut Doors",
    subcategoryFr: "Portes industrielles",
    subcategoryEn: "Industrial Doors",
    image: "/products/industrial-laser-cut-doors.jpeg",
    descriptionFr:
      "Portes métalliques industrielles avec découpe laser, adaptées aux ateliers, entrepôts, bâtiments professionnels et installations sécurisées.",
    descriptionEn:
      "Industrial metal doors with laser cutting, suitable for workshops, warehouses, professional buildings and secure installations.",
    technicalSheetFr: [
      "Usage industriel",
      "Haute résistance",
      "Fabrication selon projet",
    ],
    technicalSheetEn: [
      "Industrial use",
      "High resistance",
      "Project-based fabrication",
    ],
    specs: ["Industrial", "Laser", "Doors"],
    icon: Factory,
  },

  {
    id: 22,
    slug: "final-slats",
    category: "metal-shutter",
    nameFr: "Lames finales",
    nameEn: "Final Slats",
    subcategoryFr: "Rideaux métalliques",
    subcategoryEn: "Metal Shutters",
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
    id: 23,
    slug: "metal-shutter-tracks",
    category: "metal-shutter",
    nameFr: "Coulisses pour rideaux métalliques",
    nameEn: "Metal Shutter Tracks",
    subcategoryFr: "Guidage",
    subcategoryEn: "Guiding System",
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
    id: 24,
    slug: "flat-metal-curtain-slats",
    category: "metal-shutter",
    nameFr: "Lames plates de rideaux métalliques",
    nameEn: "Flat Metal Curtain Slats",
    subcategoryFr: "Lames rideaux",
    subcategoryEn: "Curtain Slats",
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
    id: 25,
    slug: "curved-slat-type-c",
    category: "metal-shutter",
    nameFr: "Lame courbée type C",
    nameEn: "Curved Slat Type C",
    subcategoryFr: "Lames rideaux",
    subcategoryEn: "Curtain Slats",
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
  {
    id: 26,
    slug: "metal-shutter-motors",
    category: "metal-shutter",
    nameFr: "Moteurs pour rideaux métalliques",
    nameEn: "Metal Shutter Motors",
    subcategoryFr: "Motorisation",
    subcategoryEn: "Motorization",
    image: "/products/metal-shutter-motors.jpeg",
    descriptionFr:
      "Moteurs pour rideaux métalliques destinés aux installations commerciales et industrielles nécessitant confort, fiabilité et automatisation.",
    descriptionEn:
      "Motors for metal shutters for commercial and industrial installations requiring comfort, reliability and automation.",
    technicalSheetFr: [
      "Motorisation rideaux",
      "Commande pratique",
      "Installation professionnelle",
    ],
    technicalSheetEn: [
      "Shutter motorization",
      "Practical control",
      "Professional installation",
    ],
    specs: ["Motors", "Automation", "Shutters"],
    icon: CircuitBoard,
  },
  {
    id: 27,
    slug: "metal-shutter-axes",
    category: "metal-shutter",
    nameFr: "Axes pour rideaux métalliques",
    nameEn: "Metal Shutter Axes",
    subcategoryFr: "Axes",
    subcategoryEn: "Axes",
    image: "/products/metal-shutter-axes.jpeg",
    descriptionFr:
      "Axes et composants techniques pour rideaux métalliques, adaptés à la fabrication, la réparation et l’installation.",
    descriptionEn:
      "Axes and technical components for metal shutters, suitable for manufacturing, repair and installation.",
    technicalSheetFr: [
      "Axes standards",
      "Composants techniques",
      "Fabrication et réparation",
    ],
    technicalSheetEn: [
      "Standard axes",
      "Technical components",
      "Manufacturing and repair",
    ],
    specs: ["Axes", "Components", "Installation"],
    icon: Wrench,
  },
  {
    id: 28,
    slug: "metal-shutter-accessories",
    category: "metal-shutter",
    nameFr: "Accessoires pour rideaux métalliques",
    nameEn: "Metal Shutter Accessories",
    subcategoryFr: "Accessoires rideaux",
    subcategoryEn: "Shutter Accessories",
    image: "/products/metal-shutter-accessories.jpeg",
    descriptionFr:
      "Accessoires pour rideaux métalliques : pièces de fixation, composants, systèmes de sécurité et éléments d’installation.",
    descriptionEn:
      "Accessories for metal shutters: fixing parts, components, safety systems and installation elements.",
    technicalSheetFr: [
      "Fixation",
      "Sécurité",
      "Installation et maintenance",
    ],
    technicalSheetEn: [
      "Fixing",
      "Safety",
      "Installation and maintenance",
    ],
    specs: ["Accessories", "Fixing", "Safety"],
    icon: Settings,
  },
];