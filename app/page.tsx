import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { PricingSection } from "@/components/pricing-section"
import { ProcessSection } from "@/components/process-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { TrustCenter } from "@/components/trust-center"
import { BlogPreview } from "@/components/blog-preview"
import { FooterCTA } from "@/components/footer-cta"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navigation />
      <HeroSection />
      <SocialProof />
      <PricingSection />
      <ProcessSection />
      <PortfolioSection />
      <TrustCenter />
      <BlogPreview />
      <FooterCTA />
    </main>
  )
}
