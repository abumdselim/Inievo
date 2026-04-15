import { blogPosts } from "@/components/blog/blog-posts"
import { FooterCTA } from "@/components/footer-cta"
import Link from "next/link"
import { notFound } from "next/navigation"

export const metadata = {
  title: "Blog | Inievo",
  description: "Insights on digital strategy, web design, and building scalable systems for ambitious brands.",
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string }
}) {
  const post = blogPosts.find((p) => p.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="min-h-screen bg-[#0A1628]">
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
