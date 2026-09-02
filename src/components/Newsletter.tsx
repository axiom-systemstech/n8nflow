'use client';

import React, { useState } from 'react';
import { Mail, Send, Sparkles } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="max-w-[1120px] mx-auto px-4 py-8">
      <div className="p-8 sm:p-10 rounded-[32px] bg-[linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.70)_100%)] border border-white/60 shadow-[0_28px_70px_-16px_rgba(60,20,80,0.14)] backdrop-blur-[24px] text-center max-w-3xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-[650] bg-violet-500/10 text-violet-600 border border-violet-500/20">
          <Sparkles className="w-3.5 h-3.5" /> Newsletter
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-[800] text-[#1b1730] tracking-tight">
            Recibe nuevas plantillas semanales en tu inbox
          </h2>
          <p className="text-zinc-600 font-[500] text-xs sm:text-sm max-w-lg mx-auto">
            Únete a más de 1,200 automatizadores. Te enviaremos nuevas plantillas gratuitas y tutoriales de n8n.
          </p>
        </div>

        {subscribed ? (
          <div className="p-4 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-[650] max-w-md mx-auto">
            ¡Gracias por suscribirte! Te hemos enviado un correo de bienvenida.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
            <div className="relative flex-1">
              <Mail className="w-4 h-4 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="w-full pl-10 pr-4 py-2.5 rounded-full bg-white/80 border border-white/60 text-xs font-[550] text-[#1b1730] placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500/20"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-2.5 rounded-full bg-[#1b1730] hover:bg-black text-white text-xs font-[650] transition-colors shadow-sm flex items-center justify-center gap-2"
            >
              <span>Suscribirme</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
