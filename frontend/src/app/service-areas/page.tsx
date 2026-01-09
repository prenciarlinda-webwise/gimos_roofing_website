import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Service Areas | Roofing Company Jacksonville FL & Northeast Florida | Gimo's Roofing",
  description: "Gimo's Roofing serves Jacksonville, Ponte Vedra, St. Augustine, Orange Park, Fernandina Beach & all of Northeast Florida. Find a trusted roofing contractor near you. Call (904) 606-5313.",
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const serviceAreas = [
  { name: "Jacksonville Beach", slug: "roofing-jacksonville-beach-fl", county: "Duval County", description: "Coastal roofing specialists protecting beach homes from salt air and hurricane conditions." },
  { name: "Riverside", slug: "roofing-riverside-fl", county: "Duval County", description: "Historic home roofing specialists for Riverside and Avondale's architectural gems." },
  { name: "San Marco", slug: "roofing-san-marco-fl", county: "Duval County", description: "Tile roof experts serving San Marco's distinctive Mediterranean homes." },
  { name: "Mandarin", slug: "roofing-mandarin-fl", county: "Duval County", description: "Quality roofing for Mandarin's large residential community along the St. Johns River." },
  { name: "Southside", slug: "roofing-southside-jax-fl", county: "Duval County", description: "Residential and commercial roofing for Southside's diverse properties." },
  { name: "Ponte Vedra Beach", slug: "roofing-ponte-vedra-beach-fl", county: "St. Johns County", description: "Premium roofing services for Ponte Vedra's luxury homes and golf communities." },
  { name: "St. Augustine", slug: "roofing-st-augustine-fl", county: "St. Johns County", description: "Historic home roofing experts serving America's oldest city." },
  { name: "Nocatee", slug: "roofing-nocatee-fl", county: "St. Johns County", description: "HOA-compliant roofing for Nocatee's master-planned communities." },
  { name: "Orange Park", slug: "roofing-orange-park-fl", county: "Clay County", description: "Quality roofing for Orange Park families and surrounding communities." },
  { name: "Fernandina Beach", slug: "roofing-fernandina-beach-fl", county: "Nassau County", description: "Amelia Island's trusted roofer for coastal and historic Victorian homes." }
]

const counties = [
  { name: "Duval County", areas: ["Jacksonville Beach", "Riverside", "San Marco", "Mandarin", "Southside Jax"] },
  { name: "St. Johns County", areas: ["Ponte Vedra Beach", "St. Augustine", "Nocatee"] },
  { name: "Clay County", areas: ["Orange Park"] },
  { name: "Nassau County", areas: ["Fernandina Beach"] }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Gimo's Roofing",
  "description": "Professional roofing services throughout Northeast Florida including Duval, St. Johns, Clay, and Nassau counties.",
  "url": "https://gimosroofing.com/service-areas",
  "telephone": "(904) 606-5313",
  "areaServed": serviceAreas.map(area => ({ "@type": "City", "name": area.name + ", FL" })),
  "priceRange": "$$"
}

