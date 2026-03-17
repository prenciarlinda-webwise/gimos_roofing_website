'use client'

import { useState } from 'react'
import Image from 'next/image'
import dynamic from 'next/dynamic'

const ProjectsMapCompact = dynamic(() => import('@/components/ProjectsMapCompact'), { ssr: false })

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const projects = [
  { id: 1, title: "Roof Replacement - Riverside", type: "Roof Replacement", location: "Jacksonville, FL", image: "/images/completed-roof-project-jacksonville.webp", alt: "Completed roof replacement project in Riverside Jacksonville FL", imgTitle: "Roof Replacement Project - Riverside Jacksonville" },
  { id: 2, title: "New Roof Installation - Nocatee", type: "Roof Installation", location: "Nocatee, FL", image: "/images/new-roof-installation-blue-house-florida.webp", alt: "New roof installation on blue house in Nocatee FL", imgTitle: "New Roof Installation - Nocatee FL" },
  { id: 3, title: "Shingle Roof Aerial View", type: "Roof Installation", location: "Atlantic Beach, FL", image: "/images/architectural-shingle-roof-aerial-view.webp", alt: "Aerial view of architectural shingle roof in Atlantic Beach FL", imgTitle: "Architectural Shingle Roof - Atlantic Beach FL" },
  { id: 4, title: "Commercial Roofing Project", type: "Commercial", location: "Jacksonville, FL", image: "/images/commercial-gray-shingle-roof.webp", alt: "Commercial gray shingle roofing project in Jacksonville FL", imgTitle: "Commercial Roofing Project - Jacksonville FL" },
  { id: 5, title: "Siding Installation", type: "Siding", location: "Jacksonville Beach, FL", image: "/images/siding-installation-jacksonville-home.webp", alt: "Professional siding installation on Jacksonville Beach home", imgTitle: "Siding Installation - Jacksonville Beach FL" },
  { id: 6, title: "Metal Roof Installation", type: "Roof Installation", location: "Ponte Vedra Beach, FL", image: "/images/flat-metal-roof-installation.webp", alt: "Flat metal roof installation in Ponte Vedra Beach FL", imgTitle: "Metal Roof Installation - Ponte Vedra Beach FL" },
  { id: 7, title: "Roof Replacement - San Marco", type: "Roof Replacement", location: "Jacksonville, FL", image: "/images/two-story-home-roof-replacement.webp", alt: "Two-story home roof replacement in San Marco Jacksonville FL", imgTitle: "Roof Replacement - San Marco Jacksonville" },
  { id: 8, title: "Home Siding Renovation", type: "Siding", location: "Orange Park, FL", image: "/images/yellow-siding-home-renovation.webp", alt: "Yellow siding home renovation in Orange Park FL", imgTitle: "Siding Renovation - Orange Park FL" },
  { id: 9, title: "Blue House Roof Project", type: "Roof Replacement", location: "Jacksonville, FL", image: "/images/blue-house-roof-project-aerial.webp", alt: "Aerial view of blue house roof replacement project Jacksonville FL", imgTitle: "Blue House Roof Project - Jacksonville FL" },
  { id: 10, title: "Brick Home Shingle Roof", type: "Roof Installation", location: "Middleburg, FL", image: "/images/brick-home-gray-shingle-roof.webp", alt: "Gray shingle roof on brick home in Middleburg FL", imgTitle: "Brick Home Shingle Roof - Middleburg FL" },
  { id: 11, title: "Modern Home Roof", type: "Roof Replacement", location: "Ponte Vedra Beach, FL", image: "/images/modern-home-new-shingle-roof.webp", alt: "Modern home with new shingle roof in Ponte Vedra Beach FL", imgTitle: "Modern Home Roof - Ponte Vedra Beach FL" },
  { id: 12, title: "Residential Roof with Pool", type: "Roof Installation", location: "Fernandina Beach, FL", image: "/images/residential-roof-with-pool-aerial.webp", alt: "Aerial view of residential roof with pool in Fernandina Beach FL", imgTitle: "Residential Roof with Pool - Fernandina Beach FL" },
  { id: 13, title: "Shingle Roof Installation", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/residential-shingle-roof-installation-jacksonville.webp", alt: "Residential shingle roof installation in Jacksonville FL", imgTitle: "Shingle Roof Installation - Jacksonville FL" },
  { id: 14, title: "Metal Roof Construction", type: "Roof Installation", location: "St. Augustine, FL", image: "/images/metal-roof-construction-site.webp", alt: "Metal roof construction site in St. Augustine FL", imgTitle: "Metal Roof Construction - St. Augustine FL" },
  { id: 15, title: "Green Metal Roof", type: "Roof Installation", location: "Mandarin, FL", image: "/images/green-metal-roof-residential.webp", alt: "Green metal roof on residential home in Mandarin FL", imgTitle: "Green Metal Roof - Mandarin FL" },
  { id: 16, title: "Shingle Roof - Florida Home", type: "Roof Installation", location: "Nocatee, FL", image: "/images/shingle-roof-installation-florida.webp", alt: "Shingle roof installation on Florida home in Nocatee", imgTitle: "Shingle Roof Installation - Nocatee FL" },
  { id: 17, title: "Roof Replacement with Dumpster", type: "Roof Replacement", location: "Jacksonville, FL", image: "/images/roof-replacement-project-dumpster.webp", alt: "Roof replacement project with debris removal dumpster Jacksonville FL", imgTitle: "Roof Replacement Project - Jacksonville FL" },
  { id: 18, title: "Aerial Roof Inspection", type: "Roof Repair", location: "Jacksonville, FL", image: "/images/gray-shingle-roof-aerial-inspection.webp", alt: "Aerial roof inspection of gray shingle roof in Jacksonville FL", imgTitle: "Roof Inspection - Jacksonville FL" },
  { id: 19, title: "Dark Blue Shingle Roof", type: "Roof Replacement", location: "Orange Park, FL", image: "/images/dark-blue-shingle-roof-completed.webp", alt: "Completed dark blue shingle roof in Orange Park FL", imgTitle: "Dark Blue Shingle Roof - Orange Park FL" },
  { id: 20, title: "Light Blue House Roof", type: "Roof Replacement", location: "St. Augustine, FL", image: "/images/light-blue-house-dark-shingle-roof.webp", alt: "Light blue house with dark shingle roof in St. Augustine FL", imgTitle: "Light Blue House Roof - St. Augustine FL" },
  { id: 21, title: "Siding Installation Project", type: "Siding", location: "Jacksonville, FL", image: "/images/siding-installation.webp", alt: "Professional siding installation project in Jacksonville FL", imgTitle: "Siding Installation - Jacksonville FL" },
  { id: 22, title: "Siding Project - Jacksonville", type: "Siding", location: "Jacksonville, FL", image: "/images/siding-jacksonville.webp", alt: "Siding project completed in Jacksonville FL", imgTitle: "Siding Project - Jacksonville FL" },
  { id: 23, title: "Roof Repair - Nocatee", type: "Roof Repair", location: "Nocatee, FL", image: "/images/roof-repair-nocatee.webp", alt: "Roof repair project in Nocatee FL", imgTitle: "Roof Repair - Nocatee FL" },
  { id: 24, title: "New Roof - Jacksonville", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/new-roof-jacksonville-fl.webp", alt: "New roof installation in Jacksonville FL", imgTitle: "New Roof Installation - Jacksonville FL" },
  { id: 25, title: "Nocatee Roofing Project", type: "Roof Replacement", location: "Nocatee, FL", image: "/images/nocatee-roofing-company.webp", alt: "Roofing project completed by Nocatee roofing company", imgTitle: "Nocatee Roofing Project" },
  { id: 26, title: "Nocatee Roof Replacement", type: "Roof Replacement", location: "Nocatee, FL", image: "/images/nocatee-roofing-contractor.webp", alt: "Nocatee roofing contractor completing roof replacement", imgTitle: "Roof Replacement - Nocatee FL" }
]

const categories = ["All", "Roof Installation", "Roof Replacement", "Roof Repair", "Commercial", "Siding"]

export default function GalleryClient() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(p => p.type === activeCategory)

  return (
    <>
      {/* Hero Section */}
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

      {/* Interactive Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Project Locations</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Click on a pin to see photos from our completed projects across Northeast Florida.
            </p>
          </div>
          <ProjectsMapCompact />
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-gray-50 sticky top-20 md:top-28 z-40">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-secondary'
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredProjects.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image
                      src={project.image}
                      alt={project.alt || project.title}
                      title={project.imgTitle || project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                    <div className="p-4 text-white">
                      <span className="text-xs text-primary font-medium">{project.type}</span>
                      <h3 className="font-bold">{project.title}</h3>
                      <p className="text-sm text-gray-300">{project.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <svg className="w-16 h-16 text-gray-300 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <p className="text-gray-500">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Before & After</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              See the transformations we&apos;ve made for Jacksonville homeowners.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="aspect-square overflow-hidden relative">
                  <Image src="/images/roof-replacement-debris-removal.webp" alt="Roof before replacement in Mandarin Jacksonville FL" title="Before - Roof Replacement Mandarin Jacksonville" fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 bg-secondary/80 text-white text-xs px-2 py-1 rounded">Before</span>
                </div>
                <div className="aspect-square overflow-hidden relative">
                  <Image src="/images/completed-roof-project-jacksonville.webp" alt="Completed roof replacement in Mandarin Jacksonville FL" title="After - Roof Replacement Mandarin Jacksonville" fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 bg-primary text-secondary text-xs px-2 py-1 rounded font-semibold">After</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-secondary">Complete Roof Replacement</h3>
                <p className="text-gray-600 text-sm">Mandarin, Jacksonville</p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="grid grid-cols-2">
                <div className="aspect-square overflow-hidden relative">
                  <Image src="/images/siding-project-closeup.webp" alt="Siding before installation in St. Augustine FL" title="Before - Siding Installation St. Augustine" fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 bg-secondary/80 text-white text-xs px-2 py-1 rounded">Before</span>
                </div>
                <div className="aspect-square overflow-hidden relative">
                  <Image src="/images/siding-installation-jacksonville-home.webp" alt="New siding after installation in St. Augustine FL" title="After - Siding Installation St. Augustine" fill className="object-cover" />
                  <span className="absolute bottom-2 left-2 bg-primary text-secondary text-xs px-2 py-1 rounded font-semibold">After</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-secondary">Siding Transformation</h3>
                <p className="text-gray-600 text-sm">St. Augustine, FL</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
            Ready to Transform Your Home?
          </h2>
          <p className="text-secondary/80 mb-6">
            Your home could be our next showcase project. Get a free estimate today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">
              Get Your Free Estimate
            </a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">
              Call (904) 606-5313
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
