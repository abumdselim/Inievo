"use client"

import { useState } from "react"
import { motion } from "framer-motion"

const categories = [
  "All",
  "Engineering",
  "Brand Aesthetics",
  "Growth & SEO",
  "Case Studies",
]

interface CategoryFilterProps {
  onFilterChange?: (category: string) => void
}

export function CategoryFilter({ onFilterChange }: CategoryFilterProps) {
  const [activeCategory, setActiveCategory] = useState("All")

  const handleCategoryClick = (category: string) => {
    setActiveCategory(category)
    onFilterChange?.(category)
  }

  return (
    <div className="sticky top-20 z-40 bg-[#0A1628]/95 backdrop-blur-md border-y border-[#1E3A5F] py-4 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-teal-500 text-white"
                  : "bg-[#0F2035] text-gray-300 border border-[#1E3A5F] hover:border-teal-500/50 hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
