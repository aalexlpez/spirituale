"use client";

import { useRouter } from 'next/navigation'
import type React from "react";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export default function JoinModal({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
}) {

  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setMounted(true);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement).value;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)
      .value;

    try {
      const response = await fetch("/api/send-mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });

      if (!response.ok) {
        throw new Error("Error en la solicitud");
      }

      const result = await response.json();
      console.log(result);
      setIsOpen(false);
    } catch (error) {
      console.error("Error enviando el formulario:", error);
      alert("Hubo un problema al enviar tu solicitud. Intenta de nuevo.");
    } finally {
      setIsLoading(false);
      setIsOpen(false);
      setTimeout(() => {
        router.push("/thanks");
      }, 500);
    }
  };

  if (!mounted) return null;

  return createPortal(
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        } transition-opacity duration-300`}
    >
      <div
        className="absolute inset-0 bg-themeNavy/30 backdrop-blur-sm"
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`
          relative
          w-[90%] max-w-lg max-h-[98%] overflow-y-auto
          bg-gradient-to-br from-themeLilac/100 to-themePink/20
          rounded-2xl shadow-2xl
          transform transition-all duration-300
          ${isOpen ? "scale-100 translate-y-0" : "scale-95 translate-y-8"}
          p-6 md:p-8
        `}
      >
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 text-themeNavy hover:text-themeNeon transition-colors"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="text-center mb-6">
          <div className="flex justify-center mb-4">
            <svg
              className="w-10 h-10 sm:w-14 sm:h-14 text-themePink"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
              />
            </svg>
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-themeNavy mb-2 font-text">
            ¡Empieza a crear tu realidad perfecta ahora!
          </h2>
          <p className={"text-themeNavy/80 text-base md:text-lg font-text"}>Conecta con tu magia creadora, esta es una senal.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Ingresa tu nombre y apellido"
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-themeLilac/50 
                       focus:outline-none focus:ring-2 focus:ring-themePink focus:border-transparent
                       bg-white/70 placeholder-themeNavy/50 text-themeNavy"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              placeholder="Ingresa tu correo electrónico"
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-themeLilac/50 
                       focus:outline-none focus:ring-2 focus:ring-themePink focus:border-transparent
                       bg-white/70 placeholder-themeNavy/50 text-themeNavy"
            />
          </div>
          <div>
            <textarea
              name="message"
              placeholder="¿Cuál es tu mayor reto espiritual? "
              required
              className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg border border-themeLilac/50 
                       focus:outline-none focus:ring-2 focus:ring-themePink focus:border-transparent
                       bg-white/70 placeholder-themeNavy/50 text-themeNavy min-h-[50px] sm:min-h-[100px] resize-none"
            />
          </div>

          <div className="bg-themeLilac/80 rounded-lg p-4 space-y-2">
            <p className="text-sm font-medium text-themeNavy font-text">
              Al registrarte...
            </p>
            <ul className="text-sm text-themeNavy/80 space-y-1">
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-themePink mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={6}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className='font-text'>Estarás en la clase gratuita "3 Pasos para Revelar tu Abundancia Consciente".</p>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-themePink mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={6}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className='font-text'>Ingresarás a una comunidad exclusiva con información diaria para elevar tu energía.</p>
              </li>
              <li className="flex items-center">
                <svg
                  className="w-4 h-4 text-themePink mr-2"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={6}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <p className='font-text'>Desarrollar todo tu potencial creador para sentirte en equilibrio emocional y espiritual.</p>
              </li>
            </ul>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={` font-text
              w-full py-3 px-6 rounded-lg
              bg-gradient-to-r from-themePink to-themeLilac
              text-themeNavy font-medium
              transform transition-all duration-300
              hover:from-themePink/90 hover:to-themeLilac/90
              focus:outline-none focus:ring-2 focus:ring-themeNeon focus:ring-offset-2
              disabled:opacity-50 disabled:cursor-not-allowed
              ${isLoading ? "animate-pulse" : ""}
            `}
          >
            {isLoading ? "Procesando..." : "¡Ya quiero estar en la clase!"}
          </button>
        </form>
      </div>
    </div>,
    document.body
  );
}