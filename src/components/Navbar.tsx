'use client';

import React from 'react';

export default function Navbar() {
  return (
    <header className="sticky top-4 z-40 max-w-[1120px] mx-auto px-4 mb-8">
      <nav className="flex items-center justify-between px-6 py-3.5 rounded-full bg-white/80 border border-white/60 shadow-[0_8px_32px_rgba(31,38,135,0.07)] backdrop-blur-md">
        {/* Logo oficial n8nflow */}
        <a href="#" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-full bg-[#ff6d5a] flex items-center justify-center text-white font-[800] text-xs shadow-sm transition-transform group-hover:scale-105">
            n8n
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-[800] text-[#1b1730] leading-none tracking-tight">
              n8nflow
            </span>
            <span className="text-[10px] text-zinc-500 font-[500] leading-tight">
              Marketplace de Automatizaciones
            </span>
          </div>
        </a>

        {/* Enlaces y Acción */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="#catalog"
            className="text-xs font-[650] text-zinc-600 hover:text-[#1b1730] transition-colors hidden sm:block"
          >
            Explorar Plantillas
          </a>
          <a
            href="https://t.me/n8nflow_support"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#1b1730] hover:bg-black text-white text-xs font-[650] transition-colors shadow-sm"
          >
            Solicitar Flujo
          </a>
        </div>
      </nav>
    </header>
  );
}
