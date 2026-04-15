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
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
      className="bg-white rounded-lg border border-slate-200 p-7 transition-all duration-500 h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Recent Deliverables</h3>
        <button className="text-sm text-teal-600 hover:text-teal-700 transition-colors">
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
              className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                asset.type === "pdf" 
                  ? "bg-red-100 text-red-600" 
                  : "bg-blue-100 text-blue-600"
              }`}>
                <Icon className="w-5 h-5" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-slate-900 truncate">{asset.name}</p>
                <span className={`text-xs ${asset.statusColor}`}>{asset.status}</span>
              </div>

              {/* Action Button */}
              <button className="flex items-center gap-2 px-4 py-2 text-xs font-medium text-slate-600 bg-white border border-slate-200 hover:bg-teal-600 hover:text-white hover:border-teal-600 rounded-lg transition-all duration-300 opacity-70 group-hover:opacity-100">
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
