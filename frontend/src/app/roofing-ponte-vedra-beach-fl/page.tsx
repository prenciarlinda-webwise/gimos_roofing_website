import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roofing Ponte Vedra Beach FL - Gimo's Roofing" },
  description: "Roofing company Ponte Vedra Beach FL. Roofing contractors Ponte Vedra Beach FL for TPC Sawgrass, Marsh Landing, and luxury homes. HOA-compliant. Call (904) 606-5313.",
  openGraph: {
    title: "Roofing Ponte Vedra Beach FL - Gimo's Roofing",
    description: "Roofing contractors Ponte Vedra Beach FL. Luxury home and HOA specialists. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/roofing-ponte-vedra-beach-fl",
  },
  alternates: { canonical: "https://www.gimosroofing.com/roofing-ponte-vedra-beach-fl" },
}

const location = "Ponte Vedra Beach"
const county = "St. Johns County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Neptune Beach", href: "/roofing-neptune-beach-fl" },
  { name: "Atlantic Beach", href: "/roofing-atlantic-beach-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" },
  { name: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { name: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" }
]

const faqs = [
  { question: "Does Gimo's Roofing work with HOAs and ARBs in TPC Sawgrass and Marsh Landing?", answer: "Yes  --  we've completed projects in nearly every gated community in 32082, including Marsh Landing Country Club, The Plantation at Ponte Vedra, Sawgrass Players Club, Sawgrass Country Club, Old Ponte Vedra, and The Sea Colony. Each community has its own architectural review board with its own approved materials matrix, color palette, and submittal requirements, and we maintain a current binder for each one. For Marsh Landing, that means submitting GAF Grand Sequoia or CertainTeed Landmark Premium in approved color blends; for The Plantation, it usually means concrete S-tile in the community-approved color range. We prepare your ARB packet  --  product spec sheets, color samples, contractor insurance, scope of work  --  and walk it through approval before we order materials. Most boards turn around within 2-3 weeks. We've never had a Ponte Vedra ARB submittal rejected." },
  { question: "How much does a roof replacement actually cost in Ponte Vedra Beach?", answer: "Most Ponte Vedra Beach roofs land between $22,000 and $85,000, with a wide range driven by material and complexity. A 3,500 sq ft architectural shingle re-roof in Sawgrass Players Club or the older Sawgrass Country Club homes typically runs $22,000-$32,000. The 5,000-7,000 sq ft homes in Marsh Landing with complex hip-and-valley layouts run $38,000-$58,000 in premium architectural shingle. Concrete S-tile on a Mediterranean-style home in The Plantation runs $55,000-$95,000. The estate homes along Ponte Vedra Boulevard, Neck Road, and the oceanfront stretches off A1A often hit $90,000-$160,000+ when you're looking at clay barrel tile, copper accents, or natural slate. We line-item every quote  --  tear-off, decking, underlayment, drip edge, ridge vent, materials, labor, dump fees  --  so you can see exactly where the money goes." },
  { question: "What roofing materials are actually approved in Marsh Landing and TPC Sawgrass communities?", answer: "For Marsh Landing, the standard approvals are GAF Grand Sequoia, CertainTeed Landmark Premium, and Atlas StormMaster Slate in the community color matrix (typically Weathered Wood, Driftwood, or Estate Gray). Concrete S-tile is approved but only in the original community color range. Sawgrass Players Club allows the same architectural shingle list plus standing seam metal in matte dark bronze or charcoal. The Plantation at Ponte Vedra requires concrete or clay tile on most lots  --  shingle is typically not approved at all. Sawgrass Country Club has the most variation by section. Old Ponte Vedra and the older A1A oceanfront properties have the loosest restrictions but the highest standards in practice. We bring physical samples of every commonly-approved product to the estimate and we'll tell you straight if what you want isn't going to clear your ARB." },
  { question: "How does salt air affect homes in Ponte Vedra even though they're inland of the dunes?", answer: "Ponte Vedra Beach gets salt corrosion in waves that drop off sharply with distance from the Atlantic. Homes east of A1A  --  Old Ponte Vedra, the streets off Neck Road, the oceanfront stretches  --  get the same salt exposure as Jacksonville Beach, and we use the same stainless steel and aluminum hardware on those roofs. Homes a mile to two miles inland in Sawgrass Players Club and the eastern half of Marsh Landing still see meaningful salt corrosion on standard galvanized fasteners and flashing within 8-12 years, so we recommend hot-dipped galvanized at minimum. Homes west of US 1, in The Plantation and Nocatee-side Marsh Landing sections, are inland enough that standard fasteners are fine. We'll tell you on the estimate which zone your house sits in and what hardware grade actually makes sense for your specific location." },
  { question: "Will a new roof actually lower my Ponte Vedra insurance premium?", answer: "Yes, and the savings on Ponte Vedra homes are larger than almost anywhere else in the metro because the underlying premiums are so high. Citizens, Universal, and the few private carriers still writing in 32082 give wind mitigation credits of 15-45% for newer roofs that have impact-rated shingles, 6d ring-shank nails on a 6/12 pattern, secondary water barrier (peel-and-stick under the entire roof), and a hip roof shape. On a $4,500/year premium  --  typical for a Marsh Landing home  --  that's $675 to $2,000 of annual savings, every year, for the life of the roof. We provide a notarized wind mitigation inspection report (form OIR-B1-1802) with every replacement so you can hand it to your carrier the same week. For most Ponte Vedra homeowners the insurance savings alone pay back the difference between a basic and an impact-rated roof in 4-6 years." },
  { question: "Can you source matching tile for my Ponte Vedra concrete or clay tile roof?", answer: "Yes. The vast majority of Ponte Vedra tile roofs are Eagle Roofing concrete S-tile or Boral concrete tile, both of which are still in production and color-matchable for new tile. For the older clay barrel tile roofs on the original Old Ponte Vedra and some of The Plantation estates, we source through Ludowici and MCA for new clay tile, and through salvage yards in Tampa and Miami for exact matches on out-of-production profiles. For partial repairs after storm damage, we typically pull replacement tiles from the rear roof slopes (where they're not visible from the street) and use the new color-matched tile in those rear areas, so the visible front of your house stays perfectly uniform. We've done this technique on dozens of Marsh Landing and Sawgrass tile repairs after Hurricane Matthew and Hurricane Ian." },
  { question: "What happens if my Ponte Vedra ARB rejects my roofing material choice?", answer: "It depends on the community. In Marsh Landing, a rejection usually means the color blend or shingle line you selected is not on their current approved list, and the fix is straightforward: we swap to an approved product in a similar color and resubmit. In The Plantation at Ponte Vedra, rejections are more common because the board requires concrete or clay tile on most lots and will not approve shingle regardless of quality. In Sawgrass Players Club, we have occasionally seen rejections on standing seam metal in non-approved finishes. In every case we handle the resubmission at no extra cost. We have never had a Ponte Vedra project stall permanently over an ARB issue because we pre-screen the product selection before the first submittal." },
  { question: "Are there different roofing requirements for Ponte Vedra homes east vs west of A1A?", answer: "Yes, and the difference is hardware grade and material durability. Homes east of A1A in Old Ponte Vedra, along Ponte Vedra Boulevard, and the streets off Neck Road sit within direct salt spray range of the Atlantic. We use stainless steel fasteners, aluminum flashing, and impact-rated shingles or aluminum standing seam on every roof in that zone. West of A1A in the Sawgrass and Marsh Landing communities, the salt exposure drops significantly and hot-dipped galvanized hardware is usually sufficient. The line is not perfectly at A1A -- some homes in the eastern sections of Sawgrass Players Club still get enough salt to justify stainless. We evaluate your specific lot during the estimate and recommend accordingly." },
  { question: "Do you provide 24/7 emergency response in Ponte Vedra Beach?", answer: "Yes. After every named storm we run dedicated crews into 32082 and 32081  --  Marsh Landing, Sawgrass, The Plantation, the A1A oceanfront stretches, and the Palm Valley side  --  and we're typically on-site within a few hours of a call. The most common emergency calls in Ponte Vedra are slipped or shattered ridge cap tiles, broken concrete S-tile from flying debris, water intrusion through chimney flashing on the larger Marsh Landing homes, and full-tarp jobs after live oak limbs come through the deck. We carry stock of the most common Eagle and Boral tile profiles on the truck so we can lock the roof down properly instead of just throwing a tarp. We also handle the insurance documentation in real time  --  photos, written scope, and the OIR-B1-1802  --  so your claim moves the same week. Call (904) 606-5313." }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-ponte-vedra-beach-fl#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/roofing-ponte-vedra-beach-fl",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-ponte-vedra-beach-fl#breadcrumb",
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
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/best-roofing-contractor-near-me.webp" alt="Expert roofing contractor in Ponte Vedra Beach FL" title="Expert roofing contractor in Ponte Vedra Beach FL" fill className="object-cover" priority />
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

      {/* Intro */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} Premium Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            Ponte Vedra Beach is one of Northeast Florida&apos;s most prestigious addresses, home to world-renowned TPC Sawgrass and THE PLAYERS Championship. Spanning ZIP codes 32082 and 32081 across {county}, the community features some of the highest property values in the Jacksonville metropolitan area, with homes ranging from $500,000 to well over $5 million. {location} falls within the St. Johns County School District, routinely ranked the top public school district in Florida, one more reason property values here stay high. From the gated estates of Marsh Landing to the golf villas surrounding Sawgrass Country Club, every property here demands roofing that matches its caliber.
          </p>
          <p className="text-gray-600 mb-4">
            Unlike standard subdivisions, {location} homes present unique roofing challenges: larger roof areas averaging 3,000-6,000+ square feet, complex multi-level designs with dormers, hips, and valleys, strict HOA and architectural review board requirements, and premium material expectations from discerning homeowners. Homeowners searching for roofing near Ponte Vedra Beach FL know that a roof on a Marsh Landing estate isn&apos;t just weather protection, it&apos;s a visible investment that directly impacts curb appeal and resale value. That&apos;s why choosing from established roofing companies in Ponte Vedra Beach FL matters.
          </p>
          <p className="text-gray-600">
            As a leading roofing contractor in Ponte Vedra Beach FL, Gimo&apos;s Roofing specializes in the premium craftsmanship that {location} properties require. Whether you need a <Link href="/services/roof-replacement" className="text-primary hover:underline">full roof replacement</Link> on a 5,000 sq ft estate, a <Link href="/services/roof-repair" className="text-primary hover:underline">roof repair in Ponte Vedra Beach, FL</Link> for storm-damaged tile, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency roof repair in Ponte Vedra Beach, FL</Link> after a hurricane, our experienced crews deliver results that satisfy both homeowners and HOA boards. We understand the standards expected in Ponte Vedra&apos;s finest neighborhoods.
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
            Working with {location} homeowners for over 24 years, we consistently address these four roofing challenges unique to the area&apos;s luxury communities:
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
              <h4 className="font-bold text-secondary mb-2">Emergency Roof Repair in Ponte Vedra Beach, FL</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and tropical storm damage. Rapid tarping, structural assessment, and full insurance claim documentation for high-value properties.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Repair in Ponte Vedra Beach, FL</h4>
              <p className="text-gray-600 text-sm">Targeted repairs for tile, slate, metal, and architectural shingle roofs. We match existing materials to maintain your home&apos;s appearance and HOA compliance.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Tile &amp; Slate Roofing</h4>
              <p className="text-gray-600 text-sm">Concrete tile, clay tile, and natural slate installation and restoration for Ponte Vedra&apos;s Mediterranean and estate-style homes. 30-75 year lifespan.</p>
            </div>
            <Link href="/services/metal-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Standing Seam Metal</h4>
              <p className="text-gray-600 text-sm">Aluminum and zinc standing seam systems with superior salt resistance. Clean, modern aesthetic popular in Sawgrass Players Club and newer Ponte Vedra developments.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">HOA Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Comprehensive inspections with detailed reports for HOA compliance, insurance renewals, and real estate transactions. We document every component for your records.</p>
            </div>
            <Link href="/services/roof-gutter" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Gutters</h4>
              <p className="text-gray-600 text-sm">Seamless copper and aluminum gutter installation, repair, and replacement sized for the large rooflines in Marsh Landing and TPC Sawgrass. We clear live oak leaf debris and protect estate-home foundations.</p>
            </Link>
            <Link href="/services/roof-waterproofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Waterproofing</h4>
              <p className="text-gray-600 text-sm">Roof coatings, leak sealing, and flashing repair for the flat sections, balconies, and tile valleys common on Ponte Vedra estates. We seal chimney and skylight penetrations against coastal salt air and wind-driven rain.</p>
            </Link>
            <Link href="/services/chimney-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Chimney Repair</h4>
              <p className="text-gray-600 text-sm">Chimney cap replacement, flashing repair, and crown repair for Ponte Vedra estates, where coastal salt air and wind-driven rain corrode caps and open flashing seams faster than inland homes.</p>
            </Link>
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
            <iframe src="https://maps.google.com/maps?q=Ponte+Vedra+Beach,+FL+32082&t=&z=12&ie=UTF8&iwloc=&output=embed" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Service Area - Ponte Vedra Beach FL"></iframe>
          </div>
        </div>
      </section>

      {/* ZIP Code Coverage */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing in 32082 and 32081 - Ponte Vedra Beach ZIP Codes</h2>
          <p className="text-gray-600 mb-4">
            ZIP codes 32082 and 32081 cover Ponte Vedra Beach across St. Johns County. 32082 is the older oceanfront and east side of A1A, including Old Ponte Vedra, Sawgrass Country Club, The Plantation at Ponte Vedra, and most of Marsh Landing Country Club. 32081 covers the newer Palm Valley side and the western edge bordering Nocatee. Roofs here range from architectural shingle in Sawgrass Players Club to concrete S-tile in The Plantation to standing seam metal on the estate homes off Ponte Vedra Boulevard. Architectural review board approval is required in nearly every gated community in both ZIPs.
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
