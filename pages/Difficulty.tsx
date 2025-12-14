import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';

export const Difficulty: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.difficulty;
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const activeCategory = selectedCategory 
    ? t.categories.find(c => c.id === selectedCategory) 
    : null;

  const getColorClasses = (color: string) => {
    const map: Record<string, string> = {
      yellow: 'border-yellow-500 text-yellow-400 bg-yellow-900/20 shadow-yellow-500/20',
      blue: 'border-blue-500 text-blue-400 bg-blue-900/20 shadow-blue-500/20',
      red: 'border-red-500 text-red-400 bg-red-900/20 shadow-red-500/20',
      purple: 'border-purple-500 text-purple-400 bg-purple-900/20 shadow-purple-500/20',
      orange: 'border-orange-500 text-orange-400 bg-orange-900/20 shadow-orange-500/20',
    };
    return map[color] || map.blue;
  };

  return (
    <div className="relative pt-24 pb-12 px-4 min-h-screen bg-[#0a0f1c] text-white font-mono overflow-hidden">
      
      {/* Background Tech Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[linear-gradient(rgba(0,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(0,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row gap-8">
        
        {/* LEFT PANEL: Diagnostic Matrix (Problem Selection) */}
        <div className="w-full lg:w-1/3 flex flex-col">
          <div className="mb-6">
            <h1 className="text-2xl font-bold uppercase tracking-widest text-cyan-400 mb-2">{t.title}</h1>
            <div className="text-xs text-gray-500 animate-pulse">{t.systemStatus}</div>
          </div>

          <div className="grid gap-4">
            {t.categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const colorClass = isActive ? getColorClasses(cat.color) : 'border-gray-800 bg-gray-900/50 text-gray-500 hover:border-gray-600 hover:text-gray-300';
              
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`relative p-4 border-2 rounded-xl text-left transition-all duration-300 group overflow-hidden ${colorClass} ${isActive ? 'scale-105 shadow-lg' : ''}`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <div className={`text-2xl w-12 h-12 flex items-center justify-center rounded-full border-2 bg-black/50 ${isActive ? 'border-current' : 'border-gray-700 grayscale group-hover:grayscale-0'}`}>
                      {cat.icon}
                    </div>
                    <div>
                      <div className="font-bold uppercase tracking-wider">{cat.label}</div>
                      <div className="text-[10px] opacity-70">ERR_CODE_0{cat.id.length}</div>
                    </div>
                    {isActive && <div className="ml-auto text-xl animate-pulse">◀</div>}
                  </div>
                  
                  {/* Background Fill Animation */}
                  {isActive && <div className="absolute inset-0 bg-current opacity-10 animate-pulse"></div>}
                </button>
              );
            })}
          </div>
        </div>

        {/* RIGHT PANEL: Protocol Display (Solution) */}
        <div className="w-full lg:w-2/3">
          <div className={`h-full border-2 rounded-2xl bg-black/80 backdrop-blur-xl relative overflow-hidden transition-all duration-500 flex flex-col ${activeCategory ? getColorClasses(activeCategory.color).split(' ')[0] : 'border-gray-800'}`}>
            
            {/* Tech Header */}
            <div className="border-b border-gray-800 p-2 flex justify-between items-center bg-black/50">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-[10px] text-gray-500 uppercase tracking-[0.2em]">SECURE_CHANNEL_ENCRYPTED</div>
            </div>

            {activeCategory ? (
              <div className="p-8 flex-1 flex flex-col animate-fade-in">
                {/* Warning Banner */}
                <div className={`mb-8 p-4 border-l-4 bg-opacity-10 ${getColorClasses(activeCategory.color).replace('shadow-', '')}`}>
                  <h2 className="text-3xl font-bold uppercase mb-2 flex items-center gap-3">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-current opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-current"></span>
                    {activeCategory.label} DETECTED
                  </h2>
                  <p className="text-lg opacity-90">{activeCategory.desc}</p>
                </div>

                {/* Steps Visualizer */}
                <div className="space-y-6 relative flex-1">
                  <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-800"></div>
                  
                  {activeCategory.steps.map((step, idx) => (
                    <div key={idx} className="relative pl-12 group">
                      <div className={`absolute left-0 top-0 w-8 h-8 rounded-full border-2 flex items-center justify-center font-bold bg-black z-10 transition-all duration-500 delay-${idx*100} ${getColorClasses(activeCategory.color).split(' ')[0]} ${getColorClasses(activeCategory.color).split(' ')[1]}`}>
                        {idx + 1}
                      </div>
                      <div className="bg-gray-900/50 border border-gray-700 p-4 rounded-lg hover:bg-gray-800 transition-colors">
                        <div className="text-xs text-gray-500 mb-1 uppercase">Step 0{idx + 1} Protocol</div>
                        <div className="text-lg">{step}</div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Action Footer */}
                <div className="mt-8 pt-8 border-t border-gray-800 text-center">
                  <div className="text-xs text-gray-500 mb-2 uppercase tracking-widest">{t.protocolLabel}</div>
                  <div className={`inline-block px-8 py-3 rounded border font-bold uppercase tracking-widest animate-pulse ${getColorClasses(activeCategory.color)}`}>
                    {activeCategory.action}
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center text-gray-600 p-12">
                <div className="text-6xl mb-6 opacity-20 animate-spin-slow">⚙️</div>
                <div className="text-2xl font-bold uppercase tracking-widest mb-2">{t.subtitle}</div>
                <p className="text-sm opacity-50">Select a diagnostic node from the left matrix to initiate protocol.</p>
              </div>
            )}

            {/* Scanline Overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none opacity-50"></div>
          </div>
        </div>

      </div>
    </div>
  );
};