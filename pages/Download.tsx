import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';

export const Download: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.download;
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  const handleDownload = (id: string) => {
    setDownloadingId(id);
    // Simulate download delay for effect
    setTimeout(() => {
      setDownloadingId(null);
      // In a real app, this would trigger the actual file download
      alert(`[SYSTEM]: Resource ${id} transfer complete.`);
    }, 2000);
  };

  const getColorClasses = (color: string) => {
    switch (color) {
      case 'red': return 'border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.3)] hover:shadow-[0_0_25px_rgba(239,68,68,0.5)]';
      case 'blue': return 'border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]';
      case 'yellow': return 'border-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.3)] hover:shadow-[0_0_25px_rgba(234,179,8,0.5)]';
      case 'purple': return 'border-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.3)] hover:shadow-[0_0_25px_rgba(168,85,247,0.5)]';
      default: return 'border-gray-500';
    }
  };

  const getTextClasses = (color: string) => {
    switch (color) {
      case 'red': return 'text-red-400';
      case 'blue': return 'text-blue-400';
      case 'yellow': return 'text-yellow-400';
      case 'purple': return 'text-purple-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="relative pt-24 pb-12 px-4 min-h-screen bg-[#0b1120] text-gray-300 font-mono overflow-hidden">
      
      {/* Background Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-10 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:30px_30px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header HUD */}
        <div className="flex flex-col md:flex-row justify-between items-end border-b-2 border-gray-700 pb-4 mb-12">
          <div>
            <div className="text-xs text-orange-500 mb-1 animate-pulse">:: SECURE SUPPLY DROP DETECTED ::</div>
            <h1 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-widest">{t.title}</h1>
            <p className="text-sm text-gray-500 mt-2">{t.subtitle}</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0 text-[10px] uppercase">
            <div className="border border-gray-700 px-3 py-1 bg-black/50">
              <span className="block text-gray-500">{t.storage}</span>
              <span className="text-white font-bold">45.2 TB FREE</span>
            </div>
            <div className="border border-gray-700 px-3 py-1 bg-black/50">
              <span className="block text-gray-500">{t.speed}</span>
              <span className="text-green-400 font-bold">10 GB/S</span>
            </div>
            <div className="border border-gray-700 px-3 py-1 bg-black/50">
              <span className="block text-gray-500">{t.encryption}</span>
              <span className="text-blue-400 font-bold">AES-256</span>
            </div>
          </div>
        </div>

        {/* Resource Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.items.map((item) => (
            <div 
              key={item.id} 
              className={`group relative bg-gray-900/80 backdrop-blur border-2 rounded-xl p-6 transition-all duration-300 transform hover:-translate-y-2 ${getColorClasses(item.color)}`}
            >
              {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-white opacity-20"></div>
              <div className="absolute top-0 right-0 w-2 h-2 border-t-2 border-r-2 border-white opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-2 h-2 border-b-2 border-l-2 border-white opacity-20"></div>
              <div className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-white opacity-20"></div>

              {/* Header Info */}
              <div className="flex justify-between items-start mb-6">
                <span className={`text-xs font-bold px-2 py-1 rounded bg-black/50 border border-current ${getTextClasses(item.color)}`}>
                  {item.format}
                </span>
                <span className="text-xs text-gray-500 font-mono">{item.size}</span>
              </div>

              {/* Main Visual */}
              <div className="flex flex-col items-center justify-center h-32 mb-6 relative">
                <div className={`text-6xl group-hover:scale-110 transition-transform duration-300 drop-shadow-lg`}>
                  {item.icon}
                </div>
                {/* Holographic Platform */}
                <div className={`absolute bottom-0 w-16 h-4 bg-gradient-to-t from-current to-transparent opacity-20 rounded-full blur-md ${getTextClasses(item.color)}`}></div>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2 line-clamp-1" title={item.title}>
                {item.title}
              </h3>
              <p className="text-xs text-gray-400 mb-6 h-10 overflow-hidden leading-relaxed">
                {item.desc}
              </p>

              {/* Action Button */}
              <button 
                onClick={() => handleDownload(item.id)}
                disabled={downloadingId === item.id}
                className={`w-full py-3 rounded font-bold uppercase tracking-wider text-sm transition-all relative overflow-hidden bg-white/5 hover:bg-white/10 ${getTextClasses(item.color)}`}
              >
                {downloadingId === item.id ? (
                  <span className="animate-pulse">TRANSFERRING...</span>
                ) : (
                  <>
                    <span className="relative z-10">INITIALIZE</span>
                    {/* Scan effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1s_infinite]"></div>
                  </>
                )}
                {/* Progress Bar Background */}
                {downloadingId === item.id && (
                  <div className={`absolute left-0 top-0 bottom-0 bg-current opacity-20 animate-[load_2s_ease-out_forwards] w-full`}></div>
                )}
              </button>
            </div>
          ))}
        </div>

        {/* Footer Decor */}
        <div className="mt-16 border-t border-gray-800 pt-4 flex justify-between text-[10px] text-gray-600 uppercase tracking-widest">
          <div>Supply Pod ID: #8842-XC</div>
          <div>Auth: Consular Command</div>
        </div>

      </div>
    </div>
  );
};