import React from 'react';

export default function MarqueeSlider() {
  const items = [
    'Brilliance Studio',
    'Digital Success',
    'Presence Solutions',
    'Digital Success',
    'Brilliance Studio',
    'Presence Solutions',
  ];

  return (
    <div className="py-6 bg-[#126E89] overflow-hidden select-none border-y border-white/10">
      <div className="flex w-max animate-marquee">
        {/* First set */}
        <div className="flex items-center space-x-8 shrink-0 pr-8">
          {items.map((text, idx) => (
            <div key={`item1-${idx}`} className="flex items-center space-x-8">
              <span className="font-syne font-bold text-2xl md:text-3xl text-white tracking-wider whitespace-nowrap">
                {text}
              </span>
              <img
                src="/assets/images/shape/textSlider3_1.png"
                alt="star"
                className="w-6 h-6 object-contain animate-spinSlow"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless loop */}
        <div className="flex items-center space-x-8 shrink-0 pr-8">
          {items.map((text, idx) => (
            <div key={`item2-${idx}`} className="flex items-center space-x-8">
              <span className="font-syne font-bold text-2xl md:text-3xl text-white tracking-wider whitespace-nowrap">
                {text}
              </span>
              <img
                src="/assets/images/shape/textSlider3_1.png"
                alt="star"
                className="w-6 h-6 object-contain animate-spinSlow"
                onError={(e) => {
                  e.target.style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
