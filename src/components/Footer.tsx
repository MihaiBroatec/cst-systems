'use client';

import { useTranslations } from 'next-intl';
import { Code2, MapPin, Mail, Phone, GitFork, ExternalLink, Share } from 'lucide-react';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('nav');

  const currentYear = new Date().getFullYear();

  const scrollTo = (href: string) => {
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const navLinks = [
    { label: tNav('home'), href: '#top' },
    { label: tNav('services'), href: '#services' },
    { label: tNav('about'), href: '#about' },
    { label: tNav('technologies'), href: '#technologies' },
    { label: tNav('portfolio'), href: '#portfolio' },
    { label: tNav('contact'), href: '#contact' },
  ];

  const services = [
    'Software Custom',
    'Site-uri Web',
    'Magazine Online',
    'Automatizare',
    'API & Integrări',
    'Consultanță IT',
  ];

  return (
    <footer className="bg-slate-950 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <button onClick={() => scrollTo('#top')} className="flex items-center gap-2.5 mb-4 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-600 to-slate-700 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">CST</span>
                <span className="text-teal-400"> Systems</span>
              </span>
            </button>
            <p className="text-sm leading-relaxed mb-6 text-slate-500">
              {t('description')}
            </p>
            <div className="flex gap-3">
              {[
                { icon: GitFork, href: '#', label: 'GitHub' },
                { icon: ExternalLink, href: '#', label: 'LinkedIn' },
                { icon: Share, href: '#', label: 'Social' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-teal-600 transition-all duration-200"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              {t('links')}
            </h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-sm text-slate-500 hover:text-teal-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-teal-400 transition-colors" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              {t('services')}
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <button
                    onClick={() => scrollTo('#services')}
                    className="text-sm text-slate-500 hover:text-teal-400 transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-slate-700 group-hover:bg-teal-400 transition-colors" />
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-5">
              {t('contact')}
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-teal-500 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-sm text-slate-400">Târgu Mureș, România</div>
                  <div className="text-xs text-slate-600">Lucrăm global</div>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <a
                  href="mailto:hello@cst-systems.ro"
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  hello@cst-systems.ro
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-teal-500 flex-shrink-0" />
                <a
                  href="tel:+40748793253"
                  className="text-sm text-slate-400 hover:text-teal-400 transition-colors"
                >
                  0748 793 253
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex flex-col gap-1">
              <p className="text-xs text-slate-600">
                © {currentYear} CST Systems. {t('rights')}
              </p>
              <p className="text-xs text-slate-700">
                CREATIVE SOFT TECHNOLOGY SRL &middot; CUI: 47799410 &middot; J26/426/2023
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-3">
                <a
                  href="https://reclamatiisal.anpc.ro/"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sal.png"
                    alt="Soluționarea Alternativă a Litigiilor"
                    className="w-24 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
                <a
                  href="https://ec.europa.eu/consumers/odr"
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="hover:opacity-75 transition-opacity"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://wpfitness.eu/wp-content/uploads/2022/10/anpc-sol.png"
                    alt="Soluționarea Online a Litigiilor"
                    className="w-24 opacity-80 hover:opacity-100 transition-opacity"
                  />
                </a>
              </div>
              <div className="flex items-center gap-4">
                <button className="text-xs text-slate-600 hover:text-teal-400 transition-colors">
                  {t('privacy')}
                </button>
                <button className="text-xs text-slate-600 hover:text-teal-400 transition-colors">
                  {t('terms')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
