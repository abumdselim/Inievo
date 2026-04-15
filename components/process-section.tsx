"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Calendar, FileText, PenTool, Code, Rocket, ChevronDown, Check } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Discovery",
    shortTitle: "Discovery Call",
    description: "15-minute call to understand your business, goals, and constraints. No obligation.",
    details: [
      "Understand your business model and target audience",
      "Identify key pain points and opportunities",
      "Discuss timeline and budget expectations",
      "Answer all your questions about the process"
    ],
    icon: Calendar,
    color: "#0D9488"
  },
  {
    number: "02",
    title: "Strategy Brief",
    shortTitle: "Strategy & Scope",
    description: "Written scope document: approach, timeline, deliverables, and exact investment.",
    details: [
      "Detailed project roadmap and milestones",
      "Technical architecture recommendations",
      "Fixed pricing with no hidden costs",
      "Clear deliverables and success metrics"
    ],
    icon: FileText,
    color: "#6366F1"
  },
  {
    number: "03",
    title: "Design & Architecture",
    shortTitle: "Design Phase",
    description: "Figma prototypes and brand system. You approve every screen before code is written.",
    details: [
      "High-fidelity Figma prototypes",
      "Complete brand system and style guide",
      "Mobile-first responsive layouts",
      "Unlimited revisions until you're satisfied"
    ],
    icon: PenTool,
    color: "#EC4899"
  },
  {
    number: "04",
    title: "Build & QA",
    shortTitle: "Development",
    description: "Milestone-based development with weekly progress updates on your private dashboard.",
    details: [
      "Modern tech stack (Next.js, Tailwind, etc.)",
      "Weekly video updates and live previews",
      "Rigorous testing and quality assurance",
      "Performance optimization built-in"
    ],
    icon: Code,
    color: "#F97316"
  },
  {
    number: "05",
    title: "Launch & Grow",
    shortTitle: "Launch",
    description: "Zero-downtime go-live. Post-launch optimization and ongoing growth retainer.",
    details: [
      "Seamless deployment to production",
      "30-day post-launch support included",
      "Analytics and performance monitoring",
      "Optional ongoing growth partnership"
    ],
    icon: Rocket,
    color: "#10B981"
  },
]

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })
  const [openStep, setOpenStep] = useState<number | null>(0)

  return (
    <section id="process" className="py-24 md:py-32 bg-white" ref={containerRef}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 rounded-full">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-5 tracking-tight">
            From First Call to Launch in Five Steps
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We don&apos;t guess. Every project follows a structured process — so you always know what&apos;s happening, what&apos;s next, and what it costs.
          </p>
        </motion.div>

        {/* Accordion Steps */}
        <div className="space-y-3">
          {steps.map((step, index) => {
            const Icon = step.icon
            const isOpen = openStep === index
            
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.08,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <div 
                  className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${
                    isOpen 
                      ? "border-slate-200 shadow-lg shadow-slate-100" 
                      : "border-slate-100 hover:border-slate-200 hover:shadow-md hover:shadow-slate-50"
                  }`}
                >
                  {/* Header */}
                  <button
                    onClick={() => setOpenStep(isOpen ? null : index)}
                    className="w-full flex items-center gap-4 md:gap-6 p-5 md:p-6 text-left"
                  >
                    {/* Icon */}
                    <div 
                      className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{ 
                        backgroundColor: `${step.color}10`,
                      }}
                    >
                      <Icon 
                        className="w-5 h-5 md:w-6 md:h-6 transition-transform duration-300" 
                        style={{ color: step.color }}
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Title & Description */}
                    <div className="flex-grow min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span 
                          className="text-xs font-semibold tracking-wider uppercase"
                          style={{ color: step.color }}
                        >
                          Step {step.number}
                        </span>
                      </div>
                      <h3 className="text-lg md:text-xl font-semibold text-slate-900">
                        {step.title}
                      </h3>
                      <p className="text-sm text-slate-500 mt-1 hidden md:block">
                        {step.description}
                      </p>
                    </div>

                    {/* Chevron */}
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex-shrink-0"
                    >
                      <ChevronDown className="w-5 h-5 text-slate-400" />
                    </motion.div>
                  </button>

                  {/* Expanded Content */}
                  <motion.div
                    initial={false}
                    animate={{ 
                      height: isOpen ? "auto" : 0,
                      opacity: isOpen ? 1 : 0 
                    }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 md:px-6 pb-6 pt-0">
                      <div className="pl-16 md:pl-20 border-t border-slate-100 pt-4">
                        <p className="text-slate-600 mb-4 md:hidden">
                          {step.description}
                        </p>
                        <ul className="space-y-3">
                          {step.details.map((detail, i) => (
                            <motion.li
                              key={i}
                              initial={{ opacity: 0, x: -10 }}
                              animate={isOpen ? { opacity: 1, x: 0 } : {}}
                              transition={{ delay: i * 0.05 }}
                              className="flex items-start gap-3 text-sm text-slate-600"
                            >
                              <Check 
                                className="w-4 h-4 mt-0.5 flex-shrink-0" 
                                style={{ color: step.color }}
                              />
                              {detail}
                            </motion.li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
