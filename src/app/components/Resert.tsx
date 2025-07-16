'use client';
import React from 'react';
import Image from 'next/image';

export default function Research() {
  return (
    <section className="bg-white py-20 px-4">
      {/* Title */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#011133]">Join Our Research</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Collaborating with industry leaders, academic institutions, and community<br /> organizations to provide the best opportunities for our students.
        </p>
      </div>

      {/* Partner Logos */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        <div
          className="bg-[#f7f9fc] p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
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

          {/* Text */}
          <div className="min-h-[60px] flex flex-col justify-center">
            <h3 className="text-[#011133] font-semibold">---</h3>
            <p className="text-gray-500 text-sm">---</p>
          </div>
        </div>
        {/* <div
          className="bg-[#f7f9fc] p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
        >
          <div className="w-full h-24 mb-4 flex items-center justify-center">
            <div className="relative w-90 h-90">
              <Image
                src="/Mit1.png"
                alt="Default Partner"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="min-h-[60px] flex flex-col justify-center">
            <h3 className="text-[#011133] font-semibold">---</h3>
            <p className="text-gray-500 text-sm">---</p>
          </div>
        </div> */}
        <div
          className="bg-[#f7f9fc] p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
        >
          {/* Image Container with fixed height */}
          <div className="w-full h-24 mb-4 flex items-center justify-center">
            <div className="relative w-30 h-30">
              <Image
                src="/mitrphol1.png"
                alt="Mitrphol-Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Text */}
          <div className="min-h-[60px] flex flex-col justify-center">
            <h3 className="text-[#011133] font-semibold">---</h3>
            <p className="text-gray-500 text-sm">---</p>
          </div>
        </div>
      </div>

    </section>
  );
}