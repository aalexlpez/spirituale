"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Sparkles, Sun, Heart, Star, Flower2, TrendingUp } from "lucide-react"

export default function VisionBoard() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="min-h-screen text-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Título animado */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : -20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mb-8 md:mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-pink-300 mb-2">Me presento...</h1>
          <div className="flex justify-center gap-2">
            <Sparkles className="text-yellow-300" />
            <Star className="text-yellow-300" />
            <Heart className="text-pink-400" />
            <Sun className="text-yellow-300" />
          </div>
        </motion.div>

        {/* Grid principal del vision board */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 relative">

          {/* Columna izquierda */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : -20 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-purple-900/40 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Star className="text-yellow-300 h-5 w-5" />
                <h3 className="text-xl font-bold text-pink-300">Mi Visión</h3>
              </div>
              <p className="text-sm text-white/90">
                Visualizo una vida de abundancia, paz interior y conexión con mi propósito. Cada día es una oportunidad
                para manifestar esta realidad y atraer las experiencias que nutren mi alma y expanden mi consciencia.
              </p>
            </div>

            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/4.PNG-VAH9YD2YTaAAXI53XwsEWFGETvdVSt.jpeg"
                alt="Vision board 2024"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-yellow-300 h-5 w-5" />
                  <p className="text-sm font-medium text-pink-200">2024: Año de manifestación</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Columna derecha */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, x: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col gap-10 items-center justify-center w-full h-full"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/5.JPG-opNMBadas4gP0KsjrA7guLr0k0oMoB.jpeg"
                alt="Atardecer en la playa"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/80 via-purple-900/30 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="text-themePink h-5 w-5" />
                  <p className="text-sm font-medium text-pink-200">2025: Año de logros</p>
                </div>
              </div>
            </div>

            <div className="bg-purple-900/40 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Flower2 className="text-green-300 h-5 w-5" />
                <h3 className="text-xl md:text-3xl font-bold text-pink-300">Proyección Consciente</h3>
              </div>
              <p className="text-sm md:text-xl text-white/90">
                Rodeo mi entorno físico con símbolos y recordatorios de mis metas y sueños. Cada objeto, imagen y
                palabra que elijo para mi espacio es una semilla plantada en el jardín de mi realidad futura.
              </p>
            </div>

            <div className="bg-purple-900/40 backdrop-blur-sm p-5 rounded-2xl shadow-lg border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="text-yellow-300 h-5 w-5" />
                <h3 className="text-xl md:text-3xl font-bold text-pink-300">Transformación Continua</h3>
              </div>
              <p className="text-sm md:text-xl text-white/90">
                Abrazo el cambio como parte natural de mi evolución. Cada desafío es una invitación a expandir mi
                consciencia y cada logro es un peldaño hacia una versión más elevada de mí misma.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Sección de texto biográfico */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 bg-purple-900/20 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-purple-500/10"
        >
          <p className="text-white/90 leading-relaxed text-sm md:text-xl">
            Hola, mi nombre es Alexandra y me llaman Ale, soy comunicadora social de profesión, con 10 años de
            experiencia en esa área sobre todo en marketing y marcas personales. Cuando llegó la pandemia, el encierro
            más el tiempo disponible me llevaron a un espacio de introspección y revisión interna, donde me di cuenta de
            que mi realidad me incomodaba más de lo que yo pensaba. Sentía que aunque era una profesional, no tenía
            sensación de logro y, aunque tenía sueños, no lograba hacerlos realidad. Ahí es donde empecé a descubrir las
            herramientas espirituales que me llevaron al equilibrio mental, al merecimiento y conectar con mi abundancia
            de manera consciente y a transformarme en consecuencia en una manifestadora efectiva de mi realidad
            perfecta, ahora mismo estas herramientas no solo me acompañan si no que además me han permitido ayudar y
            acompañar a otras personas a conectar con ellas mismas y materializar sus metas más anheladas. Son 5 años de
            espiritualidad resumidos que hoy están aquí disponibles para ti.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

