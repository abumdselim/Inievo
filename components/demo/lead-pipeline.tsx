"use client"

import { motion } from "framer-motion"

const pipelineStages = [
  { name: "New", count: 12, color: "bg-blue-500", width: "100%" },
  { name: "Qualified", count: 5, color: "bg-[#0D9488]", width: "42%" },
  { name: "Closed-Won", count: 2, color: "bg-emerald-500", width: "17%" },
]

export function LeadPipeline() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.8, duration: 0.5, ease: "easeOut" }}
      className="bg-[#0F2035] border border-[#1E3A5F] rounded-xl p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Lead Pipeline</h3>
        <p className="text-sm text-gray-400 mt-1">Conversion funnel overview</p>
      </div>

      <div className="space-y-5">
        {pipelineStages.map((stage, index) => (
          <motion.div
            key={stage.name}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1, duration: 0.3 }}
            className="space-y-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-gray-400">{stage.name}</span>
              <span className="text-lg font-bold text-white">{stage.count}</span>
            </div>
            <div className="h-3 bg-[#1A2942] rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: stage.width }}
                transition={{ delay: 1 + index * 0.15, duration: 0.8, ease: "easeOut" }}
                className={`h-full ${stage.color} rounded-full`}
              />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-[#1E3A5F]">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-400">Conversion Rate</span>
          <span className="text-lg font-bold text-[#0D9488]">16.7%</span>
        </div>
      </div>
    </motion.div>
  )
}
