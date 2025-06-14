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

export default function Partners() {
  return (
    <section className="bg-white py-20 px-4">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#011133]">Our Partners</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Collaborating with industry leaders, academic institutions, and community<br /> organizations to provide the best opportunities for our students.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className="bg-[#f7f9fc] p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white mb-4 flex items-center justify-center">
              <Image
                src={partner.image}
                alt={partner.name}
                width={200}
                height={200}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-[#011133] font-semibold">{partner.name}</h3>
            <p className="text-gray-500 text-sm">{partner.type}</p>
          </div>
        ))}
      </div>

      {/* CTA: Become a Partner */}
      <div className="bg-[#f1f3f6] mt-16 rounded-xl py-12 px-6 text-center max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-[#011133] mb-4">Become a Partner</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Join our network of partners and help shape the future of tech education while gaining access to top talent and innovative solutions.
        </p>
        <button className="bg-[#011133] text-white font-bold px-6 py-3 rounded hover:bg-[#000c2b] transition">
          Partner With Us
        </button>
      </div>
    </section>
  );
}