import { Navigation } from "@/components/navigation"
import { FooterCTA } from "@/components/footer-cta"
import { notFound } from "next/navigation"
import Link from "next/link"

export const metadata = {
  title: "Blog | Inievo",
  description: "Insights on digital strategy, web design, and building scalable systems for ambitious brands.",
}

const posts = [
  {
    slug: "website-losing-customers-checklist",
    title: "5 Signs Your Website Is Losing You Customers — A Checklist",
    tag: "Marketing Strategy",
    tagColor: "text-teal-400",
    author: "Abumdselim",
    date: "March 15, 2026",
    readTime: "5 min read",
    content: [
      "Your website is often the first impression customers have of your business, yet many entrepreneurs overlook critical performance indicators that signal trouble. A slow-loading site, confusing navigation, or unclear value proposition can instantly drive visitors away—sometimes before they even understand what you offer. The challenge is that most business owners don't realize their website has become a liability rather than an asset. Without proper analytics and user feedback, these problems remain invisible until they've already cost you significant revenue.",
      "One of the most common culprits is a slow website. While you might think your site feels fast enough, data shows that 53% of mobile users abandon sites that take longer than 3 seconds to load. In Bangladesh, where internet speeds vary widely and mobile-first browsing dominates, this is even more critical. If your site isn't optimized for speed, you're losing potential customers before they even arrive—and search engines are penalizing you for it as well.",
      "Another red flag is having an unclear or buried call-to-action. Visitors should immediately understand what you want them to do, whether that's making a purchase, scheduling a consultation, or signing up for a newsletter. If your CTAs are subtle, inconsistently placed, or buried deep in the page, you're fighting against human psychology. The best websites make the next step obvious and friction-free.",
      "Mobile responsiveness isn't optional anymore—it's mandatory. If your website doesn't render perfectly on smartphones and tablets, you're losing over 60% of potential customers. Bangladesh's mobile-first market means your site must work flawlessly on all screen sizes, with touch-friendly buttons and readable text without zooming. Many businesses built their sites years ago and haven't adapted for mobile, which is a costly mistake.",
      "Finally, lack of trust signals will convert browsers into bouncers. Your website should display customer testimonials, social proof, security badges, and clear contact information. If visitors can't quickly verify that you're legitimate or understand your expertise, they'll move to a competitor who provides those assurances. Investing in trust-building elements can dramatically increase conversion rates and customer lifetime value.",
    ],
  },
  {
    slug: "cheap-freelancer-problem",
    title: "The BDT 20,000 Website Problem: Why Cheap Freelancers Cost You More",
    tag: "Business Insights",
    tagColor: "text-orange-400",
    author: "Abumdselim",
    date: "February 28, 2026",
    readTime: "6 min read",
    content: [
      "Bangladesh has a thriving freelance market, and it's easy to find someone who will build you a website for BDT 20,000 or less. The temptation is strong, especially for startups with limited budgets, but this short-term savings often leads to long-term costs that far exceed what you'd spend on a quality solution. A cheap website might look acceptable at first glance, but beneath the surface, it's likely riddled with problems that will haunt your business for years.",
      "When you hire an inexperienced freelancer or use cut-rate solutions, you're typically getting code that's not scalable, maintainable, or secure. These sites are often built on outdated frameworks or with poor coding practices that make future updates expensive and risky. Six months down the line, when you want to add new features or fix a bug, you might find that the original developer is unavailable or that the codebase is so messy that rebuilding is cheaper than fixing. That BDT 20,000 investment suddenly costs you BDT 200,000 or more.",
      "Security is another critical area where cheap websites fail you. Budget solutions rarely implement proper authentication, data encryption, or protection against common attacks. If your business collects customer information—which most do—a compromised website doesn't just hurt your brand reputation; it exposes your customers to fraud and identity theft. The legal and financial liability can be devastating. A proper security audit and implementation at the start costs far less than dealing with a breach later.",
      "A cheap website also reflects poorly on your brand perception. Your website is a 24/7 salesperson, and it's communicating something to every visitor. A hastily-built, poorly-designed site signals that you don't care about your business or your customers. Conversely, a well-crafted website shows professionalism, attention to detail, and commitment to quality—qualities that directly influence whether someone decides to do business with you. In Bangladesh's increasingly competitive market, first impressions matter more than ever.",
      "The real cost of a cheap website isn't in the initial development—it's in lost sales, wasted marketing spend on a platform that doesn't convert, technical debt that compounds over time, and the mental burden of knowing your digital presence isn't serving your business. Investing in a quality website is investing in your business's foundation. Yes, a professional website costs more upfront, but it generates revenue, scales with your business, and builds credibility that cheap alternatives simply cannot match.",
    ],
  },
  {
    slug: "facebook-to-scalable-store",
    title: "From Facebook Page to Scalable Store: A Local Brand's Journey",
    tag: "Case Study",
    tagColor: "text-blue-400",
    author: "Abumdselim",
    date: "February 10, 2026",
    readTime: "7 min read",
    content: [
      "Many successful local brands in Bangladesh started with nothing more than a Facebook page and determination. They posted product photos, responded to messages, and gradually built an audience. While this grassroots approach helped establish initial customers, it creates a fundamental problem: their business is entirely dependent on a platform they don't control. Facebook's algorithms change, ad costs rise, and there's no direct relationship with customers. At some point, any growing business faces a critical decision—either remain a Facebook-based seller or build something more sustainable.",
      "The breakthrough comes when a brand realizes that owning their digital infrastructure is non-negotiable. A professional e-commerce platform gives you control over customer data, enables direct marketing, reduces dependence on social media algorithms, and creates a professional storefront that builds brand credibility. For a local Bangladesh brand, this might mean moving from selling BDT 500,000 annually on Facebook to BDT 5 million annually on a proper store. The difference isn't just revenue—it's control, efficiency, and long-term scalability.",
      "But simply launching an e-commerce site isn't enough. The most successful local-to-scalable transformations combine multiple elements: a streamlined checkout process that respects Bangladesh's varying internet reliability, payment gateways that accept popular local methods, inventory management that prevents overselling, and integration with existing Facebook and Instagram channels (not replacement, but enhancement). The goal is to create a unified system where a customer can discover you on social media but purchase on your own platform.",
      "Another critical factor is logistics and trust. Bangladeshi consumers, especially those buying online from a local brand, need to know that their order will arrive safely and on time. Clear shipping information, order tracking, and responsive customer service transform casual browsers into loyal repeat customers. A scalable local brand doesn't just build a website—it builds a complete system that delivers on its promises consistently. This reliability becomes the brand's strongest competitive advantage.",
      "The journey from Facebook page to scalable store isn't quick, but it's transformative. Brand owners report greater profitability, reduced marketing costs, and the ability to expand regionally and internationally. With proper investment in digital infrastructure, a two-person operation in Dhaka or Chittagong can serve customers across Bangladesh and beyond, competing with international brands on quality and customer service. The Facebook page becomes a traffic driver rather than the entire business, and that's when real growth accelerates.",
    ],
  },
]

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = posts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navigation />

      {/* Back button */}
      <div className="max-w-3xl mx-auto px-6 pt-32 pb-4">
        <Link
          href="/blog"
          className="text-gray-400 hover:text-white text-sm flex items-center gap-2 transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>

      {/* Hero */}
      <header className="max-w-3xl mx-auto px-6 pb-12">
        <span className="inline-block text-xs font-semibold tracking-widest uppercase text-teal-400 mb-4">
          {post.tag}
        </span>
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
          {post.title}
        </h1>
        <div className="flex items-center gap-4 text-gray-400 text-sm">
          <span>{post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
      </header>

      {/* Divider */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="border-t border-blue-800 mb-12" />
      </div>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 pb-20">
        {post.content.map((paragraph, i) => (
          <p key={i} className="text-gray-300 text-lg leading-relaxed mb-6">
            {paragraph}
          </p>
        ))}
      </article>

      {/* CTA Card */}
      <div className="max-w-3xl mx-auto px-6 pb-20">
        <div className="bg-blue-900/40 border border-blue-800 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-white mb-3">
            Ready to fix your website?
          </h3>
          <p className="text-gray-300 mb-6">
            Let's build something that actually converts visitors into customers.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-colors"
          >
            Start a Project →
          </Link>
        </div>
      </div>

      <FooterCTA />
    </main>
  )
}
