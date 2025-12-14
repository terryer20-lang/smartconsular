import React, { useState } from 'react';
import { Language } from '../types';
import { translations } from '../data/locales';
import { Link } from 'react-router-dom';

export const WeeklyChallenge: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang].pages.quiz;
  const [gameState, setGameState] = useState<'intro' | 'playing' | 'result'>('intro');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [feedback, setFeedback] = useState<string | null>(null);

  const handleStart = () => {
    setGameState('playing');
    setCurrentQuestion(0);
    setScore(0);
    setFeedback(null);
  };

  const handleAnswer = (isCorrect: boolean, feedbackText: string, index: number) => {
    if (selectedOption !== null) return; // Prevent double clicks
    
    setSelectedOption(index);
    setFeedback(feedbackText);
    if (isCorrect) setScore(score + 1);

    setTimeout(() => {
      if (currentQuestion < t.questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
        setFeedback(null);
      } else {
        setGameState('result');
      }
    }, 2000);
  };

  const getResult = () => {
    if (score === t.questions.length) return t.results.perfect;
    if (score >= t.questions.length / 2) return t.results.good;
    return t.results.fail;
  };

  const resultData = getResult();

  return (
    <div className="relative pt-20 pb-12 px-4 min-h-screen bg-black text-white font-mono overflow-hidden">
      {/* Cyberpunk Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20" 
           style={{
             backgroundImage: 'linear-gradient(rgba(0, 255, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 0, 0.1) 1px, transparent 1px)',
             backgroundSize: '40px 40px'
           }}>
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        
        {/* Header Strip */}
        <div className="flex justify-between items-center border-b-2 border-green-500 pb-2 mb-8">
          <h1 className="text-xl md:text-2xl font-bold text-green-500 uppercase tracking-widest animate-pulse">
            {t.title}
          </h1>
          <div className="text-xs bg-green-900 px-2 py-1 text-green-300 rounded">
            SYS.STATUS: ONLINE
          </div>
        </div>

        {/* INTRO SCREEN */}
        {gameState === 'intro' && (
          <div className="bg-gray-900/80 border border-green-500/50 p-8 rounded-lg shadow-[0_0_20px_rgba(0,255,0,0.2)] text-center animate-fade-in">
            <div className="text-6xl mb-6">🕵️‍♂️</div>
            <h2 className="text-3xl text-white font-bold mb-4">{t.missionTitle}</h2>
            <div className="bg-black/50 p-4 border-l-4 border-gold mb-8 text-left">
              <p className="text-green-400 text-sm md:text-base leading-relaxed typing-effect">
                {t.missionDesc}
              </p>
            </div>
            <button 
              onClick={handleStart}
              className="bg-green-600 hover:bg-green-500 text-black font-bold py-3 px-8 rounded text-lg transition-all transform hover:scale-105 shadow-[0_0_15px_#00ff00]"
            >
              {t.startBtn}
            </button>
          </div>
        )}

        {/* GAME SCREEN */}
        {gameState === 'playing' && (
          <div className="animate-slide-up">
            {/* Progress Bar */}
            <div className="w-full bg-gray-800 h-2 rounded-full mb-6 overflow-hidden">
              <div 
                className="bg-green-500 h-full transition-all duration-500"
                style={{ width: `${((currentQuestion) / t.questions.length) * 100}%` }}
              ></div>
            </div>

            <div className="flex justify-between text-xs text-gray-400 mb-2">
              <span>{t.questionCount} {currentQuestion + 1} / {t.questions.length}</span>
              <span>SCORE: {score}</span>
            </div>

            {/* Question Card */}
            <div className="bg-gray-900 border-2 border-white/20 p-6 rounded-lg mb-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-2 opacity-10 text-9xl">⚠️</div>
              <h3 className="text-lg md:text-xl text-white font-bold relative z-10 leading-relaxed">
                {t.questions[currentQuestion].scenario}
              </h3>
            </div>

            {/* Options */}
            <div className="space-y-4">
              {t.questions[currentQuestion].options.map((option, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(option.isCorrect, option.feedback, idx)}
                  disabled={selectedOption !== null}
                  className={`w-full text-left p-4 rounded border-l-4 transition-all duration-300 relative overflow-hidden ${
                    selectedOption === null 
                      ? 'bg-white/5 border-gray-500 hover:bg-white/10 hover:border-gold hover:translate-x-2' 
                      : selectedOption === idx 
                        ? option.isCorrect 
                          ? 'bg-green-900/50 border-green-500 text-green-300' 
                          : 'bg-red-900/50 border-red-500 text-red-300'
                        : 'bg-black/50 border-gray-700 opacity-50'
                  }`}
                >
                  <span className="font-bold mr-3">{String.fromCharCode(65 + idx)}.</span>
                  {option.text}
                  
                  {/* Feedback Overlay */}
                  {selectedOption === idx && (
                    <div className={`absolute right-4 top-1/2 -translate-y-1/2 font-bold ${option.isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                      {option.isCorrect ? '✓ CORRECT' : '✕ WRONG'}
                    </div>
                  )}
                </button>
              ))}
            </div>

            {/* Bottom Feedback Message */}
            {feedback && (
              <div className={`mt-6 p-4 rounded text-center font-bold animate-bounce ${feedback.includes('錯誤') || feedback.includes('Erro') || feedback.includes('Wrong') ? 'bg-red-900/80 text-red-200' : 'bg-green-900/80 text-green-200'}`}>
                {feedback}
              </div>
            )}
          </div>
        )}

        {/* RESULT SCREEN */}
        {gameState === 'result' && (
          <div className="text-center animate-zoom-in">
            <div className="inline-block relative mb-8">
              <div className="absolute inset-0 bg-gold blur-[50px] opacity-20 animate-pulse"></div>
              <div className={`text-8xl ${score === t.questions.length ? 'animate-bounce' : ''}`}>
                {score === t.questions.length ? '🏆' : score >= 1 ? '🛡️' : '🚨'}
              </div>
            </div>
            
            <h2 className="text-4xl text-gold font-bold mb-2 uppercase tracking-widest">{resultData.title}</h2>
            <div className="text-green-500 font-mono mb-6">MISSION REPORT: {score}/{t.questions.length} CLEARED</div>
            
            <p className="text-gray-300 max-w-lg mx-auto mb-10 leading-relaxed bg-white/5 p-6 rounded-lg border border-white/10">
              {resultData.desc}
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <button 
                onClick={handleStart}
                className="bg-white/10 hover:bg-white/20 border border-white/30 text-white px-8 py-3 rounded uppercase tracking-wider transition-all"
              >
                {t.results.retry}
              </button>
              <Link 
                to="/"
                className="bg-gold hover:bg-yellow-400 text-black font-bold px-8 py-3 rounded uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,215,0,0.3)]"
              >
                {t.results.back}
              </Link>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};