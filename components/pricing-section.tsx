"use client"

import { motion } from "framer-motion"
import { Stethoscope, Building2, ShoppingCart, Brain } from "lucide-react"
import Link from "next/link"

const serviceTiers = [
  {
    name: "Essential",
    subtitle: "Professional",
    headline: "Essential / Professional",
    price: "BDT 10,000",
    accentColor: "#64748B", // Blue-Gray
    accentGlow: "rgba(100, 116, 139, 0.3)",
    target: "Doctors, Engineers, Teachers, or individuals needing a credible personal brand/portfolio.",
    techStack: ["Next.js", "Tailwind", "Vercel"],
    cta: "View Plan Details →",
    ctaLink: "/services/essential",
    icon: Stethoscope,
  },
  {
    name: "Growth",
    subtitle: "Standard",
    headline: "Growth / Standard",
    price: "BDT 30,000",
    accentColor: "#6366F1", // Indigo
    accentGlow: "rgba(99, 102, 241, 0.3)",
    target: "Small organizations, local businesses, or information-focused websites.",
    deliverables: ["SEO-ready structure", "Contact funnels", "Social media integration"],
    techStack: ["Next.js", "Tailwind", "Vercel"],
    cta: "View Plan Details →",
    ctaLink: "/services/growth",
    icon: Building2,
  },
  {
    name: "Advanced",
    subtitle: "E-Commerce",
    headline: "Advanced / E-Commerce",
    price: "BDT 50,000",
    accentColor: "#0D9488", // Inievo Teal
    accentGlow: "rgba(13, 148, 136, 0.3)",
    target: "Facebook shops moving to web, local retail brands, and shop management systems.",
    deliverables: ["Inventory system", "bKash/Nagad integration", "Order tracking dashboard"],
    techStack: ["Next.js", "Tailwind", "Vercel"],
    cta: "View Plan Details →",
    ctaLink: "/services/advanced",
    icon: ShoppingCart,
  },
  {
    name: "Premium",
    subtitle: "Architecture",
    headline: "Premium / Architecture",
    price: "BDT 1,00,000",
    accentColor: "#F97316", // Signal Orange
    accentGlow: "rgba(249, 115, 22, 0.3)",
    target: "High-end management systems, Custom ERPs, and large-scale digital business logic.",
    deliverables: ["Custom DB Architecture", "Full Admin/Client ecosystem", "Multi-role access", "Scalable backend"],
    techStack: ["Next.js", "Tailwind", "Vercel"],
    cta: "Request Consultation →",
    ctaLink: "/contact",
    icon: Brain,
  },
]

function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-[11px] font-medium text-gray-400">
      {name}
    </span>
  )
}

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
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-[42px] font-semibold text-white mb-4 text-balance">
            Service Tracks & Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty">
            From professional portfolios to enterprise architecture — find the perfect starting point for your digital journey.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {serviceTiers.map((tier, index) => {
            const IconComponent = tier.icon
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ 
                  scale: 1.02, 
                  y: -6,
                }}
                className="group relative rounded-2xl p-6 bg-[#0F2035] border border-[#1E3A5F] transition-all duration-300 flex flex-col"
                style={{
                  // @ts-expect-error CSS custom property for hover glow
                  '--accent-color': tier.accentColor,
                  '--accent-glow': tier.accentGlow,
                }}
              >
                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 40px ${tier.accentGlow}, inset 0 0 20px ${tier.accentGlow}`,
                  }}
                />
                
                {/* Accent Border on Hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2"
                  style={{ borderColor: tier.accentColor }}
                />

                {/* 3D Icon */}
                <motion.div 
                  className="relative mb-6"
                  whileHover={{ y: -4 }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 300, 
                    damping: 20,
                    repeat: Infinity,
                    repeatType: "reverse",
                    duration: 2
                  }}
                >
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(135deg, ${tier.accentColor}20, ${tier.accentColor}40)`,
                      boxShadow: `0 8px 32px ${tier.accentGlow}, inset 0 1px 0 rgba(255,255,255,0.1)`,
                    }}
                  >
                    {/* 3D Depth Layer */}
                    <div 
                      className="absolute inset-0 rounded-2xl"
                      style={{
                        background: `linear-gradient(180deg, transparent 60%, ${tier.accentColor}30)`,
                      }}
                    />
                    <IconComponent 
                      className="w-8 h-8 relative z-10 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: tier.accentColor }}
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Floating Shadow */}
                  <div 
                    className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-12 h-3 rounded-full blur-md opacity-50 group-hover:opacity-70 transition-opacity"
                    style={{ background: tier.accentColor }}
                  />
                </motion.div>

                {/* Headline */}
                <h3 className="text-xl font-semibold text-white mb-2">
                  {tier.headline}
                </h3>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-xs text-gray-500 uppercase tracking-wider">Starting From</span>
                  <p className="text-2xl font-bold text-white">{tier.price}</p>
                </div>

                {/* Target Audience */}
                <p className="text-sm text-gray-400 mb-5 leading-relaxed flex-grow">
                  <span className="text-gray-500 font-medium">For: </span>
                  {tier.target}
                </p>

                {/* Deliverables (if any) */}
                {tier.deliverables && (
                  <ul className="space-y-2 mb-5">
                    {tier.deliverables.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <span 
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: tier.accentColor }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 mt-auto pt-4 border-t border-white/5">
                  {tier.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={tier.ctaLink}
                  className="w-full py-3 px-6 rounded-full font-medium text-sm text-center transition-all duration-300 border"
                  style={{ 
                    borderColor: tier.accentColor,
                    color: tier.accentColor,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = `${tier.accentColor}15`
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                  }}
                >
                  {tier.cta}
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Customization Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center text-gray-500 mt-12 text-sm"
        >
          Every plan is 100% customizable to your business needs.
        </motion.p>
      </div>
    </section>
  )
}
