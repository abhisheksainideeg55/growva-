import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPalette, FaChartLine, FaBullhorn } from 'react-icons/fa';

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block mb-2">
              OUR SERVICES
            </span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              What We Do Best
            </h2>
            <p className="font-outfit text-[#475569] text-sm sm:text-base mt-3 leading-relaxed">
              We offer a full range of digital services to help your brand stand out,
              grow faster and reach the right audience.
            </p>
          </div>
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-syne font-semibold text-sm text-[#0E7490] hover:text-[#086178] transition-colors group"
            >
              <span>View All Services</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4 Services Grid Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Service 1: Web Development */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E0F2FE] text-[#0284C7] flex items-center justify-center font-bold text-base mb-6 group-hover:scale-110 transition-transform shadow-2xs">
                &lt;/&gt;
              </div>
              <h3 className="font-syne font-bold text-lg text-[#0F172A] mb-2 group-hover:text-[#0E7490] transition-colors">
                Web Development
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                Custom websites & web apps that are fast, secure and scalable.
              </p>
            </div>
            <Link
              to="/service-details"
              className="w-8 h-8 rounded-full bg-white border border-gray-200 text-[#0E7490] group-hover:bg-[#0E7490] group-hover:text-white group-hover:border-[#0E7490] flex items-center justify-center transition-all self-start shadow-2xs"
              aria-label="Learn more about Web Development"
            >
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>

          {/* Service 2: UI/UX Design */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#E0F7F6] text-[#0E7490] flex items-center justify-center text-lg mb-6 group-hover:scale-110 transition-transform shadow-2xs">
                <FaPalette />
              </div>
              <h3 className="font-syne font-bold text-lg text-[#0F172A] mb-2 group-hover:text-[#0E7490] transition-colors">
                UI/UX Design
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                Designs that are not just beautiful but also user-friendly.
              </p>
            </div>
            <Link
              to="/service-details"
              className="w-8 h-8 rounded-full bg-white border border-gray-200 text-[#0E7490] group-hover:bg-[#0E7490] group-hover:text-white group-hover:border-[#0E7490] flex items-center justify-center transition-all self-start shadow-2xs"
              aria-label="Learn more about UI/UX Design"
            >
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>

          {/* Service 3: Digital Marketing */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#F0FDF4] text-[#16A34A] flex items-center justify-center text-lg mb-6 group-hover:scale-110 transition-transform shadow-2xs">
                <FaChartLine />
              </div>
              <h3 className="font-syne font-bold text-lg text-[#0F172A] mb-2 group-hover:text-[#0E7490] transition-colors">
                Digital Marketing
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                Get more visibility, traffic and conversions with data-driven marketing.
              </p>
            </div>
            <Link
              to="/service-details"
              className="w-8 h-8 rounded-full bg-white border border-gray-200 text-[#0E7490] group-hover:bg-[#0E7490] group-hover:text-white group-hover:border-[#0E7490] flex items-center justify-center transition-all self-start shadow-2xs"
              aria-label="Learn more about Digital Marketing"
            >
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>

          {/* Service 4: Branding */}
          <div className="glass-card glass-card-hover rounded-2xl p-7 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-[#FEF3C7] text-[#D97706] flex items-center justify-center text-lg mb-6 group-hover:scale-110 transition-transform shadow-2xs">
                <FaBullhorn />
              </div>
              <h3 className="font-syne font-bold text-lg text-[#0F172A] mb-2 group-hover:text-[#0E7490] transition-colors">
                Branding
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#64748B] leading-relaxed mb-6">
                Build a unique identity that makes your business unforgettable.
              </p>
            </div>
            <Link
              to="/service-details"
              className="w-8 h-8 rounded-full bg-white border border-gray-200 text-[#0E7490] group-hover:bg-[#0E7490] group-hover:text-white group-hover:border-[#0E7490] flex items-center justify-center transition-all self-start shadow-2xs"
              aria-label="Learn more about Branding"
            >
              <FaArrowRight className="text-[10px]" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
