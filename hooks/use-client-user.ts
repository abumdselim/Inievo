"use client"

import { useEffect, useState } from "react"

export type ClientUser = {
  email: string
  name: string
  role: string
}

export function useClientUser() {
  const [user, setUser] = useState<ClientUser | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    let isMounted = true

    async function loadUser() {
      try {
        const response = await fetch("/api/auth/me", { cache: "no-store" })

        if (!response.ok) {
          if (isMounted) {
            setUser(null)
          }
          return
        }

        const payload = (await response.json()) as { user: ClientUser | null }

        if (isMounted) {
          setUser(payload.user)
        }
      } catch {
        if (isMounted) {
          setUser(null)
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadUser()

    return () => {
      isMounted = false
    }
  }, [])

  return { user, isLoading }
}
