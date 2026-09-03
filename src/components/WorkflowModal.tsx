import React from 'react';
import { Workflow } from '../types/workflow';

interface WorkflowModalProps {
  workflow: Workflow | null;
  onClose: () => void;
}

export const WorkflowModal: React.FC<WorkflowModalProps> = ({ workflow, onClose }) => {
  if (!workflow) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-slate-400 hover:text-white p-2 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors z-10"
        >
          ✕
        </button>

        {workflow.imageUrl && (
          <div className="w-full h-56 bg-slate-950 overflow-hidden">
            <img 
              src={workflow.imageUrl} 
              alt={workflow.title} 
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="p-6">
          <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20 inline-block mb-3">
            {workflow.category}
          </span>

          <h2 className="text-2xl font-bold text-white mb-3">{workflow.title}</h2>

          <div className="mb-6">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Aplicaciones Integradas</h4>
            <div className="flex flex-wrap gap-2">
              {workflow.apps.map((app) => (
                <span key={app} className="text-xs px-2.5 py-1 rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                  {app}
                </span>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Detalles de la Automatización</h4>
            <p className="text-slate-300 text-sm leading-relaxed mb-4">
              {workflow.longDescription || workflow.description}
            </p>

            {workflow.requirements && workflow.requirements.length > 0 && (
              <div className="bg-slate-800/40 rounded-xl p-4 border border-slate-800">
                <h5 className="text-xs font-semibold text-slate-300 mb-2">Requisitos:</h5>
                <ul className="list-disc list-inside text-xs text-slate-400 space-y-1">
                  {workflow.requirements.map((req, idx) => (
                    <li key={idx}>{req}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div className="flex items-center justify-between pt-4 border-t border-slate-800">
            <div>
              <span className="text-xs text-slate-400 block">Precio total</span>
              <span className="text-2xl font-bold text-white">${workflow.price} USD</span>
            </div>

            <a 
              href={workflow.gumroadUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="py-3 px-6 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-sm transition-colors flex items-center gap-2 shadow-lg shadow-purple-600/20"
            >
              Obtener Plantilla ↗
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

