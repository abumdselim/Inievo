import type { Metadata } from "next"
import { AdminDashboard } from "@/components/admin/admin-dashboard"

export const metadata: Metadata = {
  title: "Admin Dashboard | Inievo",
  description:
    "Manage site sections, content, shop products, leads, and team access from one place.",
}

export default function AdminPage() {
  return <AdminDashboard />
}
