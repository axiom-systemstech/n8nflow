import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'n8nflow - Plantillas de Automatización de n8n Verificadas',
  description: 'Ahorra cientos de horas descargando flujos de n8n con IA, CRM y herramientas No-Code listos para importar.',
  keywords: [
    'n8n',
    'n8n templates',
    'plantillas n8n',
    'automatizaciones n8n',
    'n8n workflows',
    'n8n whatsapp openai',
    'marketplace n8n',
    'automatizar procesos con IA',
  ],
  authors: [{ name: 'n8nflow Team' }],
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  verification: {
    google: 'ajm0V3Eod_L2afiSt_3EK0MCt-bRP_Jr4QgGZiStqD4',
  },
  openGraph: {
    title: 'n8nflow - Plantillas de Automatización de n8n',
    description: 'Ahorra cientos de horas descargando flujos de n8n con IA, CRM y herramientas No-Code listos para importar.',
    url: 'https://n8nflow-eight.vercel.app',
    siteName: 'n8nflow',
    images: [
      {
        url: '/logo.png',
        width: 800,
        height: 800,
        alt: 'n8nflow Logo',
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'n8nflow - Plantillas de Automatización de n8n',
    description: 'Encuentra y descarga workflows de n8n para potenciar tu negocio con IA y automatizaciones.',
    images: ['/logo.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        {/* Esquema de datos estructurados para Google e IAs (ChatGPT, Perplexity, etc.) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'n8nflow',
              url: 'https://n8nflow-eight.vercel.app/',
              description: 'Marketplace de plantillas y flujos de automatización para n8n.',
              publisher: {
                '@type': 'Organization',
                name: 'n8nflow',
                logo: 'https://n8nflow-eight.vercel.app/logo.png',
              },
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 antialiased selection:bg-rose-500 selection:text-white transition-colors duration-300`}>
        {children}
      </body>
    </html>
  );
}
