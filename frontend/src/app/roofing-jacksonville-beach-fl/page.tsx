import { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Jacksonville Beach FL - Coastal Roof Repair & Replacement",
  description: "Roofing in Jacksonville Beach FL. Salt-air resistant roof repair and replacement for beach homes. Coastal roofing experts. Call (904) 606-5313 for free estimate.",
  keywords: ["roofing jacksonville beach fl", "roofing company jacksonville beach fl", "roof repair jacksonville beach", "roofers jax beach fl", "beach home roofing", "coastal roof replacement"],
  alternates: { canonical: "https://www.gimosroofing.com/roofing-jacksonville-beach-fl" },
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
  { question: `How much does roof replacement cost in ${location}?`, answer: `Coastal roof replacement in ${location} ranges from $8,500 to $32,000+ depending on size and materials. Oceanfront properties require salt-resistant materials like aluminum standing seam or impact-resistant shingles, which cost more than standard options. Financing available from $99/month.` },
  { question: `What's the best roofing material for beachfront homes in Jax Beach?`, answer: `For ${location}'s salt-air environment, we recommend aluminum standing seam metal roofing (best salt resistance, 40-60 year lifespan), impact-resistant architectural shingles with algae protection (20-25 years), or concrete tile for classic Florida style (30-50 years). Avoid galvanized steel near the ocean as it corrodes faster.` },
  { question: `How long do roofs last near the beach in Jacksonville Beach?`, answer: `Standard 3-tab shingles may only last 12-15 years near the ocean due to salt exposure and UV damage. Architectural shingles last 18-22 years, metal roofing 40-60 years, and tile 30-50+ years. Homes within 1 mile of the Atlantic experience faster deterioration than inland properties.` },
  { question: `Do you provide hurricane damage repair in Jacksonville Beach?`, answer: `Yes! We offer 24/7 emergency storm response for ${location}. Florida Building Code requires roofs in our area to withstand 130+ mph winds. Call ${phone} for immediate tarping, damage assessment, and insurance claim assistance after any storm.` },
  { question: `How does salt air affect roofs in Jacksonville Beach?`, answer: `Salt air causes metal fasteners, flashing, and hardware to corrode. It accelerates shingle granule loss, weakens underlayment adhesion, and promotes algae and mold growth. Homes in ZIP codes 32250 and 32240 near the ocean need annual inspections and salt-resistant materials to avoid premature roof failure.` },
  { question: `Does my Jacksonville Beach roof affect my insurance rates?`, answer: `Yes. A newer roof with impact-resistant materials (like Class 4 shingles or metal) can save you 15-30% on hurricane premiums. Many insurers require roof replacement for homes with roofs over 15-20 years old in coastal zones. We provide insurance-compliant documentation for every project.` },
  { question: `How often should I inspect my roof in Jacksonville Beach?`, answer: `We recommend annual inspections for coastal homes, plus after every major storm. Salt air, UV exposure, and tropical weather cause faster wear than inland areas. Early detection of loose shingles, corroded flashing, or damaged underlayment prevents costly repairs. We offer free roof inspections.` },
  { question: `Can you match my HOA's approved roofing colors and materials?`, answer: `Yes! We work with HOAs throughout Jacksonville Beach, Neptune Beach, and Atlantic Beach. We carry samples of approved shingle colors, metal finishes, and tile profiles. We handle the approval paperwork so you don't have to.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#localbusiness",
  "name": "Gimo's Roofing",
  "url": "https://www.gimosroofing.com/roofing-jacksonville-beach-fl",
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
    "@type": "City",
    "name": "Jacksonville Beach",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Jacksonville_Beach,_Florida"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services in Jacksonville Beach, FL",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coastal Roof Replacement in Jacksonville Beach FL",
          "description": "Salt-resistant coastal roofing for Jacksonville Beach oceanfront and beach homes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hurricane Damage Repair in Jacksonville Beach FL",
          "description": "24/7 emergency storm damage repair and insurance claim assistance for beach properties."
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
    { "@type": "ListItem", "position": 3, "name": "Jacksonville Beach", "item": "https://www.gimosroofing.com/roofing-jacksonville-beach-fl" }
  ]
}

export default function JacksonvilleBeachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & The Beaches</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Jacksonville Beach FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Coastal roofing specialists for Jax Beach homes. Salt-resistant materials, 130+ mph wind-rated installation, and 24/7 storm response protecting properties in ZIP codes 32250 and 32240.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Coastal Specialists</span>
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
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} Coastal Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            Jacksonville Beach stretches along Northeast Florida&apos;s Atlantic coastline, from the Neptune Beach border at 1st Street south through the bustling Beaches Town Center and down to the quieter South Beach neighborhoods. Living steps from the ocean is the dream, but it comes with a harsh reality for your roof: relentless salt spray, intense UV reflected off sand and water, constant ocean wind, and direct hurricane exposure.
          </p>
          <p className="text-gray-600 mb-4">
            Most Jax Beach homes sit within 1-3 miles of the Atlantic Ocean, meaning every roof in ZIP codes 32250 and 32240 faces accelerated deterioration compared to inland Jacksonville properties. Standard roofing materials that last 25 years in Mandarin may only last 15-18 years on a beachside home along 3rd Street.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we&apos;ve completed hundreds of coastal roofing projects throughout {location}. We understand which materials hold up in the salt-air environment and which fail prematurely. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a complete roof replacement</Link> or <Link href="/services/roof-repair" className="text-primary hover:underline">targeted repairs</Link>, our team delivers solutions built to withstand beach conditions. <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">Emergency roof repair</Link> is available 24/7 throughout the Beaches.
          </p>
        </div>
      </section>

      {/* Why Coastal Materials */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Jacksonville Beach Roofs Need Coastal-Grade Materials</h2>
          <p className="text-gray-600 mb-4">
            The combination of salt air, high humidity (averaging 74% year-round), intense UV exposure, and hurricane-force winds creates a roofing environment that&apos;s fundamentally different from inland areas. Here&apos;s what happens to standard materials near the ocean:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Salt corrosion:</strong> <span className="text-gray-600">Airborne salt crystals attack metal fasteners, flashing, drip edges, and roof vents. Standard galvanized nails can start corroding within 5-7 years near the beach. We use stainless steel or hot-dipped galvanized fasteners rated for coastal environments.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">UV degradation:</strong> <span className="text-gray-600">Sunlight reflected off the ocean and white sand effectively doubles UV exposure on beach roofs. This accelerates shingle granule loss, underlayment breakdown, and sealant failure. We install UV-resistant materials designed for high-exposure environments.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Wind uplift:</strong> <span className="text-gray-600">Florida Building Code requires roofs in {location} to withstand wind speeds of 130+ mph. Coastal homes face stronger sustained winds and more intense gusts than properties even 5 miles inland. Proper nail patterns and adhesion are critical.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Moisture and algae:</strong> <span className="text-gray-600">High humidity promotes algae, mold, and mildew growth on north-facing roof slopes. We use algae-resistant shingles and recommend proper ventilation to combat this.</span></div>
            </li>
          </ul>
          <p className="text-gray-600">
            Learn more about <Link href="/blog/best-roofing-materials-florida" className="text-primary hover:underline">the best roofing materials for Florida</Link> and how to recognize <Link href="/blog/hurricane-roof-damage-signs-florida" className="text-primary hover:underline">hurricane damage on your roof</Link>.
          </p>
        </div>
      </section>

      {/* Common Problems */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Problems in Jacksonville Beach</h2>
          <p className="text-gray-600 mb-6">
            After years of serving Jax Beach homeowners, we see the same coastal roofing issues repeatedly. Catching these early saves thousands in repairs:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Corroded Flashing</h3>
              <p className="text-gray-600 text-sm">Metal flashing around vents, chimneys, and roof edges corrodes faster in salt air. We replace with aluminum or stainless steel flashing designed for coastal exposure.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Wind-Lifted Shingles</h3>
              <p className="text-gray-600 text-sm">Ocean winds peel back shingle edges, breaking the seal strip and allowing water intrusion. Even moderate tropical storms can lift improperly installed shingles.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Premature Granule Loss</h3>
              <p className="text-gray-600 text-sm">UV and wind-driven sand strip protective granules from shingles years ahead of schedule. Bare spots leave shingles vulnerable to UV damage and leaks.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Algae & Mold Streaks</h3>
              <p className="text-gray-600 text-sm">Black streaks on north-facing slopes are Gloeocapsa magma algae, fueled by humidity. Beyond appearance, algae degrades shingles and reduces roof life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Coastal Roofing Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/services/roof-replacement" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Beach Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Complete tear-off with coastal-grade materials rated for salt exposure and 130+ mph winds. Starting at $8,500.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Storm Damage Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and tropical storm damage. Tarping, repairs, and insurance claim assistance.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Coastal Roof Repair</h4>
              <p className="text-gray-600 text-sm">Fix salt-corroded flashing, wind-lifted shingles, leaks, and UV damage with materials built for beach conditions.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Metal Roofing</h4>
              <p className="text-gray-600 text-sm">Aluminum standing seam for maximum salt resistance. 40-60 year lifespan, ideal for oceanfront properties.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Tile Roofing</h4>
              <p className="text-gray-600 text-sm">Concrete and clay tile for classic Florida coastal style. Superior wind and UV resistance, 30-50+ year lifespan.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Annual coastal property inspections. We check for salt corrosion, wind damage, and UV deterioration before they become costly problems.</p>
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
              &ldquo;Gimo&apos;s roofing company did a fantastic job for me from start to finish. There was a whole crew at my house at 0700 sharp. They completed my roof in one day and it looks great! They paid attention to every detail I requested and when they were finished, they cleaned up like they were never there. Great job!&rdquo;
            </blockquote>
            <p className="font-semibold text-secondary">- Mark Jackson</p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving Jacksonville Beach and all of Northeast Florida&apos;s coastal communities.</p>
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
          <p className="text-secondary/80 mb-6">Contact us today for expert coastal roofing services in {location}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
