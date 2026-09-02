'use client';

import React from 'react';
import { ShieldCheck, Wrench, ArrowRight } from 'lucide-react';

export default function CustomServiceAndGuarantee() {
  return (
    <section id="custom" className="max-w-[1120px] mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Tarjeta 1: Servicio a Medida */}
        <div className="p-7 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.12)] backdrop-blur-[24px] flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-600">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-[800] text-[#1b1730]">
              ¿Necesitas una automatización a medida?
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm font-[500] leading-relaxed">
              Si tu proceso requiere lógica personalizada, integraciones privadas o soporte dedicado, nuestro equipo la diseña e instala por ti.
            </p>
          </div>

          <a
            href="https://t.me" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#1b1730] text-white hover:bg-black text-xs font-[650] transition-colors shadow-sm self-start"
          >
            <span>Solicitar Cotización</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Tarjeta 2: Garantía de Satisfacción */}
        <div className="p-7 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.12)] backdrop-blur-[24px] flex flex-col justify-between gap-6">
          <div className="space-y-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-600/10 border border-emerald-500/20 flex items-center justify-center text-emerald-600">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-xl font-[800] text-[#1b1730]">
              Garantía de Funcionamiento 100%
            </h3>
            <p className="text-zinc-600 text-xs sm:text-sm font-[500] leading-relaxed">
              Todas nuestras plantillas son probadas minuciosamente. Si encuentras algún fallo técnico al importarla en tu n8n, te ayudamos a solucionarlo sin costo.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-[650] text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-3.5 py-1.5 rounded-full self-start">
            <span>Soporte post-venta incluido</span>
          </div>
        </div>
      </div>
    </section>
  );
}
