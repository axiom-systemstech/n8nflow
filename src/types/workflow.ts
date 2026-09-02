export type Category = 'all' | 'ia' | 'marketing' | 'ventas' | 'productividad';

export interface Workflow {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  category: Category;
  apps: string[];
  price: number;
  timeSaved: string;
  setupTime: string; // ej: '5 min'
  difficulty: 'Principiante' | 'Intermedio' | 'Avanzado';
  featured?: boolean;
  gumroadUrl: string;
  requirements: string[]; // ej: ['Cuenta de OpenAI', 'API Key de Stripe']
  rating?: number;
  reviewsCount?: number;
}
