"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Sparkles, Sun, Heart, Star } from "lucide-react"
import { motion } from "framer-motion"

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

    return (
        <section className="relative overflow-hidden">
            {/* Hero Section */}
            <div
                ref={heroRef}
                className="relative min-h-screen flex flex-col items-center justify-center bg-themeNavy text-white overflow-hidden"
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
                        Bienvenida a los 7 DÍAS SPIRITUALES. Mantenerte despierta, consciente y conectada te mantendrá en paz,
                        equilibrio y en un feeling de logro inigualable, ¡tu mejor momento acaba de empezar!
                    </p>

                    <Link
                        href="#payment"
                        className="inline-block px-8 py-4 text-lg font-bold bg-themePink text-white rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        QUIERO SEGUIR EVOLUCIONANDO
                    </Link>

                    <div className="mt-16 animate-bounce">
                        <ChevronDown className="h-8 w-8 mx-auto text-white/70" />
                    </div>
                </div>
            </div>

            {/* Mi Avatar Section */}
            <div className="bg-gradient-to-b from-themeNavy to-[#13135f] text-white py-24">
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
                                Pero también, conozco tres cosas que también quieres hacer:
                            </h3>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="text-themePink mr-2">✓</span>
                                    <span className="text-white/80">
                                        Quieres atreverte a vivir una espiritualidad y a una manifestación consciente de una forma muy
                                        amable.
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
                            className="inline-block px-8 py-4 text-lg font-bold bg-themePink text-white rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            ¡SIGUE EVOLUCIONANDO AQUÍ!
                        </Link>
                    </div>
                </div>
            </div>

            {/* Qué Haremos Section */}
            {/* Qué Haremos Section - Improved Design */}
            <div className="relative bg-themeNavy py-24 overflow-hidden">
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
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                            ¿QUÉ HAREMOS?
                        </h2>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80">
                            Ahora es que tienes nuevos niveles para evolucionar…
                            ¡El universo no te olvidó, te está mostrando lo que eres!
                            Durante 7 días te mostraré que
                        </p>
                        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-white/80">
                            COMO ES ADENTRO, ES AFUERA
                        </p>
                    </div>

                    {/* Journey path - decorative element */}
                    <div className="hidden lg:block absolute left-1/2 top-[300px] bottom-20 w-1 bg-gradient-to-b from-themePink to-themeLilac opacity-50 transform -translate-x-1/2 z-0"></div>

                    <div className="space-y-16">
                        {[
                            {
                                day: "DÍA 1",
                                title: "MIRANDO HACIA DENTRO",
                                description:
                                    "Hagamos juntas un viaje a nuestro interior donde reconozcamos tus mayores deseos, metas, ambiciones, donde profundicemos en la identificación de tus talentos y cómo tu cerebro trabaja con eso en conjunción a tus creencias, costumbres y prácticas. Utilizaremos meditaciones, preguntas poderosas y técnicas de tarot espiritual.",
                                icon: "Sparkles",
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
                                icon: "Sun",
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
                                    <div className="bg-gradient-to-br from-themePink to-themeLilac backdrop-blur-sm p-8 md:p-10 rounded-2xl hover:bg-themePink/20 transition-all duration-300 border border-white/10 shadow-xl">
                                        {/* Mobile day number */}
                                        <div className="lg:hidden flex items-center mb-6">
                                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-themeNavy/70 to-themeLilac flex items-center justify-center text-white font-bold text-xl shadow-lg mr-4">
                                                {index + 1}
                                            </div>
                                            <div className="bg-themeNavy px-4 py-2 rounded-xl text-themePink font-bold">{day.day}</div>
                                        </div>

                                        {/* Desktop day label */}
                                        <div className="hidden bg-themeNavy/70 px-4 py-2 rounded-xl text-themePink font-bold mb-4 lg:inline-block">
                                            {day.day}
                                        </div>

                                        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-themeNavy">{day.title}</h3>

                                        <div className="flex items-start gap-4">
                                            {day.icon === "Sparkles" && <Sparkles className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" />}
                                            {day.icon === "Brain" && <Sun className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" />}
                                            {day.icon === "Zap" && <Sparkles className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" />}
                                            {day.icon === "Heart" && <Heart className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" />}
                                            {day.icon === "Star" && <Star className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" />}
                                            {day.icon === "Sun" && <Sun className="h-8 w-8 text-themeNavy flex-shrink-0 mt-1" />}
                                            <p className="text-themeNavy/80 text-lg">{day.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-20">
                        <Link
                            href="#payment"
                            className="inline-block px-8 py-4 text-lg font-bold bg-themePink text-white rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            ¡QUIERO COMENZAR MI VIAJE!
                        </Link>
                    </div>
                </div>
            </div>

            {/* Testimonials Section */}
            <div
                ref={testimonialsRef}
                className="relative bg-gradient-to-b from-[#13135f] to-themeNavy text-white py-24 overflow-hidden"
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
                                name: "María González",
                                image: "/placeholder.svg?height=200&width=200",
                                quote:
                                    '"Este programa cambió mi vida por completo. Ahora siento una conexión espiritual que nunca había experimentado antes."',
                            },
                            {
                                name: "Laura Martínez",
                                image: "/placeholder.svg?height=200&width=200",
                                quote:
                                    '"Las técnicas de meditación que aprendí me han ayudado a encontrar paz interior incluso en los momentos más difíciles."',
                            },
                            {
                                name: "Carolina Pérez",
                                image: "/placeholder.svg?height=200&width=200",
                                quote:
                                    '"La comunidad es increíble. Me siento apoyada y comprendida en cada paso de mi camino espiritual."',
                            },
                        ].map((testimonial, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="w-20 h-20 rounded-full overflow-hidden mb-4 border-2 border-themePink">
                                        <Image
                                            src={testimonial.image || "/placeholder.svg"}
                                            alt={testimonial.name}
                                            width={80}
                                            height={80}
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <p className="text-white/90 italic mb-4">{testimonial.quote}</p>
                                    <p className="font-bold text-themePink">{testimonial.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-16 text-center">
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
                    </div>
                </div>
            </div>

            {/* Programa Único Section */}
            <div className="bg-gradient-to-b from-[#13135f] to-themeNavy text-white py-24">
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
                            className="inline-block px-8 py-4 text-lg font-bold bg-themePink text-white rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            ¡QUIERO EVOLUCIONAR!
                        </Link>
                    </div>
                </div>
            </div>

            <div className="bg-gradient-to-b from-themeNavy to-[#13135f] text-white py-24 w-full items-center justify-center">
                <div className="flex flex-wrap items-center w-full  justify-center px-4 md:px-10 py-10 md:py-0 rounded-3xl min-h-full">
                    <div className="w-full lg:w-1/2 flex justify-center ">
                        <Image src="/images/ME_PRESENTO.jpg" alt="title" width="384" height="762" quality={100} className="rounded-xl shadow-2xl" />
                    </div>
                    <motion.div className="w-full lg:w-1/2 flex flex-col text-themeNavy justify-center" variants={childVariants}>
                        <h3 className="lg:max-w-2xl bg-gradient-to-r bg-clip-text from-themePink to-themeLilac text-transparent mb-4 font-title text-4xl lg:text-7xl lg:leading-tight font-bold">
                            Me presento...
                        </h3>
                        <p className="mt-1.5 mx-auto lg:ml-0 leading-normal text-themeLilac">
                            Hola, mi nombre es Alexandra y me llaman Ale, soy comunicadora social de profesión, con 10 años de experiencia en esa área sobre todo en marketing y marcas personales. Cuando llegó la pandemia, el encierro más el tiempo disponible me llevaron a un espacio de introspección y revisión interna, donde me di cuenta de que mi realidad me incomodaba más de lo que yo pensaba. Sentía que aunque era una profesional, no tenía sensación de logro y, aunque tenía sueños, no lograba hacerlos realidad. Ahí es donde empecé a descubrir las herramientas espirituales que me llevaron al equilibrio mental, al merecimiento y conectar con mi abundancia de manera consciente y a transformarme en consecuencia en una manifestadora efectiva de mi realidad perfecta, ahora mismo estas herramientas no solo me acompañan si no que además me han permitodo ayudar y acompañar a otras personas a conectar con ellas mismas y materializar sus metas más anheladas. Son 5 años de espiritualidad resumidos que hoy están aquí disponibles para ti.
                        </p>
                    </motion.div>
                </div>
            </div>

            {/* Pricing Section */}
            <div id="payment" className="bg-gradient-to-b from-themeNavy to-[#13135f] text-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                            Elige Tu Plan
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
                            Invierte en tu crecimiento espiritual y transforma tu vida
                        </p>
                        <div className="inline-block bg-themePink/20 px-4 py-2 rounded-full text-themePink font-bold mt-4">
                            BONO DE 48 HORAS - ¡PRECIOS ESPECIALES!
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        {/* BONO DE 48 HORAS */}
                        <div className="grid bg-themeLilac rounded-xl p-6 border border-themePink/30 transform hover:scale-105 transition-all duration-300 content-between">
                            <div>
                                <h4 className="text-xl font-bold mb-4 text-white p-2 bg-themePink rounded-2xl text-center">BONO DE 48 HORAS</h4>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">7 Días de Spiritualidad Consciente con Acceso de Por Vida</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">Guía de Hábitos Abundantes Conscientes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">Ebook: Creo mi Realidad Perfecta con Abundancia Consciente</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">Lectura de Cartas Completa</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">Ritual Energético</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-themeNavy/80">Precio regular:</span>
                                    <span className="text-themeNavy/80 line-through">$500 USD</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-themeNavy font-bold">Oferta:</span>
                                    <span className="text-themeNavy  font-bold text-2xl">$150 USD</span>
                                </div>
                                <Link
                                    href="/pago?price=150"
                                    className="block w-full text-center px-4 py-3 bg-themePink text-white rounded-lg font-bold transition-all"
                                >
                                    COMPRAR AHORA
                                </Link>
                            </div>
                        </div>

                        {/* PLAN PRO SPIRITUAL */}
                        <div className="grid bg-themeLilac rounded-xl p-6 border border-themePink/30 transform hover:scale-105 transition-all duration-300 content-between">
                            <div>
                                <h4 className="text-xl font-bold mb-4 text-white p-2 bg-themePink rounded-2xl text-center">PLAN PRO SPIRITUAL</h4>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">7 Días de Spiritualidad Consciente</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">Guía de Hábitos Abundantes Conscientes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">Ebook: Creo mi Realidad Perfecta con Abundancia Consciente</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-themeNavy/80">recio regular:</span>
                                    <span className="text-themeNavy/80 line-through">$200 USD</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-themeNavy font-bold">Oferta:</span>
                                    <span className="text-themeNavy  font-bold text-2xl">$80 USD</span>
                                </div>
                                <Link
                                    href="/pago?price=80"
                                    className="block w-full text-center px-4 py-3 bg-themePink text-white rounded-lg font-bold transition-all"
                                >
                                    COMPRAR AHORA
                                </Link>
                            </div>

                        </div>

                        {/* SPIRITUALIDAD UNO A UNO */}
                        <div className="grid bg-themeLilac rounded-xl p-6 border border-themePink/30 transform hover:scale-105 transition-all duration-300 content-between">
                            <div>
                                <h4 className="text-xl font-bold mb-4 text-white p-2 bg-themePink rounded-2xl text-center">SPIRITUALIDAD UNO A UNO</h4>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">7 Días de Spiritualidad Consciente con Acceso de Por Vida</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">Guía de Hábitos Abundantes Conscientes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">Ebook: Creo mi Realidad Perfecta con Abundancia Consciente</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">Lectura de Cartas Completa</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">Ritual Energético</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">2 Sesiones de Seguimiento durante 1 Mes</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-themeNavy/80">Precio regular:</span>
                                    <span className="text-themeNavy/80 line-through">$1000 USD</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-themeNavy font-bold">Oferta:</span>
                                    <span className="text-themeNavy  font-bold text-2xl">$250 USD</span>
                                </div>
                                <Link
                                    href="/pago?price=250"
                                    className="block w-full text-center px-4 py-3 bg-themePink text-white rounded-lg font-bold transition-all"
                                >
                                    COMPRAR AHORA
                                </Link>
                            </div>
                        </div>

                        {/* SPIRITUALIDAD BÁSICA */}
                        <div className="grid bg-themeLilac rounded-xl p-6 border border-themePink/30 transform hover:scale-105 transition-all duration-300 content-between">
                            <div>
                                <h4 className="text-xl font-bold mb-4 text-white p-2 bg-themePink rounded-2xl text-center">SPIRITUALIDAD BÁSICA</h4>
                                <ul className="space-y-2 mb-6">
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">7 Días de Spiritualidad Consciente vigente durante 1 Mes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-themePink mr-2 font-extrabold">✓</span>
                                        <span className="text-themeNavy">Lectura de Cartas Completa</span>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-themeNavy/80">Precio regular:</span>
                                    <span className="text-themeNavy/80 line-through">$150 USD</span>
                                </div>
                                <div className="flex justify-between items-center mb-4">
                                    <span className="text-themeNavy font-bold">Oferta:</span>
                                    <span className="text-themeNavy  font-bold text-2xl">$59.99 USD</span>
                                </div>
                                <Link
                                    href="/pago?price=59.99"
                                    className="block w-full text-center px-4 py-3 bg-themePink text-white rounded-lg font-bold transition-all"
                                >
                                    COMPRAR AHORA
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                        <h3 className="text-2xl font-bold mb-4 text-themePink">
                            La historia de escasez, incomodidad e intranquilidad que te has contado hasta ahora, ¡se acaba en este
                            momento!
                        </h3>
                    </div>
                </div>
            </div >

            {/* FAQ Section */}
            < div className="bg-gradient-to-b from-[#13135f] to-themeNavy text-white py-24" >
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
                                        "No debes pertenecer a una religión ni tener experiencia previa en ninguna religión ni práctica religiosa. Solo debes tener la disposición a evolucionar.",
                                },
                                {
                                    question: "Luego de los 7 días, ¿podré manifestar todos mis deseos inmediatamente?",
                                    answer:
                                        "Tendrás las herramientas y recursos necesarios para construir los hábitos y tareas diarias para construir la realidad que deseas. La intención y acción de tu parte es clave.",
                                },
                                {
                                    question: "¿Qué resultados obtendré de esta formación?",
                                    answer:
                                        "Los resultados se basan en tu bienestar espiritual y energético. Mi objetivo se basa en que construyas una vida espiritual que te lleve al logro de tus metas de una forma amable y práctica.",
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
            </div >

            {/* Final CTA Section */}
            < div className="bg-gradient-to-b from-themeNavy to-[#13135f] text-white py-24" >
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                        ¿Lista para transformar tu vida?
                    </h2>
                    <p className="text-lg md:text-xl max-w-3xl mx-auto mb-12 text-white/80">
                        No esperes más para comenzar tu viaje de transformación espiritual y manifestación consciente.
                    </p>
                    <Link
                        href="#payment"
                        className="inline-block px-10 py-5 text-xl font-bold bg-themePink text-white rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        ¡QUIERO EVOLUCIONAR AHORA!
                    </Link>
                </div>
            </div >
        </section >
    )
}

