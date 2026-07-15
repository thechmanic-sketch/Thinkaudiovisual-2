"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/asset-path";

const projects = [
  {
    tag: "Staging",
    title: "Awards Evening Staging",
    sub: "Corporate Gala",
    image: "/images/gala-stage.jpg",
    span: "lg:col-span-2",
    aspect: "aspect-[16/10]",
  },
  {
    tag: "Lighting",
    title: "Concert Lighting Rig",
    sub: "Live Event",
    image: "/images/concert-lighting-rig.jpg",
    span: "",
    aspect: "aspect-[4/5]",
  },
  {
    tag: "Brand Activation",
    title: "Nedbank Screen Activation",
    sub: "LED Screens",
    image: "/images/nedbank-activation.jpg",
    span: "",
    aspect: "aspect-[4/5]",
  },
];

export function RecentWorkGrid() {
  return (
    <section className="border-b border-border/60 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="max-w-3xl">
          <p className="text-2xl leading-snug text-foreground sm:text-3xl lg:text-4xl">
            Your event deserves a production that lands. We build the sound,
            stage, lighting and AV that come together into a{" "}
            <span className="relative inline-block font-[family-name:var(--font-accent)] italic">
              seamless experience
              <span className="absolute -bottom-1 left-0 h-px w-full bg-primary" />
            </span>
            . With reliable equipment we help events reach{" "}
            <span className="font-[family-name:var(--font-accent)] italic text-primary">
              extreme production value
            </span>
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
              <Image
                src={assetPath(p.image)}
                alt={p.title}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

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
