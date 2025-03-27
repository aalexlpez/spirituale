"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

export const childVariants = {
  offscreen: {
    opacity: 0,
    x: -50,
  },
  onscreen: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
}

export default function VisionBoard() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="w-10/12 mx-auto px-4 sm:px-6">
      {/* Título animado */}

      {/* Sección de texto biográfico */}
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="p-4 md:p-6 text-center"
        >
          <p className="text-white/90 leading-relaxed text-base md:text-lg lg:text-4xl">
            Esto que he preparado para ti es el resultado de 5 años de espiritualidad y resultados hermosos como este,
            en donde en tan solo 3 meses manifesté el viaje soñado para mi cumpleaños.
          </p>
          <br />
          <p className="leading-relaxed text-xl md:text-4xl lg:text-6xl font-extrabold text-themePink">
            ¡Atrévete a cumplirte tus sueños!
          </p>
        </motion.div>

      {/* Grid principal del vision board */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-0 place-self-center">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-6 md:col-span-2"
        >
          <div className="grid items-start rounded-2xl scale-125">
            <Image
              src="/images/VB.png"
              alt="Vision board 2024"
              className="object-cover"
              priority
              width={1366}
              height={768}
            />

          </div>
        </motion.div>
      </div>
    </div>
  )
}

