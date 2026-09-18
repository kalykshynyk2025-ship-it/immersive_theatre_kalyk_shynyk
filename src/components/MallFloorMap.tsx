import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AlertCircle, Sparkles, Flame, Compass, HelpCircle, X, ExternalLink, CheckCircle2 } from 'lucide-react';
import { MallZone } from '../types';

const SAMPLE_ZONES: MallZone[] = [
  {
    id: 'zone-1',
    name: 'Глухой тупик 3 этажа (Зона B)',
    deadZoneShortTitle: 'Глухой тупик 3 этажа',
    deadZoneMetric: 'Трафик 2%',
    type: 'dead_zone',
    level: 3,
    x: 72,
    y: 18,
    width: 22,
    height: 25,
    problem: 'Трафик 2% от общего потока ТЦ. Арендаторы уходят из-за низкой проходимости.',
    solutionStage: 'Станция 1: «Игры Севера и Сибири» — ведущий в традиционном этно-костюме встречает участников, выдает цифровой маршрутный лист квеста и проводит старинную игру «Тав-оюн» и хантыйские камешки «Кев юх».',
    gameTitle: 'Тав-оюн & Кев юх',
    region: 'Север и Сибирь',
    tenantPromo: 'Кофейня «Аромат Зёрен» на выходе из тупика: +45% конверсия в заказы благодаря промокоду за первую пройденную игру.',
    rulesHint: 'Испытание на командную координацию и ловкость пальцев. Участники передают этно-инвентарь в кругу и собирают узорные речные камешки.',
  },
  {
    id: 'zone-2',
    name: 'Боковой переход за эскалатором (2 этаж)',
    deadZoneShortTitle: 'Переход за эскалатором',
    deadZoneMetric: '85% идут мимо',
    type: 'dead_zone',
    level: 2,
    x: 12,
    y: 55,
    width: 24,
    height: 28,
    problem: 'Слепая зона: 85% посетителей уходят сразу на центральную аллею, минуя 6 бутиков.',
    solutionStage: 'Станция 2: «Поволжье и Урал: Базар лаптей» — колоритная интерактивная площадка с марийской игрой «Йыдал пазар», где игроки соревнуются в скорости реакции под живую традиционную музыку.',
    gameTitle: 'Йыдал пазар (Базар лаптей)',
    region: 'Поволжье и Урал',
    tenantPromo: 'Магазин аксессуаров «Северный Стиль»: купон 15% на покупки при сканировании символа станции.',
    rulesHint: 'Старинная праздничная игра: водящий в центре стережет круг, а участники должны молниеносно увернуться и разгадать народную присказку.',
  },
  {
    id: 'zone-3',
    name: 'Удалённое крыло разгрузки / -1 уровень',
    deadZoneShortTitle: 'Крыло разгрузки (-1 этаж)',
    deadZoneMetric: 'Тёмный коридор',
    type: 'dead_zone',
    level: 1,
    x: 65,
    y: 65,
    width: 28,
    height: 26,
    problem: 'Тёмный длинный коридор без естественного света, пустующие витрины.',
    solutionStage: 'Станция 3: «Кавказ и Алтай: Богатырские состязания» — алтайская игра на меткость «Камчы согоры» и ингушский этно-забег, торжественное награждение электронным «Сертификатом мастера игр народов России».',
    gameTitle: 'Камчы согоры & Забег нартов',
    region: 'Кавказ и Алтай',
    tenantPromo: 'Семейный ресторан и VR-парк: финальный сбор зрителей, семейный праздничный сет со скидкой 20%.',
    rulesHint: 'Финальное состязание богатырей на точность и ловкость. Победители получают цифровой жетон и сертификат на сайте проекта.',
  }
];

