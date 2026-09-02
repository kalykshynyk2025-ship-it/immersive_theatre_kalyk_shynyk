import React from 'react';
import { motion } from 'motion/react';
import { 
  HeartHandshake, 
  Sparkles, 
  Landmark, 
  Users, 
  Smile, 
  GraduationCap, 
  Award, 
  TrendingUp, 
  Compass,
  ArrowRight,
  ShieldCheck,
  Building,
  Trees
} from 'lucide-react';

interface SlideSocialImpactProps {
  onNextSlide?: () => void;
}

export default function SlideSocialImpact({ onNextSlide }: SlideSocialImpactProps) {
  const socialPillars = [
    {
      icon: Landmark,
      badge: 'Культурное наследие',
      title: 'Популяризация традиций и истории',
      desc: 'Спектакль бережно переносит аутентичные легенды и эпос в современную форму. Зрители открывают для себя богатство национальной культуры через живое общение с актерами и носителями фольклора.',
      stat: '100% аутентичность',
      statLabel: 'фольклорной основы',
      gradient: 'from-cyan-500/20 to-blue-500/10',
      border: 'border-cyan-500/30',
      badgeColor: 'text-cyan-300 bg-cyan-950/80 border-cyan-500/40',
    },
    {
      icon: Users,
      badge: 'Семейные ценности',
      title: 'Досуг со смыслом для трёх поколений',
      desc: 'Создаём экологичную альтернативу пассивному потреблению. Квест объединяет детей, родителей и старшее поколение в совместном познавательном приключении с ценностями добра, уважения и взаимовыручки.',
      stat: '87%',
      statLabel: 'семейных посещений',
      gradient: 'from-amber-500/20 to-orange-500/10',
      border: 'border-amber-500/30',
      badgeColor: 'text-amber-300 bg-amber-950/80 border-amber-500/40',
    },
    {
      icon: Building,
      badge: 'Городская среда',
      title: 'Трансформация ТЦ в общественный центр',
      desc: 'Торговый центр эволюционирует из места исключительно коммерции в главный культурно-просветительский центр района и города, куда приходят за яркими эмоциями, общением и развитием.',
      stat: 'Новый статус',
      statLabel: 'культурного хаба города',
      gradient: 'from-emerald-500/20 to-teal-500/10',
      border: 'border-emerald-500/30',
      badgeColor: 'text-emerald-300 bg-emerald-950/80 border-emerald-500/40',
    },
  ];

  const cityBenefits = [
    {
      title: 'Позитивный имидж у жителей и администрации',
      desc: 'ТЦ воспринимается как социально ответственный партнёр города, поддерживающий культуру, семью и просвещение молодежи.',
    },
    {
      title: 'Безопасное и вдохновляющее пространство',
      desc: 'Организованный интерактивный маршрут направляет подростков и молодежь в созидательное творческое русло.',
    },
    {
      title: 'Повышение туристической привлекательности',
      desc: 'Уникальный иммерсивный формат становится визитной карточкой города для туристов и гостей из соседних регионов.',
    },
  ];

  return (
    <div className="space-y-6 lg:space-y-8 animate-fade-in">
      {/* Title Header */}
      <div className="space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
          <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
          <span>Слайд 4: Социальная миссия и польза обществу</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
          Торговый центр как культурный центр города
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl">
          Иммерсивный спектакль решает не только коммерческие задачи ТЦ, но и формирует мощную социальную ценность — объединяет семьи, сохраняет живые традиции и развивает городскую среду.
        </p>
      </div>

      {/* 3 Pillars of Social Impact */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {socialPillars.map((pillar, idx) => {
          const IconComponent = pillar.icon;
          return (
            <div
              key={idx}
              className={`bg-slate-900/80 bg-gradient-to-b ${pillar.gradient} border ${pillar.border} rounded-2xl p-5 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300 shadow-lg`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-950/80 border border-slate-800 flex items-center justify-center text-cyan-400">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${pillar.badgeColor}`}>
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="font-bold text-base text-white mb-2 leading-snug">
                  {pillar.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.desc}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800/80">
                <div className="text-lg font-black text-white font-display">
                  {pillar.stat}
                </div>
                <div className="text-[11px] text-slate-400">
                  {pillar.statLabel}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* City & Community Strategic Value Card */}
      <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-950 p-6 sm:p-8 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <div className="lg:col-span-5 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-cyan-300 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Социальная ответственность бизнеса</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-black text-white font-display leading-snug">
              Больше, чем покупки: территория культуры и единства
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              В эпоху онлайн-шопинга люди приходят в физический торговый центр за живыми впечатлениями, культурным опытом и общением. Проект делает ваш ТЦ главным местом притяжения горожан всех возрастов.
            </p>

            {onNextSlide && (
              <div className="pt-2">
                <button
                  onClick={onNextSlide}
                  className="px-6 py-3 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-400 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-emerald-500/20 flex items-center gap-2 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Перейти к коммерческой выгоде и контактам</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="lg:col-span-7 space-y-3">
            {cityBenefits.map((item, i) => (
              <div
                key={i}
                className="bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex items-start gap-3.5 hover:border-emerald-500/40 transition-colors"
              >
                <div className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 flex items-center justify-center shrink-0 mt-0.5 font-black text-xs">
                  0{i + 1}
                </div>
                <div>
                  <h4 className="font-bold text-sm text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
