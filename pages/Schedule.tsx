import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';
import { Link } from 'react-router-dom';

export const Schedule: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.schedule;
  const [filter, setFilter] = useState<'all' | 'seminar' | 'competition' | 'community'>('all');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const filteredEvents = t.events.filter(e => filter === 'all' || e.type === filter);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'boarding': return 'text-green-400 border-green-400 bg-green-900/20';
      case 'inflight': return 'text-blue-400 border-blue-400 bg-blue-900/20';
      case 'landed': return 'text-gray-400 border-gray-400 bg-gray-900/20';
      default: return 'text-white border-white';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'boarding': return '🎫';
      case 'inflight': return '✈️';
      case 'landed': return '🛬';
      default: return '';
    }
  };

  const getStatusLabel = (status: string) => {
    // @ts-ignore - dynamic key access
    return t.status[status];
  };

  return (
    <div className="relative pt-20 pb-12 px-4 min-h-screen bg-deep-blue text-white overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-[-100px] w-64 h-64 bg-gold/10 rounded-full blur-[80px]"></div>
        <div className="absolute bottom-40 right-[-50px] w-80 h-80 bg-ocean-blue/20 rounded-full blur-[100px]"></div>
        {/* Dotted Flight Path Line */}
        <svg className="absolute top-0 left-1/2 -translate-x-1/2 h-full w-2 md:w-4 opacity-20" preserveAspectRatio="none">
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="white" strokeWidth="2" strokeDasharray="10 10" />
        </svg>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Header - Flight Board Style */}
        <div className="text-center mb-10">
          <div className="inline-block border-4 border-white/20 bg-black/40 backdrop-blur-md p-4 rounded-xl shadow-[0_0_30px_rgba(0,0,0,0.5)]">
            <h1 className="text-3xl md:text-5xl font-mono font-bold text-gold tracking-widest uppercase mb-1">
              {t.title}
            </h1>
            <div className="h-0.5 w-full bg-gold/50 my-2"></div>
            <p className="text-xs md:text-sm text-gray-300 tracking-[0.2em] uppercase">
              {t.subtitle}
            </p>
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { key: 'all', label: t.filters.all, icon: '🌐' },
            { key: 'seminar', label: t.filters.seminar, icon: '🎤' },
            { key: 'competition', label: t.filters.competition, icon: '🏆' },
            { key: 'community', label: t.filters.community, icon: '🏘️' }
          ].map((item) => (
            <button
              key={item.key}
              onClick={() => setFilter(item.key as any)}
              className={`px-4 py-2 rounded-full border transition-all duration-300 flex items-center gap-2 ${
                filter === item.key 
                  ? 'bg-gold text-black border-gold shadow-[0_0_15px_rgba(255,215,0,0.4)] transform scale-105' 
                  : 'bg-white/5 border-white/20 text-gray-300 hover:bg-white/10'
              }`}
            >
              <span>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </div>

        {/* Timeline Events */}
        <div className="space-y-6">
          {filteredEvents.map((event, index) => (
            <div 
              key={event.id}
              className={`relative group transition-all duration-500 ${expandedId === event.id ? 'scale-[1.02]' : 'hover:scale-[1.01]'}`}
              onClick={() => setExpandedId(expandedId === event.id ? null : event.id)}
            >
              {/* Connector Dot */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-4 h-4 bg-deep-blue border-2 border-gold rounded-full z-20 shadow-[0_0_10px_#FFD700] mt-6 hidden md:block"></div>

              {/* Boarding Pass Card */}
              <div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:border-gold/30 transition-all">
                {/* Header Strip */}
                <div className="bg-black/30 p-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-2 border-b border-white/5">
                  <div className="flex items-center gap-3">
                    <div className="bg-white/10 p-2 rounded text-2xl">
                      {event.type === 'seminar' ? '🎤' : event.type === 'competition' ? '🏆' : '🏘️'}
                    </div>
                    <div>
                      <div className="text-gold font-mono font-bold text-lg">{event.date}</div>
                      <div className="text-xs text-gray-400 font-mono tracking-wider">{event.time} | {event.location}</div>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full border text-xs font-bold uppercase tracking-wider flex items-center gap-1 ${getStatusColor(event.status)}`}>
                    <span className="animate-pulse">{getStatusIcon(event.status)}</span>
                    {getStatusLabel(event.status)}
                  </div>
                </div>

                {/* Main Body */}
                <div className="p-6 relative">
                  {/* Decorative Barcode */}
                  <div className="absolute right-0 top-0 bottom-0 w-8 md:w-12 bg-white/5 border-l-2 border-dashed border-white/10 flex flex-col justify-center items-center opacity-30">
                    <div className="text-[8px] -rotate-90 whitespace-nowrap tracking-[4px] font-mono">SMART-CONSULAR-PASS</div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 pr-8">{event.title}</h3>
                  
                  {/* Expanded Details */}
                  <div className={`transition-all duration-500 ease-in-out overflow-hidden ${expandedId === event.id ? 'max-h-48 opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>
                    <p className="text-gray-300 leading-relaxed border-t border-white/10 pt-4">
                      {event.desc}
                    </p>
                    <div className="mt-4 flex gap-4">
                      {event.status === 'boarding' && (
                        <button className="bg-gold text-black px-4 py-2 rounded font-bold text-sm hover:bg-yellow-400 transition-colors">
                          立即報名 (Register)
                        </button>
                      )}
                      <button className="text-sm text-gold underline hover:text-white">
                        了解更多 &rarr;
                      </button>
                    </div>
                  </div>
                  
                  {/* Hint to expand */}
                  {expandedId !== event.id && (
                    <div className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                      <span>點擊查看詳情</span>
                      <span className="animate-bounce">↓</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Back Button */}
        <div className="flex justify-center mt-12">
          <Link to="/" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full transition-all flex items-center gap-2 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            {t.back}
          </Link>
        </div>
      </div>
    </div>
  );
};