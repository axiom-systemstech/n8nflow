'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import RoiCalculator from '../components/RoiCalculator';
import CategoryFilter from '../components/CategoryFilter';
import WorkflowGrid from '../components/WorkflowGrid';
import FaqSection from '../components/FaqSection';
import { WORKFLOWS } from '../data/workflows';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredWorkflows = WORKFLOWS.filter((workflow) => {
    const matchesCategory =
      activeCategory === 'all' || workflow.category === activeCategory;

    const query = searchQuery.toLowerCase();
    const matchesSearch =
      workflow.title.toLowerCase().includes(query) ||
      workflow.description.toLowerCase().includes(query) ||
      workflow.apps.some((app) => app.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pb-24 relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-rose-500/15 via-orange-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      <Navbar />

      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <HowItWorks />

      <RoiCalculator />

      <section id="catalog" className="scroll-mt-24">
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <WorkflowGrid workflows={filteredWorkflows} />
      </section>

      <FaqSection />

      <footer className="text-center text-xs text-slate-500 dark:text-slate-400 py-8 border-t border-slate-200/20 dark:border-slate-800/40">
        <p>© {new Date().getFullYear()} n8nflow. Diseñado para automatizadores profesionales.</p>
      </footer>

    </main>
  );
}
