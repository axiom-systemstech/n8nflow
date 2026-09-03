import React from 'react';
import { Workflow } from '../types/workflow';
import AppBadge from './AppBadge';

interface WorkflowCardProps {
  workflow: Workflow;
  onSelect: (workflow: Workflow) => void;
}

export const WorkflowCard: React.FC<WorkflowCardProps> = ({ workflow, onSelect }) => {
  return (
    <div 
      onClick={() => onSelect(workflow)}
      className="bg-slate-900/60 border border-slate-800 rounded-xl overflow-hidden hover:border-purple-500/50 transition-all cursor-pointer flex flex-col h-full group"
    >
      {workflow.imageUrl && (
        <div className="w-full h-48 overflow-hidden bg-slate-950">
          <img 
            src={workflow.imageUrl} 
            alt={workflow.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs uppercase tracking-wider font-semibold px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20">
            {workflow.category}
          </span>
          <span className="text-lg font-bold text-white">${workflow.price} USD</span>
        </div>

        <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
          {workflow.title}
        </h3>

        <p className="text-slate-400 text-sm mb-4 line-clamp-2 flex-grow">
          {workflow.description}
        </p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {workflow.apps.map((app) => (
            <AppBadge key={app} appName={app} />
          ))}
        </div>

        <button className="w-full py-2 px-4 rounded-lg bg-slate-800 hover:bg-purple-600 text-white font-medium text-sm transition-colors text-center">
          Ver Detalles
        </button>
      </div>
    </div>
  );
};

export default WorkflowCard;
