'use client';

import { useTranslations } from 'next-intl';
import { CheckCircle2, Award, Users, Globe2, Headphones, MapPin } from 'lucide-react';

const valueIcons = {
  quality: Award,
  speed: CheckCircle2,
  support: Headphones,
  global: Globe2,
};

export function About() {
  const t = useTranslations('about');

  return (
    <section id="about" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-teal-500/8 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-96 h-96 bg-teal-500/6 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)`,
            backgroundSize: '30px 30px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-500/15 text-teal-400 text-sm font-semibold rounded-full border border-teal-500/25 mb-6">
              <Users className="w-3.5 h-3.5" />
              {t('badge')}
            </span>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
              {t('title')}{' '}
              <span className="bg-gradient-to-r from-teal-300 to-emerald-300 bg-clip-text text-transparent">
                {t('titleAccent')}
              </span>
            </h2>

            <p className="text-slate-400 text-lg leading-relaxed mb-5">
              {t('paragraph1')}
            </p>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              {t('paragraph2')}
            </p>

            <div className="inline-flex items-center gap-2 px-5 py-3 bg-white/8 backdrop-blur-sm border border-white/15 rounded-2xl text-white">
              <MapPin className="w-5 h-5 text-teal-400" />
              <div>
                <div className="text-sm font-bold">Târgu Mureș, România</div>
                <div className="text-xs text-slate-500">Lucrăm global 🌍</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {(Object.keys(valueIcons) as Array<keyof typeof valueIcons>).map((key) => {
              const Icon = valueIcons[key];
              return (
                <div
                  key={key}
                  className="group p-6 bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-500/15 border border-teal-500/25 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6 text-teal-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-2">
                    {t(`values.${key}.title`)}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {t(`values.${key}.description`)}
                  </p>
                </div>
              );
            })}

            <div className="sm:col-span-2 p-5 bg-slate-950/80 backdrop-blur-sm border border-slate-700/60 rounded-2xl font-mono text-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/70" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
                <div className="w-3 h-3 rounded-full bg-green-500/70" />
                <span className="ml-2 text-slate-600 text-xs">cst-systems.ts</span>
              </div>
              <div className="space-y-1">
                <div><span className="text-violet-400">const</span> <span className="text-teal-400">company</span> = {'{'}</div>
                <div className="ml-4"><span className="text-green-400">name</span>: <span className="text-amber-300">&quot;CST Systems&quot;</span>,</div>
                <div className="ml-4"><span className="text-green-400">location</span>: <span className="text-amber-300">&quot;Târgu Mureș, RO&quot;</span>,</div>
                <div className="ml-4"><span className="text-green-400">reach</span>: <span className="text-amber-300">&quot;Worldwide 🌍&quot;</span>,</div>
                <div className="ml-4"><span className="text-green-400">passion</span>: <span className="text-amber-300">&quot;Building great software&quot;</span></div>
                <div>{'}'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
