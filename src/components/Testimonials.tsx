'use client'
import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';
import { motion } from 'framer-motion';

export const containerVariants = {
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
            staggerChildren: 0.3,
        }
    },
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -35,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.1,
            duration: 0.5,
        }
    },
};

const getFontSizeClass = (text: string) => {
    const length = text.length;
    if (length > 250) return 'text-base'; // Tamaño pequeño
    if (length > 150) return 'text-lg'; // Tamaño mediano
    return 'text-3xl'; // Tamaño grande
};

const getFullMessage = (message: { line1: string, line2?: string, line3?: string, line4?: string }) => {
    return `${message.line1 || ''}${message.line2 || ''}${message.line3 || ''}${message.line4 || ''}`;
};

const Testimonials: React.FC = () => {
    return (
        <motion.div
            className="flex flex-col w-full text-themeNavy justify-center"
            variants={containerVariants}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
        >
            <div className="grid gap-14 max-w-xs w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-7xl px-0 lg:px-4 xl:px-0">
                {testimonials.map((testimonial, index) => (
                    <motion.div
                        key={index}
                        className="bg-themeNavy p-4 md:p-8 rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300 "
                        variants={childVariants}
                    >
                        <div className="flex items-center mb-4 w-full justify-center lg:justify-start">
                            <Image
                                src={testimonial.avatar}
                                alt={`${testimonial.name} avatar`}
                                width={50}
                                height={50}
                                className="rounded-full shadow-md h-20 w-20"
                            />
                            <div className="ml-4">
                                <h3 className="text-lg font-semibold text-secondary text-themeLilac font-title">{testimonial.name}</h3>
                                <p className="text-[14px] md:text-sm text-foreground-accent text-themeLilac font-text">{testimonial.role}</p>
                            </div>
                        </div>
                        <div className={`${getFontSizeClass(getFullMessage(testimonial.message))} mt-4 items-center justify-center h-auto text-justify`}>
                            <p className={`text-foreground-accent text-justify lg:text-left text-themeLilac font-text`}>{testimonial.message.line1}</p>
                            {testimonial.message.line2 && <p className={`text-foreground-accent text-justify  lg:text-left text-themeLilac font-text mt-2 `}>{testimonial.message.line2}</p>}
                            {testimonial.message.line3 && <p className={`text-foreground-accent text-justify  lg:text-left text-themeLilac font-text mt-2`}>{testimonial.message.line3}</p>}
                            {testimonial.message.line4 && <p className={`text-foreground-accent text-justify  lg:text-left text-themeLilac font-text mt-2`}>{testimonial.message.line4}</p>}
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default Testimonials;