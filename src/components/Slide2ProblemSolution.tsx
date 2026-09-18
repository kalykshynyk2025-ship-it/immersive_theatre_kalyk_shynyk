import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import BeforeAfterSlider from './BeforeAfterSlider';
import { 
  AlertOctagon, 
  Sparkles, 
  TrendingUp, 
  Users, 
  Store, 
  Route, 
  CheckCircle, 
  XCircle,
  Clock,
  ArrowRight,
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Info
} from 'lucide-react';

interface Slide2ProblemSolutionProps {
  onNextSlide?: () => void;
  onPrevSlide?: () => void;
}

export default function Slide2ProblemSolution({ onNextSlide, onPrevSlide }: Slide2ProblemSolutionProps) {
  const [activeStepTab, setActiveStepTab] = useState<number>(1);
  const [expandedCard, setExpandedCard] = useState<'problem' | 'solution' | null>(null);

  const routeDetails = [
    {
      id: 1,
      name: 'Точка 1: Главный вход и афиша',
      subtitle: 'Старт, подключение к Wi-Fi и получение маршрута',
      timing: '10–15 минут',
      visitorBehavior: 'Посетители подключаются к бесплатному Wi-Fi ТЦ, видят витрину арендаторов со скидками и открывают веб-квест «Игры народов России». Первые 15 минут формируют позитивное ожидание и вовлекают всю семью.',
      tenantImpact: 'Кофейни и островки у входа получают моментальный импульсный спрос на напитки и снеки.',
    },
    {
      id: 2,
      name: 'Точки 2–4: Слепые зоны ТЦ (глухие тупики)',
      subtitle: 'Эпицентр традиционных игр и состязаний',
      timing: '45–60 минут',
      visitorBehavior: 'Семьи целенаправленно поднимаются на удаленные этажи и заходят в тупиковые коридоры. Здесь работают ведущие народных игр («Тав-оюн», «Базар лаптей», «Камчы согоры»). Зрители задерживаются у витрин арендаторов.',
      tenantImpact: 'Арендаторы в слепых зонах видят рост пешеходного трафика с 2% до 70%. Раздача промокодов прямо во время игры стимулирует немедленный визит в магазины.',
    },
    {
      id: 3,
      name: 'Финал: Фудкорт, рестораны и покупки',
      subtitle: 'Кульминация, выдача призов и шоппинг',
      timing: '40–60 минут',
      visitorBehavior: 'Финальное награждение электронным сертификатом мастера игр. Вся семья направляется на фудкорт или в ресторан, чтобы отметить победу и использовать накопленные баллы и промокоды.',
      tenantImpact: 'Средний чек на питание увеличивается на 30–45%, а общее время пребывания в ТЦ превышает 2,5 часа.',
    },
  ];

  return (
    <div className="space-y-6 lg:space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Слайд 2: Проблема и Решение</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Оживите каждый уголок вашего ТЦ
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
          Трансформация неликвидных квадратных метров в кульминационные сцены интерактивного квеста «Игры народов России» с гарантированным пешеходным трафиком.
        </p>
      </div>

      {/* Main Grid: Problem vs Solution & Interactive Visual Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Visual Before/After Interactive Comparison */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-900/60 p-2 rounded-3xl border border-slate-800">
            <BeforeAfterSlider
              beforeLabel="ДО: Пустующий коридор ТЦ"
              afterLabel="ПОСЛЕ: Точка притяжения (квест-спектакль)"
            />
          </div>

          {/* Quick Result Highlight */}
          <div className="bg-gradient-to-r from-cyan-950/40 via-slate-900 to-emerald-950/30 p-4 rounded-2xl border border-cyan-500/30 flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-bold text-sm text-white">
                Гарантированный результат для локаций
              </h4>
              <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                Посетители <strong className="text-cyan-300">целенаправленно идут</strong> в эти зоны, внимательно изучают пространство, запоминают арендаторов и совершают спонтанные покупки.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Comparative Problem & Solution Breakdown */}
        <div className="lg:col-span-6 space-y-4">
          {/* PROBLEM CARD (Clickable for details) */}
          <div 
            onClick={() => setExpandedCard(expandedCard === 'problem' ? null : 'problem')}
            className="bg-rose-950/20 hover:bg-rose-950/30 border border-rose-800/40 hover:border-rose-600/60 rounded-2xl p-5 relative overflow-hidden backdrop-blur-sm cursor-pointer transition-all duration-200"
          >
            <div className="flex items-center justify-between text-rose-400 text-xs font-bold uppercase tracking-wider mb-2.5">
              <span className="flex items-center gap-2">
                <AlertOctagon className="w-4 h-4" />
                Проблема (Боль торгового центра)
              </span>
              <span className="text-[11px] text-rose-300 flex items-center gap-1">
                {expandedCard === 'problem' ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                {expandedCard === 'problem' ? 'Свернуть' : 'Подробнее'}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                  Труднодоступные коридоры, тупики, дальние переходы и зоны, удаленные от эскалаторов, <strong className="text-white font-bold">не приносят прибыли</strong> и пустуют.
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-rose-100/90 leading-relaxed">
                  Посетители не задерживаются в этих местах, арендаторы несут убытки и стремятся расторгнуть договоры аренды.
                </p>
              </div>
            </div>

            {expandedCard === 'problem' && (
              <div className="mt-3 pt-3 border-t border-rose-900/50 text-xs text-rose-200/90 space-y-1 animate-fade-in">
                <p>📉 Средний ТЦ теряет от 15% до 30% потенциальной арендной выручки из-за неравномерного распределения потока.</p>
                <p>⚠️ Арендаторы в слепых зонах меняются каждые 6–9 месяцев, создавая затраты на повторный поиск и ремонт.</p>
              </div>
            )}
          </div>

          {/* SOLUTION CARD (Clickable for details) */}
          <div 
            onClick={() => setExpandedCard(expandedCard === 'solution' ? null : 'solution')}
            className="bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-purple-950/30 hover:from-cyan-950/60 border border-cyan-500/40 hover:border-cyan-400/80 rounded-2xl p-5 relative overflow-hidden shadow-xl cursor-pointer transition-all duration-200"
          >
            <div className="flex items-center justify-between text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2.5">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Решение (Квест «Игры народов России»)
              </span>
              <span className="text-[11px] text-cyan-300 flex items-center gap-1">
                {expandedCard === 'solution' ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                {expandedCard === 'solution' ? 'Свернуть' : 'Подробнее'}
              </span>
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  Мы создаем <strong className="text-cyan-300">иммерсивный квест-фестиваль</strong> («Игры народов России»), который <strong className="text-white">целенаправленно ведёт зрителей</strong> по маршруту через эти «слепые зоны».
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  Сценарий строится так, что локации в этих зонах становятся <strong className="text-amber-300">кульминационными станциями народных забав</strong> и состязаний.
                </p>
              </div>
            </div>

            {expandedCard === 'solution' && (
              <div className="mt-3 pt-3 border-t border-cyan-800/50 text-xs text-cyan-200 space-y-1 animate-fade-in">
                <p>🎯 Полное совмещение офлайн-активностей (актёры, народный реквизит) с мобильным веб-сервисом квеста.</p>
                <p>🎁 Прямая финансовая стимуляция покупок: каждый пройденный этап открывает скидочный купон у соседнего бутика.</p>
              </div>
            )}
          </div>

          {/* Interactive Step Mechanism Overview with Clickable Tabs */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <Route className="w-4 h-4 text-cyan-400" />
                Интерактивная маршрутизация потока
              </span>
              <span className="text-[10px] text-cyan-400 font-normal">
                Нажмите на этап, чтобы раскрыть путь зрителя 👇
              </span>
            </div>

            {/* 3 Clickable Buttons */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <button
                onClick={() => setActiveStepTab(1)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  activeStepTab === 1
                    ? 'bg-cyan-950/80 border-cyan-400 text-white shadow-md ring-1 ring-cyan-400/40'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] text-cyan-400 font-bold mb-0.5">Точка 1</div>
                <div className="font-bold text-xs">Главный вход</div>
                <div className="text-[9px] text-slate-400 mt-1">Старт & Wi-Fi</div>
              </button>

              <button
                onClick={() => setActiveStepTab(2)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  activeStepTab === 2
                    ? 'bg-amber-950/80 border-amber-400 text-white shadow-md ring-1 ring-amber-400/40'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] text-amber-400 font-bold mb-0.5">Точки 2–4</div>
                <div className="font-bold text-xs">Слепые зоны</div>
                <div className="text-[9px] text-amber-300 mt-1">Игры народов</div>
              </button>

              <button
                onClick={() => setActiveStepTab(3)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                  activeStepTab === 3
                    ? 'bg-emerald-950/80 border-emerald-400 text-white shadow-md ring-1 ring-emerald-400/40'
                    : 'bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700'
                }`}
              >
                <div className="text-[10px] text-emerald-400 font-bold mb-0.5">Финал</div>
                <div className="font-bold text-xs">Фудкорт & Бутики</div>
                <div className="text-[9px] text-emerald-300 mt-1">Покупки & Призы</div>
              </button>
            </div>

            {/* Active Step Detailed Information Panel */}
            <div className="bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-2 text-xs animate-fade-in">
              {(() => {
                const current = routeDetails.find(r => r.id === activeStepTab)!;
                return (
                  <div>
                    <div className="flex items-center justify-between text-cyan-300 font-bold mb-1">
                      <span>{current.name}</span>
                      <span className="text-[10px] text-amber-300 bg-amber-950/60 px-2 py-0.5 rounded border border-amber-500/30 flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {current.timing}
                      </span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      {current.visitorBehavior}
                    </p>
                    <div className="mt-2 pt-2 border-t border-slate-800/80 text-emerald-300 flex items-start gap-1.5">
                      <Store className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{current.tenantImpact}</span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action / Slide Pagination Bar */}
      <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3">
        {onPrevSlide ? (
          <button
            onClick={onPrevSlide}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>← Назад: Слайд 1 (Введение и План ТЦ)</span>
          </button>
        ) : <div />}

        {onNextSlide && (
          <button
            onClick={onNextSlide}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs sm:text-sm shadow-xl shadow-cyan-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all transform hover:scale-[1.02] active:scale-98"
          >
            <span>Перейти к Слайду 3: Технология и Wi-Fi-вовлечение</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        )}
      </div>
    </div>
  );
}

