import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Commercial Roofing Jacksonville FL - Local Contractors",
  description: "Local commercial roofing company in Jacksonville FL. TPO, flat roof, metal. Installation, repair & maintenance. Free estimates: (904) 606-5313.",
  keywords: ["commercial roofing jacksonville fl", "local commercial roofing company", "commercial roofing maintenance", "commercial roofing contractors jacksonville fl", "jacksonville commercial roofing", "commercial roofers jacksonville fl"],
  alternates: { canonical: "https://www.gimosroofing.com/services/commercial-roofing" },
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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Commercial Roofing Jacksonville FL",
  "description": "Professional commercial roofing services in Jacksonville, Florida. TPO, EPDM, metal roofing and more for businesses.",
  "url": "https://www.gimosroofing.com/services/commercial-roofing",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Gimo's Roofing",
    "telephone": "+1-904-606-5313",
    "url": "https://www.gimosroofing.com",
    "logo": "https://www.gimosroofing.com/gimos-roofing-logo.webp",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "33 24th Street East",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "postalCode": "32206",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "81",
      "bestRating": "5",
      "worstRating": "1"
    },
    "priceRange": "$$"
  },
  "areaServed": {
    "@type": "City",
    "name": "Jacksonville",
    "addressRegion": "FL"
  },
  "serviceType": "Commercial Roofing"
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Commercial Roofing Jacksonville FL - Local Contractors</h1>
              <p className="text-lg text-gray-200 mb-6">
                Local commercial roofing company serving Jacksonville businesses. TPO, EPDM, metal roofing. Installation, repair, and maintenance contracts.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/commercial-roofing-services.webp" alt="Commercial roofing in Jacksonville FL" title="Commercial roofing in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Roofing Systems Overview */}
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

      {/* Detailed Roofing Systems */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Commercial Roofing Systems In-Depth</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Understanding the differences between commercial roofing systems helps you make the best choice for your building.</p>
          </div>

          <div className="space-y-8">
            {/* TPO */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">TPO (Thermoplastic Polyolefin)</h3>
                  <p className="text-gray-600 mb-4">TPO is the fastest-growing commercial roofing membrane in the U.S. This single-ply membrane combines the benefits of EPDM rubber and PVC roofing while avoiding their drawbacks. TPO reflects UV rays, keeping buildings cooler and reducing energy costs - especially valuable in Jacksonville&apos;s hot climate.</p>
                  <p className="text-gray-600 mb-4">TPO seams are heat-welded, creating a watertight bond stronger than the membrane itself. This eliminates the adhesive failures common with other systems. We install TPO in white, tan, and gray, with white providing the best energy performance. Typical warranties range from 15-30 years.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $5-8 per square foot installed. Ideal for buildings under 5 stories.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
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
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">EPDM (Ethylene Propylene Diene Monomer)</h3>
                  <p className="text-gray-600 mb-4">EPDM is a durable rubber roofing membrane with a 50+ year track record. It&apos;s extremely resistant to UV radiation, ozone, and weathering. EPDM is available in black (traditional) and white (reflective) options. The material remains flexible even in cold temperatures, making it resistant to cracking.</p>
                  <p className="text-gray-600 mb-4">EPDM can be installed fully adhered, mechanically attached, or ballasted. Seams are joined with adhesive or tape. While reliable, EPDM seams require periodic inspection and maintenance. The system handles ponding water well, making it suitable for flat roofs with drainage challenges.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $5-7 per square foot installed. Excellent for budget-conscious building owners.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
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
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Commercial Metal Roofing</h3>
                  <p className="text-gray-600 mb-4">Metal roofing offers unmatched durability and hurricane performance for commercial buildings. Standing seam systems with concealed fasteners provide the best long-term performance, rated for winds exceeding 180 mph. Metal is ideal for sloped commercial roofs and buildings requiring maximum storm protection.</p>
                  <p className="text-gray-600 mb-4">We install steel, aluminum, and zinc metal roofing systems. Steel is most economical; aluminum resists corrosion for coastal locations. Metal roofs reflect heat, reducing cooling costs, and last 40-70 years with minimal maintenance. They&apos;re also 100% recyclable at end of life.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $8-15 per square foot installed depending on panel type and material.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
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
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Modified Bitumen</h3>
                  <p className="text-gray-600 mb-4">Modified bitumen is an evolution of built-up roofing (BUR) that uses factory-manufactured sheets rather than field-applied layers. The asphalt is modified with rubber or plastic polymers for improved flexibility and durability. It provides excellent waterproofing and handles foot traffic well.</p>
                  <p className="text-gray-600 mb-4">We install modified bitumen using torch-applied, cold-adhesive, or self-adhering methods. Multi-ply systems provide redundant waterproofing protection. Reflective coatings can be added to improve energy efficiency. Modified bitumen is well-suited for buildings requiring regular roof access for equipment maintenance.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $6-10 per square foot installed for 2-3 ply systems.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
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
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">New Roof Installation</h3>
              <p className="text-gray-600 text-sm">Complete installation of TPO, EPDM, metal, and modified bitumen systems for new construction and re-roofing projects. We work with your timeline and budget.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Roof Replacement</h3>
              <p className="text-gray-600 text-sm">Full tear-off and replacement of failing commercial roofs. We minimize business disruption with phased installation when needed.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Roof Repairs</h3>
              <p className="text-gray-600 text-sm">Repair of leaks, punctures, membrane damage, and flashing failures. Emergency repairs available for active leaks.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Roof Maintenance</h3>
              <p className="text-gray-600 text-sm">Scheduled inspection and maintenance programs to extend roof life and catch problems early. Customized plans for your building.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Roof Coatings</h3>
              <p className="text-gray-600 text-sm">Reflective and protective coatings to extend roof life, improve energy efficiency, and restore aging membranes.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Emergency Services</h3>
              <p className="text-gray-600 text-sm">24/7 emergency response for storm damage and active leaks. Tarping, temporary repairs, and damage documentation for insurance.</p>
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
                    <h3 className="font-bold text-secondary">Proper Insurance & Licensing</h3>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Industries We Serve</h2>
              <p className="text-gray-600 mb-8">We provide commercial roofing services to a wide range of businesses.</p>
              <div className="grid grid-cols-2 gap-4">
                {industries.map((industry) => (
                  <div key={industry} className="bg-white rounded-lg p-4 text-center shadow-sm">
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

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Frequently Asked Questions</h2>
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
            <Link href="/blog/commercial-roofing-types-florida" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Commercial Roofing Types Guide</h3>
              <p className="text-gray-600 text-sm">Compare TPO, EPDM, metal, and other commercial roofing systems for Florida businesses.</p>
            </Link>
            <Link href="/blog/flat-roof-options-florida" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Flat Roof Options for Florida</h3>
              <p className="text-gray-600 text-sm">Complete guide to flat roofing systems and which works best for your commercial building.</p>
            </Link>
            <Link href="/blog/tpo-vs-epdm-roofing-florida" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">TPO vs EPDM Roofing</h3>
              <p className="text-gray-600 text-sm">Detailed comparison of the two most popular commercial roofing membranes.</p>
            </Link>
            <Link href="/blog/roof-coating-options-florida" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Coating Options</h3>
              <p className="text-gray-600 text-sm">Extend your commercial roof&apos;s life with protective coatings and cool roof systems.</p>
            </Link>
            <Link href="/blog/roof-drainage-systems-florida" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Commercial Roof Drainage</h3>
              <p className="text-gray-600 text-sm">Proper drainage is critical for flat roofs. Learn about scuppers, drains, and gutters.</p>
            </Link>
            <Link href="/service-areas" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
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
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
