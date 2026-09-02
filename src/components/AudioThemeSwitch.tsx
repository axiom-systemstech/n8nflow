'use client';

import { useState, useEffect } from 'react';

export default function AudioThemeSwitch() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <div className="flex items-center gap-2.5 bg-slate-900/80 dark:bg-slate-950/80 p-1.5 rounded-2xl border border-white/10 shadow-inner">
      <span className={`text-[10px] font-mono font-bold tracking-widest transition-colors ${isDark ? 'text-slate-500' : 'text-sky-400 font-extrabold'}`}>
        ICE
      </span>

      {/* Riel del Interruptor Basculante */}
      <button
        onClick={() => setIsDark(!isDark)}
        className="relative w-11 h-5 bg-slate-800 rounded-full p-0.5 border border-white/10 shadow-inner flex items-center cursor-pointer transition-colors"
        aria-label="Toggle Theme"
      >
        {/* Palanca/Knob de Cristal con Sombra 3D */}
        <div
          className={`w-4 h-4 rounded-full skeuo-button transition-transform duration-300 flex items-center justify-center ${
            isDark ? 'translate-x-6 bg-rose-500' : 'translate-x-0 bg-sky-400'
          }`}
        >
          {/* Diodo Neón Encendido */}
          <div className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_6px_#fff]" />
        </div>
      </button>

      <span className={`text-[10px] font-mono font-bold tracking-widest transition-colors ${isDark ? 'text-rose-500 font-extrabold' : 'text-slate-500'}`}>
        DARK
      </span>
    </div>
  );
}

