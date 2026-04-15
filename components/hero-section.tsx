"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Play } from "lucide-react"
import { useRef } from "react"

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <section ref={containerRef} className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white pt-20 md:pt-0">
      {/* Premium Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(15, 23, 42, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(15, 23, 42, 0.5) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
        
        {/* Gradient Orbs */}
        <motion.div
          style={{ y }}
          className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-teal-100/40 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(y, v => v * 0.7) }}
          className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-orange-100/30 to-transparent rounded-full blur-3xl"
        />
        <motion.div
          style={{ y: useTransform(y, v => v * 0.5) }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-slate-50 to-transparent rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200/80 text-sm font-medium text-slate-600 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
            Now accepting Q2 2026 projects
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.1] tracking-tight text-balance"
        >
          Premium Digital Systems for{" "}
          <span className="relative">
            <span className="text-gradient">Ambitious Brands</span>
            <motion.svg
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
            >
              <motion.path
                d="M2 10C50 4 150 2 298 6"
                stroke="url(#gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0D9488" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
              </defs>
            </motion.svg>
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-pretty"
        >
          Architecturally sound websites. Cohesive brand identities. Growth engines that scale. For businesses that refuse to settle for ordinary.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#book"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-slate-900 px-8 py-4 text-base font-medium text-white transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-slate-800 to-slate-900"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            />
          </Link>
          <Link
            href="#portfolio"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-medium text-slate-700 transition-all duration-300 hover:border-slate-300 hover:shadow-lg hover:shadow-slate-100 w-full sm:w-auto"
          >
            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 group-hover:bg-teal-50 transition-colors">
              <Play className="w-3 h-3 ml-0.5 text-slate-600 group-hover:text-teal-600 transition-colors" fill="currentColor" />
            </span>
            See Our Work
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 pt-8 border-t border-slate-100"
        >
          <p className="text-sm text-slate-500 mb-6">Trusted by growing businesses across Bangladesh</p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-40">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="w-24 h-8 bg-slate-200 rounded"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-slate-400" />
        </motion.div>
      </motion.div>
    </section>
  )
}
