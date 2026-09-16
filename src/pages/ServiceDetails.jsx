import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaPhoneAlt, FaEnvelope, FaFileDownload } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

export default function ServiceDetails() {
  return (
    <div>
      <Breadcrumb
        title="Service Details"
        subtitle="Discover in-depth specifications and outcomes of our Web Development & Engineering services."
      />

      <section className="py-24 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content (Left 8 Cols) */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl overflow-hidden shadow-xl mb-10 border-4 border-white">
                <img
                  src="/assets/images/services/serviceThumb3.jpg"
                  alt="Service Details"
                  className="w-full h-[400px] object-cover"
                />
              </div>

              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0c0c0c] mb-6">
                Web Development & Custom Digital Engineering
              </h2>

              <p className="font-outfit text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                In today's fast-paced digital era, your website is the primary storefront and engine of your brand. At Growva, we build ultra-fast, highly reliable, and intuitive web solutions designed to captivate visitors and convert traffic into sustainable revenue.
              </p>

              <p className="font-outfit text-gray-700 text-base leading-relaxed mb-10">
                From responsive marketing websites to complex SaaS web applications, our engineering team utilizes the latest React ecosystems, state-of-the-art styling frameworks, and clean modular APIs.
              </p>

              <h3 className="font-syne font-bold text-2xl text-[#0c0c0c] mb-6">
                Key Benefits & Deliverables
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                  <FaCheckCircle className="text-[#fe5e3a] text-xl shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-syne font-bold text-base text-gray-900 mb-1">Blazing Fast Speed</h5>
                    <p className="font-outfit text-xs text-gray-600">Sub-second page loads and 90+ Google Lighthouse score.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                  <FaCheckCircle className="text-[#fe5e3a] text-xl shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-syne font-bold text-base text-gray-900 mb-1">Mobile First & Responsive</h5>
                    <p className="font-outfit text-xs text-gray-600">Flawless user experience across smartphones, tablets, & 4K displays.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                  <FaCheckCircle className="text-[#fe5e3a] text-xl shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-syne font-bold text-base text-gray-900 mb-1">Built-in SEO & Security</h5>
                    <p className="font-outfit text-xs text-gray-600">Strict SSL protocols, semantic meta tags, and structured data schemas.</p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-white border border-gray-200 shadow-sm flex items-start gap-3">
                  <FaCheckCircle className="text-[#fe5e3a] text-xl shrink-0 mt-0.5" />
                  <div>
                    <h5 className="font-syne font-bold text-base text-gray-900 mb-1">Scalable Architecture</h5>
                    <p className="font-outfit text-xs text-gray-600">Built to handle traffic spikes and integrate with third-party tools seamlessly.</p>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-3xl bg-[#ffe175]/30 border border-[#ffe175] mb-10">
                <h4 className="font-syne font-bold text-xl text-[#0c0c0c] mb-2">Need a custom feature?</h4>
                <p className="font-outfit text-sm text-gray-700 mb-4">
                  We create tailored workflows, custom dashboards, payment gateways, and multilingual integrations.
                </p>
                <Link to="/contact" className="theme-btn">
                  <span>Request Custom Consultation</span>
                  <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            {/* Sidebar (Right 4 Cols) */}
            <div className="lg:col-span-4 space-y-8">
              {/* Other Services Navigation */}
              <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
                <h4 className="font-syne font-bold text-xl text-[#0c0c0c] mb-6">
                  All Services
                </h4>
                <ul className="space-y-3 font-outfit text-sm">
                  <li>
                    <Link
                      to="/service-details"
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-[#fe5e3a] text-white font-syne font-bold"
                    >
                      <span>Web Development</span>
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details"
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-[#fffaf3] text-gray-800 hover:bg-[#fe5e3a] hover:text-white transition-colors"
                    >
                      <span>Content Creation</span>
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details"
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-[#fffaf3] text-gray-800 hover:bg-[#fe5e3a] hover:text-white transition-colors"
                    >
                      <span>Analytics & Reporting</span>
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-details"
                      className="flex items-center justify-between p-3.5 rounded-2xl bg-[#fffaf3] text-gray-800 hover:bg-[#fe5e3a] hover:text-white transition-colors"
                    >
                      <span>UX/UI Design</span>
                      <FaArrowRight className="text-xs" />
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Direct Contact Box */}
              <div className="p-8 rounded-3xl bg-[#0c0c0c] text-white shadow-xl">
                <h4 className="font-syne font-bold text-xl mb-3 text-white">Have a Project in Mind?</h4>
                <p className="font-outfit text-xs text-gray-400 mb-6">
                  Talk directly with our lead developers and receive a free comprehensive scope breakdown.
                </p>

                <div className="space-y-4 mb-8 font-outfit text-sm">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-[#fe5e3a] flex items-center justify-center text-white shrink-0">
                      <FaPhoneAlt className="text-xs" />
                    </span>
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase">Call Us</span>
                      <a href="tel:+1234567890" className="text-white hover:text-[#fe5e3a] font-bold">
                        +1 (234) 567-8900
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-full bg-[#fe5e3a] flex items-center justify-center text-white shrink-0">
                      <FaEnvelope className="text-xs" />
                    </span>
                    <div>
                      <span className="text-[10px] text-gray-400 block uppercase">Email Us</span>
                      <a href="mailto:info@growva.tech" className="text-white hover:text-[#fe5e3a] font-bold">
                        info@growva.tech
                      </a>
                    </div>
                  </div>
                </div>

                <Link to="/contact" className="w-full theme-btn-orange text-center">
                  <span>Get Started Now</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
