"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
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

export function MobileNavDrawer() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Hamburger Button - Visible only on mobile */}
      <div className="md:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 rounded-lg bg-slate-100 hover:bg-slate-200 transition-colors"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-slate-900" />
          ) : (
            <Menu className="w-6 h-6 text-slate-900" />
          )}
        </button>
      </div>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: -280 }}
            animate={{ x: 0 }}
            exit={{ x: -280 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed left-0 top-0 bottom-0 w-64 bg-slate-50 border-r border-slate-200 flex flex-col z-40 md:hidden"
          >
            {/* Logo */}
            <div className="p-6 border-b border-slate-200">
              <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}>
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
              {sidebarLinks.map((link) => {
                const Icon = link.icon
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      link.active
                        ? "bg-teal-50 text-teal-600 border-l-2 border-teal-600 -ml-[2px]"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className={`w-5 h-5 ${link.active ? "text-teal-600" : "text-slate-400"}`} />
                    {link.name}
                  </Link>
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
