"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { ArrowUpRight, TrendingUp, Clock, Users } from "lucide-react"
import Link from "next/link"

const caseStudies = [
  {
    badge: "E-Commerce",
    badgeColor: "bg-orange-50 text-orange-600",
    title: "Dhaka Fashion Hub",
    subtitle: "From Facebook chaos to automated e-commerce powerhouse",
    image: "/images/portfolio-fashion.jpg",
    challenge: "Running 30+ orders/day on Facebook with zero inventory system, losing sales to stock confusion.",
    results: [
      { icon: Clock, value: "1.8s", label: "Load time", sublabel: "from 9.2s" },
      { icon: TrendingUp, value: "+340%", label: "Organic traffic" },
      { icon: Users, value: "87", label: "Monthly leads" },
    ],
    stack: ["Next.js", "PostgreSQL", "bKash API", "Vercel"],
    link: "#"
  },
  {
    badge: "Healthcare",
    badgeColor: "bg-teal-50 text-teal-600",
    title: "Dr. Nusrat Cardiology",
    subtitle: "Invisible on Google to Page 1 authority in 4 months",
    image: "/images/portfolio-doctor.jpg",
    challenge: "Losing international patients to competitors with stronger Google presence and credibility.",
    results: [
      { icon: TrendingUp, value: "Page 1", label: "Google ranking", sublabel: "'Cardiologist Dhaka'" },
      { icon: Users, value: "45+", label: "Monthly bookings" },
    ],
    stack: ["Next.js", "Prisma", "Tailwind", "Vercel"],
    link: "#"
  },
]

export function PortfolioSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-slate-50" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 rounded-full border border-teal-100">
            Case Studies
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            Built. Launched. Measured.
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Real projects for real businesses — with real results.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid lg:grid-cols-2 gap-6">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200/80 hover:border-slate-300 transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50"
            >
              {/* Image Area */}
              <div className="relative h-48 md:h-56 bg-slate-100 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-200/50 to-slate-100" />
                {/* Placeholder Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: `radial-gradient(circle at 2px 2px, #94a3b8 1px, transparent 0)`,
                    backgroundSize: '24px 24px'
                  }} />
                </div>
                {/* Badge */}
                <span className={`absolute top-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold ${study.badgeColor}`}>
                  {study.badge}
                </span>
                {/* Hover Arrow */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileHover={{ opacity: 1, scale: 1 }}
                  className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg"
                >
                  <ArrowUpRight className="w-5 h-5 text-slate-700" />
                </motion.div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                {/* Title */}
                <h3 className="text-2xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                  {study.title}
                </h3>
                <p className="text-slate-600 mb-6">
                  {study.subtitle}
                </p>

                {/* Challenge */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">The Challenge</span>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                    {study.challenge}
                  </p>
                </div>

                {/* Results */}
                <div className="flex flex-wrap gap-6 mb-6">
                  {study.results.map((result) => {
                    const Icon = result.icon
                    return (
                      <div key={result.label} className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-teal-50 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-4 h-4 text-teal-600" />
                        </div>
                        <div>
                          <p className="text-xl font-bold text-slate-900">{result.value}</p>
                          <p className="text-xs text-slate-500">
                            {result.label}
                            {result.sublabel && <span className="block text-slate-400">{result.sublabel}</span>}
                          </p>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Stack */}
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-slate-500 bg-slate-50 border border-slate-100 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <Link
            href="/portfolio"
            className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 rounded-full hover:border-slate-300 hover:shadow-md transition-all duration-300 bg-white"
          >
            View All Case Studies
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
