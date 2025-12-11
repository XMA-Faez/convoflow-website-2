export interface Client {
  id: string;
  name: string;
  industry: string;
  website: string;
  logo: string;
  featured?: boolean;
}

export const clients: Client[] = [
  {
    id: "zabeel",
    name: "Zabeel Institute",
    industry: "Education & Training",
    website: "https://zabeelinstitute.ae",
    logo: "/logos/clients/zabeel.svg",
  },
  {
    id: "kcal",
    name: "KCAL",
    industry: "Food & Lifestyle",
    website: "https://kcallife.com",
    logo: "/logos/clients/kcal.svg",
  },
  {
    id: "packman",
    name: "Packman.ai",
    industry: "E-commerce AI",
    website: "https://packman.ai",
    logo: "/logos/clients/packman.svg",
  },
  {
    id: "dar-global",
    name: "Dar Global",
    industry: "Real Estate Developer",
    website: "https://darglobal.co.uk",
    logo: "/logos/clients/dar-global.webp",
    featured: true,
  },
  {
    id: "cntxt",
    name: "CNTXT",
    industry: "Cloud & AI",
    website: "https://cntxt.com",
    logo: "/logos/clients/cntxt.png",
    featured: true,
  },
  {
    id: "efg-hub",
    name: "EFG-HUB",
    industry: "Tech & Business",
    website: "https://www.efghub.ae",
    logo: "/logos/clients/efg-hub.png",
  },
  {
    id: "british-medical-complex",
    name: "British Medical Complex",
    industry: "Healthcare",
    website: "https://britishmedicalcomplex.com",
    logo: "/logos/clients/british-medical-complex.png",
  },
  {
    id: "coface",
    name: "Coface",
    industry: "Insurance",
    website: "https://www.coface.ae",
    logo: "/logos/clients/coface.png",
    featured: true,
  },
  {
    id: "shuraa",
    name: "Shuraa",
    industry: "Business Setup",
    website: "https://www.shuraa.com",
    logo: "/logos/clients/shuraa.svg",
    featured: true,
  },
  {
    id: "arbore",
    name: "Arbore Estates",
    industry: "Luxury Real Estate",
    website: "https://arboreestates.com",
    logo: "/logos/clients/arbore.png",
  },
  {
    id: "jet-luxe",
    name: "Jet Luxe",
    industry: "Private Aviation",
    website: "https://jetluxe.com",
    logo: "/logos/clients/jet-luxe.jpeg",
  },
  {
    id: "keyper",
    name: "Keyper",
    industry: "PropTech",
    website: "https://www.realkeyper.com",
    logo: "/logos/clients/keyper.png",
  },
];
