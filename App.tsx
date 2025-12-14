import React, { useState, Suspense } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { Emergency } from './pages/Emergency';
import { Consular } from './pages/Consular';
import { Rights } from './pages/Rights';
import { Schedule } from './pages/Schedule';
import { WeeklyChallenge } from './pages/WeeklyChallenge';
import { SafetyQuiz } from './pages/SafetyQuiz';
import { TripPrep } from './pages/TripPrep';
import { RiskMap } from './pages/RiskMap';
import { Podcast } from './pages/Podcast';
import { VideoArchive } from './pages/VideoArchive';
import { Difficulty } from './pages/Difficulty';
import { Download } from './pages/Download';
import { Language } from './types';

const LoadingFallback = () => (
  <div className="h-screen w-full flex items-center justify-center bg-deep-blue text-white">
    <div className="w-8 h-8 border-2 border-gold border-t-transparent rounded-full animate-spin"></div>
  </div>
);

export default function App() {
  // Default to zh-TW
  const [lang, setLang] = useState<Language>(Language.ZH_TW);

  return (
    <Router>
      <Layout lang={lang} onLangChange={setLang}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/emergency" element={<Emergency lang={lang} />} />
            <Route path="/consular" element={<Consular lang={lang} />} />
            <Route path="/rights" element={<Rights lang={lang} />} />
            <Route path="/schedule" element={<Schedule lang={lang} />} />
            <Route path="/weekly-challenge" element={<WeeklyChallenge lang={lang} />} />
            <Route path="/safety-quiz" element={<SafetyQuiz lang={lang} />} />
            <Route path="/trip" element={<TripPrep lang={lang} />} />
            <Route path="/map" element={<RiskMap lang={lang} />} />
            <Route path="/podcast" element={<Podcast lang={lang} />} />
            <Route path="/video" element={<VideoArchive lang={lang} />} />
            <Route path="/difficulty" element={<Difficulty lang={lang} />} />
            <Route path="/download" element={<Download lang={lang} />} />
            <Route path="*" element={<Home lang={lang} />} />
          </Routes>
        </Suspense>
      </Layout>
    </Router>
  );
}