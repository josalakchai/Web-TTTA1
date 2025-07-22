'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

const projects = [
    {
        title: 'Event TTTA',
        image: '/.png',
    },
    {
        title: 'Event TTTA',
        image: '/.png',
    },
    {
        title: 'Event TTTA',
        image: '/.png',
    },
    {
        title: 'Event TTTA',
        image: '/.png',
    },
    {
        title: 'Event TTTA',
        image: '/.png',
    },
    {
        title: 'Event TTTA',
        image: '/.png',
    },
    {
        title: 'Event TTTA',
        image: '/.png',
    },
    {
        title: 'Event TTTA',
        image: '/.png',
    },
];

export default function Performance() {

    const handleClick = () => {
        window.location.href = 'https://www.facebook.com/salakchai082454740408045112345?locale=th_TH'
    }

    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                once: true,
                duration: 800,
                offset: 60,
            });
        });
    }, []);

    return (
        <section className="px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 text-center bg-white">
            <div className="max-w-screen-xl mx-auto relative">
                <h2
                    className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#011133] mb-1 sm:mb-2"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    Event TTTA
                </h2>

                <div
                    className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 mb-8 md:mb-10 mt-[20px] md:mt-[60px]"
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

                <div style={{
                    height: '10vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div
                        className="bg-blue-500 font-medium px-12 py-2 rounded-full text-base md:text-lg cursor-pointer"
                        onClick={handleClick}
                    >
                        <span className="underline font-bold text-white">
                            Event
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
