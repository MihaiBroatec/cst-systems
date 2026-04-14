import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { StructuredData } from '@/components/StructuredData';
import '../globals.css';

const inter = Inter({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-inter',
  display: 'swap',
});

const BASE_URL = 'https://cst-systems.ro';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isRo = locale === 'ro';

  const title = isRo
    ? 'CST Systems — Software Custom, Site-uri Web & Magazine Online | Târgu Mureș'
    : 'CST Systems — Custom Software, Websites & E-commerce | Târgu Mureș, Romania';

  const description = isRo
    ? 'CST Systems — companie IT din Târgu Mureș, România. Creăm software custom, site-uri de prezentare, magazine online, automatizare și soluții IT pentru afaceri din România și din întreaga lume. Contactează-ne: hello@cst-systems.ro | 0748 793 253.'
    : 'CST Systems — IT company from Târgu Mureș, Romania. We build custom software, presentation websites, online stores, automation solutions and IT consulting for businesses worldwide. Contact: hello@cst-systems.ro | +40 748 793 253.';

  const keywords = isRo
    ? [
        'software custom Romania',
        'dezvoltare software Târgu Mureș',
        'site web Târgu Mureș',
        'site prezentare firma',
        'magazin online Romania',
        'e-commerce Romania',
        'automatizare procese business',
        'aplicatii web custom',
        'firma IT Târgu Mureș',
        'firma IT Romania',
        'consultanta IT Romania',
        'programare web Romania',
        'Next.js Romania',
        'React developer Romania',
        'Node.js Romania',
        'CST Systems',
        'CST Systems Târgu Mureș',
        'web development Romania',
        'integrari API Romania',
      ]
    : [
        'custom software development Romania',
        'web development Târgu Mureș',
        'IT company Romania',
        'software company Târgu Mureș',
        'website development Romania',
        'e-commerce development Romania',
        'online store Romania',
        'business automation Romania',
        'custom web applications',
        'IT consulting Romania',
        'React developer Romania',
        'Next.js developer Romania',
        'software outsourcing Romania',
        'API integration services',
        'CST Systems',
        'CST Systems Romania',
      ];

  return {
    metadataBase: new URL(BASE_URL),

    title: {
      default: title,
      template: `%s | CST Systems`,
    },
    description,
    keywords,

    authors: [{ name: 'CST Systems', url: BASE_URL }],
    creator: 'CST Systems',
    publisher: 'CST Systems',

    // Prevent auto-detection that could break layout
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },

    // Open Graph
    openGraph: {
      type: 'website',
      locale: isRo ? 'ro_RO' : 'en_US',
      alternateLocale: isRo ? 'en_US' : 'ro_RO',
      url: `${BASE_URL}/${locale}`,
      siteName: 'CST Systems',
      title,
      description,
      images: [
        {
          url: `${BASE_URL}/og-image.png`,
          width: 1200,
          height: 630,
          alt: isRo
            ? 'CST Systems — Soluții IT din Târgu Mureș'
            : 'CST Systems — IT Solutions from Târgu Mureș',
          type: 'image/png',
        },
      ],
    },

    // Twitter / X card
    twitter: {
      card: 'summary_large_image',
      site: '@cstsystems',
      creator: '@cstsystems',
      title,
      description,
      images: [`${BASE_URL}/og-image.png`],
    },

    // Canonical + hreflang
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
      languages: {
        'ro': `${BASE_URL}/ro`,
        'en': `${BASE_URL}/en`,
        'x-default': `${BASE_URL}/ro`,
      },
    },

    // Robots
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // App metadata
    applicationName: 'CST Systems',
    category: 'technology',

    // Verification (add your codes here when available)
    // verification: {
    //   google: 'your-google-search-console-code',
    //   yandex: 'your-yandex-code',
    // },
  };
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'ro' | 'en')) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.variable}>
      <head>
        <StructuredData locale={locale} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <meta name="geo.region" content="RO-MS" />
        <meta name="geo.placename" content="Târgu Mureș" />
        <meta name="geo.position" content="46.5386;24.5633" />
        <meta name="ICBM" content="46.5386, 24.5633" />
        <meta name="contact" content="hello@cst-systems.ro" />
        <meta name="reply-to" content="hello@cst-systems.ro" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="language" content={locale === 'ro' ? 'Romanian' : 'English'} />
        <meta name="copyright" content="CST Systems" />
        <meta property="business:contact_data:email" content="hello@cst-systems.ro" />
        <meta property="business:contact_data:phone_number" content="+40748793253" />
        <meta property="business:contact_data:locality" content="Târgu Mureș" />
        <meta property="business:contact_data:country_name" content="Romania" />
      </head>
      <body className="min-h-screen bg-slate-50 antialiased">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
