import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services does Growva offer?",
      answer:
        "We provide comprehensive digital solutions including Custom Web & App Development, UI/UX Design, Strategic Brand Identity, Analytics & Growth Marketing, and Scalable Cloud Infrastructure.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines depend on complexity. A high-converting landing page takes 1–2 weeks, while larger custom web applications take 4–8 weeks. We always provide a clear roadmap and milestone timeline before starting.",
    },
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "Yes! We specialize in partnering with startups and growing businesses. We design cost-effective, scalable architectures tailored to match your budget and growth trajectory.",
    },
    {
      question: "Do you provide support after project delivery?",
      answer:
        "Yes, we provide 30-day post-launch warranty, regular maintenance, speed monitoring, and continuous feature updates to ensure your digital platform stays secure and high-performing.",
    },
    {
      question: "How can I get started with Growva?",
      answer:
        "Simply click 'Let's Talk' or fill out our contact form. Our team will schedule an initial discovery call, provide a free project estimate, and guide you every step of the way.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* FAQ Accordion list on the Left */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block mb-2">
                FREQUENTLY ASKED QUESTIONS
              </span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0F172A] leading-tight">
                Everything You Need to Know
              </h2>
              <p className="font-outfit text-[#475569] text-base mt-2">
                Find clear answers to common questions about our development process, timelines, and services.
              </p>
            </div>

            <div className="space-y-3.5">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden p-2 ${
                      isOpen
                        ? 'border-[#0E7490] bg-[#F8FAF9] shadow-sm'
                        : ' bg-white border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full text-left px-6 py-4.5 flex items-center justify-between gap-4 font-syne font-bold text-sm sm:text-base text-[#0F172A] focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? 'bg-[#0E7490] text-white rotate-180'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <FaChevronDown className="w-3 h-3" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 pt-1 font-outfit text-xs sm:text-sm text-[#64748B] leading-relaxed border-t border-gray-100/60">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQ Image on the Right */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/assets/images/about_desk.jpg"
                  alt="Growva FAQ Support"
                  className="w-full h-80 object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
