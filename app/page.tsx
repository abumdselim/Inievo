import { BlogPreview } from "@/components/blog/blog-preview"
import { FooterCTA } from "@/components/footer-cta"
import { HeroSection } from "@/components/hero-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { PricingSection } from "@/components/pricing-section"
import { ProblemSection } from "@/components/problem-section"
import { ProcessSection } from "@/components/process-section"
import { TechStackSection } from "@/components/tech-stack-section"
import { TrustCenter } from "@/components/trust-center"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">
      <HeroSection />
      <TechStackSection />
      <ProblemSection />
      <ProcessSection />
      <PortfolioSection />
      <TrustCenter />
      <PricingSection />
      <BlogPreview />
      <FooterCTA />
    </main>
  )
}
