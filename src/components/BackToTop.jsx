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

  if (!isVisible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#126E89] text-white flex items-center justify-center shadow-xl hover:bg-[#fff] hover:text-[#126E89] hover:border-[#126E89] hover:border-[1px] transition-all duration-300 transform hover:-translate-y-1 focus:outline-none"
    >
      <FaChevronUp className="w-4 h-4" />
    </button>
  );
}
