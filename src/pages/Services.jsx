import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaPaintBrush, FaChartBar, FaPenNib, FaCloud, FaSearchDollar } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import FaqAccordion from '../components/FaqAccordion';

export default function Services() {
  const servicesList = [
    {
      id: 'web-development',
      title: 'Web Development',
      desc: 'Crafting seamless, responsive websites and web applications that blend innovation with functionality, ensuring an unforgettable user journey.',
      icon: '/assets/images/services/serviceIcon3_1.png',
      features: ['React & Next.js Apps', 'Custom API Integration', 'Speed & Performance Optimization']
    },
    {
      id: 'content-creation',
      title: 'Content Creation',
      desc: "Compelling, creative content that tells your brand's story, designed to captivate, educate, and convert across all digital touchpoints.",
      icon: '/assets/images/services/serviceIcon3_2.png',
      features: ['Brand Storytelling', 'Technical Copywriting', 'Visual Graphics & Media']
    },
    {
      id: 'analytics-reporting',
      title: 'Analytics & Reporting',
      desc: 'Data-driven insights that empower you to make smarter business decisions and refine your digital strategy for sustained growth.',
      icon: '/assets/images/services/serviceIcon3_3.png',
      features: ['Conversion Tracking', 'Custom Dashboards', 'Audience Insights']
    },
    {
      id: 'ui-ux-design',
      title: 'UX/UI Design',
      desc: 'Elevating digital experiences through intuitive design, interactive prototypes, and user-centric interfaces that turn visitors into customers.',
      icon: '/assets/images/services/serviceIcon3_4.png',
      features: ['Design Systems', 'Interactive Wireframing', 'User Testing & Audits']
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & Infrastructure',
      desc: 'Scalable cloud architecture, continuous deployment pipelines, and bulletproof server security to ensure 99.99% uptime.',
      icon: '/assets/images/services/serviceIcon3_1.png',
      features: ['AWS / Vercel Deployments', 'CI/CD Pipelines', 'Automated Backups & SSL']
    },
    {
      id: 'seo-strategy',
      title: 'SEO & Growth Strategy',
      desc: 'Comprehensive search engine optimization and growth hacking strategies to rank high on Google and attract organic high-intent traffic.',
      icon: '/assets/images/services/serviceIcon3_2.png',
      features: ['On-Page & Technical SEO', 'Keyword Strategy', 'Schema & Metadata Tuning']
    },
  ];

  return (
    <div>
      <Breadcrumb
        title="Our Services"
        subtitle="End-to-end digital capabilities designed to accelerate your growth and outperform the competition."
      />

      <section className="py-24 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="sub-badge">What We Do</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0c0c0c] mt-2 mb-4">
              Tailored Digital Services
            </h2>
            <p className="font-outfit text-gray-600 text-base">
              Explore our wide array of digital development, design, and growth solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesList.map((srv) => (
              <div
                key={srv.id}
                className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#fe5e3a] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#fffaf3] border border-gray-200 flex items-center justify-center p-3 mb-6 group-hover:bg-[#fe5e3a] transition-colors">
                    <img
                      src={srv.icon}
                      alt={srv.title}
                      className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    />
                  </div>
                  <h3 className="font-syne font-bold text-xl text-[#0c0c0c] mb-3 group-hover:text-[#fe5e3a] transition-colors">
                    <Link to="/service-details">{srv.title}</Link>
                  </h3>
                  <p className="font-outfit text-sm text-gray-600 leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  <ul className="space-y-2 font-outfit text-xs text-gray-700 mb-8 border-t border-gray-100 pt-4">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#fe5e3a]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/service-details"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-gray-100 font-syne font-bold text-xs text-[#0c0c0c] group-hover:text-[#fe5e3a] transition-colors uppercase tracking-wider"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FaqAccordion />
    </div>
  );
}
