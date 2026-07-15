import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { PageHero } from "@/components/sections/page-hero";
import { ScrollGallery } from "@/components/sections/scroll-gallery";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata: Metadata = {
  title: "Services | Think Audio Visual",
  description:
    "Stage hire, professional sound systems, lighting design, LED screens, trussing and rigging, DJ equipment and full event production in Durban and South Africa.",
};

const divisions = [
  {
    image: "/images/pa-system-trussing.webp",
    title: "Sound",
  },
  {
    image: "/images/concert-lighting-rig.jpg",
    title: "Lighting",
  },
  {
    image: "/images/gala-stage.jpg",
    title: "Stage & Rigging",
  },
  {
    image: "/images/nedbank-activation.jpg",
    title: "Audio Visual",
  },
];

const detailedServices = [
  {
    num: "Division 01",
    title: "Sound",
    body: "Live audio and sound reinforcement for performances, functions and conferences alike.",
    items: [
      "PA systems",
      "Live performances",
      "Backline (bands)",
      "DJ'ying",
      "Audio recording",
      "Conference microphones",
    ],
  },
  {
    num: "Division 02",
    title: "Lighting",
    body: "Stage and decorative lighting design that sets the tone for every kind of event.",
    items: ["Stage lights", "Up lights", "Décor lights", "Disco lights"],
  },
  {
    num: "Division 03",
    title: "Stage & Rigging",
    body: "Staging, trussing and podiums built to spec for performances, shows and formal proceedings.",
    items: [
      "Performance stage",
      "Fashion show stage",
      "Trussing & rigging",
      "Podium raising",
      "Main table stage",
    ],
  },
  {
    num: "Division 04",
    title: "Audio Visual",
    body: "Screens, projection and LED walls for conferences, meetings and brand activations.",
    items: [
      "LED screens",
      "Fastfold & daylight screens",
      "Data projectors & laptops",
      "Presentation aids",
      "Video recording & live streaming",
    ],
  },
];

const matchedEvents = [
  {
    title: "Corporate Events",
    body: "Data projectors, LED screens, conference microphones and live streaming for professional proceedings.",
  },
  {
    title: "Festivals & Live Performances",
    body: "Full PA systems, backline, stage lighting and rigging — run by a crew that knows the room.",
  },
  {
    title: "Weddings",
    body: "Elegant staging, uplighting and sound, tuned to the size and feel of your celebration.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="What We Offer"
          title={
            <>
              Full production,
              <br />
              one{" "}
              <span className="font-[family-name:var(--font-accent)] italic text-primary">
                crew
              </span>
              .
            </>
          }
          image="/images/concert-lighting-rig.jpg"
          imageAlt="Concert lighting rig with moving heads and haze"
        />

        <ScrollGallery
          eyebrow="Four Divisions"
          title="One crew, every technical build."
          description="From the screen at the front to the lights above the stage — scroll through what we run."
          items={divisions}
        />

        <section className="border-b border-border/60 bg-surface-tint">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
            <div className="grid gap-6 sm:grid-cols-2">
              {detailedServices.map((s) => (
                <div
                  key={s.num}
                  className="rounded-2xl border border-border/70 bg-card-alt p-8"
                >
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {s.num}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold">{s.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {s.body}
                  </p>
                  <ul className="mt-5 space-y-1.5 text-sm text-foreground/80">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="size-1 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
            <div className="max-w-2xl">
              <div className="text-sm font-medium uppercase tracking-widest text-primary">
                Matched To Your Event
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                What each event usually needs.
              </h2>
              <p className="mt-4 text-muted-foreground">
                A quick guide — every setup is still built around your
                specific brief.
              </p>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-3">
              {matchedEvents.map((e) => (
                <div
                  key={e.title}
                  className="rounded-2xl border border-border/70 bg-card p-8"
                >
                  <h3 className="text-lg font-semibold">{e.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {e.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  );
}
