"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  LayoutDashboard,
  FolderKanban,
  Archive,
  FileText,
  HeadphonesIcon,
  Settings,
} from "lucide-react"

const sidebarLinks = [
  { name: "Overview", href: "/client", icon: LayoutDashboard, active: true },
  { name: "My Projects", href: "/client/projects", icon: FolderKanban },
  { name: "Asset Vault", href: "/client/assets", icon: Archive },
  { name: "Invoices", href: "/client/invoices", icon: FileText },
  { name: "Support", href: "/client/support", icon: HeadphonesIcon },
  { name: "Settings", href: "/client/settings", icon: Settings },
]

export function ClientSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 bottom-0 w-72 bg-slate-50 border-r border-slate-200 flex flex-col z-40"
    >
      {/* Logo */}
      <div className="p-6 border-b border-slate-200">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/inievo-icon.png"
            alt="Inievo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div>
            <span className="text-lg font-semibold text-slate-900">Inievo</span>
            <p className="text-xs text-slate-500">Client Portal</p>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-8 px-5 space-y-2">
        {sidebarLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -15, filter: "blur(5px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              transition={{ delay: 0.3 + index * 0.08, duration: 0.4 }}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-4 px-4 py-3.5 rounded-lg text-sm font-medium transition-all duration-300 group ${
                  link.active
                    ? "bg-teal-50 text-teal-600 border-l-2 border-teal-600 -ml-[2px]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Icon className={`w-5 h-5 ${link.active ? "text-teal-600" : "text-slate-400 group-hover:text-slate-600"} transition-colors duration-300`} />
                {link.name}
              </Link>
            </motion.div>
          )
        })}
      </nav>

      {/* Client Profile - Bottom */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="p-5 border-t border-slate-200"
      >
        <div className="flex items-center gap-4 px-4 py-4 bg-white rounded-lg border border-slate-200">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-600 to-teal-500 flex items-center justify-center text-white text-lg font-semibold shadow-lg shadow-teal-600/20">
              DN
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-slate-900 truncate">Dr. Nusrat</p>
            <p className="text-xs text-teal-600 truncate">Cardiology</p>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  )
}
