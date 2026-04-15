"use client"

import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const caseStudies = [
  {
    badge: "E-Commerce",
    badgeColor: "bg-[#F97316]/20 text-[#F97316]",
    title: "Dhaka Fashion Hub",
    challenge: "Running 30+ orders/day on Facebook with zero inventory system.",
    solution: "Custom e-commerce platform with bKash, automated inventory, and CRM.",
    results: [
      { label: "Load time", value: "1.8s", subtext: "from 9.2s" },
      { label: "Organic traffic", value: "+340%" },
      { label: "Monthly leads", value: "87" },
    ],
    stack: ["Next.js", "Tailwind", "PostgreSQL", "SSLCommerz"],
  },
  {
    badge: "Healthcare",
    badgeColor: "bg-[#0D9488]/20 text-[#0D9488]",
    title: "Dr. Nusrat Cardiology",
    challenge: "Losing international patients to competitors with strong Google presence.",
    solution: "Authority website with appointment booking and patient testimonials.",
    results: [
      { label: "Google ranking", value: "Page 1", subtext: "'Cardiologist Dhaka'" },
      { label: "Monthly bookings", value: "45+" },
    ],
    stack: ["Next.js", "Tailwind", "Prisma"],
  },
]

export function PortfolioSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Built. Launched. Measured.
          </h2>
          <p className="text-gray-400 text-lg md:text-xl">
            Real projects for real businesses — with real results.
          </p>
        </motion.div>

        {/* Case Study Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="group relative"
            >
              <div className="relative bg-[#0F2035] border border-[#1E3A5F] rounded-2xl p-6 md:p-8 transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-[#0D9488]/5">
                {/* Badge */}
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${study.badgeColor}`}>
                  {study.badge}
                </span>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mt-4 mb-6">
                  {study.title}
                </h3>

                {/* Challenge & Solution */}
                <div className="space-y-4 mb-6">
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Challenge</span>
                    <p className="text-gray-400 mt-1">{study.challenge}</p>
                  </div>
                  <div>
                    <span className="text-xs uppercase tracking-wider text-gray-500 font-medium">Solution</span>
                    <p className="text-gray-400 mt-1">{study.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div className="flex flex-wrap gap-4 mb-6 pb-6 border-b border-[#1E3A5F]">
                  {study.results.map((result) => (
                    <div key={result.label} className="flex-1 min-w-[100px]">
                      <p className="text-2xl font-bold text-[#0D9488]">{result.value}</p>
                      <p className="text-xs text-gray-500">
                        {result.label}
                        {result.subtext && <span className="block text-gray-600">{result.subtext}</span>}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {study.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium text-gray-400 bg-[#0A1628] border border-[#1E3A5F] rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Live CTA - appears on hover */}
                <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  <button className="flex items-center gap-1.5 px-4 py-2 text-sm font-medium text-[#0D9488] border border-[#0D9488]/50 rounded-full hover:bg-[#0D9488]/10 transition-colors">
                    View Live
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
