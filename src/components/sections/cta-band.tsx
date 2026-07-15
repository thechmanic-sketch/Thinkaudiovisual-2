"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { Button } from "@/components/ui/button";
import { whatsappHref } from "@/lib/site-config";
import { assetPath } from "@/lib/asset-path";

export function CtaBand() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden border-b border-border/60 bg-surface-tint-strong"
    >
      <motion.div style={{ y }} className="absolute inset-0 -top-[15%] -bottom-[15%]">
        <Image
          src={assetPath("/images/pa-system-trussing.webp")}
          alt=""
          fill
          sizes="100vw"
          className="object-cover opacity-25"
          priority={false}
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f2118]/60 via-[#0f2118]/85 to-[#0f2118]" />

      <div className="relative mx-auto max-w-3xl px-6 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-sm font-medium uppercase tracking-widest text-primary">
            Let&apos;s Talk
          </div>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Let&apos;s build your event next.
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us your date, venue and vision — we&apos;ll put together the
            sound, stage, lighting and AV to match.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contact#booking">Start a Booking</Link>
            </Button>
            <Button asChild size="lg" variant="whatsapp">
              <a
                href={whatsappHref(
                  "Hi Think Audio Visual, I'd like to enquire about an event."
                )}
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
