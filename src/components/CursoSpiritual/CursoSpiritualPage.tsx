"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Sparkles, Heart, Star } from "lucide-react"
import { motion, Variants } from "framer-motion"
import VisionBoard from "./VisionBoard"
import clsx from "clsx"
import Paquete from "./Paquete"

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};


export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

export default function CursoSpiritualPage() {
    const [scrollY, setScrollY] = useState(0)
    const heroRef = useRef<HTMLDivElement>(null)
    const testimonialsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll, { passive: true })
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    // Estilos parallax
    const parallaxStyle1 = {
        transform: `translateY(${scrollY * -0.08}px)`,
        transition: "transform 0.1s linear",
    }

    const parallaxStyle2 = {
        transform: `translateY(-${scrollY * 0.3}px)`,
        transition: "transform 0.1s linear",
    }

    const parallaxStyle3 = {
        transform: `translateX(${scrollY * 0.2}px)`,
        transition: "transform 0.1s linear",
    }

    const parallaxStyle4 = {
        transform: `translateX(-${scrollY * 0.2}px)`,
        transition: "transform 0.1s linear",
    }

    const childVariants = {
        offscreen: {
            opacity: 0,
            x: -100,
        },
        onscreen: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 2,
            }
        },
    };

    return (
        <>
            <motion.div
                ref={heroRef}
                className="relative min-h-screen flex flex-col items-center justify-center bg-themeNavy text-white overflow-hidden"
                variants={childVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: "url('images/hero-background.jpg')",
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        filter: "blur(5px)",
                    }}
                />

                {/* Elementos decorativos con parallax */}
                <div
                    className="absolute top-20 right-40 w-64 h-64 rounded-full bg-themePink opacity-30 blur-3xl"
                    style={parallaxStyle1}
                />
                <div
                    className="absolute bottom-40 left-20 w-96 h-96 rounded-full bg-themeLilac opacity-30 blur-3xl"
                    style={parallaxStyle2}
                />
                <div
                    className="absolute top-1/2 left-10 w-32 h-32 rounded-full bg-themeNeon opacity-20 blur-2xl"
                    style={parallaxStyle3}
                />
                <div
                    className="absolute top-1/3 right-20 w-48 h-48 rounded-full bg-white opacity-10 blur-2xl"
                    style={parallaxStyle4}
                />

                <div className="container mx-auto px-4 py-24 relative z-10 text-center">
                    <div className="inline-block mb-6 animate-float">
                        <Sparkles className="h-12 w-12 text-themePink mx-auto" />
                    </div>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                        ¿Estás lista para llegar a un nuevo nivel de Manifestación Consciente?
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
                        Bienvenida a 7 Días Spirituales
                    </p>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
                        El programa online para mujeres ocupadas que están comprometidas con su bienestar espiritual y el logro de sus deseos  y metas, respondiendo al llamado de <span className="font-extrabold text-themePink">conectar con su magia creadora</span>
                    </p>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
                        ¡Tu mejor momento acaba de empezar!
                    </p>

                    <Link
                        href="#payment"
                        className="inline-block px-8 py-4 text-lg transform animate-scaleInOut border-2 border-themeNavy font-bold bg-themePink text-themeNavy rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 hover:-translate-y-1"
                    >
                        QUIERO SEGUIR EVOLUCIONANDO
                    </Link>

                    <div className="mt-16 animate-bounce">
                        <ChevronDown className="h-8 w-8 mx-auto text-white/70" />
                    </div>
                </div>
            </motion.div>

            {/* Mi Avatar Section */}
            <motion.div
                className="bg-gradient-to-b from-themeNavy to-[#13135f] text-white py-24"
                variants={childVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                            ¡Reconoce la señal! Si estás aquí es porque sabes que eres capaz de evolucionar
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-white">
                                Hay tres cosas que yo ya sé que sientes, porque también lo he sentido:
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-themePink mr-2">✓</span>
                                    <span className="text-white/80">Estás segura de que hay algo en ti que quiere cambiar.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-themePink mr-2">✓</span>
                                    <span className="text-white/80">Hay un llamado a la evolución que no puedes ignorar.</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-themePink mr-2">✓</span>
                                    <span className="text-white/80">
                                        {"Y como dice Mia Astral: \"Una vez consciente, NO PUEDES SER INDIFERENTE\"."}
                                    </span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10">
                            <h3 className="text-xl font-bold mb-3 text-white">
                                Además, conozco tres cosas que también quieres hacer:
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-themePink mr-2">✓</span>
                                    <span className="text-white/80">
                                        Quieres atreverte a vivir una espiritualidad práctica y sencilla para lograr tu manifestación consciente de forma muy amable
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-themePink mr-2">✓</span>
                                    <span className="text-white/80">
                                        Quieres explotar esta ola de motivación como un punto de NO RETORNO.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-themePink mr-2">✓</span>
                                    <span className="text-white/80">Quieres trabajar para ti, tu bienestar y tu realidad perfecta.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="text-center mt-8 mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-white">¿Te gusta lo que lees?</h3>
                        <Link
                            href="#payment"
                            className="inline-block px-8 py-4transform animate-scaleInOut border-2 border-themeNavy text-themeNavy text-lg font-bold bg-themePink rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            QUIERO INSCRIBIRME YA
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Qué Haremos Section */}
            <div
                className="relative bg-themeNavy py-24 overflow-hidden"
            >
                {/* Background decorative elements */}
                <div
                    className="absolute top-20 right-20 w-96 h-96 rounded-full bg-themePink opacity-10 blur-3xl"
                    style={parallaxStyle1}
                />
                <div
                    className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-themeLilac opacity-10 blur-3xl"
                    style={parallaxStyle2}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-20 gap-4 grid">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                            ¿QUÉ HAREMOS?
                        </h2>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80">
                            Ahora es que tienes nuevos niveles para evolucionar…
                        </p>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80">
                            ¡El universo no te olvidó, te está mostrando lo que eres! Durante 7 días te mostraré que
                            <span className="font-extrabold text-themePink"> COMO ES ADENTRO, ES AFUERA</span>
                        </p>
                    </div>

                    {/* Journey path - decorative element */}
                    <div className="block absolute left-1/2 top-[300px] bottom-20 w-1 bg-gradient-to-b from-themePink to-themeLilac opacity-50 transform -translate-x-1/2 z-0"></div>

                    <div className="space-y-16">
                        {[
                            {
                                day: "DÍA 1",
                                title: "MIRANDO HACIA DENTRO",
                                description:
                                    "Hagamos juntas un viaje a nuestro interior donde reconozcamos tus mayores deseos, metas, ambiciones, donde profundicemos en la identificación de tus talentos y cómo tu cerebro trabaja con eso en conjunción a tus creencias, costumbres y prácticas. Utilizaremos meditaciones, preguntas poderosas y técnicas de tarot espiritual.",
                                icon: "Mirror",
                                align: "right",
                            },
                            {
                                day: "DÍA 2",
                                title: "APRENDIENDO DE MI CREENCIAS",
                                description:
                                    "Después de un vistazo a tu interior, ¿qué conclusiones tenemos? La información es poder. Revisemos una a una nuestras creencias, de donde vienen, si nos hacen sentido o para ti suena irracional. Sin juicio, construyamos una estructura general de las creencias que componen las diferentes áreas de tu vida y detectemos cómo influye en tu realidad.",
                                icon: "Brain",
                                align: "left",
                            },
                            {
                                day: "DÍA 3",
                                title: "REPROGRAMANDO MIS CREENCIAS",
                                description:
                                    "Con esta estructura general de tus creencias, ¡toca transformarlas y empoderarlas! Una vez saquemos a la luz cada uno de los detalles que se encuentran dentro de tu ser, tendrás la valentía de reprogramar tu cerebro, modificar tus pensamientos y endulzar tu diálogo interno hacia el logro de tus más anhelados resultados.",
                                icon: "Zap",
                                align: "right",
                            },
                            {
                                day: "DÍA 4",
                                title: "GENERANDO EMOCIONES-VIBRACIONES-FRECUENCIAS",
                                description:
                                    "Es hora de comunicarle al Universo nuestras más puras intenciones y lo haremos a través de su propio lenguaje: la vibración. Pero aunque suene abstracto, es bastante sencillo decidir la vibración que deseas hacerle llegar al universo. Inicia desde la emoción y aquí aprenderemos de manera práctica a establecer esta comunicación directa con la fuerza superior.",
                                icon: "Heart",
                                align: "left",
                            },
                            {
                                day: "DÍA 5",
                                title: "PRACTICANDO LA VIBRACIÓN CONSCIENTE",
                                description:
                                    "Manos a la obra. Empezaremos a emitir la vibración de forma muy consciente con ejercicios sencillos y prácticos que puedes incluir en tu rutina. Utilizaremos lo SpiriTips fáciles para todas y para todo tipo de procesos cognitivos.",
                                icon: "Star",
                                align: "right",
                            },
                            {
                                day: "DÍA 6",
                                title: "RECONOCIENDO MIS RECURSOS",
                                description:
                                    "¡La vibración perfecta viene desde el reconocimiento de tu poder! Identificamos tus más poderosas cualidades, conocimientos y recursos para generar el infinito mundo de posibilidades que podemos crear con nuestros super poderes.",
                                icon: "Tools",
                                align: "left",
                            },
                            {
                                day: "DÍA 7",
                                title: "VIBRANDO Y HACIENDO, VIBRANDO Y HACIENDO",
                                description:
                                    "No solo es vibrar, no solo es pensar, ¡el tiempo es oro! Cerramos con un precioso plan para construir nuestra realidad perfecta con intención y acción, manteniéndonos conectadas con la energía superior mientras hacemos todo lo terrenalmente posible para conseguir nuestras metas.",
                                icon: "Sparkles",
                                align: "right",
                            },
                        ].map((day, index) => (
                            <div key={index} className="relative">
                                {/* Day number circle for desktop - positioned on the timeline */}
                                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10 w-16 h-16 rounded-full bg-gradient-to-br from-themePink to-themeLilac items-center justify-center text-white font-bold text-xl shadow-lg">
                                    {index + 1}
                                </div>

                                {/* Content card with alternating layout */}
                                <div
                                    className={`lg:w-5/12 ${day.align === "left" ? "lg:ml-auto" : ""} transform hover:scale-105 transition-all duration-500`}
                                >
                                    <motion.div
                                        variants={childVariants}
                                        initial="offscreen"
                                        whileInView="onscreen"
                                        viewport={{ once: true }}
                                    >
                                        <div className="bg-gradient-to-br from-themePink to-themeLilac backdrop-blur-sm p-8 md:p-10 rounded-2xl hover:bg-themePink/20 transition-all duration-300 border border-white/10 shadow-xl">
                                            {/* Mobile day number */}
                                            <div className="lg:hidden flex items-center mb-6">
                                                <div className="bg-themeNavy px-4 py-2 rounded-xl text-themePink font-bold">{day.day}</div>
                                            </div>

                                            {/* Desktop day label */}
                                            <div className="hidden bg-themeNavy/70 px-4 py-2 rounded-xl text-themePink font-bold mb-4 lg:inline-block">
                                                {day.day}
                                            </div>

                                            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-themeNavy">{day.title}</h3>

                                            <div className="flex items-start gap-4">
                                                {day.icon === "Mirror" && <Image src={"/images/espejo-magico.png"} width={50} height={50} className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" alt={"espejo-magico"} />}
                                                {day.icon === "Brain" && <Image src={"/images/salud-mental.png"} width={50} height={50} className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" alt={"espejo-magico"} />}
                                                {day.icon === "Zap" && <Sparkles className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" />}
                                                {day.icon === "Heart" && <Heart className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" />}
                                                {day.icon === "Star" && <Star className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" />}
                                                {day.icon === "Tools" && <Image src={"/images/herramientas.png"} width={50} height={50} className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" alt={"espejo-magico"} />}
                                                {day.icon === "Sparkles" && <Sparkles className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" />}
                                                <p className="text-themeNavy/80 text-lg">{day.description}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <Link
                            href="#payment"
                            className="inline-block px-8 py-4 text-lg font-bold bg-themePink animate-scaleInOut border-2 border-themeNavy text-themeNavy rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            ¡QUIERO COMENZAR MI VIAJE!
                        </Link>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <motion.div
                ref={testimonialsRef}
                className="relative bg-gradient-to-b from-[#13135f] to-themeNavy text-white py-24 overflow-hidden"
                variants={childVariants}
            >
                {/* Elementos decorativos con parallax */}
                <div
                    className="absolute top-20 right-20 w-96 h-96 rounded-full bg-themePink opacity-20 blur-3xl"
                    style={parallaxStyle1}
                />
                <div
                    className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-themeLilac opacity-20 blur-3xl"
                    style={parallaxStyle2}
                />
                <div
                    className="absolute top-1/3 left-1/4 w-40 h-40 rounded-full bg-themeNeon opacity-10 blur-2xl"
                    style={parallaxStyle3}
                />
                <div
                    className="absolute bottom-1/3 right-1/4 w-56 h-56 rounded-full bg-white opacity-10 blur-2xl"
                    style={parallaxStyle4}
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                            Testimonios Inspiradores
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
                            Escucha las experiencias transformadoras de quienes ya han recorrido este camino
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Inés, cosmiatra",
                                quote:
                                    '"Cada vez que converso con Ale, Me siento tranquila, liberada me da buena energía."',
                            },
                            {
                                name: "Mariángela, emprendedora",
                                quote:
                                    '"En este camino me he llevado de tarea actividades interesantes y siempre orientadas en lograr mejorías y cuidar lo que pienso."',
                            },
                            {
                                name: "Ester, ingeniero",
                                quote:
                                    '"He aprendido a vivir una espiritualidad sin estrés y sin miedo, me siento plena y conectada."',
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10"
                            >
                                <div className="flex flex-col items-center">

                                    <p className="text-white/90 italic mb-4">{testimonial.quote}</p>
                                    <p className="font-bold text-themePink">{testimonial.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    {/* <div className="mt-16 text-center">
                        <div className="aspect-video max-w-3xl mx-auto mb-12 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                            <div className="w-full h-full bg-themeNavy/50 flex items-center justify-center">
                                <div className="text-center">
                                    <div className="w-20 h-20 rounded-full bg-themePink/20 flex items-center justify-center mx-auto mb-4">
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-10 w-10 text-themePink"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                        </svg>
                                    </div>
                                    <p className="text-white/80">Video testimonial</p>
                                </div>
                            </div>
                        </div>

                        <Link
                            href="#payment"
                            className="inline-block px-8 py-4 text-lg font-bold bg-themePink text-white rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            ESTOY LISTA
                        </Link>
                    </div> */}
                </div>
            </motion.div>

            {/* Programa Único Section */}
            <motion.div
                className="bg-gradient-to-b from-[#13135f] to-themeNavy text-white py-24"
                variants={childVariants}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                            ¿QUÉ HACE DE ESTE PROGRAMA UN MOMENTO ÚNICO?
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 text-center">
                            <div className="bg-themePink/20 p-4 rounded-full inline-flex items-center justify-center w-16 h-16 mb-4">
                                <span className="text-2xl font-bold text-themePink">1</span>
                            </div>
                            <p className="text-white/90">Está hecho para mujeres ocupadas pero conectadas con la energía superior.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 text-center">
                            <div className="bg-themePink/20 p-4 rounded-full inline-flex items-center justify-center w-16 h-16 mb-4">
                                <span className="text-2xl font-bold text-themePink">2</span>
                            </div>
                            <p className="text-white/90">Lo creé basándome en mi propia experiencia y resultados.</p>
                        </div>
                        <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10 text-center">
                            <div className="bg-themePink/20 p-4 rounded-full inline-flex items-center justify-center w-16 h-16 mb-4">
                                <span className="text-2xl font-bold text-themePink">3</span>
                            </div>
                            <p className="text-white/90">
                                Son prácticas que se construyeron durante 5 años de ejecución y ensayo y error.
                            </p>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="#payment"
                            className="inline-block px-8 py-4 text-lg font-bold bg-themePink animate-scaleInOut border-2 border-themeNavy text-themeNavy rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            ¡QUIERO EVOLUCIONAR!
                        </Link>
                    </div>
                </div>
            </motion.div>

            <div className="bg-gradient-to-b from-themeNavy to-[#13135f] text-white py-24 w-full items-center justify-center">





                <motion.div
                    className={clsx("flex flex-wrap flex-col items-stretch justify-center  lg:flex-row  lg:flex-nowrap py-20  text-themeLilac")}
                    variants={containerVariants}
                    initial="offscreen"
                    whileInView="onscreen"
                    viewport={{ once: true }}
                >
                    <div
                        className={clsx("flex flex-wrap items-center w-full lg:max-w-3xl px-4 md:px-10 py-10 md:py-0 rounded-3xl min-h-full lg:order-1 justify-end text-themeLilac")}
                    >
                        <div className="w-full text-center lg:text-left ">
                            <motion.div
                                className="flex flex-col w-full text-themeNavy justify-center"
                                variants={childVariants}
                            >
                                <div className="mx-auto lg:ml-0 w-full font-text">
                                    <motion.div className="flex flex-col mb-2 sm:mb-4 last:mb-0 " variants={childVariants}>
                                        <div className="flex items-start gap-3">

                                            {/* Contenedor del texto */}
                                            <div className="flex-1">
                                                <h1 className={clsx("lg:max-w-2xl bg-gradient-to-r bg-clip-text text-transparent mb-4 font-title text-4xl lg:text-7xl lg:leading-tight font-bold from-themeLilac to-themePink")}>
                                                    {"Me presento..."}
                                                </h1>
                                                <p className={clsx("text-base text-white md:text-xl")}>{"Hola, mi nombre es Alexandra y me llaman Ale, soy comunicadora social de profesión, con 10 años de experiencia en esa área sobre todo en marketing y marcas personales. Cuando llegó la pandemia, el encierro más el tiempo disponible me llevaron a un espacio de introspección y revisión interna, donde me di cuenta de que mi realidad me incomodaba más de lo que yo pensaba. Sentía que aunque era una profesional, no tenía sensación de logro y, aunque tenía sueños, no lograba hacerlos realidad. Ahí es donde empecé a descubrir las herramientas espirituales que me llevaron al equilibrio mental, al merecimiento y conectar con mi abundancia de manera consciente y a transformarme en consecuencia en una manifestadora efectiva de mi realidad perfecta, ahora mismo estas herramientas no solo me acompañan si no que además me han permitido ayudar y acompañar a otras personas a  conectar con ellas mismas y materializar sus metas más anheladas. Son 5 años de espiritualidad resumidos  que hoy están aquí disponibles para ti."}</p>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    <div className={clsx("mt-5 lg:mt-0 lg:order-2")}>
                        <div className={clsx("w-full flex justify-center lg:justify-end")}>
                            <Image src={"/images/ME_PRESENTO.jpg"} alt="title" width="384" height="762" quality={100} className="lg:ml-0 rounded-xl shadow-2xl" />
                        </div>
                    </div>
                </motion.div>
            </div>


            <div className="bg-gradient-to-b from-themeNavy to-[#13135f] text-white py-24 w-full items-center justify-start">
                <div className="flex flex-wrap items-center w-full  justify-center px-4 md:px-10 py-10 md:py-0 lg:px-20 xl:px-36 rounded-3xl min-h-full">
                    <VisionBoard></VisionBoard>
                </div>
            </div>

            {/* Pricing Section */}
            <motion.div
                id="payment"
                className="bg-gradient-to-b from-themeNavy to-[#13135f] text-white py-24"
                variants={childVariants}
            >
                <Paquete />
            </motion.div >

            {/* FAQ Section */}
            <motion.div
                className="bg-gradient-to-b from-[#13135f] to-themeNavy text-white py-24"
                variants={childVariants}
            >
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                            Preguntas Frecuentes
                        </h2>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-6">
                            {[
                                {
                                    question: "¿Debo tener experiencia en religiones o debo pertenecer a una religión?",
                                    answer:
                                        "No es necesario que tengas experiencia previa o practiques ninguna religión en particular. Solo debes tener la disposición a evolucionar.",
                                },
                                {
                                    question: "Luego de los 7 días, ¿podré manifestar todos mis deseos inmediatamente?",
                                    answer:
                                        "Tedrás las herramientas y recursos necesarios para construir los hábitos y tareas diarias para crear la realidad que deseas. La intención, acción y compromiso de tu parte son claves.",
                                },
                                {
                                    question: "¿Qué resultados obtendré de esta formación?",
                                    answer:
                                        "Los resultados se basan en tu bienestar espiritual y energético. Mi objetivo es que construyas una vida espiritual que te lleve al logro de tus metas de una forma amable y prática.",
                                },
                                {
                                    question: "¿Podré hacer preguntas o participar durante los 7 días?",
                                    answer: "Tendremos dos sesiones en vivo vía Zoom para despejar dudas y compartir experiencias.",
                                },
                            ].map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white/5 backdrop-blur-sm p-6 rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
                                >
                                    <h4 className="text-xl font-bold mb-2 text-white">{faq.question}</h4>
                                    <p className="text-white/70">{faq.answer}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </motion.div >

            {/* Final CTA Section */}
            <motion.div
                className="bg-gradient-to-b from-themeNavy to-[#13135f] text-white py-24"
                variants={childVariants}
            >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                        ¿Lista para transformar tu vida?
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-white/80">
                        No esperes más para comenzar tu viaje de transformación espiritual y manifestación consciente.
                    </p>
                    <Link
                        href="#payment"
                        className="inline-block px-10 py-5 text-xl animate-scaleInOut border-2 border-themeNavy text-themeNavy font-bold bg-themePink rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        ¡QUIERO EVOLUCIONAR AHORA!
                    </Link>
                </div>
            </motion.div >
        </>
    )
}

