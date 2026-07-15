import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 bg-[#081209]">
      <div className="mx-auto max-w-7xl px-6 py-10 sm:px-10">
        <div className="grid grid-cols-2 gap-8 text-center sm:flex sm:items-start sm:justify-between sm:text-left">
          <div className="col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Contact
            </h4>
            <div className="mt-3 space-y-1 text-sm">
              <a href={`mailto:${siteConfig.email}`} className="block break-all text-foreground/90 hover:text-primary">
                {siteConfig.email}
              </a>
              <a href={siteConfig.cellHref} className="block text-foreground/90 hover:text-primary">
                {siteConfig.cell}
              </a>
              <p className="text-foreground/60">{siteConfig.address}</p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Pages
            </h4>
            <ul className="mt-3 space-y-1 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/90 hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
              Social
            </h4>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a
                  href={`https://wa.me/${siteConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/90 hover:text-primary"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a href={siteConfig.phoneHref} className="text-foreground/90 hover:text-primary">
                  Call
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="overflow-hidden border-t border-border/60">
        <Link
          href="/"
          className="block px-4 py-8 text-center leading-[0.9] tracking-tight text-foreground transition-colors hover:text-primary sm:py-14"
        >
          <span className="block text-[13vw] font-semibold sm:text-[9vw]">
            Think Audio
          </span>
          <span className="block text-[13vw] font-semibold sm:text-[9vw]">
            Visual
          </span>
        </Link>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-2 border-t border-border/60 px-6 py-6 text-center text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-10 sm:text-left">
        <span>© {new Date().getFullYear()} Think Audio Visual. All rights reserved.</span>
        <span>Privacy respected under POPIA — booking details are only used to respond to your enquiry.</span>
      </div>
    </footer>
  );
}
