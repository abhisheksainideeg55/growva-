import React from 'react';
import Breadcrumb from '../components/Breadcrumb';
import BlogListSection from '../components/blog/BlogListSection';

export default function Blog() {
  return (
    <div className="bg-[#F8FAF9]">
      <Breadcrumb
        title="Our News & Blog"
        subtitle="Insights, guides, and strategic perspectives on technology, design, and growth."
      />

      {/* Blog Articles & Filter Section */}
      <BlogListSection />
    </div>
  );
}
