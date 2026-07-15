import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { HeroSection } from "@/components/sections/hero-section";
import { StatsStrip } from "@/components/sections/stats-strip";
import { ServicesPreview } from "@/components/sections/services-preview";
import { QuoteBand } from "@/components/sections/quote-band";
import { PortfolioPreview } from "@/components/sections/portfolio-preview";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <StatsStrip />
        <ServicesPreview />
        <QuoteBand />
        <PortfolioPreview />
        <CtaBand />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  );
}
