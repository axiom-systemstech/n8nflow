'use client';

import { useState } from 'react';

export default function RoiCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState<number>(10);
  const hourlyRate = 35; // Coste estimado medio por hora ($35/h)

  // Cálculos dinámicos
  const monthlyHoursSaved = Math.round(hoursPerWeek * 4);
  const monthlyMoneySaved = monthlyHoursSaved * hourlyRate;

  return (
    <section className="max-w-3xl mx-auto px-4 mb-20">
      <div className="glass-panel p-6 sm:p-8 rounded-3xl relative overflow-hidden shadow-2xl">
        
        {/* Glow de fondo */}
        <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="text-center mb-6 space-y-2">
          <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
            ⚡ Calculadora de Impacto
          </span>
          <h2 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
            ¿Cuánto te cuesta la tarea manual?
          </h2>
        </div>

        {/* Control Deslizante (Slider Skeuomórfico) */}
        <div className="space-y-4 mb-8 max-w-lg mx-auto">
          <div className="flex justify-between items-center text-sm font-semibold">
            <span className="text-slate-600 dark:text-slate-400">Horas perdidas a la semana:</span>
            <span className="text-lg font-black text-rose-500 px-3 py-1 rounded-xl bg-rose-500/10 border border-rose-500/20">
              {hoursPerWeek} hrs/sem
            </span>
          </div>

          <input
            type="range"
            min="2"
            max="40"
            step="1"
            value={hoursPerWeek}
            onChange={(e) => setHoursPerWeek(Number(e.target.value))}
            className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
          />
          
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <span>2 hrs</span>
            <span>20 hrs</span>
            <span>40 hrs</span>
          </div>
        </div>

        {/* Resultados del Ahorro */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-white/10">
          <div className="bg-slate-900/40 dark:bg-slate-950/40 p-4 rounded-2xl border border-white/5 text-center">
            <span className="text-xs text-slate-400 block mb-1">Ahorro estimado al mes</span>
            <span className="text-2xl sm:text-3xl font-black text-emerald-400">
              ${monthlyMoneySaved.toLocaleString()}
            </span>
          </div>

          <div className="bg-slate-900/40 dark:bg-slate-950/40 p-4 rounded-2xl border border-white/5 text-center">
            <span className="text-xs text-slate-400 block mb-1">Tiempo libre recuperado</span>
            <span className="text-2xl sm:text-3xl font-black text-amber-400">
              {monthlyHoursSaved} hrs/mes
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}

