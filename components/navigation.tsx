"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Digital Shop", href: "#shop" },
  { name: "About", href: "#about" },
]

export function Navigation() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0A1628]/80 border-b border-[#1E3A5F]/30"
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/inievo-icon.png"
              alt="Inievo"
              width={36}
              height={36}
              className="rounded-lg"
            />
            <span className="text-xl font-semibold text-white tracking-tight">
              Inievo
            </span>
          </Link>

          {/* Center Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="#login"
              className="hidden sm:block text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200"
            >
              Client Login
            </Link>
            <Link
              href="#book"
              className="inline-flex items-center justify-center rounded-full bg-[#0D9488] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#0D9488]/90 transition-all duration-200 hover:scale-105"
            >
              Book Strategy Call
            </Link>
          </div>
        </div>
      </nav>
    </motion.header>
  )
}
