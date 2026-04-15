"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Linkedin, ArrowUpRight } from "lucide-react"

export function FounderStory() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 rounded-full">
              About
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
              The Person Behind Inievo
            </h2>

            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Inievo was founded by Abu MD Selim — a software architect who spent years 
                watching Bangladeshi businesses get burned by the same cycle: hire a cheap 
                freelancer, get a broken website, rebuild it six months later.
              </p>
              <p>
                We exist to fill the gap between BDT 20,000 template shops and BDT 10 lakh 
                enterprise agencies. &ldquo;Innovation Evolved&rdquo; isn&apos;t just a tagline. It&apos;s a 
                commitment to building systems that still work when your business is 5x bigger.
              </p>
            </div>

            {/* LinkedIn CTA */}
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-slate-200 rounded-full text-slate-600 hover:border-teal-500 hover:text-teal-600 hover:bg-teal-50 transition-all duration-300 group"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect with Abu Selim on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex justify-center"
          >
            {/* Subtle Background Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-100/50 via-transparent to-orange-100/50 blur-3xl" />
            </div>

            {/* Photo Frame */}
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white overflow-hidden shadow-xl shadow-slate-200/50">
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center mb-4 shadow-lg shadow-teal-500/25">
                  <span className="text-2xl font-bold text-white">AS</span>
                </div>
                <p className="text-slate-900 font-semibold">Abu MD Selim</p>
                <p className="text-slate-500 text-sm mt-1">Founder & Lead Architect</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
