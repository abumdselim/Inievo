"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    slug: "website-losing-customers-checklist",
    tag: "Growth",
    tagColor: "teal",
    title: "5 Signs Your Website Is Losing You Customers — A Checklist",
    excerpt: "From slow load times to confusing navigation, here are the conversion killers hiding in plain sight.",
    author: "Abu MD Selim",
    date: "April 15, 2026",
    readTime: "4 min read",
  },
  {
    slug: "cheap-freelancer-problem",
    tag: "Engineering",
    tagColor: "teal",
    title: "The BDT 20,000 Website Problem: Why Cheap Freelancers Cost You More",
    excerpt: "You get what you pay for. Here's the real cost of budget web development in Bangladesh.",
    author: "Abu MD Selim",
    date: "April 10, 2026",
    readTime: "6 min read",
  },
  {
    slug: "facebook-to-scalable-store",
    tag: "Case Study",
    tagColor: "orange",
    title: "From Facebook Page to Scalable Store: A Local Brand's Journey",
    excerpt: "How a Dhaka-based fashion brand transformed their social media presence into a BDT 50L/month operation.",
    author: "Abu MD Selim",
    date: "April 5, 2026",
    readTime: "8 min read",
  },
]

export function PostsGrid() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-gray-400 mb-8"
        >
          Recent Posts
        </motion.h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
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
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-500 to-orange-500 flex items-center justify-center text-white font-semibold text-[10px]">
                          AS
                        </div>
                        <p className="text-xs text-gray-500">{post.date} · {post.readTime}</p>
                      </div>
                      
                      <ArrowRight className="w-4 h-4 text-teal-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
