"use client"

import { motion } from "framer-motion"
import { Award, Building2, ShoppingCart, Layers } from "lucide-react"
import Link from "next/link"

const serviceTiers = [
  {
    name: "Essential",
    subtitle: "Professional",
    headline: "Essential / Professional",
    price: "BDT 10,000",
    accentColor: "#64748B",
    accentGlow: "rgba(100, 116, 139, 0.25)",
    accentBg: "rgba(100, 116, 139, 0.08)",
    target: "For: Independent professionals, consultants & personal brands.",
    deliverables: [
      "Pro Portfolio Design",
      "Dynamic Contact Funnel",
      "Lightning Fast Load",
      "Mobile-First UI",
    ],
    techStack: ["Next.js", "Tailwind", "Vercel"],
    cta: "View Plan Details →",
    ctaLink: "/services/essential",
    icon: Award,
  },
  {
    name: "Growth",
    subtitle: "Standard",
    headline: "Growth / Standard",
    price: "BDT 30,000",
    accentColor: "#818CF8",
    accentGlow: "rgba(129, 140, 248, 0.25)",
    accentBg: "rgba(129, 140, 248, 0.08)",
    target: "For: Growing local businesses, agencies & SME profiles.",
    deliverables: [
      "5-10 Page Architecture",
      "SEO-Optimized Structure",
      "CMS for Easy Edits",
      "Social Media Sync",
    ],
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
    accentColor: "#2DD4BF",
    accentGlow: "rgba(45, 212, 191, 0.25)",
    accentBg: "rgba(45, 212, 191, 0.08)",
    target: "For: Scaling F-commerce, retail brands & online stores.",
    deliverables: [
      "Full E-Commerce Store",
      "bKash/Nagad Integration",
      "Automated Inventory",
      "Order Tracking Dashboard",
    ],
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
    accentColor: "#FB923C",
    accentGlow: "rgba(251, 146, 60, 0.25)",
    accentBg: "rgba(251, 146, 60, 0.08)",
    target: "For: Enterprises, custom SaaS & complex business logic.",
    deliverables: [
      "Custom DB Architecture",
      "Admin & User Portals",
      "Role-Based Access (RBAC)",
      "Scalable Backend System",
    ],
    techStack: ["Next.js", "Tailwind", "Vercel"],
    cta: "Request Consultation →",
    ctaLink: "/contact",
    icon: Layers,
  },
]

function VercelIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 76 65" fill="currentColor" className={className}>
      <path d="M37.5274 0L75.0548 65H0L37.5274 0Z" />
    </svg>
  )
}

function NextJsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 180 180" fill="currentColor" className={className}>
      <mask id="mask0" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
        <circle cx="90" cy="90" r="90" fill="white"/>
      </mask>
      <g mask="url(#mask0)">
        <circle cx="90" cy="90" r="90" fill="currentColor"/>
        <path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear)"/>
        <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)"/>
      </g>
      <defs>
        <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
        <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
          <stop stopColor="white"/>
          <stop offset="1" stopColor="white" stopOpacity="0"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function TailwindIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 54 33" fill="currentColor" className={className}>
      <path fillRule="evenodd" clipRule="evenodd" d="M27 0C19.8 0 15.3 3.6 13.5 10.8C16.2 7.2 19.35 5.85 22.95 6.75C25.004 7.263 26.472 8.754 28.097 10.403C30.744 13.09 33.808 16.2 40.5 16.2C47.7 16.2 52.2 12.6 54 5.4C51.3 9 48.15 10.35 44.55 9.45C42.496 8.937 41.028 7.446 39.403 5.797C36.756 3.11 33.692 0 27 0ZM13.5 16.2C6.3 16.2 1.8 19.8 0 27C2.7 23.4 5.85 22.05 9.45 22.95C11.504 23.464 12.972 24.954 14.597 26.603C17.244 29.29 20.308 32.4 27 32.4C34.2 32.4 38.7 28.8 40.5 21.6C37.8 25.2 34.65 26.55 31.05 25.65C28.996 25.137 27.528 23.646 25.903 21.997C23.256 19.31 20.192 16.2 13.5 16.2Z"/>
    </svg>
  )
}

function TechBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/10 text-[11px] font-medium text-gray-400 tracking-wide">
      {name === "Vercel" && <VercelIcon className="w-2.5 h-2.5" />}
      {name === "Next.js" && <NextJsIcon className="w-3 h-3" />}
      {name === "Tailwind" && <TailwindIcon className="w-3 h-2" />}
      {name}
    </span>
  )
}

export function PricingSection() {
  return (
    <section className="relative py-28 px-6 bg-[#0A1628]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-[44px] font-semibold text-white mb-5 tracking-tight text-balance">
            Service Tracks & Pricing
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto text-pretty leading-relaxed">
            From professional portfolios to enterprise architecture — find the perfect starting point for your digital journey.
          </p>
        </motion.div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
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
                  y: -8,
                }}
                className="group relative rounded-2xl p-7 bg-[#0F1D2F] border border-[#1E3A5F]/60 transition-all duration-400 flex flex-col overflow-hidden"
              >
                {/* Background Gradient Tint on Hover */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse at top, ${tier.accentBg}, transparent 70%)`,
                  }}
                />
                
                {/* Hover Glow Effect */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 50px ${tier.accentGlow}, 0 0 100px ${tier.accentGlow}`,
                  }}
                />
                
                {/* Accent Border on Hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border-2"
                  style={{ borderColor: tier.accentColor }}
                />

                {/* 3D Icon */}
                <motion.div 
                  className="relative mb-7 z-10"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25 }}
                >
                  <div 
                    className="w-14 h-14 rounded-xl flex items-center justify-center relative overflow-hidden"
                    style={{
                      background: `linear-gradient(145deg, ${tier.accentColor}25, ${tier.accentColor}50)`,
                      boxShadow: `0 8px 24px ${tier.accentGlow}, inset 0 1px 0 rgba(255,255,255,0.15)`,
                    }}
                  >
                    {/* 3D Depth Layer */}
                    <div 
                      className="absolute inset-0 rounded-xl"
                      style={{
                        background: `linear-gradient(180deg, transparent 50%, ${tier.accentColor}35)`,
                      }}
                    />
                    <IconComponent 
                      className="w-7 h-7 relative z-10 transition-transform duration-300 group-hover:scale-110" 
                      style={{ color: tier.accentColor }}
                      strokeWidth={1.5}
                    />
                  </div>
                  {/* Floating Shadow */}
                  <div 
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-2.5 rounded-full blur-md opacity-40 group-hover:opacity-60 transition-opacity"
                    style={{ background: tier.accentColor }}
                  />
                </motion.div>

                {/* Headline */}
                <h3 className="text-lg font-semibold text-white mb-3 relative z-10 tracking-tight">
                  {tier.headline}
                </h3>

                {/* Price */}
                <div className="mb-4 relative z-10">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Starting From</span>
                  <p className="text-2xl font-bold text-white mt-0.5">{tier.price}</p>
                </div>

                {/* Target Audience */}
                <p className="text-[13px] text-gray-400 mb-6 leading-relaxed relative z-10">
                  {tier.target}
                </p>

                {/* Deliverables */}
                <ul className="space-y-3 mb-6 relative z-10 flex-grow">
                  {tier.deliverables.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-[13px] text-gray-300">
                      <span 
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: tier.accentColor }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 pt-5 border-t border-white/5 relative z-10">
                  {tier.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>

                {/* CTA Button */}
                <Link
                  href={tier.ctaLink}
                  className="relative z-10 w-full py-3 px-6 rounded-full font-medium text-[13px] text-center transition-all duration-300 border group-hover:shadow-lg"
                  style={{ 
                    borderColor: `${tier.accentColor}80`,
                    color: tier.accentColor,
                    background: 'transparent',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = tier.accentColor
                    e.currentTarget.style.color = '#0A1628'
                    e.currentTarget.style.borderColor = tier.accentColor
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'transparent'
                    e.currentTarget.style.color = tier.accentColor
                    e.currentTarget.style.borderColor = `${tier.accentColor}80`
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
          className="text-center text-gray-500 mt-14 text-sm"
        >
          Every plan is 100% customizable to your business needs.
        </motion.p>
      </div>
    </section>
  )
}
