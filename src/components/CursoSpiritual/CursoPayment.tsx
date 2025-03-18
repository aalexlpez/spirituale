"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function CursoPayment() {
  const [selectedPayment, setSelectedPayment] = useState("pago-movil")
  const [price, setPrice] = useState<number | null>(null)
  const searchParams = useSearchParams()

  useEffect(() => {
    const queryPrice = searchParams.get("price")
    if (queryPrice) {
      setPrice(Number(queryPrice))
    }
  }, [searchParams])

  const handlePaymentChange = (method: string) => {
    setSelectedPayment(method)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aquí iría la lógica para procesar el pago
    console.log("Formulario enviado")
  }

  return (
    <section className="w-full max-w-2xl mx-auto pb-0 pt-32 md:py-40 px-5 ">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 text-themeNavy">Completa tu Inscripción</h1>
        <p className="text-lg text-themeNavy">Estás a un paso de comenzar tu evolución espiritual</p>
        {price && <p className="text-lg text-themeNavy">Monto a pagar: ${price} USD</p>}
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

            <div className="flex items-start space-x-2">
              <div className="flex h-5 items-center">
                <input
                  id="newsletter"
                  type="checkbox"
                  className="h-4 w-4 rounded border-[#D2C7FF]/50 bg-[#0D0D55] text-[#FF99DC] focus:ring-[#FF99DC] focus:ring-offset-[#0D0D55]"
                />
              </div>
              <label htmlFor="newsletter" className="text-[#D2C7FF] text-sm">
                Envíame novedades y ofertas por correo electrónico
              </label>
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
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="pago-movil"
                  name="payment-method"
                  value="pago-movil"
                  checked={selectedPayment === "pago-movil"}
                  onChange={() => handlePaymentChange("pago-movil")}
                  className="h-4 w-4 border-[#D2C7FF]/50 text-[#FF99DC] focus:ring-[#FF99DC] focus:ring-offset-[#0D0D55]"
                />
                <label htmlFor="pago-movil" className="text-white font-medium">
                  Pago Móvil
                </label>
              </div>

              {selectedPayment === "pago-movil" && (
                <div className="mt-3 pl-6 text-[#D2C7FF] space-y-1 text-sm">
                  <p>Posees 10 minutos para realizar el pago a esta cuenta:</p>
                  <p>Banco Mercantil / Banco de Venezuela</p>
                  <p>Cédula: 26819943</p>
                  <p>Teléfono: 04142525887</p>
                  <div className="mt-3 bg-[#D9F103]/10 p-3 rounded-lg border border-[#D9F103]/30">
                    <p className="flex items-center text-[#D9F103]">
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
              )}
            </div>

            {/* Zelle */}
            <div
              className={`border rounded-lg p-3 transition-all duration-200 ${selectedPayment === "zelle" ? "border-[#FF99DC]" : "border-[#D2C7FF]/30 hover:border-[#FF99DC]/50"}`}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="zelle"
                  name="payment-method"
                  value="zelle"
                  checked={selectedPayment === "zelle"}
                  onChange={() => handlePaymentChange("zelle")}
                  className="h-4 w-4 border-[#D2C7FF]/50 text-[#FF99DC] focus:ring-[#FF99DC] focus:ring-offset-[#0D0D55]"
                />
                <label htmlFor="zelle" className="text-white font-medium">
                  Zelle
                </label>
              </div>

              {selectedPayment === "zelle" && (
                <div className="mt-3 pl-6 text-[#D2C7FF] space-y-1 text-sm">
                  <p>Nombre: Gabriela Rivera</p>
                  <p>Email: Almarosagomez@gmail.com</p>
                  <div className="mt-3 bg-[#D9F103]/10 p-3 rounded-lg border border-[#D9F103]/30">
                    <p className="flex items-center text-[#D9F103]">
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
              )}
            </div>

            {/* Zinli */}
            <div
              className={`border rounded-lg p-3 transition-all duration-200 ${selectedPayment === "zinli" ? "border-[#FF99DC]" : "border-[#D2C7FF]/30 hover:border-[#FF99DC]/50"}`}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="zinli"
                  name="payment-method"
                  value="zinli"
                  checked={selectedPayment === "zinli"}
                  onChange={() => handlePaymentChange("zinli")}
                  className="h-4 w-4 border-[#D2C7FF]/50 text-[#FF99DC] focus:ring-[#FF99DC] focus:ring-offset-[#0D0D55]"
                />
                <label htmlFor="zinli" className="text-white font-medium">
                  Zinli
                </label>
              </div>

              {selectedPayment === "zinli" && (
                <div className="mt-3 pl-6 text-[#D2C7FF] space-y-1 text-sm">
                  <p>Email: Projectgabbb@gmail.com</p>
                  <div className="mt-3 bg-[#D9F103]/10 p-3 rounded-lg border border-[#D9F103]/30">
                    <p className="flex items-center text-[#D9F103]">
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
              )}
            </div>

            {/* Binance */}
            <div
              className={`border rounded-lg p-3 transition-all duration-200 ${selectedPayment === "binance" ? "border-[#FF99DC]" : "border-[#D2C7FF]/30 hover:border-[#FF99DC]/50"}`}
            >
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="binance"
                  name="payment-method"
                  value="binance"
                  checked={selectedPayment === "binance"}
                  onChange={() => handlePaymentChange("binance")}
                  className="h-4 w-4 border-[#D2C7FF]/50 text-[#FF99DC] focus:ring-[#FF99DC] focus:ring-offset-[#0D0D55]"
                />
                <label htmlFor="binance" className="text-white font-medium">
                  Binance
                </label>
              </div>

              {selectedPayment === "binance" && (
                <div className="mt-3 pl-6 text-[#D2C7FF] space-y-1 text-sm">
                  <p>Email: Acifuentesrondon@gmail.com</p>
                  <div className="mt-3 bg-[#D9F103]/10 p-3 rounded-lg border border-[#D9F103]/30">
                    <p className="flex items-center text-[#D9F103]">
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
              )}
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
            <div>
              <label htmlFor="country" className="block text-[#D2C7FF] mb-1">
                País / Región
              </label>
              <select
                id="country"
                className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
              >
                <option value="venezuela">Venezuela</option>
                <option value="colombia">Colombia</option>
                <option value="mexico">México</option>
                <option value="espana">España</option>
                <option value="usa">Estados Unidos</option>
              </select>
            </div>

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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="block text-[#D2C7FF] mb-1">
                  Ciudad
                </label>
                <input
                  id="city"
                  type="text"
                  required
                  className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="postalCode" className="block text-[#D2C7FF] mb-1">
                  Código postal (opcional)
                </label>
                <input
                  id="postalCode"
                  type="text"
                  className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
                />
              </div>
              <div>
                <label htmlFor="state" className="block text-[#D2C7FF] mb-1">
                  Estado
                </label>
                <select
                  id="state"
                  className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
                >
                  <option value="">Selecciona</option>
                  <option value="caracas">Caracas</option>
                  <option value="miranda">Miranda</option>
                  <option value="zulia">Zulia</option>
                  <option value="aragua">Aragua</option>
                  <option value="carabobo">Carabobo</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Botón de Finalizar */}
        <button
          type="submit"
          className="w-full bg-[#FF99DC] hover:bg-[#FF99DC]/90 text-[#0D0D55] font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-lg text-lg"
        >
          Finalizar el pedido
        </button>
      </form>
    </section>
  )
}

