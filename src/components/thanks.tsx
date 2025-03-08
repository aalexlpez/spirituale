'use client'

import { motion } from 'framer-motion';
import Link from "next/link"
import { useState, useEffect } from 'react';

const ThanksPage: React.FC = () => {
  const [tooltip, setTooltip] = useState('');
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const copyToClipboard = (text: string, message: string, event: React.MouseEvent) => {
    navigator.clipboard.writeText(text).then(() => {
      setTooltip(message);
      if (isMobile) {
        setTooltipPosition({ x: window.innerWidth / 2, y: window.innerHeight - 50 });
      } else {
        setTooltipPosition({ x: event.clientX, y: event.clientY });
      }
      setTimeout(() => setTooltip(''), 3000);
    });
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (tooltip && !isMobile) {
      setTooltipPosition({ x: event.clientX, y: event.clientY });
    }
  };

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen flex flex-col"
      onMouseMove={handleMouseMove}
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

            {/* Thank you message */}
            <h1 className="text-4xl md:text-6xl font-bold text-white font-title">
              ¡Felicidades <span className="text-[#FF99DC]">por dar</span> este paso!
            </h1>

            <p className="text-xl text-[#D2C7FF] max-w-2xl mx-auto font-text">
              Los cambios que has estado buscando empezarán a manifestarse ahora mismo. Vía email te enviaremos todos los detalles que necesitas para continuar.
            </p>

            <div className="w-full max-w-md mx-auto h-px bg-gradient-to-r from-transparent via-[#D2C7FF]/50 to-transparent my-8"></div>

            {/* Next steps */}
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-[#0D0D55]/50 p-6 rounded-lg border border-[#D2C7FF]/20 hover:border-[#D2C7FF]/40 hover:scale-105 transition-transform duration-300" onClick={(e) => copyToClipboard('spirituale@gmail.com', '¡Correo spirituale@gmail.com copiado!', e)}>
                <div className="w-12 h-12 bg-[#FF99DC]/20 rounded-full flex items-center justify-center mx-auto mb-4" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#FF99DC]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Correo</h3>
                <p className="text-sm text-[#D2C7FF]/80 mt-2">
                  Mantente atenta a tu correo
                </p>
              </div>

              <div className="bg-[#0D0D55]/50 p-6 rounded-lg border border-[#D2C7FF]/20 hover:border-[#D2C7FF]/40 hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={(e) => copyToClipboard('@spiritu.alee', '¡Instagram @spiritu.alee copiado!', e)}>
                <div className="w-12 h-12 bg-[#D9F103]/20 rounded-full flex items-center justify-center mx-auto mb-4" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#D9F103]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M18.36 5.64a9 9 0 11-12.72 0M12 3v9"
                    />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Redes sociales</h3>
                <p className="text-sm text-[#D2C7FF]/80 mt-2">Ingresa a Instagram aquí para vivir la experiencia en tiempo real</p>
              </div>

              <div className="bg-[#0D0D55]/50 p-6 rounded-lg border border-[#D2C7FF]/20 hover:border-[#D2C7FF]/40 hover:scale-105 transition-transform duration-300 cursor-pointer" onClick={(e) => copyToClipboard('https://www.spiritualelife.com/', '¡Página web https://www.spiritualelife.com/ copiada!', e)}>
                <div className="w-12 h-12 bg-[#D2C7FF]/20 rounded-full flex items-center justify-center mx-auto mb-4" >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 text-[#D2C7FF]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white">Acción</h3>
                <p className="text-sm text-[#D2C7FF]/80 mt-2">¡Comparte esta información con tu amiga! En compañia nos va mejor.</p>
              </div>
            </div>

            {/* Tooltip */}
            {tooltip && (
              <div
                className={`fixed bg-themeLilac border-themeNavy text-themeNavy py-2 px-4 rounded-lg ${isMobile ? 'text-sm bottom-4 left-1/2 transform -translate-x-1/2' : ''}`}
                style={{ top: isMobile ? 'auto' : tooltipPosition.y, left: isMobile ? '50%' : tooltipPosition.x, transform: isMobile ? 'translateX(-50%)' : 'none' }}
              >
                {tooltip}
              </div>
            )}


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

export default ThanksPage;