'use client';

export default function CustomServiceAndGuarantee() {
  return (
    <section className="max-w-6xl mx-auto px-4 my-20 space-y-16">
      
      {/* Banner 1: Solicitud de Workflows Personalizados (High-Ticket) */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 dark:bg-slate-900/90 border border-slate-800 p-8 sm:p-12 text-white shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-rose-500/20 to-transparent blur-3xl pointer-events-none" />
        
        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-rose-500/20 text-rose-400 font-mono text-xs font-bold uppercase tracking-wider mb-4 border border-rose-500/30">
              🛠️ Servicio para Agencias y Empresas
            </span>
            <h2 className="text-2xl sm:text-4xl font-black tracking-tight mb-3">
              ¿Necesitas una automatización a medida?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              Si no encuentras el flujo exacto que buscas en el catálogo, nuestros ingenieros de n8n lo construyen, prueban y despliegan en tus servidores en menos de 48 horas.
            </p>
          </div>

          <a
            href="https://t.me/n8nfloww" 
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-4 rounded-2xl bg-gradient-to-r from-rose-500 to-orange-500 hover:from-rose-600 hover:to-orange-600 text-white font-black text-xs uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
          >
            <span>Pedir Workflow Personalizado</span>
            <span>💬</span>
          </a>
        </div>
      </div>

      {/* Bloque 2: Garantía, Compatibilidad y Soporte */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-2xl mb-4">
            🛡️
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Garantía de Funcionamiento</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Si la plantilla no funciona correctamente en tu versión de n8n, nuestro equipo te ayuda a configurarla o te devolvemos el 100% de tu dinero.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60">
          <div className="w-12 h-12 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center text-2xl mb-4">
            ⚡
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">100% Compatibles v1.x</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Todos nuestros archivos JSON están actualizados a la última versión estable de n8n con soporte nativo para nodos de IA.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-3xl border border-slate-200/60 dark:border-slate-800/60">
          <div className="w-12 h-12 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center text-2xl mb-4">
            📚
          </div>
          <h3 className="font-bold text-slate-900 dark:text-white mb-2">Guías de Instalación</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Cada descarga incluye un paso a paso detallado para configurar tus credenciales API en cuestión de minutos sin programar.
          </p>
        </div>
      </div>

    </section>
  );
}
