import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function AboutHeroSection() {
  return (
    <section className="py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Image Showcase */}
          <div className="lg:col-span-6">
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/assets/images/about_desk.jpg"
                  alt="About Growva"
                  className="w-full h-[480px] object-cover"
                />
              </div>
              {/* Floating Experience Badge */}
              <div className="absolute -bottom-6 -right-6 bg-[#0E7490] text-white p-6 rounded-3xl shadow-xl hidden sm:block">
                <span className="font-syne font-black text-4xl block">3+</span>
                <span className="font-outfit text-xs font-semibold uppercase tracking-wider">
                  Years Experience
                </span>
              </div>
            </div>
          </div>

          {/* Right Story */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block">
              WHO WE ARE
            </span>
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] leading-tight">
              Power your <span className="text-[#0E7490]">business</span> with modern digital solutions
            </h2>
            <p className="font-outfit text-[#475569] text-base sm:text-lg leading-relaxed">
              Growva is a forward-thinking digital agency and technology partner. We specialize in building responsive web applications, bespoke UI/UX designs, and data-driven marketing systems that help companies scale quickly and reliably.
            </p>

            <div className="space-y-3.5 font-outfit text-[#334155]">
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0E7490] text-lg shrink-0" />
                <span>Custom engineering tailored to your industry standards</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0E7490] text-lg shrink-0" />
                <span>Transparent communication and milestone-driven delivery</span>
              </div>
              <div className="flex items-center gap-3">
                <FaCheckCircle className="text-[#0E7490] text-lg shrink-0" />
                <span>Continuous support, security audits, and system scaling</span>
              </div>
            </div>

            <div className="flex items-center gap-4 pt-2">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-full bg-[#0E7490] hover:bg-[#086178] text-white font-syne font-semibold text-sm transition-all shadow-md"
              >
                <span>Get in Touch</span>
                <FaArrowRight className="text-xs" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full border border-gray-300 hover:border-[#0E7490] text-[#0F172A] hover:text-[#0E7490] font-syne font-semibold text-sm transition-all"
              >
                <span>Explore Services</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
