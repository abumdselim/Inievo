import { NextResponse } from "next/server"

import { AUTH_COOKIE_NAME, authCookieOptions } from "@/lib/auth"

export async function POST(request: Request) {
  let body: { email?: string; password?: string }

  try {
    body = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
  }

  const email = body.email?.trim()
  const password = body.password?.trim()

  if (!email || !password) {
    return NextResponse.json({ error: "Email and password are required" }, { status: 400 })
  }

  const response = NextResponse.json({ success: true })
  response.cookies.set(AUTH_COOKIE_NAME, "active", authCookieOptions)

  return response
}
