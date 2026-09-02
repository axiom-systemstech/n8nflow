'use client';

import { useState } from 'react';

const FAQS = [
  {
    q: '¿Qué recibo exactamente al comprar una plantilla?',
    a: 'Recibirás acceso inmediato a la descarga del archivo `.json` de la automatización junto con una guía rápida en PDF sobre cómo configurar las credenciales y nodos.',
  },
  {
    q: '¿Funciona con la versión gratuita de n8n?',
    a: 'Sí, el 100% de nuestras plantillas son totalmente compatibles tanto con n8n Cloud como con instancias Self-Hosted en Docker/VPS.',
  },
  {
    q: '¿Necesito saber programar?',
    a: 'No. Las plantillas están listas para conectar y usar. Solo necesitas pegar tus claves API de las herramientas que utilices.',
  },
  {
    q: '¿Tengo soporte si alguna integración no me funciona?',
    a: 'Por supuesto. Cada compra incluye soporte por correo electrónico para resolver cualquier duda durante el despliegue.',
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="max-w-3xl mx-auto px-4 py-16 scroll-mt-24">
      <div className="text-center mb-12 space-y-2">
        <span className="text-xs font-mono font-bold text-amber-500 uppercase tracking-widest">
          Resolvemos tus dudas
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
          Preguntas Frecuentes
        </h2>
      </div>

      <div className="space-y-4">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="glass-panel rounded-2xl p-5 cursor-pointer transition-all duration-200"
            >
              <div className="flex justify-between items-center font-bold text-sm sm:text-base text-slate-900 dark:text-white">
                <span>{faq.q}</span>
                <span className="text-rose-500 font-mono text-lg">{isOpen ? '−' : '+'}</span>
              </div>
              {isOpen && (
                <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-200/40 dark:border-slate-800/60 pt-3">
                  {faq.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

