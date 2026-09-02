import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Sparkles, Navigation, Flame, Eye, MapPin, Compass } from 'lucide-react';
import { MallZone } from '../types';

const SAMPLE_ZONES: MallZone[] = [
  {
    id: 'zone-1',
    name: 'Глухой тупик 3 этажа (Зона B)',
    type: 'dead_zone',
    level: 3,
    x: 72,
    y: 18,
    width: 22,
    height: 25,
    problem: 'Трафик 2% от общего потока ТЦ. Арендаторы уходят из-за низкой проходимости.',
    solutionStage: 'Станция 1: "Врата Верхнего мира" — Носитель культуры и актёр в образе Шамана встречают группу и открывают квест.',
    mythicWorld: 'Верхний мир (Үөһээ Дойду)',
    tenantPromo: 'Кофейня «Аромат Зёрен» на выходе из тупика: +45% конверсия в заказы.',
  },
  {
    id: 'zone-2',
    name: 'Боковой переход за эскалатором (2 этаж)',
    type: 'dead_zone',
    level: 2,
    x: 12,
    y: 55,
    width: 24,
    height: 28,
    problem: 'Слепая зона: 85% посетителей уходят сразу на центральную аллею, минуя 6 бутиков.',
    solutionStage: 'Станция 2: "Лабиринт Духов" — интерактивная сцена с актёром в маске и поиск древнего тотема.',
    mythicWorld: 'Срединный мир (Орто Дойду)',
    tenantPromo: 'Магазин аксессуаров «Северный Стиль»: купон 15% при сканировании символа.',
  },
  {
    id: 'zone-3',
    name: 'Удалённое крыло разгрузки / -1 уровень',
    type: 'dead_zone',
    level: 1,
    x: 65,
    y: 65,
    width: 28,
    height: 26,
    problem: 'Тёмный длинный коридор без естественного света, пустующие витрины.',
    solutionStage: 'Станция 3: "Огни Нижнего мира" — мистический свето-звуковой перформанс и кульминация сюжета.',
    mythicWorld: 'Нижний мир (Аллараа Дойду)',
    tenantPromo: 'Семейный ресторан и VR-парк: финальный сбор зрителей и праздничный промо-сет.',
  }
];

