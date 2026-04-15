"use client"

import {
    Archive,
    FileText,
    FolderKanban,
    HeadphonesIcon,
    LayoutDashboard,
    Settings,
} from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navItems = [
  { name: "Overview", href: "/client", icon: LayoutDashboard },
  { name: "Projects", href: "/client/projects", icon: FolderKanban },
  { name: "Assets", href: "/client/assets", icon: Archive },
  { name: "Invoices", href: "/client/invoices", icon: FileText },
  { name: "Support", href: "/client/support", icon: HeadphonesIcon },
  { name: "Settings", href: "/client/settings", icon: Settings },
]

export function ClientMobileNav() {
  const pathname = usePathname()

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-slate-200 bg-white shadow-[0_-8px_24px_rgba(15,23,42,0.06)]">
      <nav className="grid grid-cols-6 items-stretch">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href || (item.href !== "/client" && pathname.startsWith(item.href))

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex flex-col items-center justify-center gap-1 px-2 py-3 text-[11px] font-medium transition-colors ${
                isActive ? "border-t-2 border-orange-500 text-orange-500" : "text-slate-500 hover:text-blue-900"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              <Icon className="h-5 w-5" />
              <span className="truncate">{item.name}</span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}