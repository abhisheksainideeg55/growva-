import React, { useState } from 'react';
import { FaTimes, FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formSubmitted, setFormSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleContactSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      onClose();
      setFormData({ name: '', email: '', message: '' });
    }, 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:text-black flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        {formSubmitted ? (
          <div className="py-10 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto text-2xl">
              <FaCheckCircle />
            </div>
            <h3 className="font-syne font-bold text-2xl text-[#0F172A]">
              Thank You!
            </h3>
            <p className="font-outfit text-sm text-[#64748B]">
              Your request has been received. Our team will reach out within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleContactSubmit} className="space-y-4">
            <div>
              <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-wider block mb-1">
                START A PROJECT
              </span>
              <h3 className="font-syne font-bold text-2xl text-[#0F172A]">
                Let's Build Together
              </h3>
              <p className="font-outfit text-xs text-[#64748B] mt-1">
                Tell us about your project and we'll schedule a discovery call.
              </p>
            </div>

            <div className="space-y-3 pt-2">
              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0E7490] focus:ring-2 focus:ring-[#0E7490]/20 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                  Work Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0E7490] focus:ring-2 focus:ring-[#0E7490]/20 text-sm outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#0F172A] mb-1">
                  Project Details & Goals
                </label>
                <textarea
                  rows={3}
                  placeholder="Describe what you want to build or achieve..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#0E7490] focus:ring-2 focus:ring-[#0E7490]/20 text-sm outline-none transition-all resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="btn-shimmer w-full py-3.5 rounded-full text-white font-syne font-semibold text-sm shadow-md mt-2 flex items-center justify-center gap-2"
            >
              <span>Submit Inquiry</span>
              <FaArrowRight className="text-xs" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
