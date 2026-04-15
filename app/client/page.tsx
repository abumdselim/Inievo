import { AssetVault } from "@/components/client/asset-vault"
import { ClientInvoices } from "@/components/client/client-invoices"
import { ClientMobileNav } from "@/components/client/client-mobile-nav"
import { ClientSidebar } from "@/components/client/client-sidebar"
import { ClientTopbar } from "@/components/client/client-topbar"
import { ProjectHealth } from "@/components/client/project-health"

export const metadata = {
  title: "Client Portal | Inievo",
  description: "Manage your projects, assets, and invoices in one place.",
}

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* Sidebar - Hidden on mobile, visible on desktop */}
      <div className="hidden md:block">
        <ClientSidebar />
      </div>

      {/* Main Content */}
      <div className="md:ml-72">
        {/* Top Bar */}
        <ClientTopbar />

        {/* Dashboard Content */}
        <main className="p-4 sm:p-6 md:p-10">
          {/* Project Health - Full Width */}
          <div className="mb-8">
            <ProjectHealth />
          </div>

          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Asset Vault */}
            <AssetVault />

            {/* Invoices & Payments */}
            <ClientInvoices />
          </div>
        </main>
      </div>

      <ClientMobileNav />
    </div>
  )
}
