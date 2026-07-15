import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { ClientLogos } from "@/components/sections/client-logos";
import { portfolioItems } from "@/lib/portfolio-data";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Portfolio & Clients | Think Audio Visual",
  description:
    "See Think Audio Visual's work across corporate galas, broadcast activations, festivals and weddings — and the clients who trust us to run their events.",
};

export default function PortfolioPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Our Work"
          title={
            <>
              Every event,{" "}
              <span className="font-[family-name:var(--font-accent)] italic text-primary">
                run right
              </span>
              .
            </>
          }
          image="/images/sabc-activation.jpg"
          imageAlt="Branded LED screens at SABC broadcast activation"
        />

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {portfolioItems.map((item) => (
                <div
                  key={item.title}
                  className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/70 bg-card"
                >
                  <Image
                    src={assetPath(item.image)}
                    alt={item.title}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5">
                    <span className="text-xs font-medium uppercase tracking-wide text-primary">
                      {item.tag}
                    </span>
                    <h4 className="mt-1 text-base font-semibold text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-b border-border/60 bg-surface-tint">
          <div className="mx-auto max-w-4xl px-6 py-24 text-center sm:px-10">
            <div className="text-sm font-medium uppercase tracking-widest text-primary">
              What Clients Say
            </div>
            <blockquote className="mt-6 text-2xl font-medium leading-snug text-foreground sm:text-3xl">
              &ldquo;Think Audio Visual handled our full conference AV without
              a single hiccup —{" "}
              <span className="font-[family-name:var(--font-accent)] italic text-primary">
                professional, punctual and easy to work with
              </span>
              .&rdquo;
            </blockquote>
            <span className="mt-6 block text-sm text-muted-foreground">
              Event Coordinator, Corporate Client
            </span>
          </div>
        </section>

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
            <div className="max-w-2xl">
              <div className="text-sm font-medium uppercase tracking-widest text-primary">
                Brands We&apos;ve Worked With
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
                Corporate, broadcast &amp; community.
              </h2>
            </div>
            <div className="mt-14">
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
