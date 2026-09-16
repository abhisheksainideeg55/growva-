import React from 'react';
import { Link } from 'react-router-dom';
import { FaCalendarAlt, FaUser, FaTag, FaArrowRight, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

export default function BlogDetails() {
  return (
    <div>
      <Breadcrumb
        title="Blog Details"
        subtitle="SEO for Small Businesses: A Beginner's Guide to Dominating Search"
      />

      <section className="py-24 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Main Article (8 Cols) */}
            <article className="lg:col-span-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl mb-8 border-4 border-white">
                <img
                  src="/assets/images/blog/blogThumb3_1.jpg"
                  alt="Blog Main"
                  className="w-full h-[420px] object-cover"
                />
              </div>

              {/* Meta details */}
              <div className="flex flex-wrap items-center gap-4 text-xs font-outfit text-gray-500 mb-6">
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                  <FaCalendarAlt className="text-[#fe5e3a]" /> September 25, 2024
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                  <FaUser className="text-[#fe5e3a]" /> By Alex Morgan
                </span>
                <span className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-200">
                  <FaTag className="text-[#fe5e3a]" /> SEO & Growth
                </span>
              </div>

              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0c0c0c] mb-6">
                Mastering Search Engine Visibility for High Growth Startups
              </h2>

              <p className="font-outfit text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Search Engine Optimization (SEO) remains one of the most sustainable, high-ROI client acquisition channels available to emerging businesses. When you construct your digital presence correctly from day one, organic visitors compound over time with virtually zero incremental ad spend.
              </p>

              <blockquote className="my-8 p-8 rounded-3xl bg-[#0c0c0c] text-white border-l-4 border-[#fe5e3a]">
                <p className="font-syne font-semibold text-lg italic mb-3">
                  "Great SEO isn't about tricking Google. It's about providing the highest quality answer to the user's question faster and more elegantly than anyone else."
                </p>
                <cite className="font-outfit text-xs text-[#fe5e3a] uppercase tracking-wider block font-bold">
                  — Growva Engineering Principle
                </cite>
              </blockquote>

              <h3 className="font-syne font-bold text-2xl text-[#0c0c0c] mb-4">
                1. Technical Performance and Core Web Vitals
              </h3>
              <p className="font-outfit text-gray-700 text-base leading-relaxed mb-6">
                Google prioritizes sites that load instantly. Ensure your images are in WebP format, code bundles are split into lightweight chunks, and server response times stay under 200 milliseconds.
              </p>

              <h3 className="font-syne font-bold text-2xl text-[#0c0c0c] mb-4">
                2. Search Intent and Keyword Clustering
              </h3>
              <p className="font-outfit text-gray-700 text-base leading-relaxed mb-8">
                Don't target single disconnected keywords. Build topic clusters where comprehensive pillar pages link to specific sub-topic answers, demonstrating topical authority to search spiders.
              </p>

              {/* Share and Tags */}
              <div className="flex flex-col sm:flex-row items-center justify-between py-6 border-y border-gray-200 gap-4 my-8">
                <div className="flex items-center gap-2">
                  <span className="font-syne font-bold text-sm text-gray-900">Tags:</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-outfit border border-gray-200">#SEO</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-outfit border border-gray-200">#WebDev</span>
                  <span className="px-3 py-1 bg-white rounded-full text-xs font-outfit border border-gray-200">#Growth</span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="font-syne font-bold text-sm text-gray-900">Share:</span>
                  <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#fe5e3a] hover:text-white transition-colors">
                    <FaFacebookF className="text-xs" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#fe5e3a] hover:text-white transition-colors">
                    <FaTwitter className="text-xs" />
                  </a>
                  <a href="#" className="w-8 h-8 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-700 hover:bg-[#fe5e3a] hover:text-white transition-colors">
                    <FaLinkedinIn className="text-xs" />
                  </a>
                </div>
              </div>
            </article>

            {/* Right Sidebar (4 Cols) */}
            <aside className="lg:col-span-4 space-y-8">
              {/* Author Box */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm text-center">
                <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-4 border-2 border-[#fe5e3a]">
                  <img
                    src="/assets/images/intro/introThumb2_1.png"
                    alt="Alex Morgan"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/about/aboutThunb3.jpg';
                    }}
                  />
                </div>
                <h4 className="font-syne font-bold text-lg text-gray-900 mb-1">Alex Morgan</h4>
                <p className="font-outfit text-xs text-[#fe5e3a] font-semibold mb-3">Head of Technical SEO</p>
                <p className="font-outfit text-xs text-gray-600 leading-relaxed">
                  Specializing in algorithmic search architecture, core web vitals, and scalable content funnels.
                </p>
              </div>

              {/* Related Posts */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
                <h4 className="font-syne font-bold text-xl text-[#0c0c0c] mb-6">
                  Related Articles
                </h4>
                <div className="space-y-4 font-outfit text-sm">
                  <div className="flex gap-4 items-center">
                    <img
                      src="/assets/images/blog/blogThumb3_2.jpg"
                      alt="Thumb"
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <span className="text-[10px] text-[#fe5e3a] font-bold block">October 14, 2024</span>
                      <Link to="/blog-details" className="font-syne font-bold text-gray-900 hover:text-[#fe5e3a] text-xs leading-tight block mt-1">
                        Top 5 Web Design Trends That Will Dominate
                      </Link>
                    </div>
                  </div>

                  <div className="flex gap-4 items-center pt-4 border-t border-gray-100">
                    <img
                      src="/assets/images/blog/blogThumb3_1.jpg"
                      alt="Thumb"
                      className="w-16 h-16 rounded-xl object-cover shrink-0"
                    />
                    <div>
                      <span className="text-[10px] text-[#fe5e3a] font-bold block">November 02, 2024</span>
                      <Link to="/blog-details" className="font-syne font-bold text-gray-900 hover:text-[#fe5e3a] text-xs leading-tight block mt-1">
                        How We Build High-Converting Web Platforms
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
