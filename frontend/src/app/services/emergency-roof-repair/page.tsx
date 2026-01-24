import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Emergency Roof Repair Jacksonville FL - 24/7 Storm Damage Service - Gimos Roofing",
  description: "Emergency roof repair in Jacksonville FL. Gimos Roofing responds fast to active leaks, storm damage, and urgent roofing issues. Same-day service. Call (904) 606-5313.",
  keywords: ["emergency roof repair jacksonville fl", "emergency roof repair jacksonville", "24 hour roof repair jacksonville", "storm damage roof repair jacksonville", "roof leak emergency jacksonville"],
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const phone = "(904) 606-5313"

const emergencyTypes = [
  { title: "Storm Damage Roof Repair", description: "Jacksonville's severe weather can cause significant roof damage. High winds, heavy rain, and hail can tear off shingles, damage flashing, and create vulnerabilities that lead to leaks. Our emergency team responds quickly to assess and repair storm damage before it causes further problems inside your home." },
  { title: "Active Roof Leak Repair", description: "An active leak is a true emergency. Water entering your home can damage ceilings, walls, insulation, and personal belongings within hours. We prioritize active leak calls and can often provide same-day temporary protection while planning permanent repairs." },
  { title: "Fallen Tree and Debris Damage", description: "Trees and large debris can cause catastrophic roof damage. Whether it's a branch through your roof or an entire tree, we respond quickly to secure your home, remove debris safely, and begin the repair process." },
  { title: "Hurricane and Wind Damage", description: "Living in Jacksonville means preparing for hurricane season. When storms hit, we're ready to respond with emergency tarping, damage assessment, and repairs. We help protect your home from further damage while working with your insurance company." }
]

const serviceAreas = [
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Orange Park", href: "/roofing-orange-park-fl" },
  { name: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { name: "Ponte Vedra", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Southside", href: "/roofing-southside-jax-fl" },
  { name: "Riverside", href: "/roofing-riverside-fl" }
]

const faqs = [
  { question: "Do you offer 24/7 emergency roof repair in Jacksonville?", answer: "Yes, Gimos Roofing provides emergency roof repair services in Jacksonville FL. We respond quickly to active leaks, storm damage, and urgent roofing situations. Call (904) 606-5313 for immediate assistance." },
  { question: "What qualifies as a roofing emergency?", answer: "Roofing emergencies include active water leaks entering your home, significant storm or wind damage, fallen trees or debris on your roof, and structural damage that poses safety risks." },
  { question: "Will my insurance cover emergency roof repairs?", answer: "Most homeowner insurance policies cover roof damage caused by storms, wind, hail, and fallen trees. We document all damage thoroughly and can work with your insurance company on claims." },
  { question: "How quickly can you respond to a roof emergency in Jacksonville?", answer: "We prioritize emergency calls and typically respond same-day for urgent situations in Jacksonville and surrounding areas. For active leaks, we can often provide temporary protection within hours." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Emergency Roof Repair",
  "serviceType": "Emergency Roof Repair",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Gimos Roofing",
    "url": "https://www.gimosroofing.com",
    "telephone": "(904) 606-5313"
  },
  "areaServed": {
    "@type": "City",
    "name": "Jacksonville",
    "addressRegion": "FL"
  },
  "description": "24/7 emergency roof repair services in Jacksonville FL for storm damage, active leaks, and urgent roofing issues.",
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "priceCurrency": "USD"
    }
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
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Emergency Roof Repair", "item": "https://www.gimosroofing.com/services/emergency-roof-repair" }
  ]
}

