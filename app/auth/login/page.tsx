import { motion } from "framer-motion"
import { AuthForm } from "@/components/auth-form"

export const metadata = {
  title: "Login | Inievo",
  description: "Sign in to your Inievo dashboard and manage your digital systems.",
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full flex justify-center"
      >
        <AuthForm type="login" />
      </motion.div>
    </main>
  )
}
