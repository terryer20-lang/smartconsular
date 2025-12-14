import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Language } from '../types';
import { translations } from '../data/locales';
import { Globe } from './Globe';

interface LayoutProps {
  children: React.ReactNode;
  lang: Language;
  onLangChange: (l: Language) => void;
}

export const Layout: React.FC<LayoutProps> = ({ children, lang, onLangChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const switchLang = (l: Language) => {
    onLangChange(l);
    setMenuOpen(false);
  };

  const navTo = (path: string) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col font-sans text-white bg-deep-blue relative overflow-x-hidden">
      {/* Global Background Globe */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Globe lang={lang} />
      </div>

      {/* Header */}
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'bg-gradient-to-r from-ocean-blue/90 to-alert-red/90 shadow-lg py-2 backdrop-blur-md' : 'py-4'} px-4 flex justify-between items-center h-16`}>
        <Link to="/" className="text-gold font-bold text-sm md:text-lg flex items-center gap-2 hover:text-white transition-colors truncate max-w-[80%]">
          {t.title}
        </Link>
        <button 
          onClick={() => setMenuOpen(true)} 
          className="text-gold text-2xl p-2 focus:outline-none"
          aria-label="Menu"
        >
          ☰
        </button>
      </header>

      {/* Side Menu */}
      <div className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`} onClick={() => setMenuOpen(false)} />
      <aside className={`fixed top-0 right-0 w-[85%] max-w-[400px] h-full bg-gradient-to-br from-ocean-blue to-alert-red z-[70] transition-transform duration-300 transform ${menuOpen ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto shadow-2xl`}>
        <div className="p-6 bg-black/20">
          <h2 className="text-lg md:text-xl text-gold font-bold mb-1">{t.title}</h2>
          <p className="text-xs md:text-sm opacity-90">{t.subtitle}</p>
        </div>
        
        <div className="flex justify-center gap-2 p-4 border-b border-white/10 bg-black/10">
          <button onClick={() => switchLang(Language.ZH_TW)} className={`px-4 py-2 rounded border border-white/30 text-sm ${lang === Language.ZH_TW ? 'bg-gold text-black border-gold' : 'text-white'}`}>繁</button>
          <button onClick={() => switchLang(Language.ZH_CN)} className={`px-4 py-2 rounded border border-white/30 text-sm ${lang === Language.ZH_CN ? 'bg-gold text-black border-gold' : 'text-white'}`}>简</button>
          <button onClick={() => switchLang(Language.PT)} className={`px-4 py-2 rounded border border-white/30 text-sm ${lang === Language.PT ? 'bg-gold text-black border-gold' : 'text-white'}`}>PT</button>
        </div>

        <div className="p-6 space-y-6 pb-48">
          {/* Section 1: Special Activities */}
          <div>
            <h3 className="text-gold text-base border-b-2 border-white/10 pb-2 mb-3">{t.menu.special}</h3>
            <button onClick={() => navTo('/weekly-challenge')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">⭐</span> {t.menu.weekly}
            </button>
            <button onClick={() => navTo('/safety-quiz')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
               <span className="w-8 text-center mr-2">📊</span> {t.menu.quiz}
            </button>
          </div>

          {/* Section 2: Emergency Services */}
          <div>
            <h3 className="text-gold text-base border-b-2 border-white/10 pb-2 mb-3">{t.menu.emergency}</h3>
            <button onClick={() => navTo('/emergency')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">🚨</span> {t.menu.sos} <span className="ml-2 text-xs bg-alert-red px-1 rounded">24H</span>
            </button>
            <button onClick={() => navTo('/trip')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">✈️</span> {t.menu.trip}
            </button>
            <button onClick={() => navTo('/difficulty')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">🆘</span> {t.menu.difficulty}
            </button>
          </div>

          {/* Section 3: Resources */}
          <div>
            <h3 className="text-gold text-base border-b-2 border-white/10 pb-2 mb-3">{t.menu.resources}</h3>
            <button onClick={() => navTo('/map')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">🗺️</span> {t.menu.map}
            </button>
            <button onClick={() => navTo('/podcast')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">🎧</span> {t.menu.podcast}
            </button>
            <button onClick={() => navTo('/video')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">🎬</span> {t.menu.video}
            </button>
             <button onClick={() => navTo('/download')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">📚</span> {t.menu.download}
            </button>
          </div>

          {/* Section 4: Zones */}
          <div>
            <h3 className="text-gold text-base border-b-2 border-white/10 pb-2 mb-3">{t.menu.zones}</h3>
            <button onClick={() => navTo('/emergency')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">🚨</span> {t.menu.sos}
            </button>
            <button onClick={() => navTo('/consular')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">🛡️</span> {t.menu.consular}
            </button>
            <button onClick={() => navTo('/rights')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">📋</span> {t.menu.rights}
            </button>
            <button onClick={() => navTo('/schedule')} className="w-full text-left py-2 border-b border-white/10 flex items-center hover:text-gold hover:pl-2 transition-all">
              <span className="w-8 text-center mr-2">📅</span> {t.menu.schedule}
            </button>
          </div>
        </div>
      </aside>

      <main className="flex-grow pt-16 relative z-10">
        {children}
      </main>

      {/* Footer - Always visible on all pages now, or conditionally if desired. keeping it consistent with index.html */}
      <footer className="bg-black/80 text-gray-300 border-t border-white/10 relative z-10">
        <div className="max-w-6xl mx-auto p-8 grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-gold text-lg border-b border-white/10 pb-2 mb-4">{t.footer.links}</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="https://www.fmprc.gov.cn/web/" target="_blank" rel="noopener" className="hover:text-gold flex gap-2">› {t.footer.linkNames.mfaChina}</a></li>
              <li><a href="https://portaldascomunidades.mne.gov.pt/pt/" target="_blank" rel="noopener" className="hover:text-gold flex gap-2">› {t.footer.linkNames.mfaPortugal}</a></li>
              <li><a href="https://cs.mfa.gov.cn/" target="_blank" rel="noopener" className="hover:text-gold flex gap-2">› {t.footer.linkNames.consularChina}</a></li>
              <li><a href="https://mo.ocmfa.gov.cn/chn/" target="_blank" rel="noopener" className="hover:text-gold flex gap-2">› {t.footer.linkNames.commissionMacau}</a></li>
              <li><a href="https://www.gov.mo/zh-hant/" target="_blank" rel="noopener" className="hover:text-gold flex gap-2">› {t.footer.linkNames.govMacau}</a></li>
               <li><a href="https://www.dsi.gov.mo/index_cn.jsp" target="_blank" rel="noopener" className="hover:text-gold flex gap-2">› {t.footer.linkNames.dsiMacau}</a></li>
               <li><a href="https://www.elctp.k12.edu.mo/elctp/" target="_blank" rel="noopener" className="hover:text-gold flex gap-2">› {t.footer.linkNames.school}</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-gold text-lg border-b border-white/10 pb-2 mb-4">{t.footer.contact}</h3>
            <p className="text-sm leading-relaxed mb-4 opacity-80 whitespace-pre-line">{t.footer.contactText}</p>
            <a href="mailto:infodoprogramaem2526@gmail.com" className="inline-block bg-white/10 px-4 py-2 rounded text-gold text-sm hover:bg-white/20 transition-colors">infodoprogramaem2526@gmail.com</a>
          </div>
        </div>
        <div className="bg-black/50 p-4 text-center text-xs text-gray-500 border-t border-white/10">
          {t.footer.copyright}
        </div>
      </footer>
    </div>
  );
};