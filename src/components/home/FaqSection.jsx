import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaPlus, FaMinus } from 'react-icons/fa';

export default function FaqSection({ faqs }) {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section className="py-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column with Scribble & CTA */}
          <div className="lg:col-span-5 space-y-5">
            {/* Desk & Plant thumbnail with scribble */}
            <div className="relative mb-6">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white bg-white h-44">
                <img
                  src="/assets/images/about_desk.jpg"
                  alt="Got Questions?"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#0E7490]/20 to-transparent" />
              </div>

              {/* Hand-drawn scribble */}
              <div className="absolute -top-6 -right-2 z-20 flex flex-col items-center">
                <span className="font-caveat font-bold text-2xl text-[#0E7490] transform rotate-3">
                  Got Questions? We're Here to Help.
                </span>
                <svg
                  className="w-8 h-6 text-[#0E7490] transform rotate-12"
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
            </div>

            <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block">
              FREQUENTLY ASKED QUESTIONS
            </span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              Have Questions?
            </h2>
            <p className="font-outfit text-sm text-[#475569] leading-relaxed">
              Find quick answers to the most common questions about our services,
              process and more.
            </p>

            <div>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-[#0E7490] hover:bg-[#086178] text-white font-syne font-semibold text-sm transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                <span>View All FAQ's</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Expandable Accordions */}
          <div className="lg:col-span-7 space-y-3.5">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="p-2 bg-[#F8FAF9] rounded-2xl border border-gray-200/80 shadow-2xs overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-syne font-bold text-sm sm:text-base text-[#0F172A] hover:text-[#0E7490] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span>{faq.question}</span>
                    <span className="w-7 h-7 rounded-full bg-white border border-gray-200 text-[#0E7490] flex items-center justify-center flex-shrink-0 shadow-2xs">
                      {isOpen ? <FaMinus className="text-xs" /> : <FaPlus className="text-xs" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-4 px-6 pb-5 pt-1 text-xs sm:text-sm text-[#64748B] font-outfit leading-relaxed border-t border-gray-200/60">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
