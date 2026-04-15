"use client"

import { motion } from "framer-motion"
import { FileText } from "lucide-react"

const invoices = [
  { 
    id: "INV-042", 
    client: "Dhaka Fashion Hub", 
    amount: "BDT 45,000",
    status: "Paid", 
    statusColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
  },
  { 
    id: "INV-043", 
    client: "Dr. Nusrat Cardiology", 
    amount: "BDT 75,000",
    status: "Due", 
    statusColor: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20"
  },
  { 
    id: "INV-044", 
    client: "Kamal Furniture", 
    amount: "BDT 32,000",
    status: "Overdue", 
    statusColor: "bg-red-500/10 text-red-400 border-red-500/20"
  },
]

export function RecentInvoices() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
      className="bg-white border border-slate-200 rounded-lg p-6"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Recent Invoices</h3>
        <p className="text-sm text-slate-500 mt-1">Latest billing activity</p>
      </div>

      <div className="space-y-4">
        {invoices.map((invoice, index) => (
          <motion.div
            key={invoice.id}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + index * 0.1, duration: 0.3 }}
            whileHover={{ scale: 1.01, backgroundColor: "#F8FAFC" }}
            className="flex items-center gap-4 p-4 rounded-lg border border-slate-200 transition-all cursor-pointer"
          >
            <div className="p-2 bg-teal-50 rounded-lg">
              <FileText className="w-4 h-4 text-teal-600" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-900">{invoice.id}</p>
              <p className="text-xs text-slate-500 truncate">{invoice.client}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">{invoice.amount}</p>
              <span className={`inline-flex px-2 py-0.5 text-xs font-medium rounded border ${invoice.statusColor}`}>
                {invoice.status}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
