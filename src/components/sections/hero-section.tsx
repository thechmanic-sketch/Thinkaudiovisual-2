"use client";

import { motion } from "motion/react";
import { Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="bg-[radial-gradient(circle_at_20%_10%,rgba(34,197,94,0.06),transparent_60%)] px-3 pb-3 pt-3 sm:px-5 sm:pb-5 sm:pt-5">
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[28px] border border-border/60 bg-[#0e0f10] sm:aspect-[16/10] lg:aspect-[16/8]">
        {/* Hero video placeholder — swap the div below for a <video> element with the real hero footage */}
        <div className="absolute inset-0">
          <div className="size-full bg-[radial-gradient(circle_at_65%_30%,rgba(34,197,94,0.16),transparent_55%),linear-gradient(180deg,#141515,#0a0b0b)]" />
          <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-widest text-white/20">
            Hero video placeholder
          </div>
        </div>

        {/* Bottom gradient for text legibility */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

        {/* Headline, bottom-left */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.625, 0.05, 0, 1] }}
          className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-10"
        >
          <h1 className="max-w-2xl text-4xl font-medium leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
            We build{" "}
            <span className="relative inline-block">
              <span className="font-[family-name:var(--font-accent)] italic text-primary">
                extraordinary
              </span>
              <svg
                viewBox="0 0 200 20"
                className="absolute -bottom-2 left-0 w-full text-primary"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.path
                  d="M2 12 C 50 4, 150 4, 198 10"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                />
              </svg>
            </span>{" "}
            live experiences.
          </h1>

          <button
            type="button"
            aria-label="Play showreel"
            className="flex size-14 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-black"
          >
            <Play className="ml-0.5 size-5" fill="currentColor" />
          </button>
        </motion.div>

        {/* Metadata, top area */}
        <div className="absolute right-6 top-6 text-right text-xs text-white/50 sm:right-10 sm:top-10">
          <div>Durban</div>
          <div>South Africa</div>
        </div>
      </div>
    </section>
  );
}
