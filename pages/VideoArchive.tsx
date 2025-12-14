import React, { useState, useEffect, useRef } from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';

export const VideoArchive: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.video;
  const [activeVideo, setActiveVideo] = useState(t.videos[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [dataStream, setDataStream] = useState<number[]>([]);

  // Simulate data stream for the chart
  useEffect(() => {
    const interval = setInterval(() => {
      setDataStream(prev => {
        const next = [...prev, Math.random() * 100];
        if (next.length > 40) next.shift();
        return next;
      });
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const handlePlay = (video: typeof t.videos[0]) => {
    setActiveVideo(video);
    setIsPlaying(true);
  };

  const DataChart = () => (
    <div className="h-16 flex items-end gap-1 w-full overflow-hidden opacity-50">
      {dataStream.map((val, i) => (
        <div 
          key={i} 
          className="bg-green-500 w-2 transition-all duration-100" 
          style={{ height: `${isPlaying ? val : val * 0.2}%`, opacity: i / 40 }}
        ></div>
      ))}
    </div>
  );

  return (
    <div className="relative pt-20 pb-12 px-4 min-h-screen bg-black text-green-500 font-mono overflow-hidden">
      
      {/* CRT Scanline Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_2px,3px_100%]"></div>
      <div className="fixed inset-0 pointer-events-none z-50 shadow-[inset_0_0_100px_rgba(0,0,0,0.9)]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header - Terminal Style */}
        <div className="border-b-2 border-green-700 pb-4 mb-8 flex flex-col md:flex-row justify-between items-end">
          <div>
            <div className="text-xs text-green-800 animate-pulse">SECURE CONNECTION ESTABLISHED</div>
            <h1 className="text-2xl md:text-4xl font-bold uppercase tracking-widest text-white shadow-[0_0_10px_rgba(0,255,0,0.5)]">
              {t.title}
            </h1>
          </div>
          <div className="text-right hidden md:block">
            <div className="text-xs text-green-600">{t.subtitle}</div>
            <div className="text-lg font-bold">{new Date().toLocaleTimeString()}</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* MAIN MONITOR (Player) */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="relative bg-gray-900 border-4 border-gray-800 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,255,0,0.1)] group">
              {/* Screen Glare */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-20"></div>
              
              {/* Video Placeholder / Player */}
              <div className={`aspect-video w-full flex items-center justify-center relative bg-black ${activeVideo.thumbnailColor}`}>
                {isPlaying ? (
                  <div className="w-full h-full flex items-center justify-center bg-black/80 relative">
                    <div className="text-center animate-pulse">
                      <div className="text-6xl mb-4">▶</div>
                      <div className="text-xl">SIMULATING VIDEO PLAYBACK</div>
                      <div className="text-sm text-green-600 mt-2">ID: {activeVideo.id}</div>
                    </div>
                    {/* Simulated HUD elements */}
                    <div className="absolute top-4 left-4 border border-green-500 px-2 text-xs">REC ●</div>
                    <div className="absolute bottom-4 right-4 text-xs">ISO 800</div>
                    <div className="absolute top-1/2 left-0 w-full h-px bg-green-500/20"></div>
                    <div className="absolute left-1/2 top-0 w-px h-full bg-green-500/20"></div>
                  </div>
                ) : (
                  <div className="text-center z-10">
                    <button 
                      onClick={() => setIsPlaying(true)}
                      className="bg-green-900/80 hover:bg-green-600 text-white w-20 h-20 rounded-full flex items-center justify-center text-4xl border-2 border-green-400 transition-all hover:scale-110 shadow-[0_0_30px_rgba(0,255,0,0.4)]"
                    >
                      ▶
                    </button>
                  </div>
                )}
                {/* Tech Corners */}
                <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-green-500 z-10"></div>
                <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-green-500 z-10"></div>
                <div className="absolute bottom-2 left-2 w-8 h-8 border-b-2 border-l-2 border-green-500 z-10"></div>
                <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-green-500 z-10"></div>
              </div>

              {/* Info Bar under Monitor */}
              <div className="bg-gray-800 p-4 border-t border-gray-700 flex justify-between items-center">
                <div>
                  <h2 className="text-white font-bold text-lg">{activeVideo.title}</h2>
                  <div className="text-xs text-green-600 uppercase tracking-wider">{t.categories[activeVideo.category]} // LENGTH: {activeVideo.length}</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400 uppercase">{t.viewerCount}</div>
                  <div className="text-green-400 font-bold font-mono">{activeVideo.views}</div>
                </div>
              </div>
            </div>

            {/* Bottom Chart Panel */}
            <div className="bg-black border border-green-900 p-4 rounded relative overflow-hidden hidden md:block">
              <div className="absolute top-2 left-2 text-[10px] text-green-700 uppercase">{t.bandwidth}</div>
              <DataChart />
            </div>
          </div>

          {/* SIDEBAR (Playlist / Data Tapes) */}
          <div className="w-full lg:w-96 flex flex-col gap-4">
            <h3 className="text-green-600 border-b border-green-900 pb-2 uppercase tracking-widest text-sm mb-2">
              {t.listTitle}
            </h3>
            
            <div className="space-y-3 overflow-y-auto max-h-[600px] pr-2 custom-scrollbar">
              {t.videos.map((video) => (
                <div 
                  key={video.id}
                  onClick={() => handlePlay(video)}
                  className={`group relative p-4 border-l-4 cursor-pointer transition-all duration-300 bg-gray-900/50 hover:bg-gray-800 ${activeVideo.id === video.id ? 'border-green-500 bg-gray-800' : 'border-gray-700 hover:border-green-300'}`}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className={`text-xs px-2 py-0.5 rounded border ${
                      video.category === 'emergency' ? 'border-red-500 text-red-400' : 
                      video.category === 'fraud' ? 'border-purple-500 text-purple-400' : 
                      'border-blue-500 text-blue-400'
                    }`}>
                      {t.categories[video.category]}
                    </span>
                    <span className="text-xs text-gray-500 font-mono">{video.length}</span>
                  </div>
                  
                  <h4 className={`text-sm font-bold mb-1 ${activeVideo.id === video.id ? 'text-white' : 'text-gray-300 group-hover:text-white'}`}>
                    {video.title}
                  </h4>
                  
                  <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {video.desc}
                  </p>

                  {/* Hover visual feedback */}
                  <div className="absolute right-2 bottom-2 w-2 h-2 bg-green-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity animate-ping"></div>
                </div>
              ))}
            </div>

            {/* Decor Panel */}
            <div className="mt-auto border border-green-900 p-4 text-[10px] text-green-800 font-mono leading-tight hidden lg:block">
              SYSTEM DIAGNOSTICS:<br/>
              - VIDEO FEED: STABLE<br/>
              - ENCRYPTION: AES-256<br/>
              - SERVER LOAD: 42%<br/>
              - PACKET LOSS: 0.001%<br/>
              <br/>
              REMINDER: UNAUTHORIZED ACCESS<br/>
              WILL BE PROSECUTED.
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};