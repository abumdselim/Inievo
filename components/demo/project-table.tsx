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
      className="bg-[#0F2035] border border-[#1E3A5F] rounded-xl p-6 lg:col-span-2"
    >
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-white">Active Projects</h3>
        <p className="text-sm text-gray-400 mt-1">Current project pipeline status</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-[#1E3A5F]">
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Name</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Client</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Status</th>
              <th className="text-left py-3 px-4 text-sm font-medium text-gray-400">Progress</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((project, index) => (
              <motion.tr
                key={project.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.3 }}
                whileHover={{ backgroundColor: "rgba(26, 41, 66, 0.5)" }}
                className="border-b border-[#1E3A5F]/50 transition-colors cursor-pointer"
              >
                <td className="py-4 px-4">
                  <span className="text-sm font-medium text-white">{project.name}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-gray-400">{project.client}</span>
                </td>
                <td className="py-4 px-4">
                  <span className={`inline-flex px-2.5 py-1 text-xs font-medium rounded-full ${project.statusColor}`}>
                    {project.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-[#1A2942] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${project.progress}%` }}
                        transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: "easeOut" }}
                        className="h-full bg-[#0D9488] rounded-full"
                      />
                    </div>
                    <span className="text-sm font-medium text-white w-10">{project.progress}%</span>
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
