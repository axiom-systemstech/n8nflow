'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: '¿Cómo recibo las plantillas tras la compra?',
    a: 'La descarga es inmediata. Recibirás un enlace directo para descargar el archivo JSON de la plantilla, el cual puedes importar en tu n8n en menos de 10 segundos.',
  },
  {
    q: '¿Qué versión de n8n necesito?',
    a: 'Nuestras plantillas están probadas en las versiones más recientes de n8n (v1.0+). Funcionan tanto en la versión Self-Hosted (Docker) como en n8n Cloud.',
  },
  {
    q: '¿Qué pasa si una plantilla no me funciona?',
    a: 'Ofrecemos soporte post-venta. Si tienes algún problema con la importación o configuración de credenciales, nuestro equipo te guiará paso a paso.',
  },
  {
    q: '¿Necesito conocimientos de programación?',
    a: 'No. Las plantillas vienen completamente estructuradas. Únicamente tendrás que sustituir tus claves de API o tokens de las aplicaciones que uses.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-[1120px] mx-auto px-4 py-12">
      <div className="text-center max-w-xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-[650] bg-violet-500/10 text-violet-600 border border-violet-500/20 mb-2">
          <HelpCircle className="w-3.5 h-3.5" /> FAQ
        </div>
        <h2 className="text-2xl sm:text-3xl font-[800] text-[#1b1730] tracking-tight">
          Preguntas Frecuentes
        </h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-3">
        {FAQS.map((faq, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div
              key={idx}
              className="rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_100%)] border border-white/40 shadow-xs backdrop-blur-[24px] overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4"
              >
                <span className="text-xs sm:text-sm font-[750] text-[#1b1730]">
                  {faq.q}
                </span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-violet-600' : ''
                  }`}
                />
              </button>
              {isOpen && (
                <div className="px-5 pb-5 pt-0 text-xs text-zinc-600 font-[500] leading-relaxed border-t border-zinc-100/60 pt-3">
                  {faq.a}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
