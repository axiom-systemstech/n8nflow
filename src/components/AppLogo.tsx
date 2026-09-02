'use client';

import { useState } from 'react';

interface AppLogoProps {
  appName: string;
  className?: string;
}

export default function AppLogo({ appName, className = 'w-4 h-4' }: AppLogoProps) {
  const [hasError, setHasError] = useState(false);

  // Normalizamos el nombre: "Google Sheets" -> "googlesheets", "OpenAI" -> "openai"
  const fileName = appName
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '')
    .replace(/[^a-z0-9]/g, '');

  const imagePath = `/apps/${fileName}.png`;

  if (hasError) {
    return (
      <span className="inline-flex items-center justify-center w-4 h-4 rounded-full bg-slate-200 dark:bg-slate-700 text-[9px] font-bold text-slate-600 dark:text-slate-300 shrink-0">
        {appName.charAt(0).toUpperCase()}
      </span>
    );
  }

  return (
    <img
      src={imagePath}
      alt={`${appName} logo`}
      className={`${className} object-contain shrink-0`}
      onError={() => setHasError(true)}
    />
  );
}
