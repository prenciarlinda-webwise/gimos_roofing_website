import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roof Repair Jacksonville FL | Emergency Roofers | Leaky Roof Repair | Gimo's Roofing",
  description: "Need roof repair in Jacksonville FL? Gimo's Roofing offers fast leaky roof repair, emergency roofing services, shingle repair near me, roof leak detection & storm damage repair. Free inspections. Call (904) 606-5313.",
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const repairTypes = [
  { title: "Leak Repair", description: "Fast detection and repair of roof leaks to prevent water damage to your home." },
  { title: "Shingle Repair", description: "Replacement of damaged, missing, or curling shingles to restore protection." },
  { title: "Storm Damage", description: "Emergency repairs after hurricanes, hail, and severe weather events." },
  { title: "Flashing Repair", description: "Sealing and repair of roof flashing around chimneys, vents, and skylights." },
  { title: "Gutter Repair", description: "Fixing damaged gutters and downspouts to ensure proper drainage." },
  { title: "Vent Repair", description: "Repair and replacement of roof vents, boots, and penetrations." }
]

const faqs = [
  { question: "How quickly can you repair my roof?", answer: "For emergencies like active leaks, we offer same-day or next-day service. Standard repairs are typically scheduled within a few days of your inspection." },
  { question: "Is it worth repairing an old roof?", answer: "It depends on the extent of damage and roof age. Minor repairs on a newer roof are cost-effective. If your roof is over 20 years old with multiple issues, replacement may be better. We'll give you an honest assessment." },
  { question: "Do you work with insurance companies?", answer: "Yes! We regularly work with insurance companies on storm damage claims. We can help document damage and provide estimates for your claim." },
  { question: "What if you find more damage during the repair?", answer: "We'll contact you immediately to discuss the additional damage and get your approval before proceeding with any extra work." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Roof Repair Jacksonville FL",
  "description": "Professional roof repair services in Jacksonville, Florida. Fast, reliable repairs for leaks, storm damage, and general wear.",
  "url": "https://gimosroofing.com/services/roof-repair",
  "provider": { "@type": "RoofingContractor", "name": "Gimo's Roofing", "telephone": "+1-904-606-5313" },
  "areaServed": { "@type": "City", "name": "Jacksonville, FL" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function RoofRepairPage() {
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
                <span className="text-primary">Roof Repair</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Roof Repair in Jacksonville, FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                Fast, reliable roof repairs for leaks, storm damage, and general wear. Our expert team diagnoses issues quickly and provides lasting solutions to protect your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-repair-in-progress-jacksonville.webp" alt="Roof repair in progress in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-secondary text-center">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="font-bold">Emergency Roof Repair Available</span>
            </div>
            <span className="hidden md:block">|</span>
            <a href="tel:+19046065313" className="font-bold hover:underline">Call Now: (904) 606-5313</a>
          </div>
        </div>
      </section>

      {/* Repair Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Repair Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We handle all types of roof repairs to keep your home protected.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map((repair) => (
              <div key={repair.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-secondary mb-2">{repair.title}</h3>
                <p className="text-gray-600 text-sm">{repair.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Repair Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We make roof repairs simple and stress-free.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: 1, title: "Contact Us", desc: "Call or request an estimate online" },
              { step: 2, title: "Inspection", desc: "We assess the damage and provide a quote" },
              { step: 3, title: "Repair", desc: "Our experts complete the repair" },
              { step: 4, title: "Follow-Up", desc: "We ensure your satisfaction" }
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-12 h-12 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">{item.step}</div>
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
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
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Need a Roof Repair?</h2>
          <p className="text-secondary/80 mb-6">Get a free inspection and estimate for your roof repair today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