export default function MallFloorMap() {
  const [activeZone, setActiveZone] = useState<MallZone>(SAMPLE_ZONES[0]);
  const [viewMode, setViewMode] = useState<'problem' | 'solution'>('solution');

  return (
    <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 lg:p-6 backdrop-blur-md relative overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-cyan-400 animate-spin-slow" />
            <h4 className="text-sm uppercase tracking-wider font-semibold text-cyan-300">
              Схематичный план ТЦ: Трансформация маршрутов
            </h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Нажмите на зону, чтобы увидеть превращение «мертвой зоны» в эпицентр спектакля
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setViewMode('problem')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              viewMode === 'problem'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            Слепые зоны ТЦ
          </button>
          <button
            onClick={() => setViewMode('solution')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 ${
              viewMode === 'solution'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Точки притяжения квеста
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* SVG Mall Blueprint */}
        <div className="lg:col-span-7 bg-slate-950/90 rounded-xl p-4 border border-slate-800/80 relative min-h-[300px] flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-auto max-h-[340px] drop-shadow-md">
            <defs>
              <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </pattern>
              <linearGradient id="corridorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#a855f7" stopOpacity="0.15" />
              </linearGradient>
            </defs>

            {/* Grid background */}
            <rect width="100" height="100" fill="url(#grid)" />

            {/* Main Mall Outline */}
            <rect x="5" y="5" width="90" height="90" rx="4" fill="#0f172a" stroke="#334155" strokeWidth="1" />

            {/* Central Atrium */}
            <rect x="38" y="32" width="24" height="36" rx="3" fill="#1e293b" stroke="#475569" strokeWidth="0.8" />
            <text x="50" y="48" fill="#94a3b8" fontSize="2.8" textAnchor="middle" fontWeight="600">Центральный атриум</text>
            <text x="50" y="53" fill="#64748b" fontSize="2.2" textAnchor="middle">Фонтан / Эскалаторы</text>

            {/* Main Corridors */}
            <rect x="10" y="44" width="80" height="12" fill="#1e293b" opacity="0.6" />
            <rect x="44" y="10" width="12" height="80" fill="#1e293b" opacity="0.6" />

            {/* Entrance */}
            <rect x="42" y="5" width="16" height="3" fill="#06b6d4" />
            <text x="50" y="3.5" fill="#38bdf8" fontSize="2.2" textAnchor="middle">ГЛАВНЫЙ ВХОД</text>

            {/* Quest Guided Route Polyline */}
            {viewMode === 'solution' && (
              <g>
                <path
                  d="M 50 8 L 50 25 L 83 25 L 83 35 L 50 48 L 24 55 L 24 75 L 75 75"
                  fill="none"
                  stroke="#06b6d4"
                  strokeWidth="1.2"
                  strokeDasharray="2,2"
                  className="animate-pulse"
                />
                <circle cx="50" cy="8" r="1.8" fill="#38bdf8" />
                <circle cx="83" cy="30" r="1.8" fill="#f59e0b" />
                <circle cx="24" cy="65" r="1.8" fill="#a855f7" />
                <circle cx="75" cy="75" r="2.2" fill="#10b981" />
              </g>
            )}

            {/* Interactive Zones */}
            {SAMPLE_ZONES.map((zone) => {
              const isSelected = activeZone.id === zone.id;
              const isProblem = viewMode === 'problem';

              return (
                <g
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  className="cursor-pointer transition-all"
                >
                  <rect
                    x={zone.x}
                    y={zone.y}
                    width={zone.width}
                    height={zone.height}
                    rx="3"
                    fill={
                      isSelected
                        ? isProblem ? 'rgba(239, 68, 68, 0.4)' : 'rgba(6, 182, 212, 0.4)'
                        : isProblem ? 'rgba(239, 68, 68, 0.15)' : 'rgba(168, 85, 247, 0.2)'
                    }
                    stroke={
                      isSelected
                        ? isProblem ? '#ef4444' : '#06b6d4'
                        : isProblem ? '#f87171' : '#a855f7'
                    }
                    strokeWidth={isSelected ? 1.5 : 0.8}
                  />

                  {/* Pulsing marker */}
                  <circle
                    cx={zone.x + zone.width / 2}
                    cy={zone.y + zone.height / 2 - 2}
                    r={isSelected ? 3.5 : 2.5}
                    fill={isProblem ? '#ef4444' : '#06b6d4'}
                    className={isSelected ? 'animate-ping opacity-75' : ''}
                  />
                  <circle
                    cx={zone.x + zone.width / 2}
                    cy={zone.y + zone.height / 2 - 2}
                    r="2"
                    fill="#ffffff"
                  />

                  <text
                    x={zone.x + zone.width / 2}
                    y={zone.y + zone.height / 2 + 5}
                    fill="#ffffff"
                    fontSize="2.4"
                    fontWeight="700"
                    textAnchor="middle"
                  >
                    {isProblem ? '⚠️ Слепая зона' : `✨ ${zone.mythicWorld.split(' ')[0]}`}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick legend overlay */}
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
            <span className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" /> Слепые зоны (0 трафика)
            </span>
            <span className="flex items-center gap-1 text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" /> Маршрут квест-спектакля
            </span>
          </div>
        </div>

        {/* Selected Zone Deep Dive Info */}
        <div className="lg:col-span-5">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeZone.id + viewMode}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="bg-slate-950/70 border border-slate-800 rounded-xl p-4.5 space-y-3.5"
            >
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
                <div>
                  <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                    Локация ТЦ • Этаж {activeZone.level}
                  </span>
                  <h5 className="font-semibold text-white text-base mt-1">
                    {activeZone.name}
                  </h5>
                </div>
              </div>

              {/* Problem section */}
              <div className="bg-rose-950/30 border border-rose-900/40 rounded-lg p-3">
                <div className="flex items-center gap-1.5 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Боль торгового центра
                </div>
                <p className="text-xs text-rose-200/90 leading-relaxed">
                  {activeZone.problem}
                </p>
              </div>

              {/* Solution / Quest stage */}
              <div className="bg-cyan-950/30 border border-cyan-900/40 rounded-lg p-3">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Сценарий квеста («{activeZone.mythicWorld}»)
                </div>
                <p className="text-xs text-cyan-100 leading-relaxed">
                  {activeZone.solutionStage}
                </p>
              </div>

              {/* Tenant Value */}
              <div className="bg-amber-950/30 border border-amber-900/40 rounded-lg p-3">
                <div className="flex items-center gap-1.5 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Flame className="w-3.5 h-3.5" />
                  Выгода соседних арендаторов
                </div>
                <p className="text-xs text-amber-200/90 leading-relaxed">
                  {activeZone.tenantPromo}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
