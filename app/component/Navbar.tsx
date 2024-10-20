"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logo2 from '@/app/assets/rian.png';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-[#384B70] via-[#507687] to-[#767573] sticky top-0 z-50">
            <nav className="max-w-[1600px] lg:mx-auto flex items-center justify-between px-2 py-1">
                <div className="flex items-center">
                    <Link href="/">
                        <Image 
                            src={logo2} 
                            alt={"Rian"} 
                            width={70} 
                            height={60} 
                            className="rounded-full p-2 transition-transform duration-300 transform hover:scale-110" 
                        />
                    </Link>
                </div>

                {/* Hamburger menu for small screens */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>

                {/* Main Navigation for Large Screens */}
                <div className="hidden lg:flex lg:flex-row lg:gap-5 pr-2">
                    <Link href="/" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">Home</Link>
                    <Link href="/About" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">About</Link>
                    <Link href="/Education" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">Education</Link>
                    <Link href="/Experience" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">Experience</Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden` } >
                <div className="flex flex-col gap-4 items-start bg-[#165051] py-4 bg-gradient-to-r from-[#384B70] via-[#507687] to-[#767573]">
                    <Link href="/" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">Home</Link>
                    <Link href="/About" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">About</Link>
                    <Link href="/Education" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">Education</Link>
                    <Link href="/Experience" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">Experience</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;