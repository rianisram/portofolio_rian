"use client"; // Menandai komponen sebagai Client Component

import Navbar from "../component/Navbar";
import rian2 from "@/app/assets/rian (1).png";
import Image from "next/image";
import { useEffect } from "react";
import Footers from "../component/Footers";

const About = () => {
  useEffect(() => {
    function typeEffect(element: HTMLElement, speed: number) {
      const text = "Rian isramdani";
      let i = 0;

      function typing() {
        if (i < text.length) {
          element.innerHTML = text.substring(0, i + 1);
          i++;
          setTimeout(typing, speed);
        } else {
          // Mengatur ulang variabel i untuk mengetik ulang
          i = 0;
          setTimeout(typing, speed);
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
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#6a87c1] via-[#7da2b3] to-[#f3f2f2]">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mt-5 md:mt-0">
            <h1 className="font-extrabold text-8xl flex justify-between bg-clip-text text-transparent bg-gradient-to-r from-[#384B70] via-[#507687] to-[#767573] mb-6">About Me</h1>
             <h1 className="text-left font-bold text-5xl sm:text-5xl md:text-7xl lg:text-5xl transition-transform duration-300 transform hover:scale-105 bg-clip-text text-transparent 
              bg-gradient-to-r  from-[#2c5551] via-[#346f8b] to-[#141212] typing-effect mb-2">
              </h1>
              <p className="text-left text-lg sm:text-xl md:text-1xl font-bold mt-2 transition-transform duration-300 transform hover:scale-105 text-[#16573f] mb-2">
                My name is Rian Isramdani, I come from Bandung.I am currently studying at Widyatama Bandung. I previously worked at Komatsu Indonesia
                as a welder production operator for 2 years. Previously I studied fullstack web programming at <span className="text-[#15464d]">Purwadhika Bandung</span>.
                Currently I am looking for work. Hopefully after seeing my portfolio you will be interested in working with me.
              </p>
              <h2 className="text-left text-lg sm:text-xl md:text-1xl font-bold mt-2 transition-transform duration-300 transform hover:scale-105 text-[#1a3d31] mb-7">
                That's all about me, thank you.
              </h2>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <Image src={rian2} alt="rian" width={350} height={300} className="rounded-3xl  bg-gradient-to-r from-[#384B70] via-[#6290a5] to-[#8a8987] transition-transform duration-300 transform hover:scale-105 " />
            </div>
          </div>
        </div>
      </div>
     <Footers />
    </>
  );
};

export default About;