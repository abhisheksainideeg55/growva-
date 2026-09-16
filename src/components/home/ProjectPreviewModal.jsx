import React from 'react';
import { FaTimes, FaExternalLinkAlt } from 'react-icons/fa';

export default function ProjectPreviewModal({ project, onClose, onOpenContact }) {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-gray-100 text-gray-500 hover:text-black flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <FaTimes />
        </button>

        <div className="rounded-2xl overflow-hidden mb-6 h-64 bg-slate-900">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
        </div>

        <span className="text-[#0E7490] font-syne font-bold text-xs uppercase tracking-wider block mb-1">
          {project.badge || project.category}
        </span>
        <h3 className="font-syne font-bold text-2xl text-[#0F172A] mb-2">
          {project.title}
        </h3>
        {project.domain && (
          <p className="text-xs text-[#0E7490] font-mono mb-3">
            🌐 {project.domain}
          </p>
        )}
        <p className="font-outfit text-sm text-[#475569] leading-relaxed mb-6">
          {project.description}
        </p>

        {project.tags && (
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-gray-100 text-xs font-medium text-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        <div className="flex flex-wrap items-center gap-4">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-shimmer inline-flex items-center gap-2 px-6 py-3 rounded-full text-white font-syne font-semibold text-sm shadow-md"
            >
              <span>Visit Live Website</span>
              <FaExternalLinkAlt className="text-xs" />
            </a>
          )}
          <button
            onClick={() => {
              onClose();
              onOpenContact();
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white border border-gray-300 hover:border-[#0E7490] text-[#0F172A] hover:text-[#0E7490] font-syne font-semibold text-sm transition-colors"
          >
            <span>Request Similar Project</span>
          </button>
        </div>
      </div>
    </div>
  );
}
