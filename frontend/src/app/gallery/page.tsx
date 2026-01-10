import { Metadata } from 'next'
import GalleryClient from '@/components/GalleryClient'

export const metadata: Metadata = {
  title: "Roofing Project Gallery - Jacksonville FL Photos",
  description: "View completed roofing projects in Jacksonville FL. Before/after photos of roof replacements, repairs & siding. Call (904) 606-5313.",
  keywords: ["roofing gallery jacksonville", "roof replacement photos", "roofing before after jacksonville", "roofing project photos", "jacksonville roofing portfolio"],
  openGraph: {
    title: "Roofing Project Gallery - Jacksonville FL Photos - Gimo's Roofing",
    description: "View completed roofing projects in Jacksonville FL. Before/after photos of roof replacements, repairs & siding.",
    url: "https://www.gimosroofing.com/gallery",
  },
  alternates: {
    canonical: "https://www.gimosroofing.com/gallery",
  },
}

const gallerySchema = {
  "@context": "https://schema.org",
  "@type": "ImageGallery",
  "name": "Gimo's Roofing Project Gallery",
  "description": "Photos of completed roofing and siding projects in Jacksonville, FL and Northeast Florida",
  "url": "https://www.gimosroofing.com/gallery",
  "publisher": {
    "@type": "RoofingContractor",
    "name": "Gimo's Roofing",
    "url": "https://www.gimosroofing.com"
  }
}

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <GalleryClient />
    </>
  )
}
