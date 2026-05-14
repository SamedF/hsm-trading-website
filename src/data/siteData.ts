import {
  Building2,
  Factory,
  ShieldCheck,
  Truck,
  Wrench,
  Users,
  CheckCircle2,
} from "lucide-react";

export type Lang = "fr" | "en";


export const whatsappContacts = [
  {
    key: "steel",
    label: "+216 58 400 253",
    whatsapp: "21658400253",
    inquiryFr: "Acier / Métal",
    inquiryEn: "Steel / Metal",
  },
  {
    key: "aluminium",
    label: "+216 58 400 228",
    whatsapp: "21658400228",
    inquiryFr: "Aluminium",
    inquiryEn: "Aluminium",
  },
] as const;

export type WhatsAppInquiry = (typeof whatsappContacts)[number]["key"];

export const company = {
  name: "HSM Trading",
  email: "import@hsm.tn",
  phone: whatsappContacts.map((contact) => contact.label).join("  |  "),
  whatsapp: whatsappContacts[0].whatsapp,
  whatsappContacts,
  location: "63 lotissement Ennakhil, Kantaoui 4042, Sousse, Tunisia",
  shortLocation: "Kantaoui 4042, Sousse, Tunisia",
};

export const content = {
  fr: {
    nav: {
      home: "Accueil",
      about: "Qui sommes-nous",
      products: "Produits",
      services: "Services",
      catalog: "Catalogue",
      contact: "Contact",
      quote: "Demande de devis",
    },
    hero: {
      badge: "Steel · Metallurgy · Aluminum · Industrial Trading",
      title: "Votre partenaire fiable en acier, aluminium et solutions industrielles.",
      text: "HSM Trading fournit des produits sidérurgiques, matériaux industriels et solutions métalliques pour la construction, la fabrication et les applications industrielles en Tunisie et en Afrique.",
      primary: "Découvrir les produits",
      secondary: "Demander un devis",
    },
    stats: [
      ["11+", "points de vente en Tunisie"],
      ["10+", "pays d’export en Afrique"],
      ["4", "familles de services"],
      ["100%", "orientation qualité"],
    ],
    about: {
      eyebrow: "Qui sommes-nous",
      title:
        "Un acteur solide dans la sidérurgie, la métallurgie, l’aluminium et le trading industriel.",
      paragraphs: [
        "HSM Trading est une société spécialisée dans les produits sidérurgiques, les matériaux industriels et les solutions métalliques. Nous assurons des services fiables d’approvisionnement et de distribution pour une large gamme de produits en acier destinés aux secteurs de la construction, de la fabrication et des applications industrielles à travers la Tunisie.",
        "Grâce à une solide expérience dans le secteur de la sidérurgie et de la métallurgie, HSM Trading collabore étroitement avec des fournisseurs et partenaires internationaux afin de fournir des produits de haute qualité répondant aux normes professionnelles et industrielles.",
        "Notre activité comprend les bobines d’acier, les tôles d’acier, les tubes, les poutrelles, les panneaux sandwich, les systèmes de rideaux métalliques, les accessoires et les solutions industrielles destinés aux usines, entreprises de construction, grossistes et projets industriels.",
        "Portée par la qualité, la fiabilité et les partenariats à long terme, HSM Trading s’engage à fournir des solutions efficaces adaptées aux besoins évolutifs du marché.",
      ],
    },
    services: {
      eyebrow: "Nos services",
      title:
        "Des services pensés pour l’industrie, la distribution et les projets professionnels.",
      text: "HSM accompagne ses clients avec du conseil, de la distribution, de la fabrication, de l’installation et une expertise industrielle.",
    },
    products: {
      eyebrow: "Produits",
      title: "Une gamme complète pour vos projets industriels et métalliques.",
      text: "Découvrez nos principaux produits : acier, tubes, tôles, poutrelles, panneaux sandwich, rideaux métalliques et accessoires.",
      request: "Demander ce produit",
      search: "Rechercher un produit...",
      all: "Tous",
    },
    catalog: {
      eyebrow: "Catalogue HSM",
      title: "Un catalogue clair pour découvrir nos produits acier et solutions métalliques.",
      text: "Le catalogue présente les familles de produits, les services HSM, les produits acier, les rideaux métalliques et les solutions de guides.",
      cta: "Demander le catalogue",
    },
    quote: {
      eyebrow: "Demande de devis",
      title: "Envoyez votre besoin directement à HSM Trading.",
      text: "Indiquez le produit, les dimensions, la quantité, le délai souhaité et le lieu de livraison. Notre équipe vous répondra rapidement.",
      name: "Nom complet",
      company: "Société",
      phone: "Téléphone",
      email: "Email",
      product: "Produit recherché",
      message: "Décrivez votre besoin...",
      send: "Envoyer sur WhatsApp",
    },
    footer: {
      text: "Votre partenaire fiable en aluminium, acier et solutions industrielles.",
      rights: "Tous droits réservés.",
    },
    chat: {
      title: "Besoin d’aide ?",
      subtitle: "Discutez avec HSM Trading",
      intro:
        "Bonjour, je suis l’assistant HSM. Choisissez une demande rapide ou écrivez votre message.",
      placeholder: "Écrire un message...",
      questions: [
        "Je veux un devis pour des bobines d’acier",
        "Avez-vous des tôles d’acier disponibles ?",
        "Je cherche des panneaux sandwich",
        "Je veux parler sur WhatsApp",
      ],
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About us",
      products: "Products",
      services: "Services",
      catalog: "Catalog",
      contact: "Contact",
      quote: "Request a quote",
    },
    hero: {
      badge: "Steel · Metallurgy · Aluminum · Industrial Trading",
      title: "Your reliable partner in steel, aluminum and industrial solutions.",
      text: "HSM Trading supplies steel products, industrial materials and metal solutions for construction, manufacturing and industrial applications across Tunisia and Africa.",
      primary: "Explore products",
      secondary: "Request a quote",
    },
    stats: [
      ["11+", "sales outlets in Tunisia"],
      ["10+", "export countries in Africa"],
      ["4", "service families"],
      ["100%", "quality-driven"],
    ],
    about: {
      eyebrow: "About us",
      title: "A strong player in steel, metallurgy, aluminum and industrial trading.",
      paragraphs: [
        "HSM Trading is a company specialized in steel products, industrial materials and metal solutions. We provide reliable supply and distribution services for a wide range of steel products dedicated to construction, manufacturing and industrial applications across Tunisia.",
        "With strong experience in the steel and metallurgy sector, HSM Trading works closely with international suppliers and partners to deliver high-quality products that meet professional and industrial standards.",
        "Our activity includes steel coils, steel sheets, tubes, beams, sandwich panels, metal shutter systems, accessories and industrial solutions for factories, construction companies, wholesalers and industrial projects.",
        "Driven by quality, reliability and long-term partnerships, HSM Trading is committed to providing efficient solutions adapted to the evolving needs of the market.",
      ],
    },
    services: {
      eyebrow: "Our services",
      title: "Services built for industry, distribution and professional projects.",
      text: "HSM supports clients with consulting, distribution, manufacturing, installation and industrial expertise.",
    },
    products: {
      eyebrow: "Products",
      title: "A complete range for industrial and metal projects.",
      text: "Explore our main products: steel, tubes, sheets, beams, sandwich panels, metal shutters and accessories.",
      request: "Request this product",
      search: "Search product...",
      all: "All",
    },
    catalog: {
      eyebrow: "HSM Catalog",
      title: "A clear catalog to discover our steel products and metal solutions.",
      text: "The catalog presents HSM service families, steel products, metal shutters and guide solutions.",
      cta: "Request catalog",
    },
    quote: {
      eyebrow: "Request a quote",
      title: "Send your requirement directly to HSM Trading.",
      text: "Include the product, dimensions, quantity, desired timeline and delivery location. Our team will reply quickly.",
      name: "Full name",
      company: "Company",
      phone: "Phone",
      email: "Email",
      product: "Product needed",
      message: "Describe your request...",
      send: "Send on WhatsApp",
    },
    footer: {
      text: "Your reliable partner in aluminum, steel and industrial solutions.",
      rights: "All rights reserved.",
    },
    chat: {
      title: "Need help?",
      subtitle: "Chat with HSM Trading",
      intro:
        "Hello, I am the HSM assistant. Choose a quick request or write your message.",
      placeholder: "Write a message...",
      questions: [
        "I need a quote for steel coils",
        "Do you have steel sheets available?",
        "I am looking for sandwich panels",
        "I want to talk on WhatsApp",
      ],
    },
  },
};

