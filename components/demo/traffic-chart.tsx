"use client"

import { motion } from "framer-motion"
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const trafficData = [
  { day: "1", visitors: 320 },
  { day: "2", visitors: 280 },
  { day: "3", visitors: 450 },
  { day: "4", visitors: 520 },
  { day: "5", visitors: 380 },
  { day: "6", visitors: 290 },
  { day: "7", visitors: 420 },
  { day: "8", visitors: 580 },
  { day: "9", visitors: 620 },
  { day: "10", visitors: 540 },
  { day: "11", visitors: 480 },
  { day: "12", visitors: 520 },
  { day: "13", visitors: 650 },
  { day: "14", visitors: 720 },
  { day: "15", visitors: 680 },
  { day: "16", visitors: 590 },
  { day: "17", visitors: 540 },
  { day: "18", visitors: 620 },
  { day: "19", visitors: 780 },
  { day: "20", visitors: 850 },
  { day: "21", visitors: 920 },
  { day: "22", visitors: 880 },
  { day: "23", visitors: 820 },
  { day: "24", visitors: 760 },
  { day: "25", visitors: 890 },
  { day: "26", visitors: 950 },
  { day: "27", visitors: 1020 },
  { day: "28", visitors: 980 },
  { day: "29", visitors: 1100 },
  { day: "30", visitors: 1240 },
]

export function TrafficChart() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, ease: "easeOut" }}
      className="bg-white border border-slate-200 rounded-lg p-6 lg:col-span-2"
    >
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-slate-900">Traffic Overview</h3>
          <p className="text-sm text-slate-500 mt-1">Last 30 days visitor traffic</p>
        </div>
        <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 rounded-full">
          <div className="w-2 h-2 rounded-full bg-green-600" />
          <span className="text-sm font-medium text-green-600">+287% growth</span>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="tealGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0D9488" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#0D9488" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis 
              dataKey="day" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748B', fontSize: 12 }}
              tickFormatter={(value) => value % 5 === 0 ? value : ''}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: '#64748B', fontSize: 12 }}
              width={40}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0',
                borderRadius: '8px',
                color: '#0F172A',
              }}
              labelStyle={{ color: '#64748B' }}
            />
            <Area
              type="monotone"
              dataKey="visitors"
              stroke="#0D9488"
              strokeWidth={2}
              fill="url(#tealGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  )
}
