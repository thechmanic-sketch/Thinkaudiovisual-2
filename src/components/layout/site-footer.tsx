import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="text-lg font-semibold tracking-tight">
              <span className="text-primary">Think</span> Audio Visual
            </span>
            <p className="mt-4 text-sm text-muted-foreground">{siteConfig.tagline}</p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/80 hover:text-foreground">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Contact
            </h4>
            <ul className="mt-4 space-y-2 text-sm">
              <li>
                <a href={siteConfig.phoneHref} className="text-foreground/80 hover:text-foreground">
                  {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.cellHref} className="text-foreground/80 hover:text-foreground">
                  {siteConfig.cell}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-foreground/80 hover:text-foreground"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
              Address
            </h4>
            <p className="mt-4 text-sm text-foreground/80">{siteConfig.address}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-border/60 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Think Audio Visual. All rights reserved.</span>
          <span>Privacy respected under POPIA — booking details are only used to respond to your enquiry.</span>
        </div>
      </div>
    </footer>
  );
}
