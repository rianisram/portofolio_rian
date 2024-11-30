"use client";
import React, { useState } from "react";
import Link from "next/link";


const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="bg-gradient-to-r from-[#384B70] via-[#507687] to-[#767573] sticky top-0 z-50">
            <nav className="max-w-[1600px] lg:mx-auto flex items-center justify-between px-5 py-5">
                <div className="flex items-center">
                <h1 className="font-extrabold text-1xl sm:text-4xl md:text-2xl flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-[#e4e4e6] via-[#2d5b70] to-[#a39f97] mb-1 sm:mb-1 gap-3">
                <span className="text-[#c4c1c1]"><Link href="/"> Rian Isramdani</Link></span>
            </h1>
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
                    <Link href="/About" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">About Me</Link>
                    <Link href="/Education" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">Education</Link>
                    <Link href="/Experience" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">Experience</Link>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden` } >
                <div className="flex flex-col gap-4 items-start bg-[#165051] py-4 bg-gradient-to-r from-[#384B70] via-[#507687] to-[#767573]">
                    <Link href="/" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">Home</Link>
                    <Link href="/About" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">About Me</Link>
                    <Link href="/Education" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">Education</Link>
                    <Link href="/Experience" className="text-[#fefefe] transition-transform duration-300 transform hover:scale-125 font-semibold">Experience</Link>
                </div>
            </div>
        </header>
    );
};

export default Navbar;