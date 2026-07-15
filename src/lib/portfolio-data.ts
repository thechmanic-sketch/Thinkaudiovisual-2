export type PortfolioItem = {
  image: string;
  title: string;
  tag: string;
  category: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    image: "/images/ballroom-conference.jpg",
    title: "Ballroom Conference Setup",
    tag: "Corporate",
    category: "Corporate",
  },
  {
    image: "/images/gala-stage.jpg",
    title: "Awards Evening Staging",
    tag: "Corporate Gala",
    category: "Corporate",
  },
  {
    image: "/images/concert-lighting-rig.jpg",
    title: "Concert Lighting Rig",
    tag: "Live Event",
    category: "Live",
  },
  {
    image: "/images/dj-setup.jpg",
    title: "DJ Set-Up",
    tag: "Live Event",
    category: "Live",
  },
  {
    image: "/images/marquee-tent.jpg",
    title: "Marquee Tent Setup",
    tag: "Outdoor Event",
    category: "Outdoor",
  },
  {
    image: "/images/foh-mixing-console.jpg",
    title: "Outdoor FOH Console",
    tag: "Live Event",
    category: "Live",
  },
  {
    image: "/images/presentation-podium.jpg",
    title: "Presentation & Podium",
    tag: "Corporate",
    category: "Corporate",
  },
  {
    image: "/images/nedbank-activation.jpg",
    title: "Nedbank Screen Activation",
    tag: "Brand Activation",
    category: "Brand",
  },
  {
    image: "/images/hall-pa-stage.jpg",
    title: "Hall PA & Stage Setup",
    tag: "Community Event",
    category: "Community",
  },
  {
    image: "/images/sabc-activation.jpg",
    title: "SABC Screen Activation",
    tag: "Broadcast",
    category: "Brand",
  },
  {
    image: "/images/pa-system-trussing.webp",
    title: "PA & Trussing Rig",
    tag: "Sound",
    category: "Live",
  },
  {
    image: "/images/foh-concert-silhouette.jpg",
    title: "Front of House",
    tag: "Live Event",
    category: "Live",
  },
];

export const clientLogos: { name: string; logo?: string }[] = [
  { name: "Nedbank" },
  { name: "SABC" },
  { name: "Corporate Conferences" },
  { name: "Community Halls & Churches" },
  { name: "Private Functions" },
];
