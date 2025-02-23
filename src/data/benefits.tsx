import { TbDeviceVisionPro } from "react-icons/tb";

import { IBenefit } from "@/types"
import { TfiSignal } from "react-icons/tfi";
import { LuGoal } from "react-icons/lu";
import { SiPrivatedivision } from "react-icons/si";
import { GiArrowsShield, GiEmbrassedEnergy, GiFootsteps } from "react-icons/gi";
import { GrGrow } from "react-icons/gr";
import { CiLight } from "react-icons/ci";

export const benefits: IBenefit[] = [
    {
        title: "Crecimiento Espiritual Inteligente",
        description: "El camino hacia la plenitud interior no tiene por qué ser incierto. Nuestra plataforma se adapta a tu viaje espiritual y te guía con claridad y propósito.",
        bullets: [
            {
                title: "Conexión Auténtica",
                description: "Clasificamos y organizamos tus experiencias y aprendizajes espirituales para que puedas ver tu progreso con claridad.",
                icon: <TfiSignal size={38} />
            },
            {
                title: "Metas Personalizadas",
                description: "Define y sigue objetivos espirituales alineados con tu propósito de vida.",
                icon: <LuGoal size={38} />
            },
            {
                title: "Visión Profunda",
                description: "Anticípate a los desafíos en tu crecimiento interior con reflexiones y recordatorios significativos.",
                icon: <TbDeviceVisionPro size={38} />
            }
        ],
        imageSrc: "/images/gray_1530x3036.png"
    },
    {
        title: "Transformación Sin Esfuerzo",
        description: "Eleva tu ser sin complicaciones. Spirituale hace que el despertar espiritual sea accesible y enriquecedor.",
        bullets: [
            {
                title: "Pequeños Pasos, Grandes Cambios",
                description: "Inicia con prácticas simples y observa cómo tu conciencia se expande.",
                icon: <GiFootsteps size={38} />
            },
            {
                title: "Guía Iluminada",
                description: "Explora caminos espirituales adaptados a tu esencia y nivel de evolución.",
                icon: <CiLight size={38} /> 
            },
            {
                title: "Evolución en Tiempo Real",
                description: "Mide tu bienestar espiritual con herramientas intuitivas y visuales que reflejan tu crecimiento.",
                icon: <GrGrow size={38} />
            }
        ],
        imageSrc: "/images/gray_1530x3036.png"
    },
    {
        title: "Protección y Armonía Interior",
        description: "Tu energía y bienestar merecen el mayor cuidado. Spirituale te brinda un espacio seguro para explorar tu espiritualidad.",
        bullets: [
            {
                title: "Energía Resguardada",
                description: "Prácticas y enseñanzas protegidas con la más alta vibración y autenticidad.",
                icon: <GiEmbrassedEnergy size={38} />
            },
            {
                title: "Acceso Sagrado",
                description: "Conexión segura y personalizada con tu espacio de crecimiento espiritual.",
                icon: <SiPrivatedivision size={38} />
            },
            {
                title: "Guardián de Tu Paz",
                description: "Monitoreamos tu evolución para asegurarnos de que tu camino sea auténtico y libre de interferencias negativas.",
                icon: <GiArrowsShield size={38} />
            }
        ],
        imageSrc: "/images/gray_1530x3036.png"
    }
]