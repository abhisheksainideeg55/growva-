import React, { useState } from 'react';
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa';

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 4000);
  };

  return (
    <div className="bg-white rounded-3xl border border-gray-200/80 shadow-sm overflow-hidden grid grid-cols-1 lg:grid-cols-12">
      {/* Form Column */}
      <div className="lg:col-span-7 p-8 sm:p-12">
        <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block mb-2">
          GET IN TOUCH
        </span>
        <h3 className="font-syne font-bold text-2xl sm:text-3xl text-[#0F172A] mb-3">
          Send Us A Message
        </h3>
        <p className="font-outfit text-sm text-[#64748B] mb-8">
          Have an inquiry or project proposal? Fill out the form and we will get back to you shortly.
        </p>

        {submitted ? (
          <div className="p-8 rounded-2xl bg-[#E0F7F6] text-[#0E7490] flex items-center gap-4">
            <FaCheckCircle className="text-3xl flex-shrink-0" />
            <div>
              <h5 className="font-syne font-bold text-base">Message Sent Successfully!</h5>
              <p className="font-outfit text-xs mt-0.5">We will get back to you within 24 hours.</p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-syne font-semibold text-xs text-[#0F172A] mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="John Doe"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#0E7490] focus:ring-2 focus:ring-[#0E7490]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block font-syne font-semibold text-xs text-[#0F172A] mb-1.5">
                  Your Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="john@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#0E7490] focus:ring-2 focus:ring-[#0E7490]/20 outline-none transition-all"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block font-syne font-semibold text-xs text-[#0F172A] mb-1.5">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#0E7490] focus:ring-2 focus:ring-[#0E7490]/20 outline-none transition-all"
                />
              </div>
              <div>
                <label className="block font-syne font-semibold text-xs text-[#0F172A] mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#0E7490] focus:ring-2 focus:ring-[#0E7490]/20 outline-none transition-all"
                />
              </div>
            </div>

            <div>
              <label className="block font-syne font-semibold text-xs text-[#0F172A] mb-1.5">
                Your Message *
              </label>
              <textarea
                rows={4}
                required
                placeholder="Tell us about your project requirements..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl border border-gray-200 text-sm focus:border-[#0E7490] focus:ring-2 focus:ring-[#0E7490]/20 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full bg-[#0E7490] hover:bg-[#086178] text-white font-syne font-semibold text-sm transition-all shadow-md hover:-translate-y-0.5"
            >
              <span>Send Message</span>
              <FaArrowRight className="text-xs" />
            </button>
          </form>
        )}
      </div>

      {/* Visual Side Column */}
      <div className="lg:col-span-5 bg-gradient-to-br from-[#0B4B5A] to-[#088395] p-8 sm:p-12 text-white flex flex-col justify-between">
        <div className="space-y-6">
          <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-syne font-semibold uppercase tracking-wider">
            Growva HQ
          </span>
          <h4 className="font-syne font-bold text-2xl">
            Let's create something extraordinary together.
          </h4>
          <p className="font-outfit text-sm text-cyan-100 leading-relaxed">
            We are available for worldwide remote client projects, consultancies, and digital transformation initiatives.
          </p>
        </div>

        <div className="mt-8 rounded-2xl overflow-hidden border-2 border-white/20 shadow-lg">
          <img
            src="/assets/images/about_desk.jpg"
            alt="Growva Workspace"
            className="w-full h-48 object-cover"
          />
        </div>
      </div>
    </div>
  );
}
