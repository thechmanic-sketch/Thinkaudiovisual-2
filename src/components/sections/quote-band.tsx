"use client";

import Link from "next/link";
import { motion } from "motion/react";

export function QuoteBand() {
  return (
    <section className="border-b border-border/60 bg-card">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-24 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-sm font-medium uppercase tracking-widest text-primary">
            Why Clients Return
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            Reliable equipment. Experienced crew. Every time.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Under the management of owner-director T. Masango, we bring over a
            decade of hands-on experience to every event — recommending the
            right equipment for your goals and building a relationship that
            lasts beyond one booking.
          </p>
          <Link
            href="/about"
            className="mt-8 inline-block text-sm font-medium text-foreground underline underline-offset-4"
          >
            More About Us →
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl border border-border/70 p-10"
        >
          <div className="text-5xl leading-none text-primary">&ldquo;</div>
          <p className="mt-4 text-lg text-foreground/90">
            Our vision is to become the most renowned professional audio
            visual company in South Africa.
          </p>
          <span className="mt-6 block text-sm text-muted-foreground">
            T. Masango — Owner &amp; Director
          </span>
        </motion.div>
      </div>
    </section>
  );
}
