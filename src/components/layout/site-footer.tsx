import Link from "next/link";
import Image from "next/image";
import { AtSign, Mail, MapPin, Phone } from "lucide-react";
import { navLinks, siteConfig, whatsappHref } from "@/lib/site-config";
import { assetPath } from "@/lib/asset-path";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-foreground/10 bg-surface/40">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-10">
        <div className="grid gap-16 md:grid-cols-4">
          <div className="md:col-span-2">
            <Image
              src={assetPath("/images/logo-mark.png")}
              alt={siteConfig.name}
              width={160}
              height={44}
              className="h-9 w-auto object-contain"
            />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted">
              Stage, sound, lighting and AV production for events across
              South Africa.
            </p>
            <div className="mt-8 flex gap-4">
              <a
                href={`mailto:${siteConfig.email}`}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-foreground/15 text-muted transition-colors hover:border-accent hover:text-accent"
              >
                <AtSign size={16} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Navigate
            </h3>
            <ul className="mt-6 space-y-3">
              {navLinks
                .filter((l) => l.href !== "/contact")
                .map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-foreground/70 transition-colors hover:text-accent"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
              Contact
            </h3>
            <ul className="mt-6 space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
                  className="flex items-start gap-3 text-sm text-foreground/70 transition-colors hover:text-accent"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a
                  href={whatsappHref()}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-start gap-3 text-sm text-foreground/70 transition-colors hover:text-accent"
                >
                  <Phone size={15} className="mt-0.5 shrink-0" />
                  {siteConfig.cell}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-3 text-sm text-foreground/70 transition-colors hover:text-accent"
                >
                  <Mail size={15} className="mt-0.5 shrink-0" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-foreground/70">
                <MapPin size={15} className="mt-0.5 shrink-0" />
                {siteConfig.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-foreground/10 pt-8 text-xs text-muted md:flex-row">
          <p>&copy; 2026 Think Audio Visual. All rights reserved.</p>
          <p>Privacy respected under POPIA.</p>
        </div>
      </div>
    </footer>
  );
}
