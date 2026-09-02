import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'n8nflow - Plantillas de Automatización de n8n Verificadas',
  description: 'Ahorra cientos de horas descargando flujos de n8n con IA, CRM y herramientas No-Code listos para importar.',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'n8nflow - Plantillas de Automatización de n8n',
    description: 'Descarga workflows de n8n listos para usar.',
    url: 'https://n8nflow-eight.vercel.app',
    siteName: 'n8nflow',
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-rose-500 selection:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
