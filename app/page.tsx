import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { ProcessSection } from "@/components/process-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TrustCenter } from "@/components/trust-center"
import { PricingSection } from "@/components/pricing-section"
import { FooterCTA } from "@/components/footer-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <ProcessSection />
      <PortfolioSection />
      <TrustCenter />
      <PricingSection />
      <FooterCTA />
    </main>
  )
}
