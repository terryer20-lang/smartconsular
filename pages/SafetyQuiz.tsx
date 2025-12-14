import React, { useState, useEffect } from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';
import { Link } from 'react-router-dom';

interface Scores {
  fraud: number;
  prep: number;
  legal: number;
  emergency: number;
}

export const SafetyQuiz: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.safetyQuiz;
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'analyzing' | 'result'>('intro');
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [scores, setScores] = useState<Scores>({
    fraud: 0,
    prep: 0,
    legal: 0,
    emergency: 0
  });

  const categoryCounts = {
    fraud: t.questions.filter(q => q.category === 'fraud').length * 10,
    prep: t.questions.filter(q => q.category === 'prep').length * 10,
    legal: t.questions.filter(q => q.category === 'legal').length * 10,
    emergency: t.questions.filter(q => q.category === 'emergency').length * 10,
  };

  const handleStart = () => {
    setGameState('playing');
    setCurrentQuestionIdx(0);
    setScores({ fraud: 0, prep: 0, legal: 0, emergency: 0 });
  };

  const handleAnswer = (category: keyof Scores, score: number) => {
    setScores(prev => ({
      ...prev,
      [category]: prev[category] + score
    }));

    if (currentQuestionIdx < t.questions.length - 1) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setGameState('analyzing');
      setTimeout(() => setGameState('result'), 2500);
    }
  };

  const calculatePercentage = (cat: keyof Scores) => {
    const max = categoryCounts[cat];
    return max === 0 ? 0 : (scores[cat] / max);
  };

  const totalScore = Object.values(scores).reduce((a: number, b: number) => a + b, 0);
  const maxTotalScore = t.questions.length * 10;
  const totalPercentage = (totalScore / maxTotalScore) * 100;

  const getAdvice = () => {
    if (totalPercentage >= 80) return t.result.advice.high;
    if (totalPercentage >= 50) return t.result.advice.medium;
    return t.result.advice.low;
  };

  // Radar Chart Calculation
  const radarPoints = () => {
    const categories = ['prep', 'fraud', 'emergency', 'legal'] as const;
    const centerX = 100;
    const centerY = 100;
    const radius = 80;
    
    return categories.map((cat, i) => {
      const angle = (Math.PI / 2) * i - Math.PI / 2; // Start from top (-90 deg)
      // Ensure a minimum visual size even if score is 0
      const value = Math.max(0.1, calculatePercentage(cat));
      const x = centerX + radius * value * Math.cos(angle);
      const y = centerY + radius * value * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
  };

  return (
    <div className="relative pt-20 pb-12 px-4 min-h-screen bg-[#050b14] text-cyan-500 overflow-hidden font-mono selection:bg-cyan-900 selection:text-white">
      
      {/* Background HUD Grid */}
      <div className="absolute inset-0 pointer-events-none z-0" 
           style={{
             backgroundImage: 'linear-gradient(rgba(6, 182, 212, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.05) 1px, transparent 1px)',
             backgroundSize: '50px 50px'
           }}>
      </div>
      
      {/* Decorative Rotating Circles */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-cyan-900/30 rounded-full animate-[spin_60s_linear_infinite] pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-cyan-800/20 rounded-full border-dashed animate-[spin_40s_linear_infinite_reverse] pointer-events-none"></div>

      <div className="max-w-2xl mx-auto relative z-10">
        
        {/* Header HUD Element */}
        <div className="flex justify-between items-end border-b border-cyan-800 pb-2 mb-8">
          <div>
            <div className="text-xs text-cyan-700">SYSTEM: I.R.A.S. v2.5</div>
            <h1 className="text-2xl md:text-3xl font-bold text-cyan-400 uppercase tracking-widest drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">
              {t.title}
            </h1>
          </div>
          <div className="hidden md:block text-right">
             <div className="w-24 h-1 bg-cyan-900 mb-1">
               <div className="h-full bg-cyan-400 animate-pulse w-2/3"></div>
             </div>
             <div className="text-xs text-cyan-600">STATUS: ACTIVE</div>
          </div>
        </div>

        {/* INTRO */}
        {gameState === 'intro' && (
          <div className="bg-black/60 backdrop-blur-md border border-cyan-500/50 p-8 rounded-none relative shadow-[0_0_30px_rgba(6,182,212,0.1)] animate-fade-in group">
            {/* Tech Corners */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-cyan-400"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-cyan-400"></div>

            <div className="w-32 h-32 mx-auto mb-8 relative">
              <div className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"></div>
              <div className="absolute inset-0 border-t-2 border-cyan-400 rounded-full animate-spin"></div>
              <div className="absolute inset-4 border-2 border-cyan-500/30 rounded-full"></div>
              <div className="absolute inset-4 border-r-2 border-cyan-400 rounded-full animate-spin-reverse"></div>
              <div className="absolute inset-0 flex items-center justify-center text-4xl animate-pulse">🛡️</div>
            </div>
            
            <h2 className="text-2xl font-bold text-white mb-4 text-center">{t.intro.welcome}</h2>
            <div className="h-px w-16 bg-cyan-500 mx-auto mb-6"></div>
            <p className="text-cyan-200 mb-10 leading-relaxed text-center font-sans">
              {t.intro.desc}
            </p>
            
            <div className="text-center">
              <button 
                onClick={handleStart}
                className="bg-cyan-900/40 hover:bg-cyan-500 text-cyan-300 hover:text-black font-bold py-4 px-12 border border-cyan-500 tracking-widest transition-all uppercase hover:shadow-[0_0_20px_rgba(6,182,212,0.6)]"
              >
                {t.intro.startBtn}
              </button>
            </div>
          </div>
        )}

        {/* PLAYING */}
        {gameState === 'playing' && (
          <div className="animate-slide-up">
            <div className="flex justify-between items-center mb-6 text-sm text-cyan-600">
              <span className="animate-pulse">SCANNING SECTOR {(currentQuestionIdx + 1).toString().padStart(2, '0')}...</span>
              <span>TOTAL: {t.questions.length.toString().padStart(2, '0')}</span>
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-cyan-900/20 h-1 mb-8">
              <div 
                className="h-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] transition-all duration-300 ease-linear"
                style={{ width: `${((currentQuestionIdx + 1) / t.questions.length) * 100}%` }}
              ></div>
            </div>

            <div className="bg-black/40 border-l-4 border-cyan-500 p-6 md:p-8 relative overflow-hidden backdrop-blur-sm">
              {/* Scanline Effect */}
              <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/20 shadow-[0_0_15px_rgba(34,211,238,0.5)] animate-[scan_3s_linear_infinite]"></div>

              <div className="mb-8">
                <span className="inline-block bg-cyan-950 text-cyan-300 text-xs px-2 py-1 mb-3 border border-cyan-800">
                  TARGET: {t.categories[t.questions[currentQuestionIdx].category as keyof typeof t.categories]}
                </span>
                <h3 className="text-xl md:text-2xl font-bold text-white leading-relaxed font-sans">
                  {t.questions[currentQuestionIdx].question}
                </h3>
              </div>

              <div className="space-y-4">
                {t.questions[currentQuestionIdx].options.map((opt, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleAnswer(t.questions[currentQuestionIdx].category as keyof Scores, opt.score)}
                    className="w-full text-left p-4 md:p-5 bg-cyan-900/10 border border-cyan-800 hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-200 group flex items-center"
                  >
                    <div className="w-8 h-8 flex items-center justify-center border border-cyan-700 text-cyan-500 mr-4 text-sm group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                      {String.fromCharCode(65 + idx)}
                    </div>
                    <span className="text-gray-300 group-hover:text-white text-lg">{opt.text}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* ANALYZING */}
        {gameState === 'analyzing' && (
          <div className="flex flex-col items-center justify-center h-80">
            <div className="relative w-24 h-24 mb-8">
              <div className="absolute inset-0 border-4 border-cyan-900 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-t-cyan-400 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl animate-pulse">
                👁️
              </div>
            </div>
            <p className="text-cyan-400 font-mono text-xl tracking-widest animate-pulse">{t.result.analyzing}</p>
            <div className="mt-4 text-xs text-cyan-700">COMPILING NEURAL NETWORK DATA...</div>
          </div>
        )}

        {/* RESULT */}
        {gameState === 'result' && (
          <div className="animate-zoom-in text-center">
            <div className="bg-black/80 backdrop-blur-xl border-2 border-cyan-500/50 p-1 rounded-2xl shadow-[0_0_50px_rgba(6,182,212,0.15)] inline-block w-full max-w-lg relative">
              {/* Holo Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none rounded-2xl"></div>
              
              <div className="p-8 border border-cyan-900/50 rounded-xl">
                <h2 className="text-3xl font-bold text-white mb-2 tracking-widest uppercase">{t.result.title}</h2>
                <div className="text-cyan-600 text-xs mb-8">Generated by I.R.A.S. Core</div>
                
                {/* Radar Chart Container */}
                <div className="relative w-64 h-64 mx-auto mb-8">
                  {/* Rotating Scanner Line */}
                  <div className="absolute inset-0 rounded-full border border-cyan-900 overflow-hidden">
                    <div className="w-full h-1/2 bg-gradient-to-b from-cyan-500/20 to-transparent absolute top-0 animate-[spin_4s_linear_infinite] origin-bottom"></div>
                  </div>

                  <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-[0_0_10px_rgba(34,211,238,0.5)] relative z-10">
                    {/* Grid Lines (Concentric) */}
                    {[20, 40, 60, 80].map(r => (
                      <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="#164e63" strokeWidth="1" strokeDasharray="4 2" />
                    ))}
                    
                    {/* Axes */}
                    <line x1="100" y1="20" x2="100" y2="180" stroke="#155e75" strokeWidth="1" />
                    <line x1="20" y1="100" x2="180" y2="100" stroke="#155e75" strokeWidth="1" />

                    {/* Data Polygon */}
                    <polygon 
                      points={radarPoints()} 
                      fill="rgba(6, 182, 212, 0.4)" 
                      stroke="#22d3ee" 
                      strokeWidth="2"
                      className="animate-[pulse_3s_infinite]"
                    />
                    
                    {/* Data Points */}
                    {['prep', 'fraud', 'emergency', 'legal'].map((cat, i) => {
                       const angle = (Math.PI / 2) * i - Math.PI / 2;
                       const value = Math.max(0.1, calculatePercentage(cat as any));
                       const x = 100 + 80 * value * Math.cos(angle);
                       const y = 100 + 80 * value * Math.sin(angle);
                       return <circle key={i} cx={x} cy={y} r="3" fill="#fff" />
                    })}

                    {/* Labels */}
                    <text x="100" y="15" textAnchor="middle" fill="#22d3ee" fontSize="10" fontWeight="bold">{t.categories.prep}</text>
                    <text x="195" y="105" textAnchor="end" fill="#22d3ee" fontSize="10" fontWeight="bold">{t.categories.fraud}</text>
                    <text x="100" y="195" textAnchor="middle" fill="#22d3ee" fontSize="10" fontWeight="bold">{t.categories.emergency}</text>
                    <text x="5" y="105" textAnchor="start" fill="#22d3ee" fontSize="10" fontWeight="bold">{t.categories.legal}</text>
                  </svg>
                </div>

                {/* Score Display */}
                <div className="mb-8 relative inline-block">
                  <div className="text-cyan-500 text-xs mb-1 uppercase tracking-widest">{t.result.scoreText}</div>
                  <div className="text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300">
                    {Math.round(totalPercentage)}
                  </div>
                  <div className="text-xs text-cyan-700 absolute -right-6 top-0">/100</div>
                </div>

                {/* Advice Box */}
                <div className={`p-4 rounded-lg mb-8 border-l-4 text-left font-sans text-sm md:text-base leading-relaxed ${
                  totalPercentage >= 80 ? 'bg-green-900/20 border-green-500 text-green-100' :
                  totalPercentage >= 50 ? 'bg-yellow-900/20 border-yellow-500 text-yellow-100' :
                  'bg-red-900/20 border-red-500 text-red-100'
                }`}>
                  {getAdvice()}
                </div>

                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <button 
                    onClick={handleStart}
                    className="bg-transparent hover:bg-cyan-900/30 border border-cyan-700 text-cyan-300 px-8 py-3 rounded uppercase tracking-wider transition-all"
                  >
                    {t.result.retry}
                  </button>
                  <Link 
                    to="/"
                    className="bg-cyan-600 hover:bg-cyan-500 text-black font-bold px-8 py-3 rounded uppercase tracking-wider transition-all shadow-[0_0_15px_rgba(6,182,212,0.5)]"
                  >
                    {t.result.home}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};