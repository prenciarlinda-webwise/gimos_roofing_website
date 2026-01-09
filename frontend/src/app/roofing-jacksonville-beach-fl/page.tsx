import { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Company Jacksonville Beach FL | Beach Home Roof Repair & Replacement | Gimo's",
  description: "Living at Jacksonville Beach means salt air and storms constantly testing your roof. We use coastal-grade materials that actually hold up to beach conditions. Free estimates: (904) 606-5313.",
}

const location = "Jacksonville Beach"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Fernandina Beach", href: "/roofing-fernandina-beach-fl" }
]

const faqs = [
  { question: `How much does roof replacement cost in ${location}?`, answer: `Coastal roof replacement in ${location} ranges from $8,500 to $32,000+ depending on size and materials. Oceanfront properties require salt-resistant materials. Financing available from $99/month.` },
  { question: `What's the best roofing for beachfront homes?`, answer: `For ${location}'s beach environment, we recommend aluminum standing seam metal (best salt resistance), impact-resistant shingles with algae protection, or concrete tile for classic Florida style.` },
  { question: `How long do roofs last near the beach?`, answer: `Standard shingles may only last 15-20 years near the ocean due to salt exposure. With proper coastal materials and maintenance, expect 25-50+ years depending on material choice.` },
  { question: `Do you provide hurricane damage repair?`, answer: `Yes! We offer 24/7 emergency storm response for ${location}. Call ${phone} for immediate tarping, damage assessment, and insurance claim assistance.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": `Gimo's Roofing - ${location}`,
  "url": "https://gimosroofing.com/roofing-jacksonville-beach-fl",
  "telephone": phone,
  "address": { "@type": "PostalAddress", "addressLocality": "Jacksonville", "addressRegion": "FL", "postalCode": "32206" },
  "areaServed": { "@type": "City", "name": location },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "78" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function JacksonvilleBeachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & The Beaches</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Company in {location}, FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Beach home roofing specialists. Salt-resistant materials, hurricane-rated installation, protecting Jax Beach properties.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Beach Specialists</span>
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
            {location} is one of Northeast Florida&apos;s most vibrant beach communities, but living near the ocean means your roof faces relentless salt air, intense UV exposure, and hurricane threats. At Gimo&apos;s Roofing, we specialize in protecting Jax Beach homes with materials and techniques designed for coastal conditions.
          </p>
          <p className="text-gray-600">
            From the bustling downtown area to quieter residential streets, we&apos;ve completed roofing projects throughout {location}. Our team understands what it takes to make a roof last in this challenging environment.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Beach Home Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Beach Roof Replacement", desc: "Complete tear-off with coastal-grade materials. Starting at $8,500." },
              { title: "Storm Damage Repair", desc: "24/7 emergency response for hurricane and storm damage." },
              { title: "Roof Repair", desc: "Fix leaks, replace damaged shingles, repair flashing." },
              { title: "Metal Roofing", desc: "Aluminum standing seam for maximum salt resistance." },
              { title: "Tile Roofing", desc: "Classic Florida style with superior durability." },
              { title: "Roof Inspections", desc: "Annual inspections for coastal properties." }
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
