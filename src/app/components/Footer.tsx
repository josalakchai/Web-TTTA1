'use client';
import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#011133] text-white">
      <div
        className="max-w-7xl mx-auto py-16 px-4 grid md:grid-cols-4 gap-10"
      >
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
            <a href="https://www.facebook.com/thetigerteamacademy" target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            {/* <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter-icon lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
            </a> */}
            <a href="https://www.linkedin.com/company/the-tiger-team-academy/" target='_blank'>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            {/* <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
            </a> */}
            <a href="https://www.instagram.com/ttta_2021/" target='_blank'><FaInstagram /></a>
          </div>
        </div>

        {/* <div data-aos="fade-up" data-aos-delay="300">
          <h4 className="text-lg text-orange-400 font-bold mb-3">Programs</h4>
          <ul className="text-gray-300 space-y-1 text-1xl">
            <li><a href="#">Web Development</a></li>
            <li><a href="#">AI & Machine Learning</a></li>
            <li><a href="#">Tech for Social Impact</a></li>
            <li><a href="#">Startup Incubator</a></li>
            <li><a href="#">Youth Coding Camps</a></li>
            <li><a href="#">Corporate Training</a></li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="400">
          <h4 className="text-lg text-orange-400 font-bold mb-3">Resources</h4>
          <ul className="text-gray-300 space-y-1 text-1xl">
            <li><a href="#">Student Portal</a></li>
            <li><a href="#">Course Catalog</a></li>
            <li><a href="#">Blog & Articles</a></li>
            <li><a href="#">Events Calendar</a></li>
            <li><a href="#">Scholarships</a></li>
            <li><a href="#">FAQs</a></li>
          </ul>
        </div>

        <div data-aos="fade-up" data-aos-delay="500">
          <h4 className="text-lg text-orange-400 font-bold mb-3">Important Links</h4>
          <ul className="text-gray-300 space-y-1 text-1xl">
            <li><a href="#about" onClick={(e) => {
              e.preventDefault();
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}>About Us</a></li>
            <li><a href="#success-stories" onClick={(e) => {
              e.preventDefault();
              document.getElementById('success-stories')?.scrollIntoView({ behavior: 'smooth' });
            }}>Success Stories</a></li>
            <li><a href="#team" onClick={(e) => {
              e.preventDefault();
              document.getElementById('team')?.scrollIntoView({ behavior: 'smooth' });
            }}>Our Team</a></li>
            <li><a href="#contact" onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>Contact</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
          </ul>
        </div> */}
      </div>

      {/* Bottom Bar */}
      <div
        className="border-t border-[#1e2a4b] py-6 px-4 flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto text-1xl text-gray-400"
      >
        <p>© 2025 The Tiger Team Academy. All rights reserved.</p>
      </div>
    </footer>
  );
}
