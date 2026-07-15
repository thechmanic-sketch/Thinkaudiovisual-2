"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden border-b border-border/60">
      {/* Hero video/media placeholder — swap for the real hero video */}
      <div className="absolute inset-0 -z-10">
        <div className="size-full bg-[radial-gradient(circle_at_30%_20%,rgba(34,197,94,0.18),transparent_55%),linear-gradient(180deg,#0b0c0d,60%,#0b0c0d)]" />
        <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-muted-foreground/40">
          Hero video placeholder
        </div>
      </div>

      <div className="mx-auto grid w-full max-w-7xl gap-12 px-6 py-32 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.625, 0.05, 0, 1] }}
          className="flex items-center justify-center lg:justify-start"
        >
          <div className="flex size-40 items-center justify-center rounded-full border border-border/70 text-sm text-muted-foreground/60 lg:size-56">
            Logo
          </div>
        </motion.div>

        <div>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.625, 0.05, 0, 1] }}
            className="text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            We Build <span className="text-primary">Extraordinary</span>
            <br />
            Live Experiences.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.625, 0.05, 0, 1] }}
            className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
          >
            Professional stage, sound, lighting and AV production — trusted for
            corporate galas, concerts, broadcast activations and everything
            between, across South Africa and Zimbabwe.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.625, 0.05, 0, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Button asChild size="lg">
              <Link href="/contact#booking">Get a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
