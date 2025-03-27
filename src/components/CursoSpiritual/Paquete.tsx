"use client"

import Image from "next/image"
import { Check } from "lucide-react"
import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import Link from "next/link"

export default function Paquete() {
    const headerRef = useRef(null)
    const cardRef = useRef(null)
    const featuresRef = useRef(null)

    const headerInView = useInView(headerRef, { once: true, amount: 0.3 })
    const cardInView = useInView(cardRef, { once: true, amount: 0.3 })
    const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 })

    // Animation variants
    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const itemVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 },
        },
    }

    const bonusVariant = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4, delay: 0.2 },
        },
    }

    const priceVariant = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                delay: 0.6,
                type: "spring",
                stiffness: 200,
            },
        },
    }

    const buttonVariant = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: 0.8,
                type: "spring",
                stiffness: 200,
            },
        },
    }

    return (
        <main className="min-h-screen text-themeLilac overflow-hidden relative gap-20">
            {/* Header Section */}
            <motion.section
                ref={headerRef}
                className="relative z-10 px-4 text-center max-w-5xl mx-auto"
                initial="hidden"
                animate={headerInView ? "visible" : "hidden"}
                variants={fadeIn}
            >
                <motion.h1
                    className="text-5xl md:text-7xl font-bold mb-4"
                    variants={{
                        hidden: { opacity: 0, y: -30 },
                        visible: {
                            opacity: 1,
                            y: 0,
                            transition: { duration: 0.7, delay: 0.2 },
                        },
                    }}
                >
                    <span className="bg-gradient-to-r bg-clip-text text-transparent from-themeLilac to-themePink">
                        7 DÍAS SPIRITUALES
                    </span>
                </motion.h1>
                <motion.p
                    className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.7, delay: 0.4 } },
                    }}
                >
                    El programa online para mujeres ocupadas que están comprometidas con su bienestar espiritual y el logro de sus
                    deseos y metas, respondiendo al llamado de{" "}
                    <br />
                    <span className="font-extrabold text-themePink"> conectar con su magia creadora</span>
                </motion.p>
            </motion.section>

            {/* Cards Section */}
            <motion.section
                ref={cardRef}
                className="grid items-start justify-center"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={cardInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.7, delay: 0.2 }}
            >
                <Image
                    src="/images/PRODUCTOS_BONO.png"
                    alt="Vision board 2024"
                    className="object-cover"
                    priority
                    width={850}
                    height={850}
                />
            </motion.section>

            {/* Features Section */}
            <motion.section
                ref={featuresRef}
                className="relative z-10 py-12 px-4 max-w-3xl mx-auto"
                initial="hidden"
                animate={featuresInView ? "visible" : "hidden"}
                variants={fadeIn}
            >
                <motion.h2
                    className="text-2xl md:text-3xl font-bold text-center mb-6"
                    variants={{
                        hidden: { opacity: 0 },
                        visible: { opacity: 1, transition: { duration: 0.5, delay: 0.2 } },
                    }}
                >
                    <p>En resumen, mira TODO lo que incluye:</p>
                </motion.h2>
                <motion.div
                    className="bg-themeLilac/95 hover:scale-125 transition-all duration-300 rounded-xl p-6 backdrop-blur-sm shadow-2xl "
                    variants={{
                        hidden: { opacity: 0, y: 40 },
                        visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
                    }}
                >
                    <motion.div className="space-y-4 mb-8 " variants={staggerContainer}>
                        <motion.div className="flex items-start gap-3" variants={itemVariant}>
                            <div className="mt-1 bg-themePink rounded-full p-0.5">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-themeNavy font-extrabold">7 clases virtuales pregrabadas</p>
                        </motion.div>
                        <motion.div className="flex items-start gap-3" variants={itemVariant}>
                            <div className="mt-1 bg-themePink rounded-full p-0.5">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-themeNavy font-extrabold">2 sesiones en vivo de desarrollo y aclarar dudas</p>
                        </motion.div>
                        <motion.div className="flex items-start gap-3" variants={itemVariant}>
                            <div className="mt-1 bg-themePink rounded-full p-0.5">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-themeNavy font-extrabold">Acceso a las grabaciones durante (1) mes</p>
                        </motion.div>
                        <motion.div className="flex items-start gap-3" variants={itemVariant}>
                            <div className="mt-1 bg-themePink rounded-full p-0.5">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-themeNavy font-extrabold">Comunidad exclusiva de WhatsApp</p>
                        </motion.div>
                        <motion.div className="flex items-start gap-3" variants={itemVariant}>
                            <div className="mt-1 bg-themePink rounded-full p-0.5">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-themeNavy font-extrabold">Workbooks, meditaciones y herramientas spirituales</p>
                        </motion.div>
                        <motion.div className="flex items-start gap-3" variants={itemVariant}>
                            <div className="mt-1 bg-themePink rounded-full p-0.5">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-themeNavy font-extrabold">
                                🔥 Bonus de acción inmediata para las primeras 24 horas: (1) Sesión con Ale para la creación de Tu Visión Board Perfecto✨
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div className="space-y-3 mb-10" variants={staggerContainer}>
                        <motion.div className="flex items-start gap-3 text-themeNavy font-semibold" variants={bonusVariant}>
                            <div className="mt-1 text-orange-500 font-bold">🎁</div>
                            <p>
                                <span className="font-extrabold">BONO 1:</span> Lectura completa de Cartas
                            </p>
                        </motion.div>
                        <motion.div className="flex items-start gap-3 text-themeNavy font-semibold" variants={bonusVariant}>
                            <div className="mt-1 text-orange-500 font-bold">🎁</div>
                            <p>
                                <span className="font-extrabold">BONO 2:</span> Ritual de Limpieza y Abundancia
                            </p>
                        </motion.div>
                        <motion.div className="flex items-start gap-3 text-themeNavy font-semibold" variants={bonusVariant}>
                            <div className="mt-1 text-orange-500 font-bold">🎁</div>
                            <p>
                                <span className="font-extrabold">BONO 3:</span> Guía de Abundancia
                            </p>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="border-t border-gray-600 pt-6 text-center"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: { opacity: 1, transition: { duration: 0.5, delay: 0.5 } },
                        }}
                    >
                        <motion.p
                            className="text-xl text-themeNavy font-extrabold"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.4, delay: 0.5 } },
                            }}
                        >
                            Precio de Lanzamiento
                        </motion.p>
                        <motion.p
                            className="text-red-600 line-through text-xl"
                            variants={{
                                hidden: { opacity: 0 },
                                visible: { opacity: 1, transition: { duration: 0.4, delay: 0.6 } },
                            }}
                        >
                            $300 USD
                        </motion.p>
                        <motion.p className="text-green-700 text-5xl font-bold my-2" variants={priceVariant}>
                            $59,99 USD
                        </motion.p>
                        <motion.button
                            className="mt-4 bg-themePink text-themeNavy transform animate-scaleInOut border border-themeNavy font-bold  hover:bg-themeNeon py-3 px-8 rounded-full text-lg  "
                            variants={buttonVariant}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Link href={"/pago?price=59.99"}> QUIERO INSCRIBIRME YA</Link>
                           
                        </motion.button>
                    </motion.div>
                </motion.div>
            </motion.section>
        </main>
    )
}

