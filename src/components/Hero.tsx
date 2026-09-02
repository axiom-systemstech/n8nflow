'use client';

interface HeroProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

export default function Hero({ searchQuery, setSearchQuery }: HeroProps) {
  return (
    <section className="max-w-4xl mx-auto text-center px-4 mb-16 space-y-8">
      
      {/* Badge Flotante estilo Neón */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-rose-500/30 bg-rose-500/10 text-rose-500 dark:text-rose-400 text-xs font-bold uppercase tracking-wider shadow-[0_0_15px_rgba(255,109,90,0.2)]">
        <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping" />
        n8n Verified Workflows
      </div>

      {/* Titular Principal */}
      <h1 className="text-4xl sm:text-6xl font-black tracking-tight leading-tight text-slate-900 dark:text-white">
        Automatiza tu negocio en minutos,{' '}
        <span className="bg-gradient-to-r from-rose-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
          no en semanas.
        </span>
      </h1>

      {/* Subtítulo */}
      <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
        Descarga plantillas de n8n listas para producción. Copia el archivo JSON, conecta tus claves API y pon a rodar tus flujos al instante.
      </p>

      {/* Buscador Skeuomórfico con efecto de relieve hundido */}
      <div className="max-w-xl mx-auto pt-2">
        <div className="relative glass-panel p-2 rounded-2xl shadow-2xl flex items-center">
          <span className="pl-3 text-slate-400">🔍</span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Buscar por app (ej. OpenAI, Gmail, Stripe...)"
            className="w-full bg-transparent px-3 py-2 text-slate-900 dark:text-white placeholder-slate-400 text-sm focus:outline-none"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="px-2 text-xs text-slate-400 hover:text-rose-500 font-mono"
            >
              LIMPIAR
            </button>
          )}
        </div>
      </div>

      {/* Bloque de Métricas / Stats en Cristal */}
      <div className="grid grid-cols-3 gap-3 sm:gap-6 pt-6 max-w-2xl mx-auto">
        <div className="glass-panel p-4 rounded-xl text-center">
          <span className="block text-xl sm:text-2xl font-black text-rose-500">+50</span>
          <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Workflows</span>
        </div>
        <div className="glass-panel p-4 rounded-xl text-center">
          <span className="block text-xl sm:text-2xl font-black text-amber-500">+1.2k</span>
          <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Hrs Ahorradas</span>
        </div>
        <div className="glass-panel p-4 rounded-xl text-center">
          <span className="block text-xl sm:text-2xl font-black text-emerald-500">100%</span>
          <span className="text-[10px] sm:text-xs font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wider">Cloud & VPS</span>
        </div>
      </div>

    </section>
  );
}
