'use client';
import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="bg-[#f7f9fc] py-20 px-4 relative overflow-hidden">
      <div className="absolute -top-[70px] -right-[60px] w-[300px] h-[300px] bg-[#F7931B] opacity-[0.05] rounded-full"></div>
      <div className="absolute -bottom-[100px] -left-[60px] w-[320px] h-[320px] bg-[#011133] opacity-[0.05] rounded-full"></div>
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-[#011133]">Contact Us</h2>
        <p className="text-base md:text-lg text-gray-600 mt-3 px-4">
          Have questions about our programs or interested in partnering with us? Reach out and we&apos;ll get back to you soon.
        </p>
      </div>

      {/* Content Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 px-4">
        {/* Left Panel */}
        <div className="rounded-lg p-6 md:p-8 shadow-md w-full lg:w-[440px] min-h-[512px]">
          <h3 className="text-xl md:text-2xl font-bold text-[#011133] mb-6">Get In Touch</h3>

          {/* Email */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-400 text-white p-3 rounded-full">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="lucide lucide-mail-icon lucide-mail"
              >
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#011133] text-base sm:text-lg">Email</p>
              <p className='text-gray-600 text-sm sm:text-sm break-all'>info@tigerteamacademy.edu</p>
              <p className='text-gray-600 text-sm sm:text-sm break-all'>admissions@tigerteamacademy.edu</p>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-400 text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone-icon lucide-phone">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#011133]">Phone</p>
              <p className="text-gray-600 text-sm">+1 (555) 123-4567</p>
              <p className="text-gray-600 text-sm">+1 (555) 987-6543</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 mb-6">
            <div className="bg-orange-400 text-white p-3 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin-icon lucide-map-pin">
                <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <p className="font-bold text-[#011133]">Campus Location</p>
              <p className="text-gray-600 text-sm">
                123 Innovation Street<br />
                Tech District, City 10001<br />
                Country
              </p>
            </div>
          </div>

          {/* Socials */}
          <div className="mt-8 md:mt-[60px]">
            <p className="font-bold text-[#011133] mb-3">Follow Us</p>
            <div className="flex flex-wrap gap-3">
              <a href="#" className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-800 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-facebook-icon lucide-facebook">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="bg-sky-500 text-white rounded-full p-2 hover:bg-sky-700 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter-icon lucide-twitter">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </a>
              <a href="#" className="bg-blue-600 text-white rounded-full p-2 hover:bg-blue-900 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin-icon lucide-linkedin">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </a>
              <a href="#" className="bg-red-600 text-white rounded-full p-2 hover:bg-red-800 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-youtube-icon lucide-youtube">
                  <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                  <path d="m10 15 5-3-5-3z" />
                </svg>
              </a>
              <a href="#" className="bg-pink-500 text-white rounded-full p-2 hover:bg-pink-700 text-xl">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-instagram-icon lucide-instagram">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Right Panel - Form */}
        <div className="bg-white rounded-lg shadow p-6 md:p-8 w-full lg:w-auto xl:-ml-[150px] min-h-[509px]">
          <h3 className="text-xl md:text-2xl font-bold text-[#011133] mb-6">Send Us a Message</h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium text-[#011133]">Your Name *</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full mt-1 border rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-black"
                />
              </div>
              <div>
                <label className="block font-medium text-[#011133]">Your Email *</label>
                <input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full mt-1 border rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-black"
                />
              </div>
            </div>
            <div>
              <label className="block font-medium text-[#011133]">Subject *</label>
              <input
                type="text"
                placeholder="How can we help you?"
                className="w-full mt-1 border rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-black"
              />
            </div>
            <div>
              <label className="block font-medium text-[#011133]">Message *</label>
              <textarea
                rows={5}
                placeholder="Your message here..."
                className="w-full mt-1 border rounded px-4 py-2 text-sm focus:outline-none focus:ring focus:ring-black"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full md:w-auto bg-orange-400 text-white px-6 py-3 rounded-md flex items-center gap-2 justify-center md:justify-start hover:bg-orange-500 transition-colors"
              >
                Send Message
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-icon lucide-send"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/><path d="m21.854 2.147-10.94 10.939"/></svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
