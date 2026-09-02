import React from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../assets';
import MallFloorMap from './MallFloorMap';
import { Sparkles, Compass, MapPin, Zap, ArrowRight, ExternalLink, ShieldCheck } from 'lucide-react';

interface Slide1HeroProps {
  onNextSlide?: () => void;
}

export default function Slide1Hero({ onNextSlide }: Slide1HeroProps) {
  return (
    <div className="space-y-6 lg:space-y-8 animate-fade-in">
      {/* Top Banner / Hero Presentation Header */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
        {/* Mystic Background Image with Cinematic Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={IMAGES.heroMystic}
            alt="Иммерсивный спектакль в стиле Тропа трех миров"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-40 mix-blend-screen scale-105 transform hover:scale-100 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/60" />
        </div>

        {/* Content over hero image */}
        <div className="relative z-10 p-6 sm:p-8 lg:p-12 max-w-4xl space-y-5">
          {/* Eyebrow badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs sm:text-sm font-semibold shadow-lg backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-cyan-400 animate-pulse" />
            <span>Презентация для руководства и маркетинга ТЦ</span>
          </div>

          {/* Main Title & Subtitle */}
          <div className="space-y-2">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white font-display leading-[1.15]">
              Иммерсивный театр <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-amber-300">
                нового формата
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 font-medium">
              Интерактивные квест-спектакли для вашего торгового центра
            </p>
          </div>

          {/* Key Callout Message (Ключевое сообщение / Вынос) */}
          <div className="relative p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-cyan-950/70 via-slate-900/90 to-purple-950/60 border-l-4 border-cyan-400 border-t border-r border-b border-slate-800 shadow-xl backdrop-blur-md">
            <div className="text-xs uppercase tracking-widest text-cyan-400 font-bold mb-1 flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 fill-current" />
              Ключевая цель проекта
            </div>
            <p className="text-base sm:text-lg font-bold text-white leading-snug">
              Превращаем «слепые зоны» в точки притяжения и дополнительного дохода.
            </p>
          </div>

          {/* Reference Project & Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {onNextSlide && (
              <button
                onClick={onNextSlide}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 flex items-center gap-2 transition-all transform hover:-translate-y-0.5"
              >
                <span>Узнать, как это работает</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            )}

            <a
              href="https://tropa-trech-mirov21.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-3 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors"
            >
              <span>Пример постановки: «Тропа трёх миров»</span>
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
            </a>
          </div>
        </div>
      </div>

      {/* Visual Component: Schematic Mall Plan with Highlighted Problem Zones */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-cyan-400" />
            <h3 className="text-lg font-bold text-white font-display">
              Схематичный план ТЦ с проблемными зонами
            </h3>
          </div>
          <span className="text-xs text-slate-400 hidden sm:inline-block">
            Кликните по зонам на карте для интерактивного анализа
          </span>
        </div>

        <MallFloorMap />
      </div>
    </div>
  );
}
