import React from 'react';
import { Link } from 'react-router-dom';
import { FaChevronRight } from 'react-icons/fa';

export default function Breadcrumb({ title, subtitle }) {
  return (
    <div className="relative pt-36 pb-20 md:pt-40 md:pb-24 bg-[#0F172A] text-white overflow-hidden">
      {/* Decorative Glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#0E7490]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#06B6D4]/15 rounded-full blur-3xl pointer-events-none" />

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
          <Link to="/" className="text-gray-300 hover:text-cyan-300 transition-colors">
            Home
          </Link>
          <FaChevronRight className="text-[10px] text-gray-500" />
          <span className="text-cyan-400">{title}</span>
        </nav>
      </div>
    </div>
  );
}
