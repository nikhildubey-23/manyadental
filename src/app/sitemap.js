export default function sitemap() {
  const base = 'https://manyadentalbilaspur.in'
  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${base}/logo.png`],
    },
    {
      url: `${base}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
      images: [`${base}/logo.png`],
    },
    {
      url: `${base}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [`${base}/logo.png`],
    },
    {
      url: `${base}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [`${base}/logo.png`],
    },
  ]
}
