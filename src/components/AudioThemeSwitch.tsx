'use client';

import { useState, useEffect } from 'react';

export default function AudioThemeSwitch() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="relative flex items-center justify-between w-14 h-7 p-1 rounded-full bg-slate-200 dark:bg-slate-800 border border-slate-300 dark:border-slate-700 shadow-inner transition-colors duration-300"
      aria-label="Toggle Theme"
    >
      <span className="text-[10px] z-10 pl-0.5">☀️</span>
      <span className="text-[10px] z-10 pr-0.5">🌙</span>
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white dark:bg-rose-500 shadow-md transform transition-transform duration-300 ${
          isDark ? 'translate-x-7' : 'translate-x-0'
        }`}
      />
    </button>
  );
}
