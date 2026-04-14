'use client';

import { useTranslations } from 'next-intl';
import {
  Code2,
  Globe,
  ShoppingBag,
  Zap,
  Puzzle,
  Lightbulb,
  Megaphone,
  Smartphone,
  ArrowRight,
} from 'lucide-react';

const serviceIcons = [
  {
    key: 'software',
    icon: Code2,
    gradient: 'from-teal-500 to-teal-700',
    bgLight: 'bg-teal-50',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-100',
    shadowColor: 'hover:shadow-teal-100',
  },
  {
    key: 'websites',
    icon: Globe,
    gradient: 'from-slate-500 to-slate-700',
    bgLight: 'bg-slate-50',
    textColor: 'text-slate-600',
    borderColor: 'border-slate-200',
    shadowColor: 'hover:shadow-slate-100',
  },
  {
    key: 'ecommerce',
    icon: ShoppingBag,
    gradient: 'from-emerald-500 to-emerald-700',
    bgLight: 'bg-emerald-50',
    textColor: 'text-emerald-600',
    borderColor: 'border-emerald-100',
    shadowColor: 'hover:shadow-emerald-100',
  },
  {
    key: 'automation',
    icon: Zap,
    gradient: 'from-violet-500 to-violet-700',
    bgLight: 'bg-violet-50',
    textColor: 'text-violet-600',
    borderColor: 'border-violet-100',
    shadowColor: 'hover:shadow-violet-100',
  },
  {
    key: 'api',
    icon: Puzzle,
    gradient: 'from-teal-600 to-slate-600',
    bgLight: 'bg-teal-50',
    textColor: 'text-teal-600',
    borderColor: 'border-teal-100',
    shadowColor: 'hover:shadow-teal-100',
  },
  {
    key: 'consulting',
    icon: Lightbulb,
    gradient: 'from-amber-500 to-amber-700',
    bgLight: 'bg-amber-50',
    textColor: 'text-amber-600',
    borderColor: 'border-amber-100',
    shadowColor: 'hover:shadow-amber-100',
  },
  {
    key: 'marketing',
    icon: Megaphone,
    gradient: 'from-rose-500 to-pink-700',
    bgLight: 'bg-rose-50',
    textColor: 'text-rose-600',
    borderColor: 'border-rose-100',
    shadowColor: 'hover:shadow-rose-100',
  },
  {
    key: 'mobile',
    icon: Smartphone,
    gradient: 'from-indigo-500 to-violet-700',
    bgLight: 'bg-indigo-50',
    textColor: 'text-indigo-600',
    borderColor: 'border-indigo-100',
    shadowColor: 'hover:shadow-indigo-100',
  },
];

export function Services() {
  const t = useTranslations('services');

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent pointer-events-none" />
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full border border-teal-100 mb-4">
            <Zap className="w-3.5 h-3.5" />
            {t('badge')}
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4">
            {t('title')}{' '}
            <span className="bg-gradient-to-r from-teal-600 to-emerald-600 bg-clip-text text-transparent">
              {t('titleAccent')}
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-500 leading-relaxed">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceIcons.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.key}
                className={`group relative p-7 bg-white rounded-2xl border ${service.borderColor} shadow-sm hover:shadow-xl ${service.shadowColor} transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                onClick={scrollToContact}
              >
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  {t(`items.${service.key}.title`)}
                </h3>
                <p className="text-slate-500 leading-relaxed text-sm">
                  {t(`items.${service.key}.description`)}
                </p>

                <div className={`mt-5 flex items-center gap-1.5 ${service.textColor} text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity`}>
                  <span>Află mai multe</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>

                <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-xs font-bold text-slate-400">
                  {String(index + 1).padStart(2, '0')}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-14 text-center">
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-slate-700 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 transition-all duration-300"
          >
            Solicită o ofertă gratuită
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
