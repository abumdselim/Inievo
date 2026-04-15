import { AssetVault } from "@/components/client/asset-vault"
import { ClientMobileNav } from "@/components/client/client-mobile-nav"
import { ClientSidebar } from "@/components/client/client-sidebar"
import { ClientTopbar } from "@/components/client/client-topbar"
import { Archive } from "lucide-react"

export const metadata = {
  title: "Asset Vault | Inievo",
  description: "Access project files, previews, and approved deliverables.",
}

export default function ClientAssetsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <div className="hidden md:block">
        <ClientSidebar />
      </div>

      <div className="md:ml-72">
        <ClientTopbar />

        <main className="p-4 sm:p-6 md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <Archive className="h-7 w-7 text-slate-700" />
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Asset Vault</h1>
              <p className="text-sm text-slate-500">Download approved files and preview active deliverables.</p>
            </div>
          </div>

          <div className="max-w-3xl">
            <AssetVault />
          </div>
        </main>
      </div>
      <ClientMobileNav />
    </div>
  )
}