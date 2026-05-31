import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roofing Jacksonville Beach FL - Gimo's Roofing" },
  description: "Roofing in Jacksonville Beach FL from Gimo's Roofing. Salt-resistant coastal roof repair, replacement, and 24/7 storm response for beach homes. Call (904) 606-5313.",
  openGraph: {
    title: "Roofing Jacksonville Beach FL - Gimo's Roofing",
    description: "Coastal roofing in Jacksonville Beach FL. Salt-resistant materials and hurricane-rated installation. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/roofing-jacksonville-beach-fl",
  },
  alternates: { canonical: "https://www.gimosroofing.com/roofing-jacksonville-beach-fl" },
}

const location = "Jacksonville Beach"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
)

const nearbyAreas = [
  { name: "Neptune Beach", href: "/roofing-neptune-beach-fl" },
  { name: "Atlantic Beach", href: "/roofing-atlantic-beach-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { name: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Fernandina Beach", href: "/roofing-fernandina-beach-fl" }
]

const faqs = [
  { question: "How much does roof replacement cost in Jacksonville Beach FL?", answer: "Roof replacement in Jacksonville Beach typically runs $9,500 to $32,000 for the salt-exposed homes east of Penman Road, with most 1,800-2,400 sq ft beach houses falling between $12,000 and $19,000 for impact-rated architectural shingles. Oceanfront properties on 1st Street North or 1st Street South often need aluminum standing seam, which pushes the range to $24,000-$38,000. We provide free quotes and financing from $99/month." },
  { question: "What's the best roofing material for an oceanfront home on 1st Street?", answer: "For oceanfront homes within a mile of the Atlantic (including 1st Street, 2nd Avenue North, and South Beach Parkway), aluminum standing seam is the gold standard. Aluminum doesn't rust like galvanized steel and holds up to direct salt spray for 40-60 years. The next best option is impact-rated architectural shingles (Class 4) with stainless steel fasteners. We strongly advise against any galvanized steel product within a mile of the dunes." },
  { question: "How long do shingle roofs actually last in Jacksonville Beach?", answer: "In ZIP code 32250, salt air and UV exposure shave years off any shingle roof. Standard 3-tab shingles often fail at 12 to 15 years here, compared to 18 to 22 for inland Duval homes. Architectural shingles run 18-22 years on the beach side, and 22-25 years for homes west of 3rd Street. Metal roofing remains the longest-lasting option at 40-60 years even directly on the coast." },
  { question: "Do you handle hurricane damage and tarping in Jax Beach?", answer: "Yes. We run 24/7 emergency response throughout Jacksonville Beach during and after every named storm. Our crews are typically on-site within hours for tarping, board-up, and damage documentation. Every Jax Beach roof must meet the Florida Building Code 130+ mph wind requirement, and we document all repairs to that standard so your insurance claim doesn't get denied for code non-compliance. Call (904) 606-5313 day or night." },
  { question: "How does salt air specifically damage my Jacksonville Beach roof?", answer: "Salt air attacks roofs in three ways: it corrodes metal flashing and fasteners (causing leaks at penetrations), it accelerates shingle granule loss on the windward side facing the ocean, and it feeds algae growth in the persistent humidity. Homes in 32250 east of 3rd Street and the older neighborhoods in 32240 see this most aggressively. We recommend annual washdowns and a professional inspection every spring before hurricane season." },
  { question: "Will a new roof lower my insurance in Jacksonville Beach?", answer: "Yes, often dramatically. Coastal Florida insurers offer wind mitigation credits of 15-45% for newer roofs with impact-rated shingles, properly nailed sheathing, secondary water barriers, and hip roof shapes. Most Jax Beach homes built before 2002 are paying inflated premiums on roofs that don't qualify for any credits. We provide a wind mitigation inspection report with every replacement so you can pass it to your insurance carrier the same week." },
  { question: "How often should I inspect my roof in a beach environment?", answer: "Twice a year minimum for any home east of A1A, once in early spring before storm season, and once in November after the last named storm. Salt damage and storm wear show up gradually, and what looks fine from the ground is often hiding corroded flashing or lifted shingles up close. We offer free annual inspections for past customers and reduced-rate inspections for new clients in 32250 and 32240." },
  { question: "Can you work with the Neptune Beach and Atlantic Beach HOAs?", answer: "Yes. Many of our Jax Beach customers have homes that fall within HOAs in neighboring Neptune Beach and Atlantic Beach, and the architectural review boards each have their own approved materials lists. We carry samples of every commonly-approved shingle color and metal finish for these communities, and we handle the HOA submittal paperwork as part of every project. We've completed roofs for homes in Sandcastle, Beachwalker, and the older Beach Avenue district." }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-jacksonville-beach-fl#service",
  "@type": "Service",
  "name": "Roofing in Jacksonville Beach FL",
  "serviceType": "Roofing Contractor",
  "description": "Coastal roofing in Jacksonville Beach FL. Salt-resistant materials, 130+ mph wind-rated installation, and 24/7 storm response for homes in ZIP codes 32250 and 32240.",
  "provider": { "@id": "https://www.gimosroofing.com/#organization" },
  "areaServed": {
    "@type": "City",
    "name": "Jacksonville Beach, FL",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Jacksonville_Beach,_Florida",
      "https://www.wikidata.org/wiki/Q1684252"
    ],
    "containedInPlace": { "@type": "AdministrativeArea", "name": "Duval County, FL" }
  },
  "url": "https://www.gimosroofing.com/roofing-jacksonville-beach-fl",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Coastal Roofing Services in Jacksonville Beach, FL",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coastal Roof Replacement in Jacksonville Beach FL", "description": "Salt-resistant coastal roofing for Jacksonville Beach oceanfront and beach homes. Starting at $8,500." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hurricane and Storm Damage Repair in Jacksonville Beach FL", "description": "24/7 emergency storm damage repair, tarping, and insurance claim assistance for beach properties." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coastal Roof Repair in Jacksonville Beach FL", "description": "Repair salt-corroded flashing, wind-lifted shingles, leaks, and UV damage with coastal-grade materials." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Aluminum Standing Seam Metal Roofing in Jacksonville Beach FL", "description": "Aluminum standing seam metal roofing with 40 to 60 year lifespan for oceanfront properties." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Tile Roofing in Jacksonville Beach FL", "description": "Concrete and clay tile roofing with 30 to 50+ year lifespan, ideal for Florida coastal homes." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Coastal Roof Inspections in Jacksonville Beach FL", "description": "Annual coastal property inspections for salt corrosion, wind damage, and UV deterioration." } }
    ]
  }

}

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-jacksonville-beach-fl#faq",
  "@type": "FAQPage",
  "about": { "@id": "https://www.gimosroofing.com/roofing-jacksonville-beach-fl#service" },
  "mainEntityOfPage": "https://www.gimosroofing.com/roofing-jacksonville-beach-fl",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-jacksonville-beach-fl#breadcrumb",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/jacksonville-roofer.webp" alt="Professional roofing services in Jacksonville Beach FL" title="Professional roofing services in Jacksonville Beach FL" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10 text-secondary">
            <div className="text-center"><span className="text-3xl font-bold">500+</span><span className="text-sm ml-2">Roofs</span></div>
            <div className="text-center"><span className="text-3xl font-bold">24</span><span className="text-sm ml-2">Years</span></div>
            <div className="text-center"><span className="text-3xl font-bold">5.0</span><span className="text-sm ml-2">Star Rating</span></div>
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
              <span className="text-sm font-semibold text-secondary">5-Star Rated by Jacksonville Beach Homeowners</span>
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

      {/* Project Showcase */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/roofer-jacksonville-fl.webp" alt="Professional roofer serving Jacksonville Beach FL coastline" title="Professional Roofer - Jacksonville Beach FL" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/storm-damage-roof-repair.webp" alt="Storm damage roof repair on Jacksonville Beach coastal home" title="Storm Damage Roof Repair - Jacksonville Beach FL" fill className="object-cover" />
            </div>
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
            As a trusted roofing company Jacksonville Beach FL homeowners rely on, Gimo&apos;s Roofing has completed hundreds of coastal projects throughout {location}. As a roofing contractor Jacksonville Beach FL families recommend, we understand which materials hold up in the salt-air environment and which fail prematurely. Whether you need residential roofing Jacksonville Beach FL or roofing replacement Jacksonville Beach FL, our team is ready. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a complete roof replacement</Link> or <Link href="/services/roof-repair" className="text-primary hover:underline">targeted repairs</Link>, our team delivers solutions built to withstand beach conditions. <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">Emergency roof repair</Link> is available 24/7 throughout the Beaches.
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
            <div className="card p-5">
              <h3 className="font-bold text-secondary mb-2">Corroded Flashing</h3>
              <p className="text-gray-600 text-sm">Metal flashing around vents, chimneys, and roof edges corrodes faster in salt air. We replace with aluminum or stainless steel flashing designed for coastal exposure.</p>
            </div>
            <div className="card p-5">
              <h3 className="font-bold text-secondary mb-2">Wind-Lifted Shingles</h3>
              <p className="text-gray-600 text-sm">Ocean winds peel back shingle edges, breaking the seal strip and allowing water intrusion. Even moderate tropical storms can lift improperly installed shingles.</p>
            </div>
            <div className="card p-5">
              <h3 className="font-bold text-secondary mb-2">Premature Granule Loss</h3>
              <p className="text-gray-600 text-sm">UV and wind-driven sand strip protective granules from shingles years ahead of schedule. Bare spots leave shingles vulnerable to UV damage and leaks.</p>
            </div>
            <div className="card p-5">
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
            <Link href="/services/roof-replacement" className="card p-5">
              <h3 className="font-bold text-secondary mb-2">Beach Roof Replacement</h3>
              <p className="text-gray-600 text-sm">Complete tear-off with coastal-grade materials rated for salt exposure and 130+ mph winds. Starting at $8,500.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="card p-5">
              <h3 className="font-bold text-secondary mb-2">Storm Damage Repair</h3>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and tropical storm damage. Tarping, repairs, and insurance claim assistance.</p>
            </Link>
            <Link href="/services/roof-repair" className="card p-5">
              <h3 className="font-bold text-secondary mb-2">Coastal Roof Repair</h3>
              <p className="text-gray-600 text-sm">Fix salt-corroded flashing, wind-lifted shingles, leaks, and UV damage with materials built for beach conditions.</p>
            </Link>
            <Link href="/services/metal-roofing" className="card p-5">
              <h3 className="font-bold text-secondary mb-2">Metal Roofing</h3>
              <p className="text-gray-600 text-sm">Aluminum standing seam for maximum salt resistance. 40-60 year lifespan, ideal for oceanfront properties.</p>
            </Link>
            <div className="card p-5">
              <h3 className="font-bold text-secondary mb-2">Tile Roofing</h3>
              <p className="text-gray-600 text-sm">Concrete and clay tile for classic Florida coastal style. Superior wind and UV resistance, 30-50+ year lifespan.</p>
            </div>
            <div className="card p-5">
              <h3 className="font-bold text-secondary mb-2">Roof Inspections</h3>
              <p className="text-gray-600 text-sm">Annual coastal property inspections. We check for salt corrosion, wind damage, and UV deterioration before they become costly problems.</p>
            </div>
            <Link href="/services/roof-gutter" className="card p-5">
              <h3 className="font-bold text-secondary mb-2">Gutters</h3>
              <p className="text-gray-600 text-sm">Seamless aluminum gutter installation, repair, and replacement engineered for Jax Beach storms. We clear sand and salt buildup and route heavy rain away from your foundation.</p>
            </Link>
            <Link href="/services/roof-waterproofing" className="card p-5">
              <h3 className="font-bold text-secondary mb-2">Roof Waterproofing</h3>
              <p className="text-gray-600 text-sm">Roof coatings and leak sealing for flat and low-slope beach homes. We seal flashing and penetrations against wind-driven coastal rain so salt-laden moisture never reaches the deck.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Reviews CTA */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <h2 className="text-2xl font-bold text-secondary mb-3">5-Star Rated by Jacksonville Beach Homeowners</h2>
            <p className="text-gray-600 mb-6">From oceanfront homes on 1st Street to the older bungalows along South Beach Parkway, our crew has earned 5-star reviews across the Jacksonville Beach community.</p>
            <a href="https://maps.app.goo.gl/hC3XuE5pKA2ypPAQA" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition">Read Our Reviews</a>
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

      {/* ZIP Code Coverage */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing in 32250 and 32240 - Jacksonville Beach ZIP Codes</h2>
          <p className="text-gray-600 mb-4">
            ZIP codes <a href="https://www.unitedstateszipcodes.org/32250/" target="_blank" rel="noopener" className="text-primary hover:underline">32250</a> and <a href="https://www.unitedstateszipcodes.org/32240/" target="_blank" rel="noopener" className="text-primary hover:underline">32240</a> cover all of <a href="https://en.wikipedia.org/wiki/Jacksonville_Beach,_Florida" target="_blank" rel="noopener" className="text-primary hover:underline">Jacksonville Beach</a>, from the oceanfront homes along 1st Street to the residential streets west of Penman Road. 32250 contains the bulk of the city, including South Beach Parkway, the <a href="https://en.wikipedia.org/wiki/Beaches_Town_Center" target="_blank" rel="noopener" className="text-primary hover:underline">Beaches Town Center</a> area, and the residential streets between 3rd Street and Penman, while 32240 is the smaller P.O. box ZIP. Roofs in both ZIPs face the same brutal salt air, hurricane wind, and reflected UV that defines coastal Florida roofing. Architectural shingle with stainless hardware and aluminum standing seam metal are the two materials we install most often here, both engineered to meet the <a href="https://www.floridabuilding.org/" target="_blank" rel="noopener" className="text-primary hover:underline">Florida Building Code</a> wind requirements for coastal Duval County.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Gimo&apos;s Roofing Answers</span>
            <h2 className="text-2xl font-bold text-secondary">Jacksonville Beach Roofing FAQ</h2>
          </div>
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
