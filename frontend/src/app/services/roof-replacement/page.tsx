import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roof Replacement Jacksonville FL | New Roof Installation | Reroofing Services | Gimo's Roofing",
  description: "Need roof replacement in Jacksonville FL? Get accurate roofing estimates for new roof installation, asphalt shingle replacement & reroofing services. Jacksonville roof replacement cost starts at $7,900. Financing available. Call (904) 606-5313.",
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const financingUrl = 'https://application.enerbank.com/#/link?spnum=8007747598&cid=118584&promo=DEL2625&loamt='

const signs = [
  { title: "Age of Roof", description: "Most roofs last 20-25 years. If yours is approaching this age, it may be time for replacement." },
  { title: "Missing Shingles", description: "Multiple missing or damaged shingles indicate your roof is failing and needs attention." },
  { title: "Sagging Roof Deck", description: "A sagging roof is a serious structural issue that requires immediate replacement." },
  { title: "Frequent Leaks", description: "If you're constantly repairing leaks, a full replacement may be more cost-effective." },
  { title: "Storm Damage", description: "Severe storm damage often necessitates complete roof replacement rather than repairs." },
  { title: "Rising Energy Bills", description: "Poor roof insulation causes higher heating/cooling costs - a new roof improves efficiency." }
]

const benefits = [
  { title: "Increased Home Value", description: "A new roof can increase your home's value by up to $15,000 or more." },
  { title: "Energy Efficiency", description: "Modern roofing materials and proper ventilation reduce energy costs." },
  { title: "Enhanced Curb Appeal", description: "Transform your home's appearance with a fresh, new roof." },
  { title: "Peace of Mind", description: "New manufacturer and workmanship warranties protect your investment." }
]

const faqs = [
  { question: "How do I know if I need a roof replacement vs. repair?", answer: "Generally, if repairs exceed 30% of a new roof's cost, or if your roof is over 20 years old with multiple issues, replacement is more cost-effective. We provide honest assessments during our free inspections." },
  { question: "Can you replace my roof while I'm living in the house?", answer: "Absolutely! Most homeowners stay in their homes during roof replacement. We work efficiently to minimize disruption and clean up thoroughly each day." },
  { question: "What happens to my old roofing materials?", answer: "We handle complete tear-off and disposal of your old roof. All debris is removed and we leave your property clean when the job is done." },
  { question: "Will my homeowner's insurance cover roof replacement?", answer: "If your roof was damaged by a covered event like a storm, insurance may cover replacement. We can help document damage and work with your insurance company." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Roof Replacement Jacksonville FL",
  "description": "Complete roof replacement services in Jacksonville, Florida. Professional tear-off and installation of new roofing systems.",
  "url": "https://gimosroofing.com/services/roof-replacement",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Gimo's Roofing",
    "telephone": "+1-904-606-5313"
  },
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
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Roof Replacement", "item": "https://gimosroofing.com/services/roof-replacement" }
  ]
}

export default function RoofReplacementPage() {
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
                <span className="text-primary">Roof Replacement</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Roof Replacement in Jacksonville, FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                When repairs aren&apos;t enough, trust Jacksonville&apos;s roofing experts for complete roof replacement. We remove your old roof and install a brand new, durable roofing system.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/residential-roofing-services-page.webp" alt="Residential roof replacement in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Replacement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Signs You Need a Roof Replacement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Not sure if you need a replacement? Here are common indicators that your roof has reached the end of its lifespan.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signs.map((sign) => (
              <div key={sign.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-secondary mb-2">{sign.title}</h3>
                <p className="text-gray-600 text-sm">{sign.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Benefits of Roof Replacement</h2>
              <p className="text-gray-600 mb-6">A new roof is one of the best investments you can make in your home. Here&apos;s what you gain:</p>
              <div className="space-y-4">
                {benefits.map((benefit) => (
                  <div key={benefit.title} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-secondary">{benefit.title}</h3>
                      <p className="text-gray-600 text-sm">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/two-story-home-roof-replacement.webp" alt="Complete roof replacement on two-story home" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about roof replacement in Jacksonville.</p>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Ready for a New Roof?</h2>
          <p className="text-secondary/80 mb-6">Get a free, no-obligation estimate for your roof replacement project today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100">Apply for Financing</a>
          </div>
        </div>
      </section>
    </>
  )
}
