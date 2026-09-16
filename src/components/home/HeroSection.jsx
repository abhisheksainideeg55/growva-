import React from 'react';
import { FaArrowRight, FaPlay, FaStar, FaBullhorn, FaPalette, FaRocket } from 'react-icons/fa';

export default function HeroSection({ onOpenContact, onOpenVideo }) {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-[#F0F7F7]/70 via-[#F8FAF9] to-[#F8FAF9]">
      {/* Soft atmospheric gradient ambient glows */}
      <div className="absolute top-10 left-1/4 w-96 h-96 bg-[#0E7490]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-36 right-10 w-[30rem] h-[30rem] bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            {/* Availability & Agency Pill Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/80 font-syne font-bold text-xs tracking-wide shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>Available for Q3/Q4 Projects</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#E0F2FE] text-[#0284C7] font-syne font-bold text-xs tracking-wider uppercase shadow-2xs">
                <span>● Digital Agency</span>
              </div>
            </div>

            {/* Main Heading with dynamic script highlight */}
            <h1 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] leading-[1.12] tracking-tight ">
              We Build Digital <br className="hidden sm:inline" />
              Experiences That <br className="hidden sm:inline" />
              Help Your Business{' '}
              <span className="relative inline-block font-caveat text-5xl sm:text-6xl lg:text-7xl font-bold text-[#0E7490] -rotate-2 ml-1">
                Grow
                {/* Subtle scribble underline SVG flourish */}
                <svg
                  className="absolute -bottom-2.5 left-0 w-full text-[#06B6D4]/70"
                  viewBox="0 0 160 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3 14C35 5 115 4 157 15"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="font-outfit text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl">
              From stunning websites to powerful digital marketing, we create high-performance
              solutions that bring your vision to life and drive exponential revenue growth.
            </p>

            {/* Call to action buttons with Shimmer glow */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="btn-shimmer inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full text-white font-syne font-semibold text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Start a Project</span>
                <FaArrowRight className="text-xs" />
              </button>

              <button
                onClick={onOpenVideo}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-white border border-gray-200 hover:border-[#0E7490] text-[#0F172A] hover:text-[#0E7490] font-syne font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-2xs group"
              >
                <span className="w-7 h-7 rounded-full bg-[#E0F7F6] text-[#0E7490] flex items-center justify-center group-hover:bg-[#0E7490] group-hover:text-white transition-colors">
                  <FaPlay className="text-[9px] ml-0.5" />
                </span>
                <span>Watch Our Story</span>
              </button>
            </div>

            {/* Social Proof & Metrics Badges */}
            <div className="flex flex-wrap items-center gap-6 pt-4 border-t border-gray-200/60">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3 overflow-hidden">
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-2xs"
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                    alt="Happy Client 1"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-2xs"
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                    alt="Happy Client 2"
                  />
                  <img
                    className="inline-block h-10 w-10 rounded-full ring-2 ring-white object-cover shadow-2xs"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80"
                    alt="Happy Client 3"
                  />
                </div>
                <div>
                  <div className="font-syne font-bold text-xs sm:text-sm text-[#0F172A]">
                    100+ Happy Clients
                  </div>
                  <div className="text-[11px] text-[#64748B]">and growing worldwide</div>
                </div>
              </div>

              <div className="flex items-center gap-2 pl-4 border-l border-gray-200">
                <div className="text-amber-400 text-xs flex">
                  <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                </div>
                <span className="font-syne font-bold text-xs text-[#0F172A]">
                  4.9/5 Rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Visual Scene with Desk Setup & Floating Badges */}
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Main Desk Setup Mockup */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/assets/images/hero_desk.jpg"
                  alt="Growva Digital Workspace"
                  className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/hero_desk_mockup_1789544944753.jpg';
                  }}
                />
                {/* Subtle inner glass overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1: Web Development (Top Left) */}
              <div className="absolute -top-4 -left-4 sm:-left-8 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100/90 flex items-center gap-2.5 animate-float">
                <span className="w-8 h-8 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-xs">
                  &lt;/&gt;
                </span>
                <span className="font-syne font-bold text-xs sm:text-sm text-[#0F172A]">
                  Web Development
                </span>
              </div>

              {/* Floating Badge 2: Digital Marketing (Top Right) */}
              <div className="absolute -top-6 -right-2 sm:-right-6 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100/90 flex items-center gap-2.5 animate-floatSlow">
                <span className="w-8 h-8 rounded-xl bg-[#E0F7F6] text-[#0E7490] flex items-center justify-center">
                  <FaBullhorn className="text-xs" />
                </span>
                <span className="font-syne font-bold text-xs sm:text-sm text-[#0F172A]">
                  Digital Marketing
                </span>
              </div>

              {/* Floating Badge 3: UI/UX Design (Middle Right) */}
              <div className="absolute top-1/3 -right-6 sm:-right-10 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100/90 flex items-center gap-2.5 animate-float">
                <span className="w-8 h-8 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center">
                  <FaPalette className="text-xs" />
                </span>
                <span className="font-syne font-bold text-xs sm:text-sm text-[#0F172A]">
                  UI/UX Design
                </span>
              </div>

              {/* Floating Badge 4: Branding (Bottom Right) */}
              <div className="absolute bottom-12 -right-4 sm:-right-8 z-20 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-gray-100/90 flex items-center gap-2.5 animate-floatSlow">
                <span className="w-8 h-8 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center">
                  <FaRocket className="text-xs" />
                </span>
                <span className="font-syne font-bold text-xs sm:text-sm text-[#0F172A]">
                  Branding
                </span>
              </div>

              {/* Hand-drawn scribble: "Let's Grow Together" */}
              <div className="absolute -bottom-10 -right-2 sm:-right-8 z-20 flex flex-col items-center">
                <span className="font-caveat font-bold text-2xl text-[#0E7490] transform rotate-6 whitespace-nowrap">
                  Let's Grow Together
                </span>
                {/* Curved arrow doodle */}
                <svg
                  className="w-10 h-8 text-[#0E7490] transform -rotate-12"
                  viewBox="0 0 50 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                >
                  <path d="M10 5 C 25 15, 30 25, 40 32" />
                  <path d="M32 30 L40 32 L38 24" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
