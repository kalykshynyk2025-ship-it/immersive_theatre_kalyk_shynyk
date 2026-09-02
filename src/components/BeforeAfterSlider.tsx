import React, { useState, useRef, useCallback } from 'react';
import { IMAGES } from '../assets';
import { Sparkles, AlertTriangle, MoveHorizontal } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeLabel?: string;
  afterLabel?: string;
}

export default function BeforeAfterSlider({
  beforeLabel = 'ДО: Пустующий коридор («Слепая зона»)',
  afterLabel = 'ПОСЛЕ: Точка притяжения и шоу',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    handleMove(e.touches[0].clientX);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  return (
    <div className="relative rounded-2xl overflow-hidden border border-slate-700/70 shadow-2xl bg-slate-950 select-none group">
      <div
        ref={containerRef}
        className="relative w-full aspect-[16/10] sm:aspect-[16/9] cursor-ew-resize overflow-hidden"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* AFTER IMAGE (Transformed Corridor with Actor & Spectators) */}
        <img
          src={IMAGES.mallShow || '/assets/images/mall_show_clean_1788352880559.jpg'}
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/assets/images/mall_show_clean_1788352880559.jpg';
          }}
          alt="Преображенный коридор торгового центра с актером спектакля"
          referrerPolicy="no-referrer"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* AFTER BADGE */}
        <div className="absolute top-3 right-3 bg-cyan-950/90 text-cyan-300 border border-cyan-500/50 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur-md z-10 pointer-events-none">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          {afterLabel}
        </div>

        {/* BEFORE IMAGE (Clipped overlay: Empty Corridor) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={IMAGES.mallEmpty || '/assets/images/mall_empty_corridor_1788350189662.jpg'}
            onError={(e) => {
              (e.target as HTMLImageElement).src = '/assets/images/mall_empty_corridor_1788350189662.jpg';
            }}
            alt="Empty mall corridor dead zone"
            referrerPolicy="no-referrer"
            className="absolute inset-0 w-full h-full object-cover max-w-none"
            style={{ width: containerRef.current ? `${containerRef.current.clientWidth}px` : '100%' }}
          />

          {/* BEFORE BADGE */}
          <div className="absolute top-3 left-3 bg-rose-950/90 text-rose-300 border border-rose-500/50 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 shadow-lg backdrop-blur-md pointer-events-none whitespace-nowrap">
            <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
            {beforeLabel}
          </div>
        </div>

        {/* SLIDER DIVIDER LINE */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)] z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-cyan-500 text-slate-950 shadow-xl flex items-center justify-center border-2 border-white ring-4 ring-cyan-500/30">
            <MoveHorizontal className="w-5 h-5" />
          </div>
        </div>
      </div>

      {/* Helper caption */}
      <div className="bg-slate-900/90 px-4 py-2 text-center text-xs text-slate-400 border-t border-slate-800 flex items-center justify-center gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        Потяните ползунок вправо или влево для сравнения пространства до и после
      </div>
    </div>
  );
}
