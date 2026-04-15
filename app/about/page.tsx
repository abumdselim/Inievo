import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"
import { Navigation } from "@/components/navigation"

export const metadata = {
  title: "About Us | Inievo",
  description: "Learn about Inievo's mission to deliver premium digital systems for ambitious brands.",
}

export default function AboutPage() {
  const values = [
    { title: "Innovation", description: "We push boundaries and embrace new technologies" },
    { title: "Quality", description: "Excellence is non-negotiable in everything we create" },
    { title: "Partnership", description: "Your success is our success" },
    { title: "Craftsmanship", description: "Every detail is meticulously considered" },
  ]

  const team = [
    { name: "Abumdselim", role: "Creative Director & Founder", expertise: "Brand Strategy & UI/UX" },
    { name: "We're Hiring", role: "Join Our Team", expertise: "Open Position" },
    { name: "We're Hiring", role: "Join Our Team", expertise: "Open Position" },
  ]

  return (
    <main className="min-h-screen bg-[#0A1628]">
      <Navigation />
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Innovation Evolved
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            At Inievo, we believe that technology should be elegant, purposeful, and transformative. We're not just building websites—we're architecting the digital presence of tomorrow's leading brands.
          </p>
        </div>
      </motion.section>

      {/* Vision & Values Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                We envision a world where every brand—from ambitious startups to established enterprises—has access to world-class digital systems that drive real results.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Inievo stands at the intersection of design, technology, and strategy. We create digital experiences that are not just beautiful, but strategically engineered to achieve measurable business outcomes.
              </p>
            </motion.div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Core Values</h2>
              <div className="space-y-4">
                {values.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="flex gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-white">{value.title}</h3>
                      <p className="text-gray-300 text-sm">{value.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="bg-blue-900/20 px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            How We Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", desc: "We dive deep into understanding your goals and vision" },
              { step: "02", title: "Strategy", desc: "Crafting a comprehensive digital strategy" },
              { step: "03", title: "Creation", desc: "Building your solution with precision and care" },
              { step: "04", title: "Growth", desc: "Launching and optimizing for measurable results" },
            ].map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-orange-500 mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name + index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className={`text-center ${member.name === "We're Hiring" ? "border-2 border-dashed border-blue-700 p-4 rounded-xl" : ""}`}
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-900 to-orange-500 mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {member.name.charAt(0)}
                </div>
                <h3 className="font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-orange-600 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.expertise}</p>
                {member.name === "We're Hiring" && (
                  <a href="/contact" className="mt-3 inline-block text-xs text-orange-400 hover:text-orange-300 underline">Apply Now →</a>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <motion.section
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        className="bg-[#060E1A] text-white px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Start?</h2>
          <p className="text-gray-300 mb-8">
            Let's create something extraordinary together. Schedule a consultation to discuss your vision.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-medium rounded-lg transition-all duration-300 group"
          >
            Get Started
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>
      </motion.section>
    </main>
  )
}
