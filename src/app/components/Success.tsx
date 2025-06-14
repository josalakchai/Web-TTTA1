'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const categories = ['All Projects', 'Web Development', 'AI & ML', 'Social Impact', 'Startups'];

const projects = [
  {
    category: 'AI & ML',
    title: 'FarmTech: AI-Powered Crop Management',
    author: 'Maria Rodriguez, AI Engineer & Project Lead',
    description: 'An intelligent system that uses computer vision to detect plant diseases and recommend treatments to small-scale farmers.',
    impact: 'Helping 200+ local farmers increase crop yields by 30%',
    image: '/farmer-uses-tablet-monitor-ai-powered-agricultural-robot-inspecting-crops-field_856795-98846.png',
  },
  {
    category: 'Web Development',
    title: 'EduConnect: Connecting Teachers with Students',
    author: 'David Chen, Full-Stack Developer',
    description: 'A platform that bridges educational gaps by connecting volunteer teachers with students in remote areas through low-bandwidth video solutions.',
    impact: 'Reached 500+ students in 12 underserved communities',
    image: '/photo-1581091226825-a6a2a5aee158.png',
  },
  {
    category: 'Startups',
    title: 'MediTrack: Healthcare Logistics Startup',
    author: 'Sarah Mensah, Founder & Technical Architect',
    description: 'A blockchain-based supply chain solution ensuring authentication and proper delivery of medical supplies to rural clinics.',
    impact: 'Secured $1.2M in seed funding with 15 clinic partnerships',
    image: '/photo-1576091160399-112ba8d25d1d.png',
  },
  {
    category: 'Social Impact',
    title: 'CleanWater: Water Quality Monitoring',
    author: 'Miguel Santos, IoT Developer & Community Liaison',
    description: 'Low-cost IoT sensors that monitor water quality in community wells and send alerts when contamination is detected.',
    impact: 'Deployed in 25 villages, preventing 3 potential disease outbreaks',
    image: '/photo-1581093806997-124204d9fa9d.png',
  },
  {
    category: 'Startups',
    title: 'LocalMarket: Digital Marketplace for Artisans',
    author: 'Aisha Patel, UX Designer & Business Strategist',
    description: 'An e-commerce platform helping traditional artisans sell their crafts to global markets while preserving cultural heritage.',
    impact: 'Increased artisan income by 45%, supporting 120+ families',
    image: '/local-market-showcases-communitymade-crafts-goods-fostering-support-collaboration-concept-community-crafts-local-market-support-collaboration_864588-75977.png',
  },
  {
    category: 'AI & ML',
    title: 'EcoRoute: Sustainable Transportation App',
    author: 'Carlos Vega, Machine Learning Specialist',
    description: 'An application that optimizes delivery routes to reduce carbon emissions while maintaining efficiency.',
    impact: 'Reduced delivery emissions by 28% for 3 partner companies',
    image: '/photo-1519389950473-47ba0277781c.png',
  },
];

export default function Success() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = activeCategory === 'All Projects'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  const handlePageChange = (direction: 'prev' | 'next') => {
    if (activeCategory !== 'All Projects') return;

    if (direction === 'prev') {
      setCurrentIndex((prev) => {
        const newIndex = prev - 1;
        return newIndex < 0 ? filteredProjects.length - 1 : newIndex;
      });
    } else if (direction === 'next') {
      setCurrentIndex((prev) => {
        const newIndex = prev + 1;
        return newIndex >= filteredProjects.length ? 0 : newIndex;
      });
    }
  };

  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setCurrentIndex(0);
  };

  const displayedProjects = activeCategory === 'All Projects'
    ? [
      filteredProjects[currentIndex],
      filteredProjects[(currentIndex + 1) % filteredProjects.length],
      filteredProjects[(currentIndex + 2) % filteredProjects.length]
    ]
    : filteredProjects;

  return (
    <section id="success-stories" className="bg-[#f7f9fc] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h2 className="text-4xl font-bold text-[#011133]">Success Stories</h2>
        <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
          Real projects built by our students that are making a difference in the world.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`px-4 py-2 rounded border text-sm font-medium ${activeCategory === cat
                ? 'bg-orange-500 text-white border-orange-500'
                : 'border-[#011133] text-[#011133]'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto transition-all duration-300 ease-in-out">
        {displayedProjects.map((project, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow overflow-hidden">
            <div className="relative">
              <Image src={project.image} alt={project.title} className="h-48 w-full object-cover" width={300} height={300} />
              <span className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded">
                {project.category}
              </span>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm">{project.author}</p>
              </div>
            </div>
            <div className="p-4">
              <p className="text-gray-600 text-sm">{project.description}</p>
              <div className="mt-4 bg-gray-100 text-[#011133] text-sm font-medium p-3 rounded">
                {project.impact}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex flex-col items-center gap-4">
        <div className={`flex gap-4 ${activeCategory !== 'All Projects' ? 'hidden' : ''}`}>
          <button
            className="w-10 h-10 rounded-full border border-[#011133] flex items-center justify-center text-[#011133] hover:bg-gray-200 transition-all duration-300"
            onClick={() => handlePageChange('prev')}
          >
            <Image src="/icon9.svg" alt="Previous" width={16} height={16} />
          </button>
          <button
            className="w-10 h-10 rounded-full border border-[#011133] flex items-center justify-center text-[#011133] hover:bg-gray-200 transition-all duration-300"
            onClick={() => handlePageChange('next')}
          >
            <Image src="/icon10.svg" alt="Next" width={16} height={16} />
          </button>
        </div>
        <button className="bg-[#F7931B] transition text-white font-bold px-6 py-3 rounded-md mt-4">
          Explore All Projects
        </button>
      </div>
    </section>
  );
}