'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, Code2, Globe } from 'lucide-react';

export function Navbar() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLocale = () => {
    const newLocale = locale === 'ro' ? 'en' : 'ro';
    const newPath = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const navLinks = [
    { label: t('home'), href: '#top' },
    { label: t('services'), href: '#services' },
    { label: t('about'), href: '#about' },
    { label: t('technologies'), href: '#technologies' },
    { label: t('portfolio'), href: '#portfolio' },
    { label: t('contact'), href: '#contact' },
  ];

  const scrollTo = (href: string) => {
    setIsOpen(false);
    if (href === '#top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg shadow-lg shadow-slate-200/50 border-b border-slate-100'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollTo('#top')}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-teal-600 to-slate-700 flex items-center justify-center shadow-md group-hover:shadow-teal-200 transition-shadow">
              <Code2 className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">
              <span className="text-slate-900">CST</span>
              <span className="text-teal-600"> Systems</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-teal-600 rounded-lg hover:bg-teal-50 transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50 transition-all duration-200"
            >
              <Globe className="w-4 h-4" />
              <span>{locale === 'ro' ? 'EN' : 'RO'}</span>
            </button>

            <button
              onClick={() => scrollTo('#contact')}
              className="px-5 py-2.5 bg-gradient-to-r from-teal-600 to-slate-700 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 transition-all duration-200"
            >
              {t('cta')}
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={toggleLocale}
              className="flex items-center gap-1 px-2 py-1.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-teal-50 transition-all"
            >
              <Globe className="w-4 h-4" />
              <span>{locale === 'ro' ? 'EN' : 'RO'}</span>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white rounded-2xl shadow-xl shadow-slate-200 border border-slate-100 p-4 mt-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="w-full text-left px-4 py-3 text-sm font-medium text-slate-600 hover:text-teal-600 hover:bg-teal-50 rounded-xl transition-all duration-200"
              >
                {link.label}
              </button>
            ))}
            <div className="mt-3 pt-3 border-t border-slate-100">
              <button
                onClick={() => scrollTo('#contact')}
                className="w-full px-4 py-3 bg-gradient-to-r from-teal-600 to-slate-700 text-white text-sm font-semibold rounded-xl hover:shadow-md transition-all"
              >
                {t('cta')}
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
