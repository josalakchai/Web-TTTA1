'use client';
import React from 'react';
import Image from 'next/image';

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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-67 gap-8 max-w-7xl mx-auto">
        <div
          className="bg-[#f7f9fc] p-10 rounded-lg shadow-sm flex flex-col items-center text-center"
        >
          <Image
            src="/SUT1.png"
            alt="Default Partner"
            width={100}
            height={100}
            className="h-20 mb-2 object-contain"
          />
          <h3 className="text-[#011133] font-semibold">---</h3>
          <p className="text-gray-500 text-sm">---</p>
        </div>
        <div
          className="bg-[#f7f9fc] p-10 rounded-lg shadow-sm flex flex-col items-center text-center"
        >
          <Image
            src="/Mit1.png"
            alt="Default Partner"
            width={300}
            height={300}
            className="h-20 mb-2 object-contain"
          />
          <h3 className="text-[#011133] font-semibold">---</h3>
          <p className="text-gray-500 text-sm">---</p>
        </div>
        <div
          className="bg-[#f7f9fc] p-10 rounded-lg shadow-sm flex flex-col items-center text-center"
        >
          <Image
            src="/mitrphol1.png"
            alt="Mitrphol-Logo"
            width={200}
            height={200}
            className="h-20 mb-2 object-contain"
          />
          <h3 className="text-[#011133] font-semibold">Mitrphol---</h3>
          <p className="text-gray-500 text-sm">---</p>
        </div>
      </div>
      <div
            className="bg-[#f7f9fc] p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
          >
            {/* Image Container with fixed height */}
            <div className="w-full h-24 mb-4 flex items-center justify-center">
              <div className="relative w-20 h-20">
                <Image
                  src='/Pant2.png'
                  alt=''
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div className="min-h-[60px] flex flex-col justify-center">
              <h3 className="text-[#011133] font-semibold"></h3>
              <p className="text-gray-500 text-sm"></p>
            </div>
          </div>
          <div
            className="bg-[#f7f9fc] p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
          >
            {/* Image Container with fixed height */}
            <div className="w-full h-24 mb-4 flex items-center justify-center">
              <div className="relative w-20 h-20">
                <Image
                  src='/Pant2.png'
                  alt=''
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div className="min-h-[60px] flex flex-col justify-center">
              <h3 className="text-[#011133] font-semibold"></h3>
              <p className="text-gray-500 text-sm"></p>
            </div>
          </div>
          <div
            className="bg-[#f7f9fc] p-6 rounded-lg shadow-sm flex flex-col items-center text-center"
          >
            {/* Image Container with fixed height */}
            <div className="w-full h-24 mb-4 flex items-center justify-center">
              <div className="relative w-20 h-20">
                <Image
                  src='/Pant2.png'
                  alt=''
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Text */}
            <div className="min-h-[60px] flex flex-col justify-center">
              <h3 className="text-[#011133] font-semibold"></h3>
              <p className="text-gray-500 text-sm"></p>
            </div>
          </div>
    </section>
  );
}