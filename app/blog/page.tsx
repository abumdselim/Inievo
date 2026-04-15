import { Navigation } from "@/components/navigation"
import { BlogHero } from "@/components/blog/blog-hero"
import { CategoryFilter } from "@/components/blog/category-filter"
import { FeaturedPost } from "@/components/blog/featured-post"
import { PostsGrid } from "@/components/blog/posts-grid"
import { FooterCTA } from "@/components/footer-cta"

export const metadata = {
  title: "Blog & Insights | Inievo",
  description: "Practical strategies, industry data, and honest advice for Bangladesh's digital leaders.",
}

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navigation />
      <BlogHero />
      <CategoryFilter />
      <FeaturedPost />
      <PostsGrid />
      <FooterCTA />
    </main>
  )
}
