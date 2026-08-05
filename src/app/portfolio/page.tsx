import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { MediaGrid } from "@/components/sections/media-grid";
import { Reveal } from "@/components/sections/reveal";
import { portfolioItems } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Event Portfolio & Clients | Think Audio Visual Durban",
  description:
    "See Think Audio Visual's work across corporate galas, broadcast activations, festivals and weddings in Durban and South Africa — and the clients who trust us to run their events.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Every event. Zero surprises."
        image="/images/gala-stage.jpg"
      />

      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <MediaGrid items={portfolioItems} />
        </div>
      </section>

      <section className="border-t border-foreground/10 bg-surface/40 py-28 lg:py-36">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
          <Reveal>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Trusted To Run The Room
            </span>
            <blockquote className="mt-8">
              <p className="text-balance text-2xl font-medium italic leading-relaxed text-foreground/90">
                &ldquo;Think Audio Visual handled our full conference AV
                without a single hiccup — professional, punctual and easy to
                work with.&rdquo;
              </p>
            </blockquote>
            <p className="mt-6 text-sm text-muted">
              Corporate, broadcast &amp; community.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand
        eyebrow="Let's Talk"
        title="Tell us what's at stake. We'll make sure it runs perfectly."
        copy="Tell us the date, venue and vibe — we'll handle the sound, stage, lighting and AV."
      />
    </>
  );
}
