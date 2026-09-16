import React, { useState } from 'react';
import {
  FaCalculator,
  FaArrowRight,
  FaCheckCircle,
  FaClock,
  FaCode,
  FaMobileAlt,
  FaShoppingCart,
  FaPalette,
  FaCloud
} from 'react-icons/fa';

const PROJECT_TYPES = [
  { id: 'webapp', label: 'Web Application', icon: FaCode, baseWeeks: 3 },
  { id: 'mobile', label: 'Mobile App (iOS & Android)', icon: FaMobileAlt, baseWeeks: 4 },
  { id: 'ecommerce', label: 'E-Commerce Platform', icon: FaShoppingCart, baseWeeks: 3 },
  { id: 'uiux', label: 'UI/UX & Product Design', icon: FaPalette, baseWeeks: 2 },
  { id: 'cloud', label: 'Cloud Architecture & DevOps', icon: FaCloud, baseWeeks: 2 },
];

const FEATURES = [
  { id: 'auth', label: 'User Auth & Role Management', weeks: 0.5 },
  { id: 'payments', label: 'Stripe & Payment Gateway', weeks: 0.5 },
  { id: 'ai', label: 'AI Integration & Automation', weeks: 1 },
  { id: 'admin', label: 'Custom Admin Dashboard', weeks: 1 },
  { id: 'seo', label: 'Technical SEO & Fast Edge CDN', weeks: 0.5 },
  { id: 'api', label: 'Third-party API Integrations', weeks: 0.5 },
];

export default function ProjectCalculator({ onOpenContact }) {
  const [selectedType, setSelectedType] = useState('webapp');
  const [selectedFeatures, setSelectedFeatures] = useState(['auth', 'admin', 'seo']);

  const toggleFeature = (id) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const currentType = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  const featureWeeks = selectedFeatures.reduce((acc, featId) => {
    const feat = FEATURES.find((f) => f.id === featId);
    return acc + (feat ? feat.weeks : 0);
  }, 0);

  const totalWeeks = Math.ceil(currentType.baseWeeks + featureWeeks);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-10 border border-gray-200/90 shadow-xl max-w-4xl mx-auto">
      <div className="text-center max-w-xl mx-auto mb-8">
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E0F7F6] text-[#0E7490] text-xs font-syne font-bold uppercase tracking-wider mb-2">
          <FaCalculator className="text-xs" /> Instant Scope Estimator
        </span>
        <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#0F172A]">
          Calculate Your Project Timeline
        </h3>
        <p className="font-outfit text-xs sm:text-sm text-[#64748B] mt-1.5">
          Select your requirements below to get an instant estimated turnaround and roadmap.
        </p>
      </div>

      {/* 1. Project Type Selector */}
      <div className="mb-8">
        <label className="block text-xs font-syne font-bold text-[#0F172A] uppercase tracking-wider mb-3">
          1. Select Project Type
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {PROJECT_TYPES.map((type) => {
            const Icon = type.icon;
            const isSelected = selectedType === type.id;
            return (
              <button
                key={type.id}
                type="button"
                onClick={() => setSelectedType(type.id)}
                className={`p-3.5 rounded-2xl border text-center transition-all flex flex-col items-center justify-center gap-2 ${
                  isSelected
                    ? 'border-[#0E7490] bg-[#E0F7F6]/60 text-[#0E7490] shadow-sm font-semibold'
                    : 'border-gray-200 hover:border-gray-300 text-gray-700 bg-[#F8FAF9]'
                }`}
              >
                <Icon className="text-xl" />
                <span className="font-syne text-xs leading-tight">{type.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Key Features Checkboxes */}
      <div className="mb-8">
        <label className="block text-xs font-syne font-bold text-[#0F172A] uppercase tracking-wider mb-3">
          2. Select Essential Capabilities & Features
        </label>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {FEATURES.map((feat) => {
            const isChecked = selectedFeatures.includes(feat.id);
            return (
              <button
                key={feat.id}
                type="button"
                onClick={() => toggleFeature(feat.id)}
                className={`px-4 py-3 rounded-xl border text-left flex items-center justify-between gap-3 text-xs font-medium transition-all ${
                  isChecked
                    ? 'border-[#0E7490] bg-white text-[#0F172A] shadow-2xs font-semibold'
                    : 'border-gray-200 bg-[#F8FAF9] text-[#64748B] hover:border-gray-300'
                }`}
              >
                <span>{feat.label}</span>
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                    isChecked ? 'bg-[#0E7490] text-white' : 'bg-gray-200 text-transparent'
                  }`}
                >
                  ✓
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Output Estimate & Action Card */}
      <div className="bg-gradient-to-r from-[#0F172A] via-[#1E293B] to-[#0B4B5A] rounded-2xl p-6 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
        <div className="flex items-center gap-4 text-center md:text-left">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 text-cyan-300 flex items-center justify-center text-xl shrink-0">
            <FaClock />
          </div>
          <div>
            <div className="text-xs text-slate-400 font-syne font-semibold uppercase tracking-wider">
              Estimated Delivery Time
            </div>
            <div className="font-syne font-extrabold text-2xl sm:text-3xl text-white">
              {totalWeeks} - {totalWeeks + 2} Weeks
            </div>
            <div className="text-xs text-cyan-300 font-outfit">
              Includes QA testing, deployment, and 30-day post-launch warranty.
            </div>
          </div>
        </div>

        <button
          onClick={onOpenContact}
          className="btn-shimmer px-7 py-3.5 rounded-full text-white font-syne font-bold text-sm shadow-md hover:shadow-xl transition-all shrink-0 flex items-center gap-2"
        >
          <span>Get Free Custom Proposal</span>
          <FaArrowRight className="text-xs" />
        </button>
      </div>
    </div>
  );
}
