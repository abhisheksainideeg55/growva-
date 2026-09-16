import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import AboutHeroSection from '../components/about/AboutHeroSection';
import CoreValuesSection from '../components/about/CoreValuesSection';

export default function About() {
  return (
    <div className="bg-[#F8FAF9]">
      <Breadcrumb
        title="About Growva"
        subtitle="Empowering businesses through cutting-edge technology and human-centric digital experiences."
      />

      {/* Main About Hero & Story Section */}
      <AboutHeroSection />

      {/* Core Values Section */}
      <CoreValuesSection />
    </div>
  );
}
