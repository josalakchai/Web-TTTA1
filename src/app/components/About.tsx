'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    let AOS: typeof import('aos') | undefined;
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
      // แก้ไขไม่ใช้ any
      if (AOS && typeof (AOS as { refreshHard?: () => void }).refreshHard === 'function') {
        (AOS as { refreshHard: () => void }).refreshHard();
      }
    };
  }, []);

  return (
    <section id="about" className="bg-[#f7f9fc] py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* วงกลมพื้นหลัง */}
        <div className="absolute -top-[300px] -right-[300px] w-[400px] h-[800px] lg:w-[800px] lg:h-[550px] bg-[#F7931B] opacity-[0.05] rounded-full"></div>
        <div className="absolute -bottom-[300px] -left-[300px] w-[400px] h-[800px] lg:w-[800px] lg:h-[550px] bg-[#011133] opacity-[0.05] rounded-full"></div>

        {/* LEFT - Text Content */}
        <div data-aos="fade-zoom-in"  data-aos-duration="2000">
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

          {/* <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
            <button className="w-full sm:w-auto bg-[#F7931B] hover:bg-orange-600 transition text-white text-sm px-6 sm:px-5 py-3 rounded-md">
              Our Mission & Vision
            </button>
            <button className="w-full sm:w-auto border border-[#011133] text-[#011133] text-sm px-6 sm:px-5 py-3 rounded-md hover:bg-[#011133] hover:text-white transition">
              Academy Timeline
            </button>
          </div> */}
        </div>

        {/* RIGHT - Image + Quote */}
        <div className="relative z-10 flex justify-center items-center">
          <div className="relative w-full max-w-[420px] sm:max-w-[500px] md:max-w-[420px] lg:max-w-[480px] mx-auto px-2 sm:px-4 md:px-0" data-aos="fade-zoom-in" data-aos-duration="2000">
            {/* Top Right Box */}
            <div className="absolute w-[70px] h-[40px] sm:w-[90px] sm:h-[54px] md:w-[100px] md:h-[60px] -top-3 -right-3 sm:-top-4 sm:-right-4 md:-top-4 md:-right-6 bg-[#011133] shadow-lg rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 sm:gap-3 z-0"></div>
            {/* Bottom Left Box */}
            <div className="absolute w-[70px] h-[40px] sm:w-[90px] sm:h-[54px] md:w-[100px] md:h-[60px] -bottom-3 -left-3 sm:-bottom-4 sm:-left-4 md:-bottom-5 md:-left-6 bg-[#F7931B] shadow-lg rounded-lg px-2 sm:px-3 md:px-4 py-2 sm:py-2.5 md:py-3 flex items-center gap-2 sm:gap-3 z-0"></div>
            <Image
              src="/Team.png"
              alt="Students at Tiger Team Academy"
              className="rounded-xl w-full shadow-md relative z-10 object-cover"
              width={684}
              height={456}
              sizes="(max-width: 768px) 100vw, 420px"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
