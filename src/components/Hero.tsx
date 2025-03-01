import React from 'react';
import Image from 'next/image';

import JoinButton from './JoinButton';

import { heroDetails } from '@/data/hero';
import EventDate from './EventDate';

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5"
        >
            <div className="absolute left-0 top-0 bottom-0 -z-10 w-full h-full">
                <Image
                    src="/images/hero-background.jpg"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                    priority={true}
                    alt="Index background"
                    className="opacity-50"
                />
                <div className="absolute inset-0 bg-[#0D0D5599] opacity-50"></div>
            </div>

            <div className="absolute left-0 right-0 bottom-0 backdrop-blur-[2px] h-40 bg-gradient-to-b from-transparent via-[rgba(233,238,255,0.5)] to-[rgba(202,208,230,0.5)]">
            </div>

            <div className="text-center">
                <h1 className="text-4xl md:text-6xl md:leading-tight font-bold text-themeNavy max-w-xl md:max-w-3xl mx-auto font-text">{heroDetails.heading}</h1>
                <p className="mt-4 max-w-lg mx-auto text-themeNavy font-medium font-text">{heroDetails.subheading1}<span className='text-themeNeon font-bold' style={{ fontFamily: 'CuerpoFont' }}>{heroDetails.subheading2}</span>{heroDetails.subheading3}</p>
                <div className="mt-6 flex flex-col sm:flex-row items-center sm:gap-4 w-fit mx-auto">
                    <JoinButton />
                </div>
                {/* <Image
                    src={heroDetails.centerImageSrc}
                    width={384}
                    height={340}
                    quality={100}
                    sizes="(max-width: 768px) 100vw, 384px"
                    priority={true}
                    unoptimized={true}
                    alt="app mockup"
                    className='relative mt-12 md:mt-16 mx-auto z-10 '
                /> */}
                <EventDate />
            </div>
        </section>
    );
};

export default Hero;
