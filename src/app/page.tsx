import { HeroSection } from "@/components/sections/hero-section";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { StatBand } from "@/components/sections/stat-band";
import { WhyClientsReturn } from "@/components/sections/why-clients-return";
import { RecentWork } from "@/components/sections/recent-work";
import { CtaBand } from "@/components/sections/cta-band";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StatBand />
      <WhatWeDo />
      <WhyClientsReturn />
      <RecentWork />
      <CtaBand />
    </>
  );
}
