'use client';

import { Workflow } from '../types/workflow';

interface WorkflowCardProps {
  workflow: Workflow;
}

export default function WorkflowCard({ workflow }: WorkflowCardProps) {
  return (
    <div className="glass-panel rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden transition-all duration-300 hover:-translate-y-1.5 shadow-xl group">
      
      {/* Badge de 'Destacado' */}
      {workflow.featured && (
        <div className="absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-amber-500/10 border border-amber-500/40 text-amber-600 dark:text-amber-400">
          ★ Top Ventas
        </div>
      )}

      <div>
        {/* Apps / Integraciones */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {workflow.apps.map((app, index) => (
            <span
              key={index}
              className="text-[11px] font-mono px-2.5 py-1 rounded-lg bg-slate-200/80 dark:bg-slate-800/60 border border-slate-300/80 dark:border-slate-700/40 text-slate-800 dark:text-slate-300 font-semibold"
            >
              {app}
            </span>
          ))}
        </div>

        {/* Título de la Plantilla */}
        <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 group-hover:text-rose-500 transition-colors">
          {workflow.title}
        </h3>

        {/* Descripción corta */}
        <p className="text-slate-600 dark:text-slate-400 text-sm line-clamp-3 mb-6 leading-relaxed">
          {workflow.description}
        </p>
      </div>

      {/* Footer de la tarjeta: Precio y Acción */}
      <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/60 flex items-center justify-between mt-auto">
        
        <div>
          <span className="block text-[10px] text-slate-500 dark:text-slate-400 uppercase font-mono font-bold">
            Ahorras {workflow.timeSaved}
          </span>
          <span className="text-2xl font-black text-slate-900 dark:text-white">
            ${workflow.price}
          </span>
        </div>

        {/* Botón 3D Tactil con Gradiente de Alto Contraste */}
        <a
          href={workflow.gumroadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2.5 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-orange-500 text-white font-black text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-rose-500/30 hover:shadow-rose-500/50 hover:scale-105 active:scale-95 transition-all duration-200 border border-rose-400/30"
        >
          <span>Obtener JSON</span>
          <span className="text-sm">⚡</span>
        </a>

      </div>

    </div>
  );
}
