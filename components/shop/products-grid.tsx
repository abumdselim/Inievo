"use client"

import { motion } from "framer-motion"
import { Star, ExternalLink, ShoppingCart } from "lucide-react"

const products = [
  {
    id: 1,
    title: "E-Commerce Starter — Next.js + Tailwind + bKash",
    badge: "STARTER",
    badgeColor: "teal",
    price: 15000,
    comparePrice: 25000,
    tech: ["Next.js", "Tailwind", "Prisma", "bKash"],
    rating: 5,
    reviews: 23,
    image: "/images/product-ecommerce.jpg"
  },
  {
    id: 2,
    title: "SaaS Dashboard Pro — Full Admin + Auth + Billing",
    badge: "PRO",
    badgeColor: "orange",
    price: 35000,
    comparePrice: 55000,
    tech: ["Next.js", "Tailwind", "Supabase", "Stripe"],
    rating: 5,
    reviews: 18,
    image: "/images/product-dashboard.jpg"
  },
  {
    id: 3,
    title: "Landing Page Kit — 12 Sections + Dark Mode",
    badge: "STARTER",
    badgeColor: "teal",
    price: 8000,
    comparePrice: 15000,
    tech: ["Next.js", "Tailwind", "Framer Motion"],
    rating: 5,
    reviews: 41,
    image: "/images/product-landing.jpg"
  },
  {
    id: 4,
    title: "Healthcare Portal — Appointments + Patient Dashboard",
    badge: "PRO",
    badgeColor: "orange",
    price: 45000,
    comparePrice: 70000,
    tech: ["Next.js", "Tailwind", "Prisma", "Auth.js"],
    rating: 5,
    reviews: 12,
    image: "/images/product-healthcare.jpg"
  },
  {
    id: 5,
    title: "Restaurant Starter — Menu + Orders + QR System",
    badge: "STARTER",
    badgeColor: "teal",
    price: 12000,
    comparePrice: 20000,
    tech: ["Next.js", "Tailwind", "Prisma"],
    rating: 5,
    reviews: 29,
    image: "/images/product-restaurant.jpg"
  },
  {
    id: 6,
    title: "Agency Portfolio — Case Studies + Contact Forms",
    badge: "STARTER",
    badgeColor: "teal",
    price: 10000,
    comparePrice: 18000,
    tech: ["Next.js", "Tailwind", "MDX"],
    rating: 5,
    reviews: 35,
    image: "/images/product-agency.jpg"
  }
]

function formatPrice(price: number) {
  return `BDT ${price.toLocaleString("en-BD")}`
}

export function ProductsGrid() {
  return (
    <section id="products" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-white text-center mb-12"
        >
          Featured Products
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-[#0F2035] rounded-xl overflow-hidden border border-slate-700/50 hover:border-slate-600 transition-all duration-300"
            >
              {/* Image Area */}
              <div className="relative aspect-video bg-[#0A1628] overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/10 to-orange-500/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold text-slate-700/50">
                    {product.id}
                  </div>
                </div>
                {/* Badge */}
                <div 
                  className={`absolute top-3 left-3 px-3 py-1 text-xs font-bold rounded-full ${
                    product.badgeColor === "teal"
                      ? "bg-teal-500/20 text-teal-400 border border-teal-500/30"
                      : "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                  }`}
                >
                  {product.badge}
                </div>
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-medium">Preview</span>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-5">
                <h3 className="font-semibold text-white text-lg leading-tight mb-3 group-hover:text-teal-400 transition-colors">
                  {product.title}
                </h3>
                
                {/* Price */}
                <div className="flex items-baseline gap-2 mb-3">
                  <span className="text-xl font-bold text-white">
                    {formatPrice(product.price)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    {formatPrice(product.comparePrice)}
                  </span>
                </div>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {product.tech.map((tech) => (
                    <span 
                      key={tech}
                      className="px-2 py-0.5 text-xs bg-slate-800 text-gray-400 rounded-md border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Rating */}
                <div className="flex items-center gap-2 mb-5">
                  <div className="flex">
                    {[...Array(product.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.reviews} reviews
                  </span>
                </div>
                
                {/* Actions */}
                <div className="flex items-center gap-3">
                  <a 
                    href="#"
                    className="flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    View Demo
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-teal-500 text-white text-sm font-semibold rounded-lg hover:bg-teal-400 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
