'use client';

import React, { useEffect, useState } from 'react'
import Image from 'next/image'

function splitTextToSpans(text: string, baseDelay = 0, delayStep = 0.04, className = "") {
    return text.split("").map((char, i) => (
        <span
            key={i}
            style={{
                animationDelay: `${baseDelay + i * delayStep}s`,
                display: 'inline-block'
            }}
            className={`fade-in-char ${className}`}
        >
            {char === " " ? "\u00A0" : char}
        </span>
    ));
}

export default function Home() {
    // State for controlling text animation
    const [showText, setShowText] = useState(false);

    useEffect(() => {
        // Show text after image animation finishes (estimate: 1.1s)
        const timer = setTimeout(() => setShowText(true), 100);
        return () => clearTimeout(timer);
    }, []);

    // ฟังก์ชันสำหรับ scroll แบบ smooth
    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        const target = document.getElementById('mission');
        if (target) {
            // Scroll with offset for navbar height (e.g., 80px)
            const yOffset = -80;
            const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
            window.scrollTo({ top: y, behavior: 'smooth' });
        }
    };

    return (
        <>
            {/* Animation CSS */}
            <style>
                {`
                .fade-in-char {
                    opacity: 0;
                    transform: translateY(20px);
                    animation: fadeInUpChar 0.5s forwards;
                }
                @keyframes fadeInUpChar {
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .fade-in-group {
                    opacity: 0;
                    animation: fadeInGroup 0.7s forwards;
                }
                @keyframes fadeInGroup {
                    to {
                        opacity: 1;
                    }
                }
                .fade-in-image {
                    opacity: 0;
                    transform: scale(0.98);
                    animation: fadeInImage 0.9s 0.1s forwards;
                }
                @keyframes fadeInImage {
                    to {
                        opacity: 1;
                        transform: scale(1);
                    }
                }
                `}
            </style>
            {/* Add pt-[80px] to offset for navbar height */}
            <div id='home' className="min-h-screen bg-gradient-to-br from-white flex flex-col items-center justify-center px-4 sm:px-6 pt-[80px]">
                {/* Section Container */}
                <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-8 md:gap-12 items-center">

                    {/* Left Content */}
                    <div className="flex flex-col justify-center -mt-[100px] md:-mt-[60px]">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0b1c39] mb-4 leading-tight">
                            {showText && splitTextToSpans("MOVE THAILAND", 0, 0.04)}
                            <br />
                            <span className="text-orange-500">
                                {showText && splitTextToSpans("CHANGE THE WORLD.", 0.3, 0.04)}
                            </span>
                        </h1>

                        <p
                            className={`text-base sm:text-lg text-gray-600 mb-6 md:mb-8 fade-in-group`}
                            style={{
                                animationDelay: showText ? "1.2s" : undefined,
                                animationPlayState: showText ? "running" : "paused",
                                opacity: showText ? undefined : 0
                            }}
                        >
                            We are challenged to both study and work to experience firsthand the life of a startup.
                        </p>

                        <div
                            className="flex flex-col sm:flex-row gap-4 fade-in-group"
                            style={{
                                animationDelay: showText ? "1.2s" : undefined,
                                animationPlayState: showText ? "running" : "paused",
                                opacity: showText ? undefined : 0
                            }}
                        >
                            <a href='#programs' className="bg-orange-400 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded-lg shadow flex items-center justify-center gap-2 text-sm sm:text-base">
                                Explore Programs
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline-block"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Image */}
                    <div className="relative mt-8 md:mt-0 px-2 sm:px-4 md:px-0">
                        {/* Top Right Box */}
                        <div className="absolute w-[70px] h-[40px] sm:w-[90px] sm:h-[54px] md:w-[100px] md:h-[60px] -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-4 md:-right-6 bg-[#011133] shadow-lg rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 sm:gap-3 z-0"></div>
                        {/* Bottom Left Box */}
                        <div className="absolute w-[70px] h-[40px] sm:w-[90px] sm:h-[54px] md:w-[100px] md:h-[60px] -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-5 md:-left-6 bg-[#F7931B] shadow-lg rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 sm:gap-3 z-0"></div>
                        <div className="relative shadow-lg">
                            <Image
                                src="/IMG_8949.jpg"
                                alt="Student working on tech"
                                width={700}
                                height={500}
                                className="object-cover w-full h-auto rounded-lg shadow-2xl fade-in-image"
                            />
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                {/* <div className="flex justify-center pb-2 animate-bounce cursor-pointer mt-8 sm:mt-[60px] lg:-mt-[0px] xl:mt-[80px]">
                    <a
                        href="#mission"
                        className="text-xs sm:text-sm text-gray-500"
                        onClick={handleSmoothScroll}
                    >
                        Scroll to explore
                    </a>
                </div>
                <div className="flex justify-center mb-6 sm:mb-8 animate-bounce cursor-pointer">
                    <a
                        href="#mission"
                        className="text-gray-500"
                        onClick={handleSmoothScroll}
                    >
                        <Image
                            src="icon20.svg"
                            alt='icon29'
                            className='w-4 h-4 sm:w-6 sm:h-6'
                            width={24}
                            height={24}
                        />
                    </a>
                </div> */}
            </div>
        </>
    )
}
