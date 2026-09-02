'use client';

import React from 'react';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CATEGORIES = [
  { id: 'all', label: 'Todos los Flujos' },
  { id: 'marketing', label: 'Marketing & Redes' },
  { id: 'sales', label: 'Ventas & CRM' },
  { id: 'ai', label: 'Inteligencia Artificial' },
  { id: 'operations', label: 'Operaciones & PDF' },
];

export default function CategoryFilter({ activeCategory, setActiveCategory }: CategoryFilterProps) {
  return (
    <div className="max-w-[1120px] mx-auto px-4 my-8">
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none justify-start md:justify-center">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-full text-[13px] font-[600] whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#1b1730] text-white shadow-md'
                  : 'bg-white/70 text-zinc-600 hover:text-zinc-900 border border-white/60 hover:bg-white backdrop-blur-md'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
