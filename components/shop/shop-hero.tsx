"use client"

import { motion } from "framer-motion"

export function ShopHero() {
  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-teal-500/5 via-transparent to-orange-500/5 blur-3xl" />
      </div>
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance"
        >
          Premium Digital Assets — Built by the Same Team That Builds for Clients
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto text-pretty"
        >
          Production-ready templates, UI kits, and starter blueprints built on Next.js, Tailwind CSS, and modern architecture. Download. Customize. Launch.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8"
        >
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-teal-500 text-white font-semibold rounded-full hover:bg-teal-400 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
          >
            Browse All Products
          </a>
        </motion.div>
      </div>
    </section>
  )
}
