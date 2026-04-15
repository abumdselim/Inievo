"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Circle } from "lucide-react"

const milestones = [
  { name: "Discovery", status: "completed" },
  { name: "Design", status: "completed" },
  { name: "Development", status: "active" },
  { name: "Launch", status: "upcoming" },
]

export function ProjectHealth() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
      whileHover={{ 
        boxShadow: "0 0 40px rgba(13, 148, 136, 0.08)",
      }}
      className="bg-[#0F2035] rounded-2xl border border-[#1E3A5F] p-8 transition-all duration-500"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <h3 className="text-lg font-semibold text-white mb-1">Active Project</h3>
          <p className="text-[#0D9488] font-medium">Elite Professional Digital Presence</p>
        </div>
        <div className="text-right">
          <span className="text-3xl font-bold text-white">65%</span>
          <p className="text-sm text-gray-500">Complete</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="relative h-3 bg-[#1A2942] rounded-full overflow-hidden mb-10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "65%" }}
          transition={{ duration: 1.2, delay: 0.8, ease: "easeOut" }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#0D9488] to-[#14B8A6] rounded-full"
          style={{
            boxShadow: "0 0 20px rgba(13, 148, 136, 0.6), 0 0 40px rgba(13, 148, 136, 0.3)",
          }}
        />
      </div>

      {/* Milestone Timeline */}
      <div className="flex items-center justify-between">
        {milestones.map((milestone, index) => (
          <div key={milestone.name} className="flex flex-col items-center relative">
            {/* Connector Line */}
            {index < milestones.length - 1 && (
              <div className="absolute left-1/2 top-3 w-full h-0.5 bg-[#1E3A5F]">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: milestone.status === "completed" ? "100%" : "0%" }}
                  transition={{ duration: 0.5, delay: 1 + index * 0.2 }}
                  className="h-full bg-[#0D9488]"
                />
              </div>
            )}
            
            {/* Milestone Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.9 + index * 0.15, type: "spring", stiffness: 200 }}
              className="relative z-10 mb-3"
            >
              {milestone.status === "completed" ? (
                <CheckCircle2 className="w-7 h-7 text-[#0D9488]" />
              ) : milestone.status === "active" ? (
                <div className="relative">
                  <Circle className="w-7 h-7 text-[#0D9488]" />
                  <motion.div
                    animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-3 h-3 bg-[#0D9488] rounded-full shadow-lg shadow-[#0D9488]/50" />
                  </motion.div>
                </div>
              ) : (
                <Circle className="w-7 h-7 text-gray-600" />
              )}
            </motion.div>

            {/* Milestone Label */}
            <span className={`text-sm font-medium ${
              milestone.status === "completed" 
                ? "text-[#0D9488]" 
                : milestone.status === "active" 
                  ? "text-white" 
                  : "text-gray-500"
            }`}>
              {milestone.name}
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  )
}
