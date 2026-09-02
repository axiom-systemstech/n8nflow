'use client';

import React from 'react';
import { Search, Sparkles, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  return (
    <section className="relative pt-12 pb-8 max-w-[1120px] mx-auto px-4">
      {/* Fondo con degradados suaves (Glows) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[100px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#bfdbfe] blur-[120px] opacity-40 rounded-full" />
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-[#ddd6fe] blur-[120px] opacity-50 rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[500px] h-[500px] bg-[#f5d0fe] blur-[120px] opacity-50 rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl mx-auto gap-6">
        {/* Badge superior */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/70 border border-white/60 shadow-sm backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-violet-600" />
          <span className="text-[12px] font-[650] text-zinc-700">
            Plantillas de n8n Listas para Importar
          </span>
        </div>

        {/* Título Principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-[800] text-[#1b1730] tracking-tight leading-[1.15]">
          Automatiza tu negocio en minutos con <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-indigo-600">flujos probados</span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 font-[500] max-w-2xl leading-relaxed">
          Ahorra cientos de horas de trabajo manual. Descarga flujos de trabajo listos para usar en tu propia instancia de n8n.
        </p>

        {/* Buscador de Flujos con estética del nuevo diseño */}
        <div className="w-full max-w-xl mt-2">
          <div className="relative flex items-center p-2 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.75)_100%)] border border-white shadow-[0_20px_50px_-12px_rgba(60,20,80,0.12)] backdrop-blur-[24px]">
            <Search className="w-5 h-5 text-zinc-400 ml-3" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por app (Hubspot, WhatsApp, OpenAI...)..."
              className="w-full px-3 py-2 bg-transparent text-[14px] font-[550] text-[#1b1730] placeholder:text-zinc-400 focus:outline-none"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-xs text-zinc-400 hover:text-zinc-600 px-2 font-[600]"
              >
                Limpiar
              </button>
            )}
          </div>
        </div>

        {/* Puntos clave debajo del buscador */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm font-[600] text-zinc-600 pt-2">
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Descarga en JSON instantánea</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Soporte e instalación disponible</span>
          </div>
        </div>
      </div>
    </section>
  );
}
