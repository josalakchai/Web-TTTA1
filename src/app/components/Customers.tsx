'use client';
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import 'aos/dist/aos.css';

type Customer = {
  src: string;
  alt: string;
  name: string;
  desc: string;
};

const customers: Customer[] = [
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
const loopCustomers: Customer[] = [...customers, ...customers];

// Define a type for AOS options to avoid 'any'
type AOSOptions = {
  once?: boolean;
  duration?: number;
  offset?: number;
};

export default function Customers() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);

  // For drag-to-scroll
  const isDragging = useRef<boolean>(false);
  const startX = useRef<number>(0);
  const scrollLeft = useRef<number>(0);

  // For image modal
  const [modalOpen, setModalOpen] = useState<boolean>(false);
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
    // Define a type for the imported AOS module
    type AOSModule = {
      init: (opts: AOSOptions) => void;
      refreshHard?: () => void;
    };
    let AOS: AOSModule | undefined;
    const loadAOS = async () => {
      if (typeof window !== 'undefined') {
        const aosModule = await import('aos');
        AOS = aosModule.default ? aosModule.default : aosModule;
        if (AOS && typeof AOS.init === 'function') {
          AOS.init({
            once: true,
            duration: 900,
            offset: 80,
          });
        }
      }
    };
    loadAOS();

    return () => {
      // No need to call AOS.refreshHard here, as AOS is not guaranteed to be available
    };
  }, []);

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    // Remove scrollbars (overflow button) via CSS
    slider.style.overflow = 'hidden';

    const speed = 1.2; // px per frame, bigger for faster and more visible
    const resetPoint = slider.scrollWidth / 2;

    const animate = () => {
      if (!slider) return;
      if (!isDragging.current) {
        slider.scrollLeft += speed;
        // Reset to start for seamless loop
        if (slider.scrollLeft >= resetPoint) {
          slider.scrollLeft = 0;
        }
      }
      animationRef.current = window.requestAnimationFrame(animate);
    };

    animationRef.current = window.requestAnimationFrame(animate);

    // Mouse events for drag-to-scroll
    const handleMouseDown = (e: MouseEvent) => {
      isDragging.current = true;
      if (slider) slider.classList.add('cursor-grabbing');
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
      document.body.style.userSelect = 'none';
    };

    const handleMouseLeave = () => {
      isDragging.current = false;
      if (slider) slider.classList.remove('cursor-grabbing');
      document.body.style.userSelect = '';
    };

    const handleMouseUp = () => {
      isDragging.current = false;
      if (slider) slider.classList.remove('cursor-grabbing');
      document.body.style.userSelect = '';
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5;
      slider.scrollLeft = scrollLeft.current - walk;
    };

    // Touch events for mobile
    const handleTouchStart = (e: TouchEvent) => {
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
      if (slider) slider.classList.remove('cursor-grabbing');
      document.body.style.userSelect = '';
    };
    window.addEventListener('mouseup', handleWindowMouseUp);

    return () => {
      if (animationRef.current) {
        window.cancelAnimationFrame(animationRef.current);
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

  // Responsive image size
  const getImageSize = (): { width: number; height: number } => {
    let width = 240;
    let height = 192;
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 640) {
        width = 140;
        height = 100;
      } else if (window.innerWidth < 1024) {
        width = 180;
        height = 140;
      }
    }
    return { width, height };
  };

  const [imgSize, setImgSize] = useState<{ width: number; height: number }>(() => getImageSize());

  useEffect(() => {
    const handleResize = () => {
      setImgSize(getImageSize());
    };
    window.addEventListener('resize', handleResize);
    setImgSize(getImageSize());
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // --- Drag on image support ---
  // We need to prevent click (open modal) if the user is dragging.
  // We'll track if a drag happened between mousedown and mouseup/touchend.
  const dragStarted = useRef<boolean>(false);

  // Helper for image button: onMouseDown/onTouchStart
  const handleImagePointerDown = () => {
    dragStarted.current = false;
  };

  // Helper for image button: onMouseMove/onTouchMove
  const handleImagePointerMove = () => {
    dragStarted.current = true;
  };

  // Helper for image button: onClick
  const handleImageClick = (customer: { src: string; alt: string }) => {
    if (dragStarted.current) {
      dragStarted.current = false;
      return;
    }
    setModalImg({ src: customer.src, alt: customer.alt });
    setModalOpen(true);
  };

  return (
    <section className="bg-white py-12 px-2 sm:py-16 sm:px-4">
      {/* Title */}
      <div
        className="max-w-7xl mx-auto text-center mb-8 sm:mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-[#011133]">Our Customers</h2>
        <p className="text-gray-600 mt-3 max-w-3xl mx-auto text-sm sm:text-base">
        Partnering with organizations and individuals to deliver solutions that meet real-world needs and drive lasting value.
        </p>
      </div>

      {/* Slider Gallery All Items Container */}
      <div
        ref={sliderRef}
        className="slider-gallery-all-items-container flex gap-6 sm:gap-10 md:gap-16 max-w-full sm:max-w-7xl mx-auto py-4 sm:py-8 scrollbar-hide cursor-grab select-none"
        style={{
          scrollBehavior: 'auto',
          overflow: 'hidden',
          userSelect: 'none',
        }}
      >
        {loopCustomers.map((customer, idx) => (
          <div
            key={idx}
            className="min-w-[160px] sm:min-w-[220px] md:min-w-[300px] lg:min-w-[360px] flex flex-col items-center text-center flex-shrink-0"
          >
            {/* Image Container with fixed height */}
            <div
              className="w-full flex items-center justify-center mb-3 sm:mb-6"
              style={{
                height: imgSize.height,
                minHeight: imgSize.height,
                maxHeight: imgSize.height,
              }}
            >
              <button
                type="button"
                className="relative customer-image-clickable"
                style={{
                  width: imgSize.width,
                  height: imgSize.height,
                  padding: 0,
                  border: 'none',
                  background: 'none',
                  cursor: 'pointer',
                }}
                tabIndex={0}
                onClick={e => {
                  e.stopPropagation();
                  handleImageClick(customer);
                }}
                onMouseDown={() => {
                  handleImagePointerDown();
                }}
                onMouseMove={() => {
                  handleImagePointerMove();
                }}
                onTouchStart={() => {
                  handleImagePointerDown();
                }}
                onTouchMove={() => {
                  handleImagePointerMove();
                }}
              >
                <Image
                  src={customer.src}
                  alt={customer.alt}
                  fill
                  className="object-contain rounded-lg"
                  sizes={`${imgSize.width}px`}
                  draggable={false}
                  priority={idx < 7}
                />
              </button>
            </div>
            {/* Text (optional, hidden on mobile for compactness) */}
            {/* <div className="min-h-[40px] sm:min-h-[60px] flex flex-col justify-center">
              <h3 className="text-[#011133] font-semibold text-xs sm:text-base">{customer.name}</h3>
              <p className="text-gray-500 text-xs sm:text-sm">{customer.desc}</p>
            </div> */}
          </div>
        ))}
      </div>

      {/* Modal for image preview */}
      {modalOpen && modalImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center"
          onClick={() => setModalOpen(false)}
          style={{
            cursor: 'zoom-out',
            background: 'transparent',
          }}
        >
          <button
            className="absolute top-2 right-2 text-gray-700 hover:text-black text-2xl font-bold"
            onClick={() => setModalOpen(false)}
            aria-label="Close"
            style={{ background: 'none', border: 'none', cursor: 'pointer', zIndex: 10 }}
          >
            ×
          </button>
          <Image
            src={modalImg.src}
            alt={modalImg.alt}
            width={imgSize.width * 2}
            height={imgSize.height * 2}
            style={{
              maxWidth: '90vw',
              maxHeight: '80vh',
              objectFit: 'contain',
              margin: 'auto',
              display: 'block',
              boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
              borderRadius: '12px',
              background: 'transparent',
            }}
            className="rounded"
            priority
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}