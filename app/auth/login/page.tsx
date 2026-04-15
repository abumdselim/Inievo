import { motion } from "framer-motion"
import { AuthForm } from "@/components/auth-form"
import Link from "next/link"
import { Sparkles } from "lucide-react"

export const metadata = {
  title: "Login | Inievo",
  description: "Sign in to your Inievo dashboard and manage your digital systems.",
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

export default function LoginPage() {
  return (
    <main className="min-h-screen flex">
      {/* Left Panel – Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 relative overflow-hidden flex-col items-center justify-center px-12">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-blue-600/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-orange-500/10 rounded-full blur-3xl" />
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
            Welcome back to <br />
            <span className="text-orange-400">Inievo</span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-blue-200 text-base leading-relaxed mb-10">
            Sign in and take control of your digital systems — smarter, faster, and built for growth.
          </motion.p>

          {/* Sparkle badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-white/10 text-white text-sm px-4 py-2 rounded-full border border-white/20 backdrop-blur-sm"
          >
            <Sparkles className="w-4 h-4 text-orange-400" />
            Trusted by 500+ businesses worldwide
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

        <AuthForm type="login" />
      </div>
    </main>
  )
}
