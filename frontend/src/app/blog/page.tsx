import { Metadata } from 'next'
import BlogClient from '@/components/BlogClient'

export const metadata: Metadata = {
  title: "Jacksonville Roofing Blog - Tips, Costs & Guides",
  description: "Expert roofing tips for Jacksonville homeowners. Guides on roof costs, insurance claims & storm damage. Call (904) 606-5313.",
  keywords: ["roofing blog jacksonville", "roofing tips", "roof replacement cost jacksonville", "roof insurance claims", "storm damage roofing"],
  openGraph: {
    title: "Jacksonville Roofing Blog - Tips, Costs & Guides - Gimo's Roofing",
    description: "Expert roofing tips for Jacksonville homeowners. Guides on roof costs, insurance claims & storm damage.",
    url: "https://www.gimosroofing.com/blog",
  },
  alternates: {
    canonical: "https://www.gimosroofing.com/blog",
  },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.gimosroofing.com/blog" }
  ]
}

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "name": "Gimo's Roofing Blog",
  "description": "Expert roofing tips, guides, and advice for Jacksonville homeowners",
  "url": "https://www.gimosroofing.com/blog",
  "publisher": {
    "@type": "RoofingContractor",
    "name": "Gimo's Roofing",
    "url": "https://www.gimosroofing.com"
  }
}

export default function BlogPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }} />
      <BlogClient />
    </>
  )
}
