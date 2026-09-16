import React from 'react';
import { FaBolt, FaShieldAlt, FaPalette, FaTrophy } from 'react-icons/fa';

export default function WhyGrowvaSection() {
  return (
    <section className="py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block mb-2">
            WHY CHOOSE GROWVA
          </span>
          <h2 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-[#0F172A] leading-[1.12] tracking-tight">
            Engineered For High Performance & Growth
          </h2>
          <p className="font-outfit text-[#64748B] text-base mt-3">
            We combine enterprise-grade software architecture, world-class UI design, and data-driven marketing to deliver compounding business value.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Pillar 1 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
              <FaBolt />
            </div>
            <h3 className="font-syne font-bold text-lg text-[#0F172A] mb-2">
              Sub-Second Speed
            </h3>
            <p className="font-outfit text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
              99+ Google PageSpeed score, edge caching, and optimized asset delivery for maximum conversion rates.
            </p>
            <div className="font-syne font-extrabold text-xs text-[#0E7490]">
              ⚡ 99+ Core Web Vitals
            </div>
          </div>

          {/* Pillar 2 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 text-cyan-700 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
              <FaShieldAlt />
            </div>
            <h3 className="font-syne font-bold text-lg text-[#0F172A] mb-2">
              Enterprise Security
            </h3>
            <p className="font-outfit text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
              OWASP compliant secure code, SSL encryption, continuous audits, and 99.99% high-availability uptime.
            </p>
            <div className="font-syne font-extrabold text-xs text-[#0E7490]">
              🔒 99.99% Uptime SLA
            </div>
          </div>

          {/* Pillar 3 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
              <FaPalette />
            </div>
            <h3 className="font-syne font-bold text-lg text-[#0F172A] mb-2">
              Conversion UI/UX
            </h3>
            <p className="font-outfit text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
              Intuitive interfaces designed to eliminate user friction, increase retention, and turn visitors into buyers.
            </p>
            <div className="font-syne font-extrabold text-xs text-[#0E7490]">
              📈 3.4x Conversion Lift
            </div>
          </div>

          {/* Pillar 4 */}
          <div className="bg-white rounded-3xl p-8 border border-gray-200/80 shadow-2xs hover:shadow-xl transition-all duration-300 group">
            <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform">
              <FaTrophy />
            </div>
            <h3 className="font-syne font-bold text-lg text-[#0F172A] mb-2">
              Scalable Roadmap
            </h3>
            <p className="font-outfit text-xs sm:text-sm text-[#64748B] leading-relaxed mb-4">
              Modular architecture engineered to handle millions of requests without costly rewrites.
            </p>
            <div className="font-syne font-extrabold text-xs text-[#0E7490]">
              🚀 Zero Technical Debt
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
