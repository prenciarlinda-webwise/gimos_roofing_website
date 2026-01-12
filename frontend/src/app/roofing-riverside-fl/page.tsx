import { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Company Riverside Jacksonville FL - Historic Roofers",
  description: "Expert roofers in Riverside & Avondale Jacksonville FL. Historic home specialists. Roof repair & replacement. Free estimates: (904) 606-5313.",
  keywords: ["roofing company riverside jacksonville fl", "avondale roofing", "riverside roofers", "historic home roofing jacksonville", "roof repair riverside"],
}

const location = "Riverside"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" },
  { name: "Orange Park", href: "/roofing-orange-park-fl" }
]

const faqs = [
  { question: `How much does roof replacement cost in ${location}?`, answer: `Roof replacement in ${location} ranges from $8,000 to $30,000+ depending on home size and materials. Historic homes may require specialized materials.` },
  { question: `Do you work on historic homes in ${location}?`, answer: `Yes! We specialize in historic home roofing in Riverside and Avondale. We understand the unique requirements of preserving architectural integrity.` },
  { question: `What roofing works best for ${location}'s older homes?`, answer: `For historic homes, we recommend architectural shingles that match period styles, slate, or tile roofing depending on the home's original character.` },
  { question: `Do you provide emergency roof repair?`, answer: `Yes! We offer 24/7 emergency storm response for ${location}. Call ${phone} for immediate assistance.` }
]

// Premium SAB (Service Area Business) Schema for Local SEO
const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#localbusiness",
  "name": "Gimo's Roofing",
  "url": "https://www.gimosroofing.com/roofing-riverside-fl",
  "telephone": "+19046065313",
  "logo": "https://www.gimosroofing.com/gimos-roofing-logo.webp",
  "image": "https://www.gimosroofing.com/images/roofing-jacksonville-hero.webp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "33 24th Street East",
    "addressLocality": "Jacksonville",
    "addressRegion": "FL",
    "postalCode": "32206",
    "addressCountry": "US"
  },
  "areaServed": {
    "@type": "Neighborhood",
    "name": "Riverside",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Riverside_and_Avondale"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services in Riverside & Avondale, Jacksonville",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Historic Home Roofing in Riverside FL",
          "description": "Expert roofing services for Riverside and Avondale's historic homes, preserving architectural integrity."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Repair in Riverside FL",
          "description": "Specialized roof repair for Riverside's unique older homes and period architecture."
        }
      }
    ]
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.gimosroofing.com/service-areas" },
    { "@type": "ListItem", "position": 3, "name": "Riverside", "item": "https://www.gimosroofing.com/roofing-riverside-fl" }
  ]
}

export default function RiversidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & Avondale</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Riverside Jacksonville FL Roofing Company - Historic Experts</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Historic home roofing specialists for {location} and Avondale&apos;s architectural gems. Preserving character with quality craftsmanship.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Historic Specialists</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10 text-secondary">
            <div className="text-center"><span className="text-3xl font-bold">500+</span><span className="text-sm ml-2">Roofs</span></div>
            <div className="text-center"><span className="text-3xl font-bold">15+</span><span className="text-sm ml-2">Years</span></div>
            <div className="text-center"><span className="text-3xl font-bold">5.0</span><span className="text-sm ml-2">Star Rating</span></div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            {location} and Avondale are Jacksonville&apos;s most cherished historic neighborhoods, home to stunning early 20th-century architecture. These beautiful homes deserve roofing that respects their heritage while providing modern protection.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we understand the unique requirements of historic home roofing. From Five Points to the shoppes of Avondale, we&apos;ve protected countless homes with quality materials and expert craftsmanship.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Services in {location}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Historic Roof Restoration", desc: "Period-appropriate materials for historic homes." },
              { title: "Roof Replacement", desc: "Complete replacement with quality materials." },
              { title: "Storm Damage Repair", desc: "24/7 emergency response for storm damage." },
              { title: "Architectural Shingles", desc: "Premium shingles in traditional styles." },
              { title: "Metal Roofing", desc: "Standing seam for modern or historic homes." },
              { title: "Roof Inspections", desc: "Comprehensive evaluations for home buyers." }
            ].map((service) => (
              <div key={service.title} className="bg-white p-5 rounded-lg shadow-sm">
                <h4 className="font-bold text-secondary mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Frequently Asked Questions</h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Nearby Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <Link key={area.href} href={area.href} className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-600 hover:text-primary hover:shadow-md transition-all">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Ready for a Free Estimate?</h2>
          <p className="text-secondary/80 mb-6">Contact us today for expert roofing services in {location}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
