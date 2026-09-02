'use client';

import React from 'react';
import { Zap, Search, Bell } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 max-w-[1120px] mx-auto px-4 w-full">
      <div className="flex items-center justify-between p-4 md:p-5 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.60)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.16)] backdrop-blur-[24px]">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white shadow-sm">
            <Zap className="w-5 h-5 fill-white" />
          </div>
          <div>
            <h1 className="font-[750] text-[15px] leading-[1.1] tracking-tight text-[#1b1730]">
              n8nflow
            </h1>
            <p className="text-[11px] text-zinc-500 font-[500]">Marketplace de Automatizaciones</p>
          </div>
        </div>

        {/* Links / Botón de Acción */}
        <div className="flex items-center gap-3">
          <a 
            href="#catalog" 
            className="hidden sm:inline-flex px-4 py-2 rounded-full text-[13px] font-[600] text-zinc-700 hover:text-zinc-900 bg-white/60 hover:bg-white border border-white/40 transition-all"
          >
            Explorar Plantillas
          </a>
          <a 
            href="#custom" 
            className="px-4 py-2 rounded-full text-[12px] font-[600] bg-[#1b1730] text-white hover:bg-black transition-colors shadow-sm"
          >
            Solicitar Flujo
          </a>
        </div>
      </div>
    </header>
  );
}
