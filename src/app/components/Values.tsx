'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

const values = [
  {
    title: 'Innovation',
    description:
      'We foster creative thinking and problem-solving, encouraging students to explore new ideas and challenge the status quo.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23F7931B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>',
  },
  {
    title: 'Entrepreneurship',
    description:
      'We equip students with the mindset and skills to transform ideas into impactful ventures that create value for society.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23F7931B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase-icon lucide-briefcase"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/></svg>',
  },
  {
    title: 'Lifelong Learning',
    description:
      'We instill a passion for continuous growth and adaptation in a rapidly evolving technological landscape.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23F7931B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"/><path d="M22 10v6"/><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"/></svg>',
  },
  {
    title: 'Community Impact',
    description:
      'We believe in technology as a force for positive change, addressing real needs and improving lives in our communities.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23F7931B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-heart-icon lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
  },
  {
    title: 'Integrity',
    description:
      'We uphold the highest ethical standards in all our work, promoting responsible innovation and thoughtful technology use.',
    icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="%23F7931B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-icon lucide-user"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>',
  },
];

export default function Values() {
  // AOS setup
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.init({
        once: true,
        duration: 800,
        offset: 60,
      });
    });
  }, []);

  // Split values: top 3, then 2
  const topValues = values.slice(0, 3);
  const bottomValues = values.slice(3);

  return (
    <section className="bg-white py-20 px-4">
      <div className="text-center mb-16 max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-[#011133] mb-4">Our Values</h2>
        <p className="text-gray-600">
          The core principles that guide our educational approach and community.
        </p>
      </div>

      {/* Top 3 values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-8">
        {topValues.map((value, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
            data-aos="fade-up"
            data-aos-delay={100 * (idx + 1)}
          >
            <div className="flex flex-col gap-4">
              <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center">
                <Image src={value.icon} alt={value.title} width={24} height={24} className="text-orange-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#011133] mb-2">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom 2 values centered */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full">
          {bottomValues.map((value, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition"
              data-aos="fade-up"
              data-aos-delay={400 + 100 * idx}
            >
              <div className="flex flex-col gap-4">
                <div className="bg-orange-100 w-14 h-14 rounded-full flex items-center justify-center">
                  <Image src={value.icon} alt={value.title} width={24} height={24} className="text-orange-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#011133] mb-2">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quote */}
      <div className="flex justify-center mt-12">
        <div
          className="bg-gray-200 text-[#011133] px-6 py-3 rounded-full text-center text-1xl font-medium max-w-xl"
          data-aos="zoom-in"
          data-aos-delay="600"
        >
          &quot;Technology in service of humanity, innovation in service of community.&quot;
        </div>
      </div>
    </section>
  );
}
