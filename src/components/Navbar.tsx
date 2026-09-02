'use client';

import AudioThemeSwitch from './AudioThemeSwitch';

export default function Navbar() {
  return (
    <header className="sticky top-4 z-50 max-w-6xl mx-auto px-4 mb-12">
      <div className="glass-panel rounded-2xl px-6 py-3.5 flex items-center justify-between shadow-2xl">
        
        {/* Logo 3D n8nflow */}
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-rose-500 to-orange-400 flex items-center justify-center text-white font-black text-lg skeuo-button shadow-lg shadow-rose-500/20">
            n
          </div>
          <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-400 bg-clip-text text-transparent">
            n8nflow
          </span>
        </div>

        {/* Enlaces Rápidos (Visibles en pantalla mediana/grande) */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-600 dark:text-slate-300">
          <a href="#catalog" className="hover:text-rose-500 transition-colors">Workflows</a>
          <a href="#how-it-works" className="hover:text-rose-500 transition-colors">¿Cómo funciona?</a>
          <a href="#faq" className="hover:text-rose-500 transition-colors">FAQ</a>
        </nav>

        {/* Controles: Estado API + Switch Basculante */}
        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            n8n 100% OK
          </div>

          <AudioThemeSwitch />
        </div>

      </div>
    </header>
  );
}

