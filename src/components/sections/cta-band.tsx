import Link from "next/link";
import { whatsappHref } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import { Reveal } from "./reveal";

export function CtaBand({
  eyebrow = "Let's Talk",
  title = "Tell us what's at stake. We'll make sure it runs perfectly.",
  copy = "Tell us your date, venue and vision — we'll put together the sound, stage, lighting and AV to match.",
  primaryLabel = "Start a Booking",
  primaryHref = "/contact",
}: {
  eyebrow?: string;
  title?: string;
  copy?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-background py-28 lg:py-40">
      <div
        aria-hidden
        className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-accent/10 blur-[140px]"
      />
      <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            {eyebrow}
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {title}
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance leading-relaxed text-muted">
            {copy}
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href={primaryHref}>{primaryLabel}</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a
                href={whatsappHref("Hi, I'd like to enquire about an event.")}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Us
              </a>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
