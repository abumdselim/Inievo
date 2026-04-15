import { motion } from "framer-motion"
import { AuthForm } from "@/components/auth-form"
import Link from "next/link"
import { Sparkles, Shield, Zap, Globe } from "lucide-react"

export const metadata = {
  title: "Sign Up | Inievo",
  description: "Create your Inievo account and unlock your potential.",
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
}

const benefits = [
  { icon: Zap, text: "Instant setup", color: "text-yellow-400" },
  { icon: Shield, text: "Enterprise security", color: "text-blue-300" },
  { icon: Globe, text: "Global support", color: "text-green-400" },
]

export default function SignupPage() {
  return (
    <main className="min-h-screen flex">
      {/* Left Panel – Branding & Benefits */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden flex-col items-center justify-center px-12">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 left-1/4 w-56 h-56 bg-blue-500/20 rounded-full blur-3xl" />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative z-10 text-center max-w-md"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-10 flex justify-center">
            <Link href="/">
              <img
                src="https://res.cloudinary.com/det1qnlrh/image/upload/v1776244648/vo_x8e6ph.svg"
                alt="Inievo"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </motion.div>

          {/* Headline */}
          <motion.h2 variants={itemVariants} className="text-3xl font-bold text-white mb-4 leading-snug">
            Start building with <br />
            <span className="text-orange-400">Inievo</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-blue-200 text-base leading-relaxed mb-10">
            Join hundreds of businesses that trust Inievo to power their digital presence and operations.
          </motion.p>

          {/* Benefits */}
          <motion.ul variants={containerVariants} className="space-y-4 text-left mb-10">
            {benefits.map(({ icon: Icon, text, color }) => (
              <motion.li
                key={text}
                variants={itemVariants}
                className="flex items-center gap-3 bg-white/10 px-5 py-3 rounded-xl border border-white/15 backdrop-blur-sm"
              >
                <Icon className={`w-5 h-5 shrink-0 ${color}`} />
                <span className="text-white text-sm font-medium">{text}</span>
              </motion.li>
            ))}
          </motion.ul>

          {/* Sparkle badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            No credit card required — free to get started
          </motion.div>
        </motion.div>
      </div>

      {/* Right Panel – Form */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-16 bg-white">
        {/* Mobile logo */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8 lg:hidden"
        >
          <Link href="/">
            <img
              src="https://res.cloudinary.com/det1qnlrh/image/upload/v1776244648/vo_x8e6ph.svg"
              alt="Inievo"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </motion.div>

        <AuthForm type="signup" />
      </div>
    </main>
  )
}
