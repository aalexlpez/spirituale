'use client'

import { motion } from 'framer-motion';
import Link from "next/link"

const ThanksPayment: React.FC = () => {

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
    >
      <div className="min-h-screen flex flex-col">
        {/* Main Content */}
        <main className="flex-grow flex flex-col items-center justify-center px-4 py-12 bg-gradient-to-b from-[#0D0D55] to-[#0D0D55]/80 text-white">
          <div className="max-w-3xl w-full text-center space-y-8">
            {/* Cosmic illustration */}
            <div className="relative h-40 mx-auto">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-[#D2C7FF]/30 animate-pulse"></div>
                <div className="absolute w-24 h-24 rounded-full bg-[#FF99DC]/40 animate-pulse delay-300"></div>
                <div className="absolute w-16 h-16 rounded-full bg-[#D9F103]/30 animate-pulse delay-700"></div>
              </div>
            </div>

            <div
              className=" flex flex-col items-start justify-center relative overflow-hidden"
            >

              {/* Main content */}
              <div className="max-w-3xl w-full text-center z-10">

                <h1 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: "#FF99DC" }}>
                  ¡Gracias por tu compra!
                </h1>

                <div className="h-0.5 w-24 mx-auto mb-8" style={{ backgroundColor: "#D9F103" }}></div>

                <p className="text-xl md:text-2xl mb-8 text-white">
                  Tu viaje espiritual acaba de dar un paso importante. Estamos emocionados de acompañarte en este camino de
                  transformación y crecimiento.
                </p>

                <div className="p-6 rounded-lg mb-10" style={{ backgroundColor: "rgba(210, 199, 255, 0.1)" }}>
                  <h2 className="text-2xl font-semibold mb-4" style={{ color: "#D2C7FF" }}>
                    Próximos pasos:
                  </h2>
                  <ul className="text-white text-left space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#FF99DC" }}
                        >
                          1
                        </div>
                      </div>
                      <div>
                        <strong>Revisa tu correo electrónico</strong> - En breve será enviado los detalles de acceso a tu curso.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#FF99DC" }}
                        >
                          2
                        </div>
                      </div>
                      <div>
                        <strong>Prepara tu espacio</strong> - Crea un ambiente tranquilo para comenzar tu práctica.
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="mt-1 flex-shrink-0">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center"
                          style={{ backgroundColor: "#FF99DC" }}
                        >
                          3
                        </div>
                      </div>
                      <div>
                        <strong>Únete a nuestra comunidad</strong> - Comparte tu experiencia con otros estudiantes.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>


            {/* CTA Button */}
            <div className="mt-10">
              <Link
                href="https://chat.whatsapp.com/L730CWaUBL1JgRhBqVHpfI"
                className="inline-flex items-center px-6 py-3 bg-[#FF99DC] text-[#0D0D55] rounded-full font-medium hover:bg-opacity-90 hover:scale-105 transition-transform duration-300 cursor-pointer"
              >
                ACCEDE AQUÍ A LA COMUNIDAD EN WHATSAPP
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
};

export default ThanksPayment;