"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Heart, Sparkles, Star, Sun, Users } from "lucide-react"

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

    // Estilos parallax más pronunciados
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
                        Transforma Tu Espíritu
                    </h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 text-white/90">
                        Un viaje espiritual único que te llevará a descubrir tu verdadero potencial y conectar con tu esencia
                        divina.
                    </p>

                    <Link
                        href="#payment"
                        className="inline-block px-8 py-4 text-lg font-bold bg-themePink text-white rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                    >
                        ESTOY LISTA
                    </Link>

                    <div className="mt-16 animate-bounce">
                        <ChevronDown className="h-8 w-8 mx-auto text-white/70" />
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="bg-gradient-to-b from-themeNavy to-[#13135f] text-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                            Lo Que Aprenderás
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
                            Nuestro programa está diseñado para guiarte en cada paso de tu camino espiritual
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Heart className="h-10 w-10 text-themePink" />,
                                title: "Sanación Interior",
                                description: "Técnicas para liberar bloqueos emocionales y sanar heridas del pasado.",
                            },
                            {
                                icon: <Sun className="h-10 w-10 text-themeNeon" />,
                                title: "Meditación Avanzada",
                                description: "Prácticas de meditación para elevar tu conciencia y conectar con tu ser superior.",
                            },
                            {
                                icon: <Sparkles className="h-10 w-10 text-themeLilac" />,
                                title: "Manifestación Consciente",
                                description: "Aprende a co-crear con el universo y manifestar tus deseos más profundos.",
                            },
                            {
                                icon: <Star className="h-10 w-10 text-themePink" />,
                                title: "Intuición Poderosa",
                                description: "Desarrolla y confía en tu intuición para tomar decisiones alineadas.",
                            },
                            {
                                icon: <Users className="h-10 w-10 text-themeLilac" />,
                                title: "Comunidad de Apoyo",
                                description: "Únete a una comunidad de almas afines en el mismo camino espiritual.",
                            },
                            {
                                icon: <Sun className="h-10 w-10 text-themeNeon" />,
                                title: "Rituales Transformadores",
                                description: "Ceremonias y rituales para conectar con la energía universal y potenciar tu crecimiento.",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10"
                            >
                                <div className="bg-themeNavy/50 p-4 rounded-xl inline-block mb-4">{feature.icon}</div>
                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-white/70">{feature.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-16">
                        <Link
                            href="#payment"
                            className="inline-block px-8 py-4 text-lg font-bold bg-themePink text-white rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                        >
                            ESTOY LISTA
                        </Link>
                    </div>
                </div>
            </div>

            {/* Nueva sección innovadora */}
            <div className="relative bg-themeNavy py-24 overflow-hidden">
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                            Despierta Tu Potencial
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
                            Sumérgete en una experiencia única que te llevará a descubrir y potenciar tus habilidades innatas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Conexión Profunda",
                                description:
                                    "Aprende a conectar con tu ser interior y descubre la paz que reside en ti.",
                                image: "/images/connection.jpg",
                            },
                            {
                                title: "Crecimiento Personal",
                                description:
                                    "Desarrolla habilidades que te permitirán crecer y evolucionar en todos los aspectos de tu vida.",
                                image: "/images/growth.jpg",
                            },
                            {
                                title: "Empoderamiento",
                                description:
                                    "Descubre tu verdadero poder y aprende a utilizarlo para transformar tu realidad.",
                                image: "/images/empowerment.jpg",
                            },
                        ].map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl hover:bg-white/10 transition-all duration-300 border border-white/10"
                            >
                                <div className="relative h-40 mb-4 rounded-xl overflow-hidden">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        layout="fill"
                                        objectFit="cover"
                                        className="w-full h-full"
                                    />
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{feature.title}</h3>
                                <p className="text-white/70">{feature.description}</p>
                            </div>
                        ))}
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
                                    "Este programa cambió mi vida por completo. Ahora siento una conexión espiritual que nunca había experimentado antes.",
                            },
                            {
                                name: "Laura Martínez",
                                image: "/placeholder.svg?height=200&width=200",
                                quote:
                                    "Las técnicas de meditación que aprendí me han ayudado a encontrar paz interior incluso en los momentos más difíciles.",
                            },
                            {
                                name: "Carolina Pérez",
                                image: "/placeholder.svg?height=200&width=200",
                                quote:
                                    "La comunidad es increíble. Me siento apoyada y comprendida en cada paso de mi camino espiritual.",
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
                                    <p className="text-white/90 italic mb-4">"{testimonial.quote}"</p>
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

            {/* Program Details */}
            <div className="bg-gradient-to-b from-themeNavy to-[#13135f] text-white py-24">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-themePink to-themeLilac bg-clip-text text-transparent">
                            Detalles del Programa
                        </h2>
                        <p className="text-lg md:text-xl max-w-3xl mx-auto text-white/80">
                            Todo lo que necesitas saber sobre esta experiencia transformadora
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10 mb-8">
                                <h3 className="text-2xl font-bold mb-4 text-themePink">Incluye:</h3>
                                <ul className="space-y-3">
                                    {[
                                        "8 módulos de aprendizaje profundo",
                                        "12 meditaciones guiadas exclusivas",
                                        "4 rituales de transformación energética",
                                        "Acceso a comunidad privada de apoyo",
                                        "2 sesiones grupales mensuales en vivo",
                                        "Material descargable y recursos adicionales",
                                        "Certificado de finalización del programa",
                                    ].map((item, index) => (
                                        <li key={index} className="flex items-start">
                                            <span className="text-themePink mr-2">✓</span>
                                            <span className="text-white/80">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-2xl border border-white/10">
                                <h3 className="text-2xl font-bold mb-4 text-themeLilac">Preguntas Frecuentes:</h3>
                                <div className="space-y-4">
                                    {[
                                        {
                                            question: "¿Cuánto tiempo necesito dedicar cada semana?",
                                            answer: "Recomendamos al menos 3-4 horas semanales para obtener los mejores resultados.",
                                        },
                                        {
                                            question: "¿Necesito experiencia previa en prácticas espirituales?",
                                            answer:
                                                "No, el programa está diseñado para todos los niveles, desde principiantes hasta practicantes avanzados.",
                                        },
                                        {
                                            question: "¿Por cuánto tiempo tendré acceso al material?",
                                            answer: "Tendrás acceso de por vida a todo el contenido del programa.",
                                        },
                                    ].map((faq, index) => (
                                        <div key={index}>
                                            <h4 className="font-bold text-white">{faq.question}</h4>
                                            <p className="text-white/70">{faq.answer}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            {/* Agregar estos elementos dentro del div con className="relative" en la sección de detalles del programa */}
                            <div
                                className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-themePink opacity-20 blur-3xl"
                                style={parallaxStyle1}
                            />
                            <div
                                className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-themeLilac opacity-20 blur-3xl"
                                style={parallaxStyle2}
                            />
                            <div className="relative z-10 bg-gradient-to-br from-themeLilac/20 to-themePink/20 backdrop-blur-sm p-10 rounded-3xl border border-white/10">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-bold mb-2 text-white">Transforma Tu Vida Hoy</h3>
                                    <p className="text-white/80">Invierte en tu crecimiento espiritual</p>
                                </div>

                                <div className="bg-white/10 rounded-xl p-6 mb-8">
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-white/80">Precio normal:</span>
                                        <span className="text-white/80 line-through">$997</span>
                                    </div>
                                    <div className="flex justify-between items-center mb-4">
                                        <span className="text-white font-bold">Precio especial:</span>
                                        <span className="text-themePink font-bold text-2xl">$497</span>
                                    </div>
                                    <div className="text-white/60 text-sm text-center">Oferta por tiempo limitado</div>
                                </div>

                                <div className="text-center">
                                    <Link
                                        href="#payment"
                                        id="payment"
                                        className="inline-block w-full px-8 py-4 text-lg font-bold bg-themePink text-white rounded-full shadow-lg hover:shadow-xl hover:bg-opacity-90 transition-all duration-300 transform hover:-translate-y-1"
                                    >
                                        ESTOY LISTA
                                    </Link>
                                    <p className="mt-4 text-white/60 text-sm">Al unirte, aceptas nuestros términos y condiciones</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </section>
    )
}

