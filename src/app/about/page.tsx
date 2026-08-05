import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/sections/reveal";

export const metadata: Metadata = {
  title: "About Think Audio Visual | Event Production Company Durban",
  description:
    "Meet the team behind Think Audio Visual. Owner-director T. Masango brings 10+ years of stage, sound and AV production experience to events across South Africa.",
};

const promises = [
  {
    n: "01",
    title: "Reliable at all times",
    copy: "Event timelines don't wait, and neither do we.",
  },
  {
    n: "02",
    title: "The right gear for your goals",
    copy: "We achieve our clients' goals by recommending the correct equipment for their events, not just what's on the shelf.",
  },
  {
    n: "03",
    title: "Relationships that last",
    copy: "We ensure good relationships with our clients, no matter how big or small their event is.",
  },
];

const reasons = [
  {
    title: "Honest, from quote to teardown",
    copy: "You're assured your event is handled by honest, friendly and skilled professionals who are passionate about providing unsurpassed quality service that keeps you coming back.",
  },
  {
    title: "Fair pricing, without cutting corners",
    copy: "We find the most cost-effective solutions for ourselves and our clients, ensuring quality service at a reasonable price.",
  },
  {
    title: "The right setup, within your budget",
    copy: "We pride ourselves on our research and planning capability, ensuring the best service possible within a particular budget.",
  },
  {
    title: "Results, in the shortest time possible",
    copy: "We always strive to provide services that yield the desired results in the shortest possible time — because your event date isn't moving.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Ten years of getting the show right."
        image="/images/gala-stage.jpg"
      />

      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Leadership
            </span>
            <p className="mt-6 text-balance text-2xl font-medium leading-relaxed text-foreground/90">
              Managed by T. Masango, Owner &amp; Director.
            </p>
            <blockquote className="mx-auto mt-10 max-w-xl border-l-2 border-accent pl-6 text-left">
              <p className="text-balance text-xl italic leading-relaxed text-foreground/90">
                &ldquo;To become the most renowned professional audio visual
                company in South Africa.&rdquo;
              </p>
              <cite className="mt-4 block text-sm not-italic text-muted">
                — Our Vision
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-surface/40 py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              What We Promise On Every Job
            </span>
          </Reveal>
          <div className="mt-16 grid gap-12 lg:grid-cols-3">
            {promises.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.1}>
                <span className="text-sm font-mono text-accent">{p.n}</span>
                <h3 className="mt-4 text-xl font-semibold">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {p.copy}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <Reveal>
            <h2 className="max-w-2xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              Four reasons we keep getting the call back.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-foreground/10 bg-foreground/10 sm:grid-cols-2">
            {reasons.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08}>
                <div className="h-full bg-background p-8 lg:p-10">
                  <h3 className="text-lg font-semibold text-accent">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {r.copy}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-16 text-center" delay={0.2}>
            <p className="text-lg text-foreground/80">
              Based in Durban. Working across Southern Africa.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Let's Talk"
        title="Tell us what you're planning."
        copy="We'll tell you exactly what it takes to run it without a hitch — the sound, stage, lighting and AV setup built for your goals and your budget."
        primaryLabel="Start a Booking"
        primaryHref="/contact"
      />
    </>
  );
}
