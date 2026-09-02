'use client';

import React from 'react';
import { ArrowUpRight, Zap, CheckCircle } from 'lucide-react';
import { Workflow } from '../types/workflow';

interface WorkflowGridProps {
  workflows: Workflow[];
  onSelectWorkflow: (workflow: Workflow) => void;
}

export default function WorkflowGrid({ workflows, onSelectWorkflow }: WorkflowGridProps) {
  if (workflows.length === 0) {
    return (
      <div className="max-w-[1120px] mx-auto px-4 py-12 text-center">
        <div className="p-8 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_100%)] border border-white/40 shadow-sm backdrop-blur-[24px]">
          <p className="text-zinc-500 font-[550] text-sm">
            No se encontraron flujos que coincidan con tu búsqueda.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-[1120px] mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflows.map((wf) => (
          <div
            key={wf.id}
            onClick={() => onSelectWorkflow(wf)}
            className="group cursor-pointer p-6 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.12)] hover:shadow-[0_24px_64px_-12px_rgba(60,20,80,0.20)] transition-all duration-300 backdrop-blur-[24px] flex flex-col justify-between"
          >
            <div>
              {/* Encabezado Tarjeta */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-[650] bg-violet-500/10 text-violet-600 border border-violet-500/20">
                  <Zap className="w-3 h-3 fill-violet-600" /> {wf.category.toUpperCase()}
                </span>
                <span className="text-[18px] font-[750] text-[#1b1730]">
                  ${wf.price}
                </span>
              </div>

              {/* Título y Descripción */}
              <h3 className="text-[17px] font-[750] text-[#1b1730] tracking-tight leading-snug group-hover:text-violet-600 transition-colors mb-2">
                {wf.title}
              </h3>
              <p className="text-[13px] text-zinc-600 font-[500] line-clamp-2 leading-relaxed mb-4">
                {wf.description}
              </p>

              {/* Integraciones / Apps */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {wf.apps.map((app, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded-full bg-white/80 border border-white/60 text-[11px] font-[600] text-zinc-700 shadow-2xs"
                  >
                    {app}
                  </span>
                ))}
              </div>
            </div>

            {/* Pie de Tarjeta */}
            <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between">
              <span className="text-[12px] font-[600] text-zinc-500 flex items-center gap-1">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-500" /> Listo para n8n
              </span>
              <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:bg-[#1b1730] group-hover:text-white group-hover:border-[#1b1730] transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
