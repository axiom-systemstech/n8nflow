'use client';

import React from 'react';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Carlos Mendoza',
    role: 'Fundador de Agencia de Marketing',
    content: 'Compré la plantilla de integración con WhatsApp y OpenAI. Nos ahorró semanas de desarrollo técnico. Funcionó a la primera.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
  },
  {
    name: 'Elena Rostova',
    role: 'Ops Manager en SaaS',
    content: 'El catálogo de flujos es brutal. La estructura del JSON está super bien documentada y limpia. Muy recomendable.',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
  },
  {
    name: 'David Sola',
    role: 'Consultor de Automatización',
    content: 'Lo que más me gusta es el soporte post-venta. Tuve un problema con un Webhook y me ayudaron a arreglarlo en minutos.',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-[1120px] mx-auto px-4 py-12">
      <div className="text-center max-w-xl mx-auto mb-10">
        <h2 className="text-2xl sm:text-3xl font-[800] text-[#1b1730] tracking-tight">
          Lo que dicen otros automatizadores
        </h2>
        <p className="text-zinc-600 font-[500] text-sm mt-1">
          Miles de horas ahorradas en agencias, startups y negocios digitales.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((rev, idx) => (
          <div
            key={idx}
            className="p-6 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.12)] backdrop-blur-[24px] flex flex-col justify-between gap-4"
          >
            <div className="space-y-3">
              <div className="flex gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400" />
                ))}
              </div>
              <p className="text-zinc-700 text-xs sm:text-sm font-[500] leading-relaxed italic">
                "{rev.content}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-3 border-t border-zinc-200/50">
              <img
                src={rev.avatar}
                alt={rev.name}
                className="w-9 h-9 rounded-full object-cover border border-white"
              />
              <div>
                <h4 className="text-xs font-[750] text-[#1b1730]">{rev.name}</h4>
                <p className="text-[11px] text-zinc-500 font-[500]">{rev.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
