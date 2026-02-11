import { Hero } from "@/components/hero"
import { TechMarquee } from "@/components/tech-marquee"
import { StatsSection } from "@/components/stats-section"
import { PricingSection } from "@/components/pricing-section"
import { FeaturesSection } from "@/components/features-section"
import { ProcessSection } from "@/components/process-section"
import { FaqSection } from "@/components/faq-section"
import { CtaSection } from "@/components/cta-section"
import { StickyNav } from "@/components/sticky-nav"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <main className="relative min-h-screen">
      <StickyNav />
      <Hero />
      <TechMarquee />
      <StatsSection />

      <div id="pricing">
        <PricingSection />
      </div>

      <div id="features">
        <FeaturesSection />
      </div>

      <div id="process">
        <ProcessSection />
      </div>

      <FaqSection />
      <CtaSection />

      <div id="contact">
        <SiteFooter />
      </div>
    </main>
  )
}
