import React, { useState } from 'react';
import Header from './components/Header';
import WorkflowsTab from './components/WorkflowsTab';
import PromptEditorTab from './components/PromptEditorTab';
import AnalyticsTab from './components/AnalyticsTab';

export default function App() {
  const [activeTab, setActiveTab] = useState('workflows');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  
  // Estado global de workflows
  const [workflows, setWorkflows] = useState([
    { id: 1, name: 'Sincronización CRM - Hubspot', status: 'Active', executions: '1,240', successRate: '99.2%', lastRun: 'Hace 5 min' },
    { id: 2, name: 'Extracción de Datos Inmobiliarios', status: 'Active', executions: '850', successRate: '95.8%', lastRun: 'Hace 12 min' },
    { id: 3, name: 'Procesamiento de Facturas PDF', status: 'Paused', executions: '310', successRate: '100%', lastRun: 'Hace 2 horas' },
    { id: 4, name: 'Alerta de Precios Competidores', status: 'Failed', executions: '45', successRate: '80.0%', lastRun: 'Hace 1 día' },
  ]);

  // Estado del Editor de Prompts
  const [promptInput, setPromptInput] = useState('');
  const [modelConfig, setModelConfig] = useState({
    temperature: 0.7,
    maxTokens: 2048,
    model: 'gpt-4o'
  });

  const toggleWorkflowStatus = (id) => {
    setWorkflows(workflows.map(wf => {
      if (wf.id === id) {
        const nextStatus = wf.status === 'Active' ? 'Paused' : 'Active';
        return { ...wf, status: nextStatus };
      }
      return wf;
    }));
  };

  return (
    <div className="min-h-screen bg-[#fdf8f2] text-[#1b1730] flex flex-col antialiased selection:bg-violet-200">
      {/* Fondo con degradados suaves (Glows) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-[160px] left-1/2 -translate-x-1/2 w-[640px] h-[640px] bg-[#bfdbfe] blur-[100px] opacity-40 rounded-full" />
        <div className="absolute top-[16%] left-[10%] w-[580px] h-[580px] bg-[#ddd6fe] blur-[100px] opacity-50 rounded-full" />
        <div className="absolute top-[38%] right-[10%] w-[520px] h-[520px] bg-[#f5d0fe] blur-[100px] opacity-50 rounded-full" />
        <div className="absolute bottom-[8%] left-[20%] w-[560px] h-[560px] bg-[#fed7aa] blur-[100px] opacity-40 rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col flex-1 max-w-[1120px] w-full mx-auto px-4 md:px-5 py-4 gap-4">
        {/* Header */}
        <Header 
          activeTab={activeTab} 
          setActiveTab={setActiveTab} 
          sidebarOpen={sidebarOpen} 
          setSidebarOpen={setSidebarOpen} 
        />

        {/* Menú Móvil Desplegable */}
        {sidebarOpen && (
          <div className="md:hidden flex flex-col gap-1 p-3 rounded-[20px] bg-white/80 border border-white/40 shadow-lg backdrop-blur-[24px]">
            <button 
              onClick={() => { setActiveTab('workflows'); setSidebarOpen(false); }}
              className={`px-4 py-2 rounded-full text-[13px] font-[600] text-left transition-all ${
                activeTab === 'workflows' ? 'bg-violet-50 text-violet-600' : 'text-zinc-600'
              }`}
            >
              Workflows
            </button>
            <button 
              onClick={() => { setActiveTab('prompt'); setSidebarOpen(false); }}
              className={`px-4 py-2 rounded-full text-[13px] font-[600] text-left transition-all ${
                activeTab === 'prompt' ? 'bg-violet-50 text-violet-600' : 'text-zinc-600'
              }`}
            >
              Editor de Prompts
            </button>
            <button 
              onClick={() => { setActiveTab('analytics'); setSidebarOpen(false); }}
              className={`px-4 py-2 rounded-full text-[13px] font-[600] text-left transition-all ${
                activeTab === 'analytics' ? 'bg-violet-50 text-violet-600' : 'text-zinc-600'
              }`}
            >
              Métricas
            </button>
          </div>
        )}

        {/* Áreas de Contenido */}
        <main className="flex-1 flex flex-col gap-4">
          {activeTab === 'workflows' && (
            <WorkflowsTab workflows={workflows} toggleWorkflowStatus={toggleWorkflowStatus} />
          )}

          {activeTab === 'prompt' && (
            <PromptEditorTab 
              promptInput={promptInput} 
              setPromptInput={setPromptInput} 
              modelConfig={modelConfig} 
              setModelConfig={setModelConfig} 
            />
          )}

          {activeTab === 'analytics' && <AnalyticsTab />}
        </main>
      </div>
    </div>
  );
}

