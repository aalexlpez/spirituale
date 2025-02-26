'use client'
import React, { useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import JoinModal from './JoinModal'

const JoinButton = () => {
    const [showJoinModal, setShowJoinModal] = useState(false)

    return (
        <>
            <button
                type="button"
                className={clsx("flex items-center justify-center min-w-[205px] mt-3 px-4 py-10 h-14 rounded-full w-full sm:w-fit bg-themeNeon transform animate-scaleInOut")}
                onClick={() => setShowJoinModal(true)}
            >
                <div className="mr-3">
                    <Image src={"/images/logo.jpg"} alt="Site Logo" width={100} height={100} className="min-w-fit w-10 h-10 md:w-14 md:h-14 rounded-full" />

                </div>
                <div>
                    <div className="text-base font-medium">
                        Con solo un click
                    </div>
                    <div className="-mt-1 font-sans text-2xl font-bold">
                        ¡Únete Gratis!
                    </div>
                </div>
            </button>

            <JoinModal isOpen={showJoinModal} setIsOpen={setShowJoinModal} />
        </>
    )
}

export default JoinButton