"use client"

import { useState } from "react"
import { Send, MessageSquare, Clock } from "lucide-react"

import { ClientSidebar } from "@/components/client/client-sidebar"
import { ClientTopbar } from "@/components/client/client-topbar"

const tickets = [
  {
    id: "TKT-001",
    subject: "Logo file format question",
    status: "Resolved",
    date: "Apr 12, 2026",
    statusColor: "green",
  },
  {
    id: "TKT-002",
    subject: "Payment receipt needed",
    status: "Open",
    date: "Apr 14, 2026",
    statusColor: "blue",
  },
] as const

export default function ClientSupportPage() {
  const [subject, setSubject] = useState("")
  const [message, setMessage] = useState("")
  const [priority, setPriority] = useState("normal")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    console.log({ subject, message, priority })

    setSubject("")
    setMessage("")
    setPriority("normal")
  }

  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <div className="hidden md:block">
        <ClientSidebar />
      </div>

      <div className="md:ml-72">
        <ClientTopbar />

        <main className="p-4 sm:p-6 md:p-10">
          <h1 className="text-3xl font-bold text-blue-900 mb-8">Support</h1>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-blue-900 mb-5">Open a Ticket</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="ticket-subject" className="block text-sm font-medium text-slate-700 mb-2">
                    Subject
                  </label>
                  <input
                    id="ticket-subject"
                    type="text"
                    value={subject}
                    onChange={(event) => setSubject(event.target.value)}
                    className="w-full border border-slate-200 rounded-lg p-3"
                    placeholder="What do you need help with?"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="ticket-priority" className="block text-sm font-medium text-slate-700 mb-2">
                    Priority
                  </label>
                  <select
                    id="ticket-priority"
                    value={priority}
                    onChange={(event) => setPriority(event.target.value)}
                    className="w-full border border-slate-200 rounded-lg p-3 bg-white"
                  >
                    <option value="normal">Normal</option>
                    <option value="high">High</option>
                    <option value="urgent">Urgent</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="ticket-message" className="block text-sm font-medium text-slate-700 mb-2">
                    Message
                  </label>
                  <textarea
                    id="ticket-message"
                    rows={4}
                    value={message}
                    onChange={(event) => setMessage(event.target.value)}
                    className="w-full border border-slate-200 rounded-lg p-3"
                    placeholder="Share details so we can help quickly."
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-orange-500 hover:bg-orange-600 text-white font-medium p-3 transition-colors"
                >
                  <Send className="h-4 w-4" />
                  Send Ticket
                </button>
              </form>
            </section>

            <section className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-blue-900 mb-5">Recent Tickets</h2>

              <div>
                {tickets.map((ticket, index) => {
                  const statusClass =
                    ticket.statusColor === "green"
                      ? "bg-green-100 text-green-700"
                      : "bg-blue-100 text-blue-700"

                  return (
                    <div
                      key={ticket.id}
                      className={index !== tickets.length - 1 ? "py-4 border-b border-slate-200" : "py-4"}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div className="flex items-start gap-3">
                          <MessageSquare className="w-5 h-5 text-slate-400 mt-0.5" />
                          <div>
                            <p className="font-medium text-slate-900">{ticket.subject}</p>
                            <div className="mt-1 flex items-center gap-1 text-xs text-slate-400">
                              <Clock className="w-3.5 h-3.5" />
                              <span>{ticket.date}</span>
                            </div>
                          </div>
                        </div>

                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${statusClass}`}>
                          {ticket.status}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}
