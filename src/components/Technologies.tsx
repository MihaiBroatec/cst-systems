'use client';

import { useTranslations } from 'next-intl';
import { Cpu } from 'lucide-react';

const techStack = [
  { name: 'React', emoji: '⚛️', color: 'from-teal-400/15 to-teal-600/15', border: 'border-teal-400/25', text: 'text-teal-600' },
  { name: 'Next.js', emoji: '▲', color: 'from-slate-400/15 to-slate-600/15', border: 'border-slate-400/25', text: 'text-slate-500' },
  { name: 'TypeScript', emoji: '🔷', color: 'from-slate-400/15 to-slate-500/15', border: 'border-slate-300/40', text: 'text-slate-500' },
  { name: 'Node.js', emoji: '🟢', color: 'from-green-400/15 to-green-600/15', border: 'border-green-400/25', text: 'text-green-600' },
  { name: 'Python', emoji: '🐍', color: 'from-yellow-400/15 to-yellow-600/15', border: 'border-yellow-400/25', text: 'text-yellow-600' },
  { name: 'PostgreSQL', emoji: '🐘', color: 'from-slate-400/15 to-slate-600/15', border: 'border-slate-400/25', text: 'text-slate-500' },
  { name: 'MongoDB', emoji: '🍃', color: 'from-emerald-400/15 to-emerald-600/15', border: 'border-emerald-400/25', text: 'text-emerald-600' },
  { name: 'Docker', emoji: '🐳', color: 'from-teal-400/15 to-teal-600/15', border: 'border-teal-400/25', text: 'text-teal-600' },
  { name: 'AWS', emoji: '☁️', color: 'from-orange-400/15 to-amber-600/15', border: 'border-orange-400/25', text: 'text-orange-500' },
  { name: 'Redis', emoji: '🔴', color: 'from-red-400/15 to-red-600/15', border: 'border-red-400/25', text: 'text-red-500' },
  { name: 'Tailwind', emoji: '💨', color: 'from-teal-400/15 to-cyan-600/15', border: 'border-teal-400/25', text: 'text-teal-600' },
  { name: 'GraphQL', emoji: '🔮', color: 'from-pink-400/15 to-rose-600/15', border: 'border-pink-400/25', text: 'text-pink-500' },
  { name: 'Prisma', emoji: '◈', color: 'from-slate-400/15 to-slate-600/15', border: 'border-slate-400/25', text: 'text-slate-500' },
  { name: 'Stripe', emoji: '💳', color: 'from-violet-400/15 to-violet-600/15', border: 'border-violet-400/25', text: 'text-violet-500' },
  { name: 'Git', emoji: '🌿', color: 'from-orange-400/15 to-red-500/15', border: 'border-orange-400/25', text: 'text-orange-500' },
  { name: 'Linux', emoji: '🐧', color: 'from-slate-400/15 to-slate-600/15', border: 'border-slate-400/25', text: 'text-slate-500' },
];

export function Technologies() {
  const t = useTranslations('technologies');

  return (
    <section id="technologies" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-50" />
        <div className="absolute -top-20 -left-20 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full border border-teal-100 mb-4">
            <Cpu className="w-3.5 h-3.5" />
            {t('badge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              {t('title')}
            </span>{' '}
            {t('titleAccent')}
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-3">
          {techStack.map((tech) => (
            <div
              key={tech.name}
              className={`group flex flex-col items-center gap-2.5 p-4 bg-gradient-to-br ${tech.color} border ${tech.border} rounded-2xl hover:scale-105 hover:shadow-md transition-all duration-300 cursor-default`}
            >
              <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                {tech.emoji}
              </span>
              <span className={`text-xs font-bold ${tech.text} text-center`}>
                {tech.name}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <p className="text-slate-500 text-base">
            și multe altele —{' '}
            <span className="text-teal-600 font-semibold">
              alegem întotdeauna cea mai potrivită tehnologie pentru proiectul tău
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
