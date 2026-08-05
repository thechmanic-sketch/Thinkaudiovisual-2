"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 200, suffix: "+", label: "Events Delivered" },
  { value: 40, suffix: "+", label: "Corporate Clients" },
  { value: 50, suffix: "k+", label: "Guests Entertained" },
];

export function StatBand() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray<HTMLElement>(".stat-value");
      counters.forEach((el) => {
        const target = Number(el.dataset.value);
        const obj = { val: 0 };
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 85%",
          },
          onUpdate: () => {
            el.textContent = Math.floor(obj.val).toString();
          },
        });
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative border-y border-foreground/10 bg-surface/40 py-20"
    >
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-10 px-6 lg:grid-cols-4 lg:px-10">
        {stats.map((s) => (
          <div key={s.label} className="text-center lg:text-left">
            <div className="flex items-baseline justify-center gap-1 lg:justify-start">
              <span
                className="stat-value text-4xl font-semibold tracking-tight text-accent sm:text-5xl"
                data-value={s.value}
              >
                0
              </span>
              <span className="text-4xl font-semibold text-accent sm:text-5xl">
                {s.suffix}
              </span>
            </div>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-muted">
              {s.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
