import React, { useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Play, 
  Pause, 
  RotateCcw,
  Sparkles,
  Keyboard
} from 'lucide-react';
import { SlideData } from '../types';

interface PresentationControlsProps {
  slides: SlideData[];
  currentSlide: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
  autoPlay: boolean;
  onToggleAutoPlay: () => void;
}

export default function PresentationControls({
  slides,
  currentSlide,
  onPrev,
  onNext,
  onSelectSlide,
  autoPlay,
  onToggleAutoPlay,
}: PresentationControlsProps) {
  // Keyboard navigation support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['input', 'textarea'].includes((e.target as HTMLElement)?.tagName?.toLowerCase())) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'Space' || e.key === 'PageDown') {
        e.preventDefault();
        onNext();
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        onPrev();
      } else if (e.key >= '1' && e.key <= '4') {
        onSelectSlide(parseInt(e.key, 10) - 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onNext, onPrev, onSelectSlide]);

  return (
    <div className="fixed bottom-5 left-1/2 -translate-x-1/2 z-40">
      <div className="bg-slate-950/90 backdrop-blur-xl border border-slate-700/80 px-4 py-2.5 rounded-full shadow-[0_10px_35px_rgba(0,0,0,0.8)] flex items-center gap-3 ring-1 ring-cyan-500/20">
        {/* Prev Slide Button */}
        <button
          onClick={onPrev}
          disabled={currentSlide === 0}
          className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors cursor-pointer"
          title="Предыдущий слайд (Стрелка влево)"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center gap-2 px-2">
          {slides.map((s, idx) => {
            const isActive = currentSlide === idx;
            return (
              <button
                key={s.id}
                onClick={() => onSelectSlide(idx)}
                className={`transition-all duration-300 rounded-full cursor-pointer flex items-center justify-center ${
                  isActive
                    ? 'w-8 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-slate-950 text-xs font-black'
                    : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
                }`}
                title={`Слайд ${idx + 1}: ${s.shortName}`}
              >
                {isActive ? idx + 1 : ''}
              </button>
            );
          })}
        </div>

        {/* Next Slide Button */}
        <button
          onClick={onNext}
          disabled={currentSlide === slides.length - 1}
          className="p-2 rounded-full bg-slate-900 hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed text-white transition-colors cursor-pointer"
          title="Следующий слайд (Стрелка вправо или Пробел)"
        >
          <ChevronRight className="w-4 h-4" />
        </button>

        <div className="w-[1px] h-5 bg-slate-800" />

        {/* Auto-play toggle */}
        <button
          onClick={onToggleAutoPlay}
          className={`p-2 rounded-full transition-colors cursor-pointer ${
            autoPlay
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
              : 'bg-slate-900 hover:bg-slate-800 text-slate-400'
          }`}
          title={autoPlay ? 'Остановить авто-прокрутку' : 'Включить авто-прокрутку слайдов'}
        >
          {autoPlay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
        </button>

        {/* Keyboard hint */}
        <div className="hidden lg:flex items-center gap-1 text-[10px] text-slate-500 pl-1">
          <Keyboard className="w-3 h-3 text-slate-600" />
          <span>Стрелки ← → / 1-4</span>
        </div>
      </div>
    </div>
  );
}
