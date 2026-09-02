'use client';

import { Workflow } from '../types/workflow';
import WorkflowCard from './WorkflowCard';

interface WorkflowGridProps {
  workflows: Workflow[];
  onSelectWorkflow: (workflow: Workflow) => void;
}

export default function WorkflowGrid({ workflows, onSelectWorkflow }: WorkflowGridProps) {
  if (workflows.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-slate-500 dark:text-slate-400 font-medium">
          No se encontraron automatizaciones para tu búsqueda.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {workflows.map((workflow) => (
        <WorkflowCard key={workflow.id} workflow={workflow} onSelect={onSelectWorkflow} />
      ))}
    </div>
  );
}
