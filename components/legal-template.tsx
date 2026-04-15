"use client"

import { motion } from "framer-motion"

interface LegalSection {
  title: string
  content: string | string[]
}

interface LegalTemplateProps {
  title: string
  lastUpdated: string
  sections: LegalSection[]
}

export function LegalTemplate({ title, lastUpdated, sections }: LegalTemplateProps) {
  return (
    <main className="min-h-screen bg-white pt-32 pb-20">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="px-4 sm:px-6 max-w-3xl mx-auto mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
          {title}
        </h1>
        <p className="text-slate-600">
          Last updated: {lastUpdated}
        </p>
      </motion.section>

      {/* Content */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="px-4 sm:px-6 max-w-3xl mx-auto"
      >
        <div className="prose prose-sm md:prose-base max-w-none">
          {sections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + index * 0.05 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                {section.title}
              </h2>
              <div className="text-slate-600 leading-relaxed space-y-4">
                {Array.isArray(section.content) ? (
                  section.content.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))
                ) : (
                  <p>{section.content}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="px-4 sm:px-6 max-w-3xl mx-auto mt-20 pt-20 border-t border-slate-200"
      >
        <h2 className="text-2xl font-bold text-slate-900 mb-4">
          Questions?
        </h2>
        <p className="text-slate-600 mb-6">
          If you have any questions about this {title.toLowerCase()}, please contact us at{" "}
          <a
            href="mailto:hello@inievo.com"
            className="text-blue-900 hover:text-blue-700 font-medium transition-colors"
          >
            hello@inievo.com
          </a>
        </p>
      </motion.section>
    </main>
  )
}
