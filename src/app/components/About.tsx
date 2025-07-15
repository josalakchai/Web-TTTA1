'use client';
import React from 'react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="about" className="bg-[#f7f9fc] py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* วงกลมพื้นหลัง */}
        <div className="absolute -top-[300px] -right-[300px] w-[400px] h-[800px] lg:w-[800px] lg:h-[550px] bg-[#F7931B] opacity-[0.05] rounded-full"></div>
        <div className="absolute -bottom-[300px] -left-[300px] w-[400px] h-[800px] lg:w-[800px] lg:h-[550px] bg-[#011133] opacity-[0.05] rounded-full"></div>

        {/* LEFT - Text Content */}
        <div>
          <h2 className="text-3xl font-bold text-[#011133] mb-6">About The Academy</h2>
          <p className="text-lg text-gray-700 mb-4">
            The Tiger Team Academy was founded in 2018 with a vision to transform tech education by bridging the gap between theoretical knowledge and real-world application.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            What began as a small coding bootcamp with just 15 students has grown into a comprehensive educational institution serving hundreds of aspiring technologists, innovators, and entrepreneurs each year.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            Our founding principle remains unchanged: to create an educational experience that combines cutting-edge technical training with entrepreneurial thinking and a deep commitment to positive social impact.
          </p>
          <p className="text-lg text-gray-700 mb-6">
            We believe that technology is a powerful tool for national development and individual empowerment. By equipping our students with both technical skills and an innovative mindset, we&apos;re helping build a future where technology serves humanity and creates opportunities for all.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
            <button className="w-full sm:w-auto bg-[#F7931B] hover:bg-orange-600 transition text-white text-sm px-6 sm:px-5 py-3 rounded-md">
              Our Mission & Vision
            </button>
            <button className="w-full sm:w-auto border border-[#011133] text-[#011133] text-sm px-6 sm:px-5 py-3 rounded-md hover:bg-[#011133] hover:text-white transition">
              Academy Timeline
            </button>
          </div>
        </div>

        {/* RIGHT - Image + Quote */}
        <div className="relative">
          <Image
            src="/Team.png"
            alt="Students at Tiger Team Academy"
            className="rounded-lg shadow-lg"
            width={620}
            height={24}
          />

          {/* Quote Box
          <div className="absolute sm:bottom-[-40px] md:-bottom-[180px] lg:-bottom-30 xl:-bottom-10 sm:right-[-10px] bottom-[-80px] right-0 bg-white shadow-xl rounded-lg p-4 sm:p-6 w-[90%] sm:w-full sm:max-w-xs mx-auto">
            <p className="italic text-gray-700 mb-2 sm:mb-3 text-sm sm:text-base">
              &ldquo;We&apos;re not just teaching code—we&apos;re nurturing the next generation of leaders who will use technology to transform our world.&rdquo;
            </p>
            <p className="font-bold text-[#011133] text-sm sm:text-base">Prof. James Chen</p>
            <p className="text-xs sm:text-sm text-gray-600">Founder & Academic Director</p>
          </div> */}
        </div>
      </div>
    </section>
  );
}
