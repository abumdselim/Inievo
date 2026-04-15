import { AuthForm } from "@/components/auth-form"
import { motion } from "framer-motion"

export const metadata = {
  title: "Forgot Password | Inievo",
  description: "Reset your Inievo password securely.",
}

export default function ForgotPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full flex justify-center"
      >
        <AuthForm type="forgot" />
      </motion.div>
    </main>
  )
}
