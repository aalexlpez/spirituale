'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';
import { HiOutlineXMark, HiBars3 } from 'react-icons/hi2';
import Image from 'next/image';
import { motion } from 'framer-motion';

import Container from './Container';
import { siteDetails } from '@/data/siteDetails';

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className="bg-transparent fixed top-0 left-0 right-0 md:absolute z-50 mx-auto w-full">
            <Container className="!px-0">
                <nav className="shadow-md md:shadow-none bg-white md:bg-transparent mx-auto flex justify-between items-center py-2 px-5 md:py-10">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Image src={"/images/logo.jpg"} alt="Site Logo" width={100} height={100} className="min-w-fit w-8 h-8 md:w-10 md:h-10 rounded-full" />
                        <span className="manrope text-xl font-semibold text-themeNavy cursor-pointer">
                            {siteDetails.siteName}
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <ul className="hidden md:flex space-x-6">
                        <li>
                            <motion.div
                                animate={{ y: scrollY * 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                            >
                                <Link href="#cta" className="font-bold text-themeNavy bg-themeNeon px-8 py-3 rounded-full transition-colors duration-300 hover:bg-themeNavy hover:text-themeNeon">
                                    ¡Únete Ya!
                                </Link>
                            </motion.div>
                        </li>
                    </ul>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="bg-themeNeon text-themeNavy focus:outline-none rounded-full w-10 h-10 flex items-center justify-center"
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
                </nav>
            </Container>

            {/* Mobile Menu with Transition */}
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
                    <ul className="flex flex-col space-y-4 pt-1 pb-6 px-6">
                        <li>
                            <Link href="#cta" className="font-bold text-themeNavy bg-themeNeon px-8 py-3 rounded-full transition-colors duration-300 hover:bg-themeNavy hover:text-themeNeon" onClick={() => setIsOpen(false)}>
                                ¡Únete Ya!
                            </Link>
                        </li>
                    </ul>
                </div>
            </Transition>
        </header>
    );
};

export default Header;
