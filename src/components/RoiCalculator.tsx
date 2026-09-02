'use client';

import React, { useState } from 'react';
import { Calculator, Clock, DollarSign, TrendingUp } from 'lucide-react';

export default function RoiCalculator() {
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [hourlyRate, setHourlyRate] = useState(25);

  const monthlyHoursSaved = hoursPerWeek * 4;
  const monthlyMoneySaved = monthlyHoursSaved * hourlyRate;
  const yearlyMoneySaved = monthlyMoneySaved * 12;

  return (
    <section className="max-w-[1120px] mx-auto px-4 py-12">
      <div className="p-6 md:p-8 rounded-[32px] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.70)_100%)] border border-white/60 shadow-[0_28px_70px_-16px_rgba(60,20,80,0.14)] backdrop-blur-[24px] grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Lado Izquierdo: Controles */}
        <div className="flex flex-col gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-[650] bg-violet-500/10 text-violet-600 border border-violet-500/20 mb-3">
              <Calculator className="w-3.5 h-3.5" /> Calculadora de Ahorro
            </div>
            <h2 className="text-2xl sm:text-3xl font-[800] text-[#1b1730] tracking-tight">
              ¿Cuánto dinero y tiempo te ahorrarás?
            </h2>
            <p className="text-zinc-600 font-[500] text-sm mt-1">
              Calcula el retorno de inversión al automatizar tus tareas repetitivas.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[13px] font-[650] text-zinc-700">
                  Horas dedicadas a tareas manuales / semana
                </label>
                <span className="text-[13px] font-mono font-[750] text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200">
                  {hoursPerWeek} hrs/sem
                </span>
              </div>
              <input
                type="range"
                min="2"
                max="40"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                className="w-full accent-violet-600 cursor-pointer"
              />
            </div>

            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-[13px] font-[650] text-zinc-700">
                  Valor estimado de tu hora de trabajo ($ USD)
                </label>
                <span className="text-[13px] font-mono font-[750] text-violet-600 bg-violet-50 px-2.5 py-1 rounded-full border border-violet-200">
                  ${hourlyRate}/hr
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="150"
                step="5"
                value={hourlyRate}
                onChange={(e) => setHourlyRate(Number(e.target.value))}
                className="w-full accent-violet-600 cursor-pointer"
              />
            </div>
          </div>
        </div>

        {/* Lado Derecho: Resultados */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-[24px] bg-white/80 border border-white/60 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-zinc-500 mb-2">
              <Clock className="w-4 h-4 text-violet-600" />
              <span className="text-[12px] font-[650]">Tiempo Ahorrado</span>
            </div>
            <div>
              <div className="text-2xl font-[800] text-[#1b1730]">
                {monthlyHoursSaved} hrs
              </div>
              <p className="text-[11px] text-zinc-500 font-[500]">al mes liberadas</p>
            </div>
          </div>

          <div className="p-5 rounded-[24px] bg-white/80 border border-white/60 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-2 text-zinc-500 mb-2">
              <DollarSign className="w-4 h-4 text-emerald-600" />
              <span className="text-[12px] font-[650]">Ahorro Mensual</span>
            </div>
            <div>
              <div className="text-2xl font-[800] text-[#1b1730]">
                ${monthlyMoneySaved.toLocaleString()}
              </div>
              <p className="text-[11px] text-zinc-500 font-[500]">estimado en costes</p>
            </div>
          </div>

          <div className="sm:col-span-2 p-5 rounded-[24px] bg-[#1b1730] text-white shadow-md flex items-center justify-between">
            <div>
              <div className="flex items-center gap-1.5 text-violet-300 text-[11px] font-[650] uppercase tracking-wider mb-1">
                <TrendingUp className="w-3.5 h-3.5" /> Impacto Anual Estimado
              </div>
              <div className="text-3xl font-[800]">
                ${yearlyMoneySaved.toLocaleString()} USD
              </div>
            </div>
            <a
              href="#catalog"
              className="px-4 py-2 rounded-full bg-violet-600 hover:bg-violet-500 text-white text-[12px] font-[600] transition-colors shadow-sm"
            >
              Empezar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
