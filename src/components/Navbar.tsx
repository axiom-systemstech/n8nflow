'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';

export default function Navbar() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <header className="sticky top-4 z-40 max-w-[1120px] mx-auto px-4 mb-8">
      <nav className="flex items-center justify-between px-6 py-3.5 rounded-full bg-white/80 dark:bg-zinc-900/80 border border-white/60 dark:border-zinc-800 shadow-[0_8px_32px_rgba(31,38,135,0.07)] backdrop-blur-md transition-colors">
        {/* Logo oficial local desde /public/logo.png */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="n8nflow logo"
            className="w-8 h-8 object-contain transition-transform group-hover:scale-105"
          />
          <div className="flex flex-col">
            <span className="text-sm font-[800] text-[#1b1730] dark:text-white leading-none tracking-tight">
              n8nflow
            </span>
            <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-[500] leading-tight">
              Marketplace de Automatizaciones
            </span>
          </div>
        </a>

        {/* Acciones, Botón Modo Oscuro/Claro y Telegram */}
        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href="#catalog"
            className="text-xs font-[650] text-zinc-600 dark:text-zinc-300 hover:text-[#1b1730] dark:hover:text-white transition-colors hidden sm:block"
          >
            Explorar Plantillas
          </a>

          {/* Botón Switch Modo Oscuro / Claro */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-200 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            title="Cambiar tema"
          >
            {darkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-zinc-600" />}
          </button>

          <a
            href="https://t.me/n8nfloww"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-full bg-[#1b1730] dark:bg-white dark:text-zinc-900 hover:bg-black text-white text-xs font-[650] transition-colors shadow-sm"
          >
            Solicitar Flujo
          </a>
        </div>
      </nav>
    </header>
  );
}
