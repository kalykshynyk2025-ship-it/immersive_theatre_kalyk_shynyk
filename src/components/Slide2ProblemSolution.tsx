import React from 'react';
import { motion } from 'motion/react';
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
  ArrowRight
} from 'lucide-react';

interface Slide2ProblemSolutionProps {
  onNextSlide?: () => void;
}

export default function Slide2ProblemSolution({ onNextSlide }: Slide2ProblemSolutionProps) {
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
          Трансформация неликвидных квадратных метров в кульминационные сцены мистического шоу с гарантированным пешеходным трафиком.
        </p>
      </div>

      {/* Main Grid: Problem vs Solution & Interactive Visual Slider */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Visual Before/After Interactive Comparison */}
        <div className="lg:col-span-6 space-y-4">
          <div className="bg-slate-900/60 p-2 rounded-3xl border border-slate-800">
            <BeforeAfterSlider
              beforeLabel="ДО: Пустующий коридор ТЦ"
              afterLabel="ПОСЛЕ: Точка притяжения (спектакль)"
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
          {/* PROBLEM CARD */}
          <div className="bg-rose-950/20 border border-rose-800/40 rounded-2xl p-5 relative overflow-hidden backdrop-blur-sm">
            <div className="flex items-center gap-2 text-rose-400 text-xs font-bold uppercase tracking-wider mb-2.5">
              <AlertOctagon className="w-4 h-4" />
              Проблема (Боль торгового центра)
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
          </div>

          {/* SOLUTION CARD */}
          <div className="bg-gradient-to-br from-cyan-950/40 via-slate-900/90 to-purple-950/30 border border-cyan-500/40 rounded-2xl p-5 relative overflow-hidden shadow-xl">
            <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold uppercase tracking-wider mb-2.5">
              <Sparkles className="w-4 h-4" />
              Решение (Наш формат квест-спектакля)
            </div>

            <div className="space-y-3">
              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  Мы создаем <strong className="text-cyan-300">иммерсивный квест-спектакль</strong> (в эстетике «Тропы трёх миров»), который <strong className="text-white">целенаправленно ведёт зрителей</strong> по маршруту через эти «слепые зоны».
                </p>
              </div>

              <div className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                  Сценарий строится так, что локации в этих зонах становятся <strong className="text-amber-300">ключевыми точками сюжета</strong> (места встреч, лабиринты духов, тайные порталы).
                </p>
              </div>
            </div>
          </div>

          {/* Step Mechanism Overview */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-1.5">
              <Route className="w-4 h-4 text-cyan-400" />
              Маршрутизация потока посетителей
            </div>
            <div className="grid grid-cols-3 gap-2 text-center text-xs">
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <div className="text-slate-400 text-[10px] mb-1">Точка 1</div>
                <div className="font-bold text-white">Главный вход</div>
                <div className="text-[10px] text-cyan-400 mt-1">Старт и Wi-Fi</div>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-cyan-500/30">
                <div className="text-cyan-400 text-[10px] mb-1">Точка 2-4</div>
                <div className="font-bold text-cyan-300">Слепые зоны</div>
                <div className="text-[10px] text-amber-300 mt-1">Сцены квеста</div>
              </div>
              <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800">
                <div className="text-slate-400 text-[10px] mb-1">Финал</div>
                <div className="font-bold text-white">Фудкорт / Магазины</div>
                <div className="text-[10px] text-emerald-400 mt-1">Покупки & Купоны</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
