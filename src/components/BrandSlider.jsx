import React from 'react';
import {
  FaRocket,
  FaShoppingCart,
  FaStore,
  FaLaptopCode,
  FaCogs,
  FaGlobe,
  FaLightbulb,
  FaChartLine
} from 'react-icons/fa';

export default function BrandSlider() {
  const brands = [
    { name: 'Startup Client', icon: <FaRocket className="text-[#126E89]" /> },
    { name: 'E-commerce Brand', icon: <FaShoppingCart className="text-[#126E89]" /> },
    { name: 'Local Business', icon: <FaStore className="text-[#126E89]" /> },
    { name: 'Tech Startup', icon: <FaLaptopCode className="text-[#126E89]" /> },
    { name: 'Service Company', icon: <FaCogs className="text-[#126E89]" /> },
    { name: 'Digital Brand', icon: <FaGlobe className="text-[#126E89]" /> },
    { name: 'New Venture', icon: <FaLightbulb className="text-[#126E89]" /> },
    { name: 'Growing Business', icon: <FaChartLine className="text-[#126E89]" /> },
  ];

  return (
    <section className="py-20 bg-white overflow-hidden border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <h2 className="font-syne font-bold text-3xl sm:text-4xl text-[#0c0c0c] mb-4">
          Building Digital Solutions for Growing Businesses
        </h2>
        <p className="font-outfit text-gray-600 max-w-2xl mx-auto text-base">
          We partner with startups and small businesses to build scalable websites, apps, and digital products.
        </p>
      </div>

      <div className="flex w-max animate-marqueeFast hover:[animation-play-state:paused]">
        {/* Set 1 */}
        <div className="flex items-center space-x-6 shrink-0 pr-6">
          {brands.map((brand, idx) => (
            <div
              key={`b1-${idx}`}
              className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-[#126E89]/5 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#126E89] transition-all duration-300 group cursor-pointer"
            >
              <span className="text-xl transform group-hover:scale-110 transition-transform">
                {brand.icon}
              </span>
              <h5 className="font-syne font-bold text-base text-gray-800 group-hover:text-[#126E89] transition-colors whitespace-nowrap">
                {brand.name}
              </h5>
            </div>
          ))}
        </div>

        {/* Set 2 for loop */}
        <div className="flex items-center space-x-6 shrink-0 pr-6">
          {brands.map((brand, idx) => (
            <div
              key={`b2-${idx}`}
              className="flex items-center gap-3 px-8 py-5 rounded-2xl bg-[#126E89]/5 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-[#126E89] transition-all duration-300 group cursor-pointer"
            >
              <span className="text-xl transform group-hover:scale-110 transition-transform">
                {brand.icon}
              </span>
              <h5 className="font-syne font-bold text-base text-gray-800 group-hover:text-[#126E89] transition-colors whitespace-nowrap">
                {brand.name}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
