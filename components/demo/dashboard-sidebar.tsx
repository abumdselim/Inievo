"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import {
  LayoutDashboard,
  Users,
  FolderKanban,
  FileText,
  ShoppingBag,
  PenSquare,
  Settings,
} from "lucide-react"

const sidebarLinks = [
  { name: "Overview", href: "/demo", icon: LayoutDashboard, active: true },
  { name: "Clients", href: "/demo/clients", icon: Users },
  { name: "Projects", href: "/demo/projects", icon: FolderKanban },
  { name: "Invoices", href: "/demo/invoices", icon: FileText },
  { name: "Shop", href: "/demo/shop", icon: ShoppingBag },
  { name: "Blog", href: "/demo/blog", icon: PenSquare },
  { name: "Settings", href: "/demo/settings", icon: Settings },
]

export function DashboardSidebar() {
  return (
    <motion.aside
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed left-0 top-0 bottom-0 w-64 bg-slate-50 border-r border-slate-200 flex flex-col z-40"
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
          <span className="text-lg font-semibold text-slate-900">Inievo</span>
        </Link>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 py-6 px-4 space-y-1">
        {sidebarLinks.map((link, index) => {
          const Icon = link.icon
          return (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <Link
                href={link.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 group ${
                  link.active
                    ? "bg-teal-50 text-teal-600 border-l-2 border-teal-600 -ml-[2px]"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                }`}
              >
                <Icon className={`w-5 h-5 ${link.active ? "text-teal-600" : "text-slate-400 group-hover:text-slate-600"}`} />
                {link.name}
              </Link>
            </motion.div>
          )
        })}
      </nav>

      {/* Bottom section */}
      <div className="p-4 border-t border-slate-200">
        <div className="flex items-center gap-3 px-4 py-3">
          <div className="w-8 h-8 rounded-full bg-teal-600 flex items-center justify-center text-white text-sm font-medium">
            D
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-slate-900 truncate">Demo User</p>
            <p className="text-xs text-slate-500 truncate">demo@inievo.com</p>
          </div>
        </div>
      </div>
    </motion.aside>
  )
}
