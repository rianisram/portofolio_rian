import React from "react"
import Image from "next/image"
import buku from '@/app/assets/rian.svg'
import rian3 from "@/app/assets/experience.jpg"
import rian2 from "@/app/assets/skill.jpg"



export default function Card() {
    return (
    <div className="flex justify-center gap-6 flex-col pl-2 pr-2 md:flex-row md:gap-6">
        <div className="max-w-sm rounded overflow-hidden shadow-lg
            bg-[#384B70] gap-6 transition-transform duration-300 transform hover:scale-105">
            <Image src={buku} alt={"buku"} width={385} height={150} className="transition-transform duration-300 transform hover:scale-105 " />
            <div className="px-6 py-6">
                <div className="text-gray-400 text-base">
                    <h1 className="font-bold text-2xl">Education</h1>
                    <p>Education was important to me until college.</p>
                </div>
            </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg
            bg-[#384B70] gap-6 trsnsition-transform duration-300 hover:scale-105">
            <Image src={rian3} alt={"rian"} width={385} height={150} className="transition-transform duration-300 transform hover:scale-105 " />
            <div className="px-6 py-6">
                <div className="text-gray-400 text-base">
                    <h1 className="font-bold text-2xl">Experience</h1>
                    <p>Experience is the best moment in life. This is my experience while working.</p>
                </div>
            </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg
            bg-[#384B70] gap-6 transition-transform duration-300 hover:scale-105">
            <Image src={rian2} alt={"rian"} width={385} height={150} className="transition-transform duration-300 transform hover:scale-105 " />
            <div className="px-6 py-6">
                <div className="text-gray-400 text-base">
                    <h1 className="font-bold text-2xl">Skill</h1>
                    <p>
                    My specialty is making whatever I can. Here are some of my skills so far.</p>
                </div>
            </div>
        </div>
       
    </div>

    )
}