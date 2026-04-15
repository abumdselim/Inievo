"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Linkedin, Facebook, Instagram, Mail, Phone } from "lucide-react"

export function FooterCTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative bg-slate-900 overflow-hidden" ref={containerRef}>
      {/* Grid Pattern Background */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
      
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl" />

      {/* CTA Section */}
      <div className="relative py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-teal-400 uppercase bg-teal-500/10 rounded-full border border-teal-500/20"
          >
            Let&apos;s Work Together
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight"
          >
            Ready to Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-orange-400">
              Remarkable?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-slate-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            We take on only 3 new projects per month to maintain the quality standard 
            our clients expect. If you&apos;re serious about your digital presence, let&apos;s talk.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="#book"
              className="group px-8 py-4 bg-white text-slate-900 font-medium rounded-full transition-all duration-300 hover:shadow-xl hover:shadow-white/10 hover:scale-105 flex items-center gap-2"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 border border-slate-700 hover:border-slate-600 text-slate-300 hover:text-white font-medium rounded-full transition-all duration-300"
            >
              See Pricing
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-slate-800">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <Image
                  src="/images/inievo-icon.png"
                  alt="Inievo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                />
                <span className="text-white font-semibold text-lg">Inievo</span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-sm mb-6">
                Premium digital systems for Bangladesh&apos;s ambitious brands. Architecturally sound websites, cohesive brand identities, and growth engines that scale.
              </p>
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-3 text-sm">
                <li><Link href="#services" className="text-slate-400 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="#portfolio" className="text-slate-400 hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="#process" className="text-slate-400 hover:text-white transition-colors">Process</Link></li>
                <li><Link href="/shop" className="text-slate-400 hover:text-white transition-colors">Digital Shop</Link></li>
                <li><Link href="/blog" className="text-slate-400 hover:text-white transition-colors">Blog</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="mailto:hello@inievo.com" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    hello@inievo.com
                  </a>
                </li>
                <li>
                  <a href="tel:+8801XXXXXXXXX" className="text-slate-400 hover:text-white transition-colors flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    +880 1XXX-XXXXXX
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; 2026 Inievo. All rights reserved.
            </p>
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <Link href="/privacy" className="hover:text-slate-300 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-slate-300 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
