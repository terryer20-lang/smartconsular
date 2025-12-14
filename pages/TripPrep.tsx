import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';
import { Link } from 'react-router-dom';

export const TripPrep: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.trip;
  const [completedItems, setCompletedItems] = useState<Set<string>>(new Set());
  const [activeModule, setActiveModule] = useState<string | null>(null);

  // Flatten items to count total
  const allItems = Object.values(t.modules).flatMap(m => m.items);
  const totalItems = allItems.length;
  const progress = completedItems.size / totalItems;
  const isFullyCharged = progress === 1;

  const toggleItem = (id: string) => {
    const newSet = new Set(completedItems);
    if (newSet.has(id)) {
      newSet.delete(id);
    } else {
      newSet.add(id);
    }
    setCompletedItems(newSet);
  };

  const getModuleProgress = (moduleKey: keyof typeof t.modules) => {
    const items = t.modules[moduleKey].items;
    const completed = items.filter(i => completedItems.has(i.id)).length;
    return completed / items.length;
  };

  return (
    <div className="relative pt-20 pb-12 px-4 min-h-screen bg-black text-cyan-500 overflow-hidden font-mono selection:bg-cyan-900 selection:text-white">
      
      {/* Sci-fi Background */}
      <div className="absolute inset-0 pointer-events-none z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black">
        <div className="absolute inset-0 opacity-20" 
             style={{ backgroundImage: 'radial-gradient(circle, #06b6d4 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-cyan-400 uppercase tracking-[0.2em] mb-2 drop-shadow-[0_0_10px_#22d3ee]">
            {t.title}
          </h1>
          <p className="text-cyan-700 text-sm tracking-widest">{t.subtitle}</p>
        </div>

        {/* Main Interface */}
        <div className="relative w-full max-w-[600px] aspect-square flex items-center justify-center">
          
          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none animate-[spin_60s_linear_infinite]">
            <circle cx="50%" cy="50%" r="35%" fill="none" stroke="#164e63" strokeWidth="1" strokeDasharray="5 5" />
            <circle cx="50%" cy="50%" r="48%" fill="none" stroke="#164e63" strokeWidth="1" opacity="0.5" />
          </svg>

          {/* Central Energy Core (The Shield) */}
          <div className={`relative w-48 h-48 md:w-64 md:h-64 rounded-full flex items-center justify-center transition-all duration-1000 ${isFullyCharged ? 'shadow-[0_0_100px_#fbbf24] bg-yellow-900/20' : 'shadow-[0_0_50px_#06b6d4] bg-cyan-900/20'}`}>
            {/* Core Ring Progress */}
            <svg className="absolute inset-0 w-full h-full -rotate-90">
              <circle 
                cx="50%" cy="50%" r="48%" 
                fill="none" 
                stroke="#155e75" 
                strokeWidth="8" 
              />
              <circle 
                cx="50%" cy="50%" r="48%" 
                fill="none" 
                stroke={isFullyCharged ? '#fbbf24' : '#22d3ee'} 
                strokeWidth="8" 
                strokeDasharray={`${progress * 2 * Math.PI * 48}% 1000%`} 
                className="transition-all duration-1000 ease-out"
                strokeLinecap="round"
              />
            </svg>

            <div className="text-center z-10">
              <div className={`text-4xl md:text-5xl font-bold ${isFullyCharged ? 'text-yellow-400' : 'text-cyan-400'}`}>
                {Math.round(progress * 100)}%
              </div>
              <div className={`text-xs mt-2 uppercase tracking-widest ${isFullyCharged ? 'text-yellow-200 animate-pulse' : 'text-cyan-600'}`}>
                {isFullyCharged ? t.status.ready : t.status.charging}
              </div>
            </div>
            
            {/* Core Glow */}
            <div className={`absolute inset-0 rounded-full blur-xl opacity-50 ${isFullyCharged ? 'bg-yellow-500 animate-pulse' : 'bg-cyan-500'}`}></div>
          </div>

          {/* Satellite Modules */}
          {Object.entries(t.modules).map(([key, module], index) => {
            const angle = (index * 90) * (Math.PI / 180) - (45 * (Math.PI / 180)); // Position at corners
            const distance = 42; // percentage from center
            const x = 50 + distance * Math.cos(angle);
            const y = 50 + distance * Math.sin(angle);
            const modProgress = getModuleProgress(key as any);
            const isComplete = modProgress === 1;

            return (
              <button
                key={key}
                onClick={() => setActiveModule(key)}
                className={`absolute w-20 h-20 md:w-24 md:h-24 -ml-10 -mt-10 md:-ml-12 md:-mt-12 rounded-full border-2 flex items-center justify-center backdrop-blur-md transition-all duration-300 group hover:scale-110
                  ${isComplete 
                    ? 'border-yellow-500 bg-yellow-900/30 shadow-[0_0_20px_#fbbf24]' 
                    : activeModule === key 
                      ? 'border-white bg-cyan-800/50 shadow-[0_0_20px_white]' 
                      : 'border-cyan-700 bg-black/60 hover:border-cyan-400'}`}
                style={{ left: `${x}%`, top: `${y}%` }}
              >
                <div className="text-2xl md:text-3xl">
                  {key === 'docs' ? '🛂' : key === 'health' ? '❤️' : key === 'comm' ? '📡' : '⚖️'}
                </div>
                {/* Mini Progress Ring */}
                <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none">
                  <circle cx="50%" cy="50%" r="45%" fill="none" stroke={isComplete ? '#fbbf24' : '#22d3ee'} strokeWidth="3" strokeDasharray={`${modProgress * 283} 283`} className="transition-all duration-500" />
                </svg>
                <div className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-[10px] uppercase tracking-widest bg-black/80 px-2 py-1 rounded border ${isComplete ? 'border-yellow-500 text-yellow-500' : 'border-cyan-900 text-cyan-500'}`}>
                  {module.title.split(' ')[0]}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Module Panel (Overlay) */}
        <div className={`fixed bottom-0 left-0 w-full bg-gray-900/95 backdrop-blur-xl border-t-2 border-cyan-500 transition-transform duration-500 p-6 z-50 ${activeModule ? 'translate-y-0' : 'translate-y-full'}`}>
          <div className="max-w-2xl mx-auto">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                <span className="animate-pulse">▶</span> 
                {activeModule && t.modules[activeModule as keyof typeof t.modules].title}
              </h3>
              <button onClick={() => setActiveModule(null)} className="text-gray-400 hover:text-white text-2xl">×</button>
            </div>
            
            <div className="space-y-4">
              {activeModule && t.modules[activeModule as keyof typeof t.modules].items.map((item) => (
                <div 
                  key={item.id}
                  onClick={() => toggleItem(item.id)}
                  className={`flex items-center gap-4 p-4 rounded border cursor-pointer transition-all ${
                    completedItems.has(item.id) 
                      ? 'bg-cyan-900/30 border-cyan-400 text-cyan-100' 
                      : 'bg-black/40 border-gray-700 text-gray-400 hover:border-gray-500'
                  }`}
                >
                  <div className={`w-6 h-6 rounded flex items-center justify-center border ${
                    completedItems.has(item.id) ? 'bg-cyan-500 border-cyan-500 text-black' : 'border-gray-600'
                  }`}>
                    {completedItems.has(item.id) && '✓'}
                  </div>
                  <span className="font-mono text-sm md:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-12">
          <Link to="/" className="group flex items-center gap-2 text-cyan-600 hover:text-cyan-400 transition-colors">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            {t.back}
          </Link>
        </div>

      </div>
    </div>
  );
};