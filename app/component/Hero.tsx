"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import rian2 from '@/app/assets/rian1.jpeg';

const Hero = () => {
    useEffect(() => {
        function typeEffect(element: HTMLElement, speed: number) {
            const text = "Hello I'm Rian";
            let i = 0;

            function typing() {
                if (i < text.length) {
                    element.innerHTML = text.substring(0, i + 1);
                    i++;
                    setTimeout(typing, speed);
                } else {
                    // Mengatur ulang variabel i untuk mengetik ulang
                    setTimeout(() => {
                        i = 0;
                        element.innerHTML = "";
                        typing();
                    }, speed);
                }
            }

            typing();
        }

        const element = document.querySelector(".typing-effect");
        if (element) {
            typeEffect(element as HTMLElement, 150);
        } else {
            console.error("Element with class 'typing-effect' not found");
        }
    }, []);

    return (
        <div className="container mx-auto my-5 px-4">
            <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mt-5 md:mt-0">
                    <h1 className="text-left font-bold text-9xl sm:text-8xl md:text-8xl lg:text-7xl transition-transform duration-300 transform hover:scale-105
                     bg-clip-text text-transparent bg-gradient-to-t  from-[#2c5551] via-[#346f8b] to-[#141212] typing-effect mb-4">
                        
                    </h1>
                    <p className="text-left text-lg sm:text-xl md:text-1xl font-bold mt-2 transition-transform duration-300 transform hover:scale-105 text-[#2f4752]">
                        I have a graduate degree in mechanical blye, especially in the field of welding,
                        but I also have web creation skills. I also learned about Photoshop to create promotional posts.
                    </p>
                </div>
                <div className="md:w-1/2 flex justify-center mt-4 md:mt-0">
                    <Image src={rian2} alt={"rian"} width={350} height={350} className="rounded-sm transition-transform duration-300 transform hover:scale-105" />
                </div>
            </div>
        </div>
    );
}

export default Hero;