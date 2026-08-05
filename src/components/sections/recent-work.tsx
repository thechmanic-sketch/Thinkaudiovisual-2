"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/asset-path";
import { portfolioItems } from "@/lib/portfolio-data";
import { Reveal } from "./reveal";

export function RecentWork() {
  const featured = portfolioItems.slice(0, 4);

  return (
    <section className="relative bg-background py-28 lg:py-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
              Recent Work
            </span>
            <h2 className="mt-5 max-w-xl text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              A few rooms we&rsquo;ve run.
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center gap-2 text-sm font-medium text-foreground/80 transition-colors hover:text-accent"
          >
            View Full Portfolio
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </Reveal>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((item, i) => (
            <Reveal key={item.slug} delay={i * 0.08}>
              <Link
                href="/portfolio"
                className="group relative block aspect-[3/4] overflow-hidden rounded-2xl"
              >
                <Image
                  src={assetPath(item.image)}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  sizes="(min-width: 1024px) 25vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-accent">
                    {item.category}
                  </span>
                  <h3 className="mt-1 text-base font-semibold leading-snug">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
