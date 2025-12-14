import React from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';
import { Link } from 'react-router-dom';

export const Consular: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.consular;

  return (
    <div className="relative pt-20 pb-12 px-4 min-h-screen bg-deep-blue text-white">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-3xl md:text-5xl text-gold font-bold drop-shadow-md">{t.title}</h1>
          <div className="w-24 h-1 bg-alert-red mx-auto rounded-full"></div>
        </div>

        {/* Definition & Target Audience Cards */}
        <div className="grid md:grid-cols-2 gap-6 animate-slide-up">
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:border-gold/30 transition-all">
            <div className="text-4xl mb-4">🛡️</div>
            <h3 className="text-xl text-gold font-bold mb-3">{t.definition.title}</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{t.definition.text}</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 shadow-lg hover:border-gold/30 transition-all">
            <div className="text-4xl mb-4">👥</div>
            <h3 className="text-xl text-gold font-bold mb-3">{t.target.title}</h3>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">{t.target.text}</p>
          </div>
        </div>

        {/* Scope of Duties - Can vs Cannot */}
        <div className="animate-slide-up animation-delay-200">
          <h2 className="text-2xl text-center text-white font-bold mb-8 border-b border-white/10 pb-4 inline-block w-full">{t.scope.title}</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Can Do */}
            <div className="bg-green-900/20 rounded-2xl border border-green-500/30 overflow-hidden">
              <div className="bg-green-900/40 p-4 border-b border-green-500/30 flex items-center gap-3">
                <span className="text-2xl">✅</span>
                <h3 className="text-lg md:text-xl font-bold text-green-400">{t.scope.canTitle}</h3>
              </div>
              <ul className="p-6 space-y-3">
                {t.scope.canList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200 text-sm md:text-base">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Cannot Do */}
            <div className="bg-red-900/20 rounded-2xl border border-red-500/30 overflow-hidden">
              <div className="bg-red-900/40 p-4 border-b border-red-500/30 flex items-center gap-3">
                <span className="text-2xl">❌</span>
                <h3 className="text-lg md:text-xl font-bold text-red-400">{t.scope.cannotTitle}</h3>
              </div>
              <ul className="p-6 space-y-3">
                {t.scope.cannotList.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-200 text-sm md:text-base">
                    <span className="text-red-500 mt-1">✕</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Tips Section */}
        <div className="bg-gold/10 backdrop-blur-md rounded-2xl p-8 border border-gold/20 animate-slide-up animation-delay-400">
          <h3 className="text-2xl text-gold font-bold mb-6 flex items-center gap-3">
            <span>💡</span> {t.tips.title}
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {t.tips.list.map((tip, i) => (
              <div key={i} className="bg-black/20 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2 text-lg">{tip.title}</h4>
                <p className="text-gray-300 text-sm leading-relaxed">{tip.content}</p>
              </div>
            ))}
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