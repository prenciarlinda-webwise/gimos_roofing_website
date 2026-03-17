import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Southside Jacksonville FL - Residential & Commercial Roofing",
  description: "Roofing in Southside Jacksonville FL. Baymeadows, Deerwood & St. Johns Town Center. Residential & commercial roofing. Call (904) 606-5313.",
  keywords: ["roofing southside jacksonville fl", "southside jax roofers", "commercial roofing jacksonville", "baymeadows roofing", "deerwood roof repair", "southside roof replacement"],
  alternates: { canonical: "https://www.gimosroofing.com/roofing-southside-jax-fl" },
}

const location = "Southside Jacksonville"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" }
]

const faqs = [
  { question: `How much does roof replacement cost in ${location}?`, answer: `Roof replacement in ${location} ranges from $7,500 to $30,000+ for residential properties depending on size and materials. Commercial roofing projects vary significantly based on building size, roof type (flat vs. sloped), and materials. We provide free estimates for both residential and commercial properties.` },
  { question: `Do you handle commercial roofing on the Southside?`, answer: `Yes! We provide full commercial roofing services throughout Southside Jacksonville, including TPO, EPDM, modified bitumen, and metal roofing systems. From office buildings along Gate Parkway to retail centers near St. Johns Town Center, we handle projects of all sizes.` },
  { question: `What roofing materials are best for Southside Jacksonville homes?`, answer: `For residential homes in the Baymeadows and Deerwood areas, architectural shingles remain the most popular choice. Metal roofing is growing in popularity for its 40-60 year lifespan and hurricane resistance. For commercial buildings, TPO and modified bitumen are the most cost-effective and durable flat roof options.` },
  { question: `How do you minimize disruption to businesses during commercial roofing?`, answer: `We understand that Southside businesses can't afford extended downtime. We schedule work around your operating hours, use section-by-section installation to keep your building operational, and maintain clean, safe job sites. Most commercial projects are completed faster than estimated.` },
  { question: `Do you provide emergency roof repair in ${location}?`, answer: `Yes! We offer 24/7 emergency storm response for ${location} residential and commercial properties. Large commercial buildings are especially vulnerable to storm damage. Call ${phone} for immediate tarping, damage assessment, and repair services.` },
  { question: `What's the lifespan of a flat commercial roof on the Southside?`, answer: `A properly installed TPO or EPDM flat roof lasts 20-30 years in Northeast Florida. Modified bitumen systems last 15-20 years. Regular maintenance and inspections are critical for commercial flat roofs to prevent ponding water issues. We offer commercial maintenance programs.` },
  { question: `Do you handle insurance claims for storm damage?`, answer: `Yes! We work with all major insurance carriers and provide thorough documentation of storm damage for both residential and commercial claims. Southside Jacksonville's large commercial buildings often sustain significant storm damage that requires expert documentation for proper claim resolution.` },
  { question: `How often should commercial roofs be inspected?`, answer: `We recommend bi-annual inspections for commercial flat roofs in ${location}, ideally before and after hurricane season. Commercial roofs with HVAC units, skylights, or other penetrations need more frequent checks. Residential roofs should be inspected annually. We offer free inspections for all property types.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#localbusiness",
  "name": "Gimo's Roofing",
  "url": "https://www.gimosroofing.com/roofing-southside-jax-fl",
  "telephone": "+19046065313",
  "logo": "https://www.gimosroofing.com/gimos-roofing-logo.webp",
  "image": "https://www.gimosroofing.com/images/roofing-jacksonville-hero.webp",
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
  "priceRange": "$$",
  "areaServed": {
    "@type": "Neighborhood",
    "name": "Southside Jacksonville",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Jacksonville,_Florida"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services in Southside Jacksonville, FL",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Residential Roof Replacement in Southside Jacksonville FL",
          "description": "Quality residential roofing for Southside Jacksonville homes in Baymeadows, Deerwood, and Tinseltown."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Commercial Roofing in Southside Jacksonville FL",
          "description": "Professional commercial roofing services for Southside Jacksonville businesses, shopping centers, and office buildings."
        }
      }
    ]
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
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.gimosroofing.com/service-areas" },
    { "@type": "ListItem", "position": 3, "name": "Southside Jacksonville", "item": "https://www.gimosroofing.com/roofing-southside-jax-fl" }
  ]
}

export default function SouthsideJaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving Southside Jacksonville & {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Southside Jacksonville FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Residential and commercial roofing for Jacksonville&apos;s Southside. Baymeadows, Deerwood, St. Johns Town Center, and The Avenues. Serving ZIP codes 32216, 32246, and 32256.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Residential & Commercial</span>
          </div>
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/jacksonville-roofing-company.webp" alt="Roofing company serving Southside Jacksonville FL" title="Roofing company serving Southside Jacksonville FL" fill className="object-cover" priority />
            </div>
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

      {/* Project Showcase */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/roofing-company-jacksonville.webp" alt="Roofing company serving Southside Jacksonville FL" title="Roofing Company - Southside Jacksonville FL" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/jacksonville-commercial-roofing.webp" alt="Commercial roofing services in Southside Jacksonville FL" title="Commercial Roofing - Southside Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            Southside Jacksonville is the commercial heart of Northeast Florida, home to the St. Johns Town Center, The Avenues Mall, and hundreds of office buildings, retail centers, and restaurants along Gate Parkway, Baymeadows Road, and Southside Boulevard. But the Southside is far more than a business district. Established residential neighborhoods in Baymeadows, Deerwood, Tinseltown, and the University Boulevard area house tens of thousands of families across ZIP codes 32216, 32246, and 32256.
          </p>
          <p className="text-gray-600 mb-4">
            This mix of residential and commercial properties creates the highest concentration of diverse roofing needs in the Jacksonville metro area. From flat TPO roofs on shopping centers to aging shingle roofs on 1980s and 1990s subdivision homes, the Southside demands a roofing contractor who can handle it all.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we serve both residential homeowners and commercial property managers throughout the Southside. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a complete roof replacement</Link> for your Deerwood home, <Link href="/services/commercial-roofing" className="text-primary hover:underline">commercial roofing</Link> for your office building, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency roof repair</Link> after a storm, our team delivers quality work with minimal disruption.
          </p>
        </div>
      </section>

      {/* Why Versatile Roofers */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Southside Jacksonville Needs Versatile Roofers</h2>
          <p className="text-gray-600 mb-4">
            Unlike purely residential areas, the Southside&apos;s blend of commercial corridors and residential neighborhoods requires a roofing company with broad expertise. Here&apos;s what sets Southside roofing apart:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Commercial flat roof expertise:</strong> <span className="text-gray-600">Office buildings, shopping centers, and restaurants along Gate Parkway and Baymeadows require specialized flat roofing systems like TPO, EPDM, and modified bitumen. These systems demand different skills and materials than residential steep-slope roofing.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Diverse housing stock:</strong> <span className="text-gray-600">The Southside includes newer subdivisions built in the 2000s-2010s alongside established neighborhoods from the 1980s and 1990s. Older homes in Baymeadows may be on their second or third roof, while newer Deerwood properties may need their first replacement. Each requires a different approach.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">High-traffic area requiring fast work:</strong> <span className="text-gray-600">Commercial properties near St. Johns Town Center and The Avenues can&apos;t afford extended closures or disrupted parking lots. We coordinate with property managers to complete work efficiently while keeping businesses operational.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Mixed-use buildings:</strong> <span className="text-gray-600">The Southside has a growing number of mixed-use developments with retail on the ground floor and residential above. These buildings require roofing solutions that account for both commercial durability and residential comfort.</span></div>
            </li>
          </ul>
          <p className="text-gray-600">
            Learn more about <Link href="/blog/best-roofing-materials-florida" className="text-primary hover:underline">the best roofing materials for Florida</Link> and how to <Link href="/blog/how-to-choose-roofing-contractor-jacksonville" className="text-primary hover:underline">choose the right roofing contractor in Jacksonville</Link>.
          </p>
        </div>
      </section>

      {/* Common Roofing Challenges */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Challenges on the Southside</h2>
          <p className="text-gray-600 mb-6">
            After years of serving Southside property owners, we see these issues repeatedly across both residential and commercial roofs. Early detection prevents costly damage:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Flat Roof Ponding & Leaks</h3>
              <p className="text-gray-600 text-sm">Commercial flat roofs along Southside Blvd and Gate Parkway are prone to ponding water after heavy Florida rains. Standing water deteriorates roofing membranes and causes leaks into office spaces and retail areas. Proper drainage design is critical.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Aging Subdivision Shingles</h3>
              <p className="text-gray-600 text-sm">Many Baymeadows and Tinseltown homes built in the 1980s and 1990s are on original or second-generation shingle roofs that are past their useful life. Curling edges, missing granules, and persistent leaks signal it&apos;s time for replacement.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Storm Damage on Large Buildings</h3>
              <p className="text-gray-600 text-sm">Large commercial buildings have massive roof surface areas that are highly vulnerable to hurricane and tropical storm damage. A single storm can cause tens of thousands of dollars in damage to a shopping center or office complex roof.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">HVAC Penetration Issues</h3>
              <p className="text-gray-600 text-sm">Commercial roofs on the Southside are covered with HVAC units, vents, and ductwork penetrations. Each penetration is a potential leak point. Deteriorated flashing and sealants around these units are the leading cause of commercial roof leaks.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Roofing Services in {location}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/services/roof-replacement" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Residential Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Complete tear-off and replacement for Southside homes. Architectural shingles, metal, and tile options. Starting at $7,500.</p>
            </Link>
            <Link href="/services/commercial-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Commercial Roofing</h4>
              <p className="text-gray-600 text-sm">TPO, EPDM, modified bitumen, and metal systems for offices, retail, and restaurants. Minimal business disruption.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Repair</h4>
              <p className="text-gray-600 text-sm">Fast residential and commercial repairs for leaks, storm damage, and aging materials. Same-week scheduling available.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Emergency Storm Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and storm damage. Tarping, leak containment, and insurance claim assistance.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Metal Roofing</h4>
              <p className="text-gray-600 text-sm">Standing seam and corrugated metal for residential and commercial. 40-60 year lifespan with superior wind resistance.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Free inspections for homes and commercial properties. Detailed reports with photos and repair recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Review */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">What Our Customers Say</h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <blockquote className="text-gray-700 text-lg italic mb-4">
              &ldquo;Had Gimo&apos;s do our office building roof and they were outstanding. Minimal disruption to our business, finished ahead of schedule, and the quality is excellent. Already referred them to neighboring businesses.&rdquo;
            </blockquote>
            <p className="font-semibold text-secondary">- Lisa Thompson</p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving Southside Jacksonville and all of Northeast Florida&apos;s residential and commercial communities.</p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.71590544476!2d-81.65529292427262!3d30.359022903597385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e44b1e311da61b%3A0xe141a9eec11ad009!2sGimo&#39;s%20Roofing!5e0!3m2!1sen!2s!4v1771230427854!5m2!1sen!2s" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Location"></iframe>
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
          <p className="text-secondary/80 mb-6">Contact us today for expert residential and commercial roofing services in {location}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
