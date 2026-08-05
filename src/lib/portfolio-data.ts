export type PortfolioItem = {
  slug: string;
  category: string;
  title: string;
  image: string;
};

export const portfolioItems: PortfolioItem[] = [
  { slug: "ballroom-conference", category: "Corporate", title: "Ballroom Conference Setup", image: "/images/ballroom-conference.jpg" },
  { slug: "awards-evening-staging", category: "Corporate Gala", title: "Awards Evening Staging", image: "/images/gala-stage.jpg" },
  { slug: "concert-lighting-rig", category: "Live Event", title: "Concert Lighting Rig", image: "/images/concert-lighting-rig.jpg" },
  { slug: "dj-set-up", category: "Live Event", title: "DJ Set-Up", image: "/images/dj-setup.jpg" },
  { slug: "marquee-tent-setup", category: "Outdoor Event", title: "Marquee Tent Setup", image: "/images/marquee-tent.jpg" },
  { slug: "presentation-podium", category: "Corporate", title: "Presentation & Podium", image: "/images/presentation-podium.jpg" },
  { slug: "nedbank-activation", category: "Brand Activation", title: "Nedbank Screen Activation", image: "/images/nedbank-activation.jpg" },
  { slug: "hall-pa-stage-setup", category: "Community Event", title: "Hall PA & Stage Setup", image: "/images/hall-pa-stage.jpg" },
  { slug: "sabc-activation", category: "Broadcast", title: "SABC Screen Activation", image: "/images/sabc-activation.jpg" },
  { slug: "stage-podium-styling", category: "Corporate Gala", title: "Stage & Podium Styling", image: "/images/foh-concert-silhouette.jpg" },
  { slug: "theatre-stage-show", category: "Live Performance", title: "Theatre Stage Show", image: "/images/pa-system-trussing.webp" },
  { slug: "outdoor-concert-stage", category: "Festival", title: "Outdoor Concert Stage", image: "/images/foh-mixing-console.jpg" },
];

export const galleryItems: PortfolioItem[] = [
  { slug: "stage-podium-styling-2", category: "Corporate Gala", title: "Stage & Podium Styling", image: "/images/gala-stage.jpg" },
  { slug: "club-lighting-rig", category: "Live Event", title: "Club Lighting Rig", image: "/images/concert-lighting-rig.jpg" },
  { slug: "dj-set-up-2", category: "Live Event", title: "DJ Set-Up", image: "/images/dj-setup.jpg" },
  { slug: "nedbank-activation-2", category: "Brand Activation", title: "Nedbank Screen Activation", image: "/images/nedbank-activation.jpg" },
  { slug: "hall-pa-stage-setup-2", category: "Community Event", title: "Hall PA & Stage Setup", image: "/images/hall-pa-stage.jpg" },
  { slug: "presentation-podium-2", category: "Corporate", title: "Presentation & Podium", image: "/images/presentation-podium.jpg" },
  { slug: "theatre-stage-show-2", category: "Live Performance", title: "Theatre Stage Show", image: "/images/pa-system-trussing.webp" },
  { slug: "marquee-tent-setup-2", category: "Outdoor Event", title: "Marquee Tent Setup", image: "/images/marquee-tent.jpg" },
  { slug: "outdoor-concert-stage-2", category: "Festival", title: "Outdoor Concert Stage", image: "/images/foh-mixing-console.jpg" },
  { slug: "boardroom-conferencing", category: "Corporate", title: "Boardroom Conferencing", image: "/images/sabc-activation.jpg" },
];
