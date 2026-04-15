"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { HelpCircle, ArrowRight } from "lucide-react"

export function DashboardTopbar() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-8"
    >
      {/* Title with Demo Indicator */}
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-semibold text-slate-900">Admin Dashboard Demo</h1>
        <motion.span
          animate={{
            borderColor: ["#E2E8F0", "#0D9488", "#E2E8F0"],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="px-2 py-0.5 text-xs font-medium text-teal-600 border border-dashed rounded"
        >
          Preview Mode
        </motion.span>
      </div>

      {/* Right Actions */}
      <div className="flex items-center gap-4">
        <button className="flex items-center gap-2 px-3 py-2 text-sm text-slate-600 hover:text-slate-900 transition-colors duration-200">
          <HelpCircle className="w-4 h-4" />
          <span className="hidden sm:inline">Help</span>
        </button>
        <Link
          href="/"
          className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all duration-200"
        >
          Exit Demo
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </motion.header>
  )
}
