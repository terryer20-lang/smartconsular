import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';
import { Link } from 'react-router-dom';

export const Rights: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.rights;
  const [activeCard, setActiveCard] = useState<number | null>(null);

  return (
    <div className="relative pt-20 pb-12 px-4 min-h-screen bg-deep-blue text-white overflow-hidden">
      <div className="max-w-6xl mx-auto space-y-12 relative z-10">
        
        {/* Header with ID Card visual metaphor */}
        <div className="text-center space-y-6 animate-fade-in">
          <div className="inline-block bg-white/10 backdrop-blur-lg rounded-xl p-1 border border-white/20 mb-4 shadow-[0_0_30px_rgba(255,215,0,0.2)]">
            <div className="bg-gradient-to-br from-ocean-blue to-black px-8 py-4 rounded-lg flex items-center gap-4">
              <span className="text-4xl">🪪</span>
              <div>
                <h1 className="text-2xl md:text-4xl text-gold font-bold tracking-wide uppercase">{t.title}</h1>
                <p className="text-xs md:text-sm text-gray-400 tracking-widest mt-1">MACAU RESIDENT IDENTITY</p>
              </div>
            </div>
          </div>
          <h2 className="text-xl md:text-2xl text-white font-light">{t.subtitle}</h2>
          <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed">{t.intro}</p>
        </div>

        {/* Rights Grid - Interactive Flip/Expand Cards */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 px-2">
          {t.cards.map((card, index) => (
            <div 
              key={index}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
              className={`group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 cursor-pointer transition-all duration-500 overflow-hidden ${activeCard === index ? 'ring-2 ring-gold bg-white/10 scale-[1.02]' : 'hover:bg-white/10 hover:-translate-y-1'}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-gradient-to-br from-gold/20 to-transparent rounded-lg text-3xl">
                  {card.icon}
                </div>
                <div className={`transform transition-transform duration-300 ${activeCard === index ? 'rotate-180 text-gold' : 'text-gray-500'}`}>
                  ▼
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gold transition-colors">{card.title}</h3>
              <p className="text-gray-400 text-sm mb-4">{card.desc}</p>
              
              {/* Expandable Details */}
              <div className={`grid transition-all duration-500 ease-in-out ${activeCard === index ? 'grid-rows-[1fr] opacity-100 mt-4 pt-4 border-t border-white/10' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden">
                  <ul className="space-y-2">
                    {card.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-gray-200">
                        <span className="text-gold mt-1">▸</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Nationality Section - Visual Break */}
        <div className="bg-gradient-to-r from-red-900/40 to-ocean-blue/40 rounded-3xl p-8 md:p-12 border border-white/10 relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-gold/10 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="relative z-10 grid md:grid-cols-[1fr_2fr] gap-8 items-center">
            <div className="text-center md:text-left">
              <span className="text-5xl md:text-7xl block mb-2">🇨🇳</span>
              <span className="text-sm text-gray-400 tracking-wider">NATIONALITY LAW</span>
            </div>
            <div>
              <h3 className="text-2xl text-gold font-bold mb-4">{t.nationality.title}</h3>
              <p className="text-white/90 leading-relaxed mb-4 text-sm md:text-base">
                {t.nationality.content}
              </p>
              <div className="bg-black/30 p-4 rounded-lg border-l-4 border-gold">
                <p className="text-sm text-gray-300 italic">
                  {t.nationality.note}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="flex justify-center pt-8">
          <Link to="/" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full transition-all flex items-center gap-2 group">
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            {t.back}
          </Link>
        </div>
      </div>
    </div>
  );
};