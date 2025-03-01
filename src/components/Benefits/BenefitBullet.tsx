"use client"

import type React from "react"

import { motion } from "framer-motion"
import clsx from "clsx"
import type { IBenefitBullet } from "@/types"

// Exportamos las variantes de animación para que puedan ser importadas
export const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

const BenefitBullet: React.FC<IBenefitBullet & { imageAtRight?: boolean }> = ({
  title,
  description,
  icon,
  imageAtRight,
}) => {
  // Determinamos los colores basados en imageAtRight
  const textColor = imageAtRight ? "text-themeNavy" : "text-themeLilac"

  return (
    <motion.div className="flex flex-col mb-2 sm:mb-4 last:mb-0 " variants={childVariants}>
      <div className="flex items-start gap-3">
        {/* Contenedor del icono */}
        <div className={clsx("flex-shrink-0 mt-0.5", textColor)}>{icon}</div>

        {/* Contenedor del texto */}
        <div className="flex-1">
          {/* {title && <h4 className={clsx("text-lg font-semibold mb-2", textColor)}>{title}</h4>} */}

          <p className={clsx("text-base md:text-xl", textColor)}>{description}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default BenefitBullet

