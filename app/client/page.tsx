import { ClientSidebar } from "@/components/client/client-sidebar"
import { ClientTopbar } from "@/components/client/client-topbar"
import { ProjectHealth } from "@/components/client/project-health"
import { AssetVault } from "@/components/client/asset-vault"
import { ClientInvoices } from "@/components/client/client-invoices"

export const metadata = {
  title: "Client Portal | Inievo",
  description: "Manage your projects, assets, and invoices in one place.",
}

export default function ClientDashboard() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Sidebar */}
      <ClientSidebar />

      {/* Main Content */}
      <div className="ml-72">
        {/* Top Bar */}
        <ClientTopbar />

        {/* Dashboard Content */}
        <main className="p-10">
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
    </div>
  )
}
