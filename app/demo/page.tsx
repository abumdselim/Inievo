import { DashboardSidebar } from "@/components/demo/dashboard-sidebar"
import { DashboardTopbar } from "@/components/demo/dashboard-topbar"
import { MetricCards } from "@/components/demo/metric-cards"
import { TrafficChart } from "@/components/demo/traffic-chart"
import { ProjectTable } from "@/components/demo/project-table"
import { RecentInvoices } from "@/components/demo/recent-invoices"
import { LeadPipeline } from "@/components/demo/lead-pipeline"

export const metadata = {
  title: "Admin Dashboard Demo | Inievo",
  description: "Experience the power of Inievo's admin dashboard with this interactive demo.",
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-[#0A1628]">
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <div className="ml-64">
        {/* Top Bar */}
        <DashboardTopbar />

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Metric Cards */}
          <MetricCards />

          {/* Main Widgets Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Traffic Chart - 2 cols */}
            <TrafficChart />
            
            {/* Recent Invoices - 1 col */}
            <RecentInvoices />
            
            {/* Project Table - 2 cols */}
            <ProjectTable />
            
            {/* Lead Pipeline - 1 col */}
            <LeadPipeline />
          </div>
        </main>
      </div>
    </div>
  )
}
