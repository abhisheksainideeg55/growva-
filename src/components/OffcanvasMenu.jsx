
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FaTimes,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaAngleDown,
  FaArrowRight,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

const NAV_LINKS = [
  { label: 'Home', to: '/' },

  { label: 'About Us', to: '/about' },

  {
    label: 'Services',
    key: 'services',
    children: [
      { label: 'Services List', to: '/services' },
      { label: 'Service Details', to: '/service-details' },
    ],
  },

  {
    label: 'Projects',
    key: 'projects',
    children: [
      { label: 'Projects List', to: '/project' },
      { label: 'Project Details', to: '/project-details' },
    ],
  },

  {
    label: 'Blog',
    key: 'blog',
    children: [
      { label: 'Blog Articles', to: '/blog' },
      { label: 'Blog Details', to: '/blog-details' },
    ],
  },

  { label: 'Contact Us', to: '/contact' },
];

const SOCIALS = [
  { icon: FaFacebookF, label: 'Facebook' },
  { icon: FaTwitter, label: 'Twitter' },
  { icon: FaLinkedinIn, label: 'LinkedIn' },
  { icon: FaInstagram, label: 'Instagram' },
];

export default function OffcanvasMenu({ isOpen, onClose }) {
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [shouldRender, setShouldRender] = useState(isOpen);

  /* =========================
      DRAWER MOUNT / UNMOUNT
  ========================== */
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
    }
  }, [isOpen]);

  /* =========================
      BODY SCROLL LOCK
  ========================== */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  if (!shouldRender) return null;

  /* =========================
      SUBMENU TOGGLE
  ========================== */
  const toggleSubmenu = (menu) => {
    setOpenSubmenu(
      openSubmenu === menu ? null : menu
    );
  };

  /* =========================
      CLOSE ANIMATION
  ========================== */
  const handlePanelTransitionEnd = () => {
    if (!isOpen) {
      setShouldRender(false);
      setOpenSubmenu(null);
    }
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-hidden">

      {/* =================================
          BACKDROP
      ================================== */}
      <div
        className={`
          fixed
          inset-0
          bg-[#172033]/20
          backdrop-blur-sm
          transition-opacity
          duration-300
          ${
            isOpen
              ? 'opacity-100'
              : 'opacity-0'
          }
        `}
        onClick={onClose}
      />

      {/* =================================
          DRAWER
      ================================== */}
      <div
        onTransitionEnd={handlePanelTransitionEnd}
        className={`
          absolute
          right-0
          top-0
          z-10

          flex
          h-full
          w-full
          max-w-[390px]
          flex-col

          overflow-x-hidden
          overflow-y-hidden

          bg-white

          shadow-[-20px_0_60px_-25px_rgba(30,60,100,0.30)]

          transition-transform
          duration-300
          ease-out

          ${
            isOpen
              ? 'translate-x-0'
              : 'translate-x-full'
          }
        `}
      >

        {/* =================================
            SOFT BACKGROUND GLOWS
        ================================== */}

        <div
          className="
            pointer-events-none
            absolute
            -right-20
            top-10
            h-48
            w-48
            rounded-full
            bg-[#328CF5]/[0.07]
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none
            absolute
            -left-20
            bottom-20
            h-48
            w-48
            rounded-full
            bg-[#FF8A4C]/[0.06]
            blur-3xl
          "
        />

        {/* =================================
            HEADER
            Header does NOT scroll
        ================================== */}
        <div
          className="
            relative
            z-20
            flex
            flex-shrink-0
            items-center
            justify-between
            border-b
            border-[#E7EDF5]
            bg-white
            px-6
            pb-5
            pt-6
            sm:px-8
          "
        >

          {/* Logo */}
          <Link
            to="/"
            onClick={onClose}
            className="
              group
              flex
              min-w-0
              items-center
            "
          >
            <img
              src="/assets/images/logo/growlogo.png"
              alt="Growva Logo"
              className="
                h-10
                w-auto
                max-w-full
                object-contain
                transition-transform
                duration-300
                group-hover:scale-[1.02]
              "
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  '/assets/images/logo/itekHeaderLogo.png';
              }}
            />
          </Link>

          {/* Close Button */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="
              ml-4
              flex
              h-11
              w-11
              flex-shrink-0
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
              hover:bg-[#F3F8FF]
              hover:text-[#126E89]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-[#328CF5]/30
            "
          >
            <FaTimes className="h-4 w-4" />
          </button>
        </div>

        {/* =================================
            SCROLLABLE CONTENT
            ONLY THIS AREA SCROLLS
            Y-axis only
        ================================== */}
        <div
          className="
            relative
            z-10
            min-h-0
            flex-1
            overflow-x-hidden
            overflow-y-auto
            overscroll-contain
            px-6
            py-6
            sm:px-8
          "
        >

          {/* =================================
              MOBILE NAVIGATION
          ================================== */}
          <nav className="w-full">

            {NAV_LINKS.map((item) =>
              item.children ? (

                <div
                  key={item.key}
                  className="
                    w-full
                    border-b
                    border-[#EEF2F7]
                  "
                >

                  {/* Parent Menu */}
                  <button
                    type="button"
                    onClick={() =>
                      toggleSubmenu(item.key)
                    }
                    className="
                      group
                      flex
                      w-full
                      min-w-0
                      items-center
                      justify-between
                      gap-4
                      py-4
                      text-left
                      font-syne
                      text-[16px]
                      font-semibold
                      text-[#172033]
                      transition-colors
                      duration-200
                      hover:text-[#126E89]
                    "
                    aria-expanded={
                      openSubmenu === item.key
                    }
                  >

                    <span className="min-w-0 truncate">
                      {item.label}
                    </span>

                    <span
                      className="
                        flex
                        h-8
                        w-8
                        flex-shrink-0
                        items-center
                        justify-center
                        rounded-full
                        bg-[#F3F8FF]
                        transition-all
                        duration-300
                        group-hover:bg-[#EAF4FF]
                      "
                    >
                      <FaAngleDown
                        className={`
                          text-xs
                          text-[#328CF5]
                          transition-transform
                          duration-300
                          ${
                            openSubmenu === item.key
                              ? 'rotate-180'
                              : ''
                          }
                        `}
                      />
                    </span>

                  </button>

                  {/* Submenu */}
                  <div
                    className={`
                      overflow-hidden
                      transition-all
                      duration-300
                      ease-in-out
                      ${
                        openSubmenu === item.key
                          ? 'max-h-40 opacity-100'
                          : 'max-h-0 opacity-0'
                      }
                    `}
                  >

                    <div
                      className="
                        mb-3
                        ml-1
                        w-[calc(100%-4px)]
                        overflow-hidden
                        rounded-xl
                        border
                        border-[#E8EEF6]
                        bg-[#F8FBFF]
                        p-1.5
                      "
                    >

                      {item.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={onClose}
                          className="
                            group
                            flex
                            w-full
                            min-w-0
                            items-center
                            justify-between
                            gap-3
                            rounded-lg
                            px-4
                            py-3
                            font-outfit
                            text-sm
                            text-[#526071]
                            transition-all
                            duration-200
                            hover:bg-white
                            hover:text-[#126E89]
                            hover:shadow-sm
                          "
                        >

                          <span className="min-w-0 truncate">
                            {child.label}
                          </span>

                          <FaArrowRight
                            className="
                              flex-shrink-0
                              text-[9px]
                              opacity-0
                              -translate-x-2
                              transition-all
                              duration-200
                              group-hover:translate-x-0
                              group-hover:opacity-100
                            "
                          />

                        </Link>
                      ))}

                    </div>

                  </div>

                </div>

              ) : (

                <Link
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className="
                    group
                    flex
                    w-full
                    min-w-0
                    items-center
                    justify-between
                    gap-4
                    border-b
                    border-[#EEF2F7]
                    py-4
                    font-syne
                    text-[16px]
                    font-semibold
                    text-[#172033]
                    transition-colors
                    duration-200
                    hover:text-[#126E89]
                  "
                >

                  <span className="min-w-0 truncate">
                    {item.label}
                  </span>

                  <FaArrowRight
                    className="
                      flex-shrink-0
                      text-[10px]
                      text-[#328CF5]
                      opacity-0
                      -translate-x-2
                      transition-all
                      duration-200
                      group-hover:translate-x-0
                      group-hover:opacity-100
                    "
                  />

                </Link>

              )
            )}

          </nav>

          {/* =================================
              CONTACT INFO
          ================================== */}
          <div
            className="
              mt-8
              w-full
              rounded-2xl
              border
              border-[#E5EDF7]
              bg-[#F8FBFF]
              p-5
            "
          >

            <div className="mb-5 flex items-center justify-between gap-4">

              <div className="min-w-0">

                <span
                  className="
                    mb-1
                    block
                    font-outfit
                    text-xs
                    font-medium
                    uppercase
                    tracking-[0.15em]
                    text-[#328CF5]
                  "
                >
                  Get in touch
                </span>

                <h4
                  className="
                    font-syne
                    text-lg
                    font-bold
                    text-[#172033]
                  "
                >
                  Contact Info
                </h4>

              </div>

              <div
                className="
                  flex
                  h-10
                  w-10
                  flex-shrink-0
                  items-center
                  justify-center
                  rounded-full
                  bg-white
                  text-[#328CF5]
                  shadow-sm
                "
              >
                <FaEnvelope className="text-sm" />
              </div>

            </div>

            <ul className="space-y-4">

              {/* Address */}
              <li className="flex min-w-0 items-start gap-3">

                <span
                  className="
                    flex
                    h-9
                    w-9
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#328CF5]
                    shadow-sm
                  "
                >
                  <FaMapMarkerAlt className="text-sm" />
                </span>

                <span
                  className="
                    min-w-0
                    pt-1
                    font-outfit
                    text-sm
                    leading-6
                    text-[#667085]
                  "
                >
                  123 Business Street,
                  <br />
                  City, Country
                </span>

              </li>

              {/* Phone */}
              <li className="flex min-w-0 items-center gap-3">

                <span
                  className="
                    flex
                    h-9
                    w-9
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#328CF5]
                    shadow-sm
                  "
                >
                  <FaPhoneAlt className="text-xs" />
                </span>

                <a
                  href="tel:+1234567890"
                  className="
                    min-w-0
                    truncate
                    font-outfit
                    text-sm
                    text-[#526071]
                    transition-colors
                    hover:text-[#126E89]
                  "
                >
                  +1 (234) 567-8900
                </a>

              </li>

              {/* Email */}
              <li className="flex min-w-0 items-center gap-3">

                <span
                  className="
                    flex
                    h-9
                    w-9
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-full
                    bg-white
                    text-[#328CF5]
                    shadow-sm
                  "
                >
                  <FaEnvelope className="text-xs" />
                </span>

                <a
                  href="mailto:info@growva.tech"
                  className="
                    min-w-0
                    truncate
                    font-outfit
                    text-sm
                    text-[#526071]
                    transition-colors
                    hover:text-[#126E89]
                  "
                >
                  info@growva.tech
                </a>

              </li>

            </ul>

          </div>

          {/* =================================
              CTA
          ================================== */}
          <Link
  to="/contact"
  onClick={onClose}
  className="
    group
    mt-5
    flex
    w-full
    items-center
    justify-between
    rounded-full
    px-5
    py-3.5
    font-syne
    text-sm
    font-semibold
    text-white
    shadow-[0_8px_20px_-8px_rgba(18,110,137,0.40)]
    transition-all
    duration-300
    hover:-translate-y-0.5
bg-[#328CF5]
    hover:shadow-[0_12px_25px_-8px_rgba(50,140,245,0.45)]
  "
>

            <span>
              Start a Project
            </span>

            <span
              className="
                flex
                h-8
                w-8
                flex-shrink-0
                items-center
                justify-center
                rounded-full
                bg-white/20
                transition-all
                duration-300
                group-hover:bg-white/25
              "
            >
              <FaArrowRight
                className="
                  text-[10px]
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </span>

          </Link>

        </div>

        {/* =================================
            FOOTER / SOCIALS
            Footer does NOT scroll
        ================================== */}
        <div
          className="
            relative
            z-20
            flex-shrink-0
            border-t
            border-[#E7EDF5]
            bg-[#FBFCFE]
            px-6
            py-5
            sm:px-8
          "
        >

          <div className="flex items-center justify-between gap-4">

            <span
              className="
                flex-shrink-0
                font-outfit
                text-xs
                text-[#98A2B3]
              "
            >
              Follow us
            </span>

            <div className="flex flex-shrink-0 items-center gap-2">

              {SOCIALS.map(
                ({ icon: Icon, label }) => (
                  <a
                    key={label}
                    href="#"
                    aria-label={label}
                    className="
                      flex
                      h-9
                      w-9
                      flex-shrink-0
                      items-center
                      justify-center
                      rounded-full
                      border
                      border-[#E3EAF3]
                      bg-white
                      text-[#667085]
                      shadow-sm
                      transition-all
                      duration-300
                      hover:-translate-y-0.5
                      hover:border-[#328CF5]
                      hover:bg-[#328CF5]
                      hover:text-white
                      focus-visible:outline-none
                      focus-visible:ring-2
                      focus-visible:ring-[#328CF5]/30
                    "
                  >
                    <Icon className="h-3.5 w-3.5" />
                  </a>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}