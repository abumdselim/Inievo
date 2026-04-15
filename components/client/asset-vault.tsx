"use client"

import { motion } from "framer-motion"
import { FileText, ExternalLink, Download, Eye } from "lucide-react"

const assets = [
  {
    name: "Brand_Guidelines_v2.pdf",
    type: "pdf",
    status: "Delivered",
    statusColor: "text-[#0D9488]",
    action: "Download",
    icon: FileText,
  },
  {
    name: "Homepage_Figma_Preview.link",
    type: "link",
    status: "Approved",
    statusColor: "text-green-400",
    action: "View",
    icon: ExternalLink,
  },
]

export function AssetVault() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
      whileHover={{ 
        boxShadow: "0 0 40px rgba(13, 148, 136, 0.08)",
      }}
      className="bg-[#0F2035] rounded-2xl border border-[#1E3A5F] p-7 transition-all duration-500 h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-white">Recent Deliverables</h3>
        <button className="text-sm text-[#0D9488] hover:text-[#14B8A6] transition-colors">
          View All
        </button>
      </div>

      {/* Asset List */}
      <div className="space-y-4">
        {assets.map((asset, index) => {
          const Icon = asset.icon
          return (
            <motion.div
              key={asset.name}
              initial={{ opacity: 0, x: -15 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
              className="flex items-center gap-4 p-4 bg-[#0A1628] rounded-xl border border-[#1E3A5F] hover:border-[#0D9488]/30 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                asset.type === "pdf" 
                  ? "bg-red-500/10 text-red-400" 
                  : "bg-blue-500/10 text-blue-400"
              }`}>
                <Icon className="w-5 h-5" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{asset.name}</p>
                <span className={`text-xs ${asset.statusColor}`}>{asset.status}</span>
              </div>

              {/* Action Button */}
              <button className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-gray-400 bg-[#1A2942] hover:bg-[#0D9488] hover:text-white rounded-lg transition-all duration-300 opacity-70 group-hover:opacity-100">
                {asset.action === "Download" ? (
                  <Download className="w-3.5 h-3.5" />
                ) : (
                  <Eye className="w-3.5 h-3.5" />
                )}
                {asset.action}
              </button>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
