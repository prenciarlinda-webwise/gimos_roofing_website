import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Commercial Roofing - Gimo's Roofing" },
  description: "Professional commercial roofing from Gimo's Roofing. TPO, EPDM, metal, and modified bitumen installation, repair, and maintenance for businesses. Call (904) 606-5313.",
  openGraph: {
    title: "Commercial Roofing - Gimo's Roofing",
    description: "Commercial roofing for businesses. TPO, EPDM, metal, and flat roof systems. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/services/commercial-roofing",
  },
  alternates: { canonical: "https://www.gimosroofing.com/services/commercial-roofing" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const phone = "(904) 606-5313"

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
)

const roofingSystems = [
  { name: "TPO Roofing", description: "Single-ply membrane that reflects UV rays and reduces cooling costs. Excellent for Jacksonville's hot climate.", benefits: ["Energy efficient", "UV resistant", "Cost-effective", "Easy maintenance"] },
  { name: "EPDM Roofing", description: "Durable rubber roofing membrane known for its longevity and resistance to extreme weather.", benefits: ["Long lifespan", "Weather resistant", "Affordable", "Flexible"] },
  { name: "Metal Roofing", description: "Standing seam and other metal systems for commercial buildings requiring superior durability.", benefits: ["50+ year lifespan", "Hurricane rated", "Low maintenance", "Fire resistant"] },
  { name: "Modified Bitumen", description: "Multi-layer asphalt roofing system that provides excellent waterproofing and durability.", benefits: ["Superior waterproofing", "High durability", "Good for foot traffic", "Easy repairs"] }
]

const industries = ["Retail Stores", "Office Buildings", "Warehouses", "Restaurants", "Medical Facilities", "Churches", "Schools", "Industrial Buildings"]

const serviceAreas = [
  { name: "Jacksonville", slug: "roofing-jacksonville-fl", county: "Duval" },
  { name: "Jacksonville Beach", slug: "roofing-jacksonville-beach-fl", county: "Duval" },
  { name: "Atlantic Beach", slug: "roofing-atlantic-beach-fl", county: "Duval" },
  { name: "Neptune Beach", slug: "roofing-neptune-beach-fl", county: "Duval" },
  { name: "Riverside", slug: "roofing-riverside-fl", county: "Duval" },
  { name: "San Marco", slug: "roofing-san-marco-fl", county: "Duval" },
  { name: "Mandarin", slug: "roofing-mandarin-fl", county: "Duval" },
  { name: "Southside", slug: "roofing-southside-jax-fl", county: "Duval" },
  { name: "St. Augustine", slug: "roofing-st-augustine-fl", county: "St. Johns" },
  { name: "Ponte Vedra Beach", slug: "roofing-ponte-vedra-beach-fl", county: "St. Johns" },
  { name: "Nocatee", slug: "roofing-nocatee-fl", county: "St. Johns" },
  { name: "Orange Park", slug: "roofing-orange-park-fl", county: "Clay" },
  { name: "Fernandina Beach", slug: "roofing-fernandina-beach-fl", county: "Nassau" }
]

const serviceAreasByCounty = serviceAreas.reduce<Record<string, typeof serviceAreas>>((acc, area) => {
  (acc[area.county] = acc[area.county] || []).push(area)
  return acc
}, {})

