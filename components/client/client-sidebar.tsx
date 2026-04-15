"use client"

import { motion } from "framer-motion"
import {
  Archive,
  FileText,
  FolderKanban,
  HeadphonesIcon,
  LayoutDashboard,
  Settings,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { LogoutButton } from "@/components/client/logout-button"

const sidebarLinks = [
  { name: "Overview", href: "/client", icon: LayoutDashboard },
  { name: "My Projects", href: "/client/projects", icon: FolderKanban },
  { name: "Asset Vault", href: "/client/assets", icon: Archive },
  { name: "Invoices", href: "/client/invoices", icon: FileText },
  { name: "Support", href: "/client/support", icon: HeadphonesIcon },
  { name: "Settings", href: "/client/settings", icon: Settings },
]

export function ClientSidebar() {
  const pathname = usePathname()

  return (
    <motion.aside
      initial={{ opacity: 0, x: -30, filter: "blur(10px)" }}
      animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed left-0 top-0 bottom-0 w-72 bg-blue-900 border-r border-blue-800 flex flex-col z-40"
    >
      {/* Logo */}
      <div className="p-6 border-b border-blue-800">
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
            <p className="text-xs text-blue-300">Client Portal</p>
          </div>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-8 px-5 space-y-2">
        {sidebarLinks.map((link, index) => {
          const Icon = link.icon
          const isActive = pathname === link.href || (link.href !== "/client" && pathname.startsWith(link.href))
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
                  isActive
                    ? "bg-orange-500/20 text-orange-400 border-l-2 border-orange-500 -ml-0.5"
                    : "text-blue-100 hover:text-white hover:bg-blue-800"
                }`}
              >
                <Icon className={`w-5 h-5 ${isActive ? "text-orange-400" : "text-blue-300 group-hover:text-blue-100"} transition-colors duration-300`} />
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
        className="p-5 border-t border-blue-800"
      >
        <div className="space-y-3 rounded-lg border border-blue-700 bg-blue-800 px-4 py-4">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-12 h-12 rounded-full bg-linear-to-br from-orange-500 to-orange-400 flex items-center justify-center text-white text-lg font-semibold shadow-lg shadow-orange-500/20">
                DN
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 w-4 h-4 bg-green-500 rounded-full border-2 border-blue-900"></div>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white truncate">Dr. Nusrat</p>
              <p className="text-xs text-blue-300 truncate">Cardiology</p>
            </div>
          </div>

          <LogoutButton
            className="flex items-center justify-center gap-2 rounded-lg border border-blue-700 bg-blue-900/70 px-4 py-3 text-sm font-medium text-blue-100 transition-colors hover:bg-blue-700 hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
          />
        </div>
      </motion.div>
    </motion.aside>
  )
}
