'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

const customers = [
  {
    src: '/Genie.png',
    alt: 'Genie',
    name: '---',
    desc: '---',
  },
  {
    src: '/KLEAR.png',
    alt: 'KLEAR',
    name: '---',
    desc: '---',
  },
  {
    src: '/LJ.png',
    alt: 'LJ',
    name: '---',
    desc: '---',
  },
  {
    src: '/SOLUTIONMANI.png',
    alt: 'SOLUTIONMANI',
    name: '---',
    desc: '---',
  },
  {
    src: '/POOL.png',
    alt: 'POOL',
    name: '---',
    desc: '---',
  },
  {
    src: '/VP autoar.png',
    alt: 'VP autoar',
    name: '---',
    desc: '---',
  },
  {
    src: '/NRLL.png',
    alt: 'NRLL',
    name: '---',
    desc: '---',
  },
];

// Duplicate customers for seamless looping
const loopCustomers = [...customers, ...customers];

export default function Customers() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // For drag-to-scroll
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // For image modal
  const [modalOpen, setModalOpen] = useState(false);
  const [modalImg, setModalImg] = useState<{ src: string; alt: string } | null>(null);

  // Fix: Track if mouse is outside window to always end drag
  useEffect(() => {
    const handleWindowMouseUp = () => {
      isDragging.current = false;
      if (sliderRef.current) {
        sliderRef.current.classList.remove('cursor-grabbing');
      }
      document.body.style.userSelect = '';
    };
    window.addEventListener('mouseup', handleWindowMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleWindowMouseUp);
    };
  }, []);

  // AOS setup
  useEffect(() => {
    let AOS: any;
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

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Remove scrollbars (overflow button) via CSS
    slider.style.overflow = 'hidden';

    let speed = 1.2; // px per frame, bigger for faster and more visible
    let resetPoint = slider.scrollWidth / 2;

    const animate = () => {
      if (!slider) return;
      if (!isDragging.current) {
        slider.scrollLeft += speed;
        // Reset to start for seamless loop
        if (slider.scrollLeft >= resetPoint) {
          slider.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    // Mouse events for drag-to-scroll
    const handleMouseDown = (e: MouseEvent) => {
      // Prevent drag-to-scroll if mousedown is on an image (or its descendant)
      // (Allow click to open modal instead)
      // Only start drag if not on image
      // e.target is the element clicked
      // If it's an image or inside .customer-image-clickable, don't drag
      let el = e.target as HTMLElement;
      let isImage = false;
      while (el && el !== slider) {
        if (el.classList.contains('customer-image-clickable')) {
          isImage = true;
          break;
        }
        el = el.parentElement as HTMLElement;
      }
      if (isImage) return;

      isDragging.current = true;
      slider.classList.add('cursor-grabbing');
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;

      // Prevent text/image selection while dragging
      document.body.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      slider.classList.remove('cursor-grabbing');
      document.body.style.userSelect = '';
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove('cursor-grabbing');
      document.body.style.userSelect = '';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5; // scroll-fast
      slider.scrollLeft = scrollLeft.current - walk;
    };

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
      // Prevent drag-to-scroll if touchstart is on an image (or its descendant)
      let el = e.target as HTMLElement;
      let isImage = false;
      while (el && el !== slider) {
        if (el.classList.contains('customer-image-clickable')) {
          isImage = true;
          break;
        }
        el = el.parentElement as HTMLElement;
      }
      if (isImage) return;

      isDragging.current = true;
      startX.current = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
    };

    const handleTouchEnd = () => {
      isDragging.current = false;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!isDragging.current) return;
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    slider.addEventListener('mousedown', handleMouseDown);
    slider.addEventListener('mouseleave', handleMouseLeave);
    slider.addEventListener('mouseup', handleMouseUp);
    slider.addEventListener('mousemove', handleMouseMove);

    slider.addEventListener('touchstart', handleTouchStart);
    slider.addEventListener('touchend', handleTouchEnd);
    slider.addEventListener('touchmove', handleTouchMove);

    // Also listen for mouseup on window to prevent stuck dragging
    const handleWindowMouseUp = () => {
      isDragging.current = false;
      slider.classList.remove('cursor-grabbing');
      document.body.style.userSelect = '';
    };
    window.addEventListener('mouseup', handleWindowMouseUp);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      slider.removeEventListener('mousedown', handleMouseDown);
      slider.removeEventListener('mouseleave', handleMouseLeave);
      slider.removeEventListener('mouseup', handleMouseUp);
      slider.removeEventListener('mousemove', handleMouseMove);

      slider.removeEventListener('touchstart', handleTouchStart);
      slider.removeEventListener('touchend', handleTouchEnd);
      slider.removeEventListener('touchmove', handleTouchMove);

      window.removeEventListener('mouseup', handleWindowMouseUp);
      document.body.style.userSelect = '';
    };
  }, []);

  // Modal close on ESC
  useEffect(() => {
    if (!modalOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setModalOpen(false);
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [modalOpen]);

  return (
    <section className="bg-white py-20 px-4">
      {/* Title */}
      <div
        className="max-w-7xl mx-auto text-center mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-bold text-[#011133]">Our Customers</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto">
          Collaborating with industry leaders, academic institutions, and community<br /> organizations to provide the best opportunities for our students.
        </p>
      </div>

      {/* Slider Gallery All Items Container */}
      <div
        ref={sliderRef}
        className="slider-gallery-all-items-container flex gap-16 max-w-7xl mx-auto py-8 scrollbar-hide cursor-grab select-none"
        style={{
          scrollBehavior: 'auto',
          overflow: 'hidden', // Hide overflow buttons/scrollbars
          userSelect: 'none',
        }}
      >
        {loopCustomers.map((customer, idx) => (
          <div
            key={idx}
            className="min-w-[360px] flex flex-col items-center text-center flex-shrink-0"
          >
            {/* Image Container with fixed height */}
            <div className="w-full h-48 mb-6 flex items-center justify-center">
              <button
                type="button"
                className="relative w-60 h-48 customer-image-clickable"
                style={{ width: 240, height: 192, padding: 0, border: 'none', background: 'none', cursor: 'pointer' }}
                tabIndex={0}
                onClick={e => {
                  e.stopPropagation();
                  setModalImg({ src: customer.src, alt: customer.alt });
                  setModalOpen(true);
                }}
                onMouseDown={e => {
                  // Prevent drag-to-scroll from starting if mousedown is on image
                  e.stopPropagation();
                }}
                onTouchStart={e => {
                  e.stopPropagation();
                }}
              >
                <Image
                  src={customer.src}
                  alt={customer.alt}
                  fill
                  className="object-contain"
                  sizes="240px"
                  draggable={false}
                  priority={idx < 7}
                />
              </button>
            </div>
            {/* Text */}
            {/* <div className="min-h-[60px] flex flex-col justify-center">
              <h3 className="text-[#011133] font-semibold">{customer.name}</h3>
              <p className="text-gray-500 text-sm">{customer.desc}</p>
            </div> */}
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {modalOpen && modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
          onClick={() => setModalOpen(false)}
          style={{ cursor: 'zoom-out' }}
        >
          <div
            className="relative bg-white rounded-lg shadow-lg p-4"
            style={{ maxWidth: 600, maxHeight: '90vh' }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black text-2xl font-bold"
              onClick={() => setModalOpen(false)}
              aria-label="Close"
              style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            >
              ×
            </button>
            <div className="flex items-center justify-center" style={{ minWidth: 500, minHeight: 500 }}>
              <Image
                src={modalImg.src}
                alt={modalImg.alt}
                width={400}
                height={400}
                style={{ maxWidth: '90vw', maxHeight: '70vh', objectFit: 'contain' }}
                className="rounded"
                priority
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}