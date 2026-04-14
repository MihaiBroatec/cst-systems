'use client';

import { useTranslations } from 'next-intl';
import { Star, Quote, MessageSquare } from 'lucide-react';

const avatarColors = [
  'from-teal-500 to-teal-700',
  'from-violet-500 to-violet-700',
  'from-emerald-500 to-teal-600',
];

const initials = ['UR', 'RU', 'MC'];

export function Testimonials() {
  const t = useTranslations('testimonials');

  const testimonials = ['t1', 't2', 't3'] as const;

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-4"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/15 text-teal-400 text-sm font-semibold rounded-full border border-teal-500/25 mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            {t('badge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-4">
            {t('title')}{' '}
            <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
              {t('titleAccent')}
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((key, index) => (
            <div
              key={key}
              className="group relative p-7 bg-white/6 backdrop-blur-sm border border-white/10 rounded-3xl hover:bg-white/10 hover:-translate-y-1 transition-all duration-300"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-white/8 group-hover:text-white/15 transition-colors" />

              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-slate-400 leading-relaxed mb-6 italic">
                &ldquo;{t(`items.${key}.text`)}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className={`w-11 h-11 rounded-full bg-gradient-to-br ${avatarColors[index]} flex items-center justify-center text-white text-sm font-bold shadow-lg`}
                >
                  {initials[index]}
                </div>
                <div>
                  <div className="text-white font-bold text-sm">
                    {t(`items.${key}.name`)}
                  </div>
                  <div className="text-slate-500 text-xs">
                    {t(`items.${key}.role`)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {[
            { emoji: '🏆', label: 'Calitate garantată' },
            { emoji: '⚡', label: 'Livrare rapidă' },
            { emoji: '🔒', label: 'Cod securizat' },
            { emoji: '🌍', label: 'Clienți globali' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2 text-slate-500">
              <span className="text-xl">{item.emoji}</span>
              <span className="text-sm font-medium">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
