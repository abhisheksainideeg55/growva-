import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaArrowRight,
  FaCheckCircle,
  FaPaperPlane
} from 'react-icons/fa';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 4000);
  };

  const services = [
    { name: 'Web Development', to: '/services' },
    { name: 'UI/UX Design', to: '/services' },
    { name: 'Digital Marketing', to: '/services' },
    { name: 'Brand Identity', to: '/services' },
    { name: 'Cloud & DevOps', to: '/services' },
    { name: 'Analytics & Reporting', to: '/services' },
  ];

  const quickLinks = [
    { name: 'Home', to: '/' },
    { name: 'About Growva', to: '/about' },
    { name: 'Featured Projects', to: '/projects' },
    { name: 'Our Process', to: '/#process' },
    { name: 'Client Testimonials', to: '/#testimonials' },
    { name: 'Contact Us', to: '/contact' },
  ];

  const socials = [
    { icon: FaWhatsapp, href: 'https://api.whatsapp.com/send/?phone=919351764755&text=Hi%20Growva!%20I%20am%20interested%20in%20discussing%20a%20project%20with%20your%20team.', label: 'WhatsApp' },
    { icon: FaFacebookF, href: 'https://facebook.com', label: 'Facebook' },
    { icon: FaInstagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: FaLinkedinIn, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FaTwitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: FaYoutube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: FaGithub, href: 'https://github.com', label: 'GitHub' },
  ];

  return (
    <footer className="relative bg-[#0F172A] text-white overflow-hidden pt-20 pb-10 border-t border-slate-800">
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#0E7490]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#06B6D4]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-slate-800/80">
          {/* Column 1: Brand & Bio (4 cols on lg) */}
          <div className="lg:col-span-4 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3 group">
              <div className="w-12 h-12 rounded-2xl bg-white p-1 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
                <img
                  src="/growlogo.png"
                  alt="Growva Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-extrabold text-2xl text-white tracking-wider uppercase">
                  GROWVA
                </span>
                <span className="text-[9px] font-semibold text-cyan-400 tracking-widest uppercase">
                  Engineered For Growth
                </span>
              </div>
            </Link>

            <p className="font-outfit text-sm text-slate-400 leading-relaxed max-w-sm">
              We engineer scalable digital platforms, modern web applications, and high-impact digital experiences that turn vision into measurable growth.
            </p>

            {/* Direct Contact Info */}
            <div className="space-y-2.5 pt-2 text-xs text-slate-300 font-outfit">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <FaMapMarkerAlt className="text-xs" />
                </div>
                <span>123 Innovation Way, Tech Hub, CA 94016</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <FaPhoneAlt className="text-xs" />
                </div>
                <a href="tel:+919351764755" className="hover:text-cyan-400 transition-colors">
                  +91 93517 64755 / +1 (234) 567-8900
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-emerald-900/60 text-emerald-400 flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp className="text-xs" />
                </div>
                <a
                  href="https://api.whatsapp.com/send/?phone=919351764755&text=Hi%20Growva!%20I%20am%20interested%20in%20discussing%20a%20project%20with%20your%20team."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors font-medium"
                >
                  WhatsApp: +91 93517 64755
                </a>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-slate-800 text-cyan-400 flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-xs" />
                </div>
                <a href="mailto:hello@growva.agency" className="hover:text-cyan-400 transition-colors">
                  hello@growva.agency
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Our Services (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-syne font-bold text-base text-white tracking-wide uppercase">
              Services
            </h4>
            <ul className="space-y-2.5 text-sm font-outfit text-slate-400">
              {services.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links (2.5 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-syne font-bold text-base text-white tracking-wide uppercase">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm font-outfit text-slate-400">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.to}
                    className="hover:text-cyan-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-700 group-hover:bg-cyan-400 transition-colors" />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter & Social (3 cols) */}
          <div className="lg:col-span-4 space-y-5">
            <h4 className="font-syne font-bold text-base text-white tracking-wide uppercase">
              Stay Connected
            </h4>
            <p className="font-outfit text-xs sm:text-sm text-slate-400 leading-relaxed">
              Subscribe to get monthly insights on technology innovations, UI trends, and business scaling.
            </p>

            {subscribed ? (
              <div className="p-3.5 rounded-xl bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 flex items-center gap-2.5 text-xs font-outfit">
                <FaCheckCircle className="text-cyan-400 text-base shrink-0" />
                <span>Thank you for subscribing! Check your inbox soon.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-4 pr-12 py-3 rounded-full bg-slate-800/90 border border-slate-700 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-sm text-white placeholder-slate-500 outline-none transition-all"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 rounded-full bg-[#0E7490] hover:bg-cyan-600 text-white flex items-center justify-center transition-colors shadow-sm"
                >
                  <FaPaperPlane className="text-xs" />
                </button>
              </form>
            )}

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="text-xs text-slate-500 uppercase tracking-wider block mb-3 font-syne font-semibold">
                Follow Growva
              </span>
              <div className="flex flex-wrap items-center gap-2.5">
                {socials.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-9 h-9 rounded-full bg-slate-800 border border-slate-700 hover:border-cyan-400 text-slate-300 hover:text-white hover:bg-[#0E7490] flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-0.5"
                    >
                      <Icon className="text-xs" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-outfit text-slate-500">
          <p>© {new Date().getFullYear()} Growva Technologies Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">
              Terms of Service
            </Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-cyan-400 transition-colors">
              Security
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
