"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const latestPosts = [
  {
    slug: "website-losing-customers-checklist",
    tag: "Growth",
    tagColor: "teal",
    title: "5 Signs Your Website Is Losing You Customers — A Checklist",
    excerpt: "From slow load times to confusing navigation, here are the conversion killers hiding in plain sight.",
    date: "April 15, 2026",
    readTime: "4 min read",
  },
  {
    slug: "cheap-freelancer-problem",
    tag: "Engineering",
    tagColor: "teal",
    title: "The BDT 20,000 Website Problem: Why Cheap Freelancers Cost You More",
    excerpt: "You get what you pay for. Here's the real cost of budget web development in Bangladesh.",
    date: "April 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "facebook-to-scalable-store",
    tag: "Case Study",
    tagColor: "orange",
    title: "From Facebook Page to Scalable Store: A Local Brand's Journey",
    excerpt: "How a Dhaka-based fashion brand transformed their social media presence into a BDT 50L/month operation.",
    date: "April 5, 2026",
    readTime: "8 min read",
  },
]

export function BlogPreview() {
  return (
    <section className="py-24 px-6 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Latest Insights
          </h2>
        </motion.div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {latestPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block h-full">
                <div className="h-full bg-[#0F2035] border border-[#1E3A5F] rounded-xl overflow-hidden hover:border-teal-500/50 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-500/5 transition-all duration-500">
                  {/* Image placeholder */}
                  <div className="relative aspect-video overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] to-[#0F2035]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className={`w-20 h-20 rounded-full ${post.tagColor === "orange" ? "bg-orange-500/20" : "bg-teal-500/20"} blur-2xl`} />
                    </div>
                    <div className="absolute inset-0 bg-[#0A1628]/30 group-hover:bg-[#0A1628]/10 transition-colors duration-500" />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${
                      post.tagColor === "orange" 
                        ? "text-orange-400 bg-orange-500/10" 
                        : "text-teal-400 bg-teal-500/10"
                    }`}>
                      {post.tag}
                    </span>
                    
                    <h4 className="text-lg font-bold text-white leading-snug mb-3 group-hover:text-teal-400 transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </h4>
                    
                    <p className="text-sm text-gray-400 leading-relaxed mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-[#1E3A5F]">
                      <p className="text-xs text-gray-500">{post.date} · {post.readTime}</p>
                      <ArrowRight className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-white border border-[#1E3A5F] rounded-full hover:border-teal-500 hover:text-teal-400 transition-all duration-300"
          >
            Read All Insights
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
