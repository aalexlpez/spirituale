"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { useRouter } from 'next/navigation'


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
      const url = new URL('/api/send-email-payment', process.env.NEXT_PUBLIC_BASE_URL || 'https://www.spiritualelife.com/');
      const response = await fetch(url.toString(), {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: (document.getElementById('email') as HTMLInputElement).value,
          firstName: (document.getElementById('firstName') as HTMLInputElement).value,
          idPersonal: (document.getElementById('cedula') as HTMLInputElement).value,
          lastName: (document.getElementById('lastName') as HTMLInputElement).value,
          address: (document.getElementById('address') as HTMLInputElement).value,
          state: (document.getElementById('state') as HTMLSelectElement).value,
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
                  <p>Posees 10 minutos para realizar el pago a esta cuenta:</p>
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
              <label htmlFor="address" className="block text-[#D2C7FF] mb-1 ">
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
                <label htmlFor="state" className="block text-[#D2C7FF] mb-1">
                  Estado
                </label>
                <select
                  id="state"
                  className="w-full px-4 py-2 rounded-md bg-[#0D0D55]/80 border border-[#D2C7FF]/30 text-white focus:outline-none focus:border-[#FF99DC] focus:ring-1 focus:ring-[#FF99DC] transition-colors"
                >
                  <option value="">Selecciona</option>
                  <option value="amazonas">Amazonas</option>
                  <option value="anzoategui">Anzoátegui</option>
                  <option value="apure">Apure</option>
                  <option value="aragua">Aragua</option>
                  <option value="barinas">Barinas</option>
                  <option value="bolivar">Bolívar</option>
                  <option value="carabobo">Carabobo</option>
                  <option value="cojedes">Cojedes</option>
                  <option value="delta-amacuro">Delta Amacuro</option>
                  <option value="distrito-capital">Distrito Capital</option>
                  <option value="falcon">Falcón</option>
                  <option value="guarico">Guárico</option>
                  <option value="lara">Lara</option>
                  <option value="merida">Mérida</option>
                  <option value="miranda">Miranda</option>
                  <option value="monagas">Monagas</option>
                  <option value="nueva-esparta">Nueva Esparta</option>
                  <option value="portuguesa">Portuguesa</option>
                  <option value="sucre">Sucre</option>
                  <option value="tachira">Táchira</option>
                  <option value="trujillo">Trujillo</option>
                  <option value="vargas">Vargas</option>
                  <option value="yaracuy">Yaracuy</option>
                  <option value="zulia">Zulia</option>
                </select>
              </div>
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

