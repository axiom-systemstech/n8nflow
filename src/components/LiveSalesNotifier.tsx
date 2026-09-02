'use client';

import { useState, useEffect } from 'react';

const SALES_NOTIFICATIONS = [
  { name: 'Alex M.', city: 'Madrid', item: 'Auto-Responder de Leads con IA' },
  { name: 'David R.', city: 'México DF', item: 'Generador de Contenido Multi-Redes' },
  { name: 'Lucas S.', city: 'Buenos Aires', item: 'Recuperador de Pagos Stripe' },
  { name: 'Sonia G.', city: 'Barcelona', item: 'Pack All-Access' },
];

export default function LiveSalesNotifier() {
  const [current, setCurrent] = useState<typeof SALES_NOTIFICATIONS[0] | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const randomItem = SALES_NOTIFICATIONS[Math.floor(Math.random() * SALES_NOTIFICATIONS.length)];
      setCurrent(randomItem);
      setVisible(true);

      setTimeout(() => setVisible(false), 5000);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  if (!visible || !current) return null;

  return (
    <div className="fixed bottom-5 left-5 z-40 animate-bounceIn max-w-xs">
      <div className="glass-panel p-3.5 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-3 text-slate-900 dark:text-white">
        <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center text-sm shrink-0">
          ⚡
        </div>
        <div className="text-xs">
          <p className="font-bold">
            {current.name} <span className="font-normal text-slate-400">de {current.city}</span>
          </p>
          <p className="text-[11px] text-slate-500 dark:text-slate-400 truncate max-w-[180px]">
            Ha adquirido <span className="text-rose-500 font-semibold">{current.item}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

