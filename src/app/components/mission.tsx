'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

// Import AOS styles globally (if not already imported in _app or layout)
import 'aos/dist/aos.css';

// Define a type for AOS to avoid 'any'
type AOSStatic = {
    init: (options?: { once?: boolean; duration?: number; offset?: number }) => void;
    refreshHard?: () => void;
};

const Everyone = () => {
    useEffect(() => {
        // Dynamically import AOS only on client side
        let AOS: AOSStatic | undefined;
        const loadAOS = async () => {
            if (typeof window !== 'undefined') {
                const aosModule = await import('aos');
                AOS = aosModule.default ? aosModule.default : aosModule;
                AOS.init({
                    once: true,
                    duration: 900,
                    offset: 80,
                });
            }
        };
        loadAOS();

        // Optionally refresh AOS on component update/unmount
        return () => {
            if (AOS && typeof AOS.refreshHard === 'function') {
                AOS.refreshHard();
            }
        };
    }, []);

    return (
        <section id='mission' className="bg-white py-20 px-4 relative overflow-hidden">
            <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center px-4 sm:px-8 md:px-12">
                {/* วงกลมพื้นหลัง ปรับขนาดและตำแหน่งให้ไม่ชิดขอบ */}
                <div className="pointer-events-none absolute -top-10 right-0 sm:-top-16 sm:-right-8 md:-top-20 md:-right-10 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[256px] md:h-[256px] bg-[#F7931B] opacity-10 rounded-full z-0"></div>
                <div className="pointer-events-none absolute -bottom-10 left-0 sm:-bottom-16 sm:-left-8 md:-bottom-20 md:-left-10 w-[180px] h-[180px] sm:w-[220px] sm:h-[220px] md:w-[256px] md:h-[256px] bg-[#011133] opacity-10 rounded-full z-0"></div>

                {/* LEFT - Image Section */}
                <div className="relative z-10 flex justify-center items-center">
                    <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[420px] lg:max-w-[480px] mx-auto px-2 sm:px-4 md:px-0" data-aos="fade-zoom-in" data-aos-duration="2000">
                        {/* Top Right Box */}
                        <div className="absolute w-[70px] h-[40px] sm:w-[90px] sm:h-[54px] md:w-[100px] md:h-[60px] -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-4 md:-right-6 bg-[#011133] shadow-lg rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 sm:gap-3 z-0"></div>
                        {/* Bottom Left Box */}
                        <div className="absolute w-[70px] h-[40px] sm:w-[90px] sm:h-[54px] md:w-[100px] md:h-[60px] -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-5 md:-left-6 bg-[#F7931B] shadow-lg rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 sm:gap-3 z-0"></div>
                        <Image
                            src="/tiger-36 (1).jpg"
                            alt="Community Program"
                            className="rounded-xl w-full shadow-md relative z-10 object-cover"
                            width={684}
                            height={456}
                            sizes="(max-width: 768px) 100vw, 420px"
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT - Text Section */}
                <div className="z-10 mt-8 md:mt-0" data-aos="fade-zoom-in" data-aos-duration="2000">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#011133]">
                        Our <span className="text-orange-500">Mission</span>
                    </h2>
                    <p className="text-gray-600 mt-4 text-base sm:text-lg">
                        The truth of the matter is that the folks at the academy — with these unparalleled opportunities — are working extremely hard to upgrade Thailand from a factor-and-efficiency-driven to an innovation-driven economy so that Thailand could one day produce knowledge-based instead of commodity-based products for the world.”
                    </p>
                    <p className="text-gray-600 mt-4 text-base sm:text-lg">
                        We are challenged to both study and work to experience firsthand the life of a startup.{" "}
                        <span className='font-bold text-orange-500'>We are groomed to further our studies abroad to acquire technology transfer and connection for foreign investment.</span>
                    </p>
                    <p className="text-gray-600 mt-4 text-base sm:text-lg">
                        We are particularly interested in emerging technologies and “Innopreneurship” — a term coined from innovation together with entrepreneurship — because we are a member of “The Tiger Team Academy” with the noble mission to move Thailand and change the world — an endeavor to groom the next generation leaders to become entrepreneurs in technology business.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Everyone;
