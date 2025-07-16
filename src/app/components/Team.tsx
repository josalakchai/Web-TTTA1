'use client';
import React, { useEffect } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

const coreTeam = [
  {
    name: 'Mr. Wiraj Sripatanasakul',
    title: 'Director of The Tiger Team Academy',
    image: '/5m.png',
    quote: "Innopreneurs for the planet.",
  },
  {
    name: 'Miss Wilairut (Tou) Kiattichuanchai',
    title: 'Director of The Tiger Team Academy',
    image: '/2m.png',
    quote: "Hundred Tigers One Heart",
  },
  {
    name: 'Assoc. Prof. Dr. Worawat Meevasana.',
    title: 'Quantum Consultant',
    image: '/07mt.png',
    quote: "We push the frontier of quantum science not for prestige, but for purpose — to power real change in real communities.",
  },
  {
    name: 'Dr. Wiwat Nuansing',
    title: 'Electrospinning Consultant',
    image: '/6m.png',
    quote: "Real innovation isn’t just about invention — it’s about responsibility to the world we’re shaping.",
  },
  {
    name: 'Mr. Nitikorn Chumnankul',
    title: 'Director of The Tiger Team Academy',
    image: '/902.png',
    quote: "We must lead with purpose that transcends profit — building systems, people, and values that outlast us.",
  },
];

const mentors = [
  {
    name: 'Miss. Makhanthiya Putthakhot',
    title: 'Business Stakeholder',
    image: '/004.png',
    quote: "We must build AI systems that reflect our highest values, not just our capabilities.",
  },
  {
    name: 'Mr. Sitthinon Singkam',
    title: 'Software Engineer',
    image: '/003.png',
    quote: "Design that puts humans first creates technology that lasts.",
  },
  {
    name: 'Mr. Thanonchi Kantha',
    title: 'Data Engineer',
    image: '/016.png',
    quote: "Building a business is about creating value first, profits second.",
  },
  {
    name: 'Mr. Isaman Sangbumrung ',
    title: 'Full-stack Developer',
    image: '/001.png',
    quote: "Hundred Tigers One Heart",
  },
  {
    name: 'Mr. Warit Jarujit',
    title: 'DevOps Engineer',
    image: '/006.png',
    quote: "Deliver fast, but never without a foundation of reliability.",
  },
  {
    name: 'Mr. Supadol Kudmo',
    title: 'Frontend Developer',
    image: '/007.png',
    quote: "A beautiful interface means nothing without empathy behind the design.",
  },
  {
    name: 'Mr. Gangrao Sontad',
    title: 'IoT Engineer',
    image: '/009.png',
    quote: "Great IoT design begins with responsibility — not just connectivity.",
  },
  {
    name: 'Mr.Pongsagorn Chumnankul',
    title: 'Data Engineer',
    image: '/005.png',
    quote: "Behind every powerful pipeline should be principles that keep it trustworthy and true.",
  },
  {
    name: 'Mr.Panat Phongphaew',
    title: 'Junior Full-Stack Developer',
    image: '/010.png',
    quote: "Getting things to work is just the beginning — writing code that lasts takes discipline.",
  },
  // {
  //   name: 'Miss. Pitchita Chumnankul',
  //   title: 'CAD Designer',
  //   image: '/.png',
  //   quote: "Great engineers don't just write code—they solve problems that matter.",
  // },
  {
    name: 'Mr.Sitthisak Phisanphiphak',
    title: 'Junior Backend Developer',
    image: '/012.png',
    quote: "Backend work should reflect vision and structure, not just function.",
  },
  {
    name: 'Miss. Atchareeya Putthakhot',
    title: 'Research assistant',
    image: '/013.png',
    quote: "We must support research that reflects curiosity with integrity, not just our ability to follow methods.",
  },
  {
    name: 'Mr.Salukchai Saetho',
    title: 'Junior Frontend Developer',
    image: '/015.png',
    quote: "Deployments matter, but learning and stability matter more.",
  },
  {
    name: 'Mr.Pha Saetho',
    title: 'Junior Frontend Developer',
    image: '/014.png',
    quote: "Looking good is easy — clarity and care are what truly make great interfaces.",
  },
  {
    name: 'Miss. Priya chwdklang',
    title: 'Document Controller',
    image: '/011.png',
    quote: "We must manage documents with integrity and precision, not just the ability to keep things in order.",
  },
  {
    name: 'Mr.Pasawat Jaiyod',
    title: 'Operations Coordinator',
    image: '/008.png',
    quote: "We must build operations that reflect our commitment to consistency and care, not just our ability to get things done.",
  },
];

