"use client"

import { motion } from "framer-motion"
import { Linkedin, ArrowUpRight } from "lucide-react"

export function FounderStory() {
  return (
    <section className="py-24 px-6 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Person Behind Inievo
            </h2>

            <div className="space-y-4 text-slate-300 leading-relaxed">
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
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="inline-flex items-center gap-2 mt-8 px-5 py-2.5 border border-slate-600 rounded-full text-slate-300 hover:border-teal-500 hover:text-teal-400 transition-all duration-300 group"
            >
              <Linkedin className="w-4 h-4" />
              <span>Connect with Abu Selim on LinkedIn</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>
          </motion.div>

          {/* Photo Frame */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative flex justify-center"
          >
            {/* Glowing Backdrop */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-teal-500/20 via-transparent to-orange-500/20 blur-3xl" />
            </div>

            {/* Photo Frame */}
            <div className="relative w-64 h-80 md:w-72 md:h-96 rounded-2xl border border-slate-700 bg-gradient-to-br from-[#0F1D32] to-[#0A1628] overflow-hidden">
              {/* Placeholder Content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500/30 to-orange-500/30 border border-slate-600 flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-slate-400">AS</span>
                </div>
                <p className="text-slate-400 text-sm">Abu MD Selim</p>
                <p className="text-slate-500 text-xs mt-1">Founder & Lead Architect</p>
              </div>

              {/* Subtle inner border glow */}
              <div className="absolute inset-0 rounded-2xl border border-teal-500/10" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
