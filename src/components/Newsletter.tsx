'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <section className="max-w-4xl mx-auto px-4 my-20">
      <div className="glass-panel rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-rose-500/20">
        
        <span className="text-3xl mb-3 block">📩</span>
        
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
          Recibe 1 plantilla de n8n gratis cada semana
        </h2>
        
        <p className="text-slate-600 dark:text-slate-400 text-sm max-w-lg mx-auto mb-8">
          Sin spam. Te enviamos directamente a tu bandeja de entrada flujos de automatización probados con guías de instalación.
        </p>

        {submitted ? (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
            🎉 ¡Suscrito con éxito! Revisa tu correo pronto.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 px-4 py-3 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:border-rose-500 transition-colors"
            />
            <button
              type="submit"
              className="px-6 py-3 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-500 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-rose-500/30 hover:scale-105 active:scale-95 transition-all"
            >
              Suscribirme
            </button>
          </form>
        )}

      </div>
    </section>
  );
}

