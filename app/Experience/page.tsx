import React from "react";
import Image from "next/image";
import transTvLogo from "@/app/assets/komatsu2 (1).png"; // Ganti dengan path logo Anda
import Navbar from "../component/Navbar";
import metal from "@/app/assets/Logo.png";
import Footers from "../component/Footers";

export default function Experience() {
    return (
        <>
            <Navbar />
            <div className="min-h-screen flex flex-col items-center bg-gradient-to-t from-[#6a87c1] via-[#7da2b3] to-[#f3f2f2]">
                <div className="w-full flex justify-center items-center p-6">
                    <h1 className="font-extrabold text-5xl flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-[#384B70] via-[#507687] to-[#767573] mb-6">My</h1>
                    <h1 className="font-extrabold text-5xl flex justify-center bg-clip-text text-transparent bg-gradient-to-r from-[#384B70] via-[#507687] to-[#767573] mb-6">Experience</h1>
                </div>
                <div className="flex flex-col items-center w-full max-w-5xl p-6 space-y-16">

                    <div className="flex flex-col md:flex-row items-center w-full space-y-8 md:space-y-0 md:space-x-8">
                        <div className="text-white flex-1 text-center md:text-left">
                            <h2 className="text-7xl font-bold">01</h2>
                            <h3 className="text-4xl font-bold mt-4">PT SINAR METALINDO UTAMA</h3>
                            <p>2019</p>
                            <p className="mt-2">
                                Jl. Cilember 319 Cimahi 40522, Jawa Barat, Indonesia
                            </p>
                            <p className="mt-4 text-[#ebe8e6] font-semibold">
                                Pkl 2019
                            </p>
                        </div>
                        <div className="flex-1">
                            <Image
                                src={metal}
                                alt="PT SINAR METALINDO UTAMA Logo"
                                width={400}
                                height={400}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center w-full space-y-8 md:space-y-0 md:space-x-8">
                        <div className="text-white flex-1 text-center md:text-left">
                            <h2 className="text-7xl font-bold">02</h2>
                            <h3 className="text-4xl font-bold mt-4">Komatsu</h3>
                            <p>2021-2023</p>
                            <p className="mt-2">
                                Jl. Cakung Cilincing Raya No.KM. 4, RT.7/RW.2, Sukapura, Kec. Cilincing, Jkt Utara, Daerah Khusus Ibukota Jakarta 14140
                            </p>
                            <p className="mt-4 text-[#ebe8e6] font-semibold">
                                Operator Produksi Welder
                            </p>
                        </div>
                        <div className="flex-1">
                            <Image
                                src={transTvLogo}
                                alt="Komatsu Logo"
                                width={400}
                                height={400}
                                className="object-contain"
                            />
                        </div>
                    </div>

                </div>
            </div>
            <Footers />
        </>
    );
}