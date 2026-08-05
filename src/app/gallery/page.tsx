import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CtaBand } from "@/components/sections/cta-band";
import { MediaGrid } from "@/components/sections/media-grid";
import { galleryItems } from "@/lib/portfolio-data";

export const metadata: Metadata = {
  title: "Event Photo Gallery | Think Audio Visual Stage & Sound Setups",
  description:
    "Photo gallery of Think Audio Visual event setups — stage builds, sound systems, lighting rigs and AV production for events across South Africa.",
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="More from the rig."
        image="/images/concert-lighting-rig.jpg"
      />

      <section className="bg-background py-28 lg:py-36">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <MediaGrid items={galleryItems} />
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
