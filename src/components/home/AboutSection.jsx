import React from 'react';
import { Link } from 'react-router-dom';
import { FaPlay, FaArrowRight, FaFolder, FaUsers, FaCalendarAlt, FaStar } from 'react-icons/fa';

export default function AboutSection({ onOpenVideo }) {
  return (
    <section id="about" className="py-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          {/* Left Image / Video Story card */}
          <div className="lg:col-span-6 relative">
            {/* Handwritten scribble "Our Story" */}
            <div className="absolute -top-8 left-4 z-20 flex flex-col items-center">
              <span className="font-caveat font-bold text-2xl text-[#0E7490] transform -rotate-6">
                Our Story
              </span>
              <svg
                className="w-8 h-6 text-[#0E7490] transform -rotate-12"
                viewBox="0 0 50 40"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              >
                <path d="M10 5 C 20 15, 25 25, 35 32" />
                <path d="M28 30 L35 32 L33 24" />
              </svg>
            </div>

            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <img
                src="/assets/images/about_desk.jpg"
                alt="Growva Team Workspace"
                className="w-full h-[360px] sm:h-[420px] object-cover object-center group-hover:scale-102 transition-transform duration-700"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/images/about_story_desk_1789544967266.jpg';
                }}
              />
              {/* Play Button Overlay */}
              <button
                onClick={onOpenVideo}
                className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-[#0E7490]/90 hover:bg-[#0E7490] text-white flex items-center justify-center shadow-xl hover:scale-110 transition-all duration-300"
                aria-label="Play story video"
              >
                <FaPlay className="text-sm ml-1" />
              </button>
            </div>
          </div>

          {/* Right Text & 2x2 Metric Stats */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block">
              ABOUT GROWVA
            </span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight leading-tight">
              We Turn Ideas <br />
              Into Digital Success
            </h2>
            <p className="font-outfit text-sm sm:text-base text-[#475569] leading-relaxed">
              We're not just a service provider, we're your growth partner. Our team
              blends creativity, technology and strategy to deliver outstanding results.
            </p>

            <div>
              <Link
                to="/about"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0E7490] hover:bg-[#086178] text-white font-syne font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>Learn More</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* 2x2 Stats Grid */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-200/70">
              {/* Stat 1 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center text-base flex-shrink-0 mt-0.5 shadow-2xs">
                  <FaFolder />
                </div>
                <div>
                  <div className="font-bold text-xl text-[#0F172A]">
                    250+
                  </div>
                  <div className="font-outfit text-xs text-[#64748B]">
                    Projects Completed
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#E0F7F6] text-[#0E7490] flex items-center justify-center text-base flex-shrink-0 mt-0.5 shadow-2xs">
                  <FaUsers />
                </div>
                <div>
                  <div className="font-bold text-xl text-[#0F172A]">
                    100+
                  </div>
                  <div className="font-outfit text-xs text-[#64748B]">
                    Happy Clients
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center text-base flex-shrink-0 mt-0.5 shadow-2xs">
                  <FaCalendarAlt />
                </div>
                <div>
                  <div className="font-bold text-xl text-[#0F172A]">
                    3+
                  </div>
                  <div className="font-outfit text-xs text-[#64748B]">
                    Years of Experience
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center text-base flex-shrink-0 mt-0.5 shadow-2xs">
                  <FaStar />
                </div>
                <div>
                  <div className="font-bold text-xl text-[#0F172A]">
                    95%
                  </div>
                  <div className="font-outfit text-xs text-[#64748B]">
                    Client Satisfaction
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
