'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import EventPage from '../../components/Saild';

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
        title: '📢 AI Workshop ❗',
        image: '/id2.png',
        content: [
            'เรียนรู้ AI และ Machine Learning',
            'Workshop ปฏิบัติการจริง',
            'การประยุกต์ใช้ AI ในธุรกิจ',
            'การพัฒนา AI Model',
        ],
        note: '🌟 เปิดโลก AI กับ workshop ที่จะทำให้คุณเข้าใจและใช้งาน AI ได้จริง',
    },
    '4': {
        title: '📢 Cloud Computing Seminar ❗',
        image: '/id3.png',
        content: [
            'AWS, Azure, Google Cloud',
            'การจัดการ Cloud Infrastructure',
            'Serverless Computing',
            'Cloud Security',
        ],
        note: '🌟 เรียนรู้เทคโนโลยี Cloud ที่กำลังเปลี่ยนแปลงโลกการพัฒนา',
    },
    '5': {
        title: '📢 Web Development Bootcamp ❗',
        image: '/id5.png',
        content: [
            'React, Next.js, TypeScript',
            'Full-Stack Development',
            'Database Design',
            'Deployment และ DevOps',
        ],
        note: ' สร้างเว็บแอปพลิเคชันที่ทันสมัยด้วยเทคโนโลยีล่าสุด',
    },
    '6': {
        title: '📢 Data Science Workshop ❗',
        image: '/VP autoar.png',
        content: [
            'Data Analysis และ Visualization',
            'Python สำหรับ Data Science',
            'Machine Learning Algorithms',
            'Big Data Processing',
        ],
        note: '🌟 เปลี่ยนข้อมูลให้เป็นข้อมูลเชิงลึกที่มีค่า',
    },
    '7': {
        title: '📢 Cybersecurity Training ❗',
        image: '/NRLL.png',
        content: [
            'Network Security',
            'Penetration Testing',
            'Security Best Practices',
            'Incident Response',
        ],
        note: '🌟 ปกป้องระบบและข้อมูลของคุณจากภัยคุกคามไซเบอร์',
    },
};

export default function EventDetailPage({ params }: { params: Promise<{ id: string }> }) {
    // ใส่ AOS
    useEffect(() => {
        import('aos').then(AOS => {
            AOS.init({
                duration: 800,
                once: true,
            });
        });
    }, []);

    const [event, setEvent] = React.useState<{
        title: string;
        image: string;
        content: string[];
        note: string;
    } | null>(null);
    const [id, setId] = React.useState<string | null>(null);

    React.useEffect(() => {
        (async () => {
            const { id } = await params;
            setId(id);
            setEvent(eventData[id]);
        })();
    }, [params]);

    if (!event) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center" data-aos="fade">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">ไม่พบอีเวนต์</h1>
                    <p className="text-gray-600 mb-6">อีเวนต์ที่คุณค้นหาอาจถูกลบหรือไม่มีอยู่</p>
                    <Link 
                        href="/event" 
                        className="inline-block bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        ← กลับไปหน้าอีเวนต์
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <section className="bg-white min-h-screen">
            <div
                className="flex flex-col md:flex-row gap-8 px-4 md:px-10 py-8 md:py-20 bg-white max-w-7xl mx-auto"
                data-aos="fade-up"
            >
                <div className="flex-shrink-0 w-full md:w-auto" data-aos="zoom-in">
                    <Image 
                        src={event.image} 
                        alt={`Event ${id ?? ''}`} 
                        width={600} 
                        height={500} 
                        className="rounded-lg object-contain w-full max-w-md mx-auto" 
                    />
                </div>
                <div className="flex flex-col text-gray-800 max-w-2xl" data-aos="fade-left">
                    <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        {event.content.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                        ))}
                    </ul>
                    <p className="text-yellow-700 font-medium mb-6">{event.note}</p>
                    <Link 
                        href="/event" 
                        className="self-start text-sm text-orange-600 hover:text-orange-800 underline"
                    >
                        ← กลับไปหน้าอีเวนต์
                    </Link>
                </div>
            </div>
            <div className="w-full mt-12" data-aos="fade-up">
                <EventPage />
            </div>
        </section>
    );
}