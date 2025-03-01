import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Samanta Cruz',
        role: 'Trabajadora social',
        message: {
            line1: "Cuando conecto con Ale, siento tranquilidad, felicidad y cercanía.",
            line2: "Tranquilidad: porque responde todas las preguntas que hago.",
            line3: "Felicidad: porque me doy cuenta que mi camino en terapia ha valido la pena, porque uso las sesiones también como una forma de autoconocimiento.",
            line4: "Cercanía: porque la siento como mi amiga"
        },
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Liu Kang',
        role: 'Emprendedor',
        message: {
            line1: `Cada vez que hablo con Ale me siento muy bien atendida, escuchada y apapachada. Después de la consulta me siento aliviada, acompañada y mucho más clara con respecto a las dudas y situaciones que me llevaron a la buscar la conversación.`
        },
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Comunity Manager',
        message: {
            line1: `Los servicios de Ale generan paz, orientación y calma con una vibra muy armoniosa`
        },
        avatar: '/images/testimonial-3.webp',
    },
];