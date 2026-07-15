"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const items = [
  { tag: "Corporate Gala", title: "Awards Evening Staging" },
  { tag: "Live Event", title: "Concert Lighting Rig" },
  { tag: "Outdoor Event", title: "Marquee Tent Setup" },
  { tag: "Brand Activation", title: "LED Screen Activation" },
];

export function PortfolioPreview() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-widest text-primary">
            Recent Work
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            A few rooms we&apos;ve run.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative aspect-[4/5] overflow-hidden rounded-2xl border border-border/70 bg-card"
            >
              {/* Image placeholder — swap for real event photography */}
              <div className="flex size-full items-center justify-center bg-[linear-gradient(160deg,#161718,#0e0f10)] text-xs text-muted-foreground/40">
                Image placeholder
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-5">
                <span className="text-xs font-medium uppercase tracking-wide text-primary">
                  {item.tag}
                </span>
                <h4 className="mt-1 text-sm font-semibold text-white">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          See Full Portfolio
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
