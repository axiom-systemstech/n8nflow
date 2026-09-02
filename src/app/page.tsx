'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import RoiCalculator from '../components/RoiCalculator';
import CategoryFilter from '../components/CategoryFilter';
import WorkflowGrid from '../components/WorkflowGrid';
import WorkflowModal from '../components/WorkflowModal';
import BundleBanner from '../components/BundleBanner';
import Testimonials from '../components/Testimonials';
import Newsletter from '../components/Newsletter';
import FaqSection from '../components/FaqSection';
import { WORKFLOWS } from '../data/workflows';
import { Workflow } from '../types/workflow';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);

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
      <Navbar />

      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <HowItWorks />

      <RoiCalculator />

      <section id="catalog" className="scroll-mt-24">
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
        <WorkflowGrid 
          workflows={filteredWorkflows} 
          onSelectWorkflow={(wf) => setSelectedWorkflow(wf)} 
        />
      </section>

      <BundleBanner />

      <Testimonials />

      <Newsletter />

      <FaqSection />

      <WorkflowModal
        workflow={selectedWorkflow}
        onClose={() => setSelectedWorkflow(null)}
      />

      <footer className="text-center text-xs text-slate-500 dark:text-slate-400 py-8 border-t border-slate-200/20 dark:border-slate-800/40">
        <p>© {new Date().getFullYear()} n8nflow. Diseñado para automatizadores profesionales.</p>
      </footer>
    </main>
  );
}
