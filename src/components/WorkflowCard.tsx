'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Workflow } from '@/types/workflow';

interface WorkflowCardProps {
  workflow: Workflow;
  onSelect: (workflow: Workflow) => void;
}

export default function WorkflowCard({ workflow, onSelect }: WorkflowCardProps) {
  return (
    <div
      onClick={() => onSelect(workflow)}
      className="group relative cursor-pointer rounded-[28px] bg-white/80 dark:bg-zinc-900/80 border border-white/50 dark:border-zinc-800 p-6 shadow-[0_16px_40px_-12px_rgba(31,38,135,0.07)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-violet-300 dark:hover:border-violet-700 flex flex-col justify-between h-full"
    >
      <div>
        {/* Banner de Logos Integrados */}
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          {workflow.apps?.map((app, index) => (
            <div
              key={index}
              className="w-8 h-8 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200/60 dark:border-zinc-700/60 p-1.5 flex items-center justify-center shadow-2xs group-hover:scale-105 transition-transform"
            >
              <img
                src={`/apps/${app.toLowerCase()}.png`}
                alt={app}
                className="w-full h-full object-contain"
                onError={(e) => {
                  // Fallback por si la imagen no existe
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
            </div>
          ))}
        </div>

        {/* Título y Descripción */}
        <h3 className="text-base font-[750] text-[#1b1730] dark:text-white mb-2 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
          {workflow.title}
        </h3>
        <p className="text-xs text-zinc-600 dark:text-zinc-400 font-[500] line-clamp-2 mb-4 leading-relaxed">
          {workflow.description}
        </p>
      </div>

      {/* Pie de la Tarjeta */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800 mt-auto">
        <div className="flex items-center gap-1.5">
          <span className="text-lg font-[800] text-[#1b1730] dark:text-white">
            ${workflow.price}
          </span>
          <span className="text-[10px] text-zinc-400 font-[600]">USD</span>
        </div>

        <div className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-800 group-hover:bg-violet-600 group-hover:text-white text-zinc-700 dark:text-zinc-300 flex items-center justify-center transition-all">
          <ArrowUpRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  );
}
