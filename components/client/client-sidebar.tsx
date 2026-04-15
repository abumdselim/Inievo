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
      className="fixed left-0 top-0 bottom-0 w-72 bg-[#0F2035] border-r border-[#1E3A5F] flex flex-col z-40"
    >
      {/* Logo */}
      <div className="p-6 border-b border-[#1E3A5F]">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/images/inievo-icon.png"
            alt="Inievo"
            width={40}
            height={40}
            className="rounded-lg"
          />
          <div>
            <span className="text-lg font-semibold text-white">Inievo</span>
            <p className="text-xs text-gray-500">Client Portal</p>
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
                className={`flex items-center gap-4 px-4 py-3.5 rounded-xl text-sm font-medium transition-all duration-300 group ${
                  link.active
                    ? "bg-gradient-to-r from-[#0D9488]/20 to-transparent text-white border-l-3 border-[#0D9488] shadow-[0_0_20px_rgba(13,148,136,0.1)]"
                    : "text-gray-400 hover:text-white hover:bg-[#1A2942]/50"
                }`}
              >
                <Icon className={`w-5 h-5 ${link.active ? "text-[#0D9488]" : "text-gray-500 group-hover:text-[#0D9488]"} transition-colors duration-300`} />
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
        className="p-5 border-t border-[#1E3A5F]"
      >
        <div className="flex items-center gap-4 px-4 py-4 bg-[#0A1628] rounded-xl border border-[#1E3A5F]">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0D9488] to-[#0D9488]/60 flex items-center justify-center text-white text-lg font-semibold shadow-lg shadow-[#0D9488]/20">
              DN
            </div>
            <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0A1628]"></div>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-semibold text-white truncate">Dr. Nusrat</p>
            <p className="text-xs text-[#0D9488] truncate">Cardiology</p>
          </div>
        </div>
      </motion.div>
    </motion.aside>
  )
}
