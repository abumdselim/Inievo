"use client"

import { motion } from "framer-motion"
import { Receipt, CreditCard } from "lucide-react"

const invoices = [
  {
    id: "INV-042",
    description: "Setup Fee",
    status: "Paid",
    statusColor: "bg-green-500/20 text-green-400",
    amount: null,
    showPayButton: false,
  },
  {
    id: "INV-043",
    description: "Monthly Retainer",
    status: "Due in 3 days",
    statusColor: "bg-yellow-500/20 text-yellow-400",
    amount: "BDT 25,000",
    showPayButton: true,
  },
]

export function ClientInvoices() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(15px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: 0.65, ease: "easeOut" }}
      whileHover={{ 
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.05)",
      }}
      className="bg-white rounded-lg border border-slate-200 p-7 transition-all duration-500 h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Financial Overview</h3>
        <button className="text-sm text-teal-600 hover:text-teal-700 transition-colors">
          View All
        </button>
      </div>

      {/* Invoice List */}
      <div className="space-y-4">
        {invoices.map((invoice, index) => (
          <motion.div
            key={invoice.id}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
            className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-slate-300 transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-lg bg-slate-200 flex items-center justify-center text-slate-600">
              <Receipt className="w-5 h-5" />
            </div>

            {/* Info */}
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <p className="text-sm font-medium text-slate-900">{invoice.id}</p>
                <span className="text-xs text-slate-500">({invoice.description})</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-2 py-0.5 rounded-md text-xs font-medium ${invoice.statusColor}`}>
                  {invoice.status}
                </span>
                {invoice.amount && (
                  <span className="text-sm font-semibold text-slate-900">{invoice.amount}</span>
                )}
              </div>
            </div>

            {/* Pay Button */}
            {invoice.showPayButton && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center gap-2 px-5 py-2.5 text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 rounded-lg transition-all duration-300 shadow-lg shadow-teal-600/20"
              >
                <CreditCard className="w-4 h-4" />
                Pay Now
              </motion.button>
            )}
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
