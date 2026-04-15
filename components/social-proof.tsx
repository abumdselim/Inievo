"use client"

import { motion } from "framer-motion"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut",
      delay: 1.2,
    },
  },
}

// Generic company logo placeholders
const companyLogos = [
  { name: "Company 1", initials: "HC" },
  { name: "Company 2", initials: "EC" },
  { name: "Company 3", initials: "RE" },
  { name: "Company 4", initials: "MD" },
  { name: "Company 5", initials: "FT" },
]

export function SocialProof() {
  return (
    <motion.section
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 py-16 border-t border-[#1E3A5F]/30"
    >
      <div className="mx-auto max-w-5xl px-6 text-center">
        {/* Trust Text */}
        <p className="text-sm text-gray-400 mb-8">
          Trusted by 15+ businesses across healthcare, e-commerce, and real estate in Bangladesh.
        </p>

        {/* Logo Row */}
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {companyLogos.map((company, index) => (
            <div
              key={index}
              className="flex items-center justify-center w-16 h-10 opacity-50 grayscale"
            >
              <div className="flex items-center justify-center w-full h-full rounded bg-[#1A2942]/50 text-gray-500 text-sm font-medium tracking-wider">
                {company.initials}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
