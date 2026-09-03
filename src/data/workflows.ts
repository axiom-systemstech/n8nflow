import { Workflow } from '../types/workflow';

export const WORKFLOWS: Workflow[] = [
  {
    id: 'lead-response-engine',
    title: 'Lead Response Engine — AI Lead Qualification for n8n',
    description: 'Turns your existing form or webhook into an automated lead qualification pipeline using AI scoring, Google Sheets storage, and team alerts.',
    longDescription: 'How many leads go cold because nobody reviews them quickly enough? Lead Response Engine turns your existing form or webhook into an automated lead qualification pipeline. A lead comes in -> AI analyzes the intent -> The workflow assigns a score -> The lead is stored in Google Sheets -> Your team receives an internal alert. No CRM migration. No giant automation. No building from scratch.',
    category: 'ventas',
    apps: ['n8n', 'OpenAI', 'Google Sheets', 'Gmail', 'Webhook'],
    price: 29,
    timeSaved: '10h/semana',
    setupTime: '5 min',
    difficulty: 'Principiante',
    featured: true,
    gumroadUrl: 'https://n8nflow.gumroad.com/l/LeadResponseEngineAILeadQualificationforn8n',
    requirements: ['Cuenta de n8n', 'API Key de OpenAI', 'Cuenta de Google (Sheets y Gmail)'],
    rating: 5.0,
    reviewsCount: 1,
  }
];
