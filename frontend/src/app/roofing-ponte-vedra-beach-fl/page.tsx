import { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Company Ponte Vedra Beach FL | Luxury Home Roof Services | Gimo's Roofing",
  description: "Premium roofing services for Ponte Vedra Beach's luxury homes and golf communities. Expert roof replacement, repair & installation. Free estimates: (904) 606-5313.",
}

const location = "Ponte Vedra Beach"
const county = "St. Johns County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" }
]

const faqs = [
  { question: `How much does roof replacement cost in ${location}?`, answer: `In ${location}, roof replacement typically ranges from $10,000 to $45,000+ for luxury homes. Premium materials and larger home sizes factor into pricing. Financing available.` },
  { question: `Do you work with HOAs in ${location}?`, answer: `Yes! We're familiar with HOA requirements throughout Ponte Vedra's communities including TPC, Marsh Landing, and Sawgrass. We ensure materials and colors meet community standards.` },
  { question: `What roofing is best for ${location} luxury homes?`, answer: `We recommend premium architectural shingles, standing seam metal, or tile roofing for ${location}'s upscale homes. Each provides excellent durability and enhances curb appeal.` },
  { question: `Do you provide hurricane damage repair?`, answer: `Yes! We offer 24/7 emergency storm response. Call ${phone} for immediate assistance with tarping, damage assessment, and insurance claims.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": `Gimo's Roofing - ${location}`,
  "url": "https://gimosroofing.com/roofing-ponte-vedra-beach-fl",
  "telephone": phone,
  "areaServed": { "@type": "City", "name": location },
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "65" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function PonteVedraBeachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Company in {location}, FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Premium roofing services for Ponte Vedra&apos;s luxury homes and golf communities. Quality materials, expert craftsmanship.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ HOA Compliant</span>
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
            {location} is home to some of Northeast Florida&apos;s most prestigious communities, from TPC Sawgrass to Marsh Landing. These luxury properties deserve premium roofing that matches their quality and protects their value.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we specialize in serving Ponte Vedra&apos;s discerning homeowners with top-tier materials, meticulous installation, and outstanding customer service. We work seamlessly with HOAs and understand the standards expected in your community.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Services in {location}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "Luxury Roof Replacement", desc: "Premium materials for high-end homes. Starting at $10,000." },
              { title: "Storm Damage Repair", desc: "24/7 emergency response for hurricane damage." },
              { title: "Roof Repair", desc: "Expert repairs for all roofing types." },
              { title: "Metal Roofing", desc: "Standing seam systems for modern elegance." },
              { title: "Tile Roofing", desc: "Mediterranean style for coastal homes." },
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
