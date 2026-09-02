'use client';

export default function BundleBanner() {
  return (
    <section className="max-w-6xl mx-auto px-4 my-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-rose-500 via-rose-600 to-orange-500 p-8 sm:p-12 text-white shadow-2xl shadow-rose-500/20">
        
        {/* Adorno visual de fondo */}
        <div className="absolute -right-12 -top-12 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-black/10 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="max-w-2xl text-center lg:text-left">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-mono font-bold uppercase tracking-wider mb-4 border border-white/30">
              🔥 Oferta Especial Limita
            </span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight mb-3">
              Consigue el Pase All-Access a Todas las Plantillas
            </h2>
            <p className="text-rose-100 text-sm sm:text-base leading-relaxed">
              Accede a todo nuestro catálogo actual de más de 50 workflows + todas las nuevas plantillas que publiquemos durante el año. Con actualizaciones de por vida.
            </p>
          </div>

          <div className="flex flex-col items-center lg:items-end gap-3 shrink-0">
            <div className="text-center lg:text-right">
              <span className="text-xs uppercase font-mono tracking-wider text-rose-200 line-through mr-2">
                $490
              </span>
              <span className="text-4xl font-black">$99</span>
              <span className="text-xs text-rose-200 block">/pago único</span>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-slate-900 hover:bg-black text-white font-black text-xs uppercase tracking-wider shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-white/10"
            >
              <span>Desbloquear Todo</span>
              <span>⚡</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

