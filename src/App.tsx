import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Navigation from './components/Navigation';
import Slide1Hero from './components/Slide1Hero';
import Slide2ProblemSolution from './components/Slide2ProblemSolution';
import Slide3TechWifi from './components/Slide3TechWifi';
import Slide4BenefitsCTA from './components/Slide4BenefitsCTA';
import PresentationControls from './components/PresentationControls';
import { SlideData } from './types';
import { Sparkles, ExternalLink, Compass, Phone } from 'lucide-react';

const SLIDES: SlideData[] = [
  {
    id: 1,
    slug: 'intro',
    shortName: 'Титульный лист',
    title: 'Иммерсивный театр нового формата',
    subtitle: 'Интерактивные квест-спектакли для вашего ТЦ',
  },
  {
    id: 2,
    slug: 'problem-solution',
    shortName: 'Проблема и Решение',
    title: 'Оживите каждый уголок вашего ТЦ',
    subtitle: 'Превращение слепых зон в ключевые сюжетные локации',
  },
  {
    id: 3,
    slug: 'technology',
    shortName: 'Технология и Wi-Fi',
    title: 'Полное погружение через ваш Wi-Fi',
    subtitle: 'Интерактив в PWA и монетизация через рекламу арендаторов',
  },
  {
    id: 4,
    slug: 'benefits-cta',
    shortName: 'Выгода и Контакты',
    title: 'Почему это выгодно?',
    subtitle: 'Финансовый рост, трафик и запуск проекта для вашего ТЦ',
  },
];

export default function App() {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [viewMode, setViewMode] = useState<'slides' | 'scroll'>('slides');
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [autoPlay, setAutoPlay] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Auto-play timer
  useEffect(() => {
    if (!autoPlay || viewMode !== 'slides') return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % SLIDES.length);
    }, 8000);
    return () => clearInterval(interval);
  }, [autoPlay, viewMode]);

  const handleNext = () => {
    if (currentSlide < SLIDES.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleToggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen().catch(() => {});
      setIsFullscreen(false);
    }
  };

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-slate-950 text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-cyan-500 selection:text-slate-950"
    >
      {/* Dynamic Aurora Ambient Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-cyan-500/10 blur-[140px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-purple-600/10 blur-[150px] pointer-events-none z-0" />
      <div className="fixed top-[40%] left-[60%] w-[35vw] h-[35vw] rounded-full bg-emerald-500/5 blur-[120px] pointer-events-none z-0" />

      {/* Slide Progress Bar (in Slides Mode) */}
      {viewMode === 'slides' && (
        <div className="fixed top-0 left-0 right-0 h-1 bg-slate-900 z-50">
          <motion.div
            className="h-full bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-400"
            initial={false}
            animate={{ width: `${((currentSlide + 1) / SLIDES.length) * 100}%` }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        </div>
      )}

      {/* Top Navigation Header */}
      <Navigation
        slides={SLIDES}
        currentSlide={currentSlide}
        onSelectSlide={(idx) => setCurrentSlide(idx)}
        viewMode={viewMode}
        onToggleViewMode={(mode) => setViewMode(mode)}
        isFullscreen={isFullscreen}
        onToggleFullscreen={handleToggleFullscreen}
      />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 relative z-10">
        {viewMode === 'slides' ? (
          <div className="relative min-h-[600px] pb-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              >
                {currentSlide === 0 && <Slide1Hero onNextSlide={handleNext} />}
                {currentSlide === 1 && <Slide2ProblemSolution onNextSlide={handleNext} />}
                {currentSlide === 2 && <Slide3TechWifi onNextSlide={handleNext} />}
                {currentSlide === 3 && <Slide4BenefitsCTA />}
              </motion.div>
            </AnimatePresence>

            {/* Bottom Presentation Remote Controls */}
            <PresentationControls
              slides={SLIDES}
              currentSlide={currentSlide}
              onPrev={handlePrev}
              onNext={handleNext}
              onSelectSlide={(idx) => setCurrentSlide(idx)}
              autoPlay={autoPlay}
              onToggleAutoPlay={() => setAutoPlay(!autoPlay)}
            />
          </div>
        ) : (
          /* Scrollable / All-Slides Mode */
          <div className="space-y-16 pb-16">
            <section id="slide-1" className="scroll-mt-20">
              <Slide1Hero />
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

            <section id="slide-2" className="scroll-mt-20">
              <Slide2ProblemSolution />
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

            <section id="slide-3" className="scroll-mt-20">
              <Slide3TechWifi />
            </section>

            <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

            <section id="slide-4" className="scroll-mt-20">
              <Slide4BenefitsCTA />
            </section>
          </div>
        )}
      </main>

      {/* Global Footer */}
      <footer className="bg-slate-950/90 border-t border-slate-900 py-6 px-4 text-center text-xs text-slate-500 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            <span>Интерактивная презентация иммерсивных спектаклей для Торговых Центров</span>
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <a
              href="tel:+79775927125"
              className="text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors font-mono"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+7 (977) 592-71-25</span>
            </a>
            <a
              href="mailto:immersive.theatr@yandex.ru"
              className="text-slate-400 hover:text-cyan-300 flex items-center gap-1.5 transition-colors"
            >
              <span>immersive.theatr@yandex.ru</span>
            </a>
            <a
              href="https://tropa-trech-mirov21.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 underline flex items-center gap-1 font-semibold"
            >
              <span>Тропа трёх миров</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <span>© 2026 Все права защищены</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
