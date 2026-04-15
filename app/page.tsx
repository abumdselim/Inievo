import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { PricingSection } from "@/components/pricing-section"
import { ProcessSection } from "@/components/process-section"
import { PortfolioSection } from "@/components/portfolio-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navigation />
      <HeroSection />
      <SocialProof />
      <PricingSection />
      <ProcessSection />
      <PortfolioSection />
    </main>
  )
}
