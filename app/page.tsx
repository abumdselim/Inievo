import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navigation />
      <HeroSection />
      <SocialProof />
    </main>
  )
}
