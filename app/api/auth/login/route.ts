import { NextResponse } from "next/server";

import {
  AUTH_COOKIE_NAME,
  authCookieOptions,
  createSessionToken,
  verifyClientCredentials,
} from "@/lib/auth";

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

  const user = verifyClientCredentials(email, password)

  if (!user) {
    return NextResponse.json({ error: "Invalid email or password" }, { status: 401 })
  }

  const token = await createSessionToken(user)

  const response = NextResponse.json({ success: true })
  response.cookies.set(AUTH_COOKIE_NAME, token, authCookieOptions)

  return response
}
