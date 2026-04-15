"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { AlertCircle, Clock, TrendingDown, RefreshCw } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Wasted Time",
    description: "Months spent chasing freelancers who ghost mid-project"
  },
  {
    icon: TrendingDown,
    title: "Lost Revenue",
    description: "Slow, broken sites driving customers to competitors"
  },
  {
    icon: RefreshCw,
    title: "Endless Rebuilds",
    description: "Paying twice to fix what should have been done right"
  },
  {
    icon: AlertCircle,
    title: "Zero Growth",
    description: "Beautiful sites that generate zero leads or sales"
  }
]

export function ProblemSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="py-16 md:py-24 bg-slate-50" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-orange-600 uppercase bg-orange-50 rounded-full">
            Sound Familiar?
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight text-balance">
            The Bangladeshi Business Web Problem
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto text-pretty">
            You&apos;ve seen it happen. Maybe it happened to you.
          </p>
        </motion.div>

        {/* Problem Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {problems.map((problem, index) => {
            const Icon = problem.icon
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.5, 
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-6 border border-slate-200/80 transition-all duration-300 hover:shadow-lg hover:shadow-slate-200/50 hover:-translate-y-1 hover:border-orange-200/50 h-full">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center mb-4 transition-colors duration-300 group-hover:bg-orange-100">
                    <Icon className="w-6 h-6 text-orange-500" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Bottom Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 text-center"
        >
          <p className="text-slate-600 text-lg">
            It doesn&apos;t have to be this way.{" "}
            <span className="text-teal-600 font-medium">There&apos;s a better path.</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
