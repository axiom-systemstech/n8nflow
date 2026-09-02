'use client';

const STEPS = [
  {
    number: '01',
    title: 'Elige tu Workflow',
    description: 'Explora nuestro catálogo verificado y encuentra la automatización que necesitas para tu negocio.',
    icon: '📦',
  },
  {
    number: '02',
    title: 'Importa a n8n',
    description: 'Descarga el archivo JSON e impórtalo directamente en tu instancia de n8n con un solo clic.',
    icon: '⚡',
  },
  {
    number: '03',
    title: 'Conecta tus APIS',
    description: 'Añade tus credenciales (OpenAI, Gmail, Stripe, etc.) y pon a ejecutar tus procesos en segundos.',
    icon: '🚀',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="max-w-5xl mx-auto px-4 py-16 scroll-mt-24">
      <div className="text-center mb-12 space-y-2">
        <span className="text-xs font-mono font-bold text-rose-500 uppercase tracking-widest">
          Despliegue Sin Complicaciones
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white">
          ¿Cómo funciona n8nflow?
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {STEPS.map((step) => (
          <div key={step.number} className="glass-panel p-6 rounded-3xl relative overflow-hidden flex flex-col justify-between">
            <span className="text-4xl font-black text-slate-300 dark:text-slate-800 absolute top-4 right-4 font-mono">
              {step.number}
            </span>
            <div>
              <div className="text-3xl mb-4">{step.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

