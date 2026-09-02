'use client';

import React from 'react';
import { Download, Sliders, PlayCircle } from 'lucide-react';

const STEPS = [
  {
    icon: Download,
    number: '01',
    title: 'Elige y Descarga',
    description: 'Explora nuestro catálogo, selecciona la plantilla que mejor se adapte a tu necesidad y obtén el archivo JSON de inmediato.',
  },
  {
    icon: Sliders,
    number: '02',
    title: 'Importa en n8n',
    description: 'Abre tu propia instancia de n8n, crea un nuevo workflow e importa el archivo descargado con un par de clics.',
  },
  {
    icon: PlayCircle,
    number: '03',
    title: 'Conecta tus Credenciales',
    description: 'Asigna tus claves de API (OpenAI, WhatsApp, CRM, etc.) ¡y pon a funcionar tus automatizaciones en minutos!',
  },
];

export default function HowItWorks() {
  return (
    <section className="max-w-[1120px] mx-auto px-4 py-12">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-[800] text-[#1b1730] tracking-tight">
          ¿Cómo funciona n8nflow?
        </h2>
        <p className="text-zinc-600 font-[500] text-sm mt-2">
          Poner a funcionar un flujo profesional nunca fue tan sencillo. En 3 pasos estarás ahorrando horas.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STEPS.map((step) => {
          const Icon = step.icon;
          return (
            <div
              key={step.number}
              className="relative p-6 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.12)] backdrop-blur-[24px] flex flex-col gap-4"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-2xl bg-violet-600/10 border border-violet-500/20 flex items-center justify-center text-violet-600">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-2xl font-[800] text-zinc-300 font-mono">
                  {step.number}
                </span>
              </div>

              <div>
                <h3 className="text-[16px] font-[750] text-[#1b1730] tracking-tight mb-2">
                  {step.title}
                </h3>
                <p className="text-[13px] text-zinc-600 font-[500] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
