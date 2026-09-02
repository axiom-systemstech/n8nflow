import React from 'react';
import { Save, Play } from 'lucide-react';

export default function PromptEditorTab({ promptInput, setPromptInput, modelConfig, setModelConfig }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-4">
      {/* Editor Principal */}
      <div className="p-5 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.16)] backdrop-blur-[24px] flex flex-col gap-4">
        <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60">
          <h2 className="text-[16px] font-[750] tracking-tight">Editor del Sistema</h2>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[12px] font-[600] bg-white border border-zinc-200 hover:bg-zinc-100 transition-colors">
              <Save className="w-3.5 h-3.5 text-zinc-600" /> Guardar
            </button>
            <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-[12px] font-[600] bg-violet-600 text-white hover:bg-violet-700 transition-colors shadow-sm">
              <Play className="w-3.5 h-3.5 fill-white" /> Probar
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-[12px] font-[650] text-zinc-600">Prompt del Sistema</label>
          <textarea 
            value={promptInput}
            onChange={(e) => setPromptInput(e.target.value)}
            placeholder="Escribe las instrucciones detalladas para el agente de IA..."
            className="w-full h-[280px] p-4 rounded-[20px] bg-white/80 border border-white/60 focus:outline-none focus:ring-2 focus:ring-violet-400 font-mono text-[13px] leading-[1.55] resize-none text-zinc-800 placeholder:text-zinc-400 shadow-inner"
          />
        </div>
      </div>

      {/* Panel de Configuración del Modelo */}
      <div className="p-5 rounded-[28px] bg-[linear-gradient(180deg,rgba(255,255,255,0.88)_0%,rgba(255,255,255,0.62)_100%)] border border-white/40 shadow-[0_24px_64px_-16px_rgba(60,20,80,0.16)] backdrop-blur-[24px] flex flex-col gap-5">
        <div className="pb-2 border-b border-zinc-200/60">
          <h2 className="text-[16px] font-[750] tracking-tight">Parámetros del Modelo</h2>
          <p className="text-[12px] text-zinc-500 font-[500]">Ajusta el comportamiento de respuesta</p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <label className="text-[12px] font-[650] text-zinc-600 block mb-1.5">Modelo LLM</label>
            <select 
              value={modelConfig.model}
              onChange={(e) => setModelConfig({...modelConfig, model: e.target.value})}
              className="w-full p-2.5 rounded-[16px] bg-white/80 border border-white/60 font-[600] text-[13px] text-zinc-700 focus:outline-none focus:ring-2 focus:ring-violet-400 cursor-pointer"
            >
              <option value="gpt-4o">GPT-4o (Recomendado)</option>
              <option value="claude-3-5-sonnet">Claude 3.5 Sonnet</option>
              <option value="mistral-large">Mistral Large</option>
            </select>
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[12px] font-[650] text-zinc-600">Temperatura</label>
              <span className="text-[12px] font-mono font-[600] text-zinc-500">{modelConfig.temperature}</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="1" 
              step="0.05"
              value={modelConfig.temperature}
              onChange={(e) => setModelConfig({...modelConfig, temperature: parseFloat(e.target.value)})}
              className="w-full accent-violet-600 cursor-pointer"
            />
          </div>

          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="text-[12px] font-[650] text-zinc-600">Tokens Máximos</label>
              <span className="text-[12px] font-mono font-[600] text-zinc-500">{modelConfig.maxTokens}</span>
            </div>
            <input 
              type="range" 
              min="256" 
              max="4096" 
              step="128"
              value={modelConfig.maxTokens}
              onChange={(e) => setModelConfig({...modelConfig, maxTokens: parseInt(e.target.value)})}
              className="w-full accent-violet-600 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

