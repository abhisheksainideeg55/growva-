import React, { useState } from 'react';
import TechStackMarquee from '../components/TechStackMarquee';
import ProjectCalculator from '../components/ProjectCalculator';

// Home Modular Components
import HeroSection from '../components/home/HeroSection';
import ServicesSection from '../components/home/ServicesSection';
import WhyGrowvaSection from '../components/home/WhyGrowvaSection';
import AboutSection from '../components/home/AboutSection';
import ProjectsSection from '../components/home/ProjectsSection';
import ProcessSection from '../components/home/ProcessSection';
import TestimonialsSection from '../components/home/TestimonialsSection';
import FaqSection from '../components/home/FaqSection';
import CtaBanner from '../components/home/CtaBanner';
import ProjectPreviewModal from '../components/home/ProjectPreviewModal';
import VideoStoryModal from '../components/home/VideoStoryModal';
import ContactModal from '../components/home/ContactModal';

// Testimonials data
const TESTIMONIALS = [
  {
    id: 1,
    name: 'Rahul Sharma',
    role: 'CEO, TechVision',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
    quote: 'Growva delivered a stunning website for our business. Their team is creative, responsive, and truly professional!',
    rating: 5,
  },
  {
    id: 2,
    name: 'Priya Verma',
    role: 'Marketing Head, BloomMart',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80',
    quote: 'Their digital marketing strategy helped us get 2x more traffic in just 3 months. Highly recommended!',
    rating: 5,
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Founder, PixelCraft',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
    quote: 'Great experience working with Growva. They understood our vision and turned it into something amazing.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Ananya Roy',
    role: 'Product Lead, NexusApp',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80',
    quote: 'The UI/UX design team brought fresh creativity and user-centric architecture that our users love!',
    rating: 5,
  },
];

// FAQs data
const FAQS = [
  {
    question: 'What services does Growva provide?',
    answer:
      'Growva is a full-service digital agency offering custom Web & App Development, UI/UX Design, Data-Driven Digital Marketing, and Strategic Brand Identity creation to help your business scale efficiently.',
  },
  {
    question: 'How long does a project take?',
    answer:
      'Timelines vary based on scope: branding or landing pages typically take 1–2 weeks, while full web applications or SaaS platforms range from 4–8 weeks with weekly milestone deliveries.',
  },
  {
    question: 'Do you work with startups?',
    answer:
      'Yes! We love partnering with early-stage startups as well as established enterprises. We provide agile MVPs, scalable architectures, and growth marketing strategies tailored for rapid scaling.',
  },
  {
    question: 'Do you provide post-launch support?',
    answer:
      'Absolutely. Every project includes a 30-day post-launch warranty, plus ongoing maintenance plans covering speed optimizations, security audits, and continuous feature iterations.',
  },
];

// Featured Projects data
const FEATURED_PROJECTS = [
  {
    id: 'witty-wolf',
    title: 'The Witty Wolf',
    category: 'Digital & Tech',
    badge: 'Creative Agency',
    domain: 'thewittywolf.com',
    url: 'https://thewittywolf.com',
    image: '/assets/images/portfolio/thewittywolf-Be92v8Au.png',
    description: 'Modern digital agency and creative branding solutions built for high digital impact, brand growth, and corporate identity.',
    tags: ['Branding', 'Web Design', 'Digital Agency'],
  },
  {
    id: 'nakshatrawala',
    title: 'Nakshatrawala',
    category: 'Services',
    badge: 'Astrology & Wellness',
    domain: 'nakshatrawala.in',
    url: 'https://nakshatrawala.in',
    image: '/assets/images/portfolio/nakshatra.png',
    description: 'Vedic astrology, horoscope analysis, and personalized online consultation platform with appointment booking.',
    tags: ['Astrology', 'Consultation', 'Vedic Sciences'],
  },
  {
    id: 'br-api',
    title: 'BR API Solutions',
    category: 'Digital & Tech',
    badge: 'API & Software',
    domain: 'brapisolutions.com',
    url: 'https://brapisolutions.com',
    image: '/assets/images/portfolio/brApi-B825iCUK.png',
    description: 'Scalable backend API development, software integrations, fintech connectivity, and enterprise cloud solutions.',
    tags: ['API Integration', 'Backend', 'Software'],
  },
  {
    id: 'tamanna-clinic',
    title: 'Tamanna Clinic & Laser Centre',
    category: 'Healthcare & Hospitality',
    badge: 'Healthcare & Laser Clinic',
    domain: 'tamannaclinicandlaserpilescentre.com',
    url: 'https://tamannaclinicandlaserpilescentre.com',
    image: '/assets/images/portfolio/tamana-C9icPUR6.png',
    description: 'Advanced laser surgical treatment, medical appointment booking, patient portal, and healthcare services website.',
    tags: ['Healthcare', 'Clinic', 'Medical Services'],
  },
];

export default function Home() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);

  return (
    <div className="bg-[#F8FAF9] text-[#0F172A] overflow-hidden">
      {/* 1. HERO SECTION */}
      <HeroSection
        onOpenContact={() => setShowContactModal(true)}
        onOpenVideo={() => setShowVideoModal(true)}
      />

      {/* 2. TECH STACK MARQUEE */}
      <TechStackMarquee />

      {/* 3. WHAT WE DO BEST (SERVICES SECTION) */}
      <ServicesSection />

      {/* 4. WHY GROWVA (Performance & Growth Advantage) */}
      <WhyGrowvaSection />

      {/* 5. ABOUT GROWVA SECTION */}
      <AboutSection onOpenVideo={() => setShowVideoModal(true)} />

      {/* 6. FEATURED PROJECTS */}
      <ProjectsSection
        projects={FEATURED_PROJECTS}
        onSelectProject={(proj) => setSelectedProject(proj)}
      />

      {/* 7. INTERACTIVE PROJECT SCOPE CALCULATOR */}
      <section className="py-20 bg-gradient-to-b from-[#F8FAF9] via-[#EBF7F7]/40 to-[#F8FAF9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ProjectCalculator onOpenContact={() => setShowContactModal(true)} />
        </div>
      </section>

      {/* 8. OUR PROCESS */}
      <ProcessSection onOpenContact={() => setShowContactModal(true)} />

      {/* 9. TESTIMONIALS */}
      <TestimonialsSection testimonials={TESTIMONIALS} />

      {/* 10. FAQ SECTION */}
      <FaqSection faqs={FAQS} />

      {/* 11. PRE-FOOTER CTA BANNER */}
      <CtaBanner onOpenContact={() => setShowContactModal(true)} />

      {/* PROJECT DETAILS PREVIEW MODAL */}
      <ProjectPreviewModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenContact={() => setShowContactModal(true)}
      />

      {/* VIDEO STORY MODAL */}
      <VideoStoryModal
        isOpen={showVideoModal}
        onClose={() => setShowVideoModal(false)}
      />

      {/* START A PROJECT CONTACT MODAL */}
      <ContactModal
        isOpen={showContactModal}
        onClose={() => setShowContactModal(false)}
      />
    </div>
  );
}
