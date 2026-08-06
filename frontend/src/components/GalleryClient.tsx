'use client'

import { useState } from 'react'
import Image from 'next/image'

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
  { id: 26, title: "Nocatee Roof Replacement", type: "Roof Replacement", location: "Nocatee, FL", image: "/images/nocatee-roofing-contractor.webp", alt: "Nocatee roofing contractor completing roof replacement", imgTitle: "Roof Replacement - Nocatee FL" },
  { id: 27, title: "Chimney Flashing Repair", type: "Roof Repair", location: "Riverside, FL", image: "/images/chimney-flashing-repair-riverside-fl.webp", alt: "Chimney flashing repair on a residential roof in Riverside Jacksonville FL", imgTitle: "Chimney Flashing Repair - Riverside FL" },
  { id: 28, title: "Commercial Roof Replacement", type: "Commercial", location: "Jacksonville, FL", image: "/images/commercial-roof-replacement-jacksonville.webp", alt: "Commercial roof replacement project in Jacksonville FL", imgTitle: "Commercial Roof Replacement - Jacksonville FL" },
  { id: 29, title: "Roofing Project - Mandarin", type: "Roof Installation", location: "Mandarin, FL", image: "/images/florida-roof-services-project.webp", alt: "Completed roofing project in Mandarin Jacksonville FL", imgTitle: "Roofing Project - Mandarin FL" },
  { id: 30, title: "Completed Roofing Project", type: "Roof Replacement", location: "Southside Jacksonville, FL", image: "/images/gimos-roofing-completed-project.webp", alt: "Completed roof replacement project in Southside Jacksonville FL", imgTitle: "Completed Roofing Project - Southside Jacksonville" },
  { id: 31, title: "Metal Roof Installation", type: "Roof Installation", location: "Orange Park, FL", image: "/images/metal-roof-installation-project.webp", alt: "Metal roof installation project in Orange Park FL", imgTitle: "Metal Roof Installation - Orange Park FL" },
  { id: 32, title: "New Construction Roofing", type: "Roof Installation", location: "Nocatee, FL", image: "/images/new-construction-roofing-florida.webp", alt: "New construction roofing project on a Florida home near Nocatee", imgTitle: "New Construction Roofing - Nocatee FL" },
  { id: 33, title: "New Roof Installation", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/new-roof-installation-jacksonville-2.webp", alt: "New roof installation project in Jacksonville FL", imgTitle: "New Roof Installation - Jacksonville FL" },
  { id: 34, title: "Residential Roofing Project", type: "Roof Installation", location: "St. Augustine, FL", image: "/images/residential-roofing-project.webp", alt: "Residential roofing project completed in St. Augustine FL", imgTitle: "Residential Roofing Project - St. Augustine FL" },
  { id: 35, title: "Roofing Project - Atlantic Beach", type: "Roof Replacement", location: "Atlantic Beach, FL", image: "/images/roofing-project-atlantic-beach-fl.webp", alt: "Roofing project completed in Atlantic Beach FL", imgTitle: "Roofing Project - Atlantic Beach FL" },
  { id: 36, title: "Commercial Roofing Project", type: "Commercial", location: "Jacksonville, FL", image: "/images/roofing-building-project.webp", alt: "Commercial building roofing project in Jacksonville FL", imgTitle: "Commercial Roofing Project - Jacksonville FL" },
  { id: 37, title: "Roofing Crew at Work", type: "Roof Installation", location: "Ponte Vedra Beach, FL", image: "/images/roofing-contractor-at-work.webp", alt: "Gimo's Roofing crew at work on a roofing project in Ponte Vedra Beach FL", imgTitle: "Roofing Crew at Work - Ponte Vedra Beach FL" },
  { id: 38, title: "Roofing Contractors at Work", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/roofing-contractors-jacksonville-project.webp", alt: "Roofing contractors working on a project in Jacksonville FL", imgTitle: "Roofing Contractors at Work - Jacksonville FL" },
  { id: 39, title: "Roof Replacement Service", type: "Roof Replacement", location: "Fernandina Beach, FL", image: "/images/roof-replacement-service-project.webp", alt: "Roof replacement service completed in Fernandina Beach FL", imgTitle: "Roof Replacement Service - Fernandina Beach FL" },
  { id: 40, title: "Roofing Services Project", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/roofing-services-jacksonville-project.webp", alt: "Roofing services project completed in Jacksonville FL", imgTitle: "Roofing Services Project - Jacksonville FL" },
  { id: 41, title: "Roof Inspection", type: "Roof Repair", location: "Nocatee, FL", image: "/images/roof-inspection-nocatee-fl.webp", alt: "Roof inspection during a free estimate visit in Nocatee FL", imgTitle: "Roof Inspection - Nocatee FL" },
  { id: 42, title: "Roof Renovation Project", type: "Roof Replacement", location: "Mandarin, FL", image: "/images/roof-renovation-project.webp", alt: "Roof renovation project completed in Mandarin FL", imgTitle: "Roof Renovation Project - Mandarin FL" },
  { id: 43, title: "Roof Repair Project", type: "Roof Repair", location: "Jacksonville Beach, FL", image: "/images/roof-repair-project-1.webp", alt: "Roof repair project completed in Jacksonville Beach FL", imgTitle: "Roof Repair Project - Jacksonville Beach FL" },
  { id: 44, title: "Roof Repair Project", type: "Roof Repair", location: "San Marco, FL", image: "/images/roof-repair-project-2.webp", alt: "Roof repair project completed in San Marco Jacksonville FL", imgTitle: "Roof Repair Project - San Marco FL" },
  { id: 45, title: "Roof Repair Project", type: "Roof Repair", location: "Riverside, FL", image: "/images/roof-repair-project-3.webp", alt: "Roof repair project completed in Riverside Jacksonville FL", imgTitle: "Roof Repair Project - Riverside FL" },
  { id: 46, title: "Roof Repair and Replacement", type: "Roof Repair", location: "Southside Jacksonville, FL", image: "/images/roof-repair-replacement-project.webp", alt: "Roof repair and replacement project in Southside Jacksonville FL", imgTitle: "Roof Repair and Replacement - Southside Jacksonville" },
  { id: 47, title: "Roof Repair Services", type: "Roof Repair", location: "Orange Park, FL", image: "/images/roof-repairing-services-project.webp", alt: "Roof repair services completed in Orange Park FL", imgTitle: "Roof Repair Services - Orange Park FL" },
  { id: 48, title: "Roof Replacement Project", type: "Roof Replacement", location: "St. Augustine, FL", image: "/images/roof-replacement-project-1.webp", alt: "Roof replacement project completed in St. Augustine FL", imgTitle: "Roof Replacement Project - St. Augustine FL" },
  { id: 49, title: "Roof Replacement Project", type: "Roof Replacement", location: "Ponte Vedra Beach, FL", image: "/images/roof-replacement-project-2.webp", alt: "Roof replacement project completed in Ponte Vedra Beach FL", imgTitle: "Roof Replacement Project - Ponte Vedra Beach FL" },
  { id: 50, title: "Roof Replacement Project", type: "Roof Replacement", location: "Jacksonville, FL", image: "/images/roof-replacement-jacksonville-project.webp", alt: "Roof replacement project completed in Jacksonville FL", imgTitle: "Roof Replacement Project - Jacksonville FL" },
  { id: 51, title: "Completed Roof Replacement", type: "Roof Replacement", location: "Arlington, FL", image: "/images/roof-replacement-jacksonville-fl-project.webp", alt: "Completed roof replacement project in the Arlington area of Jacksonville FL", imgTitle: "Completed Roof Replacement - Arlington Jacksonville" },
  { id: 52, title: "Roof Work in Progress", type: "Roof Installation", location: "Mandarin, FL", image: "/images/roof-work-in-progress.webp", alt: "Roofing crew mid-project in Mandarin FL", imgTitle: "Roof Work in Progress - Mandarin FL" },
  { id: 53, title: "Shingle Roof Replacement", type: "Roof Replacement", location: "Nocatee, FL", image: "/images/shingle-roof-replacement-project.webp", alt: "Shingle roof replacement project completed in Nocatee FL", imgTitle: "Shingle Roof Replacement - Nocatee FL" },
  { id: 54, title: "Siding Installation Project", type: "Siding", location: "Jacksonville, FL", image: "/images/siding-installation-jacksonville-project.webp", alt: "Siding installation project completed in Jacksonville FL", imgTitle: "Siding Installation Project - Jacksonville FL" },
  { id: 55, title: "Chimney Cap Replacement", type: "Roof Repair", location: "Jacksonville, FL", image: "/images/chimney-cap-replacement-jacksonville-fl-2.webp", alt: "Chimney cap replacement on a Jacksonville FL roof", imgTitle: "Chimney Cap Replacement - Jacksonville FL" },
  { id: 56, title: "Board and Batten Siding", type: "Siding", location: "Jacksonville, FL", image: "/images/board-and-batten-siding-jacksonville-fl.webp", alt: "Board and batten siding installation on a Jacksonville FL home", imgTitle: "Board and Batten Siding - Jacksonville FL" },
  { id: 57, title: "Cement Board Siding", type: "Siding", location: "Jacksonville, FL", image: "/images/cement-board-siding-jacksonville-fl.webp", alt: "Cement board siding installation on a Jacksonville FL home", imgTitle: "Cement Board Siding - Jacksonville FL" },
  { id: 58, title: "Vinyl Siding Installation", type: "Siding", location: "Jacksonville, FL", image: "/images/vinyl-siding-installation-jacksonville-fl-2.webp", alt: "Vinyl siding installation on a Jacksonville FL home", imgTitle: "Vinyl Siding Installation - Jacksonville FL" },
  { id: 59, title: "Commercial Roof Replacement", type: "Commercial", location: "Atlantic Beach, FL", image: "/images/hotel-palms-commercial-roof-replacement-atlantic-beach-fl.webp", alt: "Completed commercial roof replacement at Hotel Palms, a boutique hotel in Atlantic Beach FL", imgTitle: "Commercial Roof Replacement - Atlantic Beach FL" },
  { id: 60, title: "Commercial Roofing Project", type: "Commercial", location: "Jacksonville, FL", image: "/images/post-office-commercial-roofing-project-jacksonville-fl.webp", alt: "Completed commercial roofing project in Jacksonville FL", imgTitle: "Commercial Roofing Project - Jacksonville FL" },
  { id: 61, title: "Commercial Roof Replacement In Progress", type: "Commercial", location: "Jacksonville, FL", image: "/images/commercial-motel-roof-replacement-in-progress-florida.webp", alt: "Commercial roof replacement in progress in Florida", imgTitle: "Commercial Roof Replacement In Progress - Florida" },
  { id: 62, title: "New Construction Roofing", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/new-construction-roofing-jacksonville-fl-2.webp", alt: "New construction roofing project in Jacksonville FL", imgTitle: "New Construction Roofing - Jacksonville FL" },
  { id: 63, title: "New Construction Roofing", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/new-construction-roofing-jacksonville-fl-3.webp", alt: "New construction roofing project in Jacksonville FL", imgTitle: "New Construction Roofing - Jacksonville FL 2" },
  { id: 64, title: "Church Roof Replacement", type: "Roof Replacement", location: "Jacksonville, FL", image: "/images/church-roof-replacement-jacksonville-fl.webp", alt: "Completed church roof replacement in Jacksonville FL", imgTitle: "Church Roof Replacement - Jacksonville FL" },
  { id: 65, title: "Church Roof Replacement", type: "Roof Replacement", location: "Jacksonville, FL", image: "/images/church-roof-replacement-jacksonville-fl-aerial.webp", alt: "Aerial view of a completed church roof replacement in Jacksonville FL", imgTitle: "Church Roof Replacement Aerial - Jacksonville FL" },
  { id: 66, title: "Flat Roof Replacement", type: "Roof Replacement", location: "Jacksonville, FL", image: "/images/flat-roof-replacement-residential-jacksonville-fl.webp", alt: "Flat roof replacement on a Jacksonville FL home", imgTitle: "Flat Roof Replacement - Jacksonville FL" },
  { id: 67, title: "Flat Roofing Project", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/flat-roofing-project-completed-jacksonville-fl.webp", alt: "Completed flat roofing project in Jacksonville FL", imgTitle: "Flat Roofing Project - Jacksonville FL" },
  { id: 68, title: "Metal Roof Installation", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/metal-roof-installation-jacksonville-fl-2.webp", alt: "Standing seam metal roof installation in Jacksonville FL", imgTitle: "Metal Roof Installation - Jacksonville FL" },
  { id: 69, title: "Tile Roof Installation", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/tile-roof-installation-jacksonville-fl.webp", alt: "Tile roof installation in Jacksonville FL", imgTitle: "Tile Roof Installation - Jacksonville FL" },
  { id: 70, title: "Aerial Roof Inspection", type: "Roof Repair", location: "Jacksonville, FL", image: "/images/aerial-roof-inspection-jacksonville-fl-1.webp", alt: "Aerial drone roof inspection in Jacksonville FL", imgTitle: "Aerial Roof Inspection - Jacksonville FL" },
  { id: 71, title: "Aerial Roof Inspection", type: "Roof Repair", location: "Jacksonville, FL", image: "/images/aerial-roof-inspection-jacksonville-fl-5.webp", alt: "Aerial drone roof inspection in Jacksonville FL", imgTitle: "Aerial Roof Inspection - Jacksonville FL 2" },
  { id: 72, title: "Residential Shingle Reroof", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/residential-shingle-reroof-in-progress-jacksonville-fl.webp", alt: "Residential shingle reroof in progress in Jacksonville FL", imgTitle: "Residential Shingle Reroof - Jacksonville FL" },
  { id: 73, title: "Roofing Crew Installation", type: "Roof Installation", location: "Jacksonville, FL", image: "/images/roofing-crew-shingle-installation-jacksonville-fl.webp", alt: "Roofing crew installing shingles on a Jacksonville FL roof", imgTitle: "Roofing Crew Installation - Jacksonville FL" },
  { id: 74, title: "Emergency Roof Repair", type: "Roof Repair", location: "Jacksonville, FL", image: "/images/emergency-roof-repair-jacksonville-fl.webp", alt: "Emergency roof repair completed in Jacksonville FL", imgTitle: "Emergency Roof Repair - Jacksonville FL" },
  { id: 75, title: "Roof Inspection", type: "Roof Repair", location: "Jacksonville, FL", image: "/images/roof-inspection-project-jacksonville-fl.webp", alt: "Roof inspection during a free estimate visit in Jacksonville FL", imgTitle: "Roof Inspection - Jacksonville FL" }
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
