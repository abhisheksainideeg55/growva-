import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FaqAccordion from '../components/FaqAccordion';
import ServicesListSection from '../components/services/ServicesListSection';

export default function Services() {
  return (
    <div className="bg-[#F8FAF9]">
      <Breadcrumb
        title="Our Services"
        subtitle="End-to-end digital capabilities designed to accelerate your growth and outperform the competition."
      />

      {/* Services List Grid */}
      <ServicesListSection />

      {/* FAQ Accordion */}
      <FaqAccordion />
    </div>
  );
}
