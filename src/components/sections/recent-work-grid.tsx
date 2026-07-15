"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const projects = [
  {
    tag: "Development",
    title: "Awards Evening Staging",
    sub: "Corporate Gala",
    span: "lg:col-span-2",
    aspect: "aspect-[16/10]",
  },
  {
    tag: "Development",
    title: "Concert Lighting Rig",
    sub: "Live Event",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    tag: "Development",
    title: "LED Screen Activation",
    sub: "Brand Activation",
    span: "",
    aspect: "aspect-[4/5]",
  },
];

export function RecentWorkGrid() {
  return (
    <section className="border-b border-border/60 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="max-w-xl">
          <p className="text-lg leading-relaxed text-foreground/80 sm:text-xl">
            Your <em className="font-[family-name:var(--font-accent)] not-italic italic text-primary">event story</em>{" "}
            deserves a production that lands. We build the sound, stage,
            lighting and AV that come together into a{" "}
            <span className="relative inline-block font-[family-name:var(--font-accent)] italic">
              memorable experience
              <span className="absolute -bottom-1 left-0 h-px w-full bg-primary" />
            </span>
            . With reliable equipment we help events reach{" "}
            <em className="font-[family-name:var(--font-accent)] not-italic italic text-primary">
              extreme production value
            </em>
            .
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-2">
          {projects.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group relative overflow-hidden rounded-2xl border border-border/70 bg-card ${p.aspect} ${p.span}`}
            >
              <div className="flex size-full items-center justify-center bg-[linear-gradient(155deg,#1a1c1d,#0b0c0d)] text-xs text-muted-foreground/40">
                Image placeholder
              </div>

              <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white backdrop-blur-sm">
                {p.tag}
              </span>

              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-black/85 to-transparent p-5">
                <div>
                  <span className="text-xs font-medium uppercase tracking-wide text-primary">
                    {p.sub}
                  </span>
                  <h4 className="mt-1 text-base font-semibold text-white">
                    {p.title}
                  </h4>
                </div>
                <ArrowUpRight className="size-5 text-white/70 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </div>

        <Link
          href="/portfolio"
          className="mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground underline underline-offset-4"
        >
          See full portfolio
        </Link>
      </div>
    </section>
  );
}
