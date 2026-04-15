"use client"

import { ClientSidebar } from "@/components/client/client-sidebar"
import { ClientTopbar } from "@/components/client/client-topbar"
import { FileText, Download } from "lucide-react"

const invoices = [
  {
    id: "INV-001",
    date: "Apr 1, 2026",
    description: "Website Redesign - Phase 1",
    amount: 25000,
    status: "Paid",
  },
  {
    id: "INV-002",
    date: "Apr 10, 2026",
    description: "Brand Identity Package",
    amount: 15000,
    status: "Pending",
  },
  {
    id: "INV-003",
    date: "Mar 20, 2026",
    description: "Monthly Maintenance",
    amount: 5000,
    status: "Overdue",
  },
] as const

const formatAmount = (amount: number) => amount.toLocaleString("en-BD")

export default function ClientInvoicesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pb-20 md:pb-0">
      <div className="hidden md:block">
        <ClientSidebar />
      </div>

      <div className="md:ml-72">
        <ClientTopbar />

        <main className="p-4 sm:p-6 md:p-10">
          <div className="mb-8 flex items-center gap-3">
            <FileText className="h-7 w-7 text-slate-700" />
            <h1 className="text-2xl font-bold text-slate-900">Invoices &amp; Payments</h1>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-8">
            <div className="rounded-xl border border-slate-200 border-l-4 border-l-green-500 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Total Paid</p>
              <p className="mt-2 text-xl font-bold text-green-600">BDT 25,000</p>
            </div>
            <div className="rounded-xl border border-slate-200 border-l-4 border-l-yellow-500 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Pending</p>
              <p className="mt-2 text-xl font-bold text-yellow-600">BDT 15,000</p>
            </div>
            <div className="rounded-xl border border-slate-200 border-l-4 border-l-red-500 bg-white p-5 shadow-sm">
              <p className="text-sm font-medium text-slate-500">Overdue</p>
              <p className="mt-2 text-xl font-bold text-red-600">BDT 5,000</p>
            </div>
          </div>

          <section className="rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="overflow-x-auto">
              <table className="min-w-[760px] w-full text-left">
                <thead className="border-b border-slate-200 bg-slate-50">
                  <tr>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600">Invoice #</th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600">Date</th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600">Description</th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600">Amount (BDT)</th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600">Status</th>
                    <th className="px-5 py-3 text-xs font-semibold uppercase tracking-wide text-slate-600">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => {
                    const isPaid = invoice.status === "Paid"
                    const statusClass =
                      invoice.status === "Paid"
                        ? "bg-green-100 text-green-700"
                        : invoice.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-700"

                    return (
                      <tr key={invoice.id} className="border-b border-slate-100 last:border-b-0">
                        <td className="px-5 py-4 text-sm font-semibold text-slate-900">{invoice.id}</td>
                        <td className="px-5 py-4 text-sm text-slate-600">{invoice.date}</td>
                        <td className="px-5 py-4 text-sm text-slate-700">{invoice.description}</td>
                        <td className="px-5 py-4 text-sm font-medium text-slate-900">{formatAmount(invoice.amount)}</td>
                        <td className="px-5 py-4">
                          <span className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusClass}`}>
                            {invoice.status}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          {isPaid ? (
                            <button className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-3.5 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                              <Download className="h-4 w-4" />
                              Download
                            </button>
                          ) : (
                            <button className="inline-flex items-center rounded-md bg-orange-500 px-4 py-2 text-sm font-semibold text-white hover:bg-orange-600 transition-colors">
                              Pay Now
                            </button>
                          )}
                        </td>
                      </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </section>
        </main>
      </div>
    </div>
  )
}
