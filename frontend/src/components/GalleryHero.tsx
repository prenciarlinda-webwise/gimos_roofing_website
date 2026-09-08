// Static page hero for /gallery, split out of GalleryClient so it can render before the
// Videos section while GalleryClient (filter state, 'use client') renders after it.
export default function GalleryHero() {
  return (
    <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Our Work</h1>
          <p className="text-lg text-gray-200">
            Browse our gallery of completed roofing and siding projects throughout Jacksonville and Northeast Florida.
          </p>
        </div>
      </div>
    </section>
  )
}
