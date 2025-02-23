import { ITestimonial } from "@/types";
import { siteDetails } from "./siteDetails";

export const testimonials: ITestimonial[] = [
    {
        name: 'Samanta Cruz',
        role: 'Trabajadora social',
        message: `Las reflexiones guiadas de ${siteDetails.siteName} han transformado la forma en que abordamos el crecimiento espiritual. Es un recurso invaluable para quienes buscan una conexión más profunda con su interior.`,
        avatar: '/images/testimonial-2.webp',
    },
    {
        name: 'Liu Kang',
        role: 'Emprendedor',
        message: `Como guía espiritual, me impresiona la armonía entre la seguridad y la accesibilidad de ${siteDetails.siteName}. Es raro encontrar una plataforma que equilibre tecnología avanzada con una experiencia auténticamente transformadora.`,
        avatar: '/images/testimonial-1.webp',
    },
    {
        name: 'Emily Rodriguez',
        role: 'Comunity Manager',
        message: `${siteDetails.siteName} está revolucionando el camino del despertar interior. Su diseño intuitivo y herramientas poderosas lo convierten en un compañero indispensable para quienes buscan evolución y crecimiento espiritual.`,
        avatar: '/images/testimonial-3.webp',
    },
];