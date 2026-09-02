import { Workflow } from '../types/workflow';

export const WORKFLOWS: Workflow[] = [
  {
    id: 'auto-responder-ia',
    title: 'Auto-Respondedor de Leads con IA',
    description: 'Filtra emails entrantes de Gmail, clasifica la intención con GPT-4o, guarda el lead en Airtable y redacta un borrador de respuesta automático.',
    category: 'ia',
    price: 19,
    apps: ['Gmail', 'OpenAI', 'Airtable'],
    timeSaved: '10 hrs/sem',
    gumroadUrl: 'https://gumroad.com',
    featured: true,
  },
  {
    id: 'social-media-auto',
    title: 'Generador de Contenido Multi-Redes',
    description: 'Transforma ideas de Notion en posts optimizados para LinkedIn, X y borrador en WordPress usando IA.',
    category: 'marketing',
    price: 29,
    apps: ['Notion', 'OpenAI', 'LinkedIn'],
    timeSaved: '15 hrs/sem',
    gumroadUrl: 'https://gumroad.com',
  },
  {
    id: 'stripe-failed-payments',
    title: 'Recuperador de Pagos Fallidos Stripe',
    description: 'Detecta cuando un pago de Stripe falla, envía una notificación prioritaria a Slack y un email personalizado al cliente.',
    category: 'ventas',
    price: 39,
    apps: ['Stripe', 'Slack', 'Gmail'],
    timeSaved: '5 hrs/sem',
    gumroadUrl: 'https://gumroad.com',
  }
];

