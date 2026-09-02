'use client';

import AudioThemeSwitch from './AudioThemeSwitch';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 px-4 py-3">
      <div className="max-w-6xl mx-auto glass-panel rounded-2xl px-4 py-2.5 flex items-center justify-between">
        
        {/* Logo e Isotipo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <img 
            src="/logo.png" 
            alt="n8nflow logo" 
            className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
          />
          <span className="font-black text-lg tracking-tight text-slate-900 dark:text-white">
            n8nflow
          </span>
        </a>

        {/* Enlaces de Navegación */}
        <nav className="hidden md:flex items-center gap-6 text-xs font-semibold text-slate-600 dark:text-slate-300">
          <a href="#catalog" className="hover:text-rose-500 transition-colors">
            Workflows
          </a>
          <a href="#how-it-works" className="hover:text-rose-500 transition-colors">
            ¿Cómo funciona?
          </a>
          <a href="#faq" className="hover:text-rose-500 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Acciones y Conmutador de Tema */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-[11px] font-mono font-bold">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>v2.4 Ready</span>
          </div>

          <AudioThemeSwitch />
        </div>

      </div>
    </header>
  );
}
