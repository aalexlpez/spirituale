"use client"

import type React from "react"

import { useState } from "react"
import { Sparkles, Send } from "lucide-react"

export default function FormCaptureData() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    // Aquí iría la lógica de suscripción
  }

  return (
    <div className="min-h-[400px] w-full bg-gradient-to-b from-purple-50 to-white px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-md space-y-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Sparkles className="h-12 w-12 text-purple-600" />
          </div>
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-purple-900 sm:text-4xl">
            Descubre tu Camino Interior
          </h2>
          <p className="mt-4 text-lg text-purple-600">
            Únete a nuestra comunidad espiritual y recibe guía semanal para tu desarrollo personal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div className="group relative -space-y-px rounded-md shadow-sm">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full rounded-lg border border-purple-200 bg-white/80 px-4 py-3 text-purple-900 placeholder-purple-400 backdrop-blur-sm transition-all duration-200 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
              placeholder="Tu email de conexión espiritual..."
            />
          </div>

          <button
            type="submit"
            className="group relative flex w-full items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-3 text-white transition-all duration-200 hover:bg-purple-700 hover:shadow-lg hover:shadow-purple-500/20"
          >
            <span>Comienza Tu Viaje Espiritual</span>
            <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>

          {isSubmitted && (
            <div className="text-center text-sm text-purple-600">✨ Bienvenido/a a nuestra comunidad espiritual</div>
          )}
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-purple-200"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-purple-500">Únete a más de 1,000 buscadores espirituales</span>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-center space-x-4">
          <div className="flex -space-x-1 overflow-hidden">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="inline-block h-8 w-8 rounded-full border-2 border-white bg-purple-100" />
            ))}
          </div>
          <div className="text-sm text-purple-500">en su camino hacia la iluminación</div>
        </div>
      </div>
    </div>
  )
}

