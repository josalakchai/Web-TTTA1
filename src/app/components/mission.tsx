'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

// Import AOS styles globally (if not already imported in _app or layout)
import 'aos/dist/aos.css';

const Everyone = () => {
    useEffect(() => {
        // Dynamically import AOS only on client side
        let AOS: any;
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
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
                {/* แก้ไขขนาดและตำแหน่งของวงกลม */}
                <div className="absolute -top-20 -right-10 w-[256px] h-[256px] bg-[#F7931B] opacity-6 rounded-full"></div>
                <div className="absolute -bottom-20 -left-10 w-[256px] h-[256px] bg-[#011133] opacity-6 rounded-full"></div>

                {/* LEFT - Image Section */}
                <div className="relative" data-aos="fade-zoom-in" data-aos-duration="2000">
                    {/* Top Right Box */}
                    <div className="absolute w-[100px] h-[60px] -top-4 -right-6 bg-[#011133] shadow-lg rounded-lg px-4 py-3 flex items-center gap-3 z-0"></div>

                    {/* Bottom Left Box */}
                    <div className="absolute w-[100px] h-[60px] -bottom-5 -left-6 bg-[#F7931B] shadow-lg rounded-lg px-4 py-3 flex items-center gap-3 z-0"></div>

                    <Image
                        src="/tiger-36 (1).jpg"
                        alt="Community Program"
                        className="rounded-xl w-full shadow-md relative z-10"
                        width={684}
                        height={456}
                    />
                </div>

                {/* RIGHT - Text Section */}
                <div data-aos="fade-zoom-in" data-aos-duration="2000">
                    <h2 className="text-4xl font-bold text-[#011133]">
                        Our <span className="text-orange-500">Mission</span>
                    </h2>
                    <p className="text-gray-600 mt-4 text-lg">
                        The truth of the matter is that the folks at the academy — with these unparalleled opportunities — are working extremely hard to upgrade Thailand from a factor-and-efficiency-driven to an innovation-driven economy so that Thailand could one day produce knowledge-based instead of commodity-based products for the world.”
                    </p>
                    <p className="text-gray-600 mt-4 text-lg">
                        We are challenged to both study and work to experience firsthand the life of a startup.{" "}
                        <span className='font-bold text-orange-500'>We are groomed to further our studies abroad to acquire technology transfer and connection for foreign investment.</span>
                    </p>
                    <p className="text-gray-600 mt-4 text-lg">
                        We are particularly interested in emerging technologies and “Innopreneurship” — a term coined from innovation together with entrepreneurship — because we are a member of “The Tiger Team Academy” with the noble mission to move Thailand and change the world — an endeavor to groom the next generation leaders to become entrepreneurs in technology business.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Everyone;
