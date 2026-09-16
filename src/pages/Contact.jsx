import React, { useState } from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaArrowRight,
  FaCheckCircle
} from 'react-icons/fa';
import Breadcrumb from '../components/Breadcrumb';
import FaqAccordion from '../components/FaqAccordion';

export default function Contact() {
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
    <div>
      <Breadcrumb
        title="Contact Us"
        subtitle="Let's build something remarkable together. Reach out for consultations, inquiries, or quotes."
      />

      <section className="py-24 bg-[#fffaf3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top 3 Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {/* Card 1 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm text-center hover:shadow-xl hover:border-[#fe5e3a] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#fe5e3a]/10 text-[#fe5e3a] flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-[#fe5e3a] group-hover:text-white transition-colors">
                <FaMapMarkerAlt />
              </div>
              <h4 className="font-syne font-bold text-xl text-gray-900 mb-2">Our Location</h4>
              <p className="font-outfit text-sm text-gray-600">
                123 Business Street, Suite 400<br />
                Tech Valley, CA 94016
              </p>
            </div>

            {/* Card 2 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm text-center hover:shadow-xl hover:border-[#fe5e3a] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#fe5e3a]/10 text-[#fe5e3a] flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-[#fe5e3a] group-hover:text-white transition-colors">
                <FaPhoneAlt />
              </div>
              <h4 className="font-syne font-bold text-xl text-gray-900 mb-2">Phone Number</h4>
              <p className="font-outfit text-sm text-gray-600 mb-1">
                <a href="tel:+1234567890" className="hover:text-[#fe5e3a] font-medium">+1 (234) 567-8900</a>
              </p>
              <p className="font-outfit text-xs text-gray-400">Mon - Fri: 9am - 6pm EST</p>
            </div>

            {/* Card 3 */}
            <div className="p-8 rounded-3xl bg-white border border-gray-200 shadow-sm text-center hover:shadow-xl hover:border-[#fe5e3a] transition-all duration-300 group">
              <div className="w-16 h-16 rounded-2xl bg-[#fe5e3a]/10 text-[#fe5e3a] flex items-center justify-center text-2xl mx-auto mb-6 group-hover:bg-[#fe5e3a] group-hover:text-white transition-colors">
                <FaEnvelope />
              </div>
              <h4 className="font-syne font-bold text-xl text-gray-900 mb-2">Email Address</h4>
              <p className="font-outfit text-sm text-gray-600 mb-1">
                <a href="mailto:info@growva.tech" className="hover:text-[#fe5e3a] font-medium">info@growva.tech</a>
              </p>
              <p className="font-outfit text-xs text-gray-400">Online 24/7 support response</p>
            </div>
          </div>

          {/* Contact Form & Image Row */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <img
                  src="/assets/images/contact/contactThumb3.jpg"
                  alt="Growva Office"
                  className="w-full h-[520px] object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-12 rounded-3xl border border-gray-200 shadow-xl">
                <span className="sub-badge">Send a Message</span>
                <h2 className="font-syne font-extrabold text-3xl sm:text-4xl text-[#0c0c0c] mt-2 mb-4">
                  Let's Discuss Your Next Big Project
                </h2>
                <p className="font-outfit text-gray-600 text-sm mb-8">
                  Fill out the form below and an engineer or project strategist will contact you within 24 hours.
                </p>

                {submitted ? (
                  <div className="p-6 rounded-2xl bg-[#eef8d8] border border-green-300 text-green-800 flex items-center gap-4">
                    <FaCheckCircle className="text-3xl text-green-600 shrink-0" />
                    <div>
                      <h5 className="font-syne font-bold text-lg">Thank You!</h5>
                      <p className="font-outfit text-xs text-green-700">
                        Your inquiry has been successfully sent. We'll be in touch shortly.
                      </p>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-syne font-bold text-gray-700 mb-1.5 uppercase">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-[#fffaf3] border border-gray-200 text-gray-800 font-outfit text-sm focus:outline-none focus:border-[#fe5e3a] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-syne font-bold text-gray-700 mb-1.5 uppercase">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-[#fffaf3] border border-gray-200 text-gray-800 font-outfit text-sm focus:outline-none focus:border-[#fe5e3a] transition-colors"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-syne font-bold text-gray-700 mb-1.5 uppercase">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-[#fffaf3] border border-gray-200 text-gray-800 font-outfit text-sm focus:outline-none focus:border-[#fe5e3a] transition-colors"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-syne font-bold text-gray-700 mb-1.5 uppercase">
                          Subject / Service
                        </label>
                        <input
                          type="text"
                          placeholder="Web Development / UI Design"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-2xl bg-[#fffaf3] border border-gray-200 text-gray-800 font-outfit text-sm focus:outline-none focus:border-[#fe5e3a] transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-syne font-bold text-gray-700 mb-1.5 uppercase">
                        Message *
                      </label>
                      <textarea
                        rows="5"
                        required
                        placeholder="Tell us about your project goals, timelines, and requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-2xl bg-[#fffaf3] border border-gray-200 text-gray-800 font-outfit text-sm focus:outline-none focus:border-[#fe5e3a] transition-colors resize-none"
                      ></textarea>
                    </div>

                    <button type="submit" className="w-full theme-btn-orange">
                      <span>Send Inquiry</span>
                      <FaArrowRight className="text-xs" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Embedded Map Visual */}
      <section className="h-96 w-full bg-gray-200 relative overflow-hidden">
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153166!3d-37.816279742021665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sus!4v1614749321287!5m2!1sen!2sus"
          className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
          loading="lazy"
        ></iframe>
      </section>

      <FaqAccordion />
    </div>
  );
}
