'use client';
import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      style={{
        position: 'fixed',
        zIndex: 9999,
        bottom: 0,
        right: 0,
        width: '100vw',
        pointerEvents: 'none',
      }}
    >
      {visible && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="
            pointer-events-auto
            bg-orange-400 text-white rounded-full shadow-lg
            fixed
            bottom-4 right-4
            sm:bottom-6 sm:right-6
            p-3 sm:p-4
            hover:bg-orange-500
            transition
            focus:outline-none focus:ring-2 focus:ring-orange-300
          "
          style={{
            zIndex: 9999,
          }}
        >
          <ArrowUp size={24} className="hidden sm:inline" />
          <ArrowUp size={18} className="inline sm:hidden" />
        </button>
      )}
    </div>
  );
}
