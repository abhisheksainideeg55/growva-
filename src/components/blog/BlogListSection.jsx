import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaSearch, FaCalendarAlt, FaUser } from 'react-icons/fa';

export default function BlogListSection() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const articles = [
    {
      id: 'seo-for-small-business',
      title: "SEO for Small Businesses: A Beginner's Guide to Dominating Search",
      category: 'SEO',
      date: 'September 25, 2024',
      author: 'Alex Morgan',
      image: '/assets/images/blog/blogThumb3_1.jpg',
      summary: 'Discover fundamental SEO techniques that help small enterprises capture local and global search traffic without massive ad budgets.',
    },
    {
      id: 'web-design-trends-2025',
      title: 'Top 5 Web Design Trends That Will Dominate Modern Interfaces in 2025',
      category: 'Design',
      date: 'October 14, 2024',
      author: 'Sarah Chen',
      image: '/assets/images/blog/blogThumb3_2.jpg',
      summary: 'From subtle micro-animations to glassmorphic UI cards and dark-mode aesthetics, see what leading digital brands are building.',
    },
    {
      id: 'high-converting-websites',
      title: 'How We Build High-Converting Web Platforms: The Complete Blueprint',
      category: 'Development',
      date: 'November 02, 2024',
      author: 'David Kumar',
      image: '/assets/images/blog/blogThumb3_1.jpg',
      summary: 'An inside look at our engineering workflow—combining UX empathy, lightning-quick load speeds, and persuasive copywriting.',
    },
    {
      id: 'fix-low-converting-website',
      title: "Why Your Website Isn't Converting and How to Fix It in 48 Hours",
      category: 'Marketing',
      date: 'December 18, 2024',
      author: 'Alex Morgan',
      image: '/assets/images/blog/blogThumb3_2.jpg',
      summary: 'Diagnose the 5 most common usability bottlenecks that cause prospective clients to bounce off your landing pages.',
    },
  ];

  const categories = ['All', 'SEO', 'Design', 'Development', 'Marketing'];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory =
      selectedCategory === 'All' || art.category === selectedCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      art.summary.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2 rounded-full font-syne font-bold text-xs transition-all duration-200 ${
                  selectedCategory === cat
                    ? 'bg-[#0E7490] text-white shadow-sm'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-[#0E7490]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-gray-200 text-sm font-outfit focus:outline-none focus:border-[#0E7490] transition-colors"
            />
            <FaSearch className="absolute left-4 top-3.5 text-gray-400 text-xs" />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArticles.map((art) => (
            <div
              key={art.id}
              className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="h-60 rounded-2xl overflow-hidden mb-6 bg-gray-100 relative">
                  <img
                    src={art.image}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 bg-[#0E7490] text-white px-3.5 py-1 rounded-full text-xs font-syne font-bold">
                    {art.category}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-xs font-outfit text-gray-500 mb-3">
                  <span className="flex items-center gap-1.5">
                    <FaCalendarAlt className="text-[#0E7490]" /> {art.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1.5">
                    <FaUser className="text-[#0E7490]" /> {art.author}
                  </span>
                </div>

                <h3 className="font-syne font-bold text-xl sm:text-2xl text-gray-900 group-hover:text-[#0E7490] transition-colors mb-3 leading-snug">
                  <Link to="/blog-details">{art.title}</Link>
                </h3>

                <p className="font-outfit text-sm text-gray-600 leading-relaxed mb-6">
                  {art.summary}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100">
                <Link
                  to="/blog-details"
                  className="inline-flex items-center gap-2 font-syne font-bold text-xs text-[#0c0c0c] group-hover:text-[#0E7490] transition-colors uppercase tracking-wider"
                >
                  <span>Read Full Article</span>
                  <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
