import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheckCircle, FaArrowRight, FaArrowLeft, FaExternalLinkAlt, FaCalendarAlt, FaUser, FaTag } from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';

export default function ProjectDetails() {
  return (
    <div>
      <Breadcrumb
        title="Project Details"
        subtitle="FinTech Analytics & Real-Time Banking Platform Case Study"
      />

      <section className="py-24 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Content (8 Cols) */}
            <div className="lg:col-span-8">
              <div className="rounded-3xl overflow-hidden shadow-2xl mb-10 border-4 border-white">
                <img
                  src="/assets/images/services/serviceThumb3.jpg"
                  alt="Project Details Main Banner"
                  className="w-full h-[450px] object-cover"
                />
              </div>

              <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0c0c0c] mb-6">
                Revolutionizing Financial Analytics with Modern Web Technologies
              </h2>

              <p className="font-outfit text-gray-700 text-base sm:text-lg leading-relaxed mb-6">
                Our client required an enterprise-grade analytics dashboard that could visualize millions of concurrent transaction records with zero lag, while providing an intuitive, delightful user interface for retail and corporate banking clients.
              </p>

              <h3 className="font-syne font-bold text-2xl text-[#0c0c0c] mb-4">
                The Challenge
              </h3>
              <p className="font-outfit text-gray-700 text-base leading-relaxed mb-8">
                Legacy systems were plagued by slow database queries, unresponsive mobile layouts, and cluttered data tables. Users took over 4 minutes to perform routine financial audits, causing customer churn and support ticket overhead.
              </p>

              <h3 className="font-syne font-bold text-2xl text-[#0c0c0c] mb-4">
                Our Solution & Architecture
              </h3>
              <p className="font-outfit text-gray-700 text-base leading-relaxed mb-6">
                We rebuilt the entire client portal using React and Tailwind CSS, backed by a microservices architecture. We implemented virtualized data tables, optimistic UI updates, and WebSocket-powered live financial tickers.
              </p>

              {/* Key Results Metrics */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 my-10">
                <div className="p-6 rounded-2xl bg-white border border-gray-200 text-center shadow-sm">
                  <h4 className="font-syne font-black text-4xl text-[#fe5e3a] mb-1">350%</h4>
                  <p className="font-outfit text-xs text-gray-600 font-semibold uppercase">Speed Improvement</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-gray-200 text-center shadow-sm">
                  <h4 className="font-syne font-black text-4xl text-[#0c0c0c] mb-1">99.98%</h4>
                  <p className="font-outfit text-xs text-gray-600 font-semibold uppercase">Platform Uptime</p>
                </div>
                <div className="p-6 rounded-2xl bg-white border border-gray-200 text-center shadow-sm">
                  <h4 className="font-syne font-black text-4xl text-[#fe5e3a] mb-1">+48%</h4>
                  <p className="font-outfit text-xs text-gray-600 font-semibold uppercase">User Retention</p>
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-8 border-t border-gray-200">
                <Link
                  to="/project"
                  className="inline-flex items-center gap-2 font-syne font-bold text-sm text-gray-700 hover:text-[#fe5e3a] transition-colors"
                >
                  <FaArrowLeft className="text-xs" /> Previous Project
                </Link>
                <Link
                  to="/project"
                  className="inline-flex items-center gap-2 font-syne font-bold text-sm text-gray-700 hover:text-[#fe5e3a] transition-colors"
                >
                  Next Project <FaArrowRight className="text-xs" />
                </Link>
              </div>
            </div>

            {/* Right Meta Info Sidebar (4 Cols) */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm">
                <h4 className="font-syne font-bold text-xl text-[#0c0c0c] mb-6">
                  Project Information
                </h4>

                <ul className="space-y-4 font-outfit text-sm divide-y divide-gray-100">
                  <li className="pt-3 first:pt-0 flex items-center justify-between">
                    <span className="text-gray-500 flex items-center gap-2">
                      <FaUser className="text-[#fe5e3a]" /> Client:
                    </span>
                    <span className="font-semibold text-gray-900">Apex Global FinTech</span>
                  </li>
                  <li className="pt-3 flex items-center justify-between">
                    <span className="text-gray-500 flex items-center gap-2">
                      <FaTag className="text-[#fe5e3a]" /> Category:
                    </span>
                    <span className="font-semibold text-gray-900">Web Application</span>
                  </li>
                  <li className="pt-3 flex items-center justify-between">
                    <span className="text-gray-500 flex items-center gap-2">
                      <FaCalendarAlt className="text-[#fe5e3a]" /> Duration:
                    </span>
                    <span className="font-semibold text-gray-900">3 Months</span>
                  </li>
                  <li className="pt-3 flex items-center justify-between">
                    <span className="text-gray-500">Tech Stack:</span>
                    <span className="font-semibold text-gray-900">React, Tailwind, Node</span>
                  </li>
                </ul>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <Link to="/contact" className="w-full theme-btn-orange text-center">
                    <span>Start Similar Project</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
