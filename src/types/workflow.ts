export type Category = 'ia' | 'marketing' | 'ventas' | 'productividad';

export interface Workflow {
  id: string;
  title: string;
  description: string;
  category: Category;
  price: number;
  apps: string[];
  timeSaved: string;
  gumroadUrl: string;
  featured?: boolean;
}

