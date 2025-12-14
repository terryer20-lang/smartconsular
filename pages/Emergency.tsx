import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';
import { Link } from 'react-router-dom';

export const Emergency: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.emergency;
  const [activeTab, setActiveTab] = useState<'hotlines' | 'guides' | 'antifraud'>('hotlines');

  return (
    <div className="relative pt-20 pb-12 px-4 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl text-center text-gold mb-8 font-bold drop-shadow-md">{t.title}</h1>
        
        {/* Tabs */}
        <div className="flex justify-center mb-8 border-b border-white/20">
          <TabButton active={activeTab === 'hotlines'} onClick={() => setActiveTab('hotlines')} icon="🚨" label={t.tabs.hotlines} />
          <TabButton active={activeTab === 'guides'} onClick={() => setActiveTab('guides')} icon="📖" label={t.tabs.guides} />
          <TabButton active={activeTab === 'antifraud'} onClick={() => setActiveTab('antifraud')} icon="🛡️" label={t.tabs.antifraud} />
        </div>

        {/* Tab Content */}
        <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-2xl min-h-[500px]">
          
          {/* HOTLINES TAB */}
          {activeTab === 'hotlines' && (
            <div className="space-y-8 animate-fade-in">
              {/* Global 12308 */}
              <div className="bg-gradient-to-r from-red-900/60 to-red-800/60 rounded-xl p-6 border border-red-500/50 shadow-lg">
                <h3 className="text-xl text-gold font-bold mb-4 flex items-center gap-2">
                  <span>🌏</span> {t.hotlines.globalTitle}
                </h3>
                <div className="text-white/90 text-sm md:text-base mb-4">{t.hotlines.desc12308}</div>
                <div className="flex flex-col md:flex-row gap-4 items-center">
                  <a href="tel:+861012308" className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-lg w-full md:w-auto justify-center">
                    📞 +86-10-12308
                  </a>
                  <a href="tel:+861065612308" className="bg-red-600 hover:bg-red-500 text-white px-6 py-3 rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-lg w-full md:w-auto justify-center">
                    📞 +86-10-65612308
                  </a>
                </div>
              </div>

              {/* Macao Specifics */}
              <div>
                <h3 className="text-xl text-gold font-bold mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                  <img src="https://flagcdn.com/w40/mo.png" alt="Macao Flag" className="w-8 h-auto shadow-sm" /> 
                  {t.hotlines.macaoTitle}
                </h3>
                <div className="grid gap-4">
                  <HotlineCard title={t.hotlines.macaoCommissioner} number="+853-66888353" />
                  <HotlineCard title={t.hotlines.macaoTourism} number="+853-28333000" />
                  <HotlineCard title={t.hotlines.macaoPSP} number="+853-28573333" />
                  <HotlineCard title={t.hotlines.macaoDSI} number="+853-28370777" />
                </div>
              </div>
            </div>
          )}

          {/* GUIDES TAB */}
          {activeTab === 'guides' && (
            <div className="space-y-4 animate-fade-in">
              <GuideAccordion title={`📄 ${t.guides.lostDoc.title}`} steps={t.guides.lostDoc.steps} />
              <GuideAccordion title={`🚓 ${t.guides.arrested.title}`} steps={t.guides.arrested.steps} />
              <GuideAccordion title={`🏥 ${t.guides.injury.title}`} steps={t.guides.injury.steps} />
              <GuideAccordion title={`🔍 ${t.guides.missing.title}`} steps={t.guides.missing.steps} />
              
              <div className="mt-8 pt-6 border-t border-white/20">
                <h3 className="text-center text-gold text-lg mb-4">領事官員職責 (Consular Duties)</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-900/30 p-4 rounded border border-green-500/30">
                    <h4 className="text-green-400 font-bold mb-2">✅ 可以 (Can Do)</h4>
                    <ul className="list-disc pl-4 text-sm text-gray-300 space-y-1">
                      {t.guides.rights.canDo.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                  <div className="bg-red-900/30 p-4 rounded border border-red-500/30">
                    <h4 className="text-red-400 font-bold mb-2">❌ 不可以 (Cannot Do)</h4>
                    <ul className="list-disc pl-4 text-sm text-gray-300 space-y-1">
                      {t.guides.rights.cannotDo.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ANTI-FRAUD TAB */}
          {activeTab === 'antifraud' && (
            <div className="space-y-6 animate-fade-in">
              <div className="bg-yellow-600/20 p-6 rounded-xl border border-yellow-500/50">
                <h3 className="text-2xl text-yellow-400 font-bold mb-4 text-center">⚠️ {t.antifraud.sixDontsTitle}</h3>
                <ul className="grid md:grid-cols-2 gap-4">
                  {t.antifraud.sixDonts.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 bg-black/30 p-3 rounded">
                      <span className="text-red-500 font-bold text-lg">✕</span>
                      <span className="text-sm md:text-base text-gray-200">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-xl text-gold font-bold mb-4 border-b border-white/10 pb-2">{t.antifraud.commonScamsTitle}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {t.antifraud.scams.map((scam, i) => (
                    <div key={i} className="bg-white/5 p-4 rounded border border-white/10 hover:bg-white/10 transition-colors">
                      <h4 className="text-red-400 font-bold mb-1">{scam.name}</h4>
                      <p className="text-sm text-gray-400">{scam.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-blue-900/20 p-6 rounded border border-blue-500/20">
                <p className="text-center text-sm text-gray-300">💡 {t.antifraud.tools}</p>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8 text-center">
          <Link to="/" className="inline-block bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full transition-colors">
            {t.back}
          </Link>
        </div>
      </div>
    </div>
  );
};

const TabButton = ({ active, onClick, icon, label }: { active: boolean, onClick: () => void, icon: string, label: string }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-6 py-3 border-b-2 transition-all ${
      active 
        ? 'border-gold text-gold bg-white/5' 
        : 'border-transparent text-gray-400 hover:text-white hover:bg-white/5'
    }`}
  >
    <span className="text-xl">{icon}</span>
    <span className="font-bold">{label}</span>
  </button>
);

const HotlineCard = ({ title, number }: { title: string, number: string }) => (
  <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 hover:bg-white/10 transition-colors">
    <h4 className="text-sm text-gray-300 flex-1">{title}</h4>
    <a href={`tel:${number.replace(/-/g, '')}`} className="text-lg font-mono font-bold text-gold hover:text-white transition-colors whitespace-nowrap">
      {number}
    </a>
  </div>
);

const GuideAccordion = ({ title, steps }: { title: string, steps: string[] }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border border-white/10 rounded-lg overflow-hidden bg-white/5">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-4 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-bold text-white">{title}</span>
        <span className={`transform transition-transform ${isOpen ? 'rotate-180' : ''}`}>▼</span>
      </button>
      <div className={`transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-4 pt-0 bg-black/20">
          <ol className="list-decimal pl-5 space-y-2 text-gray-300">
            {steps.map((step, i) => <li key={i}>{step}</li>)}
          </ol>
        </div>
      </div>
    </div>
  );
};