"use client"

import { motion } from "framer-motion"
import { Building2, Stethoscope, ShoppingBag, Briefcase, Landmark } from "lucide-react"

const logos = [
  { icon: Building2, name: "TechCorp" },
  { icon: Stethoscope, name: "MedCare" },
  { icon: ShoppingBag, name: "RetailHub" },
  { icon: Briefcase, name: "BizPro" },
  { icon: Landmark, name: "FinServe" },
]

const testimonials = [
  {
    quote: "We spent BDT 80,000 on a freelancer website that broke within 3 months. Inievo rebuilt our entire digital presence, and the results showed in the first month. This is what professional actually means.",
    name: "Rashid Ahmed",
    title: "E-Commerce Director",
    initials: "RA",
  },
  {
    quote: "My junior colleague was getting more patient referrals because he had a website. Inievo built me a presence that reflects 20 years of practice. Now patients find me on Google before they find the hospital.",
    name: "Dr. Fatima Khan",
    title: "Specialist Cardiologist",
    initials: "FK",
  },
]

export function TrustCenter() {
  return (
    <section className="py-24 px-6 bg-[#0A1628]">
      <div className="max-w-6xl mx-auto">
        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          Why Businesses Trust Inievo
        </motion.h2>

        {/* Logo Wall */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex justify-center items-center gap-8 md:gap-12 mb-16 flex-wrap"
        >
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 + index * 0.05 }}
              className="group cursor-pointer"
            >
              <div className="flex items-center gap-2 text-slate-500 grayscale opacity-50 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100 group-hover:text-teal-400">
                <logo.icon className="w-6 h-6" />
                <span className="text-sm font-medium hidden md:inline">{logo.name}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              className="bg-[#0F1D32] border border-slate-700/50 rounded-2xl p-8 hover:border-teal-500/30 transition-all duration-300"
            >
              {/* Quote */}
              <p className="text-slate-300 text-lg leading-relaxed mb-6 italic">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500/20 to-orange-500/20 border border-slate-600 flex items-center justify-center">
                  <span className="text-sm font-semibold text-slate-300">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="text-white font-medium">{testimonial.name}</p>
                  <p className="text-slate-400 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
