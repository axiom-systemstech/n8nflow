'use client';

import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Carlos Mendoza',
    role: 'Fundador de Agencia de Marketing',
    content: 'Compré la plantilla de integración con WhatsApp y OpenAI. Nos ahorró semanas de desarrollo técnico. Funcionó a la primera.',
    avatar: '/carlos.png',
  },
  {
    name: 'Elena Rostova',
    role: 'Ops Manager en SaaS',
    content: 'El catálogo de flujos es brutal. La estructura del JSON está super bien documentada y limpia. Muy recomendable.',
    avatar: '/elena.png',
  },
  {
    name: 'Javier Roca',
    role: 'Consultor de Automatización',
    content: 'Lo que más me gusta es el soporte post-venta. Tuve un problema con un Webhook y me ayudaron a arreglarlo en minutos.',
    avatar: '/javier.png',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-[1120px] mx-auto px-4 py-12">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-[800] text-[#1b1730] dark:text-white tracking-tight">
          Lo que dicen otros automatizadores
        </h2>
        <p className="text-zinc-600 dark:text-zinc-400 font-[500] text-sm mt-1">
          Miles de horas ahorradas en agencias, startups y negocios digitales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((rev, idx) => (
          <div
            key={idx}
            className="p-6 rounded-[28px] bg-white/80 dark:bg-zinc-900/80 border border-white/40 dark:border-zinc-800 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.12)] backdrop-blur-[24px] flex flex-col justify-between gap-4"
          >
            <div className="space-y-3">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-zinc-700 dark:text-zinc-300 text-xs sm:text-sm font-[500] leading-relaxed italic">
                "{rev.content}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-zinc-200/50 dark:border-zinc-800">
              <img
                src={rev.avatar}
                alt={rev.name}
                className="w-10 h-10 rounded-full object-cover border-2 border-white dark:border-zinc-700 shadow-xs"
              />
              <div>
                <h4 className="text-xs font-[750] text-[#1b1730] dark:text-white">{rev.name}</h4>
                <p className="text-[11px] text-zinc-500 dark:text-zinc-400 font-[500]">{rev.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
