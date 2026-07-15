import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { HeroSection } from "@/components/sections/hero-section";
import { RecentWorkGrid } from "@/components/sections/recent-work-grid";
import { PhotoQuoteStats } from "@/components/sections/photo-quote-stats";
import { ServicesPreview } from "@/components/sections/services-preview";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <RecentWorkGrid />
        <PhotoQuoteStats />
        <ServicesPreview />
        <CtaBand />
      </main>
      <SiteFooter />
      <WhatsappFloat />
    </>
  );
}
