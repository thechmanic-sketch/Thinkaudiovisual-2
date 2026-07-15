import Link from "next/link";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01 — Sound",
    title: "Professional Sound Systems",
    body: "PA systems, live performance audio, backline, DJ'ying and conference microphones tuned to the room.",
  },
  {
    num: "02 — Lighting",
    title: "Lighting Design",
    body: "Stage lighting, uplighting and décor lighting, designed to set the tone of your event from entrance to exit.",
  },
  {
    num: "03 — Stage",
    title: "Stage & Rigging",
    body: "Performance stages, trussing and podium builds engineered for safety and built to spec.",
  },
  {
    num: "04 — Audio Visual",
    title: "Screens & Presentation",
    body: "LED screens, projection, data projectors and live streaming for conferences and brand activations.",
  },
];

function ServiceCard({ service }: { service: (typeof services)[number] }) {
  return (
    <div className="w-[80vw] shrink-0 rounded-2xl border border-border/70 bg-card p-8 sm:w-[45vw] lg:w-[calc(25vw-1.125rem)]">
      <span className="text-xs font-medium uppercase tracking-widest text-primary">
        {service.num}
      </span>
      <h3 className="mt-4 text-xl font-semibold">{service.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground">{service.body}</p>
    </div>
  );
}

export function ServicesPreview() {
  const loop = [...services, ...services];

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-widest text-primary">
            What We Do
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Four disciplines. One production crew.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From the screen to the speaker stack to the light rig above the
            stage, we handle the full technical build so your event runs
            without a hitch.
          </p>
        </div>
      </div>

      <div
        className="group mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_5%,black_95%,transparent)]"
      >
        <div className="animate-marquee flex w-max gap-6 group-hover:[animation-play-state:paused]">
          {loop.map((s, i) => (
            <ServiceCard key={`${s.title}-${i}`} service={s} />
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-24 pt-14 sm:px-10">
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          View All Services
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
