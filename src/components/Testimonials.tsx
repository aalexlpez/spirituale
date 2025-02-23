import React from 'react';
import Image from 'next/image';
import { testimonials } from '@/data/testimonials';

const Testimonials: React.FC = () => {
    return (
        <div className="grid gap-14 max-w-xs w-full mx-auto lg:gap-8 lg:grid-cols-3 lg:max-w-7xl px-0 lg:px-4 xl:px-0">
            {testimonials.map((testimonial, index) => (
                <div
                    key={index}
                    className="bg-themeNavy p-4 md:p-8 rounded-2xl  shadow-2xl hover:scale-105 transition-transform duration-300"
                >
                    <div className="flex items-center mb-4 w-full justify-center lg:justify-start ">
                        <Image
                            src={testimonial.avatar}
                            alt={`${testimonial.name} avatar`}
                            width={50}
                            height={50}
                            className="rounded-full shadow-md h-20 w-20 "
                        />
                        <div className="ml-4">
                            <h3 className="text-lg font-semibold text-secondary text-themeLilac">{testimonial.name}</h3>
                            <p className="text-[14px] md:text-sm text-foreground-accent text-themeLilac">{testimonial.role}</p>
                        </div>
                    </div>
                    <p className="text-foreground-accent text-justify text-[14px] md:text-sm  lg:text-left text-themeLilac">&quot;{testimonial.message}&quot;</p>
                </div>
            ))}
        </div>
    );
};

export default Testimonials;
