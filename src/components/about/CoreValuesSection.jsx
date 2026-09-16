import React from 'react';
import { FaLightbulb, FaUsers, FaAward, FaRocket } from 'react-icons/fa';

export default function CoreValuesSection() {
  return (
    <section className="py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block mb-2">
            OUR CORE VALUES
          </span>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0F172A]">
            What Drives Our Success
          </h2>
          <p className="font-outfit text-[#475569] mt-2">
            Guiding principles that define how we build solutions and collaborate with clients.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-8 rounded-2xl bg-[#F8FAF9] border border-gray-200/80 text-center hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#E0F2FE] text-[#0284C7] mx-auto flex items-center justify-center text-2xl mb-5">
              <FaLightbulb />
            </div>
            <h4 className="font-syne font-bold text-xl text-[#0F172A] mb-2">Innovation</h4>
            <p className="font-outfit text-sm text-[#64748B]">Pushing boundaries with modern architectures and forward-looking tools.</p>
          </div>

          <div className="p-8 rounded-2xl bg-[#F8FAF9] border border-gray-200/80 text-center hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#E0F7F6] text-[#0E7490] mx-auto flex items-center justify-center text-2xl mb-5">
              <FaUsers />
            </div>
            <h4 className="font-syne font-bold text-xl text-[#0F172A] mb-2">Collaboration</h4>
            <p className="font-outfit text-sm text-[#64748B]">Partnering closely as an extension of your own in-house team.</p>
          </div>

          <div className="p-8 rounded-2xl bg-[#F8FAF9] border border-gray-200/80 text-center hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#F0FDF4] text-[#16A34A] mx-auto flex items-center justify-center text-2xl mb-5">
              <FaAward />
            </div>
            <h4 className="font-syne font-bold text-xl text-[#0F172A] mb-2">Excellence</h4>
            <p className="font-outfit text-sm text-[#64748B]">Zero compromises on quality, performance, responsiveness, and security.</p>
          </div>

          <div className="p-8 rounded-2xl bg-[#F8FAF9] border border-gray-200/80 text-center hover:shadow-lg transition-all">
            <div className="w-14 h-14 rounded-2xl bg-[#FEF3C7] text-[#D97706] mx-auto flex items-center justify-center text-2xl mb-5">
              <FaRocket />
            </div>
            <h4 className="font-syne font-bold text-xl text-[#0F172A] mb-2">Growth</h4>
            <p className="font-outfit text-sm text-[#64748B]">Designing systems engineered from day one to scale seamlessly.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