const SocialIcons = ({ socials }: { socials: string[] }) => (
  <div className="flex gap-3 mt-4">
    {socials.includes('linkedin') && (
      <a
        href="#"
        className="bg-blue-600 hover:bg-blue-800 text-white p-3 rounded-full transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
    )}

    {socials.includes('twitter') && (
      <a
        href="#"
        className="bg-sky-400 hover:bg-sky-600 text-white p-3 rounded-full transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
        </svg>
      </a>
    )}
  </div>
);

// Card: move the quote to overlay the image, under name/title
const Card = ({
  name,
  title,
  image,
  quote,
  socials,
  aos,
  aosDelay,
}: {
  name: string
  title: string
  image: string
  quote: string
  socials?: string[]
  aos?: string
  aosDelay?: number
}) => (
  <div
    className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col"
    data-aos={aos}
    data-aos-delay={aosDelay}
  >
    {/* === 1. รูปภาพ + Overlay ไล่เฉด === */}
    <div className="relative w-full">
      <Image
        src={image}
        alt={name}
        className="w-full h-60 object-cover"
        width={1920}
        height={1920}
        priority={aosDelay === 400}
      />
      <div
        className="absolute bottom-0 left-0 w-full 
                   bg-gradient-to-t from-black/80 to-transparent 
                   px-4 pt-3 pb-1"
      >
        <div className="font-bold text-white text-base md:text-lg">
          {name}
        </div>
        <div className="text-xs md:text-sm font-medium text-white mt-1">
          {title}
        </div>
      </div>
    </div>

    {/* === 2. คำคม (วางใต้รูปภาพ) === */}
    <div className="px-4 py-3 flex-1 flex items-center justify-center">
      <p className="text-sm italic text-gray-700 text-center">
        &quot;{quote}&quot;
      </p>
    </div>

    {/* === 3. Social Icons (ถ้ามี) === */}
    {socials && socials.length > 0 && (
      <div className="px-4 pb-4 pt-0 flex justify-center">
        <SocialIcons socials={socials} />
      </div>
    )}
  </div>
)

export default function Team() {
  useEffect(() => {
    import('aos').then(AOS => {
      AOS.init({
        once: true,
        duration: 800,
        offset: 60,
      });
    });
  }, []);

  // Removed unused variables topMentors and bottomMentors

  return (
    <section id="team" className="bg-[#f7f9fc] py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
        <h2
          className="text-3xl md:text-4xl font-bold text-[#011133]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Our Co Founder & Core Team
        </h2>
        <p
          className="text-base md:text-lg text-gray-600 mt-3 max-w-2xl mx-auto px-4"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Meet the educators, innovators, and industry experts guiding the next generation of tech talent.
        </p>
      </div>

      {/* Core Team (Co-Founder) */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <h3
          className="text-2xl md:text-3xl font-bold text-[#011133] mb-6 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          Co-Founder
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 px-4">
          {coreTeam.map((member, idx) => (
            <Card
              key={idx}
              {...member}
              aos="zoom-in"
              aosDelay={400 + idx * 100}
            />
          ))}
        </div>
      </div>

      {/* Industry Mentors (Core Team) */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <h3
          className="text-2xl md:text-3xl font-bold text-[#011133] mb-6 text-center"
          data-aos="fade-up"
          data-aos-delay="500"
        >
          Core Team
        </h3>

        {/* รวม mentor ทั้งหมดใน grid เดียวกัน */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-8 px-4">
          {mentors.map((mentor, idx) => (
            <Card
              key={idx}
              {...mentor}
              aos="fade-up"
              aosDelay={600 + idx * 100}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      {/* <div className="mt-8 md:mt-12 text-center px-4">
        <div
          className="inline-block bg-orange-100 text-orange-400 font-medium px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg"
          data-aos="zoom-in"
          data-aos-delay="1200"
        >
          Interested in becoming a mentor?&nbsp;
          <a href="#" className="underline font-bold text-orange-400">
            Contact us
          </a>
        </div>
      </div> */}
    </section>
  );
}
