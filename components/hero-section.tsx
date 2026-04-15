"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Ambient Glow Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px]">
          {/* Teal Glow */}
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0D9488]/30 rounded-full blur-3xl"
          />
          {/* Orange Glow */}
          <motion.div
            animate={{
              scale: [1.1, 1, 1.1],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#F97316]/20 rounded-full blur-3xl"
          />
        </div>
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 mx-auto max-w-4xl px-6 text-center"
      >
        {/* Headline */}
        <motion.h1
          variants={itemVariants}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-[64px] font-extrabold text-white leading-tight tracking-tight text-balance"
        >
          Premium Digital Systems for Bangladesh&apos;s Ambitious Brands
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          Architecturally sound websites. Cohesive brand identities. Growth engines that scale. For businesses that refuse to settle for ordinary.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#book"
            className="inline-flex items-center justify-center rounded-full bg-[#0D9488] px-8 py-4 text-base font-medium text-white hover:bg-[#0D9488]/90 transition-all duration-200 hover:scale-105 shadow-lg shadow-[#0D9488]/25"
          >
            Book a Free Strategy Call
          </Link>
          <Link
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-full border border-[#1E3A5F] bg-transparent px-8 py-4 text-base font-medium text-white hover:bg-[#1A2942] transition-all duration-200 gap-2"
          >
            See Our Work
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
