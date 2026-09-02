'use client';

import { useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import RoiCalculator from '../components/RoiCalculator';
import CategoryFilter from '../components/CategoryFilter';
import WorkflowGrid from '../components/WorkflowGrid';
import { WORKFLOWS } from '../data/workflows';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  // Filtrado dinámico por búsqueda en texto y por categoría seleccionada
  const filteredWorkflows = WORKFLOWS.filter((workflow) => {
    // 1. Filtro por categoría activa (Todos, IA, Marketing, Ventas, Productividad)
    const matchesCategory =
      activeCategory === 'all' || workflow.category === activeCategory;

    // 2. Filtro por texto de búsqueda (busca en Título, Descripción y Apps)
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      workflow.title.toLowerCase().includes(query) ||
      workflow.description.toLowerCase().includes(query) ||
      workflow.apps.some((app) => app.toLowerCase().includes(query));

    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen pb-24 relative overflow-hidden">
      
      {/* Luz neón decorativa de fondo (Ambient Glow) - El toque n8nflow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-rose-500/15 via-orange-500/10 to-transparent blur-[120px] pointer-events-none -z-10" />

      {/* 1. Navbar Flotante Glass con el Switch Basculante 3D */}
      <Navbar />

      {/* 2. Hero Section con Titular de Impacto y Buscador Skeuomórfico */}
      <Hero searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* 3. Calculadora Interactiva de ROI (El widget de conversión) */}
      <RoiCalculator />

      {/* 4. Sección de Catálogo de Plantillas con Anclaje */}
      <section id="catalog" className="scroll-mt-24">
        
        {/* Filtros por Categoría */}
        <CategoryFilter
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />

        {/* Parrilla de Tarjetas (muestra los resultados filtrados) */}
        <WorkflowGrid workflows={filteredWorkflows} />

      </section>

      {/* Footer minimalista de la tienda */}
      <footer className="text-center text-xs text-slate-500 dark:text-slate-400 py-8 border-t border-slate-200/20 dark:border-slate-800/40">
        <p>© {new Date().getFullYear()} n8nflow. Diseñado para automatizadores profesionales.</p>
      </footer>

    </main>
  );
}
