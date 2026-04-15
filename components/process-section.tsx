"use client"

import { motion } from "framer-motion"
import { Calendar, FileText, PenTool, Code, Rocket } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "15-minute call to understand your business, goals, and constraints. No obligation.",
    icon: Calendar,
  },
  {
    number: "02",
    title: "Strategy Brief",
    description: "Written scope document: approach, timeline, deliverables, and exact investment.",
    icon: FileText,
  },
  {
    number: "03",
    title: "Design & Architecture",
    description: "Figma prototypes and brand system. You approve every screen before code is written.",
    icon: PenTool,
  },
  {
    number: "04",
    title: "Build & QA",
    description: "Milestone-based development with weekly progress updates on your private dashboard.",
    icon: Code,
  },
  {
    number: "05",
    title: "Launch & Grow",
    description: "Zero-downtime go-live. Post-launch optimization and ongoing growth retainer.",
    icon: Rocket,
  },
]

export function ProcessSection() {
  return (
    <section className="py-24 md:py-32 bg-[#0A1628]">
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-balance">
            From First Call to Launch in Five Steps
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto text-pretty">
            We don&apos;t guess. Every project follows a structured process — so you always know what&apos;s happening, what&apos;s next, and what it costs.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical dashed line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px border-l-2 border-dashed border-[#1E3A5F] md:-translate-x-px" />

          {/* Steps */}
          <div className="space-y-12 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex items-start gap-6 md:gap-0 ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"}`}>
                    <div className={`${isEven ? "md:ml-auto" : ""} max-w-md`}>
                      <span className="text-[#0D9488] font-mono text-sm font-medium">
                        Step {step.number}
                      </span>
                      <h3 className="text-xl md:text-2xl font-semibold text-white mt-1 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Node - Mobile */}
                  <div className="absolute left-0 md:hidden flex items-center justify-center">
                    <div className="relative">
                      {/* Glow */}
                      <div className="absolute inset-0 bg-[#0D9488] rounded-full blur-md opacity-40" />
                      {/* Icon container */}
                      <div className="relative w-12 h-12 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/50 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#0D9488]" />
                      </div>
                    </div>
                  </div>

                  {/* Node - Desktop */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center justify-center">
                    <div className="relative">
                      {/* Glow */}
                      <div className="absolute inset-0 bg-[#0D9488] rounded-full blur-md opacity-40" />
                      {/* Icon container */}
                      <div className="relative w-14 h-14 rounded-full bg-[#0D9488]/20 border border-[#0D9488]/50 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#0D9488]" />
                      </div>
                    </div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1 md:w-1/2" />
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
