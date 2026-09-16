import React, { useState, useEffect, useRef } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppWidget() {
  const [isVisible, setIsVisible] = useState(true);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    // Auto-hide after 15 seconds of inactivity
    timerRef.current = setTimeout(() => {
      setIsVisible(false);
    }, 15000);
  };

  const handleUserActivity = () => {
    setIsVisible(true);
    startTimer();
  };

  useEffect(() => {
    // Start initial 15-second timer
    startTimer();

    // Comprehensive list of interaction events for mobile touch and desktop
    const events = [
      'touchstart',
      'touchmove',
      'touchend',
      'pointerdown',
      'pointermove',
      'mousemove',
      'scroll',
      'wheel',
      'click',
      'keydown'
    ];

    events.forEach((evt) => {
      window.addEventListener(evt, handleUserActivity, { passive: true });
      document.addEventListener(evt, handleUserActivity, { passive: true });
    });

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
      events.forEach((evt) => {
        window.removeEventListener(evt, handleUserActivity);
        document.removeEventListener(evt, handleUserActivity);
      });
    };
  }, []);

  return (
    <a
      href="https://api.whatsapp.com/send/?phone=919351764755&text=Hi%20Growva!%20I%20am%20interested%20in%20discussing%20a%20project%20with%20your%20team."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      className={`fixed bottom-[72px] sm:bottom-[86px] right-4 sm:right-6 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#25D366] hover:bg-[#20ba5a] text-white flex items-center justify-center shadow-lg shadow-emerald-950/25 hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-500 ease-in-out group cursor-pointer ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-75 translate-y-2 pointer-events-none'
      }`}
    >
      {/* Subtle pulsing ring */}
      <span className="absolute -inset-1 rounded-full bg-[#25D366] opacity-30 group-hover:animate-ping pointer-events-none" />

      <FaWhatsapp className="text-xl sm:text-2xl relative z-10" />
    </a>
  );
}
