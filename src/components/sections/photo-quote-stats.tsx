"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { assetPath } from "@/lib/asset-path";
import { ClientLogos } from "@/components/sections/client-logos";

const stats = [
  { value: "500+", label: "Events delivered" },
  { value: "150+", label: "Corporate clients" },
  { value: "12+", label: "Years experience" },
];

export function PhotoQuoteStats() {
  return (
    <section className="border-b border-border/60 bg-black">
      <div className="relative flex h-[70vh] min-h-[420px] items-end overflow-hidden">
        <Image
          src={assetPath("/images/foh-concert-silhouette.jpg")}
          alt="Front-of-house sound engineer at a live concert"
          fill
          sizes="100vw"
          className="object-cover"
          priority={false}
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent" />

        <motion.blockquote
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto w-full max-w-7xl px-6 pb-14 text-3xl font-medium leading-tight text-white sm:px-10 sm:text-4xl lg:text-5xl"
        >
          &ldquo;Why book for average when you can book to{" "}
          <span className="font-[family-name:var(--font-accent)] italic text-primary">
            stand out
          </span>
          ?&rdquo;
        </motion.blockquote>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-16 sm:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-md text-xl leading-snug text-foreground sm:text-2xl"
          >
            We combine sound, lighting and stage production into{" "}
            <span className="font-[family-name:var(--font-accent)] italic text-primary">
              events people remember
            </span>
            , under the hands-on management of owner-director T. Masango.
          </motion.p>

          <div className="grid grid-cols-3 gap-6 border-t border-border/60 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div className="text-3xl font-semibold text-primary sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <ClientLogos />
        </div>
      </div>
    </section>
  );
}
