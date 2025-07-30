'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Event = {
    title: string;
    image: string;
    content: string[];
    note: string;
};

interface EventClientProps {
    event: Event;
    id: string;
}

export default function EventClient({ event, id }: EventClientProps) {
    return (
        <section className="bg-white min-h-screen">
            <div className="flex flex-col md:flex-row gap-8 px-4 md:px-10 py-8 md:py-20 bg-white max-w-7xl mx-auto">
                <div className="flex-shrink-0 w-full md:w-auto">
                    <Image 
                        src={event.image} 
                        alt={`Event ${id}`} 
                        width={600} 
                        height={500} 
                        className="rounded-lg object-contain w-full max-w-md mx-auto" 
                    />
                </div>
                <div className="flex flex-col text-gray-800 max-w-2xl">
                    <h2 className="text-2xl font-bold mb-4">{event.title}</h2>
                    <ul className="list-disc list-inside mb-6 space-y-2">
                        {event.content.map((item, index) => (
                            <li key={index} className="text-gray-700">{item}</li>
                        ))}
                    </ul>
                    <p className="text-yellow-700 font-medium mb-6">{event.note}</p>
                    <Link 
                        href="/event" 
                        className="self-start text-sm text-blue-600 hover:text-blue-800 underline"
                    >
                        ← กลับไปหน้าอีเวนต์
                    </Link>
                </div>
            </div>
        </section>
    );
}  