'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// รองรับ SSR/CSR: ใช้ dynamic import สำหรับ Flickity เฉพาะ client-side
import 'flickity/css/flickity.css';

// เพิ่ม type ที่รองรับการใช้งาน Flickity โดยไม่ใช้ any
type FlickityType = {
    destroy: () => void;
};

interface Event {
    id: string;
    src: string;
    alt: string;
    title: string;
    date: string;
    location: string;
    content: string[];
}

// สามารถเพิ่ม/แก้ไขข้อมูล event ได้ง่าย รองรับการขยาย
const events: Event[] = [
    {
        id: '1',
        src: '/id1.png',
        alt: 'Smart WMS',
        title: '📢 Smart WMS ระบบจัดการคลัง ❗',
        date: '15 สิงหาคม 2568',
        location: 'สำนักงานใหญ่ IE Thai Software',
        content: [
            'ติดตามสินค้าคงคลัง',
            'จัดการการสั่งซื้อและจัดส่ง',
            'ควบคุมคุณภาพ',
            'วางแผนและจัดการทรัพยากร',
            'รายงานและการวิเคราะห์',
        ]
    },
    {
        id: '2',
        src: '/id4.png',
        alt: 'Smart WMS v2',
        title: '📢 Smart WMS (เวอร์ชัน 2) ❗',
        date: '20 สิงหาคม 2568',
        location: 'สำนักงานใหญ่ IE Thai Software',
        content: [
            'การแสดงผลแบบใหม่',
            'การเชื่อมต่ออัตโนมัติ',
            'รายงานแบบกราฟิก',
            'จัดการซัพพลายเออร์',
        ]
    },
    {
        id: '3',
        src: '/id2.png',
        alt: 'AI Workshop',
        title: '📢 AI Workshop ❗',
        date: '1 กันยายน 2568',
        location: 'เชียงใหม่ AI Center',
        content: [
            'เรียนรู้ AI และ Machine Learning',
            'Workshop ปฏิบัติการจริง',
            'การประยุกต์ใช้ AI ในธุรกิจ',
            'การพัฒนา AI Model',
        ]
    },
    {
        id: '4',
        src: '/id3.png',
        alt: 'Cloud Computing',
        title: '📢 Cloud Computing Seminar ❗',
        date: '12 กันยายน 2568',
        location: 'กรุงเทพฯ Tech Convention Hall',
        content: [
            'AWS, Azure, Google Cloud',
            'การจัดการ Cloud Infrastructure',
            'Serverless Computing',
            'Cloud Security',
        ]
    },
    {
        id: '5',
        src: '/id5.png',
        alt: 'Web Development',
        title: '📢 Web Development Bootcamp ❗',
        date: '22 กันยายน 2568',
        location: 'Online Live Zoom',
        content: [
            'React, Next.js, TypeScript',
            'Full-Stack Development',
            'Database Design',
            'Deployment และ DevOps',
        ]
    },
    {
        id: '6',
        src: '/VP autoar.png',
        alt: 'Data Science',
        title: '📢 Data Science Workshop ❗',
        date: '1 ตุลาคม 2568',
        location: 'มหาวิทยาลัยธรรมศาสตร์',
        content: [
            'Data Analysis และ Visualization',
            'Python สำหรับ Data Science',
            'Machine Learning Algorithms',
            'Big Data Processing',
        ]
    },
    {
        id: '7',
        src: '/NRLL.png',
        alt: 'Cybersecurity',
        title: '📢 Cybersecurity Training ❗',
        date: '15 ตุลาคม 2568',
        location: 'มหาวิทยาลัยเทคโนโลยีมหานคร',
        content: [
            'Network Security',
            'Penetration Testing',
            'Security Best Practices',
            'Incident Response',
        ]
    }
];

// กำหนดขนาดภาพ (width/height) ให้เหมาะสมกับ aspect ratio 3:4
const IMAGE_WIDTH = 240;
const IMAGE_HEIGHT = 320;

export default function EventPage() {
    const carouselRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let flickityInstance: FlickityType | null = null;
        // รองรับ SSR/CSR: ตรวจสอบ window และ dynamic import Flickity เฉพาะ client
        const setupFlickity = async () => {
            if (typeof window !== 'undefined' && carouselRef.current) {
                // dynamic import Flickity only on client
                const FlickityModule = await import('flickity');
                // ใช้ as unknown as เพื่อ type-safe
                const Flickity = (FlickityModule.default || FlickityModule) as unknown as {
                    new (el: Element, options?: Record<string, unknown>): FlickityType;
                };
                flickityInstance = new Flickity(carouselRef.current, {
                    cellAlign: 'left',
                    contain: true,
                    wrapAround: true,
                    freeScroll: true,
                    autoPlay: 3000,
                    pauseAutoPlayOnHover: true,
                    pageDots: true,
                });
            }
        };
        setupFlickity();

        // Cleanup Flickity instance on unmount
        return () => {
            if (flickityInstance && typeof flickityInstance.destroy === 'function') {
                flickityInstance.destroy();
            }
        };
    }, []);

    return (
        <section className="max-w-6xl mx-auto py-16 px-4">
            <h1 className="text-center text-3xl font-bold mb-12 text-gray-800">กิจกรรม</h1>
            <div ref={carouselRef} className="carousel">
                {events.map((event) => (
                    <div
                        key={event.id}
                        className="carousel-cell w-full sm:w-2/3 md:w-1/3 lg:w-1/4 px-2"
                        style={{ position: 'relative' }}
                    >
                        <Link href={`/event/${event.id}`} className="block group focus:outline-none">
                            <div
                                className="portfolio-item img-zoom"
                                style={{ width: `${IMAGE_WIDTH}px`, margin: '0 auto' }}
                            >
                                <div className="portfolio-item-wrap border-radius1 overflow-hidden shadow transition duration-300 rounded-xl">
                                    <div
                                        className="portfolio-image relative bg-gray-100"
                                        style={{
                                            width: '100%',
                                            height: `${IMAGE_HEIGHT}px`,
                                            aspectRatio: '3/4',
                                        }}
                                    >
                                        <Image
                                            src={event.src}
                                            alt={event.alt}
                                            width={IMAGE_WIDTH}
                                            height={IMAGE_HEIGHT}
                                            className="object-cover w-full h-full"
                                            style={{
                                                width: '100%',
                                                height: '100%',
                                                objectFit: 'cover',
                                                objectPosition: 'center',
                                                backgroundColor: '#f3f4f6',
                                            }}
                                            sizes="(max-width: 768px) 60vw, 20vw"
                                        />
                                        {/* Hover overlay */}
                                        <div
                                            className="absolute inset-0 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            style={{
                                                background: 'rgba(0,0,0,0.6)',
                                                zIndex: 2,
                                            }}
                                        >
                                            <div className="portfolio-description px-4 py-2 text-center">
                                                <h3 className="text-base font-semibold text-white mb-2">{event.title}</h3>
                                                <p className="text-xs text-gray-200 mb-2">{event.date} | {event.location}</p>
                                                <div className="text-gray-100 text-xs space-y-0.5 mb-1 text-left">
                                                    {event.content.map((line, index) => (
                                                        <p key={index}>{index + 1}. {line}</p>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </section>
    );
}
