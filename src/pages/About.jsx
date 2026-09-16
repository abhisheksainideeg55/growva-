import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaCheckCircle, FaUsers, FaAward, FaLightbulb, FaRocket } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import BrandSlider from '../components/BrandSlider';

export default function About() {
  return (
    <div>
      <Breadcrumb
        title="About Us"
        subtitle="Empowering businesses through cutting-edge technology and human-centric digital experiences."
      />

      {/* Main About Section */}
      <section className="py-24 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Image Showcase */}
            <div className="lg:col-span-6">
              <div className="relative">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src="/assets/images/about/aboutThunb3.jpg"
                    alt="About Growva"
                    className="w-full h-[480px] object-cover"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/assets/images/services/serviceThumb3.jpg';
                    }}
                  />
                </div>
                {/* Floating Experience Badge */}
                <div className="absolute -bottom-6 -right-6 bg-[#fe5e3a] text-white p-6 rounded-3xl shadow-xl hidden sm:block">
                  <span className="font-syne font-black text-4xl block">3+</span>
                  <span className="font-outfit text-xs font-semibold uppercase tracking-wider">
                    Years Experience
                  </span>
                </div>
              </div>
            </div>

            {/* Right Story */}
            <div className="lg:col-span-6">
              <span className="sub-badge">Who We Are</span>
              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0c0c0c] leading-tight mt-2 mb-6">
                Power your <span className="text-[#fe5e3a]">business</span> with modern technology
              </h2>
              <p className="font-outfit text-gray-600 text-base sm:text-lg leading-relaxed mb-6">
                Growva is a forward-thinking digital agency and technology partner. We specialize in building responsive web applications, bespoke UI/UX designs, and data-driven marketing systems that help companies scale quickly and reliably.
              </p>

              <div className="space-y-3.5 mb-8 font-outfit text-gray-800">
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#fe5e3a] text-lg shrink-0" />
                  <span>Custom engineering tailored to your industry standards</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#fe5e3a] text-lg shrink-0" />
                  <span>Transparent communication and milestone-driven delivery</span>
                </div>
                <div className="flex items-center gap-3">
                  <FaCheckCircle className="text-[#fe5e3a] text-lg shrink-0" />
                  <span>Continuous support, security audits, and system scaling</span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Link to="/contact" className="theme-btn-orange">
                  <span>Get in Touch</span>
                  <FaArrowRight className="text-xs" />
                </Link>
                <Link to="/services" className="theme-btn-outline">
                  <span>Explore Services</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 lime-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="sub-badge">Our Core Values</span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0c0c0c] mt-2 mb-4">
              What Drives Our Success
            </h2>
            <p className="font-outfit text-gray-600">
              Guiding principles that define how we build solutions and collaborate with clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-8 rounded-3xl bg-white border border-gray-200 text-center shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#fe5e3a]/10 text-[#fe5e3a] mx-auto flex items-center justify-center text-2xl mb-5">
                <FaLightbulb />
              </div>
              <h4 className="font-syne font-bold text-xl text-gray-900 mb-2">Innovation</h4>
              <p className="font-outfit text-xs text-gray-600">
                Pioneering cutting-edge modern tools and forward-looking frameworks.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 text-center shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#0c0c0c]/10 text-[#0c0c0c] mx-auto flex items-center justify-center text-2xl mb-5">
                <FaUsers />
              </div>
              <h4 className="font-syne font-bold text-xl text-gray-900 mb-2">Client Focus</h4>
              <p className="font-outfit text-xs text-gray-600">
                Putting your real business ROI and user experience at the core.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 text-center shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#ffe175]/40 text-[#8a5133] mx-auto flex items-center justify-center text-2xl mb-5">
                <FaAward />
              </div>
              <h4 className="font-syne font-bold text-xl text-gray-900 mb-2">Quality Code</h4>
              <p className="font-outfit text-xs text-gray-600">
                Adhering to strict coding standards, test coverage, and clean design.
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-200 text-center shadow-sm">
              <div className="w-14 h-14 rounded-2xl bg-[#fe5e3a]/10 text-[#fe5e3a] mx-auto flex items-center justify-center text-2xl mb-5">
                <FaRocket />
              </div>
              <h4 className="font-syne font-bold text-xl text-gray-900 mb-2">Agility</h4>
              <p className="font-outfit text-xs text-gray-600">
                Fast execution cycles, continuous feedback loops, and rapid deployment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Slider */}
      <BrandSlider />
    </div>
  );
}
