"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"
import { ArrowRight, Linkedin, Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react"

export function FooterCTA() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 overflow-hidden" ref={containerRef}>
      {/* Subtle gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-orange-500/5 rounded-full blur-[100px]" />
      </div>
      
      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px'
        }}
      />

      {/* CTA Section */}
      <div className="relative py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold tracking-wider text-blue-200 uppercase bg-blue-700/40 rounded-full border border-blue-400/30"
          >
            Let&apos;s Build Together
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
          >
            Ready to Build Something{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-teal-300 to-orange-400">
              Remarkable?
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-gray-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed"
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
              className="group px-8 py-4 bg-orange-500 text-white font-medium rounded-full transition-all duration-300 hover:bg-orange-600 hover:shadow-2xl hover:shadow-orange-500/30 hover:scale-[1.02] flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
            <Link
              href="#services"
              className="px-8 py-4 border border-blue-300 hover:border-blue-100 text-blue-100 hover:text-white font-medium rounded-full transition-all duration-300 w-full sm:w-auto text-center"
            >
              View Pricing
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-12 gap-12">
            {/* Brand */}
            <div className="md:col-span-5">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src="https://res.cloudinary.com/dwdsys1u9/image/upload/f_auto,q_auto/IMG_6017_onhhf9"
                  alt="Inievo"
                  className="h-10 w-auto object-contain brightness-0 invert"
                />
              </div>
              <p className="text-blue-100 text-sm leading-relaxed max-w-sm mb-8">
                Premium digital systems for Bangladesh&apos;s ambitious brands. Architecturally sound websites, cohesive brand identities, and growth engines that scale.
              </p>
              
              {/* Social Icons */}
              <div className="flex items-center gap-2">
                {[
                  { icon: Linkedin, href: "#" },
                  { icon: Facebook, href: "#" },
                  { icon: Instagram, href: "#" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-blue-700/50 hover:bg-blue-600 flex items-center justify-center text-blue-100 hover:text-white transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-2">
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Company</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Services", href: "#services" },
                  { name: "Portfolio", href: "#portfolio" },
                  { name: "Process", href: "#process" },
                  { name: "Shop", href: "/shop" },
                  { name: "Blog", href: "/blog" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-blue-100 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="md:col-span-2">
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Resources</h4>
              <ul className="space-y-3 text-sm">
                {[
                  { name: "Client Portal", href: "/client" },
                  { name: "Demo Dashboard", href: "/demo" },
                  { name: "Privacy Policy", href: "/privacy" },
                  { name: "Terms", href: "/terms" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-blue-100 hover:text-white transition-colors duration-200">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="md:col-span-3">
              <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href="mailto:hello@inievo.com" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-700/50 flex items-center justify-center">
                      <Mail className="w-3.5 h-3.5" />
                    </div>
                    hello@inievo.com
                  </a>
                </li>
                <li>
                  <a href="tel:+8801XXXXXXXXX" className="text-blue-100 hover:text-white transition-colors duration-200 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-700/50 flex items-center justify-center">
                      <Phone className="w-3.5 h-3.5" />
                    </div>
                    +880 1XXX-XXXXXX
                  </a>
                </li>
                <li>
                  <span className="text-blue-100 flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-700/50 flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5" />
                    </div>
                    Dhaka, Bangladesh
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-blue-700/50 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-100 text-sm">
              &copy; {new Date().getFullYear()} Inievo. All rights reserved.
            </p>
            <p className="text-blue-200 text-xs">
              Crafted with precision in Bangladesh
            </p>
          </div>
        </div>
      </footer>
    </section>
  )
}
