'use client';
import React from 'react';
import Image from 'next/image';

const partners = [
  {
    name: 'TechVenture Capital',
    type: 'Startup Accelerator',
    image: '/55.png',
  },
  {
    name: 'Global AI Institute',
    type: 'Research Partner',
    image: '/55.png',
  },
  {
    name: 'EduTech Foundation',
    type: 'NGO Partner',
    image: '/55.png',
  },
  {
    name: 'National University',
    type: 'Academic Partner',
    image: '/55.png',
  },  
];

export default function Customers() {
  return (
    <section className="bg-white py-20 px-4">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#011133]">Our Customers</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Collaborating with industry leaders, academic institutions, and community<br /> organizations to provide the best opportunities for our students.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="bg-[#f7f9fc] p-10 rounded-lg shadow-sm flex flex-col items-center text-center"
          >
            <Image
              src={partner.image}
              alt={partner.name}
              width={200}
              height={200}
              className="h-12 mb-4 object-contain"
            />
            <h3 className="text-[#011133] font-semibold">{partner.name}</h3>
            <p className="text-gray-500 text-sm">{partner.type}</p>
          </div>
        ))}
      </div>
    </section>
  );
}