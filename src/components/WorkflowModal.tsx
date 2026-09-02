'use client';

import { Workflow } from '../types/workflow';

interface WorkflowModalProps {
  workflow: Workflow | null;
  onClose: () => void;
}

export default function WorkflowModal({ workflow, onClose }: WorkflowModalProps) {
  if (!workflow) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-2xl rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-200/80 dark:bg-slate-800/80 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          ✕
        </button>

        {/* Encabezado */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
            {workflow.difficulty}
          </span>
          <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            ⏱️ Instalación: {workflow.setupTime}
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black mb-3">{workflow.title}</h2>

        <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
          {workflow.longDescription || workflow.description}
        </p>

        {/* Apps e Integraciones */}
        <div className="mb-6">
          <h4 className="text-xs font-mono font-bold uppercase text-slate-400 mb-2">Integraciones requeridas</h4>
          <div className="flex flex-wrap gap-2">
            {workflow.apps.map((app, i) => (
              <span key={i} className="px-3 py-1 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-xs font-semibold">
                ⚡ {app}
              </span>
            ))}
          </div>
        </div>

        {/* Lista de Requisitos de API */}
        <div className="mb-8 p-4 rounded-2xl bg-slate-100/70 dark:bg-slate-900/60 border border-slate-200/60 dark:border-slate-800">
          <h4 className="text-xs font-mono font-bold uppercase text-slate-500 dark:text-slate-400 mb-3">
            📋 Lo que necesitas para usar esta plantilla:
          </h4>
          <ul className="space-y-2">
            {workflow.requirements.map((req, i) => (
              <li key={i} className="text-xs sm:text-sm flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <span className="text-emerald-500 font-bold">✓</span> {req}
              </li>
            ))}
          </ul>
        </div>

        {/* Precio y CTA Principal */}
        <div className="flex items-center justify-between pt-4 border-t border-slate-200 dark:border-slate-800">
          <div>
            <span className="block text-[10px] uppercase font-mono font-bold text-slate-400">Precio único</span>
            <span className="text-3xl font-black">${workflow.price}</span>
          </div>

          <a
            href={workflow.gumroadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 via-rose-600 to-orange-500 text-white font-black text-xs uppercase tracking-wider flex items-center gap-2 shadow-lg shadow-rose-500/30 hover:scale-105 transition-all"
          >
            <span>Descargar JSON Ahora</span>
            <span>🚀</span>
          </a>
        </div>

      </div>
    </div>
  );
}

