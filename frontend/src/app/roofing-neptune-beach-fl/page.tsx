import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Neptune Beach FL - Coastal Roof Repair & Replacement",
  description: "Roofing in Neptune Beach FL. Salt-resistant coastal roofing for the Beaches Town Center, 1st Street, and Forest Avenue homes. Call (904) 606-5313.",
  keywords: ["roofing neptune beach fl", "roofing company neptune beach fl", "roof repair neptune beach", "neptune beach roofers", "beaches town center roofing", "coastal roof replacement neptune beach"],
  alternates: { canonical: "https://www.gimosroofing.com/roofing-neptune-beach-fl" },
}

const location = "Neptune Beach"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Atlantic Beach", href: "/roofing-atlantic-beach-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" }
]

const faqs = [
  { question: "How much does a roof replacement cost in Neptune Beach?", answer: "Most Neptune Beach roofs run $11,000 to $38,000, with the spread driven by location relative to the dunes. A standard 1,600-2,200 sq ft architectural shingle re-roof in the streets west of 3rd Street — Forest Avenue, Florida Boulevard, the Cherry Street stretches — runs $12,500-$18,000. Homes between 3rd Street and 1st Street with the salt-grade hardware upgrade run $15,000-$23,000. The oceanfront and near-ocean homes along 1st Street North and 1st Street South run $22,000-$42,000 for impact-rated shingle with stainless hardware, and aluminum standing seam metal on those same homes pushes the range to $30,000-$65,000. Free written estimates and financing from $99/month throughout 32266. Neptune Beach is a small community — just over a square mile — so we typically schedule and complete projects within 1-2 weeks of estimate." },
  { question: "What roofing materials work best on Neptune Beach's oceanfront?", answer: "For oceanfront and near-ocean homes in Neptune Beach (1st Street North, 1st Street South, and the streets east of 3rd Street within roughly a half-mile of the dunes) the gold standard is aluminum standing seam metal. Aluminum doesn't rust like galvanized steel, holds up to direct salt spray for 40-60 years, and survives the wind. Second-best is impact-rated Class 4 architectural shingle with stainless steel ring-shank fasteners and a fully self-adhered peel-and-stick underlayment as a secondary water barrier. For homes farther west — Forest Avenue, Florida Boulevard, the Cherry Street stretches — standard architectural shingle with hot-dipped galvanized hardware works fine. The one to avoid: any galvanized steel product or any shingle fastened with electro-galvanized nails. Both will fail within 8 years anywhere in Neptune Beach." },
  { question: "How long do shingle roofs actually last in Neptune Beach?", answer: "In 32266, salt air and UV exposure shave years off any shingle roof. Standard 3-tab shingles fail at 12-15 years here — we don't install them. Architectural shingles run 18-22 years on the eastern half of Neptune Beach (1st Street through about 3rd Street) and 22-25 years for the homes west of 3rd Street where the salt exposure drops off. Impact-rated Class 4 architectural shingles with stainless hardware extend that to 24-28 years even on the oceanfront. Aluminum standing seam metal lasts 40-60 years anywhere in Neptune Beach. The biggest factor in actual roof life isn't the shingle quality — it's the hardware grade. We've seen perfectly good GAF and CertainTeed shingles fail at 8 years in Neptune Beach because the original installer used cheap galvanized fasteners that corroded out. We use stainless or hot-dipped galvanized on every job in 32266." },
  { question: "Do you handle storm damage and 24/7 emergency tarping in Neptune Beach?", answer: "Yes — we run 24/7 emergency response throughout Neptune Beach during and after every named storm. Neptune Beach is small enough (just over a square mile, about 7,000 residents) that our crews can typically reach any address within an hour of a call after a storm. Neptune Beach takes hurricane damage at the same rate as Jacksonville Beach because the two communities share the same barrier dune line — the only thing that separates them is Atlantic Boulevard. After Hurricane Matthew (2016) and Hurricane Irma (2017) we worked Neptune Beach for weeks. The most common after-storm calls in 32266 are wind-stripped shingles on east-facing slopes along 1st Street, broken shingles from flying debris, and water intrusion through aged chimney flashing on the older homes off Forest Avenue. Call (904) 606-5313 day or night for emergency service." },
  { question: "Will a new roof actually lower my Neptune Beach insurance premium?", answer: "Yes, often substantially. Coastal Florida insurers — Citizens, Universal, Heritage, and the few private carriers still writing in 32266 — offer wind mitigation credits of 15-45% for newer roofs with impact-rated shingles, properly nailed sheathing (6d ring-shank on a 6/12 pattern), secondary water barrier under the entire roof, and a hip roof shape. Most Neptune Beach homes built before 2002 are paying inflated premiums on roofs that don't qualify for any of those credits. On a typical $3,200-$5,000 annual premium for a Neptune Beach home, that's $480-$2,250 of annual savings, every year, for the life of the roof. We provide a notarized wind mitigation inspection report (form OIR-B1-1802) with every replacement so you can submit it to your carrier the same week. For most Neptune Beach homeowners the insurance savings alone pay back the cost of upgrading to impact-rated materials in 4-6 years." },
  { question: "How does salt air specifically damage Neptune Beach roofs?", answer: "Salt air attacks Neptune Beach roofs in three ways: it corrodes metal flashing and fasteners (causing leaks at penetrations within 5-8 years on standard galvanized hardware), it accelerates shingle granule loss on the windward side facing the ocean (the 1st Street oceanfront slopes show this within 8-10 years on standard shingles), and it feeds aggressive algae and moss growth in the persistent humidity. Homes in 32266 east of 3rd Street see all three effects most aggressively, while the streets west of Florida Boulevard get a milder version. We recommend annual washdowns with a zinc sulfate solution, ridge vents instead of box vents, zinc strips along the ridge to inhibit algae, and a professional inspection every spring before hurricane season. Annual maintenance roughly doubles the practical life of a Neptune Beach roof compared to neglected properties." },
  { question: "What's special about roofing in the Beaches Town Center area?", answer: "The Beaches Town Center area straddles the Atlantic Boulevard line between Neptune Beach and Jacksonville Beach, with mixed residential and commercial properties along 1st Street North and the cross-streets. The commercial buildings — restaurants, shops, the older bungalow-style storefronts — typically have flat or low-slope roof sections that need TPO or modified bitumen rather than shingle. The residential homes immediately adjacent often have to coordinate with neighboring commercial buildings for tear-off staging and parking. We've handled multiple Beaches Town Center projects and we know how to work the area: scheduling around restaurant operating hours, coordinating with the small property owners on either side, and managing material delivery on the narrow side streets. We service both residential and commercial in this part of 32266 and we can quote either type." },
  { question: "How often should I inspect my Neptune Beach roof?", answer: "Twice a year minimum for any home in 32266 — once in early spring before hurricane season, once in November after the last named storm. Salt damage and storm wear show up gradually, and what looks fine from the ground is often hiding corroded flashing or lifted shingles up close. We check four things specifically on Neptune Beach roofs: the windward east-facing shingle slopes for granule loss and lifting (this is where salt and wind damage shows up first), every metal fastener and flashing for salt corrosion, the ridge cap for wind uplift damage, and the chimney and skylight flashing on the older Forest Avenue and Cherry Street homes. We offer free annual inspections for past customers and reduced-rate inspections for new clients in 32266. Call (904) 606-5313 to schedule." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#localbusiness",
  "name": "Gimo's Roofing",
  "url": "https://www.gimosroofing.com/roofing-neptune-beach-fl",
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
    "name": "Neptune Beach",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Neptune_Beach,_Florida"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services in Neptune Beach, FL",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coastal Roof Replacement in Neptune Beach FL",
          "description": "Salt-resistant coastal roofing for Neptune Beach oceanfront and near-ocean homes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Hurricane Damage Repair in Neptune Beach FL",
          "description": "24/7 emergency storm damage repair and insurance claim assistance for Neptune Beach properties."
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
    { "@type": "ListItem", "position": 3, "name": "Neptune Beach", "item": "https://www.gimosroofing.com/roofing-neptune-beach-fl" }
  ]
}

