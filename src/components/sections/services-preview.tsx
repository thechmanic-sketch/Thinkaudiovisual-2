"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const services = [
  {
    num: "01 — Sound",
    title: "Professional Sound Systems",
    body: "PA systems, live performance audio, backline, DJ'ying and conference microphones tuned to the room.",
  },
  {
    num: "02 — Lighting",
    title: "Lighting Design",
    body: "Stage lighting, uplighting and décor lighting, designed to set the tone of your event from entrance to exit.",
  },
  {
    num: "03 — Stage",
    title: "Stage & Rigging",
    body: "Performance stages, trussing and podium builds engineered for safety and built to spec.",
  },
];

export function ServicesPreview() {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="max-w-2xl">
          <div className="text-sm font-medium uppercase tracking-widest text-primary">
            What We Do
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Four disciplines. One production crew.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From the screen to the speaker stack to the light rig above the
            stage, we handle the full technical build so your event runs
            without a hitch.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-2xl border border-border/70 bg-card p-8"
            >
              <span className="text-xs font-medium uppercase tracking-widest text-primary">
                {s.num}
              </span>
              <h3 className="mt-4 text-xl font-semibold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>

        <Link
          href="/services"
          className="group mt-10 inline-flex items-center gap-2 text-sm font-medium text-foreground"
        >
          View All Services
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  );
}
