import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'
import { ctaDetails } from '@/data/cta'

const JoinButton = ({ dark }: { dark?: boolean }) => {
    return (
        <Link href={ctaDetails.googlePlayUrl}>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-6 h-14 rounded-full w-full sm:w-fit bg-[#D9F103] transform transition-transform duration-300 ease-in-out hover:scale-110")}
            >
                <div className="mr-3">
                    <Image src={"/images/logo.jpg"} alt="Site Logo" width={100} height={100} className="min-w-fit w-8 h-8 md:w-10 md:h-10 rounded-full" />

                </div>
                <div>
                    <div className="text-xs">
                        Con solo un click
                    </div>
                    <div className="-mt-1 font-sans text-xl font-semibold">
                        ¡Únete Aquí!
                    </div>
                </div>
            </button>
        </Link>
    )
}

export default JoinButton