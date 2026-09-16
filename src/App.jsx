import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import OffcanvasMenu from './components/OffcanvasMenu';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';
import WhatsAppWidget from './components/WhatsAppWidget';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ServiceDetails from './pages/ServiceDetails';
import Projects from './pages/Projects';
import ProjectDetails from './pages/ProjectDetails';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import Contact from './pages/Contact';

// Scroll to top upon route transition
function ScrollToTopOnRoute() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAF9] text-[#0F172A] font-outfit">
      <ScrollToTopOnRoute />

      {/* Header Navigation */}
      <Navbar onOpenMobileMenu={() => setMobileMenuOpen(true)} />

      {/* Mobile Drawer */}
      <OffcanvasMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />

      {/* Main Routed Content */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/index.php" element={<Home />} />

          <Route path="/about" element={<About />} />
          <Route path="/about.php" element={<About />} />

          <Route path="/services" element={<Services />} />
          <Route path="/services.php" element={<Services />} />
          <Route path="/service-details" element={<ServiceDetails />} />
          <Route path="/service-details.php" element={<ServiceDetails />} />

          <Route path="/project" element={<Projects />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/project.php" element={<Projects />} />
          <Route path="/project-details" element={<ProjectDetails />} />
          <Route path="/project-details.php" element={<ProjectDetails />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog.php" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />} />
          <Route path="/blog-details.php" element={<BlogDetails />} />

          <Route path="/contact" element={<Contact />} />
          <Route path="/contact.php" element={<Contact />} />

          {/* Fallback route */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons (WhatsApp & Scroll to Top side by side) */}
      <WhatsAppWidget />
      <BackToTop />
    </div>
  );
}
