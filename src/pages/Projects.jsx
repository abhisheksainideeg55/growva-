import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb';
import ProjectsFilter from '../components/projects/ProjectsFilter';
import ProjectsGrid from '../components/projects/ProjectsGrid';
import ProjectsCtaBanner from '../components/projects/ProjectsCtaBanner';

const PORTFOLIO_PROJECTS = [
  {
    id: 1,
    title: 'The Witty Wolf',
    domain: 'thewittywolf.com',
    url: 'https://thewittywolf.com',
    category: 'Digital & Tech',
    badge: 'Creative Agency',
    image: '/assets/images/portfolio/thewittywolf-Be92v8Au.png',
    description: 'Modern digital agency and creative branding solutions built for high digital impact, brand growth, and corporate identity.',
    tags: ['Branding', 'Web Design', 'Digital Agency'],
  },
  {
    id: 2,
    title: 'Nakshatrawala',
    domain: 'nakshatrawala.in',
    url: 'https://nakshatrawala.in',
    category: 'Services',
    badge: 'Astrology & Wellness',
    image: null,
    description: 'Vedic astrology, horoscope analysis, and personalized online consultation platform with appointment booking.',
    tags: ['Astrology', 'Consultation', 'Vedic Sciences'],
  },
  {
    id: 3,
    title: 'BR API Solutions',
    domain: 'brapisolutions.com',
    url: 'https://brapisolutions.com',
    category: 'Digital & Tech',
    badge: 'API & Software',
    image: '/assets/images/portfolio/brApi-B825iCUK.png',
    description: 'Scalable backend API development, software integrations, fintech connectivity, and enterprise cloud solutions.',
    tags: ['API Integration', 'Backend', 'Software'],
  },
  {
    id: 4,
    title: 'Tamanna Clinic & Laser Centre',
    domain: 'tamannaclinicandlaserpilescentre.com',
    url: 'https://tamannaclinicandlaserpilescentre.com',
    category: 'Healthcare & Hospitality',
    badge: 'Healthcare & Laser Clinic',
    image: '/assets/images/portfolio/tamana-C9icPUR6.png',
    description: 'Advanced laser surgical treatment, medical appointment booking, patient portal, and healthcare services website.',
    tags: ['Healthcare', 'Clinic', 'Medical Services'],
  },
  {
    id: 5,
    title: 'The Golden Egg',
    domain: 'thegoldenegg.co.in',
    url: 'https://thegoldenegg.co.in',
    category: 'Business & Finance',
    badge: 'Enterprise Business',
    image: '/assets/images/portfolio/TheGolden-u7SRC1XC.png',
    description: 'Commercial business and retail services portal designed for optimized customer engagement and operations.',
    tags: ['Retail', 'Commercial', 'Enterprise'],
  },
  {
    id: 6,
    title: 'De Lorraine Paris',
    domain: 'delorraineparis.com',
    url: 'https://delorraineparis.com',
    category: 'Business & Finance',
    badge: 'Luxury & Beauty',
    image: null,
    description: 'Premium luxury beauty, cosmetics, and lifestyle brand digital showcase portal and e-commerce store.',
    tags: ['Luxury', 'Cosmetics', 'Lifestyle'],
  },
  {
    id: 7,
    title: 'My All Business Consultant',
    domain: 'myallbusinessconsultant.com',
    url: 'https://myallbusinessconsultant.com',
    category: 'Business & Finance',
    badge: 'Corporate Advisory',
    image: '/assets/images/portfolio/myallBussiones-atHnTvLq.png',
    description: 'Corporate business consulting, company registration, financial planning, audit, and legal compliance services.',
    tags: ['Consulting', 'Business Setup', 'Legal'],
  },
  {
    id: 8,
    title: 'Ranthambhore Bunglow',
    domain: 'ranthambhorebunglow.com',
    url: 'https://www.ranthambhorebunglow.com',
    category: 'Healthcare & Hospitality',
    badge: 'Luxury Resort & Stay',
    image: '/assets/images/portfolio/ranthambhor-CUN-jzOY.png',
    description: 'Luxury safari resort stay booking, wildlife tour packages, room reservations, and premium hospitality experiences.',
    tags: ['Resort', 'Tourism', 'Wildlife Safari'],
  },
  {
    id: 9,
    title: 'Good ITR',
    domain: 'gooditr.com',
    url: 'https://gooditr.com',
    category: 'Business & Finance',
    badge: 'FinTech & Tax',
    image: '/assets/images/portfolio/goodItr-CKBxvc0k.png',
    description: 'Online Income Tax Return (ITR) filing, GST compliance, tax saving advisory, and automated financial accounting.',
    tags: ['Tax Filing', 'FinTech', 'Accounting'],
  },
  {
    id: 10,
    title: 'Pareek Copier',
    domain: 'pareekcopier.com',
    url: 'https://pareekcopier.com',
    category: 'Services',
    badge: 'Office Automation',
    image: '/assets/images/portfolio/pareekcopier-DNXsysYQ.png',
    description: 'Commercial printing machinery, digital copiers, maintenance support, and office equipment supply services.',
    tags: ['Printing', 'Copiers', 'Office Tech'],
  },
  {
    id: 11,
    title: 'Net Secure Foundation',
    domain: 'netsecurefdn.org',
    url: 'https://netsecurefdn.org',
    category: 'Digital & Tech',
    badge: 'Cybersecurity NGO',
    image: '/assets/images/portfolio/netsecureFoundation-BuMMvLcO.png',
    description: 'Cyber hygiene training, digital safety awareness campaigns, public safety workshops, and cybersecurity foundation.',
    tags: ['Cybersecurity', 'NGO', 'Digital Safety'],
  },
  {
    id: 12,
    title: 'Null Cyber X',
    domain: 'nullcyberx.in',
    url: 'https://nullcyberx.in',
    category: 'Digital & Tech',
    badge: 'Cyber Defense & VAPT',
    image: '/assets/images/portfolio/nullcyberX-CVh3Y3O-.png',
    description: 'Vulnerability assessment, penetration testing (VAPT), red teaming, threat hunting, and security auditing.',
    tags: ['Penetration Testing', 'Security', 'VAPT'],
  },
  {
    id: 13,
    title: 'A One Taxi Service',
    domain: 'aonetaxiservice.com',
    url: 'https://aonetaxiservice.com',
    category: 'Services',
    badge: 'Travel & Cab Rental',
    image: '/assets/images/portfolio/taxi-CZuuJuZX.png',
    description: 'Outstation cab bookings, local taxi rentals, tour packages, and 24/7 airport transfer service portal.',
    tags: ['Taxi Service', 'Travel', 'Cab Rental'],
  },
  {
    id: 14,
    title: 'Krishna Infinity',
    domain: 'krishnainfinity.com',
    url: 'https://krishnainfinity.com',
    category: 'Digital & Tech',
    badge: 'IT & Enterprise',
    image: null,
    description: 'End-to-end software development, digital marketing, IT staffing, and enterprise digital solutions.',
    tags: ['Software', 'Digital Solutions', 'Enterprise'],
  },
];

