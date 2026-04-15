"use client"

import { motion } from "framer-motion"

export function BlogHero() {
  return (
    <section className="pt-32 pb-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight text-balance"
        >
          Insights for Bangladesh&apos;s Digital Leaders
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto text-pretty"
        >
          Practical strategies, industry data, and honest advice — written for business owners, not developers.
        </motion.p>
      </div>
    </section>
  )
}
