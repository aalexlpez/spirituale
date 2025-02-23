import { motion } from "framer-motion";
import clsx from "clsx";

import { IBenefitBullet } from "@/types"
import { childVariants } from "./BenefitSection"

const BenefitBullet: React.FC<IBenefitBullet & { imageAtRight?: boolean }> = ({ title, description, icon, imageAtRight }) => {
    return (
        <motion.div
            className="flex flex-col items-center mt-8 gap-3 lg:gap-5 lg:flex-row lg:items-start"
            variants={childVariants}
        >
            <div className={clsx("flex justify-center mx-auto lg:mx-0 flex-shrink-0 mt-3 w-fit ", { "text-themeNavy": imageAtRight, "text-themeLilac": !imageAtRight })}>
                {icon}
            </div>
            <div>
                <h4 className={clsx("text-lg font-semibold  underline", { "text-themeNavy": imageAtRight, "text-themeLilac": !imageAtRight })}>
                    {title}
                </h4>
                <p className={clsx("mt-1.5", { "text-themeNavy": imageAtRight, "text-themeLilac": !imageAtRight })}>
                    {description}
                </p>
            </div>
        </motion.div>
    )
}

export default BenefitBullet