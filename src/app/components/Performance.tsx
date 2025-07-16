'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';

const projects = [
    {
        title: 'MVTV',
        image: '/1.png',
    },
    {
        title: 'U-Laundry', 
        image: '/2.png',
    },
    {
        title: 'Power Buy',
        image: '/3.png',
    },
    {
        title: 'Big C Supercenter',
        image: '/4.png',
    },
    {
        title: 'Ally Sky Rewards',
        image: '/5.png',
    },
    {
        title: 'SCG Debenture Club',
        image: '/6.png',
    },
];

export default function Performance() {
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                once: true,
                duration: 800,
                offset: 60,
            });
        });
        import('aos/dist/aos.css');
    }, []);

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center bg-white">
            <div className="max-w-screen-xl mx-auto relative">
                <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#011133] mb-1 sm:mb-2"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    A creation born of care
                </h2>
                <h3
                    className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold text-[#011133] mb-3 sm:mb-4 md:mb-6"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    and commitment for our clients.
                </h3>

                <div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10 mb-8 md:mb-10 mt-[20px] md:mt-[60px]"
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className="transform transition duration-300 cursor-pointer group"
                            data-aos="zoom-in"
                            data-aos-delay={200 + index * 100}
                        >
                            <div className="relative aspect-[4/3] w-full bg-gray-900 rounded-2xl md:rounded-[32px] overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    layout="fill"
                                    objectFit="cover"
                                    className="opacity-100 transition-transform duration-300"
                                />
                            </div>
                            <div className="p-2 md:p-4">
                                <h4 className="text-lg md:text-xl font-bold text-gray-800 mb-1 group-hover:underline">
                                    {project.title}
                                </h4>
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="absolute left-0 bottom-[-30px] sm:bottom-[-35px] md:bottom-[-40px] text-left text-gray-500 text-[10px] sm:text-xs md:text-sm lg:text-base max-w-[200px] sm:max-w-[300px] md:max-w-none"
                    data-aos="fade-in"
                    data-aos-delay="700"
                >
                    *พัฒนาร่วมกับ บริษัท ดิจิทัลมีเดีย เอาท์ซอร์ส โซลูชัน
                </div>
            </div>
        </section>
    );
}
