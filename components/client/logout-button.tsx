"use client"

import { LogOut } from "lucide-react"
import { useRouter } from "next/navigation"
import { useState } from "react"

type LogoutButtonProps = {
  className: string
  showLabel?: boolean
}

export function LogoutButton({ className, showLabel = true }: LogoutButtonProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogout = async () => {
    if (isLoading) {
      return
    }

    setIsLoading(true)

    try {
      await fetch("/api/auth/logout", { method: "POST" })
    } finally {
      router.replace("/auth/login")
      router.refresh()
      setIsLoading(false)
    }
  }

  return (
    <button type="button" onClick={handleLogout} disabled={isLoading} className={className}>
      <LogOut className="h-4 w-4" />
      {showLabel && <span>Logout</span>}
    </button>
  )
}