"use client"

import { motion } from "framer-motion"
import { Layers, Code2, ShieldCheck } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Not Templates. Blueprints.",
    description: "These are production-tested architectures, not generic themes.",
    accentColor: "orange"
  },
  {
    icon: Code2,
    title: "The Stack You Actually Want",
    description: "Next.js 14, Tailwind, Prisma, bKash integration.",
    accentColor: "teal"
  },
  {
    icon: ShieldCheck,
    title: "Lifetime Access + Free Updates",
    description: "Buy once, get 12 months of updates and support.",
    accentColor: "teal"
  }
]

export function WhyBuy() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-white text-center mb-12"
        >
          Why Buy From Inievo?
        </motion.h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon with glow */}
              <div className="relative inline-flex mb-6">
                <div 
                  className={`absolute inset-0 blur-xl opacity-40 ${
                    feature.accentColor === "orange" 
                      ? "bg-orange-500" 
                      : "bg-teal-500"
                  }`} 
                />
                <div 
                  className={`relative p-4 rounded-2xl ${
                    feature.accentColor === "orange"
                      ? "bg-gradient-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/30"
                      : "bg-gradient-to-br from-teal-500/20 to-teal-600/10 border border-teal-500/30"
                  }`}
                >
                  <feature.icon 
                    className={`w-8 h-8 ${
                      feature.accentColor === "orange" 
                        ? "text-orange-400" 
                        : "text-teal-400"
                    }`} 
                  />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
