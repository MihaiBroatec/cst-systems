'use client';

import { useEffect, useRef } from 'react';
import { useTranslations } from 'next-intl';
import { ArrowRight, ChevronDown, Sparkles, Zap, Globe2, ShieldCheck } from 'lucide-react';

const floatingIcons = [
  { icon: '⚡', x: '8%', y: '20%', delay: '0s', size: 'text-2xl' },
  { icon: '🚀', x: '90%', y: '15%', delay: '1s', size: 'text-3xl' },
  { icon: '💡', x: '5%', y: '70%', delay: '2s', size: 'text-2xl' },
  { icon: '🔧', x: '92%', y: '65%', delay: '0.5s', size: 'text-2xl' },
  { icon: '🌐', x: '50%', y: '8%', delay: '1.5s', size: 'text-2xl' },
  { icon: '💻', x: '15%', y: '45%', delay: '3s', size: 'text-xl' },
  { icon: '📱', x: '85%', y: '40%', delay: '2.5s', size: 'text-xl' },
];

const stats = [
  { icon: <Zap className="w-5 h-5" />, key: 'projects', value: '50+' },
  { icon: <Globe2 className="w-5 h-5" />, key: 'clients', value: '30+' },
  { icon: <ShieldCheck className="w-5 h-5" />, key: 'years', value: '5+' },
  { icon: <Sparkles className="w-5 h-5" />, key: 'support', value: '24/7' },
];

export function Hero() {
  const t = useTranslations('hero');
  const tStats = useTranslations('stats');
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width - 0.5;
      const y = (e.clientY - top) / height - 0.5;

      const orbs = containerRef.current.querySelectorAll('.orb');
      orbs.forEach((orb, i) => {
        const factor = (i + 1) * 15;
        (orb as HTMLElement).style.transform = `translate(${x * factor}px, ${y * factor}px)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToServices = () => {
    document.querySelector('#services')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="top"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950"
    >
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="orb absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl transition-transform duration-700 ease-out" />
        <div className="orb absolute bottom-1/4 right-1/4 w-80 h-80 bg-slate-600/20 rounded-full blur-3xl transition-transform duration-700 ease-out" />
        <div className="orb absolute top-1/2 left-1/2 w-64 h-64 bg-teal-400/10 rounded-full blur-3xl transition-transform duration-700 ease-out -translate-x-1/2 -translate-y-1/2" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Floating emoji icons */}
      {floatingIcons.map((item, i) => (
        <div
          key={i}
          className={`absolute ${item.size} select-none pointer-events-none opacity-15`}
          style={{
            left: item.x,
            top: item.y,
            animation: `float ${6 + i}s ease-in-out infinite`,
            animationDelay: item.delay,
          }}
        >
          {item.icon}
        </div>
      ))}

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/8 backdrop-blur-sm border border-white/15 rounded-full text-teal-300 text-sm font-medium mb-8 hover:bg-white/12 transition-colors">
          <Sparkles className="w-4 h-4" />
          <span>{t('badge')}</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-tight mb-6">
          <span className="block">{t('title')}</span>
          <span className="block mt-2 bg-gradient-to-r from-teal-300 via-emerald-300 to-teal-200 bg-clip-text text-transparent">
            {t('titleAccent')}
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-lg sm:text-xl text-slate-400 leading-relaxed mb-10">
          {t('subtitle')}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button
            onClick={scrollToContact}
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-800 text-white font-bold text-lg rounded-2xl hover:shadow-2xl hover:shadow-teal-900/50 hover:-translate-y-1 transition-all duration-300"
          >
            {t('cta')}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={scrollToServices}
            className="flex items-center gap-2 px-8 py-4 bg-white/8 backdrop-blur-sm border border-white/15 text-white font-semibold text-lg rounded-2xl hover:bg-white/15 hover:-translate-y-1 transition-all duration-300"
          >
            {t('ctaSecondary')}
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div
              key={stat.key}
              className="flex flex-col items-center gap-2 p-5 bg-white/8 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/12 transition-all duration-300 group"
            >
              <div className="text-teal-400 group-hover:scale-110 transition-transform">{stat.icon}</div>
              <div className="text-3xl font-extrabold text-white">{stat.value}</div>
              <div className="text-xs text-slate-500 text-center font-medium">{tStats(stat.key)}</div>
            </div>
          ))}
        </div>

        {/* Scroll indicator */}
        <button
          onClick={scrollToServices}
          className="mt-16 flex flex-col items-center gap-2 text-slate-500 hover:text-teal-400 transition-colors group mx-auto"
        >
          <span className="text-sm font-medium">{t('scrollDown')}</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </button>
      </div>
    </section>
  );
}
