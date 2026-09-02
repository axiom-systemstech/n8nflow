'use client';

const TESTIMONIALS = [
  {
    name: 'Carlos Mendoza',
    role: 'Fundador de Agencia AI',
    comment: 'Las plantillas de n8nflow nos han ahorrado al menos 40 horas de desarrollo en el último mes. La plantilla de responder leads con GPT es pura magia.',
    avatar: '/carlos.png',
    rating: 5,
  },
  {
    name: 'Elena Rostova',
    role: 'Operations Lead',
    comment: 'Implementamos la automatización de Stripe y Slack en menos de 10 minutos. Súper limpio, bien estructurado y fácil de adaptar.',
    avatar: '/elena.png',
    rating: 5,
  },
  {
    name: 'Javier Roca',
    role: 'Freelancer No-Code',
    comment: 'El retorno de inversión es inmediato. Solo por no tener que configurar los nodos desde cero, el costo de la plantilla se paga solo el primer día.',
    avatar: '/javier.png',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="max-w-6xl mx-auto px-4 my-20">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white mb-2">
          Lo que dicen quienes ya automatizan
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-sm">
          Cientos de agencias y creadores confían en nuestros flujos verificados.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {TESTIMONIALS.map((t, i) => (
          <div key={i} className="glass-panel rounded-3xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex gap-1 text-amber-400 text-sm mb-4">
                {'★'.repeat(t.rating)}
              </div>
              <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed mb-6 italic">
                "{t.comment}"
              </p>
            </div>

            <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80 dark:border-slate-800/60">
              <img
                src={t.avatar}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover border border-slate-300 dark:border-slate-700 shadow-sm"
              />
              <div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.name}</h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
