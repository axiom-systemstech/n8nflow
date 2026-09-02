'use client';

import { useState, useEffect } from 'react';

const SALES_NOTIFICATIONS = [
  { name: 'Alex M.', city: 'Madrid', item: 'Auto-Responder de Leads con IA', time: 'Hace 2 min' },
  { name: 'Carlos R.', city: 'Barcelona', item: 'Generador de Contenido Multi-Redes', time: 'Hace 5 min' },
  { name: 'Sonia G.', city: 'Valencia', item: 'Pase All-Access (Todas las plantillas)', time: 'Hace 1 min' },
  { name: 'David P.', city: 'México DF', item: 'Recuperador de Pagos Fallidos Stripe', time: 'Hace 8 min' },
  { name: 'Lucas S.', city: 'Buenos Aires', item: 'Auto-Responder de Leads con IA', time: 'Hace 3 min' },
  { name: 'Elena B.', city: 'Sevilla', item: 'Pase All-Access (Todas las plantillas)', time: 'Hace 12 min' },
  { name: 'Mateo H.', city: 'Bogotá', item: 'Generador de Contenido Multi-Redes', time: 'Hace 4 min' },
  { name: 'Javier K.', city: 'Santiago de Chile', item: 'Recuperador de Pagos Fallidos Stripe', time: 'Hace 6 min' },
  { name: 'Laura V.', city: 'Bilbao', item: 'Auto-Responder de Leads con IA', time: 'Hace 9 min' },
];

export default function LiveSalesNotifier() {
  const [current, setCurrent] = useState<typeof SALES_NOTIFICATIONS[0] | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let hideTimer: NodeJS.Timeout;
    let nextTimer: NodeJS.Timeout;

    const showNextNotification = () => {
      // Elegir una compra aleatoria
      const randomItem = SALES_NOTIFICATIONS[Math.floor(Math.random() * SALES_NOTIFICATIONS.length)];
      setCurrent(randomItem);
      setVisible(true);

      // Ocultar la notificación a los 5 segundos
      hideTimer = setTimeout(() => {
        setVisible(false);

        // Programar la siguiente notificación entre 7 y 13 segundos después de ocultarse
        const nextDelay = Math.floor(Math.random() * 6000) + 7000;
        nextTimer = setTimeout(showNextNotification, nextDelay);
      }, 5000);
    };

    // Primera aparición tras 3 segundos de cargar la página
    const initialTimer = setTimeout(showNextNotification, 3000);

    return () => {
      clearTimeout(initialTimer);
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, []);

  if (!current) return null;

  return (
    <div
      className={`fixed bottom-5 left-5 z-40 transition-all duration-500 transform max-w-xs ${
        visible
          ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto'
          : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
      }`}
    >
      <div className="glass-panel p-3.5 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-slate-900 dark:text-white bg-white/90 dark:bg-slate-900/90 backdrop-blur-lg">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 text-white flex items-center justify-center text-base shrink-0 shadow-md shadow-emerald-500/20 font-bold">
          ✓
        </div>
        <div className="text-xs overflow-hidden">
          <div className="flex items-center justify-between gap-2">
            <p className="font-bold truncate">
              {current.name} <span className="font-normal text-slate-400 dark:text-slate-500">de {current.city}</span>
            </p>
            <span className="text-[9px] font-mono text-slate-400 shrink-0">{current.time}</span>
          </div>
          <p className="text-[11px] text-slate-600 dark:text-slate-300 truncate mt-0.5">
            Ha adquirido <span className="text-rose-500 font-semibold">{current.item}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
