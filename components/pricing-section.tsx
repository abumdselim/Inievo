"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Award, Building2, ShoppingCart, Layers, Check, ArrowRight } from "lucide-react"
import Link from "next/link"

const serviceTiers = [
  {
    name: "Essential",
    headline: "Essential",
    subtitle: "Professional Portfolio",
    price: "BDT 10,000",
    accentColor: "#64748B",
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

  return (
    <section id="services" className="py-16 md:py-24 bg-slate-50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 rounded-full border border-teal-100">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight text-balance">
            Service Tracks & Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            From professional portfolios to enterprise architecture — find the perfect starting point for your digital journey.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
          {serviceTiers.map((tier, index) => {
            const IconComponent = tier.icon
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
                className={`group relative bg-white rounded-2xl p-6 border transition-all duration-300 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 flex flex-col ${
                  tier.popular 
                    ? "border-teal-200 shadow-lg shadow-teal-100/50" 
                    : "border-slate-200 hover:border-slate-300"
                }`}
              >
                {/* Popular Badge */}
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-3 py-1 bg-teal-500 text-white text-xs font-semibold rounded-full shadow-lg shadow-teal-500/25">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${tier.accentColor}10` }}
                >
                  <IconComponent 
                    className="w-6 h-6" 
                    style={{ color: tier.accentColor }}
                    strokeWidth={1.5}
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-slate-900 mb-1">
                  {tier.headline}
                </h3>
                <p className="text-sm text-slate-500 mb-4">
                  {tier.subtitle}
                </p>

                {/* Price */}
                <div className="mb-4">
                  <span className="text-3xl font-bold text-slate-900">{tier.price}</span>
                  <span className="text-slate-500 text-sm ml-1">starting</span>
                </div>

                {/* Target */}
                <p className="text-sm text-slate-600 mb-6 pb-6 border-b border-slate-100">
                  {tier.target}
                </p>

                {/* Deliverables */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {tier.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm text-slate-600">
                      <Check 
                        className="w-4 h-4 mt-0.5 flex-shrink-0" 
                        style={{ color: tier.accentColor }}
                      />
                      {item}
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-1.5 mb-6 pt-4 border-t border-slate-100">
                  {tier.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-medium text-slate-500 bg-slate-50 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href={tier.ctaLink}
                  className={`w-full py-3 px-6 rounded-full font-medium text-sm text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.popular
                      ? "bg-teal-600 text-white hover:bg-teal-700 shadow-lg shadow-teal-500/25"
                      : "border border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {tier.cta}
                  <ArrowRight className="w-4 h-4" />
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
          className="text-center text-slate-500 mt-12 text-sm"
        >
          Every plan is 100% customizable to your business needs.{" "}
          <Link href="/contact" className="text-teal-600 hover:underline">
            Let&apos;s talk about your project
          </Link>
        </motion.p>
      </div>
    </section>
  )
}
