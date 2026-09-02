import React from 'react';
import { 
  Layers, 
  Activity, 
  TrendingUp, 
  Cpu, 
  Plus, 
  CheckCircle, 
  Clock, 
  AlertCircle 
} from 'lucide-react';

export default function WorkflowsTab({ workflows, toggleWorkflowStatus }) {
  const getStatusBadge = (status) => {
    switch (status) {
      case 'Active':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-[600] bg-emerald-500/10 text-emerald-600 border border-emerald-500/20">
            <CheckCircle className="w-3 h-3" /> Activo
          </span>
        );
      case 'Paused':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-[600] bg-amber-400/10 text-amber-600 border border-amber-400/20">
            <Clock className="w-3 h-3" /> Pausado
          </span>
        );
      case 'Failed':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-[600] bg-red-500/10 text-red-600 border border-red-500/20">
            <AlertCircle className="w-3 h-3" /> Error
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Tarjetas de Resumen */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.60)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.16)] backdrop-blur-[24px]">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-[12px] font-[600] text-zinc-500">Total Flujos</span>
            <Layers className="w-4 h-4 text-violet-500" />
          </div>
          <div className="text-[24px] font-[750] tracking-tight">{workflows.length}</div>
        </div>

        <div className="p-5 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.60)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.16)] backdrop-blur-[24px]">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-[12px] font-[600] text-zinc-500">Ejecuciones Hoy</span>
            <Activity className="w-4 h-4 text-sky-500" />
          </div>
          <div className="text-[24px] font-[750] tracking-tight">2,445</div>
        </div>

        <div className="p-5 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.60)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.16)] backdrop-blur-[24px]">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-[12px] font-[600] text-zinc-500">Tasa de Éxito</span>
            <TrendingUp className="w-4 h-4 text-emerald-500" />
          </div>
          <div className="text-[24px] font-[750] tracking-tight">98.4%</div>
        </div>

        <div className="p-5 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.60)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.16)] backdrop-blur-[24px]">
          <div className="flex justify-between items-center mb-2.5">
            <span className="text-[12px] font-[600] text-zinc-500">Tiempo Respuesta</span>
            <Cpu className="w-4 h-4 text-amber-500" />
          </div>
          <div className="text-[24px] font-[750] tracking-tight">1.2s</div>
        </div>
      </div>

      {/* Tabla de Workflows */}
      <div className="p-5 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.16)] backdrop-blur-[24px] flex flex-col gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-2 border-b border-zinc-200/60">
          <div>
            <h2 className="text-[16px] font-[750] tracking-tight">Workflows Activos</h2>
            <p className="text-[12px] text-zinc-500 font-[500]">Gestiona y monitorea tus automatizaciones</p>
          </div>
          <button className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#1b1730] text-white text-[12px] font-[600] hover:bg-black transition-colors self-start sm:self-auto shadow-sm">
            <Plus className="w-3.5 h-3.5" /> Nuevo Workflow
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200/60 text-[11px] font-[650] text-zinc-400 uppercase tracking-wide">
                <th className="py-2.5 px-3">Nombre del Workflow</th>
                <th className="py-2.5 px-3">Estado</th>
                <th className="py-2.5 px-3">Ejecuciones</th>
                <th className="py-2.5 px-3">Efectividad</th>
                <th className="py-2.5 px-3">Última corrida</th>
                <th className="py-2.5 px-3 text-right">Acción</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200/40 text-[13px] font-[550]">
              {workflows.map((wf) => (
                <tr key={wf.id} className="hover:bg-white/60 transition-colors">
                  <td className="py-3 px-3 font-[650] text-[#1b1730]">{wf.name}</td>
                  <td className="py-3 px-3">{getStatusBadge(wf.status)}</td>
                  <td className="py-3 px-3 text-zinc-600">{wf.executions}</td>
                  <td className="py-3 px-3 text-zinc-600">{wf.successRate}</td>
                  <td className="py-3 px-3 text-zinc-500 text-[12px]">{wf.lastRun}</td>
                  <td className="py-3 px-3 text-right">
                    <button 
                      onClick={() => toggleWorkflowStatus(wf.id)}
                      className="px-3 py-1 rounded-full text-[11px] font-[600] bg-white border border-zinc-200 text-zinc-700 hover:bg-zinc-100 transition-colors shadow-2xs"
                    >
                      {wf.status === 'Active' ? 'Pausar' : 'Activar'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

