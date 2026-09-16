import React, { useState } from 'react';
import { FaLock, FaExternalLinkAlt, FaArrowRight, FaSearch } from 'react-icons/fa';

export default function ProjectsGrid({ projects, onResetFilters }) {
  const [imageErrors, setImageErrors] = useState({});

  const handleImageError = (id) => {
    setImageErrors((prev) => ({ ...prev, [id]: true }));
  };

  const getMshotsUrl = (url) =>
    `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=800&h=600`;

  if (projects.length === 0) {
    return (
      <div className="py-20 text-center bg-white rounded-3xl border border-gray-200/80 shadow-xs p-8">
        <div className="w-16 h-16 rounded-full bg-[#E0F7F6] text-[#0E7490] flex items-center justify-center mx-auto text-2xl mb-4">
          <FaSearch />
        </div>
        <h3 className="font-syne font-bold text-xl text-[#0F172A] mb-2">
          No websites found
        </h3>
        <p className="font-outfit text-sm text-[#64748B] max-w-md mx-auto mb-6">
          We couldn't find any projects matching your search. Try searching for another term or reset your filters.
        </p>
        <button
          onClick={onResetFilters}
          className="px-6 py-2.5 rounded-full bg-[#0E7490] text-white font-syne font-semibold text-xs hover:bg-[#086178] transition-colors"
        >
          Reset Filters
        </button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project) => (
        <a
          key={project.id}
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col bg-white border border-gray-200/90 rounded-2xl overflow-hidden shadow-2xs hover:shadow-2xl hover:border-[#0E7490]/50 transition-all duration-300 transform hover:-translate-y-1.5"
        >
          {/* Browser Top Window Chrome Bar */}
          <div className="bg-[#0F172A] px-4 py-2.5 flex items-center justify-between border-b border-slate-800">
            {/* Traffic Light Dots */}
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400 inline-block" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 inline-block" />
            </div>

            {/* Browser URL bar */}
            <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-slate-900 border border-slate-700/60 text-[11px] text-slate-300 font-mono max-w-[200px] truncate">
              <FaLock className="text-[9px] text-emerald-400 shrink-0" />
              <span className="truncate">{project.domain}</span>
            </div>

            {/* External icon */}
            <div className="text-slate-400 text-xs group-hover:text-cyan-400 transition-colors">
              <FaExternalLinkAlt className="text-[10px]" />
            </div>
          </div>

          {/* Screenshot Visual Preview */}
          <div className="relative aspect-[16/10] bg-slate-900 overflow-hidden">
            {imageErrors[project.id] || (!project.image && !getMshotsUrl(project.url)) ? (
              <div className="w-full h-full flex flex-col items-center justify-center p-6 bg-gradient-to-br from-slate-900 via-slate-800 to-[#0B4B5A] text-center">
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                  <span className="text-2xl text-cyan-300 font-syne font-bold">
                    {project.title.charAt(0)}
                  </span>
                </div>
                <h4 className="text-base font-syne font-bold text-white">
                  {project.title}
                </h4>
                <p className="text-xs text-slate-400 font-mono mt-1">
                  {project.domain}
                </p>
                <span className="mt-3 px-3 py-1 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-500/30 text-[10px] font-semibold">
                  Visit Live Website ↗
                </span>
              </div>
            ) : (
              <img
                src={project.image || getMshotsUrl(project.url)}
                alt={`${project.title} live website screenshot`}
                onError={() => handleImageError(project.id)}
                loading="lazy"
                className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
              />
            )}

            {/* Hover Overlay with CTA Button */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <span className="px-5 py-2.5 bg-[#0E7490] hover:bg-[#086178] text-white text-xs font-syne font-bold rounded-full shadow-lg flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                <span>Visit Live Website</span>
                <FaArrowRight className="text-[10px]" />
              </span>
            </div>
          </div>

          {/* Card Content Information */}
          <div className="p-6 flex-grow flex flex-col justify-between space-y-4">
            <div>
              <div className="flex items-center justify-between gap-2 mb-2.5">
                <span className="px-2.5 py-0.5 rounded-md bg-[#E0F7F6] text-[#0E7490] border border-[#0E7490]/20 text-[10px] font-syne font-bold uppercase tracking-wider">
                  {project.badge}
                </span>
                <span className="text-[11px] font-medium text-[#64748B]">
                  {project.category}
                </span>
              </div>

              <h3 className="font-syne font-bold text-lg text-[#0F172A] group-hover:text-[#0E7490] transition-colors leading-snug">
                {project.title}
              </h3>

              <p className="font-outfit text-xs text-[#64748B] leading-relaxed mt-2 line-clamp-2">
                {project.description}
              </p>
            </div>

            {/* Tags & Action Link */}
            <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-medium px-2 py-0.5 rounded bg-gray-100 text-gray-600"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              <span className="font-syne text-xs font-bold text-[#0E7490] group-hover:translate-x-1 transition-transform flex items-center gap-1 shrink-0 ml-2">
                Live ↗
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}
