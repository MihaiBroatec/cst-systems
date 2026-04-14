'use client';

import { useTranslations } from 'next-intl';
import { Briefcase, ExternalLink, ArrowRight, Sparkles } from 'lucide-react';

const clients = [
  {
    key: 'rava',
    url: 'https://ravapilates.ro',
    emoji: '🧘',
    gradient: 'from-rose-500 to-pink-700',
    tag: 'bg-rose-100 text-rose-700',
    logo: null,
  },
  {
    key: 'leclub',
    url: 'https://leclub.ro',
    emoji: '🍸',
    gradient: 'from-amber-500 to-orange-700',
    tag: 'bg-amber-100 text-amber-700',
    logo: '/logos/logo-leclub.svg',
  },
  {
    key: 'ursadmin',
    url: 'https://ursadmin.ro',
    emoji: '⚙️',
    gradient: 'from-slate-600 to-slate-800',
    tag: 'bg-slate-100 text-slate-700',
    logo: '/logos/logo-ursadmin.svg',
  },
  {
    key: 'activitati',
    url: 'https://activitatiextrascolare.ro',
    emoji: '🎨',
    gradient: 'from-violet-500 to-purple-700',
    tag: 'bg-violet-100 text-violet-700',
    logo: null,
  },
  {
    key: 'studentconsulting',
    url: 'https://studentconsulting.ro',
    emoji: '🎓',
    gradient: 'from-teal-500 to-teal-700',
    tag: 'bg-teal-100 text-teal-700',
    logo: '/logos/logo-studentconsulting.png',
  },
  {
    key: 'smartstudent',
    url: 'https://smartstudent.ro',
    emoji: '📱',
    gradient: 'from-emerald-500 to-emerald-700',
    tag: 'bg-emerald-100 text-emerald-700',
    logo: '/logos/logo-smartstudent.svg',
  },
  {
    key: 'bioinfoCluster',
    url: 'https://bioinfocluster.ro',
    emoji: '🔬',
    gradient: 'from-cyan-600 to-slate-700',
    tag: 'bg-cyan-100 text-cyan-700',
    logo: '/logos/logo-bioinfocluster.svg',
  },
  {
    key: 'fereze',
    url: 'https://fereze.com',
    emoji: '🤝',
    gradient: 'from-indigo-500 to-slate-700',
    tag: 'bg-indigo-100 text-indigo-700',
    logo: null,
  },
  {
    key: 'stefimenaRT',
    url: 'https://stefi-lemnart.ro',
    emoji: '🎨',
    gradient: 'from-fuchsia-500 to-pink-700',
    tag: 'bg-fuchsia-100 text-fuchsia-700',
    logo: null,
  },
];

const products = [
  {
    key: 'gym',
    url: 'https://trywidgetgym.cst-systems.ro',
    emoji: '🏋️',
    gradient: 'from-teal-600 to-slate-700',
    tag: 'bg-teal-100 text-teal-700',
    badge: '⚡ Live',
  },
  {
    key: 'beauty',
    url: 'https://trybeauty.cst-systems.ro',
    emoji: '💅',
    gradient: 'from-pink-500 to-rose-700',
    tag: 'bg-pink-100 text-pink-700',
    badge: '⚡ Live',
  },
];

export function Portfolio() {
  const t = useTranslations('portfolio');

  return (
    <section id="portfolio" className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-72 h-72 bg-teal-100 rounded-full blur-3xl opacity-40" />
        <div className="absolute bottom-1/3 left-0 w-72 h-72 bg-slate-200 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full border border-teal-100 mb-4">
            <Briefcase className="w-3.5 h-3.5" />
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

        {/* ── Clients carousel ── */}
        <h3 className="text-lg font-bold text-slate-700 mb-6 flex items-center gap-2">
          <span className="w-6 h-0.5 bg-teal-500 rounded" />
          {t('clientsTitle')}
        </h3>

        <div className="relative mb-16">
          {/* Fade masks */}
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />

          {/* Scrolling track */}
          <div className="overflow-hidden">
            <div className="flex gap-4 w-max animate-marquee">
              {/* Original set + duplicate for seamless loop */}
              {[...clients, ...clients].map((client, i) => (
                <a
                  key={`${client.key}-${i}`}
                  href={client.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3.5 w-56 flex-shrink-0 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 p-4 cursor-pointer"
                >
                  {/* Icon */}
                  {client.logo ? (
                    <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm border border-slate-100 overflow-hidden p-1.5">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={client.logo}
                        alt={client.key}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  ) : (
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${client.gradient} flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                      {client.emoji}
                    </div>
                  )}

                  {/* Text */}
                  <div className="min-w-0 flex-1">
                    <div className="text-sm font-bold text-slate-900 truncate group-hover:text-teal-600 transition-colors">
                      {t(`clients.${client.key}.title`)}
                    </div>
                    <div className={`text-xs font-semibold px-2 py-0.5 rounded-full ${client.tag} inline-block mt-1 truncate max-w-full`}>
                      {t(`clients.${client.key}.category`)}
                    </div>
                  </div>

                  {/* Arrow */}
                  <ExternalLink className="w-3.5 h-3.5 text-slate-300 group-hover:text-teal-500 flex-shrink-0 transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── Our Products ── */}
        <div className="bg-slate-950 rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          {/* Background orbs */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-teal-500/8 rounded-full blur-3xl pointer-events-none" />

          <div className="relative">
            <div className="flex items-center gap-3 mb-2">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-teal-500/20 text-teal-400 text-xs font-bold rounded-full border border-teal-500/30">
                <Sparkles className="w-3 h-3" />
                CST Systems Original
              </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-2">
              {t('productsTitle')}
            </h3>
            <p className="text-slate-400 text-base mb-10 max-w-lg">
              {t('productsSubtitle')}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {products.map((product) => (
                <div
                  key={product.key}
                  className="group bg-white/8 backdrop-blur-sm border border-white/12 rounded-2xl overflow-hidden hover:bg-white/12 transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Product header */}
                  <div className={`h-36 bg-gradient-to-br ${product.gradient} flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute -top-8 -right-8 w-32 h-32 bg-white/10 rounded-full" />
                    <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full" />
                    <span className="text-6xl group-hover:scale-110 transition-transform duration-300 relative z-10">
                      {product.emoji}
                    </span>
                    <span className="absolute top-3 right-3 px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-bold rounded-full border border-white/30">
                      {product.badge}
                    </span>
                  </div>

                  {/* Product content */}
                  <div className="p-6">
                    <span className={`inline-block px-2.5 py-1 rounded-full text-xs font-bold ${product.tag} mb-3`}>
                      {t(`products.${product.key}.category`)}
                    </span>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {t(`products.${product.key}.title`)}
                    </h4>
                    <p className="text-slate-400 text-sm leading-relaxed mb-5">
                      {t(`products.${product.key}.description`)}
                    </p>
                    <a
                      href={product.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-teal-600 hover:bg-teal-500 text-white text-sm font-bold rounded-xl transition-all duration-200 group/btn"
                    >
                      {t('tryProduct')}
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
