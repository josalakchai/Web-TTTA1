'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

const partners = [
  {
    name: 'TechVenture Capital',
    type: 'Startup Accelerator',
    image: '/Pant2.png',
    imgClass: 'w-40 h-40',
  },
  {
    name: 'Global AI Institute',
    type: 'Research Partner',
    image: '/Pant1.png',
    imgClass: 'w-20 h-20',
  },
  {
    name: 'Promlab',
    type: 'Innovation Lab',
    image: '/Promlab.png',
    imgClass: 'w-40 h-40 rounded-lg',
  },
];

export default function Partners() {
  useEffect(() => {
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

    return () => {
      if (AOS && typeof AOS.refreshHard === 'function') {
        AOS.refreshHard();
      }
    };
  }, []);

  return (
    <section className="bg-white py-20 px-4">
      {/* Title */}
      <div
        className="max-w-7xl mx-auto text-center mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-[#011133]">Our Partners</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Collaborating with industry leaders, academic institutions, and community<br /> organizations to provide the best opportunities for our students.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-4xl mx-auto">
        {partners.map((partner, idx) => (
          <div
            key={partner.name}
            className="flex flex-col items-center text-center"
          >
            {/* Image Container with fixed height */}
            <div className="w-full h-24 mb-4 flex items-center justify-center">
              <div className={`relative ${partner.imgClass}`}>
                <Image
                  src={partner.image}
                  alt={partner.name}
                  fill
                  className="object-contain"
                  style={partner.imgClass.includes('rounded-lg') ? { borderRadius: '0.5rem' } : {}}
                />
              </div>
            </div>

            {/* Text
            <div className="min-h-[60px] flex flex-col justify-center">
              <h3 className="text-[#011133] font-semibold">{partner.name}</h3>
              <p className="text-gray-500 text-sm">{partner.type}</p>
            </div> */}
          </div>
        ))}
      </div>

      {/* CTA: Become a Partner */}
      {/* <div className="bg-[#f1f3f6] mt-16 rounded-xl py-12 px-6 text-center max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold text-[#011133] mb-4">Become a Partner</h3>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Join our network of partners and help shape the future of tech education while gaining access to top talent and innovative solutions.
        </p>
        <button className="bg-[#011133] text-white font-bold px-6 py-3 rounded hover:bg-[#000c2b] transition">
          Partner With Us
        </button>
      </div> */}
    </section>
  );
}