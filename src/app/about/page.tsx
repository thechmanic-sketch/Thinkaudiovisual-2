import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { PageHero } from "@/components/sections/page-hero";
import { FloatingStatHero } from "@/components/sections/floating-stat-hero";
import { StatBand } from "@/components/sections/stat-band";
import { CtaBand } from "@/components/sections/cta-band";
import { ClientLogos } from "@/components/sections/client-logos";

export const metadata: Metadata = {
  title: "About Us | Think Audio Visual",
  description:
    "Under the management of owner-director T. Masango, Think Audio Visual brings over 10 years of experience in stage, sound and audio-visual production to events across South Africa.",
};

const commitments = [
  {
    num: "01",
    title: "Reliable at all times",
    body: "We provide reliable services to our clients at all times — event timelines don't wait, and neither do we.",
  },
  {
    num: "02",
    title: "The right gear for your goals",
    body: "We achieve our clients' goals by recommending the correct equipment for their events, not just what's on the shelf.",
  },
  {
    num: "03",
    title: "Relationships that last",
    body: "We ensure good relationships with our clients, no matter how big or small their event is.",
  },
];

const whyClientsStay = [
  {
    num: "Integrity",
    title: "Honest, from quote to teardown",
    body: "You're assured your event is handled by honest, friendly and skilled professionals who are passionate about providing unsurpassed quality service that keeps you coming back.",
  },
  {
    num: "Cost Reduction",
    title: "Fair pricing, without cutting corners",
    body: "We find the most cost-effective solutions for ourselves and our clients, ensuring quality service at a reasonable price.",
  },
  {
    num: "Improved Quality",
    title: "The right setup, within your budget",
    body: "We pride ourselves on our research and planning capability, ensuring the best service possible within a particular budget.",
  },
  {
    num: "Time to Market",
    title: "Results, in the shortest time possible",
    body: "We always strive to provide services that yield the desired results in the shortest possible time — because your event date isn't moving.",
  },
];

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="About Think Audio Visual"
          title={
            <>
              Ten years of getting{" "}
              <span className="font-[family-name:var(--font-accent)] italic text-primary">
                the show
              </span>{" "}
              right.
            </>
          }
          image="/images/gala-stage.jpg"
          imageAlt="Gala stage with blue draping and floral staging"
        />

        <FloatingStatHero
          eyebrow="Leadership"
          title="Managed by T. Masango, Owner & Director."
          body="Under the management of a skilled and experienced owner-director, our clients are guaranteed optimum service at all times — from an intimate conference to a full-scale festival stage. Our vision: to become the most renowned professional audio visual company in South Africa."
          ctaLabel="More About Us"
          ctaHref="/contact#booking"
          image="/images/ballroom-conference.jpg"
          imageAlt="Ballroom fitted with dual presentation screens and pin lighting"
          stats={[
            { icon: "calendar", value: "500+", label: "Events delivered" },
            { icon: "users", value: "150+", label: "Corporate clients" },
            { icon: "clock", value: "12+", label: "Years experience" },
          ]}
        />

        <StatBand
          eyebrow="Our Commitment"
          headline="500+ events delivered. 12+ years of getting it right."
          caption="Based in Durban. Working across South Africa and Zimbabwe."
          image="/images/pa-system-trussing.webp"
          imageAlt="PA system and trussing rig with blue stage lighting"
        />

        <section className="border-b border-border/60 bg-[#0f2118]">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
            <div className="max-w-2xl">
              <div className="text-sm font-medium uppercase tracking-widest text-primary">
                What We Promise
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                On every job, without exception.
              </h2>
            </div>

            <div className="mt-14 space-y-8">
              {commitments.map((c) => (
                <div
                  key={c.num}
                  className="flex flex-col gap-3 border-t border-border/60 pt-8 sm:flex-row sm:items-baseline sm:gap-10"
                >
                  <span className="text-sm font-medium text-primary sm:w-12 sm:shrink-0">
                    {c.num}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold">{c.title}</h3>
                    <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
            <div className="max-w-2xl">
              <div className="text-sm font-medium uppercase tracking-widest text-primary">
                Why Clients Stay
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Four reasons we keep getting the call back.
              </h2>
            </div>

            <div className="mt-14 grid gap-6 sm:grid-cols-2">
              {whyClientsStay.map((item) => (
                <div
                  key={item.num}
                  className="rounded-2xl border border-border/70 bg-card p-8"
                >
                  <span className="text-xs font-medium uppercase tracking-widest text-primary">
                    {item.num}
                  </span>
                  <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.body}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-16">
              <ClientLogos />
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
