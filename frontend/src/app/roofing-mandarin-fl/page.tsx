import { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Company Mandarin Jacksonville FL - Local Roofers",
  description: "Trusted roofers in Mandarin Jacksonville FL. Quality roof repair & replacement along St. Johns River. Free estimates: (904) 606-5313.",
  keywords: ["roofing company mandarin jacksonville fl", "mandarin roofers", "roof repair mandarin", "roof replacement mandarin fl", "duval county roofing"],
}

const location = "Mandarin"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" },
  { name: "Orange Park", href: "/roofing-orange-park-fl" },
  { name: "Riverside", href: "/roofing-riverside-fl" }
]

const faqs = [
  { question: `How much does roof replacement cost in ${location}?`, answer: `Roof replacement in ${location} typically ranges from $7,500 to $28,000 depending on home size and materials. We offer free estimates and financing.` },
  { question: `What roofing materials are popular in ${location}?`, answer: `Architectural shingles are the most popular choice in ${location}. Metal roofing is growing in popularity for homeowners wanting longer-lasting options.` },
  { question: `Do you work with HOAs in ${location}?`, answer: `Yes! We're familiar with HOA requirements in Mandarin's various communities and ensure our work meets community standards.` },
  { question: `Do you provide emergency roof repair?`, answer: `Yes! We offer 24/7 emergency storm response for ${location}. Call ${phone} for immediate assistance.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": `Gimo's Roofing - ${location}`,
  "url": "https://www.gimosroofing.com/roofing-mandarin-fl",
  "telephone": phone,
  "areaServed": { "@type": "City", "name": location },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "58" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function MandarinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Mandarin Jacksonville FL Roofing Company - Local Experts</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Quality roofing for {location}&apos;s large residential community. Reliable roof replacement, repair, and installation services.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Free Estimates</span>
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
            {location} is one of Jacksonville&apos;s largest and most established communities, stretching along the beautiful St. Johns River. With homes ranging from riverfront estates to family-friendly subdivisions, {location} needs roofing contractors who understand the area.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we&apos;ve served {location} homeowners for years, building a reputation for honest service, quality materials, and expert installation. From Loretto Road to San Jose Boulevard, we&apos;re your trusted local roofer.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Services in {location}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Roof Replacement", desc: "Complete replacement with quality materials." },
              { title: "Roof Repair", desc: "Fast, reliable repairs for leaks and damage." },
              { title: "Storm Damage", desc: "24/7 emergency response and insurance help." },
              { title: "Architectural Shingles", desc: "Premium shingles in many colors and styles." },
              { title: "Metal Roofing", desc: "Long-lasting metal roof systems." },
              { title: "Roof Inspections", desc: "Free inspections and detailed estimates." }
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
