import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTimes,
  FaArrowRight,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaEnvelope,
  FaPhoneAlt
} from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About Us', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function OffcanvasMenu({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/40 backdrop-blur-xs transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Slide Drawer */}
      <div className="relative z-10 w-full max-w-sm bg-white h-full shadow-2xl flex flex-col justify-between p-6 sm:p-8 animate-in slide-in-from-right duration-300">
        {/* Top Header */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <Link to="/" onClick={onClose} className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-white p-0.5 border border-gray-100 flex items-center justify-center shadow-xs">
                <img src="/growlogo.png" alt="Growva Logo" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="font-syne font-extrabold text-lg text-[#0F172A] tracking-wider uppercase leading-none">
                  GROWVA
                </span>
                <span className="text-[8px] font-bold text-[#0E7490] tracking-widest uppercase mt-0.5">
                  Engineered For Growth
                </span>
              </div>
            </Link>
            <button
              onClick={onClose}
              className="w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:text-black flex items-center justify-center transition-colors"
              aria-label="Close menu"
            >
              <FaTimes />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="mt-8 space-y-4">
            {NAV_LINKS.map((item) => (
              <Link
                key={item.label}
                to={item.to}
                onClick={onClose}
                className="flex items-center justify-between py-2 text-lg font-syne font-semibold text-[#0F172A] hover:text-[#0E7490] transition-colors border-b border-gray-50"
              >
                <span>{item.label}</span>
                <FaArrowRight className="text-xs text-gray-300 group-hover:text-[#0E7490]" />
              </Link>
            ))}
          </nav>
        </div>

        {/* Bottom CTA & Info */}
        <div className="pt-6 border-t border-gray-100 space-y-4">
          <Link
            to="/contact"
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full bg-[#0E7490] text-white font-syne font-semibold text-sm hover:bg-[#086178] transition-colors shadow-md"
          >
            <span>Start a Project</span>
            <FaArrowRight className="text-xs" />
          </Link>

          <div className="flex items-center justify-center gap-4 pt-2 text-[#64748B]">
            <a href="mailto:hello@growva.agency" className="hover:text-[#0E7490] text-sm flex items-center gap-1.5">
              <FaEnvelope className="text-xs" /> hello@growva.agency
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}