export default function MallFloorMap() {
  const [activeZone, setActiveZone] = useState<MallZone>(SAMPLE_ZONES[0]);
  const [viewMode, setViewMode] = useState<'problem' | 'solution'>('solution');
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 lg:p-6 backdrop-blur-md relative overflow-hidden shadow-2xl">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header controls */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
        <div>
          <div className="flex items-center gap-2">
            <Compass className="w-5 h-5 text-cyan-400 animate-spin-slow" />
            <h4 className="text-sm uppercase tracking-wider font-semibold text-cyan-300">
              {viewMode === 'problem' 
                ? 'План ТЦ: Слепые и неликвидные зоны (дефицит трафика)' 
                : 'Схематичный план ТЦ: Маршрут квеста «Игры народов России»'}
            </h4>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            {viewMode === 'problem'
              ? 'Выберите слепую зону ТЦ, чтобы увидеть проблему проходимости и как квест её оживляет'
              : 'Нажимайте на станции ниже или на карте, чтобы изучить механику традиционных игр'}
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => setViewMode('problem')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'problem'
                ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <AlertCircle className="w-3.5 h-3.5 text-rose-400" />
            Слепые зоны ТЦ
          </button>
          <button
            onClick={() => setViewMode('solution')}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'solution'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            Станции квеста
          </button>
        </div>
      </div>

      {/* Quick Station / Zone Clickable Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 mb-4">
        {SAMPLE_ZONES.map((zone, idx) => {
          const isSelected = activeZone.id === zone.id;
          const isProblem = viewMode === 'problem';

          return (
            <button
              key={zone.id}
              onClick={() => setActiveZone(zone)}
              className={`p-2.5 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                isProblem
                  ? isSelected
                    ? 'bg-rose-950/70 border-rose-500/80 shadow-md ring-1 ring-rose-400/30'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
                  : isSelected
                    ? 'bg-cyan-950/70 border-cyan-400/80 shadow-md ring-1 ring-cyan-400/30'
                    : 'bg-slate-950/60 border-slate-800 hover:border-slate-700 text-slate-400'
              }`}
            >
              <div className="flex items-center gap-2 min-w-0">
                <span className={`w-5 h-5 rounded-md text-[11px] font-bold flex items-center justify-center font-mono shrink-0 ${
                  isProblem
                    ? isSelected ? 'bg-rose-500 text-white' : 'bg-slate-800 text-rose-400'
                    : isSelected ? 'bg-cyan-400 text-slate-950' : 'bg-slate-800 text-cyan-400'
                }`}>
                  {idx + 1}
                </span>
                <div className="min-w-0">
                  <div className={`text-xs font-bold truncate ${
                    isSelected ? 'text-white' : (isProblem ? 'text-rose-200/90' : 'text-slate-300')
                  }`}>
                    {isProblem ? (zone.deadZoneShortTitle || zone.name) : zone.region}
                  </div>
                  <div className="text-[10px] text-slate-400 truncate">
                    {isProblem ? `⚠️ ${zone.deadZoneMetric || 'Слепая зона'}` : zone.gameTitle}
                  </div>
                </div>
              </div>
              <span className={`text-[10px] px-1.5 py-0.5 rounded border shrink-0 ${
                isProblem
                  ? 'text-rose-300 bg-rose-950/80 border-rose-800'
                  : 'text-cyan-400 bg-cyan-950/80 border-cyan-800'
              }`}>
                {zone.level === 1 ? '-1 этаж' : `${zone.level} этаж`}
              </span>
            </button>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-center">
        {/* SVG Mall Blueprint */}
        <div className="lg:col-span-7 bg-slate-950/90 rounded-xl p-4 border border-slate-800/80 relative min-h-[300px] flex items-center justify-center">
          <svg viewBox="0 0 100 100" className="w-full h-auto max-h-[340px] drop-shadow-md">
            <defs>
              <pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </pattern>
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
            {SAMPLE_ZONES.map((zone, idx) => {
              const isSelected = activeZone.id === zone.id;
              const isProblem = viewMode === 'problem';

              return (
                <g
                  key={zone.id}
                  onClick={() => setActiveZone(zone)}
                  className="cursor-pointer transition-all duration-200 group"
                >
                  <rect
                    x={zone.x}
                    y={zone.y}
                    width={zone.width}
                    height={zone.height}
                    rx="2"
                    fill={
                      isProblem
                        ? isSelected ? '#ef4444' : '#991b1b'
                        : isSelected ? '#06b6d4' : '#0e7490'
                    }
                    fillOpacity={isSelected ? 0.85 : 0.45}
                    stroke={isSelected ? '#ffffff' : (isProblem ? '#f87171' : '#38bdf8')}
                    strokeWidth={isSelected ? 1.5 : 0.8}
                    className="transition-all duration-300"
                  />
                  <text
                    x={zone.x + zone.width / 2}
                    y={zone.y + zone.height / 2 - 1}
                    fill="#ffffff"
                    fontSize="2.3"
                    fontWeight="800"
                    textAnchor="middle"
                  >
                    {isProblem ? `Зона ${idx + 1}` : zone.region}
                  </text>
                  <text
                    x={zone.x + zone.width / 2}
                    y={zone.y + zone.height / 2 + 3.6}
                    fill={isSelected ? '#fef08a' : (isProblem ? '#fca5a5' : '#cbd5e1')}
                    fontSize="1.8"
                    fontWeight="600"
                    textAnchor="middle"
                  >
                    {isProblem ? `⚠️ ${zone.deadZoneMetric || 'Слепая зона'}` : `🎮 ${zone.gameTitle.split(' ')[0]}`}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Quick legend overlay */}
          <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] text-slate-400 bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-800">
            <span className="flex items-center gap-1 text-rose-300">
              <span className="w-2 h-2 rounded-full bg-rose-500 inline-block" /> Слепые зоны ТЦ (дефицит трафика)
            </span>
            <span className="flex items-center gap-1 text-cyan-300">
              <span className="w-2 h-2 rounded-full bg-cyan-400 inline-block" /> Станции квеста «Игры народов России»
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
              className="bg-slate-950/80 border border-slate-800 rounded-xl p-4 space-y-3 shadow-xl"
            >
              <div className="flex items-center justify-between border-b border-slate-800/80 pb-2">
                <div>
                  <div className="flex items-center gap-2">
                    {viewMode === 'problem' ? (
                      <>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-rose-500/20 text-rose-300 border border-rose-500/30">
                          {activeZone.level === 1 ? '-1 этаж' : `Этаж ${activeZone.level}`} • Слепая зона ТЦ
                        </span>
                        <span className="text-[10px] text-rose-400 font-semibold bg-rose-950/60 px-2 py-0.5 rounded border border-rose-500/30">
                          {activeZone.deadZoneMetric || 'Низкий трафик'}
                        </span>
                      </>
                    ) : (
                      <>
                        <span className="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/30">
                          Станция {SAMPLE_ZONES.findIndex(z => z.id === activeZone.id) + 1} • {activeZone.region}
                        </span>
                        <span className="text-[10px] text-amber-300 font-semibold bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30">
                          {activeZone.gameTitle}
                        </span>
                      </>
                    )}
                  </div>
                  <h5 className="font-bold text-white text-sm sm:text-base mt-1.5">
                    {viewMode === 'problem'
                      ? activeZone.name
                      : `Станция «${activeZone.gameTitle}»`}
                  </h5>
                  {viewMode === 'solution' && (
                    <p className="text-[11px] text-slate-400 mt-0.5">
                      Локация в ТЦ: {activeZone.name}
                    </p>
                  )}
                </div>
              </div>

              {/* Problem section */}
              <div className="bg-rose-950/30 border border-rose-900/40 rounded-lg p-3">
                <div className="flex items-center gap-1.5 text-rose-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  Боль торгового центра (ДО квеста)
                </div>
                <p className="text-xs text-rose-200/90 leading-relaxed">
                  {activeZone.problem}
                </p>
              </div>

              {/* Solution / Quest stage */}
              <div className="bg-cyan-950/30 border border-cyan-900/40 rounded-lg p-3">
                <div className="flex items-center gap-1.5 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  {viewMode === 'problem' 
                    ? `Как станция «${activeZone.region}» оживляет эту зону` 
                    : 'Сценарий квеста («Игры народов России»)'}
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

              {/* Explicit Interactive Details Button */}
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full py-2.5 px-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/50 text-cyan-300 rounded-xl text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-98"
              >
                <HelpCircle className="w-4 h-4 text-cyan-400" />
                <span>
                  {viewMode === 'problem'
                    ? `Подробнее: как станция «${activeZone.region}» оживляет зону`
                    : `Подробности станции «${activeZone.region}» и правила игры`}
                </span>
              </button>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Interactive Detail Modal for clicked station */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4 animate-fade-in">
          <div className="bg-slate-900 border border-cyan-500/50 rounded-3xl max-w-lg w-full p-6 shadow-2xl relative space-y-4">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-cyan-950 border border-cyan-400 text-cyan-300">
                {activeZone.region}
              </span>
              <span className="text-xs text-slate-400">
                Этаж {activeZone.level} ТЦ
              </span>
            </div>

            <h3 className="text-xl font-black text-white font-display">
              {activeZone.gameTitle}
            </h3>

            <div className="space-y-3 text-xs text-slate-300">
              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-cyan-400 uppercase tracking-wider text-[10px]">
                  Суть и правила игры
                </div>
                <p className="leading-relaxed">
                  {activeZone.rulesHint}
                </p>
              </div>

              <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1">
                <div className="font-bold text-amber-400 uppercase tracking-wider text-[10px]">
                  Интеграция с арендатором ТЦ
                </div>
                <p className="leading-relaxed">
                  {activeZone.tenantPromo}
                </p>
              </div>

              <div className="bg-emerald-950/30 p-3.5 rounded-xl border border-emerald-500/40 text-emerald-200 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <p>
                  Зрители получают баллы на сайте квеста <strong className="text-white">igry-narodov-russia.vercel.app</strong> и обменивают их на подарки в магазинах ТЦ.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://igry-narodov-russia.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-2.5 px-4 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Открыть рабочий сайт квеста</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                onClick={() => setIsModalOpen(false)}
                className="py-2.5 px-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-xs cursor-pointer"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
