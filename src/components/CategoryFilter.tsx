'use client';

import { Category } from '../types/workflow';

interface CategoryFilterProps {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
}

const CATEGORIES: { label: string; value: string }[] = [
  { label: '🔥 Todos', value: 'all' },
  { label: '🤖 IA & GPT', value: 'ia' },
  { label: '📈 Marketing', value: 'marketing' },
  { label: '💼 Ventas', value: 'ventas' },
  { label: '⚡ Productividad', value: 'productividad' },
];

export default function CategoryFilter({ activeCategory, setActiveCategory }: CategoryFilterProps) {
  return (
    <div className="flex items-center justify-center gap-2 flex-wrap mb-10 px-4">
      {CATEGORIES.map((cat) => {
        const isActive = activeCategory === cat.value;
        return (
          <button
            key={cat.value}
            onClick={() => setActiveCategory(cat.value)}
            className={`px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
              isActive
                ? 'bg-rose-500 text-white shadow-lg shadow-rose-500/30 scale-105'
                : 'glass-panel text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white'
            }`}
          >
            {cat.label}
          </button>
        );
      })}
    </div>
  );
}

