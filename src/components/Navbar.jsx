import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaBars,
  FaArrowRight,
  FaSun,
  FaMoon
} from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Projects', to: '/projects' },
  { label: 'About', to: '/about' },
  { label: 'Blog', to: '/blog' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar({ onOpenMobileMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2.5 sm:py-3 border-b border-gray-100'
          : 'bg-transparent py-3 sm:py-4 lg:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-2 sm:gap-4">
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-2.5 group flex-shrink-0"
            aria-label="Growva Home"
          >
            <div className="">
              
           
              <div className='flex flex-col items-center'>
                <img
                src="/growva.png"
                alt="Growva Logo"
                className="h-8 sm:w-12 sm:h-12 object-contain"
              />
                <span className=" sm:hidden font-black text-[9px] text-[#0E7490] tracking-wider uppercase leading-none group-hover:text-[#0E7490] transition-colors">
                  GROWVA
                </span>
                <span className="sm:hidden text-[6px] font-medium tracking-widest uppercase mt-0.5 whitespace-nowrap">
                  Engineered For Growth
                </span>
              
            </div>
            </div>
            <div className=" hidden sm:block ">
              <div className='flex flex-col items-center'>
                <span className=" font-bold text-xl text-[#0E7490] tracking-wider uppercase leading-none group-hover:text-[#0E7490] transition-colors">
                  GROWVA
                </span>
                <span className="text-[7.5px] sm:text-[9.5px] font-medium tracking-widest uppercase mt-0.5 whitespace-nowrap">
                  Engineered For Growth
                </span>
              </div>
            </div>
          </Link>

          {/* DESKTOP NAV LINKS (Visible on lg and larger screens) */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.to);
              return (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`font-outfit text-sm xl:text-[15px] font-medium transition-all relative py-1 ${
                    active
                      ? 'text-[#0E7490] font-semibold'
                      : 'text-[#475569] hover:text-[#0E7490]'
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#0E7490] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* RIGHT ACTIONS */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            {/* Let's Talk CTA Button (Responsive padding & text) */}
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full bg-[#0E7490] hover:bg-[#086178] text-white font-syne font-semibold text-xs sm:text-sm transition-all duration-300 shadow-xs hover:shadow-md hover:shadow-[#0E7490]/20 hover:-translate-y-0.5 flex-shrink-0"
            >
              <span>Let's Talk</span>
              <FaArrowRight className="text-[10px] sm:text-xs" />
            </Link>

            

            {/* Mobile / Tablet Menu Button (Visible on < lg) */}
            <button
              onClick={onOpenMobileMenu}
              className="lg:hidden w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white text-[#0F172A] hover:text-[#0E7490] hover:border-[#0E7490]/40 flex items-center justify-center transition-all shadow-2xs hover:bg-gray-50 flex-shrink-0"
              aria-label="Open mobile navigation menu"
            >
              <FaBars className="text-base sm:text-lg" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}