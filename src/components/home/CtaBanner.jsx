import React from 'react';
import { FaArrowRight, FaPaperPlane } from 'react-icons/fa';

export default function CtaBanner({ onOpenContact }) {
  return (
    <section className="py-16 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0B4B5A] via-[#0E6073] to-[#088395] p-8 sm:p-12 lg:p-14 shadow-2xl">
          {/* Background subtle radial glow & shapes */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute bottom-0 left-10 w-60 h-60 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-2 text-center md:text-left">
              <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-syne font-semibold uppercase tracking-wider text-cyan-200">
                Scale Your Business
              </span>
              <h2 className="font-syne font-extrabold text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight">
                Ready to Grow Your Business?
              </h2>
              <p className="font-outfit text-sm sm:text-base text-cyan-100 max-w-xl">
                Let's create something extraordinary together. Schedule your free consultation today.
              </p>
            </div>

            <div className="flex items-center gap-4 flex-shrink-0">
              <button
                onClick={onOpenContact}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white hover:bg-cyan-50 text-[#0E7490] font-syne font-bold text-sm transition-all duration-300 shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group"
              >
                <span>Start a Project</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </button>

              <div className="hidden sm:flex w-12 h-12 rounded-full bg-white/15 backdrop-blur-md items-center justify-center text-white text-xl">
                <FaPaperPlane className="transform -rotate-12" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
