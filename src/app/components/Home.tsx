import React from 'react'
import Image from 'next/image'

export default function Home() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-white flex flex-col items-center justify-center px-4 sm:px-6 mt-[40px]">
            {/* Section Container */}
            <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-center lg:mt-[135px]">

                {/* Left Content */}
                <div className="flex flex-col justify-center -mt-[100px] md:-mt-[60px]">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1c39] mb-4 leading-tight">
                        MOVE THAILAND<br />
                        <span className="text-orange-500">CHANGE THE WORLD.</span>
                    </h1>

                    <p className="text-base sm:text-lg text-gray-600 mb-6 md:mb-8">
                        We are challenged to both study and work to experience firsthand the life of a startup.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                        <a href='#programs' className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow flex items-center justify-center gap-2 text-sm sm:text-base">
                            Explore Programs
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative mt-8 md:mt-0">
                    {/* 20+ Startup Launches Badge */}
                    <div className="absolute w-[100px] h-[50px] -top-3 sm:-top-5 -right-3 sm:-right-6 text-white text-xs sm:text-sm px-4 py-4 rounded-lg shadow-lg backdrop-blur-sm bg-[#011133] group">

                    </div>
                    {/* 500+ Graduates Badge */}
                    <div className="absolute w-[100px] h-[50px] -bottom-[5%] -left-[4%] text-white text-sm font-semibold px-4 py-4 rounded-lg shadow-lg backdrop-blur-sm bg-[#F7931B]/90 group">

                    </div>
                    <div className="relative shadow-lg">
                        <Image src="/IMG_8949.jpg"
                            alt="Student working on tech"
                            width={700} height={500}
                            className="object-cover w-full h-auto rounded-lg shadow-2xl"
                        />

                    </div>
                </div>

            </div>

            {/* Scroll Indicator */}
            <div className="hidden md:flex justify-center pb-2 animate-bounce cursor-pointer mt-8 sm:mt-[60px] lg:-mt-[0px] xl:mt-[80px]">
                <a href="#our-programs" className="text-xs sm:text-sm text-gray-500">
                    Scroll to explore
                </a>
            </div>
            <div className="hidden md:flex justify-center mb-6 sm:mb-8 animate-bounce cursor-pointer">
                <a href="#our-programs" className="text-gray-500">
                    <Image
                        src="icon20.svg"
                        alt='icon29'
                        className='w-4 h-4 sm:w-6 sm:h-6'
                        width={24}
                        height={24}
                    />
                </a>
            </div>
        </div>
    )
}
