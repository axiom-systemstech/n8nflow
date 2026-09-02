'use client';

import { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');

    const botToken = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
    const chatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;

    // Si las variables están configuradas, enviamos el mensaje a Telegram
    if (botToken && chatId) {
      try {
        const message = `🔥 *¡Nuevo Lead en n8nflow!*\n\n📧 *Email:* \`${email}\`\n📅 *Fecha:* ${new Date().toLocaleString('es-ES')}`;

        await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: chatId,
            text: message,
            parse_mode: 'Markdown',
          }),
        });
      } catch (error) {
        console.error('Error enviando notificación a Telegram:', error);
      }
    }

    // Simulamos respuesta de éxito al usuario
    setTimeout(() => {
      setStatus('success');
      setEmail('');
    }, 800);
  };

  return (
    <section className="max-w-4xl mx-auto px-4 my-20">
      <div className="glass-panel p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-slate-200 dark:border-slate-800 text-center shadow-2xl">
        <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-3xl rounded-full pointer-events-none" />

        <span className="inline-block px-3 py-1 rounded-full bg-rose-500/10 text-rose-600 dark:text-rose-400 font-mono text-xs font-bold uppercase tracking-wider mb-4 border border-rose-500/20">
          🎁 Regalo de Bienvenida
        </span>

        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3">
          Consigue nuestra Plantilla Starter GRATIS
        </h2>

        <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
          Suscríbete y recibe directamente en tu email el flujo de automatización con IA para filtrar y clasificar emails entrantes en tiempo real.
        </p>

        {status === 'success' ? (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold text-sm max-w-md mx-auto animate-fadeIn">
            🎉 ¡Listo! Revisa tu bandeja de entrada o Telegram, te hemos enviado el enlace de descarga.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="tu@email.com"
              className="flex-1 px-4 py-3.5 rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
            />
            <button
              type="submit"
              disabled={status === 'loading'}
              className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-rose-500/30 hover:scale-105 active:scale-95 transition-all disabled:opacity-50 shrink-0"
            >
              {status === 'loading' ? 'Enviando...' : 'Obtener Gratis 🚀'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
