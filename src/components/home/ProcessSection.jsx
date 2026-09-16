import React from 'react';
import { FaArrowRight, FaSearch, FaCalendarAlt, FaCode, FaRocket } from 'react-icons/fa';

export default function ProcessSection({ onOpenContact }) {
  return (
    <section className="py-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Header */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block">
              OUR PROCESS
            </span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-tight">
              Simple Steps. <br />
              Powerful Results.
            </h2>
            <p className="font-outfit text-sm sm:text-base text-[#475569] leading-relaxed">
              We follow a transparent and milestone-driven process to ensure your project is
              delivered on schedule and exceeds quality benchmarks.
            </p>
            <div>
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0E7490] hover:bg-[#086178] text-white font-syne font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>How It Works</span>
                <FaArrowRight className="text-xs" />
              </button>
            </div>
          </div>

          {/* Right 4 Horizontal Stepper Cards */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
            {/* Step 01 */}
            <div className="bg-[#F8FAF9] rounded-2xl p-5 border border-gray-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 relative group">
              <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center text-sm mb-4 shadow-2xs">
                <FaSearch />
              </div>
              <div className="font-syne font-extrabold text-xs text-[#0E7490] uppercase tracking-wider mb-1">
                01
              </div>
              <h3 className="font-syne font-bold text-base text-[#0F172A] mb-1.5">
                Discover
              </h3>
              <p className="font-outfit text-xs text-[#64748B] leading-relaxed">
                Understand your goals and requirements.
              </p>
            </div>

            {/* Step 02 */}
            <div className="bg-[#F8FAF9] rounded-2xl p-5 border border-gray-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 relative group">
              <div className="w-10 h-10 rounded-xl bg-[#E0F7F6] text-[#0E7490] flex items-center justify-center text-sm mb-4 shadow-2xs">
                <FaCalendarAlt />
              </div>
              <div className="font-syne font-extrabold text-xs text-[#0E7490] uppercase tracking-wider mb-1">
                02
              </div>
              <h3 className="font-syne font-bold text-base text-[#0F172A] mb-1.5">
                Plan
              </h3>
              <p className="font-outfit text-xs text-[#64748B] leading-relaxed">
                Create a strategy and project roadmap.
              </p>
            </div>

            {/* Step 03 */}
            <div className="bg-[#F8FAF9] rounded-2xl p-5 border border-gray-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 relative group">
              <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center text-sm mb-4 shadow-2xs">
                <FaCode />
              </div>
              <div className="font-syne font-extrabold text-xs text-[#0E7490] uppercase tracking-wider mb-1">
                03
              </div>
              <h3 className="font-syne font-bold text-base text-[#0F172A] mb-1.5">
                Design & Develop
              </h3>
              <p className="font-outfit text-xs text-[#64748B] leading-relaxed">
                Turn ideas into reality.
              </p>
            </div>

            {/* Step 04 */}
            <div className="bg-[#F8FAF9] rounded-2xl p-5 border border-gray-200/80 shadow-2xs hover:shadow-lg transition-all duration-300 relative group">
              <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center text-sm mb-4 shadow-2xs">
                <FaRocket />
              </div>
              <div className="font-syne font-extrabold text-xs text-[#0E7490] uppercase tracking-wider mb-1">
                04
              </div>
              <h3 className="font-syne font-bold text-base text-[#0F172A] mb-1.5">
                Launch
              </h3>
              <p className="font-outfit text-xs text-[#64748B] leading-relaxed">
                Go live and grow together.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
