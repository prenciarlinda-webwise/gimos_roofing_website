import { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Ponte Vedra Beach FL - Luxury Home Roof Repair & Replacement",
  description: "Roofing in Ponte Vedra Beach FL. TPC Sawgrass, Marsh Landing & luxury home roofing specialists. HOA-compliant materials. Call (904) 606-5313 for free estimate.",
  keywords: ["roofing ponte vedra beach fl", "roofing company ponte vedra beach fl", "roof repair ponte vedra", "TPC sawgrass roofing", "luxury home roofing", "marsh landing roofers"],
  alternates: { canonical: "https://www.gimosroofing.com/roofing-ponte-vedra-beach-fl" },
}

const location = "Ponte Vedra Beach"
const county = "St. Johns County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" }
]

const faqs = [
  { question: `Does Gimo's Roofing work with HOAs in ${location}?`, answer: `Absolutely. We work with HOAs throughout ${location}, including TPC Sawgrass, Marsh Landing, Sawgrass Country Club, and The Plantation at Ponte Vedra. We carry samples of HOA-approved materials and handle all architectural review board submissions so you don't have to. We know the specific requirements for most Ponte Vedra communities.` },
  { question: `How much does roof replacement cost on luxury homes in ${location}?`, answer: `Roof replacement on ${location} homes typically ranges from $15,000 to $65,000+ depending on roof size, pitch, and material choice. Many homes here have 3,000-6,000+ sq ft roof areas with complex designs including dormers, hips, and valleys. Premium materials like natural slate, copper accents, or designer shingles increase costs but match the quality these properties deserve.` },
  { question: `What roofing materials are best for TPC Sawgrass and Marsh Landing homes?`, answer: `For the upscale communities around TPC Sawgrass and Marsh Landing, we recommend architectural shingles from GAF or CertainTeed's premium lines, concrete or clay tile for Mediterranean-style homes, standing seam metal for modern designs, or natural slate for estate properties. All materials must meet HOA guidelines and Florida Building Code wind requirements of 130+ mph.` },
  { question: `How does coastal salt air affect roofs in ${location}?`, answer: `While ${location} sits slightly inland from the direct oceanfront, salt air still travels 5-10+ miles from the coast. Homes in ZIP codes 32082 and 32081 experience salt corrosion on metal components, accelerated granule loss on shingles, and premature sealant degradation. Annual inspections and coastal-rated fasteners are essential even for properties several miles from the beach.` },
  { question: `Do you offer hurricane-rated roofing in ${location}?`, answer: `Yes. All our installations meet or exceed Florida Building Code requirements for the ${location} wind zone, rated for 130+ mph winds. For luxury homes, we recommend impact-resistant Class 4 shingles or fortified roofing systems that can qualify for significant insurance premium discounts of 15-30%. Call ${phone} for details.` },
  { question: `Will a new roof affect my ${location} home's insurance rates?`, answer: `Yes, significantly. Many insurers are non-renewing policies on homes with roofs older than 15 years in coastal ${county}. A new roof with impact-resistant materials can reduce your hurricane premium by 15-30%. Given ${location}'s high property values ($500K-$5M+), the insurance savings alone can offset a substantial portion of the roof investment over time.` },
  { question: `How often should I have my ${location} roof inspected?`, answer: `We recommend annual inspections for ${location} homes, plus after every named storm. Even though Ponte Vedra is slightly more sheltered than the direct beachfront, salt air, tropical storms, and intense Florida UV still accelerate wear. For homes with tile or slate roofs, we check for cracked tiles, failed underlayment, and ridge cap integrity. Free inspections available at ${phone}.` },
  { question: `Can you match existing tile or slate on my ${location} home?`, answer: `Yes. We maintain relationships with specialty suppliers who carry matching profiles for the tile and slate commonly used in ${location}'s luxury communities. Whether you need a few replacement tiles after storm damage or a full re-roof that matches your home's original design, we source authentic materials that maintain architectural consistency and HOA compliance.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#localbusiness",
  "name": "Gimo's Roofing",
  "url": "https://www.gimosroofing.com/roofing-ponte-vedra-beach-fl",
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
    "name": "Ponte Vedra Beach",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Ponte_Vedra_Beach,_Florida"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services in Ponte Vedra Beach, FL",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Luxury Home Roof Replacement in Ponte Vedra Beach FL",
          "description": "Premium roofing for luxury homes in TPC Sawgrass, Marsh Landing, and Ponte Vedra Beach golf communities."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "HOA-Compliant Roofing in Ponte Vedra Beach FL",
          "description": "Architectural review board approved materials and installation for Ponte Vedra Beach's gated communities."
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
    { "@type": "ListItem", "position": 3, "name": "Ponte Vedra Beach", "item": "https://www.gimosroofing.com/roofing-ponte-vedra-beach-fl" }
  ]
}

export default function PonteVedraBeachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} &amp; {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Ponte Vedra Beach FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Luxury home roofing specialists for TPC Sawgrass, Marsh Landing, and Ponte Vedra Beach&apos;s premier communities. HOA-compliant materials, meticulous craftsmanship, and protection for properties valued at $500K to $5M+.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>&#10003; Licensed &amp; Insured</span>
            <span>&#10003; 5-Star Rated</span>
            <span>&#10003; Luxury Home Specialists</span>
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
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} Premium Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            Ponte Vedra Beach is one of Northeast Florida&apos;s most prestigious addresses, home to world-renowned TPC Sawgrass and THE PLAYERS Championship. Spanning ZIP codes 32082 and 32081 across {county}, the community features some of the highest property values in the Jacksonville metropolitan area, with homes ranging from $500,000 to well over $5 million. From the gated estates of Marsh Landing to the golf villas surrounding Sawgrass Country Club, every property here demands roofing that matches its caliber.
          </p>
          <p className="text-gray-600 mb-4">
            Unlike standard subdivisions, {location} homes present unique roofing challenges: larger roof areas averaging 3,000-6,000+ square feet, complex multi-level designs with dormers, hips, and valleys, strict HOA and architectural review board requirements, and premium material expectations from discerning homeowners. A roof on a Marsh Landing estate isn&apos;t just weather protection &mdash; it&apos;s a visible investment that directly impacts curb appeal and resale value in a competitive luxury market.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we specialize in the premium craftsmanship that {location} properties require. Whether you need a <Link href="/services/roof-replacement" className="text-primary hover:underline">full roof replacement</Link> on a 5,000 sq ft estate, <Link href="/services/roof-repair" className="text-primary hover:underline">targeted repairs</Link> to storm-damaged tile, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency roof repair</Link> after a hurricane, our experienced crews deliver results that satisfy both homeowners and HOA boards. We understand the standards expected in Ponte Vedra&apos;s finest neighborhoods.
          </p>
        </div>
      </section>

      {/* Why Premium Roofing */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Ponte Vedra Beach Homes Need Premium Roofing</h2>
          <p className="text-gray-600 mb-4">
            {location}&apos;s combination of high property values, stringent community standards, coastal weather exposure, and large-scale home designs creates roofing requirements that go far beyond a standard residential job. Here&apos;s why cutting corners on your Ponte Vedra roof is never worth the risk:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Protecting property value:</strong> <span className="text-gray-600">Your roof is one of the first things buyers and appraisers notice. In a market where homes sell for $500K to $5M+, a deteriorating roof can reduce your property value by $20,000-$80,000 or more. Premium materials like designer shingles, concrete tile, or standing seam metal preserve and enhance your investment.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">HOA and architectural standards:</strong> <span className="text-gray-600">Communities like TPC Sawgrass, Marsh Landing, Sawgrass Players Club, and The Plantation at Ponte Vedra enforce strict roofing guidelines covering material type, color, profile, and even contractor qualifications. We carry approved samples and manage the entire approval process for you.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Coastal exposure and salt air:</strong> <span className="text-gray-600">Although {location} sits slightly inland from the direct Atlantic beachfront, salt-laden air still reaches every neighborhood. Metal fasteners, flashing, and roof vents corrode without coastal-rated hardware. We use stainless steel and marine-grade components on every Ponte Vedra installation.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Larger roof areas and complexity:</strong> <span className="text-gray-600">Ponte Vedra homes typically have roof areas 2-3 times larger than average Jacksonville homes. More square footage means more potential failure points, more material needed, and greater labor requirements. Our crews are experienced with complex, large-scale residential projects that require precision at every ridge, valley, and transition.</span></div>
            </li>
          </ul>
          <p className="text-gray-600">
            Learn more about <Link href="/blog/best-roofing-materials-florida" className="text-primary hover:underline">the best roofing materials for Florida homes</Link> and how to spot <Link href="/blog/hurricane-roof-damage-signs-florida" className="text-primary hover:underline">hurricane damage on your roof</Link>.
          </p>
        </div>
      </section>

      {/* Common Concerns */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Concerns in Ponte Vedra Beach</h2>
          <p className="text-gray-600 mb-6">
            Working with {location} homeowners for over 15 years, we consistently address these four roofing challenges unique to the area&apos;s luxury communities:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">HOA Compliance Issues</h3>
              <p className="text-gray-600 text-sm">Many Ponte Vedra homeowners discover their previous roofer used non-approved materials or colors. We verify every material selection against your community&apos;s architectural guidelines before ordering, preventing costly redo work and HOA violations.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Storm Damage on Large Roofs</h3>
              <p className="text-gray-600 text-sm">Larger roof areas catch more wind. A 5,000 sq ft roof in Marsh Landing faces exponentially more uplift force during hurricanes than a 2,000 sq ft home. We install enhanced nail patterns and adhesion systems sized for your roof&apos;s specific wind exposure.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Salt Air on Premium Materials</h3>
              <p className="text-gray-600 text-sm">Salt corrosion doesn&apos;t discriminate by price tag. Copper flashings develop verdigris, metal ridge vents pit and corrode, and even high-end shingle sealants degrade faster in the coastal environment. We select materials specifically rated for salt exposure within 10 miles of the Atlantic.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Tile &amp; Slate Maintenance</h3>
              <p className="text-gray-600 text-sm">Many Ponte Vedra estates feature concrete tile, clay tile, or natural slate. These premium materials last 30-75 years but require specialized maintenance &mdash; cracked tiles, failed underlayment beneath tiles, and shifted ridge caps all need experienced hands to repair correctly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Premium Roofing Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/services/roof-replacement" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Luxury Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Complete tear-off and replacement with HOA-approved premium materials. Engineered for large-scale homes with complex roof designs. Starting at $15,000.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Storm Damage Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and tropical storm damage. Rapid tarping, structural assessment, and full insurance claim documentation for high-value properties.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Premium Roof Repair</h4>
              <p className="text-gray-600 text-sm">Targeted repairs for tile, slate, metal, and architectural shingle roofs. We match existing materials to maintain your home&apos;s appearance and HOA compliance.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Tile &amp; Slate Roofing</h4>
              <p className="text-gray-600 text-sm">Concrete tile, clay tile, and natural slate installation and restoration for Ponte Vedra&apos;s Mediterranean and estate-style homes. 30-75 year lifespan.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Standing Seam Metal</h4>
              <p className="text-gray-600 text-sm">Aluminum and zinc standing seam systems with superior salt resistance. Clean, modern aesthetic popular in Sawgrass Players Club and newer Ponte Vedra developments.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">HOA Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Comprehensive inspections with detailed reports for HOA compliance, insurance renewals, and real estate transactions. We document every component for your records.</p>
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
              &ldquo;These guys did such a wonderful job removing my old roof and replacing it with a new one. Carlos and his crew were very professional, worked hard and cleaned up everything when the job was done!&rdquo;
            </blockquote>
            <p className="font-semibold text-secondary">- Jennifer Kirby</p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving Ponte Vedra Beach, TPC Sawgrass, Marsh Landing, and all of {county}.</p>
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
          <p className="text-secondary/80 mb-6">Contact us today for premium roofing services in {location} and {county}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
