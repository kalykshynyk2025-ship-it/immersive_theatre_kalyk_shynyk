import React from 'react';
import { 
  Sparkles, 
  ExternalLink, 
  Layers, 
  MonitorPlay, 
  ChevronLeft, 
  ChevronRight,
  Maximize2,
  Minimize2,
  FileText
} from 'lucide-react';
import { SlideData } from '../types';

interface NavigationProps {
  slides: SlideData[];
  currentSlide: number;
  onSelectSlide: (index: number) => void;
  viewMode: 'slides' | 'scroll';
  onToggleViewMode: (mode: 'slides' | 'scroll') => void;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export default function Navigation({
  slides,
  currentSlide,
  onSelectSlide,
  viewMode,
  onToggleViewMode,
  isFullscreen,
  onToggleFullscreen,
}: NavigationProps) {
  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 px-4 sm:px-6 py-3 transition-all">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Brand / Title & Origin */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 via-teal-400 to-purple-600 p-0.5 shadow-lg shadow-cyan-500/20 flex items-center justify-center">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400 font-black text-base">
              ᛏ
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2">
              <span className="font-extrabold text-sm sm:text-base text-white tracking-tight font-display">
                КВЕСТ-ТЕАТР ДЛЯ ТЦ
              </span>
              <span className="hidden sm:inline-block text-[10px] uppercase font-bold tracking-widest bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 px-2 py-0.5 rounded-full">
                4 слайда
              </span>
            </div>
            <p className="text-[11px] text-slate-400 flex items-center gap-1.5">
              <span>На базе проекта</span>
              <a
                href="https://tropa-trech-mirov21.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-semibold underline inline-flex items-center gap-0.5"
              >
                «Тропа трёх миров»
                <ExternalLink className="w-2.5 h-2.5 inline" />
              </a>
            </p>
          </div>
        </div>

        {/* Center: Slide Switcher Tabs (in Slides mode) */}
        {viewMode === 'slides' && (
          <nav className="hidden md:flex items-center bg-slate-900/90 p-1 rounded-xl border border-slate-800">
            {slides.map((s, idx) => {
              const isActive = currentSlide === idx;
              return (
                <button
                  key={s.id}
                  onClick={() => onSelectSlide(idx)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 shadow-md'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span className={`w-4 h-4 rounded-full text-[10px] flex items-center justify-center font-mono ${
                    isActive ? 'bg-slate-950 text-cyan-400 font-bold' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {idx + 1}
                  </span>
                  <span>{s.shortName}</span>
                </button>
              );
            })}
          </nav>
        )}

        {/* Right: Mode toggles & Navigation Controls */}
        <div className="flex items-center gap-2">
          {/* Mode Switcher */}
          <div className="flex items-center bg-slate-900 p-1 rounded-xl border border-slate-800 text-xs font-semibold">
            <button
              onClick={() => onToggleViewMode('slides')}
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                viewMode === 'slides'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Слайдовый режим презентации"
            >
              <MonitorPlay className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Слайды</span>
            </button>
            <button
              onClick={() => onToggleViewMode('scroll')}
              className={`px-2.5 py-1.5 rounded-lg flex items-center gap-1.5 transition-all ${
                viewMode === 'scroll'
                  ? 'bg-cyan-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
              title="Лендинг (все слайды единым свитком)"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Все слайды</span>
            </button>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={onToggleFullscreen}
            className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-slate-400 hover:text-slate-200 transition-colors"
            title={isFullscreen ? 'Выйти из полноэкранного режима' : 'Полноэкранный режим'}
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </header>
  );
}
