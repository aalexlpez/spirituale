import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "¡Conecta con tu magia creadora!",
    quickLinks: [
        {
            text: "Características",
            url: "#características"
        },
        {
            text: "WhatsApp",
            url: "https://chat.whatsapp.com/L730CWaUBL1JgRhBqVHpfI"
        },
        {
            text: "Testimonios",
            url: "#testimonios"
        }
    ],
    email: 'spirituale@gmail.com',
    telephone: '+58 412‑4915305',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        // twitter: 'https://twitter.com/Twitter',
        // facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        // linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/spiritu.alee',
    }
}