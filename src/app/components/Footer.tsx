'use client';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function Footer() {
  const handleSocialClick = (platform: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'click', {
        event_category: 'social',
        event_label: platform,
        transport_type: 'beacon',
      });
    }
  };

  return (
    <footer className="bg-[#011133] text-white">
      <div className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-4 gap-10">
        <div>
          <div className="p-2 inline-block">
            <Image 
              src="/logo1.png" 
              alt="Logo" 
              width={80}
              height={80}
              className="invert" 
            />
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Empowering the next generation of tech innovators with skills, mindset, and purpose.
          </p>
          <div className="flex gap-4 mt-4 text-lg">
            <a 
              href="https://www.facebook.com/thetigerteamacademy" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleSocialClick('facebook')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-facebook-icon lucide-facebook"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
              </svg>
            </a>

            <a 
              href="https://www.linkedin.com/company/the-tiger-team-academy" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleSocialClick('linkedin')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                viewBox="0 0 24 24" fill="none" stroke="currentColor"
                strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                className="lucide lucide-linkedin-icon lucide-linkedin"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2
                2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>

            <a 
              href="https://www.instagram.com/ttta_2021" 
              target="_blank" 
              rel="noopener noreferrer"
              onClick={() => handleSocialClick('instagram')}
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-[#1e2a4b] py-6 px-4 flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto text-1xl text-gray-400">
        <p>© 2025 The Tiger Team Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
