'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

// Define a type for AOS to avoid 'any'
type AOSStatic = {
  init: (options?: { once?: boolean; duration?: number; offset?: number }) => void;
  refreshHard?: () => void;
};

type Program = {
  title: string;
  description: string;
  icon: string;
  borderColor: string;
  iconColor: string;
};

const programs: Program[] = [
  {
    title: 'Full-Stack Web Development',
    description:
      'Master modern web technologies from front-end to back-end. Build responsive, scalable applications with Nextjs, Nest.js, and more.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-icon lucide-code"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    borderColor: 'border-orange-500',
    iconColor: 'bg-orange-500',
  },
  {
    title: 'Infrastructure and cloud solutions',
    description:
      'Design and deploy scalable systems in the cloud. Master tools for automation, monitoring, and infrastructure as code to ensure reliability and performance at scale.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>',
    borderColor: 'border-yellow-500',
    iconColor: 'bg-yellow-500',
  },
  {
    title: 'Machine Learning and AI',
    description:
      'Dive into AI algorithms, neural networks, and data science. Train models that solve real-world problems and drive innovation.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
    borderColor: 'border-blue-500',
    iconColor: 'bg-blue-500',
  },
  {
    title: 'Tech for Social Impact',
    description:
      'Develop solutions that address community challenges. Learn how technology can be leveraged for positive social change and sustainability.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
    borderColor: 'border-green-500',
    iconColor: 'bg-green-500',
  },
  {
    title: 'Startup and Innopreneurship',
    description:
      'Transform your ideas into viable businesses. Gain mentorship, funding opportunities, and the skills to lead innovation-driven ventures.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-icon lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
    borderColor: 'border-[#011133]',
    iconColor: 'bg-[#011133]',
  },
];

export default function Programs() {
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

  // ทุก card ขึ้นจากด้านล่าง (fade-up)
  const getAosType = () => 'fade-up';

  return (
    <section id="programs" className="bg-[#f7f9fc] py-20 px-4 relative overflow-hidden">
      <div id="our-programs" className="absolute -mt-[160px]"></div>
      <div className="max-w-7xl mx-auto text-center mb-12" data-aos="fade-zoom-in" data-aos-duration="2000">
        <h2 className="text-4xl font-bold text-[#011133] md:text-5xl">Our Programs</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto text-sm md:text-base">
          Comprehensive educational tracks designed to transform beginners into industry-ready professionals and innovators.
        </p>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {programs.map((program, idx) => (
            <div
              key={program.title}
              className={`border ${program.borderColor} rounded-lg p-6 bg-white shadow-sm flex flex-col min-h-[320px]`}
              data-aos={getAosType()}
              data-aos-delay={100 * idx}
              data-aos-duration="1000"
            >
              <div>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${program.iconColor} mb-4`}>
                  <Image
                    src={program.icon}
                    alt={program.title}
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </div>
                <h3 className="text-xl font-bold text-[#011133] mb-2">{program.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-6">{program.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
