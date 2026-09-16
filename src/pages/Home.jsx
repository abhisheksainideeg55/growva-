import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaArrowRight,
  FaCheck,
  FaSearch,
  FaLightbulb,
  FaCode,
  FaRocket,
  FaCheckCircle
} from 'react-icons/fa';
import MarqueeSlider from '../components/MarqueeSlider';
import BrandSlider from '../components/BrandSlider';
import FaqAccordion from '../components/FaqAccordion';

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 4000);
  };

  return (
    <div className="pt-20">
      {/* 1. HERO / INTRO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:py-28 bg-[#fffaf3]">
        {/* Background shapes */}
        <div className="absolute top-10 left-5 w-72 h-72 bg-[#fe5e3a]/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-5 w-96 h-96 bg-[#ffe175]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              {/* Happy Clients Badge */}
              <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-xl bg-white border border-gray-200/80 shadow-sm mb-6 ">
                <span className="font-syne font-bold text-2xl  text-[#0c0c0c]">
                  2,000+
                </span>
                <span className="font-outfit text-sm font-medium text-[#126E89] leading-tight">
                  Happy<br />Clients
                </span>
              </div>

              <h1 className=" font-semibold text-4xl sm:text-5xl lg:text-6xl text-[#0c0c0c] leading-[1.15] mb-6">
                Drive innovation with{' '}
                <span className="text-[#126E89] relative inline-block">
                  advanced
                  <span className="absolute left-0 bottom-1.5 w-full h-2.5 bg-[#ffe175] -z-10 rounded-full opacity-60"></span>
                </span>{' '}
                technology
              </h1>

              <p className="font-outfit text-gray-600  leading-relaxed mb-8 max-w-xl">
                IT company that provides a seamless and intuitive experience for users.
                The design will focus on clear navigation, easy access, and powerful performance.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link to="/contact" className="theme-btn-orange">
                  <span>Get Started</span>
                  <FaArrowRight className="text-xs" />
                </Link>
                <Link to="/services" className="theme-btn-outline">
                  <span>Our Services</span>
                </Link>
              </div>
            </div>

            {/* Right Images / Shapes */}
            <div className="lg:col-span-6 order-1 lg:order-2 flex justify-center">
              <div className="relative w-full max-w-lg">
                {/* Floating Shape 1 */}
                <img
                  src="/assets/images/shape/introShape2_3.png"
                  alt="shape"
                  className="absolute -top-6 -left-6 w-20 h-20 animate-spinSlow z-20 pointer-events-none opacity-80"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />

                {/* Floating Shape 2 */}
                <img
                  src="/assets/images/shape/introShape2_4.png"
                  alt="shape"
                  className="absolute -bottom-6 -right-6 w-24 h-24 animate-float z-20 pointer-events-none opacity-80"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />

                {/* Image Grid / Overlap */}
                <div className="grid grid-cols-2 gap-4 relative z-10">
                  <div className="space-y-4">
                    <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                      <img
                        src="/assets/images/intro/introThumb2_1.png"
                        alt="Growva Innovation 1"
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/images/about/aboutThunb3.jpg';
                        }}
                      />
                    </div>
                    <div className="bg-[#126E89] p-5 rounded-3xl text-white shadow-lg">
                      <h4 className=" font-bold text-lg mb-1 text-white">Fast Delivery</h4>
                      <p className="font-outfit text-xs text-white">Agile sprints & dedicated engineering</p>
                    </div>
                  </div>

                  <div className="space-y-4 pt-8">
                    <div className="bg-[#126E89] p-5 rounded-3xl text-[#fff] shadow-lg">
                      <h4 className=" text-white font-bold text-lg mb-1">Top Quality</h4>
                      <p className="font-outfit text-xs ">100% bug-free clean modern code</p>
                    </div>
                    <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                      <img
                        src="/assets/images/intro/introThumb2_2.png"
                        alt="Growva Innovation 2"
                        className="w-full h-64 object-cover"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = '/assets/images/contact/contactThumb3.jpg';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. TEXT MARQUEE SLIDER */}
      <MarqueeSlider />

      {/* 3. SERVICES SECTION */}
      <section id="services" className="py-24 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Section Header */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
            <div className="max-w-xl">
              <span className="text-[#126E89] font-medium md:text-xl">What We Offers -</span>
              <h2 className="font-syne font-semibold text-3xl sm:text-3xl lg:text-4xl text-[#0c0c0c] mt-2 leading-tight">
                Our Services: <br />
                Tailored for Your Success
              </h2>
            </div>
            <div className="max-w-md">
              <p className="font-outfit text-gray-600 text-base mb-6">
                Engaging your audience where they spend the most time building brand loyalty,
                fostering community, and amplifying your digital presence across all channels.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#126E89] px-6 py-3 font-syne text-sm font-semibold text-[#126E89] transition-colors duration-200 hover:bg-[#126E89] hover:text-[#fffaf3] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#126E89]/40 focus-visible:ring-offset-2"
              >
                <span>Discover More</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>

          {/* Service Cards + Showcase Thumb */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Main Showcase Thumb Image */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
                <img
                  src="/assets/images/services/serviceThumb3.jpg"
                  alt="Growva Services Showcase"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/about/aboutThunb3.jpg';
                  }}
                />
              </div>
            </div>

            {/* 4 Interactive Service Cards */}
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Card 1 */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#126E89] transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#fffaf3] border border-gray-200 flex items-center justify-center p-3 mb-6 group-hover:bg-[#126E89] transition-colors">
                  <img
                    src="/assets/images/services/serviceIcon3_1.png"
                    alt="Web Development Icon"
                    className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </div>
                <h3 className="font-syne font-bold text-xl text-[#0c0c0c] mb-3 group-hover:text-[#126E89] transition-colors">
                  <Link to="/service-details">Web Development</Link>
                </h3>
                <p className="font-outfit text-sm text-gray-600 leading-relaxed mb-4">
                  Crafting seamless, responsive websites that blend innovation with functionality,
                  ensuring an unforgettable user experience.
                </p>
                <Link
                  to="/service-details"
                  className="inline-flex items-center gap-2 font-syne font-bold text-xs text-[#0c0c0c] group-hover:text-[#126E89] transition-colors uppercase tracking-wider"
                >
                  Read More <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

              {/* Card 2 */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#126E89] transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#fffaf3] border border-gray-200 flex items-center justify-center p-3 mb-6  transition-colors">
                  <img
                    src="/assets/images/services/serviceIcon3_2.png"
                    alt="Content Creation Icon"
                    className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </div>
                <h3 className="font-syne font-bold text-xl text-[#0c0c0c] mb-3 group-hover:text-[#126E89] transition-colors">
                  <Link to="/service-details">Content Creation</Link>
                </h3>
                <p className="font-outfit text-sm text-gray-600 leading-relaxed mb-4">
                  Compelling, creative content that tells your brand's story, designed
                  to captivate and convert across all digital platforms.
                </p>
                <Link
                  to="/service-details"
                  className="inline-flex items-center gap-2 font-syne font-bold text-xs text-[#0c0c0c] group-hover:text-[#126E89] transition-colors uppercase tracking-wider"
                >
                  Read More <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

              {/* Card 3 */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#126E89] transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#fffaf3] border border-gray-200 flex items-center justify-center p-3 mb-6 group-hover:bg-[#126E89] transition-colors">
                  <img
                    src="/assets/images/services/serviceIcon3_3.png"
                    alt="Analytics Icon"
                    className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/services/serviceIcon3_3.png.png';
                    }}
                  />
                </div>
                <h3 className="font-syne font-bold text-xl text-[#0c0c0c] mb-3 group-hover:text-[#126E89] transition-colors">
                  <Link to="/service-details">Analytics & Reporting</Link>
                </h3>
                <p className="font-outfit text-sm text-gray-600 leading-relaxed mb-4">
                  Data-driven insights that empower you to make smarter business decisions
                  and refine your digital strategy for sustained growth.
                </p>
                <Link
                  to="/service-details"
                  className="inline-flex items-center gap-2 font-syne font-bold text-xs text-[#0c0c0c] group-hover:text-[#126E89] transition-colors uppercase tracking-wider"
                >
                  Read More <FaArrowRight className="text-[10px]" />
                </Link>
              </div>

              {/* Card 4 */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl hover:border-[#126E89] transition-all duration-300 group">
                <div className="w-14 h-14 rounded-2xl bg-[#fffaf3] border border-gray-200 flex items-center justify-center p-3 mb-6 group-hover:bg-[#126E89] transition-colors">
                  <img
                    src="/assets/images/services/serviceIcon3_4.png"
                    alt="UX/UI Design Icon"
                    className="w-full h-full object-contain group-hover:brightness-0 group-hover:invert transition-all"
                  />
                </div>
                <h3 className="font-syne font-bold text-xl text-[#0c0c0c] mb-3 group-hover:text-[#126E89] transition-colors">
                  <Link to="/service-details">UX/UI Design</Link>
                </h3>
                <p className="font-outfit text-sm text-gray-600 leading-relaxed mb-4">
                  Elevating digital experiences through intuitive design and user-centric
                  solutions that turn visitors into loyal customers.
                </p>
                <Link
                  to="/service-details"
                  className="inline-flex items-center gap-2 font-syne font-bold text-xs text-[#0c0c0c] group-hover:text-[#126E89] transition-colors uppercase tracking-wider"
                >
                  Read More <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT / LIME SECTION WITH STATS */}
      <section className="py-24 lime-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-7">
              <h2 className=" font-semibold text-2xl sm:text-3xl lg:text-4xl text-[#0c0c0c] leading-tight mb-8">
                We prioritize your success above all else, ensuring you achieve your goals!
              </h2>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-3xl border border-gray-200">
                <div className="bg-[#126E89] text-white px-6 py-4 rounded-2xl text-center shrink-0">
                  <h3 className="font-syne font-semibold text-3xl text-white">100+</h3>
                  <p className="font-outfit text-xs font-semibold uppercase tracking-wider text-white/90">
                    Happy Clients
                  </p>
                </div>
                <div>
                  <p className="font-outfit text-gray-700 text-base leading-relaxed mb-4">
                    Unlock insights with our robust analytics tools. Monitor performance, track growth,
                    and make data-driven decisions that propel your business forward.
                  </p>
                  <Link to="/about" className="theme-btn-lime">
                    <span>Learn More</span>
                    <FaArrowRight className="text-xs" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/assets/images/about/aboutThunb3.jpg"
                  alt="Growva About Us"
                  className="w-full h-[400px] object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/services/serviceThumb3.jpg';
                  }}
                />
              </div>
            </div>
          </div>

          {/* 3 Counter Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-black/10">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 text-center shadow-sm">
              <h3 className="font-syne font-black text-5xl text-[#126E89] mb-2">18+</h3>
              <p className="font-syne font-bold text-base text-gray-500 uppercase tracking-wide">
                Team Members
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-200 text-center shadow-sm">
              <h3 className="font-syne font-black text-5xl text-[#126E89] mb-2">3+</h3>
              <p className="font-syne font-bold text-base text-gray-500 uppercase tracking-wide">
                Years of Excellence
              </p>
            </div>
            <div className="p-8 rounded-3xl bg-white border border-gray-200 text-center shadow-sm">
              <h3 className="font-syne font-black text-5xl text-[#126E89] mb-2">250+</h3>
              <p className="font-syne font-bold text-base text-gray-500 uppercase tracking-wide">
                Projects Completed
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. PRICING PLANS SECTION */}
      <section className="py-24 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[#126E89] font-medium">Pricing Plans</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0c0c0c] mt-2 mb-4">
              Payment Section
            </h2>
            <p className="font-outfit text-gray-600 text-base">
              Transparent pricing with clear features to empower your business without hidden costs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {/* Card 1: Basic */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-syne font-bold text-xl text-gray-900">Basic</h4>
                    <p className="text-xs text-gray-500 font-outfit">For small starters</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#fffaf3] border border-gray-200 p-2 flex items-center justify-center">
                    <img src="/assets/images/price/priceIcon3_1.png" alt="Basic Tier" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-syne text-2xl font-bold text-[#126E89]">$</span>
                    <span className="font-syne text-5xl font-black text-[#126E89]">59</span>
                    <span className="font-outfit text-sm text-gray-500">/ Package</span>
                  </div>
                </div>

                <ul className="space-y-4 font-outfit text-sm text-gray-700 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0c0c0c] flex items-center justify-center text-xs">
                      <FaCheck />
                    </span>
                    <span>Design Revisions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0c0c0c] flex items-center justify-center text-xs">
                      <FaCheck />
                    </span>
                    <span>SEO Optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0c0c0c] flex items-center justify-center text-xs">
                      <FaCheck />
                    </span>
                    <span>Normal Customer Support</span>
                  </li>
                </ul>
              </div>

              <Link to="/contact" className="w-full theme-btn text-center">
                <span>Choose Basic</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* Card 2: Standard (Popular) */}
            <div className="relative p-8 sm:p-10 rounded-3xl bg-[#fff] text-white border-2 border-[#126E89] shadow-2xl flex flex-col justify-between transform lg:-translate-y-2">
              <div className="absolute -top-3.5 right-8 bg-[#126E89] text-white px-4 py-1 rounded-full text-xs font-syne font-bold uppercase tracking-wider shadow-md">
                Popular
              </div>

              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-syne font-bold text-xl ">Standard</h4>
                    <p className="text-xs text-gray-500 font-outfit">For growing businesses</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 p-2 flex items-center justify-center">
                    <img src="/assets/images/price/priceIcon3_2.png" alt="Standard Tier" className="w-full h-full object-contain brightness-0 invert" />
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-syne text-2xl font-bold text-[#126E89]">$</span>
                    <span className="font-syne text-5xl font-black text-[#126E89]">99</span>
                    <span className="font-outfit text-sm text-gray-500">/ Package</span>
                  </div>
                </div>

                <ul className="space-y-4 font-outfit text-sm text-gray-300 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#126E89] text-white flex items-center justify-center text-xs">
                      <FaCheck />
                    </span>
                    <span>Unlimited Design Revisions</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#126E89] text-white flex items-center justify-center text-xs">
                      <FaCheck />
                    </span>
                    <span>Complete SEO Optimization</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-[#126E89] text-white flex items-center justify-center text-xs">
                      <FaCheck />
                    </span>
                    <span>Priority Customer Support</span>
                  </li>
                </ul>
              </div>

              <Link to="/contact" className="w-full theme-btn-orange text-center">
                <span>Choose Standard</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>

            {/* Card 3: Premium */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h4 className="font-syne font-bold text-xl text-gray-900">Premium</h4>
                    <p className="text-xs text-gray-500 font-outfit">For scale & enterprise</p>
                  </div>
                  <div className="w-12 h-12 rounded-2xl bg-[#fffaf3] border border-gray-200 p-2 flex items-center justify-center">
                    <img src="/assets/images/price/priceIcon3_3.png" alt="Premium Tier" className="w-full h-full object-contain" />
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="font-syne text-2xl font-bold text-[#126E89]">$</span>
                    <span className="font-syne text-5xl font-black text-[#126E89]">199</span>
                    <span className="font-outfit text-sm text-gray-500">/ Package</span>
                  </div>
                </div>

                <ul className="space-y-4 font-outfit text-sm text-gray-700 mb-8">
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0c0c0c] flex items-center justify-center text-xs">
                      <FaCheck />
                    </span>
                    <span>Custom Dedicated Architecture</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0c0c0c] flex items-center justify-center text-xs">
                      <FaCheck />
                    </span>
                    <span>Enterprise SEO & Speed Tuning</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-5 h-5 rounded-full bg-black/5 text-[#0c0c0c] flex items-center justify-center text-xs">
                      <FaCheck />
                    </span>
                    <span>24/7 Dedicated Support Agent</span>
                  </li>
                </ul>
              </div>

              <Link to="/contact" className="w-full theme-btn text-center">
                <span>Go Premium</span>
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. BRAND SLIDER SECTION */}
      <BrandSlider />

      {/* 7. WORK PROCESS SECTION (LIME BACKGROUND) */}
      <section className="py-24 lime-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[#126E89] font-medium text-xl">Work Process</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0c0c0c] mt-2 mb-4">
              Let's See How We Work
            </h2>
            <p className="font-outfit text-gray-600 text-base">
              A transparent 4-step framework from inception to deployment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
              <div className="w-14 h-14 rounded-2xl bg-[#126E89] text-white flex items-center justify-center text-2xl font-syne font-bold mb-6 group-hover:scale-110 transition-transform">
                <FaSearch />
              </div>
              <span className="font-syne font-bold text-xs text-[#126E89] uppercase tracking-wider block mb-2">Step 01</span>
              <h4 className="font-syne font-bold text-xl text-gray-900 mb-3">Discovery</h4>
              <p className="font-outfit text-sm text-gray-600 leading-relaxed">
                We understand your vision, target audience, and business requirements thoroughly.
              </p>
            </div>

            {/* Step 2 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
              <div className="w-14 h-14 rounded-2xl bg-[#0c0c0c] text-white flex items-center justify-center text-2xl font-syne font-bold mb-6 group-hover:scale-110 transition-transform">
                <FaLightbulb />
              </div>
              <span className="font-syne font-bold text-xs text-[#126E89] uppercase tracking-wider block mb-2">Step 02</span>
              <h4 className="font-syne font-bold text-xl text-gray-900 mb-3">Strategy</h4>
              <p className="font-outfit text-sm text-gray-600 leading-relaxed">
                Wireframing, UI/UX architecture, technical stack selection, and milestone scheduling.
              </p>
            </div>

            {/* Step 3 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
              <div className="w-14 h-14 rounded-2xl bg-[#ffe175] text-[#0c0c0c] flex items-center justify-center text-2xl font-syne font-bold mb-6 group-hover:scale-110 transition-transform">
                <FaCode />
              </div>
              <span className="font-syne font-bold text-xs text-[#126E89] uppercase tracking-wider block mb-2">Step 03</span>
              <h4 className="font-syne font-bold text-xl text-gray-900 mb-3">Development</h4>
              <p className="font-outfit text-sm text-gray-600 leading-relaxed">
                Pixel-perfect coding with React, clean state management, and modern responsive design.
              </p>
            </div>

            {/* Step 4 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 relative group">
              <div className="w-14 h-14 rounded-2xl bg-[#126E89] text-white flex items-center justify-center text-2xl font-syne font-bold mb-6 group-hover:scale-110 transition-transform">
                <FaRocket />
              </div>
              <span className="font-syne font-bold text-xs text-[#126E89] uppercase tracking-wider block mb-2">Step 04</span>
              <h4 className="font-syne font-bold text-xl text-gray-900 mb-3">Launch</h4>
              <p className="font-outfit text-sm text-gray-600 leading-relaxed">
                Rigorous testing, SEO configuration, cloud deployment, and continuous support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. FAQ ACCORDION SECTION */}
      <FaqAccordion />

      {/* 9. CONTACT FORM SECTION */}
      <section id="contact-form" className="py-24 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image */}
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/assets/images/contact/contactThumb3.jpg"
                  alt="Growva Contact Us"
                  className="w-full h-[450px] object-cover"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/assets/images/about/aboutThunb3.jpg';
                  }}
                />
              </div>
            </div>

            {/* Right Form */}
            <div className="lg:col-span-6">
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-xl">
                <span className="text-[#126E89] text-xl font-medium">Contact Us</span>
                <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0c0c0c] mt-2 mb-4">
                  Let's Get to Work
                </h2>
                <p className="font-outfit text-gray-600 text-base mb-8">
                  We’re thrilled to connect and explore the amazing possibilities that lie ahead for your brand!
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-[#eef8d8] border border-green-300 text-green-800 flex items-center gap-3">
                    <FaCheckCircle className="text-2xl text-green-600 shrink-0" />
                    <div>
                      <h5 className="font-syne font-bold text-base">Message Sent Successfully!</h5>
                      <p className="font-outfit text-xs text-green-700">
                        Thank you for reaching out. We will get back to you within 24 hours.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <input
                          type="text"
                          required
                          placeholder="Your Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-[#fffaf3] border border-gray-200 text-gray-800 font-outfit text-sm focus:outline-none focus:border-[#126E89] transition-colors"
                        />
                      </div>
                      <div>
                        <input
                          type="email"
                          required
                          placeholder="Your Email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-[#fffaf3] border border-gray-200 text-gray-800 font-outfit text-sm focus:outline-none focus:border-[#126E89] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <textarea
                        rows="4"
                        required
                        placeholder="Your Message / Project Details"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl bg-[#fffaf3] border border-gray-200 text-gray-800 font-outfit text-sm focus:outline-none focus:border-[#126E89] transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full theme-btn-orange">
                      <span>Submit Message</span>
                      <FaArrowRight className="text-xs" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. NEWS & BLOG SECTION (LIME BACKGROUND) */}
      <section className="py-24 lime-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-16 gap-6">
            <div>
                <span className="text-xl font-medium text-[#126E89]">News & Article</span>
              <h2 className="font-syne font-bold text-3xl sm:text-4xl lg:text-5xl text-[#0c0c0c] mt-2">
                Latest News <br /> and Blog
              </h2>
            </div>
            <Link to="/blog" className="theme-btn-lime">
              <span>View All Articles</span>
              <FaArrowRight className="text-xs" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Article 1 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-full sm:w-48 h-44 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="/assets/images/blog/blogThumb3_1.jpg"
                  alt="Blog 1"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="text-xs font-outfit font-semibold text-[#126E89] mb-2 block">
                  September 25, 2024
                </span>
                <h3 className="font-syne font-bold text-lg sm:text-xl text-gray-900 group-hover:text-[#126E89] transition-colors mb-3">
                  <Link to="/blog-details">SEO for Small Businesses: A Beginner's Guide</Link>
                </h3>
                <Link
                  to="/blog-details"
                  className="inline-flex items-center gap-2 font-syne font-bold text-xs text-[#0c0c0c] group-hover:text-[#126E89] transition-colors"
                >
                  Read Article <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>

            {/* Article 2 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-full sm:w-48 h-44 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="/assets/images/blog/blogThumb3_2.jpg"
                  alt="Blog 2"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="text-xs font-outfit font-semibold text-[#126E89] mb-2 block">
                  October 14, 2024
                </span>
                <h3 className="font-syne font-bold text-lg sm:text-xl text-gray-900 group-hover:text-[#126E89] transition-colors mb-3">
                  <Link to="/blog-details">Top 5 Web Design Trends That Will Dominate</Link>
                </h3>
                <Link
                  to="/blog-details"
                  className="inline-flex items-center gap-2 font-syne font-bold text-xs text-[#0c0c0c] group-hover:text-[#126E89] transition-colors"
                >
                  Read Article <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>

            {/* Article 3 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-full sm:w-48 h-44 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="/assets/images/blog/blogThumb3_1.jpg"
                  alt="Blog 3"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="text-xs font-outfit font-semibold text-[#126E89] mb-2 block">
                  November 02, 2024
                </span>
                <h3 className="font-syne font-bold text-lg sm:text-xl text-gray-900 group-hover:text-[#126E89] transition-colors mb-3">
                  <Link to="/blog-details">How We Build High-Converting Web Platforms</Link>
                </h3>
                <Link
                  to="/blog-details"
                  className="inline-flex items-center gap-2 font-syne font-bold text-xs text-[#0c0c0c] group-hover:text-[#126E89] transition-colors"
                >
                  Read Article <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>

            {/* Article 4 */}
            <div className="p-6 rounded-3xl bg-white border border-gray-200/80 shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col sm:flex-row gap-6 items-center">
              <div className="w-full sm:w-48 h-44 rounded-2xl overflow-hidden shrink-0">
                <img
                  src="/assets/images/blog/blogThumb3_2.jpg"
                  alt="Blog 4"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="text-xs font-outfit font-semibold text-[#126E89] mb-2 block">
                  December 18, 2024
                </span>
                <h3 className="font-syne font-bold text-lg sm:text-xl text-gray-900 group-hover:text-[#126E89] transition-colors mb-3">
                  <Link to="/blog-details">Why Your Website Isn't Converting & How to Fix It</Link>
                </h3>
                <Link
                  to="/blog-details"
                  className="inline-flex items-center gap-2 font-syne font-bold text-xs text-[#0c0c0c] group-hover:text-[#126E89] transition-colors"
                >
                  Read Article <FaArrowRight className="text-[10px]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. CTA BANNER SECTION */}
      <section className="py-24 bg-[#fff] text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row items-center justify-between pb-16 border-b border-white/15 gap-8">
            <h2 className="text-[#126E89] font-black text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase">
              LET'S TALK <br /> WITH US
            </h2>
            <Link to="/contact" className="theme-btn-orange text-base px-9 py-4">
              <span>Let's Work Together</span>
              <FaArrowRight className="text-sm" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-12">
            <div className="rounded-3xl overflow-hidden h-52 border-2 border-white/20">
              <img
                src="/assets/images/cta/ctaThumb3_1.jpg"
                alt="CTA 1"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/images/services/serviceThumb3.jpg';
                }}
              />
            </div>
            <div className="rounded-3xl overflow-hidden h-52 border-2 border-white/20">
              <img
                src="/assets/images/cta/ctaThumb3_2.jpg"
                alt="CTA 2"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/images/about/aboutThunb3.jpg';
                }}
              />
            </div>
            <div className="rounded-3xl overflow-hidden h-52 border-2 border-white/20">
              <img
                src="/assets/images/cta/ctaThumb3_3.jpg"
                alt="CTA 3"
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/images/contact/contactThumb3.jpg';
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
