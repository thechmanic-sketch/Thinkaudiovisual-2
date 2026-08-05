export const siteConfig = {
  name: "Think Audio Visual",
  tagline: "Stage, Sound, Lighting & AV Production — Durban, South Africa",
  url: "https://thinkaudiovisual.co.za",
  phone: "+27 31 811 1311",
  cell: "+27 83 418 0085",
  whatsappNumber: "27834180085",
  email: "admin@thinkaudiovisual.co.za",
  address: "78 Carnforth Avenue, Bonela, Durban, 4091",
  operatingArea: "Durban & surrounds, available for events across South Africa",
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export function whatsappHref(message?: string) {
  const base = `https://wa.me/${siteConfig.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function buildBookingWhatsappMessage(fields: {
  name?: string;
  phone?: string;
  email?: string;
  eventType?: string;
  eventDate?: string;
  venue?: string;
  services?: string;
  message?: string;
}) {
  const lines = [
    "New booking enquiry — Think Audio Visual",
    fields.name ? `Name: ${fields.name}` : null,
    fields.phone ? `Phone: ${fields.phone}` : null,
    fields.email ? `Email: ${fields.email}` : null,
    fields.eventType ? `Event type: ${fields.eventType}` : null,
    fields.eventDate ? `Event date: ${fields.eventDate}` : null,
    fields.venue ? `Venue: ${fields.venue}` : null,
    fields.services ? `Services needed: ${fields.services}` : null,
    fields.message ? `Message: ${fields.message}` : null,
  ].filter(Boolean);
  return lines.join("\n");
}
