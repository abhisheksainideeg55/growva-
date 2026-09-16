import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import FaqAccordion from '../components/FaqAccordion';
import ContactInfoCards from '../components/contact/ContactInfoCards';
import ContactFormSection from '../components/contact/ContactFormSection';

export default function Contact() {
  return (
    <div className="bg-[#F8FAF9]">
      <Breadcrumb
        title="Contact Us"
        subtitle="Let's build something remarkable together. Reach out for consultations, inquiries, or project estimates."
      />

      <section className="py-24 bg-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top 3 Info Cards */}
          <ContactInfoCards />

          {/* Contact Form + Map/Image Container */}
          <ContactFormSection />
        </div>
      </section>

      {/* FAQ Accordion */}
      <FaqAccordion />
    </div>
  );
}
