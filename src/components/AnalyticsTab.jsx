import React from 'react';
import { RefreshCw } from 'lucide-react';

export default function AnalyticsTab() {
  return (
    <div className="p-5 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.16)] backdrop-blur-[24px] flex flex-col gap-4">
      <div className="pb-2 border-b border-zinc-200/60 flex justify-between items-center">
        <div>
          <h2 className="text-[16px] font-[750] tracking-tight">Rendimiento del Sistema</h2>
          <p className="text-[12px] text-zinc-500 font-[500]">Uso de recursos y latencia en tiempo real</p>
        </div>
        <button className="p-2 rounded-full hover:bg-white/80 transition-colors text-zinc-600">
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-2">
        <div className="p-4 rounded-[20px] bg-white/60 border border-white/40">
          <div className="text-[11px] font-[650] text-zinc-400 uppercase tracking-wide mb-1">Consumo de Tokens</div>
          <div className="text-[20px] font-[750]">1.4M / 5M</div>
          <div className="w-full bg-zinc-200 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-violet-600 h-full rounded-full w-[28%]"></div>
          </div>
        </div>

        <div className="p-4 rounded-[20px] bg-white/60 border border-white/40">
          <div className="text-[11px] font-[650] text-zinc-400 uppercase tracking-wide mb-1">Latencia Promedio</div>
          <div className="text-[20px] font-[750]">340 ms</div>
          <div className="w-full bg-zinc-200 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-emerald-500 h-full rounded-full w-[15%]"></div>
          </div>
        </div>

        <div className="p-4 rounded-[20px] bg-white/60 border border-white/40">
          <div className="text-[11px] font-[650] text-zinc-400 uppercase tracking-wide mb-1">Peticiones / Minuto</div>
          <div className="text-[20px] font-[750]">128 RPM</div>
          <div className="w-full bg-zinc-200 h-1.5 rounded-full mt-3 overflow-hidden">
            <div className="bg-sky-500 h-full rounded-full w-[60%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

