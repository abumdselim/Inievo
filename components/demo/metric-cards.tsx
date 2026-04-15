"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { TrendingUp, Check, Users, FolderKanban, Target, DollarSign } from "lucide-react"

interface MetricCardProps {
  title: string
  value: string | number
  prefix?: string
  suffix?: string
  trend?: string
  trendPositive?: boolean
  icon: React.ReactNode
  delay?: number
  animateValue?: number
}

function MetricCard({ title, value, prefix = "", suffix = "", trend, trendPositive = true, icon, delay = 0, animateValue }: MetricCardProps) {
  const [displayValue, setDisplayValue] = useState(0)

  useEffect(() => {
    if (animateValue === undefined) return
    
    const duration = 2000
    const steps = 60
    const stepValue = animateValue / steps
    let current = 0
    
    const timer = setInterval(() => {
      current += stepValue
      if (current >= animateValue) {
        setDisplayValue(animateValue)
        clearInterval(timer)
      } else {
        setDisplayValue(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [animateValue])

  const formattedValue = animateValue !== undefined 
    ? `${prefix}${displayValue.toLocaleString()}${suffix}`
    : `${prefix}${value}${suffix}`

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ scale: 1.01, boxShadow: "0 0 30px rgba(13, 148, 136, 0.1)" }}
      className="bg-[#0F2035] border border-[#1E3A5F] rounded-xl p-6 transition-all duration-300"
    >
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-400">{title}</p>
          <p className="mt-2 text-3xl font-bold text-white tracking-tight">{formattedValue}</p>
          {trend && (
            <div className="mt-2 flex items-center gap-1">
              {trendPositive ? (
                <>
                  <TrendingUp className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">{trend}</span>
                </>
              ) : (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-sm font-medium text-emerald-400">{trend}</span>
                </>
              )}
            </div>
          )}
        </div>
        <div className="p-3 bg-[#1A2942] rounded-lg text-[#0D9488]">
          {icon}
        </div>
      </div>
    </motion.div>
  )
}

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <MetricCard
        title="Monthly Visitors"
        value="12,400"
        animateValue={12400}
        trend="+34%"
        icon={<Users className="w-5 h-5" />}
        delay={0.1}
      />
      <MetricCard
        title="Active Projects"
        value="4"
        animateValue={4}
        trend="On Track"
        trendPositive={false}
        icon={<FolderKanban className="w-5 h-5" />}
        delay={0.2}
      />
      <MetricCard
        title="Leads This Month"
        value="87"
        animateValue={87}
        trend="+22%"
        icon={<Target className="w-5 h-5" />}
        delay={0.3}
      />
      <MetricCard
        title="Revenue (MRR)"
        value="5.1L"
        prefix="BDT "
        animateValue={510000}
        trend="+18%"
        icon={<DollarSign className="w-5 h-5" />}
        delay={0.4}
      />
    </div>
  )
}
