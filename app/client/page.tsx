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

      {/* Mobile Bottom Tab Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 flex items-center justify-around z-40">
        {/* Overview */}
        <a href="/client" className="flex flex-col items-center gap-1 py-4 px-3 text-orange-500 border-b-2 border-orange-500">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-3m0 0l7-4 7 4M5 9v10a1 1 0 001 1h12a1 1 0 001-1V9M9 9h6m-6 0a1 1 0 00-1 1v4a1 1 0 001 1h6a1 1 0 001-1v-4a1 1 0 00-1-1" />
          </svg>
          <span className="text-xs font-medium">Overview</span>
        </a>
        {/* Projects */}
        <a href="/client/projects" className="flex flex-col items-center gap-1 py-4 px-3 text-slate-500 hover:text-blue-900 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
          </svg>
          <span className="text-xs font-medium">Projects</span>
        </a>
        {/* Assets */}
        <a href="/client/assets" className="flex flex-col items-center gap-1 py-4 px-3 text-slate-500 hover:text-blue-900 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          <span className="text-xs font-medium">Assets</span>
        </a>
        {/* Invoices */}
        <a href="/client/invoices" className="flex flex-col items-center gap-1 py-4 px-3 text-slate-500 hover:text-blue-900 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <span className="text-xs font-medium">Invoices</span>
        </a>
        {/* Support */}
        <a href="/client/support" className="flex flex-col items-center gap-1 py-4 px-3 text-slate-500 hover:text-blue-900 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
          <span className="text-xs font-medium">Support</span>
        </a>
      </div>
    </div>
  )
}
