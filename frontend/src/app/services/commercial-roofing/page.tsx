import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Commercial Roofing Jacksonville FL - Business Roof Experts",
  description: "Professional commercial roofing in Jacksonville FL. Specializing in metal, TPO repairs & maintenance plans. Free business estimates: (904) 606-5313.",
  keywords: ["commercial roofing jacksonville fl", "commercial metal roofing", "commercial roofing maintenance", "commercial roofers jacksonville fl", "local commercial roofing company"],
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const roofingSystems = [
  { name: "TPO Roofing", description: "Single-ply membrane that reflects UV rays and reduces cooling costs. Excellent for Jacksonville's hot climate.", benefits: ["Energy efficient", "UV resistant", "Cost-effective", "Easy maintenance"] },
  { name: "EPDM Roofing", description: "Durable rubber roofing membrane known for its longevity and resistance to extreme weather.", benefits: ["Long lifespan", "Weather resistant", "Affordable", "Flexible"] },
  { name: "Metal Roofing", description: "Standing seam and other metal systems for commercial buildings requiring superior durability.", benefits: ["50+ year lifespan", "Hurricane rated", "Low maintenance", "Fire resistant"] },
  { name: "Modified Bitumen", description: "Multi-layer asphalt roofing system that provides excellent waterproofing and durability.", benefits: ["Superior waterproofing", "High durability", "Good for foot traffic", "Easy repairs"] }
]

const industries = ["Retail Stores", "Office Buildings", "Warehouses", "Restaurants", "Medical Facilities", "Churches", "Schools", "Industrial Buildings"]

const faqs = [
  { question: "Do you work on large commercial buildings?", answer: "Yes, we handle commercial roofing projects of all sizes, from small retail spaces to large warehouses and industrial facilities throughout Jacksonville." },
  { question: "Can you work around our business hours?", answer: "Absolutely. We understand that business disruption means lost revenue. We can schedule work during off-hours, weekends, or in phases to minimize impact on your operations." },
  { question: "Do you offer commercial roof maintenance plans?", answer: "Yes, we offer customized maintenance plans to extend your roof's lifespan and catch potential issues before they become costly problems." },
  { question: "How long does a commercial roof installation take?", answer: "Timeline varies based on building size and roofing system. We provide detailed project timelines during the estimate process and work efficiently to complete on schedule." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Roofing Jacksonville FL",
  "description": "Professional commercial roofing services in Jacksonville, Florida. TPO, EPDM, metal roofing and more for businesses.",
  "url": "https://www.gimosroofing.com/services/commercial-roofing",
  "provider": { "@type": "RoofingContractor", "name": "Gimo's Roofing", "telephone": "+1-904-606-5313" },
  "areaServed": { "@type": "City", "name": "Jacksonville, FL" }
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
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Commercial Roofing", "item": "https://www.gimosroofing.com/services/commercial-roofing" }
  ]
}

export default function CommercialRoofingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <nav className="text-sm mb-4">
                <Link href="/" className="text-gray-300 hover:text-primary">Home</Link>
                <span className="mx-2 text-gray-400">/</span>
                <Link href="/services" className="text-gray-300 hover:text-primary">Services</Link>
                <span className="mx-2 text-gray-400">/</span>
                <span className="text-primary">Commercial Roofing</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Jacksonville's Trusted Commercial Roofing Contractor</h1>
              <p className="text-lg text-gray-200 mb-6">
                Professional roofing solutions for businesses throughout Jacksonville. From retail stores to industrial facilities, we deliver quality commercial roofing with minimal disruption.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/commercial-roofing-services.webp" alt="Commercial roofing in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Systems */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Commercial Roofing Systems</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We install and maintain a variety of commercial roofing systems to meet your building&apos;s needs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {roofingSystems.map((system) => (
              <div key={system.name} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{system.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{system.description}</p>
                <div className="flex flex-wrap gap-2">
                  {system.benefits.map((benefit) => (
                    <span key={benefit} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{benefit}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Industries We Serve</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We provide commercial roofing services to a wide range of businesses.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {industries.map((industry) => (
              <div key={industry} className="bg-white rounded-lg p-4 text-center shadow-sm">
                <span className="text-secondary font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Frequently Asked Questions</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Need Commercial Roofing?</h2>
          <p className="text-secondary/80 mb-6">Get a free estimate for your commercial roofing project today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
