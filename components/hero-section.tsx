"use client"

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion"
import { ArrowRight, Play, Sparkles } from "lucide-react"
import Link from "next/link"
import { useEffect, useRef, useState } from "react"

// Animated gradient orb component
function GradientOrb({ 
  className, 
  delay = 0,
  color = "teal"
}: { 
  className?: string
  delay?: number
  color?: "teal" | "orange" | "purple"
}) {
  const colorMap = {
    teal: "from-teal-200/40 via-teal-100/20 to-transparent",
    orange: "from-orange-200/30 via-orange-100/15 to-transparent",
    purple: "from-violet-200/20 via-violet-100/10 to-transparent"
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay, ease: "easeOut" }}
      className={`absolute rounded-full bg-gradient-radial ${colorMap[color]} blur-3xl ${className}`}
    />
  )
}

// Floating particles
function FloatingParticle({ delay, duration, x, y }: { delay: number; duration: number; x: string; y: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ 
        opacity: [0, 1, 1, 0],
        y: [20, -20, -40, -60],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeOut"
      }}
      className="absolute w-1 h-1 rounded-full bg-teal-400/60"
      style={{ left: x, top: y }}
    />
  )
}

// Animated text reveal
function AnimatedText({ children, delay = 0 }: { children: string; delay?: number }) {
  const words = children.split(" ")
  
  return (
    <span className="inline">
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{
            duration: 0.6,
            delay: delay + i * 0.05,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block mr-[0.25em]"
        >
          {word}
        </motion.span>
      ))}
    </span>
  )
}

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })
  
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30 })
  const y = useTransform(smoothProgress, [0, 1], [0, 200])
  const opacity = useTransform(smoothProgress, [0, 0.5], [1, 0])
  const scale = useTransform(smoothProgress, [0, 0.5], [1, 0.95])
  
  // Mouse parallax
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      mouseX.set((clientX - innerWidth / 2) / 50)
      mouseY.set((clientY - innerHeight / 2) / 50)
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 })
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 })

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-[#FAFAF8] pt-20 md:pt-0"
    >
      {/* Premium Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle noise texture */}
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        
        {/* Animated gradient orbs with parallax */}
        <motion.div style={{ x: springX, y: springY }}>
          <GradientOrb 
            className="w-[600px] h-[600px] -top-32 -left-32" 
            color="teal" 
            delay={0}
          />
          <GradientOrb 
            className="w-[500px] h-[500px] top-1/3 -right-48" 
            color="orange" 
            delay={0.3}
          />
          <GradientOrb 
            className="w-[400px] h-[400px] bottom-0 left-1/3" 
            color="purple" 
            delay={0.6}
          />
        </motion.div>
        
        {/* Floating particles */}
        {mounted && (
          <>
            <FloatingParticle delay={0} duration={4} x="20%" y="60%" />
            <FloatingParticle delay={1} duration={5} x="70%" y="40%" />
            <FloatingParticle delay={2} duration={4.5} x="40%" y="70%" />
            <FloatingParticle delay={0.5} duration={5.5} x="80%" y="60%" />
            <FloatingParticle delay={1.5} duration={4} x="30%" y="50%" />
          </>
        )}
        
        {/* Subtle grid lines */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0,0,0,0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0,0,0,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      {/* Content */}
      <motion.div
        style={{ opacity, scale }}
        className="relative z-10 mx-auto max-w-6xl px-6 text-center"
      >
        {/* Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 md:mb-10"
        >
          <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 text-sm font-medium text-gray-700 shadow-sm hover:shadow-md transition-shadow duration-300 cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500" />
            </span>
            Now accepting Q2 2026 projects
            <Sparkles className="w-3.5 h-3.5 text-teal-500" />
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 leading-[1.05] tracking-tight"
        >
          <AnimatedText delay={0.2}>Premium Digital</AnimatedText>
          <br className="hidden sm:block" />
          <AnimatedText delay={0.4}>Systems for</AnimatedText>{" "}
          <motion.span 
            className="relative inline-block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <span className="text-gradient">Ambitious Brands</span>
            {/* Animated underline */}
            <motion.svg
              className="absolute -bottom-2 md:-bottom-3 left-0 w-full"
              viewBox="0 0 300 12"
              fill="none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
            >
              <motion.path
                d="M2 10C50 4 150 2 298 6"
                stroke="url(#hero-gradient)"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.2, ease: [0.22, 1, 0.36, 1] }}
              />
              <defs>
                <linearGradient id="hero-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#0D9488" />
                  <stop offset="50%" stopColor="#14B8A6" />
                  <stop offset="100%" stopColor="#F97316" />
                </linearGradient>
              </defs>
            </motion.svg>
          </motion.span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 md:mt-10 text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Architecturally sound websites. Cohesive brand identities.{" "}
          <span className="text-gray-900 font-normal">Growth engines that scale.</span>{" "}
          For businesses that refuse to settle for ordinary.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#book"
            className="group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gray-900 px-8 py-4 text-base font-medium text-white transition-all duration-500 hover:shadow-2xl hover:shadow-gray-900/20 w-full sm:w-auto"
          >
            <span className="relative z-10 flex items-center gap-2">
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-gray-800 via-gray-900 to-gray-800"
              initial={{ x: "-100%" }}
              whileHover={{ x: "100%" }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            />
          </Link>
          
          <Link
            href="#portfolio"
            className="group inline-flex items-center justify-center gap-3 rounded-full border border-gray-200 bg-white/50 backdrop-blur-sm px-8 py-4 text-base font-medium text-gray-700 transition-all duration-300 hover:border-gray-300 hover:bg-white hover:shadow-lg w-full sm:w-auto"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 group-hover:bg-teal-50 group-hover:scale-110 transition-all duration-300">
              <Play className="w-4 h-4 ml-0.5 text-gray-600 group-hover:text-teal-600 transition-colors" fill="currentColor" />
            </span>
            See Our Work
          </Link>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
          className="mt-20 md:mt-24"
        >
          <p className="text-sm text-gray-500 mb-8 tracking-wide uppercase">
            Trusted by growing businesses across Bangladesh
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-40 hover:opacity-60 transition-opacity duration-500">
            {["Company 1", "Company 2", "Company 3", "Company 4", "Company 5"].map((company, i) => (
              <motion.div 
                key={company}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + i * 0.1, duration: 0.5 }}
                className="h-8 w-24 bg-gray-300 rounded"
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-gray-300 flex items-start justify-center p-2 hover:border-gray-400 transition-colors cursor-pointer"
        >
          <motion.div 
            className="w-1.5 h-1.5 rounded-full bg-gray-400"
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
