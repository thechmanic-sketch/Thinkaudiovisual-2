"use client";

import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { assetPath } from "@/lib/asset-path";

export type ScrollGalleryItem = {
  image: string;
  title: string;
};

export function ScrollGallery({
  eyebrow,
  title,
  description,
  items,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  items: ScrollGalleryItem[];
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: 1 | -1) {
    trackRef.current?.scrollBy({ left: dir * 360, behavior: "smooth" });
  }

  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 pt-24 sm:px-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <div className="text-sm font-medium uppercase tracking-widest text-primary">
              {eyebrow}
            </div>
            <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-muted-foreground">{description}</p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scroll(-1)}
              className="flex size-11 items-center justify-center rounded-full border border-border/70 text-foreground transition-colors hover:bg-foreground/5"
            >
              <ChevronLeft className="size-5" />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scroll(1)}
              className="flex size-11 items-center justify-center rounded-full border border-border/70 text-foreground transition-colors hover:bg-foreground/5"
            >
              <ChevronRight className="size-5" />
            </button>
          </div>
        </div>
      </div>

      <div
        ref={trackRef}
        className="mt-14 flex snap-x snap-mandatory gap-5 overflow-x-auto px-6 pb-24 sm:px-10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {items.map((item) => (
          <div
            key={item.title}
            className="relative aspect-[3/4] w-[75vw] shrink-0 snap-start overflow-hidden rounded-2xl border border-border/70 sm:w-[340px]"
          >
            <Image
              src={assetPath(item.image)}
              alt={item.title}
              fill
              sizes="(min-width: 640px) 340px, 75vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5">
              <h3 className="text-lg font-semibold text-white">
                {item.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
