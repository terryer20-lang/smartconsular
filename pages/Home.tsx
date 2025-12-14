import React, { useRef, useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';
import { Link } from 'react-router-dom';

export const Home: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const heroRef = useRef<HTMLDivElement>(null);
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Play animation when intersecting
        if (entry.isIntersecting) {
          setPlayAnimation(true);
        } else {
          // Reset animation state when leaving view, allowing it to replay when returning
          setPlayAnimation(false);
        }
      },
      { threshold: 0.3 } // Trigger when 30% visible
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Hero Section with Welcome Panel Animation */}
      <section 
        ref={heroRef} 
        className="h-[100vh] w-full flex items-center justify-center relative z-10"
      >
        <div className={`text-center p-8 bg-black/20 backdrop-blur-md rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] transition-all duration-1000 transform ${playAnimation ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-20 scale-95'}`}>
          <h1 className="text-5xl md:text-7xl font-bold text-gold mb-4 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] tracking-wider">
            {t.welcomeTitle}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light tracking-widest border-t border-white/20 pt-4 mt-2">
            {t.subtitle}
          </p>
          <div className="mt-8 animate-bounce opacity-70">
            <span className="text-sm text-gray-400">{t.scrollDown}</span>
            <div className="text-2xl text-gold">↓</div>
          </div>
        </div>
      </section>

      {/* Scrollable Content Overlay - More transparent to show globe */}
      <div className="relative z-10 bg-gradient-to-b from-transparent via-deep-blue/40 to-deep-blue/80">
        
        {/* Features Section - Style 2 */}
        <section className="py-20 px-4 bg-white/5 backdrop-blur-sm min-h-[80vh] flex flex-col justify-center border-t border-white/5">
          <h2 className="text-3xl text-center text-gold mb-16 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-24 after:h-1 after:bg-alert-red">
            {t.features.title}
          </h2>
          
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureLink to="/emergency" icon="🚨" title={t.features.emergency.title} desc={t.features.emergency.desc} />
            <FeatureLink to="/consular" icon="🛡️" title={t.features.consular.title} desc={t.features.consular.desc} />
            <FeatureLink to="/rights" icon="📋" title={t.features.rights.title} desc={t.features.rights.desc} />
            <FeatureLink to="/schedule" icon="📅" title={t.features.schedule.title} desc={t.features.schedule.desc} />
          </div>
        </section>

        {/* Notifications - Unified to Style 2 */}
        <section className="py-20 px-4 bg-white/5 backdrop-blur-sm min-h-[50vh] border-t border-white/5">
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/10 shadow-2xl">
            <div className="flex items-center gap-4 mb-8 border-b border-white/20 pb-4">
              <span className="text-3xl">📢</span>
              <h3 className="text-2xl text-gold font-bold">{t.notifications.title}</h3>
            </div>
            <div className="space-y-4">
              {t.notifications.list.map((n, i) => (
                <div key={i} className="flex flex-col md:flex-row gap-3 md:gap-6 p-4 bg-black/20 rounded border-l-4 border-gold hover:bg-black/30 transition-transform hover:translate-x-2 duration-300">
                  <span className="text-gold font-mono font-bold whitespace-nowrap min-w-[120px]">{n.date}</span>
                  <p className="text-white/90">{n.content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

const FeatureLink = ({ to, icon, title, desc }: { to: string, icon: string, title: string, desc: string }) => (
  <Link to={to} className="group flex flex-col items-center text-center p-8 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/15 hover:-translate-y-2 hover:shadow-xl transition-all duration-300">
    <div className="w-24 h-24 rounded-full bg-gold/10 flex items-center justify-center text-5xl mb-6 group-hover:scale-110 group-hover:bg-gold/20 transition-all text-gold">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-gold transition-colors">{title}</h3>
    <p className="text-base text-gray-300 leading-relaxed">{desc}</p>
  </Link>
);