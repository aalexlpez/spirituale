"use client"

export default function SpiritualForm() {
  
 

  return (
    <div className="flex justify-center">

      {/* Modal */}
      {true && (
        <div className="fixed inset-0 z-50">
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-navy/80 backdrop-blur-sm animate-fade-in"
            // onClick={() => onClose(false)}
          />

          {/* Modal content */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <div className="bg-gradient-to-br from-navy via-navy/95 to-navy/90 border border-pink/20 rounded-xl w-full max-w-lg animate-fade-up">
              {/* Header */}
              <div className="p-6 text-center">
                <h2 className="text-2xl font-bold bg-gradient-to-r from-pink via-lilac to-neon bg-clip-text text-transparent pb-2">
                  Comienza Tu Viaje Interior
                </h2>
                <p className="text-lilac/90">
                  Únete a nuestra comunidad espiritual y descubre el poder de la transformación personal
                </p>
              </div>

              {/* Form */}
              <form className="p-6 pt-2 space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Tu nombre espiritual"
                    className="w-full px-4 py-3 rounded-lg bg-navy/50 border border-pink/20 text-lilac placeholder:text-lilac/50 focus:outline-none focus:ring-2 focus:ring-pink/30 transition-all"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    placeholder="Tu correo electrónico"
                    className="w-full px-4 py-3 rounded-lg bg-navy/50 border border-pink/20 text-lilac placeholder:text-lilac/50 focus:outline-none focus:ring-2 focus:ring-pink/30 transition-all"
                  />
                </div>

                <div>
                  <textarea
                    placeholder="¿Qué te gustaría descubrir en tu camino espiritual?"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-navy/50 border border-pink/20 text-lilac placeholder:text-lilac/50 focus:outline-none focus:ring-2 focus:ring-pink/30 transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-lg bg-gradient-to-r from-pink via-lilac to-neon text-navy font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 shadow-lg"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                    />
                  </svg>
                  Iniciar Mi Transformación
                </button>

                <p className="text-center text-xs text-lilac/70 mt-4">
                  Al unirte, recibirás nuestra guía semanal de meditación y sanación
                </p>
              </form>

              {/* Close button */}
              <button
                // onClick={() => onClose(false)}
                className="absolute top-4 right-4 text-lilac/70 hover:text-lilac transition-colors"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

