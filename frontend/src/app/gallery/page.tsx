import { Metadata } from 'next'
import GalleryClient from '@/components/GalleryClient'
import LiteYouTube from '@/components/LiteYouTube'
import ProjectsMapLoader from '@/components/ProjectsMapLoader'

export const metadata: Metadata = {
  title: "Roofing Project Gallery - Jacksonville FL Photos",
  description: "View completed roofing projects in Jacksonville FL. Before/after photos of roof replacements, repairs & siding. Call (904) 606-5313.",
  openGraph: {
    title: "Roofing Project Gallery - Jacksonville FL Photos - Gimo's Roofing",
    description: "View completed roofing projects in Jacksonville FL. Before/after photos of roof replacements, repairs & siding.",
    url: "https://www.gimosroofing.com/gallery",
  },
  alternates: {
    canonical: "https://www.gimosroofing.com/gallery",
  },
}

const galleryVideos = [
  {
    id: "aXKje0SbdD0",
    title: "Compilation of re-roof jobs!",
    description: "A compilation of recent shingle re-roof projects Gimo's Roofing completed across Jacksonville and Northeast Florida.",
    uploadDate: "2024-04-15",
    duration: "PT1M39S"
  },
  {
    id: "z_0CKskIgXc",
    title: "Shingle Roof in progress",
    description: "Behind the scenes on an active shingle roof installation in Jacksonville, FL by the Gimo's Roofing crew.",
    uploadDate: "2024-04-15",
    duration: "PT1M5S"
  },
  {
    id: "UqUKr4kP84g",
    title: "Gimo's Roofing Live",
    description: "A live look at Gimo's Roofing working on a Jacksonville roofing project.",
    uploadDate: "2024-12-15",
    duration: "PT27S"
  },
  {
    id: "MLenaCM8LyQ",
    title: "Re-roof process",
    description: "See the step-by-step re-roof process Gimo's Roofing follows on Jacksonville homes.",
    uploadDate: "2024-04-15",
    duration: "PT26S"
  },
  {
    id: "vwdklCHAHds",
    title: "Another Shingle Re-roof",
    description: "Another completed shingle re-roof by Gimo's Roofing in Jacksonville, FL.",
    uploadDate: "2024-12-15",
    duration: "PT24S"
  },
  {
    id: "B6A8iC7iC3o",
    title: "Roofing Contractors in Jacksonville FL",
    description: "A look at Gimo's Roofing, licensed roofing contractors serving Jacksonville, FL and the surrounding area.",
    uploadDate: "2026-07-29",
    duration: "PT1M"
  },
  {
    id: "syUgpECQhn4",
    title: "A Day on the Roof with Gimo's Roofing",
    description: "Behind the scenes with the Gimo's Roofing crew on a Jacksonville-area roofing project.",
    uploadDate: "2026-07-29",
    duration: "PT1M"
  },
  {
    id: "UZGv05NUV9k",
    title: "Roof Replacement in Jacksonville, FL",
    description: "A look at a completed roof replacement project by Gimo's Roofing in Jacksonville, FL.",
    uploadDate: "2026-07-29",
    duration: "PT30S"
  }
]

const gallerySchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/gallery#gallery",
  "@type": "ImageGallery",
  "name": "Gimo's Roofing Project Gallery",
  "description": "Photos of completed roofing and siding projects in Jacksonville, FL and Northeast Florida",
  "url": "https://www.gimosroofing.com/gallery",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" }
}

const videoSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/gallery#videos",
  "@type": "ItemList",
  "name": "Gimo's Roofing Project Videos",
  "itemListElement": galleryVideos.map((v, i) => ({
    "@type": "VideoObject",
    "position": i + 1,
    "name": v.title,
    "description": v.description,
    "thumbnailUrl": `https://img.youtube.com/vi/${v.id}/maxresdefault.jpg`,
    "uploadDate": v.uploadDate,
    "contentUrl": `https://www.youtube.com/watch?v=${v.id}`,
    "embedUrl": `https://www.youtube.com/embed/${v.id}`,
    "publisher": { "@id": "https://www.gimosroofing.com/#organization" }
  }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/gallery#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Gallery", "item": "https://www.gimosroofing.com/gallery" }
  ]
}

export default function GalleryPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(gallerySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <GalleryClient />

      <section id="videos" className="py-16 bg-gray-50 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Project Videos</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">Gimo&apos;s Roofing Project Videos</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Watch our crews at work on roofing projects across Jacksonville and Northeast Florida.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryVideos.map((video) => (
              <div key={video.id}>
                <div className="aspect-video rounded-xl overflow-hidden shadow-md mb-3">
                  <LiteYouTube id={video.id} title={video.title} />
                </div>
                <h3 className="text-base font-semibold text-secondary mb-1">{video.title}</h3>
                <p className="text-sm text-gray-600">{video.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Project Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on a pin to see photos from our completed projects across Northeast Florida.
            </p>
          </div>
          <ProjectsMapLoader />
        </div>
      </section>
    </>
  )
}
