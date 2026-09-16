import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function ProjectsSection({ projects, onSelectProject }) {
  return (
    <section id="projects" className="py-24 bg-[#F8FAF9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-xl">
            <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-widest block mb-2">
              OUR WORK
            </span>
            <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0F172A] tracking-tight">
              Featured Projects
            </h2>
            <p className="font-outfit text-[#475569] text-sm sm:text-base mt-3 leading-relaxed">
              Take a look at some of our recent live client websites. Each project is a result of
              collaboration, creativity and technical precision.
            </p>
          </div>
          <div>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 font-syne font-semibold text-sm text-[#0E7490] hover:text-[#086178] transition-colors group"
            >
              <span>View All 14 Projects</span>
              <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 4 Project Showcase Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 shadow-md hover:shadow-2xl transition-all duration-500 cursor-pointer flex flex-col h-[300px]"
            >
              {/* Browser Top Window Bar */}
              <div className="bg-[#0F172A] px-3.5 py-2 flex items-center justify-between border-b border-slate-800 z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-amber-400 inline-block" />
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                </div>
                <span className="text-[10px] font-mono text-slate-400 truncate max-w-[120px]">
                  {proj.domain}
                </span>
              </div>

              {/* Project Image Mockup */}
              <div className="relative flex-grow overflow-hidden bg-slate-950">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-4">
                  <div className="flex items-end justify-between gap-2">
                    <div>
                      <span className="text-[10px] font-syne font-bold text-cyan-300 uppercase tracking-wider block mb-0.5">
                        {proj.badge}
                      </span>
                      <h3 className="font-syne font-bold text-sm text-white group-hover:text-cyan-200 transition-colors truncate">
                        {proj.title}
                      </h3>
                    </div>

                    {/* Circle Arrow Action Button */}
                    <div className="w-7 h-7 rounded-full bg-[#0E7490] text-white flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-0.5 shadow-sm">
                      <FaArrowRight className="text-[9px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
