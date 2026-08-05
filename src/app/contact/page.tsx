import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { Reveal } from "@/components/sections/reveal";
import { BookingForm } from "@/components/booking/booking-form";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact & Booking | Think Audio Visual Durban Event Production",
  description:
    "Book Think Audio Visual for stage, sound, lighting or AV production in Durban and South Africa. Send your event details via WhatsApp or call +27 83 418 0085.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's book your event."
        image="/images/ballroom-conference.jpg"
      />

      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[1fr,1.3fr] lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Ready When You Are
            </span>
            <h2 className="mt-5 text-balance text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Let&rsquo;s Set The Stage
            </h2>

            <ul className="mt-10 space-y-6">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-4 text-foreground/80 transition-colors hover:text-accent"
                >
                  <Phone size={18} className="mt-1 shrink-0 text-accent" />
                  <span>
                    {siteConfig.phone}
                    <span className="block text-xs text-muted">Office</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-4 text-foreground/80 transition-colors hover:text-accent"
                >
                  <Phone size={18} className="mt-1 shrink-0 text-accent" />
                  <span>
                    {siteConfig.cell}
                    <span className="block text-xs text-muted">
                      WhatsApp / Cell
                    </span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-4 text-foreground/80 transition-colors hover:text-accent"
                >
                  <Mail size={18} className="mt-1 shrink-0 text-accent" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-4 text-foreground/80">
                <MapPin size={18} className="mt-1 shrink-0 text-accent" />
                <span>
                  {siteConfig.address}
                  <span className="block text-xs text-muted">
                    {siteConfig.operatingArea}
                  </span>
                </span>
              </li>
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <BookingForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
