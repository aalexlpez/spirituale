'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';
import { motion } from 'framer-motion';
import JoinModal from "./JoinModal" // Import JoinModal
import { usePathname } from 'next/navigation';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);
    const [prevScrollY, setPrevScrollY] = useState(0);
    const [visible, setVisible] = useState(true);
    const [isLoading] = useState(false);
    const [showJoinModal, setShowJoinModal] = useState(false)

    const pathname = usePathname();
    const isThanksPage = pathname === '/thanks' || '/curso-spiritual';


    const handleP2PValidation = async () => {
        setShowJoinModal(true)
    }

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);

            // Si el usuario hace scroll hacia arriba, mostramos el botón
            if (window.scrollY < prevScrollY) {
                setVisible(true);
            } else if (window.scrollY > 100) {
                setVisible(false);
            }

            setPrevScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollY]);

    return (
        <>
            <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">

                {/* DESKTOP MENU */}
                <Container className="!px-0 hidden md:block">
                    <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                        {/* Logo */}
                        <Link href="/" className="flex items-center gap-2">
                            <Image src={"/images/logo.jpg"} alt="Site Logo" width={100} height={100} className="min-w-fit w-8 h-8 md:w-10 md:h-10 rounded-full" />
                            <span className={`font-text text-xl font-semibold cursor-pointer ${isThanksPage ? 'text-themeLilac' : 'text-themeNavy'}`}>
                                {siteDetails.siteName}
                            </span>
                        </Link>

                        {/* Desktop Menu */}
                        {!isThanksPage &&
                            <ul className="hidden md:flex space-x-6">
                                <li>
                                    <motion.div
                                        animate={{ y: scrollY * 1 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                    >
                                        <button
                                            onClick={handleP2PValidation}
                                            disabled={isLoading}
                                            className="font-bold font-text text-themeNavy bg-themeNeon px-8 py-3 rounded-full transition-colors duration-300 hover:bg-themeNavy hover:text-themeNeon border-[3px] border-themeNeon disabled:opacity-50 disabled:cursor-not-allowed"
                                        >
                                            {isLoading ? 'Procesando...' : '¡Únete Ya!'}
                                        </button>
                                    </motion.div>
                                </li>
                            </ul>
                        }


                    </nav>
                </Container>

                {/* MOBILE MENU */}
                <Container className="!px-0 md:hidden">
                    <motion.header
                        className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full"
                        initial={{ y: 0 }}
                        animate={{ y: visible ? 0 : -100 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    >
                        <nav className="shadow-md   bg-white  mx-auto flex justify-between items-center py-2 px-5 ">
                            {/* Logo */}
                            <Link href="/" className="flex items-center gap-2">
                                <Image src={"/images/logo.jpg"} alt="Site Logo" width={100} height={100} className="min-w-fit w-8 h-8  rounded-full" />
                                <span className="font-text text-xl font-semibold text-themeNavy cursor-pointer">
                                    {siteDetails.siteName}
                                </span>
                            </Link>

                            {/* Desktop Menu */}
                            {!isThanksPage &&
                                <ul className="hidden space-x-6">
                                    <li>
                                        <motion.div
                                            animate={{ y: scrollY * 1 }}
                                            transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                        >
                                            <button
                                                onClick={handleP2PValidation}
                                                disabled={isLoading}
                                                className="font-bold font-text text-themeNavy bg-themeNeon px-8 py-3 rounded-full transition-colors duration-300 hover:bg-themeNavy hover:text-themeNeon disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isLoading ? 'Procesando...' : '¡Únete Ya!'}
                                            </button>
                                        </motion.div>
                                    </li>
                                </ul>
                            }


                            {/* Mobile Menu Button */}
                            {!isThanksPage &&
                                <div className="md:hidden flex items-center">
                                    <button
                                        onClick={() => setIsOpen(!isOpen)}
                                        type="button"
                                        className="bg-red-500 text-themeNavy focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
                                        aria-controls="mobile-menu"
                                        aria-expanded={isOpen}
                                    >
                                        {isOpen ? (
                                            <HiOutlineXMark className="h-6 w-6" aria-hidden="true" />
                                        ) : (
                                            <HiBars3 className="h-6 w-6" aria-hidden="true" />
                                        )}
                                        <span className="sr-only">Toggle navigation</span>
                                    </button>
                                </div>
                            }
                        </nav>
                        {/* Mobile Menu with Transition */}
                        {!isThanksPage &&
                            <Transition
                                show={isOpen}
                                enter="transition ease-out duration-200 transform"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="transition ease-in duration-75 transform"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div id="mobile-menu" className="md:hidden bg-white shadow-lg">
                                    <ul className="flex flex-col space-y-4 pt-4 pb-6 px-6">
                                        <li>
                                            <button
                                                onClick={handleP2PValidation}
                                                disabled={isLoading}
                                                className="font-bold font-text text-themeNavy bg-themeNeon px-8 py-3 rounded-full transition-colors duration-300 hover:bg-themeNavy hover:text-themeNeon disabled:opacity-50 disabled:cursor-not-allowed"
                                            >
                                                {isLoading ? 'Procesando...' : '¡Únete Ya!'}
                                            </button>
                                        </li>
                                    </ul>
                                </div>
                            </Transition>
                        }
                    </motion.header>
                    {/* Botón flotante para Mobile */}
                    {!isThanksPage &&
                        <motion.div
                            className="md:hidden fixed bottom-5 right-5 z-50"
                            initial={{ y: -1, opacity: 0 }}
                            animate={{ y: scrollY * 0, opacity: scrollY > 100 ? 1 : 0 }}
                            transition={{ type: "spring", stiffness: 100, damping: 15 }}
                        >
                            <button
                                onClick={handleP2PValidation}
                                disabled={isLoading}
                                className="font-bold font-text text-themeNavy bg-themeNeon px-6 py-3 rounded-full shadow-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isLoading ? 'Procesando...' : '¡Únete Ya!'}
                            </button>
                        </motion.div>
                    }
                </Container>


            </header>
            <JoinModal isOpen={showJoinModal} setIsOpen={setShowJoinModal} />
        </>
    );
};

export default Header;
