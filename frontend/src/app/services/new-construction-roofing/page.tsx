import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "New Roof Jacksonville FL - New Construction Roofing",
  description: "Top-rated new construction roofing in Jacksonville FL. Working with builders & homeowners for high-quality roof installs. Call (904) 606-5313 today!",
  keywords: ["new roof jacksonville fl", "new construction roof installation", "new construction roofing contractors", "residential new construction roofing", "new home roof installation jacksonville"],
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const benefits = [
  { title: "Built from Scratch", description: "Your new home deserves a roof installed right the first time. We work from bare framing to finished product." },
  { title: "Builder Coordination", description: "We coordinate seamlessly with your general contractor and other trades to keep your project on schedule." },
  { title: "Code Compliance", description: "We ensure your new roof meets all current Florida building codes and hurricane requirements." },
  { title: "Warranty Protection", description: "Full manufacturer warranties on materials plus our workmanship guarantee for complete peace of mind." }
]

const roofTypes = [
  { name: "Asphalt Shingles", description: "The most popular choice for new construction. Affordable, durable, and available in many colors and architectural styles.", lifespan: "25-30 years", features: ["Cost-effective", "Wide color selection", "Architectural styles", "Quick installation"] },
  { name: "Metal Roofing", description: "Premium choice for new Florida homes. Standing seam and metal tiles provide superior hurricane protection and energy efficiency.", lifespan: "50-70 years", features: ["Hurricane rated", "Energy efficient", "Low maintenance", "Modern aesthetics"] },
  { name: "Tile Roofing", description: "Classic choice for Mediterranean and Spanish-style new construction. Concrete and clay tiles add timeless beauty.", lifespan: "50+ years", features: ["Fire resistant", "Timeless appeal", "Highly durable", "Increases home value"] }
]

const faqs = [
  { question: "When should roofing be installed during new construction?", answer: "Roofing is typically installed after the framing is complete and the roof decking is in place, but before interior work begins. We coordinate with your builder to ensure proper timing and protect the structure from weather." },
  { question: "Do you work with home builders and general contractors?", answer: "Yes! We regularly partner with home builders and general contractors throughout Jacksonville. We understand construction schedules and coordinate our work to keep your project on track." },
  { question: "What roofing materials are best for new construction in Florida?", answer: "For Florida's climate, we recommend asphalt architectural shingles for budget-friendly projects, metal roofing for maximum durability and energy efficiency, or tile for a classic Florida aesthetic." },
  { question: "Does new construction roofing include gutters?", answer: "Gutter installation can be included in your roofing package. We install seamless aluminum gutters that complement your new roof and provide proper drainage." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "New Construction Roofing Jacksonville FL",
  "description": "Professional new construction roofing services in Jacksonville, Florida. Expert roofing installation for new home builds.",
  "url": "https://www.gimosroofing.com/services/new-construction-roofing",
  "provider": { "@type": "RoofingContractor", "name": "Gimo's Roofing", "telephone": "+1-904-606-5313" },
  "areaServed": { "@type": "City", "name": "Jacksonville, FL" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function NewConstructionRoofingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                <span className="text-primary">New Construction Roofing</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">New Construction Roofing Specialists Jacksonville FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                Building a new home in Jacksonville? Partner with experienced roofers who understand new construction. We work with builders and homeowners to install quality roofing systems from the ground up.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/new-roof-installation-blue-house-florida.webp" alt="New construction roofing in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Why Choose Us for New Construction</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-secondary mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing Materials */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roofing Materials for New Construction</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the perfect roofing material for your new home.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {roofTypes.map((type) => (
              <div key={type.name} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <p className="text-primary font-semibold mb-3">Lifespan: {type.lifespan}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
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
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Building a New Home?</h2>
          <p className="text-secondary/80 mb-6">Get a free estimate for your new construction roofing project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
