import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogData'

// Required for static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gimosroofing.com'

  // Main pages
  const mainPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0 },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/gallery`, changeFrequency: 'weekly' as const, priority: 0.7 },
    { url: `${baseUrl}/service-areas`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/sitemap`, changeFrequency: 'monthly' as const, priority: 0.5 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, changeFrequency: 'yearly' as const, priority: 0.3 },
  ]

  // Service pages
  const servicePages = [
    { url: `${baseUrl}/services`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/roof-replacement`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/roof-repair`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/new-construction-roofing`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/commercial-roofing`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/siding-installation`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/siding-repair`, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  // Location pages
  const locationPages = [
    'jacksonville-beach',
    'ponte-vedra-beach',
    'st-augustine',
    'orange-park',
    'fernandina-beach',
    'nocatee',
    'riverside',
    'san-marco',
    'mandarin',
    'southside-jax',
  ].map((location) => ({
    url: `${baseUrl}/roofing-${location}-fl`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog pages - automatically generated from blogData
  const blogPages = [
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...blogPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      lastModified: new Date(post.date),
    })),
  ]

  return [...mainPages, ...servicePages, ...locationPages, ...blogPages]
}
