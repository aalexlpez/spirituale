import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "",
    quickLinks: [
        {
            text: "Características",
            url: "#características"
        },
        {
            text: "WhatsApp",
            url: "#whatsapp"
        },
        {
            text: "Testimonios",
            url: "#testimonios"
        }
    ],
    email: 'spirituale@gmail.com',
    telephone: '+58 (414) 4244242',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        twitter: 'https://twitter.com/Twitter',
        facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com',
    }
}