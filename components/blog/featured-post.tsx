"use client"

import { featuredBlogPost } from "@/components/blog/blog-posts"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function FeaturedPost() {
  const post = featuredBlogPost

  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group"
        >
          <Link href={`/blog/${post.slug}`} className="block">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-[#0F2035] border border-[#1E3A5F] rounded-2xl overflow-hidden hover:border-teal-500/50 transition-all duration-500">
              {/* Image */}
              <div className="relative aspect-video md:aspect-auto md:h-full overflow-hidden">
                <div
                  className="absolute inset-0"
                  style={{ backgroundImage: "linear-gradient(135deg, rgba(20,184,166,0.2), rgba(249,115,22,0.2))" }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-32 h-32 rounded-full blur-3xl"
                    style={{ backgroundImage: "linear-gradient(135deg, rgba(20,184,166,0.3), rgba(249,115,22,0.3))" }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white/10">01</span>
                </div>
                <div className="absolute inset-0 bg-[#0A1628]/40 group-hover:bg-[#0A1628]/20 transition-colors duration-500" />
              </div>
              
              {/* Content */}
              <div className="p-8 md:pr-12">
                  <span className="inline-block px-3 py-1 text-xs font-semibold text-orange-400 bg-orange-500/10 rounded-full mb-4">
                  {post.tag}
                </span>
                
                <h2 className="text-2xl md:text-3xl font-bold text-white leading-tight mb-4 group-hover:text-teal-400 transition-colors duration-300">
                  {post.title}
                </h2>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-teal-500 flex items-center justify-center text-white font-semibold text-sm">
                      AS
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">{post.author}</p>
                      <p className="text-xs text-gray-400">{post.date} · {post.readTime}</p>
                    </div>
                  </div>
                  
                  <span className="flex items-center gap-2 text-teal-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Read More <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </motion.article>
      </div>
    </section>
  )
}
