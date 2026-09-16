import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaExternalLinkAlt } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'fintech-dashboard',
      title: 'FinTech Analytics & Banking Portal',
      category: 'webapp',
      categoryLabel: 'Web Application',
      image: '/assets/images/services/serviceThumb3.jpg',
      desc: 'Next-generation financial analytics dashboard with real-time portfolio tracking.',
    },
    {
      id: 'fashion-ecommerce',
      title: 'Luxury Apparel E-Commerce Store',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      image: '/assets/images/about/aboutThunb3.jpg',
      desc: 'High-converting headless Shopify and React storefront with custom 3D view.',
    },
    {
      id: 'health-mobile-app',
      title: 'MediCare Telehealth Design System',
      category: 'design',
      categoryLabel: 'UI/UX Design',
      image: '/assets/images/contact/contactThumb3.jpg',
      desc: 'Comprehensive patient portal UI/UX architecture and accessible design tokens.',
    },
    {
      id: 'ai-saas-platform',
      title: 'AI Content Generation Platform',
      category: 'webapp',
      categoryLabel: 'Web Application',
      image: '/assets/images/blog/blogThumb3_1.jpg',
      desc: 'Full-stack AI automation suite with subscription tier billing and usage limits.',
    },
    {
      id: 'real-estate-portal',
      title: 'Prime Estate Real Estate Marketplace',
      category: 'ecommerce',
      categoryLabel: 'E-Commerce',
      image: '/assets/images/blog/blogThumb3_2.jpg',
      desc: 'Interactive map property search engine with virtual tours and agent bookings.',
    },
    {
      id: 'crypto-wallet-ui',
      title: 'Nexus Web3 Crypto Wallet Interface',
      category: 'design',
      categoryLabel: 'UI/UX Design',
      image: '/assets/images/cta/ctaThumb3_1.jpg',
      desc: 'Minimalist dark-mode decentralized wallet with multi-chain swap flows.',
    },
  ];

  const filteredProjects =
    filter === 'all'
      ? projects
      : projects.filter((p) => p.category === filter);

  return (
    <div>
      <Breadcrumb
        title="Our Projects"
        subtitle="Explore our portfolio of successful digital transformations, web applications, and UI/UX designs."
      />

      <section className="py-24 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-16">
            {[
              { id: 'all', label: 'All Projects' },
              { id: 'webapp', label: 'Web Applications' },
              { id: 'ecommerce', label: 'E-Commerce' },
              { id: 'design', label: 'UI/UX Design' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-6 py-2.5 rounded-full font-syne font-bold text-xs sm:text-sm transition-all duration-300 ${
                  filter === tab.id
                    ? 'bg-[#fe5e3a] text-white shadow-md'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#fe5e3a]'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group rounded-3xl overflow-hidden bg-white border border-gray-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-64 overflow-hidden bg-gray-100">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-[#0c0c0c]/80 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-xs font-syne font-semibold">
                      {proj.categoryLabel}
                    </div>
                  </div>

                  <div className="p-7">
                    <h3 className="font-syne font-bold text-xl text-gray-900 group-hover:text-[#fe5e3a] transition-colors mb-3">
                      <Link to="/project-details">{proj.title}</Link>
                    </h3>
                    <p className="font-outfit text-sm text-gray-600 leading-relaxed mb-6">
                      {proj.desc}
                    </p>
                  </div>
                </div>

                <div className="px-7 pb-7 pt-0">
                  <Link
                    to="/project-details"
                    className="inline-flex items-center justify-between w-full pt-4 border-t border-gray-100 font-syne font-bold text-xs text-[#0c0c0c] group-hover:text-[#fe5e3a] transition-colors uppercase tracking-wider"
                  >
                    <span>View Case Study</span>
                    <FaArrowRight className="text-[10px]" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
