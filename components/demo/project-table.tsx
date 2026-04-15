"use client"

import { motion } from "framer-motion"

const projects = [
  { 
    name: "Dhaka Fashion Hub", 
    client: "Nasreen Begum", 
    status: "Dev", 
    statusColor: "bg-blue-500/10 text-blue-400",
    progress: 67 
  },
  { 
    name: "Dr. Nusrat Cardiology", 
    client: "Dr. Nusrat Jahan", 
    status: "QA", 
    statusColor: "bg-purple-500/10 text-purple-400",
    progress: 89 
  },
  { 
    name: "Kamal Furniture", 
    client: "Kamal Ahmed", 
    status: "Design", 
    statusColor: "bg-orange-500/10 text-orange-400",
    progress: 34 
  },
]

export function ProjectTable() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
      className="bg-white border border-slate-200 rounded-lg p-6 lg:col-span-2"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-slate-900">Active Projects</h3>
        <p className="text-sm text-slate-500 mt-1">Current project pipeline status</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200">
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Name</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Client</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-slate-600">Progress</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <motion.tr
                key={project.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                whileHover={{ backgroundColor: "#F8FAFC" }}
                className="border-b border-slate-100 transition-colors cursor-pointer"
              >
                <td className="py-4 px-4">
                  <span className="text-sm font-medium text-slate-900">{project.name}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-slate-600">{project.client}</span>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${project.statusColor}`}>
                    {project.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-slate-200 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className="h-full bg-teal-600 rounded-full"
                      />
                    </div>
                    <span className="text-sm font-medium text-slate-900 w-10">{project.progress}%</span>
                  </div>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </motion.div>
  )
}
