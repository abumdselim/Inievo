"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Star, Quote, ArrowRight } from "lucide-react"
import Link from "next/link"

const testimonials = [
  {
    quote: "Inievo transformed our online presence completely. The dashboard they built lets us track everything in real-time. Best investment we made.",
    author: "Kamal Rahman",
    title: "CEO, Dhaka Fashion Hub",
    rating: 5
  },
  {
    quote: "Professional, punctual, and incredibly talented. They delivered exactly what they promised, on time and within budget. Highly recommend.",
    author: "Dr. Nusrat Jahan",
    title: "Cardiologist, Private Practice",
    rating: 5
  },
]

export function TrustCenter() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  return (
    <section className="py-16 md:py-24 bg-white" ref={containerRef}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-teal-600 uppercase bg-teal-50 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 tracking-tight">
            What Our Clients Say
          </h2>
          <p className="text-lg text-slate-600 max-w-xl mx-auto">
            Don&apos;t just take our word for it. Here&apos;s what business owners say about working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative bg-slate-50 rounded-2xl p-6 md:p-8 border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100 transition-all duration-300"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-teal-200 mb-4" fill="currentColor" />
              
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400" fill="currentColor" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-700 text-lg leading-relaxed mb-6">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-500">{testimonial.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dashboard Demo CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12"
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }} />
          </div>
          
          {/* Gradient Orb */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-teal-500/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                See Your Future Dashboard
              </h3>
              <p className="text-slate-300 max-w-md">
                Explore our interactive demo to see exactly how you&apos;ll manage your projects, track leads, and monitor growth.
              </p>
            </div>
            <Link
              href="/demo"
              className="group inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-medium hover:shadow-xl hover:shadow-white/10 transition-all duration-300 flex-shrink-0"
            >
              Explore Live Demo
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
