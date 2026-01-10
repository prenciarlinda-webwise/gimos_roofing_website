import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Siding Repair Jacksonville FL - Fast Vinyl Siding Repair",
  description: "Reliable siding repair in Jacksonville FL. Vinyl siding repair, storm damage & section replacement services. Free estimates: (904) 606-5313.",
  keywords: ["siding repair jacksonville fl", "vinyl siding repair", "siding replacement jacksonville", "storm damage siding repair", "siding contractors near me"],
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const repairTypes = [
  { title: "Storm Damage Repair", description: "Fast repairs for siding damaged by hurricanes, hail, wind, and severe weather events." },
  { title: "Crack & Hole Repair", description: "Fix cracks, holes, and punctures in your siding before they lead to bigger problems." },
  { title: "Section Replacement", description: "Replace damaged siding sections with matching materials for a seamless repair." },
  { title: "Warped Siding Repair", description: "Fix buckling, warping, and bulging siding caused by heat, moisture, or improper installation." },
  { title: "Rot & Water Damage", description: "Address water damage and rot in wood siding before it spreads to your home's structure." },
  { title: "Loose Siding Repair", description: "Re-secure loose panels and fasteners to prevent further damage and improve appearance." }
]

const signs = [
  "Cracks, holes, or punctures in siding",
  "Warping, buckling, or bulging panels",
  "Faded or peeling paint",
  "Loose or missing siding pieces",
  "Water stains on interior walls",
  "Increased energy bills",
  "Mold or mildew growth",
  "Visible rot on wood siding"
]

const faqs = [
  { question: "Can you match my existing siding color?", answer: "In most cases, yes. We carry a wide range of siding colors and can often find exact or very close matches. For older siding, we may source from specialty suppliers or recommend replacing larger sections for uniformity." },
  { question: "How quickly can you repair storm damage?", answer: "For emergency storm damage, we offer priority scheduling. We can typically assess damage within 24-48 hours and begin repairs as soon as materials are available." },
  { question: "Is it better to repair or replace my siding?", answer: "It depends on the extent of damage and siding age. Small areas of damage on newer siding are worth repairing. Extensive damage or aging siding may be more cost-effective to replace entirely." },
  { question: "Do you work with insurance for siding repairs?", answer: "Yes, we regularly work with insurance companies on storm damage claims. We can document damage and provide detailed estimates for your insurance claim." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Siding Repair Jacksonville FL",
  "description": "Professional siding repair services in Jacksonville, Florida. Storm damage repair, section replacement, and more.",
  "url": "https://www.gimosroofing.com/services/siding-repair",
  "provider": { "@type": "HomeAndConstructionBusiness", "name": "Gimo's Roofing", "telephone": "+1-904-606-5313" },
  "areaServed": { "@type": "City", "name": "Jacksonville, FL" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function SidingRepairPage() {
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
                <span className="text-primary">Siding Repair</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Expert Siding Repair Services Jacksonville FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                Expert siding repairs to restore your home&apos;s protection and curb appeal. We fix damage from storms, age, and everyday wear with quality materials and craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/siding-project-closeup.webp" alt="Siding repair project in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Repair Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Repair Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We handle all types of siding repairs to keep your home protected.</p>
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

      {/* Signs You Need Repair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Signs Your Siding Needs Repair</h2>
              <p className="text-gray-600 mb-6">Look for these warning signs that indicate your siding needs professional attention:</p>
              <ul className="space-y-3">
                {signs.map((sign) => (
                  <li key={sign} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/siding-installation-worker-ladder.webp" alt="Siding repair in progress" fill className="object-cover" />
            </div>
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
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Need Siding Repair?</h2>
          <p className="text-secondary/80 mb-6">Get a free estimate for your siding repair project today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
