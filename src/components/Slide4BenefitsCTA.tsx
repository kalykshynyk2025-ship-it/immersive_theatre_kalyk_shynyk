import React, { useState } from 'react';
import { motion } from 'motion/react';
import { IMAGES } from '../assets';
import { 
  DollarSign, 
  Clock, 
  Percent, 
  Crown, 
  Phone, 
  Mail, 
  ExternalLink, 
  Send, 
  Sparkles, 
  CheckCircle2, 
  Calculator, 
  Building2,
  Calendar,
  Users,
  Copy,
  Check,
  ArrowUpRight
} from 'lucide-react';
import { ContactRequest } from '../types';

interface Slide4BenefitsCTAProps {
  onPrevSlide?: () => void;
}

const TARGET_EMAIL = 'immersive.theatr@yandex.ru';
const TARGET_PHONE = '+7 (977) 592-71-25';

export default function Slide4BenefitsCTA({ onPrevSlide }: Slide4BenefitsCTAProps) {
  // Interactive Calculator State
  const [mallVisitorsPerDay, setMallVisitorsPerDay] = useState<number>(15000);
  const [spectatorsPerMonth, setSpectatorsPerMonth] = useState<number>(1200);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);
  const [formData, setFormData] = useState<ContactRequest>({
    mallName: '',
    contactPerson: '',
    phone: '',
    email: '',
    city: 'Москва',
    notes: 'Интересует разработка квест-спектакля для слепых зон нашего ТЦ.',
  });

  // Derived Calculations
  const extraDwellHours = (spectatorsPerMonth * 1.75).toLocaleString('ru-RU');
  const estimatedTenantBoost = (spectatorsPerMonth * 1200).toLocaleString('ru-RU'); // Average secondary spend in mall

  const getEmailSubject = () => {
    return `Заявка на квест-спектакль для ТЦ: ${formData.mallName || 'Новый ТЦ'}`;
  };

  const getEmailBody = () => {
    return `Здравствуйте!\n\nНовая заявка на разработку иммерсивного квест-спектакля:\n\n• Название ТЦ: ${formData.mallName || '—'}\n• Контактное лицо: ${formData.contactPerson || '—'}\n• Телефон: ${formData.phone || '—'}\n• Email отправителя: ${formData.email || '—'}\n• Город: ${formData.city || '—'}\n• Слепые зоны / Пожелания: ${formData.notes || '—'}\n\n---\nОтправлено из интерактивной презентации для ТЦ`;
  };

  const getMailtoUrl = () => {
    const subject = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getEmailBody());
    return `mailto:${TARGET_EMAIL}?subject=${subject}&body=${body}`;
  };

  const getYandexMailUrl = () => {
    const subject = encodeURIComponent(getEmailSubject());
    const body = encodeURIComponent(getEmailBody());
    return `https://mail.yandex.ru/compose?to=${TARGET_EMAIL}&subj=${subject}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    
    // Automatically trigger mail client draft to immersive.theatr@yandex.ru
    try {
      window.location.href = getMailtoUrl();
    } catch (err) {
      console.log('Mailto redirected', err);
    }
  };

  const handleCopyDetails = () => {
    const textToCopy = `Кому: ${TARGET_EMAIL}\nТема: ${getEmailSubject()}\n\n${getEmailBody()}`;
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const benefits = [
    {
      icon: DollarSign,
      number: '01',
      title: 'Монетизация «мертвых зон»',
      highlight: '100% полезная площадь',
      desc: 'Неликвидные квадратные метры (тупики, дальние переходы) становятся продаваемыми локациями для сцен и привлекают целевой поток.',
      gradient: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/30',
      textGrad: 'from-cyan-400 to-blue-300',
    },
    {
      icon: Clock,
      number: '02',
      title: 'Увеличение времени пребывания',
      highlight: '+1,5 – 2 часа',
      desc: 'Зрители проводят в ТЦ существенно больше времени, активно посещая фудкорты, кофейни и магазины до и после спектакля.',
      gradient: 'from-amber-500/20 to-orange-500/10',
      border: 'border-amber-500/30',
      textGrad: 'from-amber-400 to-orange-300',
    },
    {
      icon: Percent,
      number: '03',
      title: 'Дополнительный доход',
      highlight: 'Партнёрская модель',
      desc: 'Вы получаете прямой доход от аренды пространства под спектакль и фиксированный процент от продажи каждого билета.',
      gradient: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/30',
      textGrad: 'from-emerald-400 to-teal-300',
    },
    {
      icon: Crown,
      number: '04',
      title: 'Уникальный имидж ТЦ',
      highlight: 'Культурный центр №1',
      desc: 'Ваш торговый центр становится флагманским культурным хабом города, генерируя вирусный PR в соцсетях и лояльную аудиторию.',
      gradient: 'from-purple-500/20 to-pink-500/10',
      border: 'border-purple-500/30',
      textGrad: 'from-purple-400 to-pink-300',
    },
  ];

  return (
    <div className="space-y-6 lg:space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Слайд 5: Коммерческая выгода и Заявка на сотрудничество</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Почему это выгодно вашему ТЦ?
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
          Синтез культуры, ритейла и технологий, который превращает пустующие коридоры в точку коммерческого роста.
        </p>
      </div>

      {/* 4 CORE VALUE PILLARS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {benefits.map((b) => {
          const IconComponent = b.icon;
          return (
            <div
              key={b.number}
              className={`bg-slate-900/80 bg-gradient-to-b ${b.gradient} border ${b.border} rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-lg`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-black text-slate-500">
                    {b.number}
                  </span>
                </div>

                <div className={`text-xl font-black font-display text-transparent bg-clip-text bg-gradient-to-r ${b.textGrad} mb-1`}>
                  {b.highlight}
                </div>

                <h3 className="font-bold text-sm text-white mb-2 leading-snug">
                  {b.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {b.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Visual Photo of Happy Audience & Real Mall Atmosphere */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          {/* Left photo */}
          <div className="lg:col-span-5 h-64 lg:h-full min-h-[260px] relative">
            <img
              src={IMAGES.happyAudience || '/assets/images/mall_happy_slavic_visitors_1788353792121.jpg'}
              onError={(e) => {
                (e.target as HTMLImageElement).src = '/assets/images/mall_happy_slavic_visitors_1788353792121.jpg';
              }}
              alt="Счастливые зрители и посетители в ТЦ"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-transparent via-slate-950/40 to-slate-950" />
            <div className="absolute bottom-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-slate-700 text-[11px] text-slate-200">
              🎭 Счастливые зрители квеста в пространстве ТЦ
            </div>
          </div>

          {/* Right: Interactive Impact / ROI Estimator */}
          <div className="lg:col-span-7 p-5 sm:p-6 lg:p-8 space-y-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Calculator className="w-5 h-5 text-cyan-400" />
                <h4 className="font-bold text-white text-base font-display">
                  Экспресс-оценка эффекта для вашего ТЦ
                </h4>
              </div>
              <span className="text-[10px] text-slate-400 uppercase font-mono bg-slate-900 px-2 py-0.5 rounded">
                Модель роста
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Slider 1: Expected Monthly Spectators */}
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-slate-800 space-y-2">
                <div className="flex justify-between text-xs">
                  <span className="text-slate-400">Зрителей в месяц:</span>
                  <span className="font-bold text-cyan-300 font-mono">{spectatorsPerMonth} чел.</span>
                </div>
                <input
                  type="range"
                  min="400"
                  max="4000"
                  step="100"
                  value={spectatorsPerMonth}
                  onChange={(e) => setSpectatorsPerMonth(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer h-1.5 bg-slate-800 rounded-lg"
                />
                <div className="flex justify-between text-[10px] text-slate-500">
                  <span>400</span>
                  <span>2 000</span>
                  <span>4 000</span>
                </div>
              </div>

              {/* Stat Highlight 1 */}
              <div className="bg-slate-900/90 p-3.5 rounded-xl border border-cyan-500/30 flex flex-col justify-center">
                <div className="text-[11px] text-slate-400">Доп. время гостей в ТЦ:</div>
                <div className="text-2xl font-black text-cyan-400 font-display">
                  +{extraDwellHours} <span className="text-sm font-normal text-slate-300">часов / мес</span>
                </div>
                <div className="text-[10px] text-emerald-400 mt-0.5">
                  Прямой рост среднего чека фудкорта
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CALL TO ACTION & CONTACT DETAILS */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        {/* Contact Info & Sample Link */}
        <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Призыв к действию</span>
            </div>

            <h3 className="text-2xl font-black text-white font-display leading-snug">
              Готовы обсудить, как «оживить» ваши слепые зоны?
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              Свяжитесь с нами сегодня — мы разработаем индивидуальный концептуальный маршрут и сценарий спектакля под планировку именно вашего ТЦ.
            </p>
          </div>

          <div className="space-y-3 pt-2">
            <div className="flex items-center gap-3 text-slate-200 text-sm bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] text-slate-400">Телефон для связи:</div>
                <a 
                  href={`tel:${TARGET_PHONE.replace(/[^\d+]/g, '')}`}
                  className="font-bold font-mono text-white hover:text-cyan-300 transition-colors"
                >
                  {TARGET_PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-center gap-3 text-slate-200 text-sm bg-slate-950/70 p-3 rounded-xl border border-slate-800">
              <div className="w-8 h-8 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <div className="text-[10px] text-slate-400">Официальный Email команды:</div>
                <a 
                  href={`mailto:${TARGET_EMAIL}`}
                  className="font-bold text-white hover:text-cyan-300 transition-colors truncate block"
                >
                  {TARGET_EMAIL}
                </a>
              </div>
            </div>

            {/* Reference link button */}
            <a
              href="https://igry-narodov-russia.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-slate-950 hover:bg-slate-800 border border-cyan-500/40 text-cyan-300 hover:text-white text-xs font-bold flex items-center justify-between transition-colors group cursor-pointer shadow-md"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Сайт проекта: «Игры народов России. Квест»
              </span>
              <ExternalLink className="w-4 h-4 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Interactive Booking / Presentation Request Form */}
        <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800 rounded-3xl p-6 flex flex-col justify-between">
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div>
                  <h4 className="font-bold text-white text-base font-display">
                    Заявка на презентацию конкретного маршрута для ТЦ
                  </h4>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    Заявка будет направлена на: <span className="text-cyan-400 font-semibold">{TARGET_EMAIL}</span>
                  </p>
                </div>
                <span className="text-xs text-cyan-400 font-semibold shrink-0">Бесплатно</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Название ТЦ *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Например: ТРЦ «МЕГА Плаза»"
                    value={formData.mallName}
                    onChange={(e) => setFormData({ ...formData, mallName: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Контактное лицо (ФИО, должность) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Иван Петров, Директор по маркетингу"
                    value={formData.contactPerson}
                    onChange={(e) => setFormData({ ...formData, contactPerson: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Телефон для связи *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+7 (999) 000-00-00"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Рабочий Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="director@mall.ru"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Комментарий или план слепых зон
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder="Опишите ваши зоны или пожелания..."
                  className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-gradient-to-r from-cyan-500 via-teal-400 to-amber-400 hover:from-cyan-400 hover:to-amber-300 text-slate-950 font-black rounded-xl text-sm flex items-center justify-center gap-2 shadow-xl shadow-cyan-500/20 transition-transform active:scale-98 cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Отправить заявку на {TARGET_EMAIL}</span>
              </button>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="py-6 flex flex-col items-center justify-center text-center space-y-4"
            >
              <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/50 flex items-center justify-center text-emerald-400 shadow-xl shadow-emerald-500/20">
                <CheckCircle2 className="w-7 h-7" />
              </div>

              <div className="space-y-1.5">
                <h4 className="text-lg font-bold text-white font-display">
                  Заявка сформирована для отправки!
                </h4>
                <p className="text-xs text-slate-300 max-w-md">
                  Письмо подготовлено к отправке на официальную почту проекта:{' '}
                  <span className="text-cyan-300 font-bold underline font-mono">{TARGET_EMAIL}</span>
                </p>
              </div>

              {/* Action buttons for sending/confirming */}
              <div className="w-full max-w-md bg-slate-950 p-3.5 rounded-2xl border border-slate-800 space-y-2.5 text-left">
                <div className="text-[11px] font-semibold text-slate-400 flex items-center justify-between">
                  <span>Выберите способ отправки:</span>
                  <span className="text-emerald-400 text-[10px] flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" /> Готово к отправке
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <a
                    href={getMailtoUrl()}
                    className="py-2.5 px-3 rounded-xl bg-cyan-600 hover:bg-cyan-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-cyan-600/20"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Почтовый клиент</span>
                  </a>

                  <a
                    href={getYandexMailUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-2.5 px-3 rounded-xl bg-amber-600 hover:bg-amber-500 text-white text-xs font-bold flex items-center justify-center gap-1.5 transition-colors shadow-lg shadow-amber-600/20"
                  >
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    <span>Яндекс.Почта</span>
                  </a>

                  <button
                    type="button"
                    onClick={handleCopyDetails}
                    className="py-2.5 px-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-colors border border-slate-700 cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400">Скопировано!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 text-slate-400" />
                        <span>Скопировать текст</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setFormSubmitted(false)}
                className="px-4 py-1.5 text-slate-400 hover:text-slate-200 text-xs transition-colors underline cursor-pointer"
              >
                ← Заполнить заново или изменить данные
              </button>
            </motion.div>
          )}

          {/* Trusted mall placeholders */}
          <div className="pt-4 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-slate-500 text-[11px]">
            <span>Формат адаптирован под ТРЦ от 15 000 до 150 000 м²</span>
            <div className="flex items-center gap-3 text-slate-400 font-semibold font-mono text-[10px]">
              <span>Торговые Галереи</span>
              <span>•</span>
              <span>Молл Плаза</span>
              <span>•</span>
              <span>Атриум Сити</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Action / Slide Pagination Bar */}
      {onPrevSlide && (
        <div className="pt-4 border-t border-slate-800 flex justify-start">
          <button
            onClick={onPrevSlide}
            className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-slate-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
          >
            <span>← Назад: Слайд 3 (Технология и Wi-Fi-вовлечение)</span>
          </button>
        </div>
      )}
    </div>
  );
}
