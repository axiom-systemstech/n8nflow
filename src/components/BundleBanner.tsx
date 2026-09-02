'use client';

import React from 'react';
import { Sparkles, Check, ArrowRight } from 'lucide-react';

export default function BundleBanner() {
  return (
    <section className="max-w-[1120px] mx-auto px-4 py-8">
      <div className="relative overflow-hidden p-8 md:p-10 rounded-[32px] bg-[#1b1730] text-white shadow-[0_32px_80px_-16px_rgba(27,23,48,0.4)]">
        {/* Glows de fondo internos */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-violet-600/30 blur-[90px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-60 h-60 bg-indigo-600/20 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2 space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-violet-500/20 border border-violet-400/30 text-violet-300 text-[12px] font-[650]">
              <Sparkles className="w-3.5 h-3.5" /> Paquete Completo n8n
            </div>
            
            <h2 className="text-3xl sm:text-4xl font-[800] tracking-tight leading-tight">
              Accede a todas las plantillas actuales y futuras
            </h2>
            
            <p className="text-zinc-300 text-sm font-[500] leading-relaxed max-w-xl">
              Obtén acceso ilimitado a todo nuestro catálogo de flujos de automatización + actualizaciones de por vida por un único pago.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-[600] text-zinc-200">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                <span>Más de 50+ flujos listos para importar</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Check className="w-3 h-3" />
                </div>
                <span>Soporte prioritario por Discord/WhatsApp</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start lg:items-end justify-center">
            <div className="p-6 rounded-[24px] bg-white/10 border border-white/15 backdrop-blur-md w-full max-w-xs text-center space-y-4">
              <div>
                <span className="text-xs text-zinc-400 line-through font-[600]">$299 USD</span>
                <div className="text-4xl font-[800] text-white">$99 <span className="text-xs text-violet-300 font-[500]">/ único pago</span></div>
              </div>

              <button className="w-full py-3 px-6 rounded-full bg-violet-600 hover:bg-violet-500 text-white font-[700] text-sm transition-all shadow-lg flex items-center justify-center gap-2 group">
                <span>Conseguir Paquete</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
