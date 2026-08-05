"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { gsap } from "gsap";
import { ChevronDown } from "lucide-react";
import { assetPath } from "@/lib/asset-path";
import { whatsappHref } from "@/lib/site-config";
import { Button } from "@/components/ui/button";

const ParticleField = dynamic(
  () => import("@/components/three/particle-field").then((m) => m.ParticleField),
  { ssr: false }
);

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const layerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });
      tl.fromTo(
        ".hero-eyebrow",
        { yPercent: 100, opacity: 0 },
        { yPercent: 0, opacity: 1, duration: 0.8 },
        0.2
      )
        .fromTo(
          ".hero-line",
          { yPercent: 100 },
          { yPercent: 0, duration: 1, stagger: 0.12 },
          0.35
        )
        .fromTo(
          ".hero-sub",
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        )
        .fromTo(
          ".hero-cta",
          { y: 16, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 },
          "-=0.5"
        )
        .fromTo(
          ".hero-scroll-cue",
          { opacity: 0 },
          { opacity: 1, duration: 0.6 },
          "-=0.3"
        );

      gsap.to(videoRef.current, {
        scale: 1.12,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(layerRef.current, {
        x: x * 14,
        y: y * 10,
        duration: 1.2,
        ease: "power3.out",
      });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] w-full items-end overflow-hidden bg-background"
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full scale-100 object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={assetPath("/images/ballroom-conference.jpg")}
      >
        <source src={assetPath("/videos/hero-background.mp4")} type="video/mp4" />
      </video>

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/20" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-background/40" />

      <div className="absolute inset-0 z-[1] opacity-70">
        <ParticleField />
      </div>

      <div ref={layerRef} className="relative z-10 w-full px-6 pb-24 lg:px-10 lg:pb-32">
        <div className="mx-auto max-w-7xl">
          <span className="hero-eyebrow mask-reveal mb-6 block text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Durban, South Africa
          </span>

          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            <span className="mask-reveal">
              <span className="hero-line block">We Build Extraordinary</span>
            </span>
            <span className="mask-reveal">
              <span className="hero-line block text-accent">Live Experiences.</span>
            </span>
          </h1>

          <p className="hero-sub mt-8 max-w-xl text-balance text-base leading-relaxed text-foreground/70 sm:text-lg">
            Precision-run stage, sound, lighting and AV production — built to
            hold up under pressure, from corporate galas and conferences to
            concerts and broadcast activations across South Africa.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <div className="hero-cta">
              <Button asChild size="lg">
                <Link href="/contact">Get a Quote</Link>
              </Button>
            </div>
            <div className="hero-cta">
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
            <div className="hero-cta">
              <Button asChild variant="ghost" size="lg">
                <a href={whatsappHref("Hi, I'd like to enquire about an event.")} target="_blank" rel="noreferrer">
                  WhatsApp Us
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue absolute bottom-8 left-1/2 z-10 -translate-x-1/2 opacity-0">
        <div className="flex flex-col items-center gap-2 text-muted">
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
}
