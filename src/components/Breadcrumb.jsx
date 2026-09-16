import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

export default function Breadcrumb({ title, subtitle, bgImage }) {
  return (
    <div className="relative pt-36 pb-20 md:pt-44 md:pb-28 bg-[#0c0c0c] text-white overflow-hidden">
      {/* Background shape */}
      <div className="absolute inset-0 opacity-20 pointer-events-none flex items-center justify-end">
        <img
          src={bgImage || "/assets/images/shape/breadcumbBg1_1.png"}
          alt="pattern"
          className="h-full w-auto object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
      </div>

      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#fe5e3a]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-syne font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-4 tracking-tight">
          {title}
        </h1>

        {subtitle && (
          <p className="font-outfit text-gray-300 max-w-xl mx-auto text-base sm:text-lg mb-6">
            {subtitle}
          </p>
        )}

        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-xs sm:text-sm font-syne font-medium">
          <Link to="/" className="text-gray-300 hover:text-[#fe5e3a] transition-colors">
            Home
          </Link>
          <FaChevronRight className="text-[10px] text-gray-500" />
          <span className="text-[#fe5e3a]">{title}</span>
        </nav>
      </div>
    </div>
  );
}
