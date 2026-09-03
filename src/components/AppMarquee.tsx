import React from 'react';

const APPS = [
  { name: 'n8n', icon: '/apps/n8n.png' },
  { name: 'OpenAI', icon: '/apps/openai.png' },
  { name: 'Google Sheets', icon: '/apps/googlesheets.png' },
  { name: 'Gmail', icon: '/apps/gmail.png' },
  { name: 'Airtable', icon: '/apps/airtable.png' },
  { name: 'Gemini', icon: '/apps/gemini.png' },
  { name: 'HubSpot', icon: '/apps/hubspot.png' },
  { name: 'LinkedIn', icon: '/apps/linkedin.png' },
  { name: 'Make', icon: '/apps/make.png' },
  { name: 'Notion', icon: '/apps/notion.png' },
  { name: 'Slack', icon: '/apps/slack.png' },
  { name: 'Stripe', icon: '/apps/stripe.png' },
  { name: 'Telegram', icon: '/apps/telegram.png' },
  { name: 'WhatsApp', icon: '/apps/whatsapp.png' },
  { name: 'WordPress', icon: '/apps/wordpress.png' },
];

export const AppMarquee: React.FC = () => {
  // Duplicamos el array para lograr un efecto de bucle infinito suave
  const doubleApps = [...APPS, ...APPS];

  return (
    <section className="py-12 bg-slate-950/50 border-y border-slate-800/80 overflow-hidden relative">
      {/* Degradados laterales para difuminar los bordes */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none" />

      <div className="text-center mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-400">
          Integración nativa con tus herramientas favoritas
        </p>
      </div>

      <div className="flex overflow-hidden group">
        <div className="flex gap-8 animate-marquee whitespace-nowrap">
          {doubleApps.map((app, index) => (
            <div
              key={`${app.name}-${index}`}
              className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/30 transition-all shrink-0"
            >
              <img
                src={app.icon}
                alt={app.name}
                className="w-6 h-6 object-contain"
                onError={(e) => {
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="text-sm font-medium text-slate-300">
                {app.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppMarquee;

