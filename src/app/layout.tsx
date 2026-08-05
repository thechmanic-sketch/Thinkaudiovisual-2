import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { WhatsappFloat } from "@/components/layout/whatsapp-float";
import { SmoothScrollProvider } from "@/components/layout/smooth-scroll-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Think Audio Visual | Stage, Sound & Event Production Durban, South Africa",
    template: "%s | Think Audio Visual",
  },
  description:
    "Professional stage hire, sound equipment, lighting design and AV production in Durban and across South Africa. 10+ years running corporate, live and festival events.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="dark">
      <body className="bg-background text-foreground antialiased">
        <SmoothScrollProvider>
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <WhatsappFloat />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
