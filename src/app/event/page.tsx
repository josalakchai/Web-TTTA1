'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';
import { ChevronRight, ChevronLeft } from 'lucide-react';

type Event = {
    id: string;
    src: string;
    alt: string;
};

const events: Event[] = [
    { id: '1', src: '/id1.png', alt: '' },
    { id: '2', src: '/id4.png', alt: '' },
    { id: '3', src: '/id2.png', alt: '' },
    { id: '4', src: '/id3.png', alt: '' },
    { id: '5', src: '/id5.png', alt: '' },
    { id: '6', src: '/VP autoar.png', alt: '' },
    { id: '7', src: '/NRLL.png', alt: '' },
];

export default function Customers() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const isDragging = useRef(false);
    const startX = useRef(0);
    const scrollLeft = useRef(0);
    // const dragStarted = useRef(false);

    const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
    const itemsPerSlide = 3;
    const eventData: Record<string, {
        title: string;
        image: string;
        content: string[];
        note: string;
    }> = {
        '1': {
            title: '📢 Smart WMS ระบบจัดการคลัง ❗',
            image: '/id1.png',
            content: [
                'ติดตามสินค้าคงคลัง',
                'จัดการการสั่งซื้อและจัดส่ง',
                'ควบคุมคุณภาพ',
                'วางแผนและจัดการทรัพยากร',
                'รายงานและการวิเคราะห์',
            ],
            note: '🌟 ช่วยลดข้อผิดพลาดในการจัดการ เพิ่มประสิทธิภาพการทำงานภายในคลังได้ดีเยี่ยม',
        },
        '2': {
            title: '📢 Smart WMS (เวอร์ชัน 2) ❗',
            image: '/id4.png',
            content: [
                'การแสดงผลแบบใหม่',
                'การเชื่อมต่ออัตโนมัติ',
                'รายงานแบบกราฟิก',
                'จัดการซัพพลายเออร์',
            ],
            note: '🌟 ปรับปรุง UI/UX สำหรับประสบการณ์ที่ลื่นไหลและมีประสิทธิภาพ',
        },
        '3': {
            title: '📢Event ❗',
            image: '/id2.png',
            content: [
                'การแสดงผลแบบใหม่',
                'การเชื่อมต่ออัตโนมัติ',
                'รายงานแบบกราฟิก',
                'จัดการซัพพลายเออร์',
            ],
            note: '🌟 ปรับปรุง UI/UX สำหรับประสบการณ์ที่ลื่นไหลและมีประสิทธิภาพ',
        },
        '4': {
            title: '📢 Event ❗',
            image: '/id3.png',
            content: [
                'การแสดงผลแบบใหม่',
                'การเชื่อมต่ออัตโนมัติ',
                'รายงานแบบกราฟิก',
                'จัดการซัพพลายเออร์',
            ],
            note: '🌟 ปรับปรุง UI/UX สำหรับประสบการณ์ที่ลื่นไหลและมีประสิทธิภาพ',
        },
        '5': {
            title: '📢 Event ❗',
            image: '/id5.png',
            content: [
                'การแสดงผลแบบใหม่',
                'การเชื่อมต่ออัตโนมัติ',
                'รายงานแบบกราฟิก',
                'จัดการซัพพลายเออร์',
            ],
            note: '🌟 ปรับปรุง UI/UX สำหรับประสบการณ์ที่ลื่นไหลและมีประสิทธิภาพ',
        },
        '6': {
            title: '📢 Event ❗',
            image: '/id4.png',
            content: [
                'การแสดงผลแบบใหม่',
                'การเชื่อมต่ออัตโนมัติ',
                'รายงานแบบกราฟิก',
                'จัดการซัพพลายเออร์',
            ],
            note: '🌟 ปรับปรุง UI/UX สำหรับประสบการณ์ที่ลื่นไหลและมีประสิทธิภาพ',
        },
        '7': {
            title: '📢 Event ❗',
            image: '/id4.png',
            content: [
                'การแสดงผลแบบใหม่',
                'การเชื่อมต่ออัตโนมัติ',
                'รายงานแบบกราฟิก',
                'จัดการซัพพลายเออร์',
            ],
            note: '🌟 ปรับปรุง UI/UX สำหรับประสบการณ์ที่ลื่นไหลและมีประสิทธิภาพ',
        },
    };

    const selectedEvent = selectedEventId ? eventData[selectedEventId] : null;

    const handleClick = () => {
        window.location.href = 'https://www.facebook.com/thetigerteamacademy?locale=th_TH';
    };


    const scrollSlider = (direction: 'left' | 'right') => {
        if (!sliderRef.current) return;

        const scrollAmount = sliderRef.current.offsetWidth;
        const maxIndex = Math.ceil(events.length / itemsPerSlide) - 1;

        if (direction === 'left' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
            sliderRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
        } else if (direction === 'right' && currentIndex < maxIndex) {
            setCurrentIndex(currentIndex + 1);
            sliderRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };


    const handleImageClick = (event: Event) => {
        setSelectedEventId(event.id);
    };

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const handleMouseDown = (e: MouseEvent) => {
            isDragging.current = true;
            slider.classList.add('cursor-grabbing');
            startX.current = e.pageX - slider.offsetLeft;
            scrollLeft.current = slider.scrollLeft;
            document.body.style.userSelect = 'none';
        };

        const handleMouseMove = (e: MouseEvent) => {
            if (!isDragging.current) return;
            e.preventDefault();
            const x = e.pageX - slider.offsetLeft;
            const walk = (x - startX.current) * 1.5;
            slider.scrollLeft = scrollLeft.current - walk;
        };

        const stopDragging = () => {
            isDragging.current = false;
            slider.classList.remove('cursor-grabbing');
            document.body.style.userSelect = '';
        };

        slider.addEventListener('mousedown', handleMouseDown);
        slider.addEventListener('mousemove', handleMouseMove);
        slider.addEventListener('mouseup', stopDragging);
        slider.addEventListener('mouseleave', stopDragging);
        window.addEventListener('mouseup', stopDragging);

        slider.addEventListener('touchstart', (e) => {
            isDragging.current = true;
            startX.current = e.touches[0].pageX - slider.offsetLeft;
            scrollLeft.current = slider.scrollLeft;
        });

        slider.addEventListener('touchmove', (e) => {
            if (!isDragging.current) return;
            const x = e.touches[0].pageX - slider.offsetLeft;
            const walk = (x - startX.current) * 1.5;
            slider.scrollLeft = scrollLeft.current - walk;
        });

        slider.addEventListener('touchend', stopDragging);

        return () => {
            window.removeEventListener('mouseup', stopDragging);
        };
    }, []);

    return (
        <section className="bg-white py-18">
            <Image src="/tiger-31.jpg" alt="" width={9000} height={1000} className="w-full h-120 object-cover" />

            {selectedEvent && (
                <div className="flex flex-col md:flex-row gap-8 px-10 py-20 bg-white">
                    <div className="flex-shrink-0">
                        <Image src={selectedEvent.image} alt={`Event ${selectedEventId}`} width={600} height={500} className="rounded-lg object-contain" />
                    </div>
                    <div className="flex flex-col text-gray-800 max-w-2xl">
                        <h2 className="text-2xl font-bold mb-2">{selectedEvent.title}</h2>
                        <ul className="list-disc list-inside mb-4 space-y-1">
                            {selectedEvent.content.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                        <p className="text-yellow-700 font-medium">{selectedEvent.note}</p>
                        <button onClick={() => setSelectedEventId(null)} className="mt-4 self-start text-sm text-blue-600 underline">
                            ❌ ปิดรายละเอียด
                        </button>
                    </div>
                </div>
            )}

            {/* Carousel */}
            <div className="relative group mx-4 md:mx-32 px-30">
                <div className="text-center mb-4">
                    <h1 className="text-2xl font-bold text-black">กิจกรรม</h1>
                </div>

                <div className="relative">
                    {/* Slider */}
                    <div ref={sliderRef} className="flex overflow-x-auto scroll-smooth no-scrollbar gap-3 px-8">
                        {events.map((event) => (
                            <div
                                key={event.id}
                                className="flex-shrink-0 py-12 w-1/3 cursor-pointer"
                                onClick={() => handleImageClick(event)}
                            >
                                <div className="rounded-xl overflow-hidden shadow-md mx-auto">
                                    <Image src={event.src} alt={event.alt} width={1920} height={1080} className="object-cover w-full h-90" />
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Navigation Buttons */}
                    <button
                        onClick={() => scrollSlider('left')}
                        className="absolute -left-4 md:-left-12 top-1/2 -translate-y-1/2 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition duration-300"
                    >
                        <ChevronLeft className="w-6 h-6 text-black" />
                    </button>
                    <button
                        onClick={() => scrollSlider('right')}
                        className="absolute -right-4 md:-right-12 top-1/2 -translate-y-1/2 bg-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition duration-300"
                    >
                        <ChevronRight className="w-6 h-6 text-black" />
                    </button>
                </div>

                {/* Dot Pagination */}
                <div className="flex justify-center mt-4 space-x-2">
                    {Array.from({ length: Math.ceil(events.length / itemsPerSlide) }).map((_, index) => (
                        <span
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-gray-500' : 'bg-gray-300'
                                }`}
                        />
                    ))}
                </div>
            </div>

            {/* Event Button */}
            <div className="flex justify-center mt-12">
                <button
                    className="bg-blue-500 font-medium px-12 py-2 rounded-full text-base md:text-lg text-white underline"
                    onClick={handleClick}
                >
                    Event
                </button>
            </div>
        </section>
    );
}
