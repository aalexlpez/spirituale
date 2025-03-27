"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from 'next/navigation'
import { motion, AnimatePresence } from "framer-motion"

export default function CursoPayment() {
  const [selectedPayment, setSelectedPayment] = useState("pago-movil")
  const [price, setPrice] = useState<number | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    if (searchParams) {
      const queryPrice = searchParams.get("price")
      if (queryPrice) {
        setPrice(Number(queryPrice))
      }
    }
  }, [searchParams])

  const handlePaymentChange = (method: string) => {
    setSelectedPayment(prevMethod => prevMethod === method ? "" : method)
  }

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault()
    console.log("Formulario enviado")
    setIsSubmitting(true)

    try {
      // const url = new URL('/api/send-email-payment', process.env.NEXT_PUBLIC_BASE_URL || 'https://www.spiritualelife.com/');
      const response = await fetch("/api/send-email-payment", {
        // const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: (document.getElementById('email') as HTMLInputElement).value,
          titularNombre: (document.getElementById('titularNombre') as HTMLSelectElement)?.value || "",
          titularCorreo: (document.getElementById('titularCorreo') as HTMLSelectElement)?.value && "",
          firstName: (document.getElementById('firstName') as HTMLInputElement).value,
          lastName: (document.getElementById('lastName') as HTMLInputElement).value,
          telefono: (document.getElementById('telefono') as HTMLInputElement).value,
          idPersonal: (document.getElementById('cedula') as HTMLInputElement).value,
          address: (document.getElementById('address') as HTMLInputElement).value,
          country: (document.getElementById('country') as HTMLSelectElement).value,
          nota: (document.getElementById('nota') as HTMLSelectElement).value,
          paymentMethod: selectedPayment,
          price: price,
        }),
      })

      if (!response.ok) {
        throw new Error('Error en la solicitud')
      }

      const data = await response.json()
      console.log('Respuesta del servidor:', data)
      router.push('/thanks-payment') // Redirigir a la página de agradecimiento
    } catch (error) {
      console.error('Error al procesar el pago:', error)
      setIsSubmitting(false)
    }
  }

  return (
    <section className="w-full max-w-2xl mx-auto pb-0 pt-32 md:py-24 px-5 ">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-themeNavy">Completa tu Inscripción</h1>
        <p className="text-lg text-themeNavy">Estás a un paso de comenzar tu evolución espiritual</p>
        {price && <p className="text-lg text-themeNavy">Monto a pagar: <span className="font-extrabold">${price} USD</span></p>}
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Sección de Contacto */}
        <div className="bg-[#0D0D55]/90 rounded-xl p-6 shadow-lg border border-[#FF99DC]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#FF99DC] flex items-center">
            <span className="w-8 h-8 rounded-full bg-[#FF99DC]/20 flex items-center justify-center mr-2 text-[#FF99DC]">
              1
            </span>
            Contacto
          </h2>

          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-[#D2C7FF] mb-1">
                Correo electrónico
              </label>
              <input
                id="email"
                type="email"
                required
                className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
              />
            </div>

          </div>
        </div>

        {/* Sección de Pago */}
        <div className="bg-[#0D0D55]/90 rounded-xl p-6 shadow-lg border border-[#FF99DC]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#FF99DC] flex items-center">
            <span className="w-8 h-8 rounded-full bg-[#FF99DC]/20 flex items-center justify-center mr-2 text-[#FF99DC]">
              2
            </span>
            Pago
          </h2>
          <p className="text-[#D2C7FF] text-sm mb-4">Todas las transacciones son seguras y están encriptadas.</p>

          <div className="space-y-3">
            {/* Pago Móvil */}
            <div
              className={`border rounded-lg p-3 transition-all duration-200 ${selectedPayment === "pago-movil" ? "border-[#FF99DC]" : "border-[#D2C7FF]/30 hover:border-[#FF99DC]/50"}`}
              onClick={() => handlePaymentChange("pago-movil")}
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <label className="text-white font-medium">
                  Pago Móvil
                </label>
              </div>

              <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${selectedPayment === "pago-movil" ? "max-h-screen" : "max-h-0"}`}>
                <div className="mt-3 pl-6 text-[#D2C7FF] space-y-1 text-md">
                  {/* <p>Posees 10 minutos para realizar el pago a esta cuenta:</p> */}
                  <p>Banco Mercantil / Banco de Venezuela</p>
                  <p>Cédula: 26819943</p>
                  <p>Teléfono: 04142525887</p>
                  <div className="mt-3 bg-[#D9F103]/10 p-3 rounded-lg border border-[#D9F103]/30">
                    <p className="flex items-center text-[#D9F103] text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Luego haz clic en el botón Finalizar el Pedido para completar tu compra
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zelle */}
            <div
              className={`border rounded-lg p-3 transition-all duration-200 ${selectedPayment === "zelle" ? "border-[#FF99DC]" : "border-[#D2C7FF]/30 hover:border-[#FF99DC]/50"}`}
              onClick={() => handlePaymentChange("zelle")}
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <label className="text-white font-medium">
                  Zelle
                </label>
              </div>

              <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${selectedPayment === "zelle" ? "max-h-screen" : "max-h-0"}`}>
                <div className="mt-3 pl-6 text-[#D2C7FF] space-y-1 text-md">
                  <p>Nombre: Gabriela Rivera</p>
                  <p>Email: Almarosagomez@gmail.com</p>
                  <div className="mt-3 bg-[#D9F103]/10 p-3 rounded-lg border border-[#D9F103]/30">
                    <p className="flex items-center text-[#D9F103] text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Luego haz clic en el botón Finalizar el Pedido para completar tu compra
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Zinli */}
            <div
              className={`border rounded-lg p-3 transition-all duration-200 ${selectedPayment === "zinli" ? "border-[#FF99DC]" : "border-[#D2C7FF]/30 hover:border-[#FF99DC]/50"}`}
              onClick={() => handlePaymentChange("zinli")}
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <label className="text-white font-medium">
                  Zinli
                </label>
              </div>

              <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${selectedPayment === "zinli" ? "max-h-screen" : "max-h-0"}`}>
                <div className="mt-3 pl-6 text-[#D2C7FF] space-y-1 text-md">
                  <p>Email: Projectgabbb@gmail.com</p>
                  <div className="mt-3 bg-[#D9F103]/10 p-3 rounded-lg border border-[#D9F103]/30">
                    <p className="flex items-center text-[#D9F103] text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Luego haz clic en el botón Finalizar el Pedido para completar tu compra
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Binance */}
            <div
              className={`border rounded-lg p-3 transition-all duration-200 ${selectedPayment === "binance" ? "border-[#FF99DC]" : "border-[#D2C7FF]/30 hover:border-[#FF99DC]/50"}`}
              onClick={() => handlePaymentChange("binance")}
            >
              <div className="flex items-center space-x-2 cursor-pointer">
                <label className="text-white font-medium">
                  Binance
                </label>
              </div>

              <div className={`overflow-hidden transition-max-height duration-500 ease-in-out ${selectedPayment === "binance" ? "max-h-screen" : "max-h-0"}`}>
                <div className="mt-3 pl-6 text-[#D2C7FF] space-y-1 text-md">
                  <p>Email: Acifuentesrondon@gmail.com</p>
                  <div className="mt-3 bg-[#D9F103]/10 p-3 rounded-lg border border-[#D9F103]/30">
                    <p className="flex items-center text-[#D9F103] text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      Luego haz clic en el botón Finalizar el Pedido para completar tu compra
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sección de Dirección de Facturación */}
        <div className="bg-[#0D0D55]/90 rounded-xl p-6 shadow-lg border border-[#FF99DC]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#FF99DC] flex items-center">
            <span className="w-8 h-8 rounded-full bg-[#FF99DC]/20 flex items-center justify-center mr-2 text-[#FF99DC]">
              3
            </span>
            Dirección de facturación
          </h2>

          <div className="space-y-4">

            {(selectedPayment === "zelle" || selectedPayment === "zinli" || selectedPayment === "binance") &&
              <div className="space-y-4">
                <AnimatePresence>
                  <motion.div
                    key="pago-movil-field"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <label htmlFor="firstName" className="block text-[#D2C7FF] mb-1">
                      Titular de la cuenta
                    </label>
                    <input
                      id="titularNombre"
                      type="text"
                      required
                      className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
                    />
                    <p className="text-red-500 text-sm font-bold">{`*Nota: coloque nombre completo del titular de la cuenta ${selectedPayment === "zelle" ? "ZELLE" : ""}${selectedPayment === "zinli" ? "ZINLI" : ""}${selectedPayment === "binance" ? "BINANCE" : ""}.`}</p>
                    <label htmlFor="titular" className="block text-[#D2C7FF] mb-1">
                      Correo titular
                    </label>
                    <input
                      id="titularCorreo"
                      type="email"
                      required
                      className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
                    />
                    <p className="text-red-500 text-sm font-bold">{`*Nota: coloque el correo de la cuenta que emite el pago ${selectedPayment === "zelle" ? "ZELLE" : ""}${selectedPayment === "zinli" ? "ZINLI" : ""}${selectedPayment === "binance" ? "BINANCE" : ""}.`}</p>
                  </motion.div>
                </AnimatePresence>
              </div>
            }
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-[#D2C7FF] mb-1">
                  Nombre
                </label>
                <input
                  id="firstName"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-[#D2C7FF] mb-1">
                  Apellidos
                </label>
                <input
                  id="lastName"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="telefono" className="block text-[#D2C7FF] mb-1 ">
                Número de teléfono:
              </label>
              <input
                id="telefono"
                type="number"
                required
                className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
                style={{
                  appearance: 'textfield',
                  MozAppearance: 'textfield',
                  WebkitAppearance: 'none'
                }}
              />
            </div>

            <div>
              <label htmlFor="cedula" className="block text-[#D2C7FF] mb-1 ">
                Cédula:
              </label>
              <input
                id="cedula"
                type="number"
                required
                className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
                style={{
                  appearance: 'textfield',
                  MozAppearance: 'textfield',
                  WebkitAppearance: 'none'
                }}
              />
            </div>

            <div>
              <label htmlFor="address" className="block text-[#D2C7FF] mb-1">
                Dirección
              </label>
              <input
                id="address"
                type="text"
                required
                className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <div>
                <label htmlFor="country" className="block text-[#D2C7FF] mb-1">
                  País
                </label>
                <input
                  id="country"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="nota" className="block text-[#D2C7FF] mb-1">
                {"Si deseas, coloca aquí información sobre el pago para mayor identificación del mismo (número de referencia, correo, cédula):"}
              </label>
              <textarea
                id="nota"
                rows={4} // Puedes ajustar el número de filas según sea necesario
                className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
              ></textarea>
            </div>
          </div>
        </div>

        {/* Botón de Finalizar */}
        <button
          type="submit"
          className="w-full bg-[#FF99DC] border border-[#0D0D55]/50 hover:bg-[#FF99DC]/90 text-[#0D0D55] font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-lg"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Procesando...' : 'Finalizar el pedido'}
        </button>
      </form>
    </section>
  )
}

