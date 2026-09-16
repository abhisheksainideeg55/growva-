import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaAngleDown,
  FaBars,
  FaArrowRight,
} from 'react-icons/fa';

const NAV = [
  { label: 'Home', to: '/' },

  {
    label: 'About Us',
    to: '/about',
  },

  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Services', to: '/services' },
      { label: 'Service Details', to: '/service-details' },
    ],
  },

  {
    label: 'Projects',
    to: '/project',
    children: [
      { label: 'Projects', to: '/project' },
      { label: 'Project Details', to: '/project-details' },
    ],
  },

  {
    label: 'Blog',
    to: '/blog',
    children: [
      { label: 'Blog', to: '/blog' },
      { label: 'Blog Details', to: '/blog-details' },
    ],
  },

  {
    label: 'Contact',
    to: '/contact',
  },
];

function NavItem({
  item,
  isActive,
  isOpen,
  onEnter,
  onLeave,
}) {
  const hasChildren = !!item.children;

  return (
    <div
      className="relative"
      onMouseEnter={hasChildren ? onEnter : undefined}
      onMouseLeave={hasChildren ? onLeave : undefined}
    >
      {/* =========================
          MAIN NAV ITEM
      ========================== */}
      {hasChildren ? (
        <button
          type="button"
          aria-expanded={isOpen}
          className={`
            group relative flex items-center gap-1.5
            rounded-full px-1 py-2
            font-syne text-[14px] font-semibold
            transition-all duration-300
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#328CF5]/30
            ${
              isActive
                ? 'text-[#126E89]'
                : 'text-[#172033] hover:text-[#126E89]'
            }
          `}
        >
          <span>{item.label}</span>

          <FaAngleDown
            className={`
              text-[10px]
              transition-transform duration-300
              ${
                isOpen
                  ? 'rotate-180 text-[#328CF5]'
                  : 'text-gray-500'
              }
            `}
          />

          {/* Animated underline */}
          <span
            className={`
              pointer-events-none
              absolute -bottom-0.5 left-0
              h-[2px]
              rounded-full
              bg-gradient-to-r
              from-[#328CF5]
              to-[#7C5CFF]
              transition-all duration-300
              ${
                isActive
                  ? 'w-full opacity-100'
                  : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-80'
              }
            `}
          />
        </button>
      ) : (
        <Link
          to={item.to}
          className={`
            group relative flex items-center
            rounded-full px-1 py-2
            font-syne text-[14px] font-semibold
            transition-all duration-300
            focus-visible:outline-none
            focus-visible:ring-2
            focus-visible:ring-[#328CF5]/30
            ${
              isActive
                ? 'text-[#126E89]'
                : 'text-[#172033] hover:text-[#126E89]'
            }
          `}
        >
          <span>{item.label}</span>

          {/* Animated underline */}
          <span
            className={`
              pointer-events-none
              absolute -bottom-0.5 left-0
              h-[2px]
              rounded-full
              bg-gradient-to-r
              from-[#328CF5]
              to-[#7C5CFF]
              transition-all duration-300
              ${
                isActive
                  ? 'w-full opacity-100'
                  : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-80'
              }
            `}
          />
        </Link>
      )}

      {/* =========================
          DROPDOWN
      ========================== */}
      {hasChildren && (
        <div
          className={`
            absolute left-1/2 top-full z-50
            mt-3 w-56
            -translate-x-1/2
            origin-top
            rounded-2xl
            border border-[#E6ECF5]
            bg-white/95
            p-2
            shadow-[0_20px_60px_-20px_rgba(30,60,100,0.25)]
            backdrop-blur-xl
            transition-all duration-200
            ${
              isOpen
                ? 'visible translate-y-0 scale-100 opacity-100'
                : 'invisible -translate-y-2 scale-95 opacity-0'
            }
          `}
        >
          {/* Small top accent */}
          <div
            className="
              absolute -top-1.5 left-1/2
              h-3 w-3
              -translate-x-1/2
              rotate-45
              border-l border-t
              border-[#E6ECF5]
              bg-white
            "
          />

          {item.children.map((child, index) => (
            <Link
              key={child.to}
              to={child.to}
              className="
                group flex items-center justify-between
                rounded-xl
                px-4 py-3
                font-outfit text-sm
                text-[#344054]
                transition-all duration-200
                hover:bg-[#F3F8FF]
                hover:text-[#126E89]
              "
            >
              <span>{child.label}</span>

              <FaArrowRight
                className="
                  text-[10px]
                  opacity-0
                  -translate-x-2
                  transition-all duration-200
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Navbar({ onOpenMobileMenu }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const location = useLocation();
  const closeTimer = useRef(null);

  /* =========================
      SCROLL EFFECT
  ========================== */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

      if (closeTimer.current) {
        clearTimeout(closeTimer.current);
      }
    };
  }, []);

  /* =========================
      ACTIVE ROUTE
  ========================== */
  const isActive = (item) => {
    if (item.to === '/') {
      return location.pathname === '/';
    }

    if (item.children) {
      return item.children.some((child) =>
        location.pathname.startsWith(child.to)
      );
    }

    return location.pathname.startsWith(item.to);
  };

  /* =========================
      DROPDOWN HANDLERS
  ========================== */
  const handleEnter = (key) => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
    }

    setOpenDropdown(key);
  };

  const handleLeave = () => {
    closeTimer.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <header
      className="
        fixed
        left-0
        right-0
        top-0
        z-50
        px-3
        pt-3
        sm:px-5
        lg:px-8
      "
    >
      {/* =========================
          FLOATING NAVBAR
      ========================== */}
      <div
        className={`
          mx-auto
          max-w-7xl
          rounded-2xl
          border
          transition-all
          duration-500
          ${
            isScrolled
              ? `
                border-[#DCE8F5]
                bg-white/95
                shadow-[0_15px_45px_-18px_rgba(30,60,100,0.30)]
                backdrop-blur-xl
              `
              : `
                border-white/80
                bg-white/85
                shadow-[0_10px_35px_-18px_rgba(30,60,100,0.18)]
                backdrop-blur-xl
              `
          }
        `}
      >
        <div
          className="
            relative
            flex
            h-[72px]
            items-center
            justify-between
            px-4
            sm:px-6
            lg:px-7
          "
        >
          {/* =========================
              SOFT BACKGROUND GLOW
          ========================== */}
          <div
            className="
              pointer-events-none
              absolute
              -left-10
              top-0
              h-24
              w-24
              rounded-full
              bg-[#328CF5]/[0.06]
              blur-3xl
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -right-10
              bottom-0
              h-24
              w-24
              rounded-full
              bg-[#FF8A4C]/[0.06]
              blur-3xl
            "
          />

          {/* =========================
              LOGO
          ========================== */}
          <div className="relative z-10 flex-shrink-0">
            <Link
              to="/"
              className="
                group
                flex
                items-center
                transition-transform
                duration-300
                hover:scale-[1.02]
              "
            >
              <img
                src="/assets/images/logo/growlogo.png"
                alt="Growva Logo"
                className="
                  h-10
                  w-auto
                  object-contain
                  object-center
                  sm:h-11
                  lg:h-12
                "
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    '/assets/images/logo/itekHeaderLogo.png';
                }}
              />
            </Link>
          </div>

          {/* =========================
              DESKTOP NAVIGATION
          ========================== */}
          <nav
            className="
              relative
              hidden
              items-center
              gap-7
              lg:flex
            "
          >
            {NAV.map((item) => (
              <NavItem
                key={item.to}
                item={item}
                isActive={isActive(item)}
                isOpen={openDropdown === item.to}
                onEnter={() => handleEnter(item.to)}
                onLeave={handleLeave}
              />
            ))}
          </nav>

          {/* =========================
              RIGHT ACTIONS
          ========================== */}
          <div
            className="
              relative
              z-10
              flex
              items-center
              gap-3
            "
          >
            {/* Desktop Contact Button */}
            <div className="hidden sm:block">
              <Link
                to="/contact"
                className="
                  group
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-[#328CF5]
                  hover:shadow-[0_12px_25px_-8px_rgba(50,140,245,0.45)]
                  py-2.5
                  pl-5
                  pr-4
                  font-syne
                  text-sm
                  font-semibold
                  text-white
                  shadow-[0_8px_20px_-8px_rgba(255,117,72,0.55)]
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  focus-visible:outline-none
                  focus-visible:ring-2
                  focus-visible:ring-[#FF7548]/30
                "
              >
                <span>Get Started</span>

                <FaArrowRight
                  className="
                    text-[11px]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={onOpenMobileMenu}
              className="
                flex
                h-11
                w-11
                items-center
                justify-center
                rounded-full
                border
                border-[#E3EAF3]
                bg-white
                text-[#172033]
                shadow-[0_5px_15px_-8px_rgba(30,60,100,0.30)]
                transition-all
                duration-300
                hover:border-[#328CF5]/30
                hover:bg-[#F4F8FF]
                hover:text-[#126E89]
                lg:hidden
              "
              aria-label="Open navigation menu"
            >
              <FaBars className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}