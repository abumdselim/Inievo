"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, Building2, ShoppingCart, Layers, Check, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

const serviceTiers = [
  {
    name: "Essential",
    headline: "Essential",
    subtitle: "Professional Portfolio",
    price: "BDT 10,000",
    accentColor: "#6B7280",
    accentBg: "bg-gray-50",
    target: "Independent professionals, consultants & personal brands",
    deliverables: [
      "Pro Portfolio Design",
      "Dynamic Contact Funnel", 
      "Lightning Fast Load",
      "Mobile-First UI",
    ],
    techStack: ["Next.js", "Tailwind", "Vercel"],
    cta: "Get Started",
    ctaLink: "/contact",
    icon: Award,
  },
  {
    name: "Growth",
    headline: "Growth",
    subtitle: "Business Standard",
    price: "BDT 30,000",
    accentColor: "#6366F1",
    accentBg: "bg-indigo-50",
    target: "Growing local businesses, agencies & SME profiles",
    deliverables: [
      "5-10 Page Architecture",
      "SEO-Optimized Structure",
      "CMS for Easy Edits",
      "Social Media Sync",
    ],
    techStack: ["Next.js", "Tailwind", "Vercel"],
    cta: "Get Started",
    ctaLink: "/contact",
    icon: Building2,
  },
  {
    name: "Advanced",
    headline: "Advanced",
    subtitle: "E-Commerce Ready",
    price: "BDT 50,000",
    accentColor: "#0D9488",
    accentBg: "bg-teal-50",
    popular: true,
    target: "Scaling F-commerce, retail brands & online stores",
    deliverables: [
      "Full E-Commerce Store",
      "bKash/Nagad Integration",
      "Automated Inventory",
      "Order Tracking Dashboard",
    ],
    techStack: ["Next.js", "Tailwind", "Vercel"],
    cta: "Get Started",
    ctaLink: "/contact",
    icon: ShoppingCart,
  },
  {
    name: "Premium",
    headline: "Premium",
    subtitle: "Custom Architecture",
    price: "BDT 1,00,000+",
    accentColor: "#F97316",
    accentBg: "bg-orange-50",
    target: "Enterprises, custom SaaS & complex business logic",
    deliverables: [
      "Custom DB Architecture",
      "Admin & User Portals",
      "Role-Based Access (RBAC)",
      "Scalable Backend System",
    ],
    techStack: ["Next.js", "Tailwind", "Vercel"],
    cta: "Book Consultation",
    ctaLink: "/contact",
    icon: Layers,
  },
]

export function PricingSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="services" className="py-24 md:py-32 bg-[#FAFAF8]" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16 md:mb-20"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-xs font-semibold tracking-wider text-teal-700 uppercase bg-teal-50 rounded-full border border-teal-100"
          >
            <Sparkles className="w-3.5 h-3.5" />
            Transparent Pricing
          </motion.span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            Service Tracks & Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From professional portfolios to enterprise architecture — find the perfect starting point for your digital journey.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {serviceTiers.map((tier, index) => {
            const IconComponent = tier.icon
            const isHovered = hoveredIndex === index
            
            return (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative bg-white rounded-2xl p-6 lg:p-7 border transition-all duration-500 flex flex-col ${
                  tier.popular 
                    ? "border-teal-200 shadow-xl shadow-teal-100/50 scale-[1.02]" 
                    : "border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/50"
                } ${isHovered && !tier.popular ? "scale-[1.02]" : ""}`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <motion.span 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="px-4 py-1.5 bg-gradient-to-r from-teal-500 to-teal-600 text-white text-xs font-semibold rounded-full shadow-lg shadow-teal-500/30"
                    >
                      Most Popular
                    </motion.span>
                  </div>
                )}

                {/* Icon */}
                <motion.div 
                  className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-all duration-300 ${tier.accentBg}`}
                  animate={{ 
                    scale: isHovered ? 1.1 : 1,
                    rotate: isHovered ? 5 : 0
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <IconComponent 
                    className="w-7 h-7" 
                    style={{ color: tier.accentColor }}
                    strokeWidth={1.5}
                  />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {tier.headline}
                </h3>
                <p className="text-sm text-gray-500 mb-5">
                  {tier.subtitle}
                </p>

                {/* Price */}
                <div className="mb-5">
                  <span className="text-3xl font-bold text-gray-900">{tier.price}</span>
                  <span className="text-gray-500 text-sm ml-1.5">starting</span>
                </div>

                {/* Target */}
                <p className="text-sm text-gray-600 mb-6 pb-6 border-b border-gray-100 leading-relaxed">
                  {tier.target}
                </p>

                {/* Deliverables */}
                <ul className="space-y-3.5 mb-6 flex-grow">
                  {tier.deliverables.map((item, i) => (
                    <motion.li 
                      key={item} 
                      className="flex items-start gap-3 text-sm text-gray-600"
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.3 + index * 0.1 + i * 0.05 }}
                    >
                      <span 
                        className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ backgroundColor: `${tier.accentColor}15` }}
                      >
                        <Check 
                          className="w-3 h-3" 
                          style={{ color: tier.accentColor }}
                          strokeWidth={3}
                        />
                      </span>
                      {item}
                    </motion.li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6 pt-5 border-t border-gray-100">
                  {tier.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-gray-500 bg-gray-50 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={tier.ctaLink}
                  className={`w-full py-3.5 px-6 rounded-full font-medium text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 group/btn ${
                    tier.popular
                      ? "bg-gray-900 text-white hover:bg-gray-800 shadow-lg shadow-gray-900/10"
                      : "border border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="text-center text-gray-500 mt-14 text-sm"
        >
          Every plan is 100% customizable to your business needs.{" "}
          <Link href="/contact" className="text-teal-600 hover:text-teal-700 font-medium hover:underline transition-colors">
            Let&apos;s talk about your project
          </Link>
        </motion.p>
      </div>
    </section>
  )
}