export default function NeptuneBeachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & The Beaches</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Neptune Beach FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Coastal roofing specialists for Neptune Beach homes. Salt-resistant materials, 130+ mph wind-rated installation, and 24/7 storm response throughout ZIP code 32266.
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
              <Image src="/images/jacksonville-roofer.webp" alt="Professional roofing services in Neptune Beach FL" title="Professional roofing services in Neptune Beach FL" fill className="object-cover" priority />
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

      {/* Intro */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Your Neptune Beach Coastal Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            Neptune Beach is the small middle community in the Beaches — just over a square mile in total area, with around 7,000 residents — sandwiched between Atlantic Beach to the north and Jacksonville Beach to the south. The Atlantic Boulevard line at the southern edge marks the Beaches Town Center, and the rest of Neptune Beach stretches north along the dune line through 1st Street to the Atlantic Beach border. Despite its small size, Neptune Beach has a strong residential identity built around the Forest Avenue and Florida Boulevard residential streets, the older bungalow stock along Cherry Street and Hopkins Street, and the oceanfront homes lining 1st Street North and 1st Street South.
          </p>
          <p className="text-gray-600 mb-4">
            Living within a half-mile of the Atlantic in 32266 means every roof here faces accelerated deterioration compared to inland Jacksonville properties. Standard 3-tab shingles that last 25 years in Mandarin only last 12-15 years on a Neptune Beach home. The salt corrosion attacks metal flashing and fasteners, the wind drives rain into any gap in the seal, and the constant humidity feeds algae and underlayment breakdown.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we&apos;ve completed coastal roofing projects across every part of Neptune Beach. We understand which materials hold up in 32266&apos;s salt-air environment and which fail prematurely. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a complete roof replacement</Link> on a 1st Street oceanfront or <Link href="/services/roof-repair" className="text-primary hover:underline">targeted repairs</Link> on a Forest Avenue bungalow, our team delivers solutions built for barrier-island conditions. <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">Emergency roof repair</Link> is available 24/7 throughout the Beaches.
          </p>
        </div>
      </section>

      {/* Why Coastal Materials */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Neptune Beach Roofs Need Coastal-Grade Materials</h2>
          <p className="text-gray-600 mb-4">
            Neptune Beach&apos;s combination of direct ocean exposure, year-round humidity averaging 74%, intense reflected UV from sand and water, and hurricane-force winds creates a roofing environment that&apos;s fundamentally different from inland Jacksonville. Here&apos;s what happens to standard materials in 32266:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Salt corrosion:</strong> <span className="text-gray-600">Airborne salt crystals attack metal fasteners, flashing, drip edges, and roof vents. Standard galvanized nails can start corroding within 5-7 years near the beach. We use stainless steel or hot-dipped galvanized fasteners rated for coastal environments on every Neptune Beach installation.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">UV degradation:</strong> <span className="text-gray-600">Sunlight reflected off the ocean and white sand effectively doubles UV exposure on Neptune Beach roofs. This accelerates shingle granule loss, underlayment breakdown, and sealant failure. We install UV-resistant materials designed for high-exposure environments.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Wind uplift:</strong> <span className="text-gray-600">Florida Building Code requires roofs in Neptune Beach to withstand wind speeds of 130+ mph. The 1st Street and 2nd Street homes face stronger sustained winds and more intense gusts than properties even a few blocks west. Proper nail patterns and adhesion are critical.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Moisture and algae:</strong> <span className="text-gray-600">High humidity promotes algae, mold, and mildew growth on north-facing roof slopes. We use algae-resistant shingles and recommend zinc strips along the ridge to combat this throughout 32266.</span></div>
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
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Problems in Neptune Beach</h2>
          <p className="text-gray-600 mb-6">
            After years of serving Neptune Beach homeowners, we see the same coastal roofing issues repeatedly. Catching these early saves thousands in repairs:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Corroded Flashing</h3>
              <p className="text-gray-600 text-sm">Metal flashing around vents, chimneys, and roof edges corrodes faster in Neptune Beach&apos;s salt air. We replace with aluminum or stainless steel flashing designed for coastal exposure.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Wind-Lifted Shingles</h3>
              <p className="text-gray-600 text-sm">Ocean winds peel back shingle edges along 1st Street and the streets east of 3rd Street, breaking the seal strip and allowing water intrusion. Even moderate tropical storms cause damage.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Premature Granule Loss</h3>
              <p className="text-gray-600 text-sm">UV and wind-driven sand strip protective granules from shingles years ahead of schedule. Bare spots on east-facing slopes leave shingles vulnerable to UV damage and leaks.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Algae &amp; Mold Streaks</h3>
              <p className="text-gray-600 text-sm">Black streaks on north-facing slopes are Gloeocapsa magma algae, fueled by humidity. Beyond appearance, algae degrades shingles and reduces roof life across 32266.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Coastal Roofing Services in {location}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/services/roof-replacement" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Beach Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Complete tear-off with coastal-grade materials rated for salt exposure and 130+ mph winds. Starting at $11,000 for Neptune Beach homes.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Storm Damage Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and tropical storm damage. Tarping, repairs, and full insurance claim assistance throughout 32266.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Coastal Roof Repair</h4>
              <p className="text-gray-600 text-sm">Fix salt-corroded flashing, wind-lifted shingles, leaks, and UV damage with materials built for Neptune Beach conditions.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Standing Seam Metal</h4>
              <p className="text-gray-600 text-sm">Aluminum standing seam for maximum salt resistance. 40-60 year lifespan, ideal for 1st Street oceanfront properties.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Beaches Town Center Commercial</h4>
              <p className="text-gray-600 text-sm">TPO and modified bitumen flat roofing for the restaurants, shops, and mixed-use buildings along Atlantic Boulevard and 1st Street.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Twice-yearly Neptune Beach property inspections. We check for salt corrosion, wind damage, and UV deterioration before they become costly problems.</p>
            </div>
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
            <h2 className="text-2xl font-bold text-secondary mb-3">5-Star Rated by Neptune Beach Homeowners</h2>
            <p className="text-gray-600 mb-6">From oceanfront homes on 1st Street to the bungalows along Forest Avenue and Cherry Street, our crew has earned 5-star reviews across the Neptune Beach community.</p>
            <a href="https://www.google.com/search?q=Gimo%27s+Roofing+Jacksonville+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition">Read Our Reviews</a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving Neptune Beach and all of Northeast Florida&apos;s coastal communities.</p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe src="https://maps.google.com/maps?q=Neptune+Beach,+FL+32266&t=&z=14&ie=UTF8&iwloc=&output=embed" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Service Area - Neptune Beach FL"></iframe>
          </div>
        </div>
      </section>

      {/* ZIP Code Coverage */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing in 32266 - Neptune Beach ZIP Code</h2>
          <p className="text-gray-600 mb-4">
            ZIP code 32266 covers all of Neptune Beach - the smallest of the Beaches communities at just over a square mile, with about 7,000 residents. The ZIP includes the oceanfront homes along 1st Street North and 1st Street South, the residential streets between 3rd Street and Penman Road including Forest Avenue, Florida Boulevard, and Cherry Street, and the southern edge bordering Jacksonville Beach at the Beaches Town Center. Roofs in 32266 face the same coastal exposure as Jacksonville Beach because the two communities share the same barrier dune line.
          </p>
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
