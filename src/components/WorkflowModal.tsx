'use client';

import React from 'react';
import { X, CheckCircle, Download, Zap, Shield } from 'lucide-react';
import { Workflow } from '../types/workflow';

interface WorkflowModalProps {
  workflow: Workflow | null;
  onClose: () => void;
}

export default function WorkflowModal({ workflow, onClose }: WorkflowModalProps) {
  if (!workflow) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg p-6 sm:p-8 rounded-[32px] bg-[linear-gradient(180deg,rgba(255,255,255,0.96)_0%,rgba(255,255,255,0.85)_100%)] border border-white shadow-[0_32px_80px_-16px_rgba(0,0,0,0.2)] backdrop-blur-[32px] space-y-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-zinc-100 hover:bg-zinc-200 text-zinc-600 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Encabezado */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-[650] bg-violet-500/10 text-violet-600 border border-violet-500/20">
            <Zap className="w-3 h-3 fill-violet-600" /> {workflow.category.toUpperCase()}
          </div>
          <h2 className="text-xl sm:text-2xl font-[800] text-[#1b1730] leading-tight">
            {workflow.title}
          </h2>
        </div>

        {/* Apps vinculadas */}
        <div>
          <h4 className="text-[11px] font-[700] text-zinc-400 uppercase tracking-wider mb-2">
            Aplicaciones integradas
          </h4>
          <div className="flex flex-wrap gap-2">
            {workflow.apps.map((app, idx) => (
              <span
                key={idx}
                className="px-3 py-1 rounded-full bg-white border border-zinc-200 text-xs font-[600] text-zinc-700 shadow-2xs"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        {/* Descripción */}
        <div className="space-y-2">
          <h4 className="text-[11px] font-[700] text-zinc-400 uppercase tracking-wider">
            Detalles de la automatización
          </h4>
          <p className="text-xs sm:text-sm text-zinc-600 font-[500] leading-relaxed">
            {workflow.description}
          </p>
        </div>

        {/* Puntos incluidos */}
        <div className="p-4 rounded-[20px] bg-violet-50/50 border border-violet-100 space-y-2 text-xs font-[600] text-zinc-700">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Archivo JSON listo para importar en n8n</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-500" />
            <span>Guía de instalación de credenciales</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-violet-600" />
            <span>Garantía de soporte técnico</span>
          </div>
        </div>

        {/* Precio y Acción */}
        <div className="pt-4 border-t border-zinc-200/60 flex items-center justify-between gap-4">
          <div>
            <span className="text-[11px] text-zinc-400 font-[600] block">Precio total</span>
            <span className="text-2xl font-[800] text-[#1b1730]">${workflow.price} USD</span>
          </div>

          <button
            onClick={() => {
              alert(`¡Simulación de compra para: ${workflow.title}!`);
              onClose();
            }}
            className="px-6 py-3 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-[700] text-xs sm:text-sm transition-all shadow-md flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Obtener Plantilla</span>
          </button>
        </div>
      </div>
    </div>
  );
}

