// Shared page index used by both /sitemap (human-readable directory) and /search
// (the site's actual search feature, and the target of the WebSite SearchAction
// schema in layout.tsx). Single source of truth so the two never drift apart.

import { blogPosts as allBlogPosts } from './blogData'

export interface SearchEntry {
  title: string
  href: string
  description: string
  category: 'Page' | 'Service' | 'Location' | 'Blog'
}

export const mainPages: SearchEntry[] = [
  { title: "Home", href: "/", description: "Gimo's Roofing, Jacksonville FL's licensed roofing contractor since 2001.", category: 'Page' },
  { title: "About Us", href: "/about", description: "Meet Gimo's Roofing, our story, and our credentials.", category: 'Page' },
  { title: "Services", href: "/services", description: "Every roofing and siding service Gimo's Roofing offers.", category: 'Page' },
  { title: "Gallery", href: "/gallery", description: "Video of real Gimo's Roofing jobs across Jacksonville.", category: 'Page' },
  { title: "Service Areas", href: "/service-areas", description: "Every city and neighborhood Gimo's Roofing serves.", category: 'Page' },
  { title: "Contact", href: "/contact", description: "Get in touch with Gimo's Roofing for a free estimate.", category: 'Page' },
  { title: "Blog", href: "/blog", description: "Roofing guides, cost breakdowns, and Florida-specific advice.", category: 'Page' },
  { title: "For AI Agents", href: "/ai", description: "Machine-readable resources and agent routing rules.", category: 'Page' },
]

export const servicePages: SearchEntry[] = [
  { title: "Emergency Roof Repair", href: "/services/emergency-roof-repair", description: "24/7 emergency roof repair for active leaks and storm damage in Jacksonville FL.", category: 'Service' },
  { title: "Roof Replacement", href: "/services/roof-replacement", description: "Full tear-off roof replacement with shingle, metal, or tile roofing.", category: 'Service' },
  { title: "Roof Repair", href: "/services/roof-repair", description: "Roof repair for leaks, damaged shingles, flashing, and storm damage.", category: 'Service' },
  { title: "New Construction Roofing", href: "/services/new-construction-roofing", description: "Roofing for new home builds and additions across Northeast Florida.", category: 'Service' },
  { title: "Commercial Roofing", href: "/services/commercial-roofing", description: "Flat roof, metal roofing, and TPO systems for Jacksonville businesses.", category: 'Service' },
  { title: "Siding Installation", href: "/services/siding-installation", description: "Vinyl, fiber cement, and Hardie board siding installation.", category: 'Service' },
  { title: "Siding Repair", href: "/services/siding-repair", description: "Siding repair for storm damage and worn panels.", category: 'Service' },
  { title: "Metal Roofing", href: "/services/metal-roofing", description: "Standing seam, 5V crimp, and corrugated metal roof installation.", category: 'Service' },
  { title: "Gutter Installation, Repair & Replacement", href: "/services/roof-gutter", description: "Seamless aluminum gutters, guards, and repair for Florida rainfall.", category: 'Service' },
  { title: "Roof Waterproofing", href: "/services/roof-waterproofing", description: "Roof coatings, membranes, and sealant for flat and low-slope roofs.", category: 'Service' },
  { title: "Chimney Repair", href: "/services/chimney-repair", description: "Chimney cap replacement, flashing repair, and repointing.", category: 'Service' },
  { title: "Roof Inspection", href: "/services/roof-inspection", description: "Free roof inspections with photo documentation.", category: 'Service' },
  { title: "Skylight Installation", href: "/services/skylight-installation", description: "Skylight installation flashed and sealed to hurricane-code standard.", category: 'Service' },
  { title: "Roof Financing", href: "/roof-financing-florida", description: "Roof financing with $0 down and low monthly payments.", category: 'Service' },
]

export const locationPages: SearchEntry[] = [
  { title: "Jacksonville", href: "/roofing-jacksonville-fl", description: "Roofing company serving Jacksonville, FL.", category: 'Location' },
  { title: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl", description: "Roofing serving Jacksonville Beach, FL.", category: 'Location' },
  { title: "Atlantic Beach", href: "/roofing-atlantic-beach-fl", description: "Roofing serving Atlantic Beach, FL.", category: 'Location' },
  { title: "Neptune Beach", href: "/roofing-neptune-beach-fl", description: "Roofing serving Neptune Beach, FL.", category: 'Location' },
  { title: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl", description: "Roofing serving Ponte Vedra Beach, FL.", category: 'Location' },
  { title: "Nocatee", href: "/roofing-nocatee-fl", description: "Roofing serving Nocatee, FL.", category: 'Location' },
  { title: "St. Augustine", href: "/roofing-st-augustine-fl", description: "Roofing serving St. Augustine, FL.", category: 'Location' },
  { title: "Orange Park", href: "/roofing-orange-park-fl", description: "Roofing serving Orange Park, FL.", category: 'Location' },
  { title: "Fernandina Beach", href: "/roofing-fernandina-beach-fl", description: "Roofing serving Fernandina Beach, FL.", category: 'Location' },
  { title: "Riverside", href: "/roofing-riverside-fl", description: "Roofing serving Riverside, Jacksonville FL.", category: 'Location' },
  { title: "San Marco", href: "/roofing-san-marco-fl", description: "Roofing serving San Marco, Jacksonville FL.", category: 'Location' },
  { title: "Mandarin", href: "/roofing-mandarin-fl", description: "Roofing serving Mandarin, Jacksonville FL.", category: 'Location' },
  { title: "Southside Jacksonville", href: "/roofing-southside-jax-fl", description: "Roofing serving Southside Jacksonville, FL.", category: 'Location' },
]

// Only published posts (respects the same publishDate drip logic used elsewhere).
const now = new Date().toISOString()
export const blogSearchEntries: SearchEntry[] = allBlogPosts
  .filter(post => {
    if (!post.publishDate) return true
    const pubDate = post.publishDate.includes('T') ? post.publishDate : post.publishDate + 'T00:00'
    return pubDate <= now
  })
  .map(post => ({
    title: post.title,
    href: `/blog/${post.slug}`,
    description: post.excerpt,
    category: 'Blog' as const,
  }))

export const searchIndex: SearchEntry[] = [
  ...mainPages,
  ...servicePages,
  ...locationPages,
  ...blogSearchEntries,
]

/**
 * Simple, dependency-free relevance search. Scores a title match higher than
 * a description-only match, and an exact-phrase match higher than a
 * split-term match, without pulling in a fuzzy-search library for what is
 * fundamentally a few hundred short records.
 */
export function searchPages(query: string): SearchEntry[] {
  const q = query.trim().toLowerCase()
  if (!q) return []

  const terms = q.split(/\s+/).filter(Boolean)

  const scored = searchIndex
    .map(entry => {
      const title = entry.title.toLowerCase()
      const desc = entry.description.toLowerCase()
      let score = 0

      if (title === q) score += 100
      if (title.includes(q)) score += 50
      if (desc.includes(q)) score += 20

      for (const term of terms) {
        if (title.includes(term)) score += 8
        if (desc.includes(term)) score += 3
      }

      return { entry, score }
    })
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)

  return scored.map(r => r.entry)
}
