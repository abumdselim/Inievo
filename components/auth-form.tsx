"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Mail, Lock, User, ArrowRight } from "lucide-react"
import { useState } from "react"

interface AuthFormProps {
  type: "login" | "signup" | "forgot"
  onSubmit?: (data: any) => void
}

export function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit?.(formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-md"
    >
      <div className="bg-white rounded-lg shadow-sm border border-slate-200 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-slate-900">
            {type === "login" && "Welcome Back"}
            {type === "signup" && "Create Account"}
            {type === "forgot" && "Reset Password"}
          </h1>
          <p className="text-slate-500 text-sm mt-2">
            {type === "login" && "Sign in to your Inievo dashboard"}
            {type === "signup" && "Join Inievo and start building amazing digital systems"}
            {type === "forgot" && "We'll send you a link to reset your password"}
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Field - Signup Only */}
          {type === "signup" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative"
            >
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Full Name
              </label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                  required
                />
              </div>
            </motion.div>
          )}

          {/* Email Field */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: type === "signup" ? 0.2 : 0.1 }}
            className="relative"
          >
            <label className="block text-sm font-medium text-slate-900 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                required
              />
            </div>
          </motion.div>

          {/* Password Field - Login & Signup */}
          {(type === "login" || type === "signup") && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: type === "signup" ? 0.3 : 0.2 }}
              className="relative"
            >
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                  required
                />
              </div>
            </motion.div>
          )}

          {/* Confirm Password - Signup Only */}
          {type === "signup" && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="relative"
            >
              <label className="block text-sm font-medium text-slate-900 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-lg focus:outline-none focus:border-blue-900 focus:ring-1 focus:ring-blue-900 transition-colors"
                  required
                />
              </div>
            </motion.div>
          )}

          {/* Forgot Password Link - Login Only */}
          {type === "login" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="flex justify-end"
            >
              <Link
                href="/auth/forgot"
                className="text-sm text-blue-900 hover:text-blue-700 transition-colors"
              >
                Forgot password?
              </Link>
            </motion.div>
          )}

          {/* Submit Button */}
          <motion.button
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: type === "signup" ? 0.5 : (type === "forgot" ? 0.2 : 0.4) }}
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group mt-6"
          >
            {type === "login" && "Sign In"}
            {type === "signup" && "Create Account"}
            {type === "forgot" && "Send Reset Link"}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </form>

        {/* Footer Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: type === "signup" ? 0.6 : (type === "forgot" ? 0.3 : 0.5) }}
          className="mt-6 pt-6 border-t border-slate-200"
        >
          {type === "login" && (
            <p className="text-center text-slate-600 text-sm">
              Don't have an account?{" "}
              <Link
                href="/auth/signup"
                className="text-blue-900 font-medium hover:text-blue-700 transition-colors"
              >
                Sign up
              </Link>
            </p>
          )}
          {type === "signup" && (
            <p className="text-center text-slate-600 text-sm">
              Already have an account?{" "}
              <Link
                href="/auth/login"
                className="text-blue-900 font-medium hover:text-blue-700 transition-colors"
              >
                Sign in
              </Link>
            </p>
          )}
          {type === "forgot" && (
            <p className="text-center text-slate-600 text-sm">
              Remember your password?{" "}
              <Link
                href="/auth/login"
                className="text-blue-900 font-medium hover:text-blue-700 transition-colors"
              >
                Back to login
              </Link>
            </p>
          )}
        </motion.div>
      </div>

      {/* Divider */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: type === "signup" ? 0.7 : (type === "forgot" ? 0.4 : 0.6) }}
        className="mt-6 text-center text-sm text-slate-500"
      >
        By continuing, you agree to our{" "}
        <Link href="/privacy" className="text-blue-900 hover:text-blue-700 transition-colors">
          Privacy Policy
        </Link>
      </motion.div>
    </motion.div>
  )
}