export default function EmergencyRoofRepairPage() {
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
                <span className="text-primary">Emergency Roof Repair</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Emergency Roof Repair Jacksonville FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                When roof emergencies strike in Jacksonville, Gimos Roofing responds fast. Whether you have an active leak, storm damage, or structural concerns, our emergency roof repair team is available to protect your home. We provide same-day service throughout Jacksonville and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={`tel:+19046065313`} className="btn btn-primary w-full sm:w-auto text-center font-bold">
                  Call Now: {phone}
                </a>
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto text-center">
                  Get Free Estimate
                </a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-repair-services.webp" alt="Emergency roof repair in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Emergency Response */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">24/7 Emergency Roofing Response</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Roof emergencies don&apos;t wait for business hours, and neither do we. Our emergency response team is ready to protect your Jacksonville home when you need us most.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Rapid Response", description: "Quick response to urgent calls throughout Jacksonville and surrounding areas" },
              { title: "Temporary Tarping", description: "Immediate protection to prevent further water damage to your home" },
              { title: "Prevent Water Damage", description: "Fast action to stop leaks before they damage ceilings, walls, and belongings" },
              { title: "Weekend & Holiday Service", description: "Available when you need us, including weekends and holidays" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Repairs We Handle */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Emergency Roof Repairs We Handle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From storm damage to active leaks, our experienced team handles all types of roofing emergencies in Jacksonville.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {emergencyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Emergency Repair Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Emergency Repair Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;ve streamlined our emergency response to get your roof protected as quickly as possible.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Emergency Call", description: "Call us and describe your situation" },
              { step: "2", title: "Rapid Assessment", description: "We arrive quickly to assess the damage" },
              { step: "3", title: "Temporary Protection", description: "Tarping and protection if needed" },
              { step: "4", title: "Documentation", description: "Thorough damage documentation for insurance" },
              { step: "5", title: "Repair Plan", description: "Permanent repair plan and estimate" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-secondary font-bold rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  {item.step}
                </div>
                <h3 className="font-bold text-secondary mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Jacksonville Emergency Roof Repair Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide emergency roofing services throughout Jacksonville and surrounding communities.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <span className="font-semibold text-secondary">Jacksonville</span>
                <p className="text-gray-500 text-sm">All neighborhoods</p>
              </div>
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-center">
                  <Link href={area.href} className="font-semibold text-secondary hover:text-primary transition-colors">
                    {area.name}
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-gray-600">
              <Link href="/service-areas" className="text-primary hover:underline">View all service areas →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Claims Assistance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Insurance Claims Assistance</h2>
              <p className="text-gray-600 mb-4">
                Storm damage often qualifies for insurance coverage. We understand the claims process and help make it easier for Jacksonville homeowners.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Thorough damage documentation with photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Detailed estimates for insurance adjusters</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Direct communication with insurance companies</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Learn more about the insurance process in our guide: <Link href="/blog/storm-damage-roofing-insurance" className="text-primary hover:underline">Storm Damage Roofing Insurance Claims</Link>
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Common Covered Damages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Wind and hurricane damage</li>
                <li>• Hail damage</li>
                <li>• Fallen trees and debris</li>
                <li>• Lightning strikes</li>
                <li>• Tornado damage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Why Choose Gimos Roofing for Emergency Service</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fast Response Times", description: "We prioritize emergencies and respond quickly to protect your home" },
              { title: "Licensed and Insured", description: "Fully licensed Florida roofing contractor with comprehensive insurance" },
              { title: "Experienced Storm Repairs", description: "Years of experience handling Jacksonville's severe weather damage" },
              { title: "Honest Assessments", description: "We tell you what you need, not what makes us the most money" },
              { title: "Quality Materials", description: "We use quality roofing materials for lasting repairs" },
              { title: "Insurance Assistance", description: "We help document damage and work with your insurance company" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/roof-repair" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Roof Repair Services</h3>
              <p className="text-gray-600 text-sm">Complete roof repair services for non-emergency situations, including leak repair, shingle replacement, and more.</p>
            </Link>
            <Link href="/services/roof-replacement" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Roof Replacement</h3>
              <p className="text-gray-600 text-sm">When repairs aren&apos;t enough, we provide complete roof replacement with quality materials and expert installation.</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Get in touch for emergency help or to schedule a free inspection and estimate.</p>
            </Link>
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
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Emergency Roof Repair in Jacksonville?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Call {phone} now. We respond quickly to protect your home from further damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19046065313" className="btn btn-primary text-lg px-8 py-4">
              Call Now: {phone}
            </a>
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
