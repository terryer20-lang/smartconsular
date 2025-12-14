import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';

export const Podcast: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.podcast;
  const [currentEpIndex, setCurrentEpIndex] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [simulatedTime, setSimulatedTime] = useState(0); // in seconds

  const visualizerBars = 20;
  
  // Simulate playback since we don't have real files
  useEffect(() => {
    let interval: any;
    if (isPlaying) {
      interval = setInterval(() => {
        setSimulatedTime(prev => prev + 1);
        setProgress(prev => (prev >= 100 ? 0 : prev + 0.1)); // Slow progress
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePlayPause = (idx: number) => {
    if (currentEpIndex === idx) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentEpIndex(idx);
      setIsPlaying(true);
      setSimulatedTime(0);
      setProgress(0);
    }
  };

  const handleNext = () => {
    if (currentEpIndex === null) return;
    const nextIdx = (currentEpIndex + 1) % t.episodes.length;
    handlePlayPause(nextIdx);
  };

  const handlePrev = () => {
    if (currentEpIndex === null) return;
    const prevIdx = (currentEpIndex - 1 + t.episodes.length) % t.episodes.length;
    handlePlayPause(prevIdx);
  };

  const currentEp = currentEpIndex !== null ? t.episodes[currentEpIndex] : null;

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative pt-20 pb-12 px-4 min-h-screen bg-deep-blue text-cyan-400 font-mono overflow-hidden selection:bg-cyan-900 selection:text-white">
      
      {/* Background Matrix/Grid */}
      <div className="absolute inset-0 pointer-events-none opacity-20" 
           style={{
             backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col md:flex-row gap-8 h-full">
        
        {/* Left Column: Visualizer & Player */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <div className="mb-8 border-b-2 border-cyan-800 pb-4">
            <h1 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
              {t.title}
            </h1>
            <div className="flex justify-between items-end mt-2">
              <p className="text-xs text-cyan-600 animate-pulse">{t.subtitle}</p>
              <div className="text-xs border border-cyan-800 px-2 py-1 rounded bg-black/40">
                STATUS: {isPlaying ? <span className="text-green-400">{t.status.broadcasting}</span> : <span className="text-gray-500">{t.status.offline}</span>}
              </div>
            </div>
          </div>

          {/* Visualizer Display */}
          <div className="bg-black/60 border-2 border-cyan-800 rounded-lg p-6 mb-6 relative overflow-hidden h-64 flex flex-col items-center justify-center shadow-[0_0_30px_rgba(6,182,212,0.1)]">
            {/* Scanlines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
            
            {currentEp ? (
              <>
                <div className="absolute top-4 left-4 text-xs text-cyan-700">FREQ: {currentEp.freq}</div>
                <div className="absolute top-4 right-4 text-xs text-cyan-700">CH: 0{Number(currentEp.id.replace('ep',''))}</div>
                
                {/* Spectrum Analyzer */}
                <div className="flex gap-1 h-32 items-end z-0">
                  {Array.from({ length: visualizerBars }).map((_, i) => (
                    <div 
                      key={i} 
                      className="w-2 md:w-3 bg-cyan-500 shadow-[0_0_10px_#22d3ee] transition-all duration-75"
                      style={{ 
                        height: isPlaying ? `${Math.random() * 100}%` : '5%',
                        opacity: isPlaying ? 0.8 : 0.2
                      }}
                    ></div>
                  ))}
                </div>

                <div className="mt-6 text-center z-20">
                  <h3 className="text-white font-bold text-lg tracking-wider bg-black/80 px-4 py-1">{currentEp.title}</h3>
                  <div className="text-cyan-600 text-xs mt-1">{formatTime(simulatedTime)} / {currentEp.duration}</div>
                </div>
              </>
            ) : (
              <div className="text-cyan-800 text-sm tracking-[0.3em] animate-pulse">NO SIGNAL DETECTED</div>
            )}
          </div>

          {/* Controls */}
          <div className="bg-gray-900/80 p-4 rounded-lg border border-gray-700 flex flex-col gap-4">
            {/* Progress Bar */}
            <div className="w-full h-1 bg-gray-800 relative cursor-pointer">
              <div 
                className="absolute top-0 left-0 h-full bg-cyan-500 shadow-[0_0_10px_#22d3ee]" 
                style={{ width: `${progress}%` }}
              ></div>
            </div>

            <div className="flex justify-center items-center gap-8">
              <button onClick={handlePrev} className="text-2xl text-cyan-600 hover:text-white transition-colors" title={t.controls.prev}>⏮</button>
              
              <button 
                onClick={() => handlePlayPause(currentEpIndex !== null ? currentEpIndex : 0)}
                className="w-16 h-16 rounded-full border-2 border-cyan-500 flex items-center justify-center text-3xl text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                title={isPlaying ? t.controls.pause : t.controls.play}
              >
                {isPlaying ? '⏸' : '▶'}
              </button>
              
              <button onClick={handleNext} className="text-2xl text-cyan-600 hover:text-white transition-colors" title={t.controls.next}>⏭</button>
            </div>
          </div>
        </div>

        {/* Right Column: Playlist Log */}
        <div className="w-full md:w-80 border-l border-cyan-900 md:pl-8 flex flex-col">
          <h2 className="text-sm text-cyan-600 uppercase tracking-widest mb-6 border-b border-cyan-900 pb-2">{t.listTitle}</h2>
          
          <div className="space-y-4 overflow-y-auto max-h-[500px] pr-2 custom-scrollbar">
            {t.episodes.map((ep, idx) => (
              <div 
                key={ep.id}
                onClick={() => handlePlayPause(idx)}
                className={`group p-4 border border-cyan-900/50 hover:border-cyan-500 bg-black/40 cursor-pointer transition-all relative overflow-hidden ${currentEpIndex === idx ? 'border-cyan-500 bg-cyan-900/20' : ''}`}
              >
                {/* Active Indicator */}
                {currentEpIndex === idx && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-cyan-500 shadow-[0_0_10px_#22d3ee]"></div>
                )}

                <div className="flex justify-between items-start mb-2">
                  <span className="text-xs text-cyan-700 font-bold">{ep.freq}</span>
                  <span className="text-xs text-gray-500">{ep.duration}</span>
                </div>
                <h4 className={`text-sm font-bold mb-2 group-hover:text-white transition-colors ${currentEpIndex === idx ? 'text-white' : 'text-gray-400'}`}>
                  {ep.title}
                </h4>
                
                {/* Description reveals on hover or active */}
                <div className={`text-xs text-gray-500 overflow-hidden transition-all duration-300 ${currentEpIndex === idx ? 'max-h-20 opacity-100 mt-2' : 'max-h-0 opacity-0 group-hover:max-h-20 group-hover:opacity-100 group-hover:mt-2'}`}>
                  {ep.desc}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};