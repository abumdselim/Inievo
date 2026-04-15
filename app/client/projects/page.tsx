"use client"

import { ClientSidebar } from "@/components/client/client-sidebar"
import { ClientTopbar } from "@/components/client/client-topbar"
import { ClientMobileNav } from "@/components/client/client-mobile-nav"
import { FolderKanban, Clock, CheckCircle, Circle } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Inievo Website Redesign",
    status: "In Progress",
    statusColor: "blue",
    progress: 75,
    deadline: "May 15, 2026",
    description: "Full redesign with Next.js and Tailwind CSS",
  },
  {
    id: 2,
    name: "Brand Identity Package",
    status: "In Review",
    statusColor: "yellow",
    progress: 90,
    deadline: "Apr 22, 2026",
    description: "Logo, color palette, and brand guidelines",
  },
  {
    id: 3,
    name: "E-Commerce Store",
    status: "Planning",
    statusColor: "gray",
    progress: 20,
    deadline: "Jun 30, 2026",
    description: "bKash-integrated online store",
  },
]

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      <div className="hidden md:block">
        <ClientSidebar />
      </div>
      <div className="md:ml-72">
        <ClientTopbar />
        <main className="p-6 md:p-10">
          <h1 className="text-2xl font-bold text-slate-900 mb-8">My Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="font-semibold text-slate-900 leading-snug">{project.name}</h3>
                  <span
                    className={`text-xs font-medium px-2.5 py-1 rounded-full shrink-0 ml-2 
                      ${project.statusColor === 'blue' ? 'bg-blue-100 text-blue-700' : ''}
                      ${project.statusColor === 'yellow' ? 'bg-yellow-100 text-yellow-700' : ''}
                      ${project.statusColor === 'gray' ? 'bg-gray-100 text-gray-600' : ''}`}
                  >
                    {project.status}
                  </span>
                </div>
                <p className="text-slate-500 text-sm mb-4">{project.description}</p>
                <div className="mb-4">
                  <div className="flex justify-between text-xs text-slate-500 mb-1">
                    <span>Progress</span>
                    <span>{project.progress}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-2">
                    <div
                      className="bg-orange-500 h-2 rounded-full transition-all"
                      style={{ width: `${project.progress}%` }}
                    />
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Due {project.deadline}</span>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
      <ClientMobileNav />
    </div>
  )
}
