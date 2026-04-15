"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Can I use these for client projects?",
    answer: "Absolutely! All our templates come with a commercial license. You can use them for unlimited personal and client projects. The only restriction is redistribution or resale of the source code itself."
  },
  {
    question: "Do I need to know Next.js?",
    answer: "Basic familiarity with React is helpful, but our templates are well-documented with clear comments. Each product includes setup guides and video walkthroughs to get you started quickly."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bKash, Nagad, bank transfer, and international cards via Stripe. All transactions are secure and you'll receive instant download access after payment."
  }
]

export function ShopFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#050B14]">
      <div className="max-w-4xl mx-auto">
        {/* Trust Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-lg text-gray-300 italic">
            &ldquo;Every product is the same code quality we deliver to clients paying BDT 2–15 lakh.&rdquo;
          </p>
        </motion.div>
        
        {/* FAQ */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl font-bold text-white text-center mb-10"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="border border-slate-700/50 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 text-left bg-[#0F2035] hover:bg-[#132742] transition-colors"
              >
                <span className="font-semibold text-white">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-400 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 pt-0 bg-[#0F2035]">
                      <p className="text-gray-400 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
