"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { assetPath } from "@/lib/asset-path";

const projects = [
  {
    tag: "Staging",
    title: "Awards Evening Staging",
    accent: "Awards",
    sub: "Corporate Gala",
    image: "/images/gala-stage.jpg",
  },
  {
    tag: "Lighting",
    title: "Concert Lighting Rig",
    accent: "Concert",
    sub: "Live Event",
    image: "/images/concert-lighting-rig.jpg",
  },
  {
    tag: "Brand Activation",
    title: "Nedbank Screen Activation",
    accent: "Nedbank",
    sub: "LED Screens",
    image: "/images/nedbank-activation.jpg",
  },
];

function ProjectCard({
  project,
  className,
  delay,
}: {
  project: (typeof projects)[number];
  className?: string;
  delay: number;
}) {
  const [firstWord, ...rest] = project.title.split(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay }}
      className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/70 bg-card ${className ?? ""}`}
    >
      <span className="absolute left-4 top-4 z-10 rounded-full bg-black/60 px-3 py-1 text-[10px] font-medium uppercase tracking-wide text-white backdrop-blur-sm">
        {project.tag}
      </span>

      <Image
        src={assetPath(project.image)}
        alt={project.title}
        fill
        sizes="(min-width: 640px) 50vw, 100vw"
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />

      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-5">
        <h4 className="text-base font-semibold text-white">
          <span className="font-[family-name:var(--font-accent)] italic">
            {firstWord}
          </span>{" "}
          {rest.join(" ")}
        </h4>
        <span className="text-xs text-white/60">{project.sub}</span>
      </div>
    </motion.div>
  );
}

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

        {/* Staggered layout: left column stacks cards 1 & 3, right column card 2 offset down */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          <div className="flex flex-col gap-6">
            <ProjectCard project={projects[0]} delay={0} />
            <ProjectCard project={projects[2]} delay={0.2} />
          </div>
          <div className="sm:mt-20">
            <ProjectCard project={projects[1]} delay={0.1} className="sm:aspect-[4/5]" />
          </div>
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
