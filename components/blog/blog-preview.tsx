import { blogPosts, featuredBlogPost } from "@/components/blog/blog-posts"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function BlogPreview() {
  const recentPosts = blogPosts.slice(1)

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-teal-600">
              Latest Writing
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-950 md:text-4xl">
              Practical ideas, not generic blog filler.
            </h2>
            <p className="mt-4 text-base leading-7 text-slate-600">
              A quick look at the kinds of decisions that make websites faster, clearer, and more profitable.
            </p>
          </div>

          <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-medium text-slate-900 transition-colors hover:text-teal-700">
            View all posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
          <Link href={`/blog/${featuredBlogPost.slug}`} className="group block overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1">
            <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-950 via-teal-950 to-orange-950 p-8 text-white">
              <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "32px 32px" }} />
              <div className="relative flex h-full flex-col justify-between">
                <span className="inline-flex w-fit rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80">
                  Featured Article
                </span>
                <div className="max-w-2xl">
                  <p className="mb-3 text-sm text-white/70">
                    {featuredBlogPost.date} · {featuredBlogPost.readTime}
                  </p>
                  <h3 className="text-2xl font-bold leading-tight md:text-3xl">
                    {featuredBlogPost.title}
                  </h3>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-teal-700">
                {featuredBlogPost.tag}
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
                {featuredBlogPost.excerpt}
              </p>
              <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-slate-950 transition-colors group-hover:text-teal-700">
                Read the post
                <ArrowRight className="h-4 w-4" />
              </span>
            </div>
          </Link>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
              Recent posts
            </p>
            <div className="mt-6 space-y-6">
              {recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-teal-200 hover:bg-slate-50">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
                    {post.tag}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold leading-snug text-slate-950 group-hover:text-teal-700">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {post.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-slate-500">
                    {post.date} · {post.readTime}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
