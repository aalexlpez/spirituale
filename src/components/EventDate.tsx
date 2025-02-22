"use client"

import { motion } from "framer-motion"

interface SpecialDateProps {
  date?: string
  subtitle?: string
}

export default function EventDate({
  date = "04.03.25",
  subtitle = "¡El universo está listo para escucharte!",
}: SpecialDateProps) {
  return (
    <div className="relative w-full max-w-2xl mx-auto px-4 py-12 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10"
      >
        <div className="text-[80px] md:text-[160px] font-bold leading-none bg-gradient-to-r from-themeNavy to-themePink bg-clip-text text-transparent">
          {date}
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 text-base md:text-3xl text-themeNavy font-light"
        >
          {subtitle}
        </motion.div>
      </motion.div>

      {/* Decorative elements */}
      {/* <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] aspect-square opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200/20 to-indigo-200/20 rounded-full animate-spin-slow" />
          <div className="absolute inset-[15%] bg-gradient-to-l from-purple-200/20 to-indigo-200/20 rounded-full animate-spin-slower" />
        </div>
      </div> */}
    </div>
  )
}

