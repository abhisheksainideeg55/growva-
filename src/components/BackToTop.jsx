import React, { useState, useEffect } from 'react';
import { FaChevronUp } from 'react-icons/fa';

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      title="Back to top"
      className={`fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#0E7490] hover:bg-[#086178] text-white flex items-center justify-center shadow-lg shadow-cyan-950/30 border border-cyan-400/20 transition-all duration-300 transform hover:-translate-y-1 active:scale-95 focus:outline-none cursor-pointer ${
        isVisible
          ? 'opacity-100 scale-100 pointer-events-auto'
          : 'opacity-0 scale-75 pointer-events-none'
      }`}
    >
      <FaChevronUp className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
    </button>
  );
}
