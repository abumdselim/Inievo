import { NextResponse, type NextRequest } from "next/server"

import { AUTH_COOKIE_NAME } from "@/lib/auth"

const CLIENT_PATH_PREFIX = "/client"
const LOGIN_PATH = "/auth/login"

export function middleware(request: NextRequest) {
  const token = request.cookies.get(AUTH_COOKIE_NAME)?.value
  const isAuthenticated = Boolean(token)
  const { pathname } = request.nextUrl

  if (pathname.startsWith(CLIENT_PATH_PREFIX) && !isAuthenticated) {
    return NextResponse.redirect(new URL(LOGIN_PATH, request.url))
  }

  if (pathname === LOGIN_PATH && isAuthenticated) {
    return NextResponse.redirect(new URL(CLIENT_PATH_PREFIX, request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/client/:path*", "/auth/login"],
}
