'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { MapPin, Mail, Phone, Send, CheckCircle, MessageCircle, AlertCircle } from 'lucide-react';

export function Contact() {
  const t = useTranslations('contact');
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? 'Eroare la trimitere. Încearcă din nou.');
      } else {
        setSubmitted(true);
        setFormState({ name: '', email: '', subject: '', message: '' });
      }
    } catch {
      setError('Eroare de rețea. Contactează-ne direct la hello@cst-systems.ro');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      label: t('info.location'),
      sub: t('info.locationSub'),
      gradient: 'from-teal-500 to-teal-700',
    },
    {
      icon: Mail,
      label: t('info.email'),
      sub: t('info.emailSub'),
      gradient: 'from-slate-500 to-slate-700',
    },
    {
      icon: Phone,
      label: t('info.phone'),
      sub: t('info.phoneSub'),
      gradient: 'from-teal-600 to-slate-700',
    },
  ];

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-slate-50 to-transparent" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-teal-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute -top-20 right-0 w-80 h-80 bg-slate-100 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-teal-50 text-teal-600 text-sm font-semibold rounded-full border border-teal-100 mb-4">
            <MessageCircle className="w-3.5 h-3.5" />
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

        <div className="grid lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2 space-y-5">
            {contactInfo.map(({ icon: Icon, label, sub, gradient }) => (
              <div
                key={label}
                className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100 hover:shadow-md transition-all duration-300"
              >
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0 shadow-md`}
                >
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-bold text-slate-900 text-sm">{label}</div>
                  <div className="text-slate-500 text-xs mt-0.5">{sub}</div>
                </div>
              </div>
            ))}

            <div className="p-5 bg-gradient-to-br from-teal-600 to-teal-800 rounded-2xl text-white">
              <h3 className="font-bold text-lg mb-2">Răspundem rapid ⚡</h3>
              <p className="text-teal-100 text-sm leading-relaxed">
                De obicei răspundem în mai puțin de 24 de ore. Proiectul tău merită atenție imediată!
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl border border-slate-100 shadow-xl shadow-slate-100 p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-teal-50 flex items-center justify-center mb-5">
                    <CheckCircle className="w-10 h-10 text-teal-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {t('form.success')}
                  </h3>
                  <p className="text-slate-500">
                    Îți vom răspunde în cel mai scurt timp posibil.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 px-6 py-2.5 border-2 border-teal-600 text-teal-600 rounded-xl font-semibold hover:bg-teal-600 hover:text-white transition-all"
                  >
                    Trimite alt mesaj
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {t('form.name')} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) => setFormState((s) => ({ ...s, name: e.target.value }))}
                        placeholder={t('form.namePlaceholder')}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">
                        {t('form.email')} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formState.email}
                        onChange={(e) => setFormState((s) => ({ ...s, email: e.target.value }))}
                        placeholder={t('form.emailPlaceholder')}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all text-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('form.subject')} *
                    </label>
                    <input
                      type="text"
                      required
                      value={formState.subject}
                      onChange={(e) => setFormState((s) => ({ ...s, subject: e.target.value }))}
                      placeholder={t('form.subjectPlaceholder')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-slate-700 mb-2">
                      {t('form.message')} *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formState.message}
                      onChange={(e) => setFormState((s) => ({ ...s, message: e.target.value }))}
                      placeholder={t('form.messagePlaceholder')}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent transition-all text-sm resize-none"
                    />
                  </div>

                  {error && (
                    <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                      <AlertCircle className="w-4 h-4 mt-0.5 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-teal-600 to-slate-700 text-white font-bold rounded-xl hover:shadow-lg hover:shadow-teal-200 hover:-translate-y-0.5 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 transition-all duration-300"
                  >
                    {loading ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        {t('form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        {t('form.send')}
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
