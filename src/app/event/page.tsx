'use client'
import React, { useEffect } from 'react'
import EventPage from '../components/Saild'
import Image from 'next/image'

export default function Event() {
  useEffect(() => {
    // Scroll to top when this page is mounted
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }

    // Initialize AOS
    import('aos').then(AOS => {
      AOS.init({
        duration: 800,
        once: true,
      });
    });
  }, []);

  return (
    <div>
      <div
        className="w-screen relative left-1/2 right-1/2 -mx-[50vw] mb-8"
        style={{ position: 'relative', left: '50%', right: '50%', marginLeft: '-50vw', marginRight: '-50vw', width: '100vw' }}
        data-aos="fade-down"
      >
        <Image 
          src="/tiger-31.jpg" 
          alt="Tiger Banner" 
          width={1920} 
          height={600} 
          className="w-full h-[400px] md:h-[600px] object-cover"
          priority
        />
      </div>
      <div data-aos="fade-up">
        <EventPage />
      </div>
    </div>
  )
}
