import { Metadata } from 'next'
import { Suspense } from 'react'
import SearchClient from './SearchClient'

export const metadata: Metadata = {
  title: { absolute: "Search - Gimo's Roofing" },
  description: "Search Gimo's Roofing for a service, a service area, or a roofing guide from our blog.",
  robots: { index: false, follow: true },
  alternates: { canonical: "https://www.gimosroofing.com/search" },
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/search#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Search", "item": "https://www.gimosroofing.com/search" }
  ]
}

export default function SearchPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <Suspense fallback={<div className="py-24 text-center text-gray-500">Loading search...</div>}>
        <SearchClient />
      </Suspense>
    </>
  )
}
