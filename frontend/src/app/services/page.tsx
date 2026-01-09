import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Roofing & Siding Services Jacksonville FL | Gimo's Roofing",
  description: "Professional roofing and siding services in Jacksonville FL. Roof installation, replacement, repair, commercial roofing, and siding services. Free estimates available.",
}

const roofingServices = [
  {
    title: "New Construction Roofing",
    slug: "new-construction-roofing",
    description: "Expert roofing for new home builds. We partner with builders and homeowners to install quality roofs from the ground up.",
    features: ["Builder Partnerships", "Code Compliance", "All Materials", "Full Warranty"],
  },
  {
    title: "Roof Replacement",
    slug: "roof-replacement",
    description: "Complete roof replacement services when repairs aren't enough. We'll remove your old roof and install a brand new, durable roofing system.",
    features: ["Full Tear-Off", "Deck Inspection", "New Installation", "Warranty Included"],
  },
  {
    title: "Roof Repair",
    slug: "roof-repair",
    description: "Fast, reliable roof repairs for leaks, storm damage, and general wear. We diagnose issues quickly and provide lasting solutions.",
    features: ["Leak Detection", "Storm Damage", "Shingle Repair", "Emergency Service"],
  },
  {
    title: "Commercial Roofing",
    slug: "commercial-roofing",
    description: "Professional roofing solutions for businesses in Jacksonville. We minimize disruption while delivering quality commercial roofing services.",
    features: ["TPO & EPDM", "Metal Systems", "Minimal Downtime", "Maintenance Plans"],
  }
]

const sidingServices = [
  {
    title: "Siding Installation",
    slug: "siding-installation",
    description: "Transform your home's exterior with professional siding installation. We offer vinyl, fiber cement, and other premium siding options.",
    features: ["Vinyl Siding", "Fiber Cement", "Energy Efficient", "Custom Colors"],
  },
  {
    title: "Siding Repair",
    slug: "siding-repair",
    description: "Expert siding repairs to restore your home's protection and curb appeal. We fix damage from storms, age, and everyday wear.",
    features: ["Storm Damage", "Color Matching", "Seamless Repairs", "All Siding Types"],
  }
]

const services = [...roofingServices, ...sidingServices]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Roofing & Siding Services in Jacksonville FL",
  "description": "Professional roofing and siding services offered by Gimo's Roofing in Jacksonville, Florida.",
  "itemListElement": services.map((service, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "item": {
      "@type": "Service",
      "name": service.title,
      "description": service.description,
      "url": `https://gimosroofing.com/services/${service.slug}`,
      "provider": {
        "@type": "RoofingContractor",
        "name": "Gimo's Roofing",
      }
    }
  }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gimosroofing.com/services" }
  ]
}

export default function ServicesPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0 bg-secondary">
          <Image src="/images/roofing-crew-installation-action.webp" alt="Professional roofing services" fill className="object-cover opacity-50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Professional Roofing & Siding Services
            </h1>
            <p className="text-lg text-gray-200 mb-6">
              Jacksonville&apos;s trusted contractor for quality roof installation, repair, replacement, and siding services. Serving residential and commercial properties.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Get Free Estimate
              </a>
              <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">
                (904) 606-5313
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From minor repairs to complete roof replacements, we provide comprehensive roofing and siding solutions for homes and businesses throughout Jacksonville.
            </p>
          </div>

          {/* Roofing Services */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary">Roofing Services</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roofingServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
                    </div>
                    <h4 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Siding Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary">Siding Services</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-3xl">
              {sidingServices.map((service) => (
                <Link key={service.slug} href={`/services/${service.slug}`} className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
                    </div>
                    <h4 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h4>
                    <p className="text-gray-600 text-sm mb-4">
                      {service.description}
                    </p>
                    <ul className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature) => (
                        <li key={feature} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full">
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                Why Choose Gimo&apos;s Roofing?
              </h2>
              <p className="text-gray-600 mb-6">
                When you need roofing or siding services in Jacksonville, you want a contractor you can trust. Here&apos;s why homeowners and businesses choose us:
              </p>
              <ul className="space-y-4">
                {[
                  { title: "Licensed & Insured", desc: "Fully licensed Florida roofing contractor with comprehensive insurance coverage." },
                  { title: "5-Star Rated", desc: "Consistently rated 5 stars on Google, Yelp, and Thumbtack by satisfied customers." },
                  { title: "Quality Materials", desc: "We use only premium roofing materials from trusted manufacturers." },
                  { title: "Financing Available", desc: "Flexible financing options to make your roofing project affordable." }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/gimos-roofing-company-van-jobsite.webp" alt="Gimo's Roofing company van at job site" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
            Ready to Start Your Project?
          </h2>
          <p className="text-secondary/80 mb-6">
            Get a free, no-obligation estimate for your roofing or siding project today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing" target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">
              Get Your Free Estimate
            </a>
            <a href="https://application.enerbank.com/#/link?spnum=8007747598&cid=118584&promo=DEL2625&loamt=" target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100">
              Apply for Financing
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
