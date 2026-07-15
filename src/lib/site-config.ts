export const siteConfig = {
  name: "Think Audio Visual",
  tagline: "Stage, sound, lighting and AV production for events across South Africa and Zimbabwe.",
  phone: "+27 31 811 1311",
  phoneHref: "tel:+27318111311",
  cell: "+27 83 418 0085",
  cellHref: "tel:+27834180085",
  whatsappNumber: "27834180085",
  email: "admin@thinkaudiovisual.co.za",
  address: "78 Carnforth Avenue, Bonela, Durban, 4091",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function whatsappHref(text?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
