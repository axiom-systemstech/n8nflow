import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'n8nflow - Plantillas de Automatización n8n',
  description: 'Descarga plantillas de n8n listas para producción.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-rose-500 selection:text-white">
        {children}
      </body>
    </html>
  );
}

