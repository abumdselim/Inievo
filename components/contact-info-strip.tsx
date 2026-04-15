"use client"

import { motion } from "framer-motion"
import { Mail, MessageCircle, Phone } from "lucide-react"

export function ContactInfoStrip() {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@inievo.com",
      href: "mailto:hello@inievo.com",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+880 1410-177888",
      href: "https://wa.me/8801410177888",
      color: "bg-orange-100 text-orange-600",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 9678-791213",
      href: "tel:+8809678791213",
      color: "bg-orange-100 text-orange-600",
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div>
        <h2 className="text-2xl font-bold text-slate-900 mb-8">Get in Touch</h2>
        <p className="text-slate-600 leading-relaxed">
          We're here to help. Reach out to us through any of the channels below, and we'll get back to you as quickly as possible.
        </p>
      </div>

      <div className="space-y-4">
        {contactMethods.map((method, index) => {
          const Icon = method.icon
          return (
            <motion.a
              key={method.label}
              href={method.href}
              target={method.label === "WhatsApp" ? "_blank" : undefined}
              rel={method.label === "WhatsApp" ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-300 group"
            >
              <div className={`${method.color} p-3 rounded-lg group-hover:scale-110 transition-transform`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-slate-500 mb-1">{method.label}</p>
                <p className="text-slate-900 font-medium truncate">{method.value}</p>
              </div>
              <svg
                className="w-5 h-5 text-slate-400 group-hover:text-orange-600 transition-colors flex-shrink-0"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.a>
          )
        })}
      </div>

      {/* Office Address - Optional Section */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 pt-8 border-t border-slate-200"
      >
        <h3 className="font-semibold text-slate-900 mb-3">Office Hours</h3>
        <ul className="space-y-2 text-sm text-slate-600">
          <li className="flex justify-between">
            <span>Monday - Friday</span>
            <span className="font-medium text-slate-900">9:00 AM - 6:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Saturday</span>
            <span className="font-medium text-slate-900">10:00 AM - 4:00 PM</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span className="font-medium text-slate-900">Closed</span>
          </li>
        </ul>
      </motion.div>
    </motion.div>
  )
}
