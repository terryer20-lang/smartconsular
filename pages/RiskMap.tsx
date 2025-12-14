import React, { useState, useEffect } from 'react';
import { Language, CountryRiskData } from '../types';
import { translations } from '../data/locales';
import { countryData } from '../data/countries';
import { Globe } from '../components/Globe';

export const RiskMap: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.riskMap;
  const [selectedCountry, setSelectedCountry] = useState<CountryRiskData | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showStats, setShowStats] = useState(false);

  // Sorting countries by safety index for the spectrum chart
  const sortedCountries = [...countryData]
    .filter(c => c.SafestCountriesIndexViaTravelSafe !== null)
    .sort((a, b) => (b.SafestCountriesIndexViaTravelSafe || 0) - (a.SafestCountriesIndexViaTravelSafe || 0));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    const found = countryData.find(c => c.country.toLowerCase().includes(e.target.value.toLowerCase()));
    if (found) {
      setSelectedCountry(found);
      setShowStats(true);
    }
  };

  const selectCountry = (country: CountryRiskData | null) => {
    setSelectedCountry(country);
    setShowStats(!!country);
  };

  const getRiskColorClass = (level: string) => {
    switch (level) {
      case 'High': return 'text-alert-red border-alert-red';
      case 'Medium': return 'text-yellow-400 border-yellow-400';
      case 'Low': return 'text-green-400 border-green-400';
      default: return 'text-gray-400 border-gray-400';
    }
  };

  return (
    <div className="relative h-screen w-full bg-deep-blue overflow-hidden text-cyan-400 font-mono">
      
      {/* Background Interactive Globe */}
      <Globe 
        lang={lang} 
        interactive={true} 
        onSelectCountry={selectCountry}
        countryData={countryData}
        selectedCountryName={selectedCountry?.country}
      />

      {/* Cyberpunk HUD Overlay */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-[1] bg-[length:100%_2px,3px_100%] pointer-events-none"></div>
      
      {/* Top Bar - Search & Title */}
      <div className="absolute top-20 left-4 right-4 md:left-8 md:right-8 z-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 animate-slide-up">
        <div>
          <div className="text-xs text-cyan-600 tracking-[0.3em] uppercase mb-1">System: G.S.S.A.S. Online</div>
          <h1 className="text-2xl md:text-3xl font-bold text-white uppercase drop-shadow-[0_0_10px_rgba(34,211,238,0.8)]">
            {t.title}
          </h1>
        </div>
        
        <div className="relative w-full md:w-80 group">
          <input 
            type="text" 
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={handleSearch}
            className="w-full bg-black/60 border-2 border-cyan-800 text-white px-4 py-2 rounded-none focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all uppercase placeholder-cyan-800"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-cyan-600 group-focus-within:text-cyan-400 animate-pulse">⌖</div>
        </div>
      </div>

      {/* Right Side - Risk Spectrum (Desktop) */}
      <div className="absolute right-8 top-40 bottom-40 w-16 hidden md:flex flex-col items-center z-20 bg-black/40 backdrop-blur border-l border-cyan-900">
        <div className="text-[10px] text-cyan-600 -rotate-90 whitespace-nowrap mb-4 mt-8">{t.ranking}</div>
        <div className="flex-1 w-2 bg-gradient-to-b from-green-500 via-yellow-500 to-red-500 relative rounded-full">
          {selectedCountry && selectedCountry.SafestCountriesIndexViaTravelSafe && (
            <div 
              className="absolute w-8 h-8 -left-3 border-2 border-white bg-black rounded-full flex items-center justify-center text-[10px] text-white font-bold transition-all duration-1000"
              style={{ top: `${100 - (selectedCountry.SafestCountriesIndexViaTravelSafe)}%` }}
            >
              {selectedCountry.flagCode}
            </div>
          )}
        </div>
        <div className="text-[10px] text-cyan-600 mt-2">0</div>
      </div>

      {/* Bottom Data Panel (Holographic Card) */}
      <div className={`absolute bottom-0 left-0 w-full transition-transform duration-500 z-30 ${showStats ? 'translate-y-0' : 'translate-y-full'}`}>
        <div className="bg-black/80 backdrop-blur-xl border-t-2 border-cyan-500 p-6 md:p-8 relative">
          {/* Close Button */}
          <button 
            onClick={() => { setShowStats(false); setSelectedCountry(null); }}
            className="absolute top-0 right-0 bg-cyan-900 text-white px-4 py-1 text-sm hover:bg-cyan-700"
          >
            CLOSE X
          </button>

          {selectedCountry ? (
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              
              {/* Identity Module */}
              <div className="flex items-center gap-6">
                <div className="w-24 h-16 md:w-32 md:h-20 bg-black border border-cyan-800 relative overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)]">
                  <img 
                    src={`https://flagcdn.com/w160/${selectedCountry.flagCode.toLowerCase()}.png`} 
                    alt={selectedCountry.country} 
                    className="w-full h-full object-cover opacity-80"
                  />
                  <div className="absolute inset-0 bg-cyan-500/10 mix-blend-overlay"></div>
                  {/* Scan Line */}
                  <div className="absolute top-0 w-full h-1 bg-white/50 animate-[scan_2s_linear_infinite]"></div>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-white uppercase">{selectedCountry.country}</h2>
                  <div className="text-sm text-cyan-600">{selectedCountry.flagCode} // REGION DETECTED</div>
                </div>
              </div>

              {/* Threat Gauge */}
              <div className="flex flex-col items-center">
                <div className="relative w-32 h-32 flex items-center justify-center">
                  <svg className="w-full h-full -rotate-90">
                    <circle cx="50%" cy="50%" r="45%" fill="none" stroke="#1f2937" strokeWidth="8" />
                    <circle 
                      cx="50%" cy="50%" r="45%" 
                      fill="none" 
                      stroke={selectedCountry.RiskLevelByCountryViaTravelSafe === 'High' ? '#ef4444' : selectedCountry.RiskLevelByCountryViaTravelSafe === 'Medium' ? '#eab308' : '#22c55e'} 
                      strokeWidth="8" 
                      strokeDasharray={`${(selectedCountry.SafestCountriesIndexViaTravelSafe || 0) * 2.83} 283`}
                      className="transition-all duration-1000 ease-out"
                    />
                  </svg>
                  <div className="absolute text-center">
                    <div className="text-2xl font-bold text-white">{selectedCountry.SafestCountriesIndexViaTravelSafe || 'N/A'}</div>
                    <div className="text-[8px] uppercase tracking-wider text-gray-400">{t.stats.safetyIndex}</div>
                  </div>
                </div>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/5 p-3 border-l-2 border-cyan-600">
                  <div className="text-[10px] uppercase text-gray-400 mb-1">{t.stats.riskLevel}</div>
                  <div className={`text-xl font-bold uppercase ${getRiskColorClass(selectedCountry.RiskLevelByCountryViaTravelSafe)}`}>
                    {selectedCountry.RiskLevelByCountryViaTravelSafe === 'High' ? t.levels.high : 
                     selectedCountry.RiskLevelByCountryViaTravelSafe === 'Medium' ? t.levels.medium : 
                     selectedCountry.RiskLevelByCountryViaTravelSafe === 'Low' ? t.levels.low : t.levels.unknown}
                  </div>
                </div>
                <div className="bg-white/5 p-3 border-l-2 border-cyan-600">
                  <div className="text-[10px] uppercase text-gray-400 mb-1">{t.stats.peaceIndex}</div>
                  <div className="text-xl font-bold text-white">{selectedCountry.GlobalPeaceIndex_2025 || 'N/A'}</div>
                  {/* Mini Audio Spectrum Bar */}
                  <div className="flex gap-0.5 mt-1 h-2">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-1 bg-cyan-500" style={{ height: `${Math.random() * 100}%` }}></div>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 p-3 border-l-2 border-cyan-600 col-span-2">
                  <div className="text-[10px] uppercase text-gray-400 mb-1">{t.stats.globalRank}</div>
                  <div className="flex items-end justify-between">
                    <div className="text-xl font-bold text-white">#{selectedCountry.SafestCountriesRankUSNews_2024 || 'N/A'}</div>
                    <div className="text-xs text-cyan-600 animate-pulse">LIVE DATA FEED...</div>
                  </div>
                </div>
              </div>

            </div>
          ) : (
            <div className="text-center text-gray-500 py-8 animate-pulse">
              {t.noSelection}
            </div>
          )}
        </div>
      </div>

    </div>
  );
};