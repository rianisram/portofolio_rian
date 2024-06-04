import React from "react"

export default function Hero() {
    return (
        <div className="mx-auto max-w-screen-xl px-4 py-6 sm:py-12 lg:px8 lg:py-16">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                <div className="relative h-70 overflow-hidden rounded-lg sm:h-90 lg:order-last lg:h-full ">
                    <img src="/images/rian.jpeg"
                        alt="/"
                        className="absolute insert-0 h-full w-full object-cover"
                    />
                </div>
                <div className="relative flex items-center bg-green-800">
                    <span
                        className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-green-800" 
                    ></span>
                    <div className="lg:py-24 items-center ">
                        <h2 className="text-3xl font-bold sm:text-7xl text-gray-900 items-center"> Hello, I'm Rian Isramdani</h2>

                        <p className="mt-4 text-gray-800 text-2xl items-center text-light" >Welcome to my Portofolio. I am a programmer and I am ready to face any challenge</p>
                        <a href="#" className="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400">
                            Contact
                        </a>
                    </div>
                </div>   
            </div>
        </div>
    )
}