import React from 'react';

interface AppBadgeProps {
  appName: string;
}

const APP_LOGOS: Record<string, string> = {
  'n8n': '/apps/n8n.png',
  'OpenAI': '/apps/openai.png',
  'Google Sheets': '/apps/googlesheets.png',
  'Gmail': '/apps/gmail.png',
  'Airtable': '/apps/airtable.png',
  'Gemini': '/apps/gemini.png',
  'Google': '/apps/google.png',
  'HubSpot': '/apps/hubspot.png',
  'LinkedIn': '/apps/linkedin.png',
  'Make': '/apps/make.png',
  'Notion': '/apps/notion.png',
  'Slack': '/apps/slack.png',
  'Stripe': '/apps/stripe.png',
  'Telegram': '/apps/telegram.png',
  'WhatsApp': '/apps/whatsapp.png',
  'WordPress': '/apps/wordpress.png',
};

export const AppBadge: React.FC<AppBadgeProps> = ({ appName }) => {
  const logoPath = APP_LOGOS[appName];

  return (
    <span className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-md bg-slate-800/80 text-slate-300 border border-slate-700/60 font-medium">
      {logoPath && (
        <img 
          src={logoPath} 
          alt={appName} 
          className="w-3.5 h-3.5 object-contain"
          onError={(e) => {
            (e.target as HTMLElement).style.display = 'none';
          }}
        />
      )}
      {appName}
    </span>
  );
};

export default AppBadge;