export default function ServiceAreasPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/architectural-shingle-roof-aerial-view.webp" alt="Roofing service areas in Northeast Florida" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/85 to-secondary/70"></div>
        <div className="relative max-w-7xl mx-auto px-4">
          <nav className="text-sm mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center">
              <li><Link href="/" className="text-gray-300 hover:text-primary">Home</Link></li>
              <li><span className="mx-2 text-gray-400">/</span></li>
              <li><span className="text-primary">Service Areas</span></li>
            </ol>
          </nav>
          <div className="max-w-3xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Roofing Service Areas in Northeast Florida</h1>
            <p className="text-xl text-gray-200 mb-4">
              Gimo&apos;s Roofing proudly serves homeowners throughout Jacksonville and the surrounding Northeast Florida region. From the beaches to the suburbs, we deliver quality roofing services to every community we serve.
            </p>
            <p className="text-lg text-gray-300 mb-8">
              Select your city below to learn more about our services in your area, or call us directly for immediate assistance.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-8 py-3">Get Your Free Estimate</a>
              <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-3">(904) 606-5313</a>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Find a Roofing Contractor Near You</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We provide professional roofing services across four counties in Northeast Florida. Click your city to learn more about our local services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceAreas.map((area) => (
              <Link key={area.slug} href={`/${area.slug}`} className="group bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-all border-2 border-transparent hover:border-primary">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                    <svg className="w-6 h-6 text-primary group-hover:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-secondary group-hover:text-primary transition-colors mb-1">{area.name}, FL</h3>
                    <p className="text-sm text-primary font-medium mb-2">{area.county}</p>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Counties Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Counties We Serve</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our roofing services extend throughout four counties in the greater Jacksonville metropolitan area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {counties.map((county) => (
              <div key={county.name} className="bg-white rounded-xl p-6 shadow-md">
                <h3 className="text-xl font-bold text-secondary mb-4">{county.name}</h3>
                <ul className="space-y-2">
                  {county.areas.map((area) => (
                    <li key={area}>
                      <Link href={`/roofing-${area.toLowerCase().replace(/\s+/g, '-')}-fl`} className="text-gray-600 hover:text-primary transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        {area}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Roofing Services Available in All Areas</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              No matter where you&apos;re located in Northeast Florida, we offer the same comprehensive roofing services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/roof-replacement" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary/5 transition-colors">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary mb-2">Roof Replacement</h3>
              <p className="text-gray-600 text-sm">Complete roof replacement with quality materials and expert installation. Starting at $7,000.</p>
            </Link>
            <Link href="/services/roof-repair" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary/5 transition-colors">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary mb-2">Roof Repair</h3>
              <p className="text-gray-600 text-sm">Fast, reliable repairs for leaks, storm damage, and general wear. 24/7 emergency service.</p>
            </Link>
            <Link href="/services/new-construction-roofing" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary/5 transition-colors">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary mb-2">New Construction Roofing</h3>
              <p className="text-gray-600 text-sm">Expert roofing for new home builds and construction projects.</p>
            </Link>
            <Link href="/services/commercial-roofing" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary/5 transition-colors">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary mb-2">Commercial Roofing</h3>
              <p className="text-gray-600 text-sm">Professional commercial roofing for businesses of all sizes.</p>
            </Link>
            <Link href="/services/siding-installation" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary/5 transition-colors">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary mb-2">Siding Installation</h3>
              <p className="text-gray-600 text-sm">Quality siding installation including vinyl and James Hardie fiber cement.</p>
            </Link>
            <Link href="/services/siding-repair" className="group bg-gray-50 rounded-xl p-6 hover:bg-primary/5 transition-colors">
              <h3 className="text-lg font-bold text-secondary group-hover:text-primary mb-2">Siding Repair</h3>
              <p className="text-gray-600 text-sm">Expert siding repairs to restore and protect your home&apos;s exterior.</p>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link href="/services" className="text-primary font-semibold hover:underline">View All Services &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Northeast Florida Chooses Gimo&apos;s Roofing</h2>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">We&apos;re the local roofing experts trusted by homeowners across the region.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Licensed & Insured", desc: "Fully licensed Florida contractor with comprehensive insurance coverage." },
              { icon: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z", title: "Local Expertise", desc: "We know Northeast Florida's climate, building codes, and HOA requirements." },
              { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "Financing Available", desc: "Affordable payment options with payments as low as $99/month." },
              { icon: "star", title: "5-Star Rated", desc: "Consistently rated 5 stars on Google, Yelp, and Thumbtack." }
            ].map((item) => (
              <div key={item.title} className="text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  {item.icon === "star" ? (
                    <svg className="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ) : (
                    <svg className="w-8 h-8 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon} />
                    </svg>
                  )}
                </div>
                <h3 className="font-bold mb-2">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">Ready to Get Started?</h2>
          <p className="text-secondary/80 text-lg mb-8">
            Contact us today for a free estimate on your roofing project. We serve all of Northeast Florida with quality workmanship and honest service.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90 text-lg px-8 py-3">Get Your Free Estimate</a>
            <Link href="/contact" className="btn bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-3">Contact Us</Link>
          </div>
          <p className="mt-6 text-secondary/70">
            Or call us directly: <a href="tel:+19046065313" className="text-secondary font-bold hover:underline">(904) 606-5313</a>
          </p>
        </div>
      </section>
    </>
  )
}
