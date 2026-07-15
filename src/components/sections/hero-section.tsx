"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import { Pause, Play } from "lucide-react";
import { assetPath } from "@/lib/asset-path";

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  function togglePlay() {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      video.play();
      setPlaying(true);
    } else {
      video.pause();
      setPlaying(false);
    }
  }

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-surface-deep">
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="size-full object-cover"
          src={assetPath("/videos/hero-background.mp4")}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
        />
      </div>

      {/* Black overlay for legibility */}
      <div className="pointer-events-none absolute inset-0 bg-black/45" />

      {/* Bottom gradient for text legibility */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

      {/* Headline, bottom-left */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.625, 0.05, 0, 1] }}
        className="absolute inset-x-0 bottom-0 flex flex-col gap-4 p-6 sm:flex-row sm:items-end sm:justify-between sm:p-12 lg:p-16"
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
          onClick={togglePlay}
          aria-label={playing ? "Pause background video" : "Play background video"}
          className="flex size-14 shrink-0 items-center justify-center rounded-full border border-white/30 text-white transition-colors hover:bg-white hover:text-black"
        >
          {playing ? (
            <Pause className="size-5" fill="currentColor" />
          ) : (
            <Play className="ml-0.5 size-5" fill="currentColor" />
          )}
        </button>
      </motion.div>

      {/* Metadata, top area */}
      <div className="absolute right-6 top-6 text-right text-xs text-white/50 sm:right-12 sm:top-12 lg:right-16 lg:top-16">
        <div>Durban</div>
        <div>South Africa</div>
      </div>
    </section>
  );
}