export const navItems = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "products", href: "#products" },
  { key: "services", href: "#services" },
  { key: "catalog", href: "#catalog" },
  { key: "contact", href: "#contact" },
];

export const services = [
  {
    titleFr: "Conseil personnalisé",
    titleEn: "Customized consulting",
    descriptionFr:
      "Accompagnement dans le choix des produits adaptés aux besoins industriels et commerciaux.",
    descriptionEn:
      "Support in selecting the right products for industrial and commercial needs.",
    icon: Users,
  },
  {
    titleFr: "Fabrication et installation",
    titleEn: "Manufacturing and installation",
    descriptionFr:
      "Solutions de fabrication, installation et adaptation selon les exigences du projet.",
    descriptionEn:
      "Manufacturing, installation and adaptation solutions according to project requirements.",
    icon: Factory,
  },
  {
    titleFr: "Distribution gros et détail",
    titleEn: "Wholesale and retail distribution",
    descriptionFr:
      "Approvisionnement et distribution pour grossistes, entreprises, usines et projets industriels.",
    descriptionEn:
      "Supply and distribution for wholesalers, companies, factories and industrial projects.",
    icon: Truck,
  },
  {
    titleFr: "Expertise en production industrielle",
    titleEn: "Industrial production expertise",
    descriptionFr:
      "Expertise technique dans les produits métalliques, sidérurgiques et solutions industrielles.",
    descriptionEn:
      "Technical expertise in metal products, steel products and industrial solutions.",
    icon: Wrench,
  },
];

export const strengths = [
  {
    titleFr: "Qualité",
    titleEn: "Quality",
    descriptionFr:
      "Produits sélectionnés pour répondre aux normes professionnelles et industrielles.",
    descriptionEn:
      "Products selected to meet professional and industrial standards.",
    icon: CheckCircle2,
  },
  {
    titleFr: "Fiabilité",
    titleEn: "Reliability",
    descriptionFr:
      "Approvisionnement structuré et distribution fiable pour les besoins du marché.",
    descriptionEn:
      "Structured supply and reliable distribution for market needs.",
    icon: ShieldCheck,
  },
  {
    titleFr: "Partenariats long terme",
    titleEn: "Long-term partnerships",
    descriptionFr:
      "Collaboration avec des fournisseurs et partenaires internationaux.",
    descriptionEn:
      "Collaboration with international suppliers and partners.",
    icon: Building2,
  },
];