import React from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';

export default function ProjectsFilter({
  categories,
  activeCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  onClearSearch,
  totalResults,
  filteredCount
}) {
  return (
    <div>
      {/* Top Filter & Search Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-5 py-2.5 rounded-full font-syne font-semibold text-xs sm:text-sm transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-[#0E7490] text-white shadow-md shadow-[#0E7490]/25'
                  : 'bg-white text-[#475569] border border-gray-200 hover:border-[#0E7490] hover:text-[#0E7490]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-72">
          <input
            type="text"
            placeholder="Search websites or tech..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white border border-gray-200 text-sm text-[#0F172A] placeholder-gray-400 focus:outline-none focus:border-[#0E7490] focus:ring-2 focus:ring-[#0E7490]/20 transition-all"
          />
          <FaSearch className="absolute left-4 top-3.5 text-xs text-gray-400" />
          {searchQuery && (
            <button
              onClick={onClearSearch}
              className="absolute right-3.5 top-3 text-xs text-gray-400 hover:text-gray-600"
              aria-label="Clear search"
            >
              <FaTimes />
            </button>
          )}
        </div>
      </div>

      {/* Results Count Banner */}
      <div className="flex items-center justify-between text-xs text-[#64748B] mb-8 font-medium">
        <span>
          Showing <strong className="text-[#0F172A]">{filteredCount}</strong> of{' '}
          {totalResults} live client websites
        </span>
        {activeCategory !== 'All' && (
          <button
            onClick={() => {
              onSelectCategory('All');
              onClearSearch();
            }}
            className="text-[#0E7490] hover:underline font-semibold"
          >
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
