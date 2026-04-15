import { AuthForm } from "@/components/auth-form"
import { motion } from "framer-motion"

export const metadata = {
  title: "Sign Up | Inievo",
  description: "Create an Inievo account and start building premium digital systems.",
}

export default function SignupPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4 py-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="w-full flex justify-center"
      >
        <AuthForm type="signup" />
      </motion.div>
    </main>
  )
}
