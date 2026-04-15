"use client"

import { motion } from "framer-motion"
import { Bell, Calendar } from "lucide-react"

import { LogoutButton } from "@/components/client/logout-button"
import { useClientUser } from "@/hooks/use-client-user"

export function ClientTopbar() {
  const { user } = useClientUser()
  const displayName = user?.name || "Client"

  return (
    <motion.header
      initial={{ opacity: 0, y: -15, filter: "blur(10px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
      className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-6 md:px-10"
    >
      {/* Welcome Message */}
      <div>
        <motion.h1 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="text-2xl font-semibold text-slate-900"
        >
          Welcome back, <span className="text-teal-600">{displayName}</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="text-sm text-slate-500 mt-1"
        >
          Here&apos;s an overview of your project progress
        </motion.p>
      </div>

      {/* Right Actions */}
      <motion.div 
        initial={{ opacity: 0, x: 10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="flex items-center gap-3 sm:gap-5"
      >
        {/* Notification Bell */}
        <button className="relative p-3 rounded-lg bg-slate-100 hover:bg-slate-200 transition-all duration-300 group">
          <Bell className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" />
          {/* Teal Notification Dot */}
          <span className="absolute top-2.5 right-2.5 w-2.5 h-2.5 bg-teal-600 rounded-full animate-pulse shadow-lg shadow-teal-600/50"></span>
        </button>

        <LogoutButton
          className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition-colors hover:border-slate-300 hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-60"
          showLabel={false}
        />

        {/* Book Check-in Call Button */}
        <button className="hidden sm:flex items-center gap-2.5 px-5 py-3 text-sm font-medium text-teal-600 border border-teal-600 hover:bg-teal-600 hover:text-white rounded-lg transition-all duration-300 shadow-lg shadow-teal-600/10 hover:shadow-teal-600/30">
          <Calendar className="w-4 h-4" />
          Book a Check-in Call
        </button>
      </motion.div>
    </motion.header>
  )
}
