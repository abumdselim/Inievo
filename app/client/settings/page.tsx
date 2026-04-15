"use client"

import { useState } from "react"
import { Bell, Lock, User } from "lucide-react"

import { ClientSidebar } from "@/components/client/client-sidebar"
import { ClientTopbar } from "@/components/client/client-topbar"

export default function ClientSettingsPage() {
  const [profile, setProfile] = useState({
    name: "Abu MD Selim",
    email: "hello@inievo.com",
    phone: "+880 1700 000000",
  })

  const [password, setPassword] = useState({
    current: "",
    next: "",
    confirm: "",
  })

  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    browser: true,
  })

  const handleSaveProfile = () => {
    console.log("Profile saved:", profile)
  }

  const handleUpdatePassword = () => {
    console.log("Password updated:", password)
  }

  const ToggleRow = ({
    label,
    enabled,
    onToggle,
  }: {
    label: string
    enabled: boolean
    onToggle: () => void
  }) => {
    return (
      <div className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
        <span className="text-sm font-medium text-slate-700">{label}</span>
        <button
          type="button"
          onClick={onToggle}
          aria-pressed={enabled}
          className={`relative h-6 w-11 rounded-full transition-colors duration-300 ${
            enabled ? "bg-orange-500" : "bg-slate-200"
          }`}
        >
          <span
            className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow-sm transition-transform duration-300 ${
              enabled ? "translate-x-5" : "translate-x-0.5"
            }`}
          />
        </button>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <div className="hidden md:block">
        <ClientSidebar />
      </div>

      <div className="md:ml-72">
        <ClientTopbar />

        <main className="p-4 sm:p-6 md:p-10">
          <div className="mx-auto max-w-5xl space-y-6">
            <div>
              <h1 className="text-3xl font-semibold text-slate-900">Account Settings</h1>
              <p className="mt-2 text-sm text-slate-500">
                Update your profile, password, and notification preferences.
              </p>
            </div>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <User className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Profile Information</h2>
                  <p className="text-sm text-slate-500">Manage your contact details.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-700">Name</span>
                  <input
                    type="text"
                    value={profile.name}
                    onChange={(event) => setProfile((current) => ({ ...current, name: event.target.value }))}
                    className="h-11 rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-700">Email</span>
                  <input
                    type="email"
                    value={profile.email}
                    onChange={(event) => setProfile((current) => ({ ...current, email: event.target.value }))}
                    className="h-11 rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-700">Phone</span>
                  <input
                    type="tel"
                    value={profile.phone}
                    onChange={(event) => setProfile((current) => ({ ...current, phone: event.target.value }))}
                    className="h-11 rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </label>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={handleSaveProfile}
                    className="inline-flex h-9 items-center rounded-full bg-orange-500 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-600"
                  >
                    Save Profile
                  </button>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <Lock className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Change Password</h2>
                  <p className="text-sm text-slate-500">Use a strong password to keep your account secure.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-700">Current Password</span>
                  <input
                    type="password"
                    value={password.current}
                    onChange={(event) => setPassword((current) => ({ ...current, current: event.target.value }))}
                    className="h-11 rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-700">New Password</span>
                  <input
                    type="password"
                    value={password.next}
                    onChange={(event) => setPassword((current) => ({ ...current, next: event.target.value }))}
                    className="h-11 rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium text-slate-700">Confirm Password</span>
                  <input
                    type="password"
                    value={password.confirm}
                    onChange={(event) => setPassword((current) => ({ ...current, confirm: event.target.value }))}
                    className="h-11 rounded-lg border border-slate-200 bg-white px-4 text-sm text-slate-900 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-500/20"
                  />
                </label>

                <div className="flex justify-end pt-2">
                  <button
                    type="button"
                    onClick={handleUpdatePassword}
                    className="inline-flex h-9 items-center rounded-full bg-orange-500 px-4 text-sm font-medium text-white transition-colors hover:bg-orange-600"
                  >
                    Update Password
                  </button>
                </div>
              </div>
            </section>

            <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500/10 text-orange-500">
                  <Bell className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-slate-900">Notifications</h2>
                  <p className="text-sm text-slate-500">Choose how you want to stay updated.</p>
                </div>
              </div>

              <div className="space-y-3">
                <ToggleRow
                  label="Email Notifications"
                  enabled={notifications.email}
                  onToggle={() => setNotifications((current) => ({ ...current, email: !current.email }))}
                />
                <ToggleRow
                  label="SMS Alerts"
                  enabled={notifications.sms}
                  onToggle={() => setNotifications((current) => ({ ...current, sms: !current.sms }))}
                />
                <ToggleRow
                  label="Browser Notifications"
                  enabled={notifications.browser}
                  onToggle={() => setNotifications((current) => ({ ...current, browser: !current.browser }))}
                />
              </div>
            </section>
          </div>
        </main>
      </div>

      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-slate-200 bg-white">
        <a href="/client" className="flex flex-col items-center gap-1 px-3 py-4 text-slate-500 transition-colors hover:text-blue-900">
          <span className="text-xs font-medium">Overview</span>
        </a>
        <a href="/client/projects" className="flex flex-col items-center gap-1 px-3 py-4 text-slate-500 transition-colors hover:text-blue-900">
          <span className="text-xs font-medium">Projects</span>
        </a>
        <a href="/client/support" className="flex flex-col items-center gap-1 px-3 py-4 text-slate-500 transition-colors hover:text-blue-900">
          <span className="text-xs font-medium">Support</span>
        </a>
        <a href="/client/settings" className="flex flex-col items-center gap-1 border-b-2 border-orange-500 px-3 py-4 text-orange-500">
          <span className="text-xs font-medium">Settings</span>
        </a>
      </div>
    </div>
  )
}