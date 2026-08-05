import Image from "next/image";
import { assetPath } from "@/lib/asset-path";
import { Reveal } from "./reveal";

export function WhyClientsReturn() {
  return (
    <section className="relative overflow-hidden bg-background py-28 lg:py-40">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-10">
        <Reveal className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl">
          <Image
            src={assetPath("/images/foh-concert-silhouette.jpg")}
            alt="Sound engineer at front-of-house during a live concert"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="text-xs font-semibold uppercase tracking-[0.35em] text-accent">
            Why Clients Return
          </span>
          <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            If something goes wrong, you won&rsquo;t know it.
          </h2>
          <p className="mt-6 max-w-lg text-balance leading-relaxed text-muted">
            Under the management of owner-director T. Masango, we bring over
            a decade of hands-on experience to every event — recommending the
            right equipment for your goals and building a relationship that
            lasts beyond one booking.
          </p>

          <blockquote className="mt-10 border-l-2 border-accent pl-6">
            <p className="text-balance text-xl font-medium italic leading-relaxed text-foreground/90">
              &ldquo;Our vision is to become the most renowned professional
              audio visual company in South Africa.&rdquo;
            </p>
            <cite className="mt-4 block text-sm not-italic text-muted">
              — T. Masango, Owner &amp; Director
            </cite>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
