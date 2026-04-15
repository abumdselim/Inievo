"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Facebook, Instagram } from "lucide-react"

export function FooterCTA() {
  return (
    <section className="relative bg-[#050B14] overflow-hidden">
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />

      {/* CTA Section */}
      <div className="relative py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            Ready to Build Something Remarkable?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          >
            We take on only 3 new projects per month to maintain the quality standard 
            our clients expect. If you&apos;re serious about your digital presence, let&apos;s talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#"
              className="px-8 py-4 bg-teal-600 hover:bg-teal-500 text-white font-medium rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 flex items-center gap-2"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="#pricing"
              className="px-8 py-4 border border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-full transition-all duration-300"
            >
              See Pricing
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-slate-800/50">
        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <Image
                src="/images/inievo-icon.png"
                alt="Inievo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-slate-400 text-sm">
                &copy; 2026 Inievo. All rights reserved.
              </span>
            </div>

            {/* Links */}
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link href="#" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="w-9 h-9 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:text-teal-400 hover:border-teal-500/50 transition-all duration-300"
              >
                <Instagram className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
