import { ContactForm } from "@/components/contact-form"
import { ContactInfoStrip } from "@/components/contact-info-strip"
import { motion } from "framer-motion"

export const metadata = {
  title: "Contact Us | Inievo",
  description: "Get in touch with Inievo. We'd love to hear from you and discuss your next project.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-16 pt-32"
      >
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Let's Work Together
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear about it and help bring your vision to life.
          </p>
        </div>
      </motion.section>

      {/* Contact Section - 2 Columns */}
      <section className="px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form Column */}
          <ContactForm />

          {/* Info Column */}
          <ContactInfoStrip />
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto mt-20 pt-20 border-t border-slate-200"
      >
        <div className="text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-4">
            Not sure where to start?
          </h2>
          <p className="text-slate-600 mb-8">
            Schedule a free consultation with our team to discuss your needs and how we can help.
          </p>
          <a
            href="#book"
            className="inline-flex items-center gap-2 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 group"
          >
            Book a Call
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.section>
    </main>
  )
}
