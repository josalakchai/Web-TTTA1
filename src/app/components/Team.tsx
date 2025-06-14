'use client';
import React from 'react';
import Image from 'next/image';

const coreTeam = [
  {
    name: 'Dr. Sophia Lin',
    title: 'Director of AI Research',
    image: '/photo-1573496359142-b8d87734a5a2.png',
    quote: "AI is not just about algorithms—it's about amplifying human potential.",
    socials: ['linkedin', 'twitter'],
  },
  {
    name: 'Marcus Johnson',
    title: 'Head of Web Development',
    image: '/photo-1600486913747-55e5470d6f40.png',
    quote: "The web is our generation's most powerful platform for democratizing opportunity.",
    socials: ['linkedin'],
  },
  {
    name: 'Aisha Patel',
    title: 'Startup Coach',
    image: '/photo-1580489944761-15a19d654956.png',
    quote: "Great startups begin with a problem worth solving, not just a product worth building.",
    socials: ['linkedin', 'twitter'],
  },
  {
    name: 'Carlos Rodriguez',
    title: 'Community Strategist',
    image: '/photo-1507003211169-0a1dd7228f2d.png',
    quote: "Technology should lift entire communities, not just individuals.",
    socials: ['twitter'],
  },
];

const mentors = [
  {
    name: 'Dr. James Wong',
    title: 'AI Ethicist',
    image: '/photo-1472099645785-5658abf4ff4e.png',
    quote: "We must build AI systems that reflect our highest values, not just our capabilities.",
  },
  {
    name: 'Priya Sharma',
    title: 'UX Designer',
    image: '/photo-1619946794135-5bc917a27793.png',
    quote: "Design that puts humans first creates technology that lasts.",
  },
  {
    name: 'Samuel Okafor',
    title: 'Tech Entrepreneur',
    image: '/photo-1563237023-b1e970526dcb.png',
    quote: "Building a business is about creating value first, profits second.",
  },
  {
    name: 'Elena Martinez',
    title: 'Full-stack Developer',
    image: '/photo-1593529467220-9d721ceb9a78.png',
    quote: "Great engineers don't just write code—they solve problems that matter.",
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

const Card = ({
  name,
  title,
  image,
  quote,
  socials,
}: {
  name: string;
  title: string;
  image: string;
  quote: string;
  socials?: string[];
}) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col justify-between">
    <div className="relative">
      <Image src={image} alt={name} className="h-60 w-full object-cover" width={300} height={300} />
      <div className="absolute bottom-0 left-0 w-full px-4 py-2 bg-gradient-to-t from-black/80 to-transparent text-white font-bold">
        {name}
        <p className="text-sm font-medium">{title}</p>
      </div>
    </div>
    <div className="p-4">
      <div className="bg-white p-4 rounded-lg shadow text-sm italic text-gray-700">
        &quot;{quote}&quot;
      </div>
      {socials && <SocialIcons socials={socials} />}
    </div>
  </div>
);

export default function Team() {
  return (
    <section id="team" className="bg-[#f7f9fc] py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-8 md:mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#011133]">Our Team & Mentors</h2>
        <p className="text-base md:text-lg text-gray-600 mt-3 max-w-2xl mx-auto px-4">
          Meet the educators, innovators, and industry experts guiding the next generation of tech talent.
        </p>
      </div>

      {/* Core Team */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-[#011133] mb-6 text-center">Co-Founder</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4">
          {coreTeam.map((member, idx) => (
            <Card key={idx} {...member} />
          ))}
        </div>
      </div>

      {/* Industry Mentors */}
      <div className="max-w-7xl mx-auto mb-8 md:mb-12">
        <h3 className="text-xl md:text-2xl font-bold text-[#011133] mb-6 text-center">Core Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 px-4">
          {mentors.map((mentor, idx) => (
            <Card key={idx} {...mentor} />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-8 md:mt-12 text-center px-4">
        <div className="inline-block bg-orange-100 text-orange-400 font-medium px-4 md:px-6 py-2 md:py-3 rounded-full text-base md:text-lg">
          Interested in becoming a mentor?&nbsp;
          <a href="#" className="underline font-bold text-orange-400">
            Contact us
          </a>
        </div>
      </div>
    </section>
  );
}
