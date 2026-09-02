import React from 'react';
import { Zap, Bell, Menu, X } from 'lucide-react';

export default function Header({ activeTab, setActiveTab, sidebarOpen, setSidebarOpen }) {
  return (
    <header className="flex items-center justify-between p-4 md:p-5 rounded-[24px] bg-[linear-gradient(180deg,rgba(255,255,255,0.85)_0%,rgba(255,255,255,0.60)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.16)] backdrop-blur-[24px]">
      <div className="flex items-center gap-3">
        <button 
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden p-2 rounded-full hover:bg-white/80 transition-colors"
          aria-label="Toggle menu"
        >
          {sidebarOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
        <div className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white shadow-sm">
            <Zap className="w-5 h-5 fill-white" />
          </div>
          <div>
            <h1 className="font-[750] text-[15px] leading-[1.1] tracking-tight">AgentFlow AI</h1>
            <p className="text-[11px] text-zinc-500 font-[500]">Plataforma de Automatización</p>
          </div>
        </div>
      </div>

      {/* Navegación Desktop */}
      <div className="hidden md:flex items-center gap-1 bg-white/60 p-1 rounded-full border border-white/40">
        <button 
          onClick={() => setActiveTab('workflows')}
          className={`px-4 py-1.5 rounded-full text-[13px] font-[600] transition-all ${
            activeTab === 'workflows' ? 'bg-white text-[#1b1730] shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          Workflows
        </button>
        <button 
          onClick={() => setActiveTab('prompt')}
          className={`px-4 py-1.5 rounded-full text-[13px] font-[600] transition-all ${
            activeTab === 'prompt' ? 'bg-white text-[#1b1730] shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          Editor de Prompts
        </button>
        <button 
          onClick={() => setActiveTab('analytics')}
          className={`px-4 py-1.5 rounded-full text-[13px] font-[600] transition-all ${
            activeTab === 'analytics' ? 'bg-white text-[#1b1730] shadow-sm' : 'text-zinc-600 hover:text-zinc-900'
          }`}
        >
          Métricas
        </button>
      </div>

      {/* Perfil y Notificaciones */}
      <div className="flex items-center gap-2">
        <button className="p-2 rounded-full hover:bg-white/80 transition-colors text-zinc-600 relative">
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-violet-600"></span>
        </button>
        <div className="h-4 w-px bg-zinc-300 mx-1"></div>
        <div className="flex items-center gap-2 pl-1.5 pr-1 py-1 rounded-full bg-white/60 border border-white/40">
          <div className="w-6 h-6 rounded-full bg-violet-400 text-white flex items-center justify-center text-[10px] font-[700]">
            JD
          </div>
          <span className="text-[12px] font-[600] pr-2 hidden sm:inline">John Doe</span>
        </div>
      </div>
    </header>
  );
}

