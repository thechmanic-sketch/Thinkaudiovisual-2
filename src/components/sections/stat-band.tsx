"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { assetPath } from "@/lib/asset-path";

export function StatBand({
  eyebrow,
  headline,
  caption,
  image,
  imageAlt,
}: {
  eyebrow: string;
  headline: React.ReactNode;
  caption: React.ReactNode;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="border-b border-border/60 bg-surface-tint">
      <div className="mx-auto max-w-5xl px-6 pb-14 pt-20 text-center sm:px-10">
        <span className="inline-block rounded-full border border-border/70 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
          {eyebrow}
        </span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mt-6 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl"
        >
          {headline}
        </motion.h2>
      </div>

      <div className="relative h-[50vh] min-h-[340px] overflow-hidden">
        <Image
          src={assetPath(image)}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center">
          <p className="max-w-2xl text-lg font-medium text-white sm:text-2xl">
            {caption}
          </p>
        </div>
      </div>
    </section>
  );
}
