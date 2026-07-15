"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { assetPath } from "@/lib/asset-path";

export function PageHero({
  eyebrow,
  title,
  image,
  imageAlt,
}: {
  eyebrow: string;
  title: React.ReactNode;
  image: string;
  imageAlt: string;
}) {
  return (
    <section className="relative flex h-[60vh] min-h-[420px] items-end overflow-hidden border-b border-border/60 bg-black">
      <Image
        src={assetPath(image)}
        alt={imageAlt}
        fill
        sizes="100vw"
        priority
        className="object-cover opacity-70"
      />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black via-black/60 to-transparent" />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative mx-auto w-full max-w-7xl px-6 pb-14 sm:px-10"
      >
        <div className="text-sm font-medium uppercase tracking-widest text-primary">
          {eyebrow}
        </div>
        <h1 className="mt-3 max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
          {title}
        </h1>
      </motion.div>
    </section>
  );
}
