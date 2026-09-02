'use client';

// Mapeo de nombres de apps a sus URLs de iconos SVG oficiales en alta calidad (vía Simple Icons / SVGL)
const APP_LOGOS: Record<string, string> = {
  gmail: 'https://cdn.simpleicons.org/gmail/EA4335',
  openai: 'https://cdn.simpleicons.org/openai/000000',
  airtable: 'https://cdn.simpleicons.org/airtable/18BFFF',
  notion: 'https://cdn.simpleicons.org/notion/000000',
  linkedin: 'https://cdn.simpleicons.org/linkedin/0A66C2',
  stripe: 'https://cdn.simpleicons.org/stripe/635BFF',
  slack: 'https://cdn.simpleicons.org/slack/4A154B',
  wordpress: 'https://cdn.simpleicons.org/wordpress/21759B',
  telegram: 'https://cdn.simpleicons.org/telegram/26A5E4',
  whatsapp: 'https://cdn.simpleicons.org/whatsapp/25D366',
  hubspot: 'https://cdn.simpleicons.org/hubspot/FF7A59',
  make: 'https://cdn.simpleicons.org/make/6D00FF',
  n8n: 'https://cdn.simpleicons.org/n8n/FF6D5A',
  google: 'https://cdn.simpleicons.org/google/4285F4',
  sheets: 'https://cdn.simpleicons.org/googlesheets/34A853',
};

interface AppLogoProps {
  appName: string;
  className?: string;
}

export default function AppLogo({ appName, className = 'w-4 h-4' }: AppLogoProps) {
  const key = appName.toLowerCase().trim();
  const logoUrl = APP_LOGOS[key];

  if (!logoUrl) {
    // Si no tenemos el logo configurado, mostramos el emoji del rayo por defecto
    return <span className="text-xs">⚡</span>;
  }

  return (
    <img
      src={logoUrl}
      alt={`${appName} logo`}
      className={`${className} object-contain shrink-0 dark:invert-[0.1]`}
      loading="lazy"
    />
  );
}

