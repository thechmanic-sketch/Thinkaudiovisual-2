import type { Metadata } from "next";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { portfolioItems } from "@/lib/portfolio-data";
import { assetPath } from "@/lib/asset-path";

export const metadata: Metadata = {
  title: "Gallery | Think Audio Visual",
  description:
    "Photo gallery of Think Audio Visual event setups — stage, sound, lighting and AV production across South Africa.",
};

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <PageHero
          eyebrow="Behind The Scenes"
          title={
            <>
              More from{" "}
              <span className="font-[family-name:var(--font-accent)] italic text-primary">
                the rig
              </span>
              .
            </>
          }
          image="/images/concert-lighting-rig.jpg"
          imageAlt="Nightclub-style lighting rig with moving heads"
        />

        <section className="border-b border-border/60">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 [&>*]:mb-5 [&>*]:break-inside-avoid">
              {portfolioItems.map((item, i) => (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-2xl border border-border/70 bg-card"
                  style={{ aspectRatio: i % 3 === 0 ? "3 / 4" : i % 3 === 1 ? "1 / 1" : "4 / 5" }}
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
            <p className="mt-10 text-sm text-muted-foreground">
              Send through more of your event photography and we&apos;ll keep
              this gallery growing.
            </p>
          </div>
        </section>

        <CtaBand />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  );
}
