import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCode, FaPalette, FaChartLine, FaBullhorn, FaCloud, FaSearch } from 'react-icons/fa';

export default function ServicesListSection() {
  const servicesList = [
    {
      id: 'web-development',
      title: 'Web Development',
      desc: 'Crafting seamless, responsive websites and web applications that blend innovation with functionality, ensuring an unforgettable user journey.',
      icon: FaCode,
      color: 'bg-[#E0F2FE] text-[#0284C7]',
      features: ['React & Next.js Apps', 'Custom API Integration', 'Speed & Performance Optimization']
    },
    {
      id: 'ui-ux-design',
      title: 'UI/UX Design',
      desc: 'Elevating digital experiences through intuitive design, interactive prototypes, and user-centric interfaces that turn visitors into loyal customers.',
      icon: FaPalette,
      color: 'bg-[#E0F7F6] text-[#0E7490]',
      features: ['Design Systems', 'Interactive Wireframing', 'User Testing & Audits']
    },
    {
      id: 'digital-marketing',
      title: 'Digital Marketing',
      desc: 'Get more visibility, traffic and conversions with data-driven PPC campaigns, social media growth, and content distribution strategies.',
      icon: FaChartLine,
      color: 'bg-[#F0FDF4] text-[#16A34A]',
      features: ['Conversion Tracking', 'Audience Growth', 'ROI Driven Ad Campaigns']
    },
    {
      id: 'branding',
      title: 'Branding & Identity',
      desc: 'Build a unique identity that makes your business unforgettable, with cohesive style guides, logo suites, and typography guidelines.',
      icon: FaBullhorn,
      color: 'bg-[#FEF3C7] text-[#D97706]',
      features: ['Logo Design', 'Brand Guidelines', 'Packaging & Print Materials']
    },
    {
      id: 'cloud-infrastructure',
      title: 'Cloud & DevOps',
      desc: 'Scalable cloud infrastructure, CI/CD automation pipelines, and bulletproof server security to ensure 99.99% uptime.',
      icon: FaCloud,
      color: 'bg-[#EDE9FE] text-[#7C3AED]',
      features: ['AWS / Vercel Deployments', 'CI/CD Pipelines', 'Automated Backups & SSL']
    },
    {
      id: 'seo-growth',
      title: 'SEO & Search Growth',
      desc: 'Comprehensive search engine optimization and growth hacking strategies to rank on Google and attract high-intent organic traffic.',
      icon: FaSearch,
      color: 'bg-[#FCE7F3] text-[#DB2777]',
      features: ['Technical SEO Audits', 'Keyword Strategy', 'Schema & Metadata Tuning']
    },
  ];

  return (
    <section className="py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block mb-2">
            WHAT WE DO
          </span>
          <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
            Tailored Digital Services
          </h2>
          <p className="font-outfit text-[#475569] text-base mt-2">
            Explore our wide array of digital development, design, and growth solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesList.map((srv) => {
            const Icon = srv.icon;
            return (
              <div
                key={srv.id}
                className="p-8 rounded-2xl bg-white border border-gray-200/80 shadow-2xs hover:shadow-xl hover:border-[#0E7490]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl ${srv.color} flex items-center justify-center text-xl mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon />
                  </div>
                  <h3 className="font-syne font-bold text-xl text-[#0F172A] mb-3 group-hover:text-[#0E7490] transition-colors">
                    <Link to="/service-details">{srv.title}</Link>
                  </h3>
                  <p className="font-outfit text-sm text-[#64748B] leading-relaxed mb-6">
                    {srv.desc}
                  </p>

                  <ul className="space-y-2 font-outfit text-xs text-[#475569] mb-8 border-t border-gray-100 pt-4">
                    {srv.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#0E7490]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  to="/service-details"
                  className="inline-flex items-center justify-between w-full pt-4 border-t border-gray-100 font-syne font-bold text-xs text-[#0F172A] group-hover:text-[#0E7490] transition-colors uppercase tracking-wider"
                >
                  <span>Learn More</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
