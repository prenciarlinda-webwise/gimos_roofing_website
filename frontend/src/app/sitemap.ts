import { MetadataRoute } from 'next'
import { blogPosts } from '@/lib/blogData'

// Required for static export
export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gimosroofing.com'

  // Main pages
  const mainPages = [
    { url: baseUrl, changeFrequency: 'weekly' as const, priority: 1.0, images: [`${baseUrl}/images/roofing-jacksonville-hero.webp`, `${baseUrl}/images/roofing-crew-installation-action.webp`] },
    { url: `${baseUrl}/about`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/contact`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/gallery`, changeFrequency: 'weekly' as const, priority: 0.7, images: [`${baseUrl}/images/church-roof-replacement-jacksonville-fl-aerial.webp`, `${baseUrl}/images/hotel-palms-commercial-roof-replacement-atlantic-beach-fl.webp`, `${baseUrl}/images/tile-roof-installation-jacksonville-fl.webp`] },
    { url: `${baseUrl}/service-areas`, changeFrequency: 'monthly' as const, priority: 0.7 },
    { url: `${baseUrl}/privacy-policy`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/terms-of-service`, changeFrequency: 'yearly' as const, priority: 0.3 },
    { url: `${baseUrl}/ai`, changeFrequency: 'monthly' as const, priority: 0.3 },
  ]

  // Service pages
  const servicePages = [
    { url: `${baseUrl}/services`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/emergency-roof-repair`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/roof-replacement`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/roof-repair`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/new-construction-roofing`, changeFrequency: 'monthly' as const, priority: 0.8, images: [`${baseUrl}/images/new-construction-roofing-jacksonville-fl-2.webp`, `${baseUrl}/images/new-construction-roofing-jacksonville-fl-3.webp`, `${baseUrl}/images/new-construction-roofing-jacksonville-fl-4.webp`] },
    { url: `${baseUrl}/services/commercial-roofing`, changeFrequency: 'monthly' as const, priority: 0.8, images: [`${baseUrl}/images/post-office-commercial-roofing-project-jacksonville-fl.webp`, `${baseUrl}/images/hotel-palms-commercial-roof-replacement-atlantic-beach-fl.webp`, `${baseUrl}/images/commercial-motel-roof-replacement-in-progress-florida.webp`] },
    { url: `${baseUrl}/services/siding-installation`, changeFrequency: 'monthly' as const, priority: 0.8, images: [`${baseUrl}/images/board-and-batten-siding-jacksonville-fl.webp`, `${baseUrl}/images/lap-siding-cement-board-jacksonville-fl.webp`, `${baseUrl}/images/cement-board-siding-jacksonville-fl.webp`, `${baseUrl}/images/vinyl-siding-installation-jacksonville-fl.webp`] },
    { url: `${baseUrl}/services/siding-repair`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/metal-roofing`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/roof-gutter`, changeFrequency: 'monthly' as const, priority: 0.9 },
    { url: `${baseUrl}/services/roof-waterproofing`, changeFrequency: 'monthly' as const, priority: 0.8 },
    { url: `${baseUrl}/services/chimney-repair`, changeFrequency: 'monthly' as const, priority: 0.8, images: [`${baseUrl}/images/chimney-cap-flashing-jacksonville-fl-2.webp`, `${baseUrl}/images/chimney-cap-replacement-jacksonville-fl.webp`, `${baseUrl}/images/chimney-cap-replacement-jacksonville-fl-2.webp`, `${baseUrl}/images/chimney-cap-flashing-jacksonville-fl.webp`] },
    { url: `${baseUrl}/services/roof-inspection`, changeFrequency: 'monthly' as const, priority: 0.8, images: [`${baseUrl}/images/roof-inspection-project-jacksonville-fl.webp`, `${baseUrl}/images/roof-inspection-and-repair-near-me-jacksonville-fl.webp`, `${baseUrl}/images/roof-inspection-near-me-jacksonville-fl.webp`] },
    { url: `${baseUrl}/services/skylight-installation`, changeFrequency: 'monthly' as const, priority: 0.7, images: [`${baseUrl}/images/two-story-home-skylights-roof.webp`] },
    { url: `${baseUrl}/roof-financing-florida`, changeFrequency: 'monthly' as const, priority: 0.8 },
  ]

  // Jacksonville main page (highest priority location)
  const jacksonvilleMainPage = [
    { url: `${baseUrl}/roofing-jacksonville-fl`, changeFrequency: 'weekly' as const, priority: 0.9 },
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
    'atlantic-beach',
    'neptune-beach',
  ].map((location) => ({
    url: `${baseUrl}/roofing-${location}-fl`,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }))

  // Blog pages - only include published posts (not future-scheduled)
  const now = new Date().toISOString()
  const publishedPosts = blogPosts.filter(post => {
    if (!post.publishDate) return true
    const pubDate = post.publishDate.includes('T') ? post.publishDate : post.publishDate + 'T00:00'
    return pubDate <= now
  })

  const blogPages = [
    { url: `${baseUrl}/blog`, changeFrequency: 'weekly' as const, priority: 0.8 },
    ...publishedPosts.map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
      lastModified: new Date(post.dateModified || post.date),
      ...(post.image ? { images: [`${baseUrl}${post.image}`] } : {}),
    })),
  ]

  return [...mainPages, ...servicePages, ...jacksonvilleMainPage, ...locationPages, ...blogPages]
}
