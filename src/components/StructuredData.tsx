export function StructuredData({ locale }: { locale: string }) {
  const isRo = locale === 'ro';
  const baseUrl = 'https://cst-systems.ro';

  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${baseUrl}/#organization`,
    name: 'CST Systems',
    alternateName: 'CST Systems SRL',
    url: baseUrl,
    logo: {
      '@type': 'ImageObject',
      url: `${baseUrl}/logo.png`,
      width: 200,
      height: 60,
    },
    email: 'hello@cst-systems.ro',
    telephone: '+40748793253',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Târgu Mureș',
      addressRegion: 'Mureș',
      addressCountry: 'RO',
      postalCode: '540000',
    },
    description: isRo
      ? 'Companie IT din Târgu Mureș specializată în software custom, site-uri web, magazine online și automatizare pentru afaceri din România și din întreaga lume.'
      : 'IT company from Târgu Mureș, Romania, specialized in custom software, websites, e-commerce and automation for businesses worldwide.',
    foundingLocation: {
      '@type': 'Place',
      name: 'Târgu Mureș, România',
    },
    areaServed: {
      '@type': 'Place',
      name: 'Worldwide',
    },
    knowsLanguage: ['ro', 'en'],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+40748793253',
        email: 'hello@cst-systems.ro',
        contactType: 'customer service',
        availableLanguage: ['Romanian', 'English'],
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
          opens: '09:00',
          closes: '18:00',
        },
      },
    ],
    sameAs: [
      'https://www.linkedin.com/company/cst-systems',
    ],
  };

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'ProfessionalService'],
    '@id': `${baseUrl}/#localbusiness`,
    name: 'CST Systems',
    image: `${baseUrl}/og-image.png`,
    url: baseUrl,
    telephone: '+40748793253',
    email: 'hello@cst-systems.ro',
    priceRange: '$$',
    currenciesAccepted: 'RON, EUR',
    paymentAccepted: 'Bank Transfer, Card',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Târgu Mureș',
      addressRegion: 'Mureș',
      addressCountry: 'RO',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 46.5386,
      longitude: 24.5633,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    description: isRo
      ? 'CST Systems oferă servicii IT profesionale: software custom, site-uri de prezentare, magazine online, automatizare și consultanță.'
      : 'CST Systems offers professional IT services: custom software, presentation websites, online stores, automation and consulting.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: isRo ? 'Servicii IT' : 'IT Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isRo ? 'Software Custom' : 'Custom Software Development',
            description: isRo
              ? 'Aplicații software personalizate pentru nevoile afacerii tale'
              : 'Tailored software applications for your business needs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isRo ? 'Site-uri de Prezentare' : 'Presentation Websites',
            description: isRo
              ? 'Site-uri web moderne, rapide și optimizate SEO'
              : 'Modern, fast and SEO-optimized websites',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isRo ? 'Magazine Online' : 'E-commerce / Online Stores',
            description: isRo
              ? 'Platforme complete de e-commerce cu plăți integrate'
              : 'Complete e-commerce platforms with integrated payments',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isRo ? 'Automatizare Servicii' : 'Service Automation',
            description: isRo
              ? 'Automatizarea proceselor de afaceri pentru eficiență maximă'
              : 'Business process automation for maximum efficiency',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isRo ? 'API & Integrări' : 'API & Integrations',
            description: isRo
              ? 'Integrarea sistemelor cu servicii externe și API-uri'
              : 'System integrations with external services and APIs',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: isRo ? 'Consultanță IT' : 'IT Consulting',
            description: isRo
              ? 'Consultanță tehnică și strategie digitală pentru afacerea ta'
              : 'Technical consulting and digital strategy for your business',
          },
        },
      ],
    },
  };

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${baseUrl}/#website`,
    name: 'CST Systems',
    url: baseUrl,
    description: isRo
      ? 'Soluții IT profesionale din Târgu Mureș, România'
      : 'Professional IT solutions from Târgu Mureș, Romania',
    publisher: {
      '@id': `${baseUrl}/#organization`,
    },
    inLanguage: [
      { '@type': 'Language', name: 'Romanian', alternateName: 'ro' },
      { '@type': 'Language', name: 'English', alternateName: 'en' },
    ],
  };

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: isRo
      ? [
          {
            '@type': 'Question',
            name: 'Ce servicii IT oferă CST Systems?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CST Systems oferă: software custom, site-uri de prezentare, magazine online (e-commerce), automatizare servicii, API & integrări și consultanță IT pentru afaceri din România și din întreaga lume.',
            },
          },
          {
            '@type': 'Question',
            name: 'Unde se află CST Systems?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CST Systems este localizată în Târgu Mureș, România, dar lucrăm cu clienți din toată lumea — online, fără limite geografice.',
            },
          },
          {
            '@type': 'Question',
            name: 'Cum pot contacta CST Systems?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Ne puteți contacta prin email la hello@cst-systems.ro sau telefonic la 0748 793 253, de luni până vineri între orele 9:00 și 18:00.',
            },
          },
          {
            '@type': 'Question',
            name: 'CST Systems lucrează cu clienți din afara României?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Da, CST Systems lucrează cu clienți din întreaga lume. Oferim servicii în limba română și engleză și colaborăm cu echipe internaționale.',
            },
          },
        ]
      : [
          {
            '@type': 'Question',
            name: 'What IT services does CST Systems offer?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CST Systems offers: custom software development, presentation websites, e-commerce / online stores, service automation, API & integrations, and IT consulting for businesses in Romania and worldwide.',
            },
          },
          {
            '@type': 'Question',
            name: 'Where is CST Systems located?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'CST Systems is based in Târgu Mureș, Romania, but we work with clients worldwide — fully online, with no geographic limitations.',
            },
          },
          {
            '@type': 'Question',
            name: 'How can I contact CST Systems?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'You can reach us by email at hello@cst-systems.ro or by phone at +40 748 793 253, Monday to Friday between 9:00 and 18:00.',
            },
          },
          {
            '@type': 'Question',
            name: 'Does CST Systems work with international clients?',
            acceptedAnswer: {
              '@type': 'Answer',
              text: 'Yes, CST Systems works with clients worldwide. We offer services in Romanian and English and collaborate with international teams.',
            },
          },
        ],
  };

  const schemas = [organization, localBusiness, website, faq];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
