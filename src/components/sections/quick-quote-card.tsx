"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { assetPath } from "@/lib/asset-path";
import { whatsappHref } from "@/lib/site-config";

export function QuickQuoteCard({
  image,
  imageAlt,
}: {
  image: string;
  imageAlt: string;
}) {
  const [detail, setDetail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const text = detail.trim()
      ? `Hi Think Audio Visual, I'd like a quote: ${detail.trim()}`
      : "Hi Think Audio Visual, I'd like a quote for my event.";
    window.open(whatsappHref(text), "_blank");
  }

  return (
    <section className="border-b border-border/60 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10">
        <div className="relative overflow-hidden rounded-3xl border border-border/70">
          <Image
            src={assetPath(image)}
            alt={imageAlt}
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/50 to-black/10" />

          <div className="relative flex min-h-[280px] flex-col justify-center gap-6 p-8 sm:p-12">
            <h2 className="max-w-md text-2xl font-semibold leading-snug text-white sm:text-3xl">
              Want a quick quote?{" "}
              <span className="font-[family-name:var(--font-accent)] italic text-primary">
                Tell us
              </span>{" "}
              what you&apos;re planning.
            </h2>

            <form
              onSubmit={handleSubmit}
              className="flex max-w-md flex-col gap-3 sm:flex-row"
            >
              <input
                value={detail}
                onChange={(e) => setDetail(e.target.value)}
                placeholder="Event type, date, guest count"
                className="w-full rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/50 outline-none backdrop-blur-sm focus:border-primary"
              />
              <button
                type="submit"
                aria-label="Send to WhatsApp"
                className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
              >
                <ArrowUpRight className="size-5" />
              </button>
            </form>
            <p className="text-xs text-white/60">
              Opens WhatsApp with your message ready to send.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
