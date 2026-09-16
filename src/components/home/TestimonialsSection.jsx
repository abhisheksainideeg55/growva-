import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight, FaStar } from 'react-icons/fa';

export default function TestimonialsSection({ testimonials }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? Math.max(0, testimonials.length - 3) : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= testimonials.length - 3 ? 0 : prev + 1));
  };

  return (
    <section className="py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with slider controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block mb-2">
              TESTIMONIALS
            </span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              What Our Clients Say
            </h2>
            <p className="font-outfit text-[#475569] text-sm sm:text-base mt-2">
              Real stories from real partners who have scaled with Growva solutions.
            </p>
          </div>

          {/* Slider Arrow buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full border border-gray-200 bg-white text-[#0F172A] hover:bg-[#0E7490] hover:text-white hover:border-[#0E7490] flex items-center justify-center transition-all shadow-2xs"
              aria-label="Previous testimonials"
            >
              <FaArrowLeft className="text-xs" />
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full border border-gray-200 bg-[#0E7490] text-white hover:bg-[#086178] flex items-center justify-center transition-all shadow-sm"
              aria-label="Next testimonials"
            >
              <FaArrowRight className="text-xs" />
            </button>
          </div>
        </div>

        {/* 3 Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(currentIndex, currentIndex + 3).map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-7 border border-gray-200/80 shadow-2xs hover:border-[#0E7490]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <p className="font-outfit text-xs sm:text-sm text-[#475569] leading-relaxed italic mb-6">
                "{item.quote}"
              </p>

              <div>
                <div className="flex items-center gap-3.5 mb-3">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-11 h-11 rounded-full object-cover border-2 border-white shadow-2xs"
                  />
                  <div>
                    <h4 className="font-syne font-bold text-sm text-[#0F172A]">
                      {item.name}
                    </h4>
                    <p className="font-outfit text-xs text-[#64748B]">
                      {item.role}
                    </p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 text-amber-400 text-xs">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
