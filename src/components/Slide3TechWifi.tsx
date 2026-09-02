import React from 'react';
import { motion } from 'motion/react';
import PhoneSimulator from './PhoneSimulator';
import { IMAGES } from '../assets';
import { 
  Wifi, 
  Smartphone, 
  Sparkles, 
  Radio, 
  Gift, 
  Layers, 
  Percent, 
  Compass, 
  CheckCircle2, 
  ArrowRight,
  MousePointerClick
} from 'lucide-react';

interface Slide3TechWifiProps {
  onNextSlide?: () => void;
}

export default function Slide3TechWifi({ onNextSlide }: Slide3TechWifiProps) {
  const steps = [
    {
      num: '1',
      title: 'Подключение к Wi-Fi',
      desc: 'Зритель подключается к бесплатному открытому Wi-Fi ТЦ на входе или у афиши.',
      icon: Wifi,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      num: '2',
      title: 'Страница-витрина арендаторов',
      desc: 'При авторизации в Wi-Fi показывается баннер спецпредложений от арендаторов ТЦ.',
      icon: Percent,
      color: 'from-amber-500 to-orange-500',
    },
    {
      num: '3',
      title: 'Запуск веб-приложения (PWA)',
      desc: 'Мгновенно открывается интерактивное приложение спектакля без установки из App Store.',
      icon: Smartphone,
      color: 'from-cyan-500 to-purple-500',
    },
    {
      num: '4',
      title: 'Квесты с носителями культуры и актёрами',
      desc: 'Участники погружаются в интерактивный сюжет с живыми актёрами и носителями традиций, получая промокоды.',
      icon: Gift,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <div className="space-y-6 lg:space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Wifi className="w-3.5 h-3.5 text-cyan-400" />
          <span>Слайд 3: Технология и Вовлечение</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Полное погружение через ваш Wi-Fi
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
          Бесшовный клиентский путь: от подключения к Wi-Fi сети ТЦ до квеста с носителями культуры, актёрами и прямых продаж для арендаторов.
        </p>
      </div>

      {/* Main Layout: Flow Steps & Interactive Smartphone Simulator */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left / Center Column: Step Diagram & Value Callouts */}
        <div className="lg:col-span-7 space-y-5">
          {/* VISUAL FLOWCHART DIAGRAM */}
          <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-4 sm:p-5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400 mb-4 flex items-center gap-2">
              <Radio className="w-4 h-4" />
              Схема взаимодействия со зрителем
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {steps.map((step) => {
                const IconComponent = step.icon;
                return (
                  <div
                    key={step.num}
                    className="bg-slate-950/90 border border-slate-800/90 rounded-xl p-3.5 relative overflow-hidden flex flex-col justify-between group hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${step.color} flex items-center justify-center text-slate-950 font-black text-sm shadow-md`}>
                        <IconComponent className="w-4 h-4 text-slate-950" />
                      </div>
                      <span className="text-[10px] font-mono font-bold text-slate-500 bg-slate-900 px-2 py-0.5 rounded">
                        ШАГ 0{step.num}
                      </span>
                    </div>

                    <div>
                      <h5 className="font-bold text-xs sm:text-sm text-white group-hover:text-cyan-300 transition-colors">
                        {step.title}
                      </h5>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* TWO KEY BENEFIT BLOCKS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Block 1: Interactive PWA */}
            <div className="bg-cyan-950/30 border border-cyan-500/30 rounded-2xl p-4.5 space-y-2">
              <div className="flex items-center gap-2 text-cyan-300 text-xs font-bold uppercase tracking-wider">
                <Smartphone className="w-4 h-4 text-cyan-400" />
                Интерактив через PWA
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Работает в любом мобильном браузере без скачивания приложений</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                  <span>Интерактивная карта, аудио-сопровождение и квесты с актёрами</span>
                </li>
              </ul>
            </div>

            {/* Block 2: Additional Ad Opportunities */}
            <div className="bg-amber-950/30 border border-amber-500/30 rounded-2xl p-4.5 space-y-2">
              <div className="flex items-center gap-2 text-amber-300 text-xs font-bold uppercase tracking-wider">
                <Gift className="w-4 h-4 text-amber-400" />
                Реклама арендаторов ТЦ
              </div>
              <ul className="text-xs text-slate-300 space-y-1.5">
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>«Скидка 10% в кофейне</strong> у выхода из квеста»</span>
                </li>
                <li className="flex items-start gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>«Подарок в магазине игрушек</strong> по промокоду из приложения»</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Value Summary Punchline */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-xl p-3.5 flex items-center justify-between text-xs text-slate-300">
            <span className="text-cyan-400 font-semibold">100% охват зрителей через Wi-Fi:</span>
            <span>Повышает конверсию и создает ценность для всех сторон</span>
          </div>
        </div>

        {/* Right Column: Live Interactive Smartphone Simulator */}
        <div className="lg:col-span-5 flex flex-col items-center justify-center">
          <div className="w-full bg-slate-900/40 border border-slate-800/80 rounded-3xl p-4 flex flex-col items-center">
            <div className="text-center mb-3">
              <span className="text-xs font-bold text-cyan-300 flex items-center justify-center gap-1.5">
                <MousePointerClick className="w-4 h-4 animate-bounce" />
                Интерактивный экран (попробуйте нажать!)
              </span>
              <p className="text-[11px] text-slate-400 mt-0.5">
                Кликайте по кнопкам внутри смартфона, чтобы пройти путь зрителя
              </p>
            </div>

            <PhoneSimulator />
          </div>
        </div>
      </div>
    </div>
  );
}
