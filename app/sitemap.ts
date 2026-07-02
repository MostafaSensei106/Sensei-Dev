import { MetadataRoute } from 'next'
import { PORTFOLIO_DATA } from './core/config/portfolio'

export default function sitemap(): MetadataRoute.Sitemap {
  // We can dynamically add routes if you had multiple pages
  // But for a single page portfolio, we define the root
  return [
    {
      url: 'https://mostafa-mahmoud.dev',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    // Adding hypothetical inner hash routes to help with deep linking visibility
    {
      url: 'https://mostafa-mahmoud.dev/#projects',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://mostafa-mahmoud.dev/#experience',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    }
  ]
}