const faqs = [
  { question: "Do you work on large commercial buildings?", answer: "Yes, we handle commercial roofing projects of all sizes, from small retail spaces to large warehouses and industrial facilities throughout Jacksonville." },
  { question: "Can you work around our business hours?", answer: "Absolutely. We understand that business disruption means lost revenue. We can schedule work during off-hours, weekends, or in phases to minimize impact on your operations." },
  { question: "Do you offer commercial roof maintenance plans?", answer: "Yes, we offer customized maintenance plans to extend your roof's lifespan and catch potential issues before they become costly problems. Plans include regular inspections, minor repairs, and priority emergency service." },
  { question: "How long does a commercial roof installation take?", answer: "Timeline varies based on building size and roofing system. A 10,000 sq ft TPO roof typically takes 3-5 days. Larger projects may take 1-3 weeks. We provide detailed project timelines during the estimate process." },
  { question: "What commercial roofing system is best for Jacksonville?", answer: "TPO and metal are most popular for Jacksonville's climate. TPO offers excellent UV resistance and energy efficiency. Metal provides superior durability and hurricane performance. The best choice depends on your building type, budget, and priorities." },
  { question: "How much does commercial roof replacement cost?", answer: "Commercial roofing typically costs $5-15 per square foot installed depending on the system. TPO: $5-8/sq ft. Metal: $8-15/sq ft. Modified bitumen: $6-10/sq ft. Large projects often qualify for volume pricing." },
  { question: "Do you handle commercial roof repairs?", answer: "Yes, we repair all commercial roofing systems including TPO, EPDM, metal, modified bitumen, and built-up roofing. We offer emergency repairs for active leaks and scheduled repairs for non-urgent issues." },
  { question: "Can you install a new roof over the existing one?", answer: "Sometimes. If the existing roof has only one layer and the deck is in good condition, overlay may be possible. However, we generally recommend tear-off for better long-term performance and full warranty coverage." },
  { question: "What warranties do you offer on commercial roofs?", answer: "We offer manufacturer warranties ranging from 10-30 years depending on the system and installation type. Our workmanship warranty is 5-10 years. Extended warranties are available on qualifying projects." },
  { question: "Do commercial roofs require permits in Jacksonville?", answer: "Yes, Jacksonville requires permits for commercial roofing work. We handle all permitting, inspections, and code compliance. Our team is familiar with local requirements and ensures full compliance." },
  { question: "How often should commercial roofs be inspected?", answer: "We recommend semi-annual inspections (spring and fall) plus inspections after major storms. Regular inspections catch small problems before they become expensive repairs and help maximize roof lifespan." },
  { question: "Can you help with roof-related insurance claims?", answer: "Yes, we assist with storm damage documentation, insurance estimates, and adjuster meetings for commercial properties. We've helped many Jacksonville businesses navigate the claims process successfully." }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/commercial-roofing#service",
  "@type": "Service",
  "name": "Commercial Roofing in Jacksonville FL",
  "serviceType": "Commercial Roofing",
  "description": "Commercial roofing in Jacksonville FL for TPO, EPDM, metal, and modified bitumen systems. Installation, repair, and maintenance across Duval, St. Johns, Clay, and Nassau counties.",
  "url": "https://www.gimosroofing.com/services/commercial-roofing",
  "provider": { "@id": "https://www.gimosroofing.com/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Jacksonville, FL", "sameAs": "https://en.wikipedia.org/wiki/Jacksonville,_Florida" },
    { "@type": "City", "name": "Jacksonville Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Jacksonville_Beach,_Florida" },
    { "@type": "City", "name": "Atlantic Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Atlantic_Beach,_Florida" },
    { "@type": "City", "name": "Neptune Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Neptune_Beach,_Florida" },
    { "@type": "City", "name": "St. Augustine, FL", "sameAs": "https://en.wikipedia.org/wiki/St._Augustine,_Florida" },
    { "@type": "City", "name": "Ponte Vedra Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Ponte_Vedra_Beach,_Florida" },
    { "@type": "City", "name": "Nocatee, FL", "sameAs": "https://en.wikipedia.org/wiki/Nocatee,_Florida" },
    { "@type": "City", "name": "Orange Park, FL", "sameAs": "https://en.wikipedia.org/wiki/Orange_Park,_Florida" },
    { "@type": "City", "name": "Fernandina Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Fernandina_Beach,_Florida" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Commercial Roofing Options",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "TPO Roofing Installation", "description": "Heat-welded single-ply TPO membrane installation for commercial buildings." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "EPDM Roofing Installation", "description": "Durable EPDM rubber membrane installation for flat and low-slope commercial roofs." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Metal Roofing", "description": "Standing seam and metal panel roofing for sloped commercial buildings with hurricane-rated performance." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Modified Bitumen Roofing", "description": "Multi-ply modified bitumen installation for buildings with rooftop equipment and foot traffic." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roof Maintenance", "description": "Scheduled semi-annual inspections and maintenance to extend commercial roof life." } }
    ]
  }

}

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/commercial-roofing#faq",
  "@type": "FAQPage",
  "about": { "@id": "https://www.gimosroofing.com/services/commercial-roofing#service" },
  "mainEntityOfPage": "https://www.gimosroofing.com/services/commercial-roofing",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/commercial-roofing#breadcrumb",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Commercial Roofing - TPO, Metal &amp; Flat Roof Systems</h1>
              <p className="text-lg text-gray-200 mb-6">
                Need a commercial roofing contractor Jacksonville businesses trust? Gimo&apos;s Roofing serves businesses across Duval, St. Johns, Clay, and Nassau counties with TPO, EPDM, metal, and modified bitumen roofing. Installation, commercial roof repair Jacksonville, and long-term maintenance contracts available.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">{phone}</a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
                <Image src="/images/commercial-roofing-services.webp" alt="Commercial roofing in Jacksonville FL" title="Commercial roofing in Jacksonville FL" fill className="object-cover" priority />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl aspect-[4/3] overflow-hidden shadow-lg relative">
                  <Image src="/images/jacksonville-commercial-roofing.webp" alt="Jacksonville commercial roofing project" title="Jacksonville commercial roofing project" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="rounded-xl aspect-[4/3] overflow-hidden shadow-lg relative">
                  <Image src="/images/flat-metal-roof-installation.webp" alt="Flat metal commercial roof installation" title="Flat metal commercial roof installation in Jacksonville" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Review Ribbon */}
      <section className="bg-white border-b border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-secondary">FL License #CCC1332453</span>
              <span className="text-gray-300">|</span>
              <div className="flex text-primary">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <span className="text-sm font-semibold text-secondary">5-Star Rated by Jacksonville Businesses</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://maps.app.goo.gl/hC3XuE5pKA2ypPAQA" target="_blank" rel="noopener" title="View Gimo's Roofing Google Reviews">
                <Image src="/google-logo.png" alt="Read Gimo's Roofing reviews on Google" title="Google Reviews" width={80} height={28} className="h-7 w-auto object-contain" />
              </a>
              <a href="https://www.yelp.com/biz/gimos-roofing-jacksonville" target="_blank" rel="noopener" title="View Gimo's Roofing Yelp Reviews">
                <Image src="/yelp-logo.svg" alt="Read Gimo's Roofing reviews on Yelp" title="Yelp Reviews" width={70} height={28} className="h-7 w-auto object-contain" unoptimized />
              </a>
              <a href="https://www.thumbtack.com/fl/jacksonville/roofing/gimos-renovation-roofing/service/478820963508404237" target="_blank" rel="noopener" title="View Gimo's Roofing Thumbtack Reviews">
                <Image src="/thumbtack-logo.svg" alt="Read Gimo's Roofing reviews on Thumbtack" title="Thumbtack Reviews" width={36} height={36} className="h-7 w-auto object-contain" unoptimized />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Systems Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Commercial Roofing Systems We Install</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Gimo&apos;s Roofing delivers commercial roofing in Jacksonville FL tailored to your building type, budget, and long-term goals. Our crews install and maintain every major flat and low-slope commercial roofing system used across Northeast Florida.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {roofingSystems.map((system) => (
              <div key={system.name} className="card p-6">
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

      {/* Detailed Roofing Systems */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Commercial Roofing Systems In-Depth</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Understanding the differences between commercial roofing systems helps you make the best choice for your building. Compare two of the most popular options in our <Link href="/blog/tpo-vs-epdm-roofing-florida" className="text-primary hover:underline">TPO vs EPDM roofing guide</Link>.</p>
          </div>

          <div className="space-y-8">
            {/* TPO */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">TPO (Thermoplastic Polyolefin)</h3>
                  <p className="text-gray-600 mb-4">TPO is the fastest-growing commercial roofing membrane in the U.S. This single-ply membrane combines the benefits of EPDM rubber and PVC roofing while avoiding their drawbacks. TPO reflects UV rays, keeping buildings cooler and reducing energy costs, which is especially valuable in Jacksonville&apos;s hot climate.</p>
                  <p className="text-gray-600 mb-4">TPO seams are heat-welded, creating a watertight bond stronger than the membrane itself. This eliminates the adhesive failures common with other systems. As a full-service <Link href="/" className="text-primary hover:underline">Jacksonville roofing company</Link>, we install TPO in white, tan, and gray, with white providing the best energy performance. Typical warranties range from 15-30 years.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $5-8 per square foot installed. Ideal for buildings under 5 stories.</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-bold text-secondary mb-3">Best For</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Retail buildings</li>
                    <li>&#8226; Office buildings</li>
                    <li>&#8226; Medical facilities</li>
                    <li>&#8226; New construction</li>
                    <li>&#8226; Energy-conscious owners</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* EPDM */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">EPDM (Ethylene Propylene Diene Monomer)</h3>
                  <p className="text-gray-600 mb-4">EPDM is a durable rubber roofing membrane with a 50+ year track record. It&apos;s extremely resistant to UV radiation, ozone, and weathering. EPDM is available in black (traditional) and white (reflective) options. The material remains flexible even in cold temperatures, making it resistant to cracking.</p>
                  <p className="text-gray-600 mb-4">EPDM can be installed fully adhered, mechanically attached, or ballasted. Seams are joined with adhesive or tape. While reliable, EPDM seams require periodic inspection and maintenance. The system handles ponding water well, making it suitable for flat roofs with drainage challenges.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $5-7 per square foot installed. Excellent for budget-conscious building owners.</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-bold text-secondary mb-3">Best For</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Warehouses</li>
                    <li>&#8226; Industrial buildings</li>
                    <li>&#8226; Budget projects</li>
                    <li>&#8226; Large flat roofs</li>
                    <li>&#8226; Low-traffic areas</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Metal */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Commercial Metal Roofing</h3>
                  <p className="text-gray-600 mb-4">Metal roofing offers unmatched durability and hurricane performance for commercial buildings. Standing seam systems with concealed fasteners provide the best long-term performance, rated for winds exceeding 180 mph. Metal is ideal for sloped commercial roofs and buildings requiring maximum storm protection.</p>
                  <p className="text-gray-600 mb-4">We install steel, aluminum, and zinc metal roofing systems. Steel is most economical, and aluminum resists corrosion for coastal locations. Metal roofs reflect heat, reducing cooling costs, and last 40-70 years with minimal maintenance. They&apos;re also 100% recyclable at end of life.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $8-15 per square foot installed depending on panel type and material.</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-bold text-secondary mb-3">Best For</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Churches</li>
                    <li>&#8226; Schools</li>
                    <li>&#8226; Restaurants</li>
                    <li>&#8226; Sloped roofs</li>
                    <li>&#8226; Hurricane zones</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Modified Bitumen */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Modified Bitumen</h3>
                  <p className="text-gray-600 mb-4">Modified bitumen is an evolution of built-up roofing (BUR) that uses factory-manufactured sheets rather than field-applied layers. The asphalt is modified with rubber or plastic polymers for improved flexibility and durability. It provides excellent waterproofing and handles foot traffic well.</p>
                  <p className="text-gray-600 mb-4">We install modified bitumen using torch-applied, cold-adhesive, or self-adhering methods. Multi-ply systems provide redundant waterproofing protection. Reflective coatings can be added to improve energy efficiency. Modified bitumen is well-suited for buildings requiring regular roof access for equipment maintenance.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $6-10 per square foot installed for 2-3 ply systems.</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-bold text-secondary mb-3">Best For</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Buildings with rooftop equipment</li>
                    <li>&#8226; High foot traffic areas</li>
                    <li>&#8226; Restaurants (grease resistant)</li>
                    <li>&#8226; Complex roof shapes</li>
                    <li>&#8226; Budget projects</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Commercial Roofing Services</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">From new construction to maintenance and repairs, we provide complete commercial roofing services.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">New Roof Installation</h3>
              <p className="text-gray-600 text-sm">Complete installation of TPO, EPDM, metal, and modified bitumen systems for new construction and re-roofing projects. We work with your timeline and budget.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Roof Replacement</h3>
              <p className="text-gray-600 text-sm">Full tear-off and replacement of failing commercial roofs. We minimize business disruption with phased installation when needed.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Roof Repairs</h3>
              <p className="text-gray-600 text-sm">Repair of leaks, punctures, membrane damage, and flashing failures. Emergency repairs available for active leaks.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Roof Maintenance</h3>
              <p className="text-gray-600 text-sm">Scheduled inspection and maintenance programs to extend roof life and catch problems early. Customized plans for your building.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Roof Coatings</h3>
              <p className="text-gray-600 text-sm">Reflective and protective coatings to extend roof life, improve energy efficiency, and restore aging membranes.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Emergency Services</h3>
              <p className="text-gray-600 text-sm">24/7 <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency roof repair in Jacksonville FL</Link> for storm damage and active leaks. Tarping, temporary repairs, and damage documentation for insurance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Why Jacksonville Businesses Choose Us</h2>
              <p className="text-gray-600 mb-6">Commercial roofing requires different expertise than residential work. Here&apos;s what sets us apart:</p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Minimal Business Disruption</h3>
                    <p className="text-gray-600 text-sm">We work around your schedule, including nights and weekends. Phased installation keeps your business operational.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Commercial Experience</h3>
                    <p className="text-gray-600 text-sm">Our crews are trained specifically in commercial systems. We understand flat roof challenges and building code requirements.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Manufacturer Certified</h3>
                    <p className="text-gray-600 text-sm">We&apos;re certified installers for major commercial roofing manufacturers, qualifying your project for enhanced warranty coverage.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Proper Insurance &amp; Licensing</h3>
                    <p className="text-gray-600 text-sm">Fully licensed, bonded, and insured for commercial work. We provide certificates of insurance to your property manager.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Maintenance Programs</h3>
              <p className="text-gray-600 mb-4">Extend your roof&apos;s lifespan and prevent costly emergency repairs with our maintenance programs:</p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Semi-annual inspections</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Debris removal and drain clearing</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Minor repairs included</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Detailed condition reports</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Priority emergency service</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Budget forecasting for replacements</li>
              </ul>
              <div className="mt-6">
                <a href="tel:+19046065313" className="btn btn-primary w-full text-center">Call to Discuss Your Building</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Industries We Serve</h2>
              <p className="text-gray-600 mb-8">We provide commercial roofing services to a wide range of businesses.</p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div key={industry} className="card p-4 text-center">
                    <span className="text-secondary font-medium">{industry}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/jacksonville-commercial-roofing.webp" alt="Commercial roofing services in Jacksonville FL" title="Commercial roofing services in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Commercial Roofing Service Areas in Northeast Florida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We serve commercial clients throughout Duval, St. Johns, Clay, and Nassau counties.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`Commercial Roofing in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
                      <span className="block text-sm font-semibold text-secondary group-hover:text-secondary">{area.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Gimo&apos;s Roofing Answers</span>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Commercial Roofing FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Commercial Roofing Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about commercial roofing options, maintenance, and flat roof systems.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/commercial-roofing-types-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Commercial Roofing Types Guide</h3>
              <p className="text-gray-600 text-sm">Compare TPO, EPDM, metal, and other commercial roofing systems for Florida businesses.</p>
            </Link>
            <Link href="/blog/flat-roof-options-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Flat Roof Options for Florida</h3>
              <p className="text-gray-600 text-sm">Complete guide to flat roofing systems and which works best for your commercial building.</p>
            </Link>
            <Link href="/blog/tpo-vs-epdm-roofing-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">TPO vs EPDM Roofing</h3>
              <p className="text-gray-600 text-sm">Detailed comparison of the two most popular commercial roofing membranes.</p>
            </Link>
            <Link href="/blog/roof-coating-options-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Coating Options</h3>
              <p className="text-gray-600 text-sm">Extend your commercial roof&apos;s life with protective coatings and cool roof systems.</p>
            </Link>
            <Link href="/blog/roof-drainage-systems-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Commercial Roof Drainage</h3>
              <p className="text-gray-600 text-sm">Proper drainage is critical for flat roofs. Learn about scuppers, drains, and gutters.</p>
            </Link>
            <Link href="/service-areas" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Service Areas</h3>
              <p className="text-gray-600 text-sm">We provide commercial roofing throughout Jacksonville and Northeast Florida.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Need Commercial Roofing?</h2>
          <p className="text-secondary/80 mb-6">Get a free estimate for your commercial roofing project today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
