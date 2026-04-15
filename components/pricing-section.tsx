"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"

const pricingTiers = [
  {
    name: "Foundation",
    tagline: "PROFESSIONAL DIGITAL PRESENCE",
    price: "BDT 1,80,000",
    target: "For: Professionals, clinics, local businesses entering digital for the first time.",
    deliverables: [
      "Brand identity system",
      "5–8 page Next.js website",
      "SEO-ready copywriting",
      "WhatsApp + Google Analytics integration",
      "1-hour handover session",
    ],
    retainer: "Retainer: From BDT 15,000/mo",
    cta: "Learn More →",
    ctaStyle: "ghost",
    highlighted: false,
  },
  {
    name: "Elevate",
    tagline: "GROWTH-READY DIGITAL SYSTEM",
    price: "BDT 4,00,000",
    target: "For: Scaling e-commerce brands, growing local businesses.",
    deliverables: [
      "Full brand strategy workshop",
      "10–20 page site with advanced CMS/E-commerce",
      "bKash/SSLCommerz integration",
      "Custom Figma design system",
      "Tech SEO + 5 articles",
    ],
    retainer: "Retainer: From BDT 50,000/mo",
    cta: "Learn More",
    ctaStyle: "solid",
    highlighted: true,
  },
  {
    name: "Dominate",
    tagline: "COMPLETE BUSINESS ARCHITECTURE",
    price: "BDT 8,00,000",
    target: "For: Established brands, multi-location businesses.",
    deliverables: [
      "Full brand architecture",
      "Custom web app with admin dashboard",
      "3D product renders + brand video",
      "Full-funnel marketing (SEO/PPC)",
      "Custom business tools integrated",
    ],
    retainer: "Retainer: From BDT 1,00,000/mo",
    cta: "Request a Proposal →",
    ctaStyle: "ghost",
    highlighted: false,
  },
]

export function PricingSection() {
  return (
    <section className="relative py-24 px-6 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-[36px] font-semibold text-white mb-4 text-balance">
            Three Paths to Digital Excellence
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
            Every business is different. Your digital system should be too. Choose the track that matches where you are — and where you&apos;re heading.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ scale: 1.02, y: -4 }}
              className={`
                relative rounded-2xl p-8 transition-shadow duration-300
                ${tier.highlighted 
                  ? "bg-[#0F2035] border-2 border-[#0D9488] lg:scale-105 shadow-[0_0_40px_rgba(13,148,136,0.15)]" 
                  : "bg-[#0F2035] border border-[#1E3A5F]"
                }
                hover:shadow-[0_8px_30px_rgba(13,148,136,0.12)]
              `}
            >
              {/* Most Popular Badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#0D9488] text-white text-xs font-semibold px-4 py-1.5 rounded-full uppercase tracking-wider">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Tagline */}
              <p className="text-xs text-gray-400 uppercase tracking-wider mb-4">
                {tier.tagline}
              </p>

              {/* Tier Name */}
              <h3 className="text-2xl font-semibold text-white mb-2">
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <span className="text-sm text-gray-400">Starting From</span>
                <p className="text-3xl font-bold text-white">{tier.price}</p>
              </div>

              {/* Target Audience */}
              <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                {tier.target}
              </p>

              {/* Deliverables */}
              <ul className="space-y-3 mb-6">
                {tier.deliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#0D9488] flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Retainer Note */}
              <p className="text-xs text-gray-500 mb-6">
                {tier.retainer}
              </p>

              {/* CTA Button */}
              <button
                className={`
                  w-full py-3 px-6 rounded-full font-medium text-sm transition-all duration-300
                  ${tier.ctaStyle === "solid"
                    ? "bg-[#0D9488] text-white hover:bg-[#0D9488]/90 hover:shadow-lg hover:shadow-[#0D9488]/25"
                    : "border border-gray-600 text-gray-300 hover:border-gray-400 hover:text-white"
                  }
                `}
              >
                {tier.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Anxiety Reducer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-gray-400 mb-6 max-w-xl mx-auto">
            Not sure which track fits your business? Book a free 15-minute discovery call. No pitch — we listen first, then recommend.
          </p>
          <button className="border border-[#0D9488] text-[#0D9488] px-8 py-3 rounded-full font-medium text-sm hover:bg-[#0D9488]/10 transition-all duration-300">
            Book a Free Discovery Call
          </button>
        </motion.div>
      </div>
    </section>
  )
}
