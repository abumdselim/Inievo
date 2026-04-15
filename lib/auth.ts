export const AUTH_COOKIE_NAME = "inievo_client_session"
const SESSION_SECRET = process.env.AUTH_SESSION_SECRET || "change-me-in-production"
const DEFAULT_CLIENT_EMAIL = process.env.CLIENT_PORTAL_EMAIL || "client@inievo.com"
const DEFAULT_CLIENT_PASSWORD = process.env.CLIENT_PORTAL_PASSWORD || "Inievo123!"
const DEFAULT_CLIENT_NAME = process.env.CLIENT_PORTAL_NAME || "Dr. Nusrat"

export const authCookieOptions = {
  httpOnly: true,
  sameSite: "lax" as const,
  secure: process.env.NODE_ENV === "production",
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
}

type SessionPayload = {
  email: string
  name: string
  role: string
  exp: number
}

export type AuthUser = {
  email: string
  name: string
  role: string
}

const encoder = new TextEncoder()
const decoder = new TextDecoder()

function base64UrlEncode(value: string) {
  const bytes = encoder.encode(value)
  let binary = ""

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte)
  })

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

function base64UrlDecode(value: string) {
  const base64 = value.replace(/-/g, "+").replace(/_/g, "/")
  const padding = (4 - (base64.length % 4)) % 4
  const padded = base64 + "=".repeat(padding)
  const binary = atob(padded)
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0))

  return decoder.decode(bytes)
}

async function createSignature(payload: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    encoder.encode(SESSION_SECRET),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  )

  const signature = await crypto.subtle.sign("HMAC", key, encoder.encode(payload))
  const bytes = new Uint8Array(signature)
  let binary = ""

  bytes.forEach((byte) => {
    binary += String.fromCharCode(byte)
  })

  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "")
}

export function verifyClientCredentials(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase()

  if (normalizedEmail !== DEFAULT_CLIENT_EMAIL.toLowerCase()) {
    return null
  }

  if (password !== DEFAULT_CLIENT_PASSWORD) {
    return null
  }

  return {
    email: DEFAULT_CLIENT_EMAIL,
    name: DEFAULT_CLIENT_NAME,
    role: "Client",
  } satisfies AuthUser
}

export async function createSessionToken(user: AuthUser) {
  const payload: SessionPayload = {
    ...user,
    exp: Math.floor(Date.now() / 1000) + authCookieOptions.maxAge,
  }

  const encodedPayload = base64UrlEncode(JSON.stringify(payload))
  const signature = await createSignature(encodedPayload)

  return `${encodedPayload}.${signature}`
}

export async function verifySessionToken(token: string | undefined) {
  if (!token) {
    return null
  }

  const [encodedPayload, signature] = token.split(".")

  if (!encodedPayload || !signature) {
    return null
  }

  const expectedSignature = await createSignature(encodedPayload)

  if (signature !== expectedSignature) {
    return null
  }

  try {
    const payload = JSON.parse(base64UrlDecode(encodedPayload)) as SessionPayload

    if (payload.exp < Math.floor(Date.now() / 1000)) {
      return null
    }

    return {
      email: payload.email,
      name: payload.name,
      role: payload.role,
    } satisfies AuthUser
  } catch {
    return null
  }
}
