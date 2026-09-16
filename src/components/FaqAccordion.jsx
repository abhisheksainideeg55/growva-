import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What services does Growva offer?",
      answer:
        "We provide comprehensive digital solutions including Custom Web Development, UI/UX Design, Content Strategy, Analytics & Reporting, SEO Optimization, and Cloud Deployment.",
    },
    {
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines depend on complexity. A basic website may take 1–2 weeks, while larger custom web applications can take 4–8 weeks. We always provide a clear roadmap and milestone timeline before starting.",
    },
    {
      question: "Do you work with startups and small businesses?",
      answer:
        "Yes, we specialize in partnering with startups and growing businesses. We design cost-effective, scalable architectures tailored to match your budget and growth trajectory.",
    },
    {
      question: "Do you provide support after project delivery?",
      answer:
        "Yes, we provide post-launch warranty, regular maintenance, server monitoring, and continuous feature updates to ensure your digital platform stays secure and high-performing.",
    },
    {
      question: "How can I get started with Growva?",
      answer:
        "Simply fill out our contact form or send us a message with your project vision. Our team will schedule an initial consultation, provide a free project estimate, and guide you every step of the way.",
    },
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="py-24 bg-[#fffaf3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* FAQ Accordion list on the Left */}
          <div className="lg:col-span-7">
            <div className="mb-8">
              <span className="text-[#126E89] text-xl font-medium">Frequently Asked Questions</span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0c0c0c] mt-2 mb-4 leading-tight">
                Everything You Need to Know
              </h2>
              <p className="font-outfit text-gray-600 text-base">
                Find clear answers to common questions about our development process, timelines, and services.
              </p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={idx}
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${
                      isOpen
                        ? 'border-[#126E89] bg-white shadow-md'
                        : 'border-gray-200/80 bg-white/70 hover:border-gray-300'
                    }`}
                  >
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 font-syne font-bold text-base sm:text-lg text-gray-900 focus:outline-none"
                    >
                      <span>{faq.question}</span>
                      <span
                        className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                          isOpen
                            ? 'bg-[#126E89] text-white rotate-180'
                            : 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        <FaChevronDown className="w-3.5 h-3.5" />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 font-outfit text-sm sm:text-base text-gray-600 leading-relaxed animate-in fade-in duration-200">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* FAQ Image Illustration on the Right */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative">
              <div className="w-full max-w-md rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-br from-[#ffe175]/30 to-[#fe5e3a]/20 p-2">
                <img
                  src="/assets/images/faq/faqThumb3.png"
                  alt="Growva FAQ Support"
                  className="w-full h-auto object-cover rounded-2xl"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/about/aboutThunb3.jpg';
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
