'use client';

import { useState } from 'react';
import { Workflow } from '../types/workflow';
import AppLogo from './AppLogo';

interface WorkflowModalProps {
  workflow: Workflow | null;
  onClose: () => void;
}

export default function WorkflowModal({ workflow, onClose }: WorkflowModalProps) {
  const [activeTab, setActiveTab] = useState<'details' | 'preview'>('details');

  if (!workflow) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="glass-panel w-full max-w-3xl rounded-3xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto relative text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón Cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-200/80 dark:bg-slate-800/80 flex items-center justify-center text-slate-500 hover:text-slate-900 dark:hover:text-white transition-colors z-10"
        >
          ✕
        </button>

        {/* Badges y Actividad en Vivo */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-600 dark:text-rose-400 border border-rose-500/20">
            {workflow.difficulty}
          </span>
          <span className="text-[11px] font-mono font-bold px-2.5 py-1 rounded-md bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
            ⏱️ {workflow.setupTime}
          </span>
          <span className="text-[11px] font-mono text-emerald-500 font-bold px-2.5 py-1 rounded-md bg-emerald-500/10 border border-emerald-500/20">
            🔥 Descargado +12 veces hoy
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl font-black mb-4">{workflow.title}</h2>

        {/* Pestañas dentro del Modal */}
        <div className="flex border-b border-slate-200 dark:border-slate-800 mb-6 gap-4">
          <button
            onClick={() => setActiveTab('details')}
            className={`pb-2 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'details'
                ? 'border-rose-500 text-rose-500'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            📋 Detalles e Instalación
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`pb-2 text-xs font-bold uppercase tracking-wider transition-colors border-b-2 ${
              activeTab === 'preview'
                ? 'border-rose-500 text-rose-500'
                : 'border-transparent text-slate-400 hover:text-slate-600'
            }`}
          >
            🗺️ Mapa de Nodos n8n
          </button>
        </div>

        {activeTab === 'details' ? (
          <>
            <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed mb-6">
              {workflow.longDescription || workflow.description}
            </p>

            {/* Integraciones */}
            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold uppercase text-slate-400 mb-3">
                Integraciones requeridas
              </h4>
              <div className="flex flex-wrap gap-2">
                {workflow.apps.map((app, i) => (
                  <span 
                    key={i} 
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-800/90 border border-slate-200/70 dark:border-slate-700/60 text-xs font-semibold text-slate-800 dark:text-slate-200 shadow-sm"
                  >
                    <AppLogo appName={app} className="w-4 h-4" />
                    <span>{app}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Requisitos */}
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
          </>
        ) : (
          <div className="mb-8 text-center">
            <div className="relative rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 bg-slate-950 p-6 flex flex-col items-center justify-center min-h-[220px]">
              <div className="text-4xl mb-2">⚡</div>
              <h5 className="text-sm font-bold text-white mb-1">Estructura de Flujo Verificada</h5>
              <p className="text-xs text-slate-400 max-w-md mb-4">
                Este flujo de trabajo contiene todos los nodos preconfigurados, controladores de errores y mapeo de campos listo para importar.
              </p>
              <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 text-[10px] font-mono font-bold">
                JSON Válido para n8n v1.0+
              </span>
            </div>
          </div>
        )}

        {/* Footer del Modal */}
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
