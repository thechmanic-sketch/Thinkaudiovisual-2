"use client";

import { useEffect, useRef, type ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { assetPath } from "@/lib/asset-path";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  image = "/images/pa-system-trussing.webp",
}: {
  eyebrow: string;
  title: string;
  subtitle?: ReactNode;
  image?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".page-hero-line",
        { yPercent: 100 },
        {
          yPercent: 0,
          duration: 1,
          stagger: 0.1,
          delay: 0.2,
          ease: "power3.out",
        }
      );
      gsap.fromTo(
        ".page-hero-sub",
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.5, ease: "power3.out" }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      className="relative flex h-[64svh] min-h-[420px] w-full items-end overflow-hidden bg-background"
    >
      <Image
        src={assetPath(image)}
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 lg:px-10 lg:pb-20">
        <span className="page-hero-sub mb-5 block text-xs font-semibold uppercase tracking-[0.35em] text-accent opacity-0">
          {eyebrow}
        </span>
        <h1 className="mask-reveal">
          <span className="page-hero-line block text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            {title}
          </span>
        </h1>
        {subtitle && (
          <p className="page-hero-sub mt-6 max-w-xl text-balance leading-relaxed text-foreground/70 opacity-0">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
