import { MetadataRoute } from 'next'
import { PORTFOLIO_DATA } from './core/config/portfolio'

export const dynamic = 'force-static'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${PORTFOLIO_DATA.profile.name} Portfolio`,
    short_name: PORTFOLIO_DATA.profile.name,
    description: PORTFOLIO_DATA.profile.hero.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/Assets/art-gallery/Images/logo/Mostafa.webp',
        sizes: '192x192',
        type: 'image/webp',
      },
      {
        src: '/Assets/art-gallery/Images/logo/Mostafa.webp',
        sizes: '512x512',
        type: 'image/webp',
      },
    ],
  }
}
