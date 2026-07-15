"use client";

import { motion } from "motion/react";

const stats = [
  { value: "500+", label: "Events Delivered" },
  { value: "150+", label: "Corporate Clients" },
  { value: "12", label: "Years Experience" },
  { value: "1M+", label: "Guests Entertained" },
];

export function StatsStrip() {
  return (
    <section className="border-b border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 sm:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-3xl font-semibold text-primary sm:text-4xl">
              {stat.value}
            </div>
            <div className="mt-2 text-xs uppercase tracking-wide text-muted-foreground sm:text-sm">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
