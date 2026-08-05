import type { Metadata } from "next";
import { AudioLines, Lightbulb, Layers, MonitorPlay } from "lucide-react";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/sections/reveal";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Sound, Lighting, Staging & AV Hire Durban | Think Audio Visual Services",
  description:
    "Stage hire, professional sound systems, lighting design, LED screens, trussing and rigging, DJ equipment and full event production in Durban and South Africa.",
};

const services = [
  {
    n: "01",
    icon: AudioLines,
    title: "Sound",
    intro:
      "Live audio and sound reinforcement for performances, functions and conferences alike.",
    items: [
      "PA systems",
      "Live performances",
      "Backline (bands)",
      "DJ'ying",
      "Audio recording",
      "Conference microphones",
    ],
    image: "/images/pa-system-trussing.webp",
  },
  {
    n: "02",
    icon: Lightbulb,
    title: "Lighting",
    intro:
      "Stage and decorative lighting design that sets the tone for every kind of event.",
    items: ["Stage lights", "Up lights", "Décor lights", "Disco lights"],
    image: "/images/concert-lighting-rig.jpg",
  },
  {
    n: "03",
    icon: Layers,
    title: "Stage & Rigging",
    intro:
      "Staging, trussing and podiums built to spec for performances, shows and formal proceedings.",
    items: [
      "Performance stage",
      "Fashion show stage",
      "Trussing & rigging",
      "Podium raising",
      "Main table stage",
    ],
    image: "/images/gala-stage.jpg",
  },
  {
    n: "04",
    icon: MonitorPlay,
    title: "Audio Visual",
    intro:
      "Screens, projection and LED walls for conferences, meetings and brand activations.",
    items: [
      "LED screens",
      "Fastfold & daylight screens",
      "Data projectors & laptops",
      "Presentation aids",
      "Video recording & live streaming",
    ],
    image: "/images/ballroom-conference.jpg",
  },
];

const matched = [
  {
    title: "Corporate Events",
    copy: "Data projectors, LED screens, conference microphones and live streaming for professional proceedings.",
  },
  {
    title: "Festivals & Live Performances",
    copy: "Full PA systems, backline, stage lighting and rigging — run by a crew that knows the room.",
  },
  {
    title: "Weddings",
    copy: "Elegant staging, uplighting and sound, tuned to the size and feel of your celebration.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Full production, one crew."
        image="/images/foh-concert-silhouette.jpg"
      />

      <section className="bg-background">
        {services.map((s, i) => (
          <div
            key={s.n}
            className="border-b border-foreground/10 py-24 last:border-b-0 lg:py-32"
          >
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
              <div
                className={`grid items-center gap-14 lg:grid-cols-2 ${
                  i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                }`}
              >
                <Reveal className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <img
                    src={assetPath(s.image)}
                    alt={s.title}
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent" />
                </Reveal>

                <Reveal delay={0.1}>
                  <span className="font-mono text-sm text-accent">
                    {s.n}
                  </span>
                  <div className="mt-4 flex items-center gap-4">
                    <s.icon size={28} strokeWidth={1.5} className="text-accent" />
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                      {s.title}
                    </h2>
                  </div>
                  <p className="mt-5 max-w-md text-balance leading-relaxed text-muted">
                    {s.intro}
                  </p>
                  <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3">
                    {s.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-foreground/80"
                      >
                        <span className="h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </Reveal>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="border-t border-foreground/10 bg-surface/40 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Matched To Your Event
            </span>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              What each event usually needs.
            </h2>
            <p className="mt-4 text-sm text-muted">
              A quick guide — every setup is still built around your specific
              brief.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 lg:grid-cols-3">
            {matched.map((m, i) => (
              <Reveal key={m.title} delay={i * 0.1}>
                <div className="h-full bg-background p-8 lg:p-10">
                  <h3 className="text-lg font-semibold text-accent">
                    {m.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {m.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Let's Talk"
        title="Tell us the event. We'll recommend the setup."
        copy="Send through your event date, venue and guest count, and we'll put together the right combination of sound, stage, lighting and AV."
      />
    </>
  );
}
