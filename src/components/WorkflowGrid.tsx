'use client';

import { Workflow } from '../types/workflow';
import WorkflowCard from './WorkflowCard';

interface WorkflowGridProps {
  workflows: Workflow[];
}

export default function WorkflowGrid({ workflows }: WorkflowGridProps) {
  if (workflows.length === 0) {
    return (
      <div className="glass-panel p-12 rounded-3xl text-center max-w-lg mx-auto my-12">
        <span className="text-4xl mb-3 block">🔍</span>
        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
          No se encontraron plantillas
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Prueba a buscar con otra palabra clave o selecciona otra categoría.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 mb-20">
      {workflows.map((workflow) => (
        <WorkflowCard key={workflow.id} workflow={workflow} />
      ))}
    </div>
  );
}

