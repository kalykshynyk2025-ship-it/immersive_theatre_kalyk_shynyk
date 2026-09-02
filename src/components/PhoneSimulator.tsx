import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Wifi, 
  Sparkles, 
  Compass, 
  Gift, 
  ArrowRight, 
  CheckCircle2, 
  MapPin, 
  Camera, 
  RotateCcw,
  Zap,
  ShoppingBag
} from 'lucide-react';

export default function PhoneSimulator() {
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [isWifiConnected, setIsWifiConnected] = useState<boolean>(false);
  const [questSolved, setQuestSolved] = useState<boolean>(false);
  const [copiedCoupon, setCopiedCoupon] = useState<boolean>(false);

  const handleConnectWifi = () => {
    setIsWifiConnected(true);
    setTimeout(() => {
      setCurrentStep(2);
    }, 600);
  };

  const handleCopyCode = () => {
    setCopiedCoupon(true);
    setTimeout(() => setCopiedCoupon(false), 2000);
  };

  const handleReset = () => {
    setCurrentStep(1);
    setIsWifiConnected(false);
    setQuestSolved(false);
  };

  return (
    <div className="flex flex-col items-center">
      {/* Smartphone frame */}
      <div className="w-[300px] sm:w-[320px] bg-slate-950 rounded-[40px] p-3.5 border-4 border-slate-700 shadow-[0_20px_50px_rgba(0,0,0,0.8)] relative ring-1 ring-cyan-500/30">
        {/* Dynamic Island / Notch */}
        <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-30 flex items-center justify-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-900 border border-slate-700" />
          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/80 animate-ping" />
        </div>

        {/* Screen container */}
        <div className="w-full h-[520px] bg-slate-900 rounded-[32px] overflow-hidden flex flex-col relative border border-slate-800 text-slate-100 select-none">
          {/* Status bar */}
          <div className="pt-3 px-5 pb-2 flex items-center justify-between text-[11px] text-slate-400 z-20">
            <span>18:42</span>
            <div className="flex items-center gap-1.5">
              <Wifi className={`w-3.5 h-3.5 ${isWifiConnected ? 'text-cyan-400' : 'text-slate-500'}`} />
              <span className="text-[10px] font-semibold">5G</span>
              <div className="w-5 h-2.5 border border-slate-400 rounded-sm p-0.5">
                <div className="h-full w-4/5 bg-cyan-400 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* Screen Content by Step */}
          <div className="flex-1 overflow-y-auto px-4 py-2 relative flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {/* STEP 1: Connect to Mall Wi-Fi */}
              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  className="flex flex-col items-center justify-center h-full text-center py-4 space-y-4"
                >
                  <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400 shadow-lg shadow-cyan-500/20">
                    <Wifi className="w-8 h-8 animate-pulse" />
                  </div>

                  <div>
                    <h5 className="font-bold text-base text-white">
                      Бесплатный Wi-Fi ТЦ
                    </h5>
                    <p className="text-xs text-slate-400 mt-1 max-w-[220px]">
                      Подключитесь к сети <span className="text-cyan-300 font-semibold">"MALL_FREE_GUEST"</span> без пароля
                    </p>
                  </div>

                  <div className="w-full bg-slate-950/80 p-3 rounded-xl border border-slate-800 text-left space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-slate-300 flex items-center gap-2">
                        <Wifi className="w-3.5 h-3.5 text-cyan-400" /> MALL_FREE_GUEST
                      </span>
                      <span className="text-[10px] text-cyan-400 bg-cyan-500/15 px-2 py-0.5 rounded">
                        Открытая
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={handleConnectWifi}
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/25 transition-transform active:scale-95"
                  >
                    <Zap className="w-4 h-4 fill-current" />
                    Подключиться в 1 клик
                  </button>
                </motion.div>
              )}

              {/* STEP 2: Wi-Fi Splash Screen with Tenant Ad */}
              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-3 py-2"
                >
                  <div className="bg-gradient-to-r from-purple-900/60 to-cyan-900/60 p-3 rounded-2xl border border-purple-500/40 text-center">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-cyan-300">
                      ✨ Вы успешно подключены!
                    </span>
                    <h5 className="font-bold text-sm text-white mt-0.5 font-display">
                      Иммерсивный спектакль
                    </h5>
                    <p className="text-[11px] text-slate-300">
                      «Тропа трёх миров: Тайна Севера»
                    </p>
                  </div>

                  {/* TENANT PROMOTIONAL BANNER */}
                  <div className="bg-gradient-to-br from-amber-500/20 via-slate-950 to-amber-950/40 border border-amber-500/40 rounded-xl p-3 relative overflow-hidden shadow-md">
                    <div className="flex items-start gap-2.5">
                      <div className="w-10 h-10 rounded-lg bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-300 shrink-0">
                        <ShoppingBag className="w-5 h-5" />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] font-bold text-amber-400 bg-amber-500/20 px-1.5 py-0.5 rounded">
                          Спецпредложение арендатора
                        </span>
                        <h6 className="font-bold text-xs text-amber-100 mt-1">
                          Кофейня «Северное Сияние»
                        </h6>
                        <p className="text-[10px] text-slate-300 leading-tight mt-0.5">
                          Скидка 15% на авторский раф у финальной точки квеста (3 этаж)
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-400 text-center">
                    Веб-приложение запускается прямо в браузере — без установки!
                  </div>

                  <button
                    onClick={() => setCurrentStep(3)}
                    className="w-full py-2.5 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                  >
                    Войти в спектакль-квест
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* STEP 3: Quest PWA Navigation & AR Riddle */}
              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-3 py-1 text-left"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-semibold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800">
                      📍 Локация: 2 этаж, Зона B
                    </span>
                    <span className="text-[10px] text-amber-300 font-mono">
                      Квест 2 из 5
                    </span>
                  </div>

                  <div className="bg-slate-950/90 rounded-xl p-3 border border-slate-800 space-y-2">
                    <h6 className="font-bold text-xs text-purple-300 flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-purple-400" />
                      Задание Шамана: «Зов Духа Тайги»
                    </h6>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Пройдите в глухой коридор возле галереи №4. Найдите на витрине священный рунический знак.
                    </p>
                  </div>

                  {/* AR Viewport Simulator */}
                  <div className="relative rounded-xl overflow-hidden border border-cyan-500/40 bg-slate-950 h-36 flex flex-col items-center justify-center text-center p-2">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_70%)]" />
                    <Camera className="w-5 h-5 text-cyan-400 mb-1" />
                    
                    {!questSolved ? (
                      <div className="space-y-2 relative z-10">
                        <div className="w-12 h-12 mx-auto rounded-full border-2 border-dashed border-cyan-400 flex items-center justify-center text-cyan-300 animate-spin-slow">
                          ᚲᛟ
                        </div>
                        <button
                          onClick={() => setQuestSolved(true)}
                          className="px-3 py-1 bg-cyan-500/20 text-cyan-300 border border-cyan-400/50 rounded-lg text-[10px] font-bold hover:bg-cyan-500 hover:text-slate-950 transition-all"
                        >
                          Навести камеру на руну
                        </button>
                      </div>
                    ) : (
                      <div className="space-y-1 relative z-10 animate-fade-in">
                        <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                        <div className="text-xs font-bold text-emerald-300">
                          Руна разгадана! Дух пробуждён
                        </div>
                        <div className="text-[10px] text-slate-300">
                          Путь в Нижний мир открыт
                        </div>
                      </div>
                    )}
                  </div>

                  {questSolved && (
                    <button
                      onClick={() => setCurrentStep(4)}
                      className="w-full py-2.5 bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold rounded-xl text-xs flex items-center justify-center gap-2 shadow-lg"
                    >
                      Получить награду и купон
                      <Gift className="w-4 h-4" />
                    </button>
                  )}
                </motion.div>
              )}

              {/* STEP 4: Reward Coupon & Next Point */}
              {currentStep === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  className="space-y-3 py-2 text-center"
                >
                  <div className="w-12 h-12 bg-amber-500/20 rounded-full border border-amber-500/50 flex items-center justify-center text-amber-400 mx-auto">
                    <Gift className="w-6 h-6" />
                  </div>

                  <div>
                    <h6 className="font-bold text-sm text-white">
                      Ваша награда за этап
                    </h6>
                    <p className="text-[11px] text-slate-300 mt-0.5">
                      Покажите промокод на кассе магазина-партнёра в ТЦ
                    </p>
                  </div>

                  <div className="bg-slate-950 border border-amber-500/40 p-3 rounded-xl space-y-1.5">
                    <span className="text-[10px] uppercase font-bold text-amber-400">
                      Промокод на скидку 20%:
                    </span>
                    <div className="font-mono text-base font-black text-white tracking-widest bg-amber-500/15 py-1.5 rounded border border-amber-500/30">
                      QUEST-MALL-2026
                    </div>
                    <button
                      onClick={handleCopyCode}
                      className="text-[10px] text-cyan-300 underline hover:text-cyan-200"
                    >
                      {copiedCoupon ? '✓ Скопировано!' : 'Скопировать код'}
                    </button>
                  </div>

                  <div className="text-[10px] text-slate-400 bg-slate-950/60 p-2 rounded-lg border border-slate-800 text-left">
                    <span className="font-bold text-slate-200">Следующая точка:</span> Спуск в Нижний мир (-1 этаж, крыло C). Актёры ждут вас!
                  </div>

                  <button
                    onClick={handleReset}
                    className="w-full py-2 bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold rounded-xl text-xs flex items-center justify-center gap-1.5"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Пройти симуляцию заново
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Bottom step breadcrumbs */}
            <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-[10px] text-slate-400">
              <span>Шаг {currentStep} из 4</span>
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4].map((step) => (
                  <button
                    key={step}
                    onClick={() => setCurrentStep(step)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      currentStep === step ? 'bg-cyan-400 w-4' : 'bg-slate-700'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center text-xs text-slate-400 flex items-center gap-1.5">
        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
        Интерактивный прототип PWA для зрителей квеста
      </div>
    </div>
  );
}
