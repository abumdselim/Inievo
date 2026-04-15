import { Navigation } from "@/components/navigation"
import { ShopHero } from "@/components/shop/shop-hero"
import { WhyBuy } from "@/components/shop/why-buy"
import { ProductsGrid } from "@/components/shop/products-grid"
import { ShopFAQ } from "@/components/shop/shop-faq"
import { FooterCTA } from "@/components/footer-cta"

export const metadata = {
  title: "Digital Shop | Inievo",
  description: "Premium Next.js templates, UI kits, and starter blueprints. Production-ready code built by professionals.",
}

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navigation />
      <ShopHero />
      <WhyBuy />
      <ProductsGrid />
      <ShopFAQ />
      <FooterCTA />
    </main>
  )
}
