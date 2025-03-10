"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"

import BenefitBullet from "./BenefitBullet";
import { IBenefit } from "@/types";


interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

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

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, description, imageSrc, bullets } = benefit;

    return (
        <section className="benefit-section">
            <motion.div
                className={clsx("flex flex-wrap flex-col items-stretch justify-center  lg:flex-row  lg:flex-nowrap py-20 ", { "bg-themeLilac text-themeNavy": imageAtRight, "bg-themeNavy text-themeLilac": !imageAtRight })}
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full lg:max-w-3xl justify-center px-4 md:px-10 py-10 md:py-0 rounded-3xl min-h-full ", { "justify-center w-full text-themeNavy": imageAtRight, "lg:order-1 justify-end text-themeLilac": !imageAtRight })}
                >
                    <div className="w-full text-center lg:text-left ">
                        <motion.div
                            className="flex flex-col w-full text-themeNavy justify-center"
                            variants={childVariants}
                        >
                            <h3 className={clsx("lg:max-w-2xl bg-gradient-to-r bg-clip-text text-transparent mb-4 font-title text-4xl lg:text-7xl lg:leading-tight font-bold", { " from-themeNavy to-themePink": imageAtRight, " from-themeLilac to-themePink": !imageAtRight })}>
                                {title.line1}
                            </h3>
                            {title.line2 &&
                                <h3 className={clsx("lg:max-w-2xl bg-gradient-to-r bg-clip-text text-transparent mb-4 font-title text-4xl lg:text-7xl lg:leading-tight font-bold", { " from-themeNavy to-themePink": imageAtRight, " from-themeLilac to-themePink": !imageAtRight })}>
                                    {title.line2}
                                </h3>
                            }

                            <p className={clsx("mt-1.5 mx-auto lg:ml-0 leading-normal ", { "text-themeNavy": imageAtRight, "text-themeLilac": !imageAtRight })}>
                                {description}
                            </p>
                        </motion.div>

                        <motion.div
                            className="flex flex-col w-full text-themeNavy justify-center"
                            variants={childVariants}
                        >
                            <div className="mx-auto lg:ml-0 w-full font-text">
                                {bullets.map((item, index) => (
                                    <BenefitBullet key={index} title={item.title} icon={item.icon} description={item.description} imageAtRight={imageAtRight} />
                                ))}
                            </div>
                        </motion.div>

                    </div>
                </div>

                <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight })}>
                    <div className={clsx("w-full flex", { "justify-center lg:justify-start": imageAtRight, "justify-center lg:justify-end": !imageAtRight })}>
                        <Image src={imageSrc} alt="title" width="384" height="762" quality={100} className="lg:ml-0 rounded-xl shadow-2xl" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection