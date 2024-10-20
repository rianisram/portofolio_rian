import React from "react";
import Navbar from "../component/Navbar";
import Image from "next/image";
import buku from "@/app/assets/tilil.png";
import pertiwi from "@/app/assets/pertiwi.png";
import smk2 from "@/app/assets/smkn2bdg.png";
import purwadhika from "@/app/assets/pwdk.png";
import code from "@/app/assets/code2.png"
import Footers from "../component/Footers";

export default function Experience() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center bg-gradient-to-t from-[#6a87c1] via-[#7da2b3] to-[#f3f2f2]">
                <h1 className="font-extrabold text-5xl flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-[#384B70] via-[#507687] to-[#767573] mb-6">
                    Previous
                </h1>
                <h1 className="font-extrabold text-5xl flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-[#384B70] via-[#507687] to-[#767573] mb-6">
                    Education
                </h1>
                <div className="flex flex-wrap justify-center gap-6 max-w-screen-xl">
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg bg-[#384B70] transition-transform duration-300 transform hover:scale-105">
                        <div className="w-full h-80 relative">
                            <Image
                                src={buku}
                                alt={"buku"}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                        <div className="px-6 py-6">
                            <div className="text-[#f4ecec] text-base">
                                <h1 className="font-bold text-2xl">SDN NEGERI TILIL 3 BANDUNG</h1>
                                <p>2009-2015</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg bg-[#384B70] transition-transform duration-300 transform hover:scale-105">
                        <div className="w-full h-80 relative">
                            <Image
                                src={pertiwi}
                                alt={"rian"}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                        <div className="px-6 py-6">
                            <div className="text-[#f4ecec] text-base">
                                <h1 className="font-bold text-2xl">SMP PERTIWI BANDUNG</h1>
                                <p>2015-2018</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg bg-[#384B70] transition-transform duration-300 transform hover:scale-105">
                        <div className="w-full h-80 relative">
                            <Image
                                src={smk2}
                                alt={"rian"}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                        <div className="px-6 py-6">
                            <div className="text-[#f4ecec] text-base">
                                <h1 className="font-bold text-2xl">SMK NEGERI 2 BANDUNG</h1>
                                <p>2018-2021</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg bg-[#384B70] transition-transform duration-300 transform hover:scale-105">
                        <div className="w-full h-80 relative">
                            <Image
                                src={purwadhika}
                                alt={"rian"}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                        <div className="px-6 py-6">
                            <div className="text-[#f4ecec] text-base">
                                <h1 className="font-bold text-2xl">Purwadhika</h1>
                                <p>2024-2024</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 rounded overflow-hidden shadow-lg bg-[#384B70] transition-transform duration-300 transform hover:scale-105">
                        <div className="w-full h-80 relative">
                            <Image
                                src={code}
                                alt={"rian"}
                                layout="fill"
                                objectFit="cover"
                                className="transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                        <div className="px-6 py-6">
                            <div className="text-[#f4ecec] text-base">
                                <h1 className="font-bold text-2xl">Codepolitan</h1>
                                <p>Online</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footers />
        </>
    );
}