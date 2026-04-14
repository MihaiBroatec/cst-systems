import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://cst-systems.ro';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          ro: `${baseUrl}/ro`,
          en: `${baseUrl}/en`,
        },
      },
    },
    {
      url: `${baseUrl}/ro`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ];
}
