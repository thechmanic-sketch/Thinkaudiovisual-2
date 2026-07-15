import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { BookingForm } from "@/components/booking/booking-form";
import { siteConfig } from "@/lib/site-config";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Contact & Booking | Think Audio Visual",
  description:
    "Book Think Audio Visual for your next event. Choose a date and time and send your booking details straight through to WhatsApp.",
};

const infoBlocks = [
  { label: "Phone", value: siteConfig.phone, href: siteConfig.phoneHref },
  { label: "WhatsApp / Cell", value: siteConfig.cell, href: siteConfig.cellHref },
  { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { label: "Address", value: siteConfig.address },
  {
    label: "Operating Area",
    value: "Durban & surrounds, available for events across South Africa.",
  },
];

export default function ContactPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <div className="border-b border-border/60 bg-black">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10">
            <div className="text-sm font-medium uppercase tracking-widest text-primary">
              Get In Touch
            </div>
            <h1 className="mt-3 max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
              Let&apos;s book your event.
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              Pick a date and time below, fill in your details, and it opens
              directly in WhatsApp, ready to send to our team.
            </p>
          </div>
        </div>

        <section id="booking" className="bg-surface-tint">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-24 sm:px-10 lg:grid-cols-[0.9fr_1.3fr]">
            <div>
              {infoBlocks.map((block) => (
                <div key={block.label} className="border-t border-border/60 py-5 first:border-t-0 first:pt-0">
                  <h3 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {block.label}
                  </h3>
                  {block.href ? (
                    <a href={block.href} className="mt-1.5 block text-foreground/90 hover:text-primary">
                      {block.value}
                    </a>
                  ) : (
                    <p className="mt-1.5 text-foreground/90">{block.value}</p>
                  )}
                </div>
              ))}

              <div className="relative mt-8 aspect-[4/5] overflow-hidden rounded-2xl border border-border/70">
                <Image
                  src={assetPath("/images/hall-pa-stage.jpg")}
                  alt="Hall stage with mixing console, microphones and audience chairs"
                  fill
                  sizes="(min-width: 1024px) 35vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5">
                  <span className="text-xs font-medium uppercase tracking-wide text-primary">
                    Ready When You Are
                  </span>
                  <h4 className="mt-1 text-base font-semibold text-white">
                    Let&apos;s Set The Stage
                  </h4>
                </div>
              </div>
            </div>

            <BookingForm />
          </div>
        </section>
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  );
}
