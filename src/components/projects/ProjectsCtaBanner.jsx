import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaWhatsapp } from 'react-icons/fa';

export default function ProjectsCtaBanner() {
  return (
    <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl bg-gradient-to-r from-[#0B4B5A] via-[#0E6073] to-[#088395] p-8 sm:p-12 text-white overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-3 text-center md:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/15 text-xs font-syne font-semibold uppercase tracking-wider">
              Start Your Project
            </span>
            <h2 className="font-syne font-bold text-2xl sm:text-3xl lg:text-4xl text-white">
              Ready to Build Your Custom Website or App?
            </h2>
            <p className="font-outfit text-sm text-cyan-100 max-w-xl">
              Partner with Growva to transform your business with cutting-edge web design, scalable software engineering, and high-converting platforms.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              to="/contact"
              className="px-7 py-3.5 rounded-full bg-white text-[#0E7490] hover:bg-cyan-50 font-syne font-bold text-sm shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span>Get a Free Quote</span>
              <FaArrowRight className="text-xs" />
            </Link>
            <a
              href="https://api.whatsapp.com/send/?phone=919351764755&text=Hi%20Growva!%20I%20saw%20your%20portfolio%20and%20want%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-syne font-semibold text-sm shadow-lg hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <FaWhatsapp className="text-base" />
              <span>Chat on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
