"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "motion/react";
import { CalendarCheck, Clock, Star, Users, type LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assetPath } from "@/lib/asset-path";

const ICONS: Record<string, LucideIcon> = {
  calendar: CalendarCheck,
  users: Users,
  clock: Clock,
  star: Star,
};

export type FloatingStat = {
  icon: keyof typeof ICONS;
  value: string;
  label: string;
};

export function FloatingStatHero({
  eyebrow,
  title,
  body,
  ctaLabel,
  ctaHref,
  image,
  imageAlt,
  stats,
}: {
  eyebrow: string;
  title: React.ReactNode;
  body: string;
  ctaLabel: string;
  ctaHref: string;
  image: string;
  imageAlt: string;
  stats: FloatingStat[];
}) {
  return (
    <section className="border-b border-border/60">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:items-center">
        <div>
          <div className="text-sm font-medium uppercase tracking-widest text-primary">
            {eyebrow}
          </div>
          <h2 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {title}
          </h2>
          <p className="mt-5 max-w-md text-muted-foreground">{body}</p>
          <Button asChild size="lg" className="mt-8">
            <Link href={ctaHref}>{ctaLabel}</Link>
          </Button>
        </div>

        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/70 sm:aspect-[5/4]">
          <Image
            src={assetPath(image)}
            alt={imageAlt}
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-cover"
          />

          <div className="absolute inset-0">
            {stats.map((stat, i) => {
              const Icon = ICONS[stat.icon];
              const positions = [
                "left-4 top-4 sm:left-6 sm:top-6",
                "right-4 top-1/2 -translate-y-1/2 sm:right-6",
                "left-4 bottom-4 sm:left-6 sm:bottom-6",
              ];
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`absolute flex items-center gap-3 rounded-xl border border-border/60 bg-background/90 px-4 py-3 shadow-lg backdrop-blur-sm ${positions[i % positions.length]}`}
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="size-4" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-foreground">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
