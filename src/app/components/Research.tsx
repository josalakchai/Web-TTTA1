'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

// Define a type for AOS to avoid 'any'
type AOSStatic = {
  init: (options?: { once?: boolean; duration?: number; offset?: number }) => void;
  refreshHard?: () => void;
};

export default function Research() {
  useEffect(() => {
    let AOS: AOSStatic | undefined;
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
        <h2 className="text-4xl font-bold text-[#011133]">Join Our Research</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Collaborating with industry leaders, academic institutions, and community<br /> organizations to provide the best opportunities for our students.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-down"
          data-aos-delay="0"
          data-aos-duration="1000"
        >
          {/* Image Container with fixed height */}
          <div className="w-full h-24 mb-4 flex items-center justify-center">
            <div className="relative w-30 h-30">
              <Image
                src="/SUT1.png"
                alt="Default Partner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-up"
          data-aos-delay="120"
          data-aos-duration="1000"
        >
          {/* Image Container with fixed height */}
          <div className="w-full h-24 mb-4 flex items-center justify-center">
            <div className="relative w-80 h-30">
              <Image
                src="/Mit1.png"
                alt="Mitrphol-Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
        <div
          className="flex flex-col items-center text-center"
          data-aos="fade-down"
          data-aos-delay="240"
          data-aos-duration="1000"
        >
          {/* Image Container with fixed height */}
          <div className="w-full h-24 mb-4 flex items-center justify-center">
            <div className="relative w-30 h-30">
              <Image
                src="/mitrphol1.png"
                alt="Default Partner"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}