const CATEGORIES = [
  'All',
  'Digital & Tech',
  'Business & Finance',
  'Healthcare & Hospitality',
  'Services',
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProjects = PORTFOLIO_PROJECTS.filter((project) => {
    const matchesCategory =
      activeCategory === 'All' || project.category === activeCategory;
    const query = searchQuery.toLowerCase().trim();
    const matchesSearch =
      !query ||
      project.title.toLowerCase().includes(query) ||
      project.domain.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.badge.toLowerCase().includes(query) ||
      project.tags.some((t) => t.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  const handleResetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
  };

  return (
    <div className="bg-[#F8FAF9] min-h-screen text-[#0F172A]">
      <Breadcrumb
        title="Our Client Portfolio"
        subtitle="Explore our curated showcase of live client websites, web applications, and enterprise platforms engineered for performance and growth."
      />

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Controls */}
        <ProjectsFilter
          categories={CATEGORIES}
          activeCategory={activeCategory}
          onSelectCategory={setActiveCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          onClearSearch={() => setSearchQuery('')}
          totalResults={PORTFOLIO_PROJECTS.length}
          filteredCount={filteredProjects.length}
        />

        {/* Portfolio Cards Grid */}
        <ProjectsGrid
          projects={filteredProjects}
          onResetFilters={handleResetFilters}
        />
      </section>

      {/* Bottom CTA Banner */}
      <ProjectsCtaBanner />
    </div>
  );
}
