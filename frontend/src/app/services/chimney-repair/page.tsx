import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Chimney Repair & Cap Replacement Jacksonville FL - Gimo's Roofing" },
  description: "Chimney repair, cap replacement, and chimney flashing service in Jacksonville FL. Repointing, crown repair, leak fixes, free estimates, and financing. Call (904) 606-5313.",
  openGraph: {
    title: "Chimney Repair & Cap Replacement in Jacksonville FL - Gimo's Roofing",
    description: "Chimney repair, cap replacement, and flashing service in Jacksonville FL. Repointing, crown repair, and leak fixes. Free estimates. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/services/chimney-repair",
    images: ["https://www.gimosroofing.com/images/roof-repair-in-progress-jacksonville.webp"],
  },
  alternates: { canonical: "https://www.gimosroofing.com/services/chimney-repair" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const financingUrl = 'https://application.enerbank.com/#/link?spnum=8007747598&cid=118584&promo=DEL2625&loamt='
const phone = "(904) 606-5313"

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
)

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
  { question: "How much does chimney repair cost in Jacksonville?", answer: "Most chimney repairs in Jacksonville run $300 to $2,500 depending on the problem. Chimney cap replacement is usually $150 to $500, flashing repair runs $200 to $600, crown repair or recoating is $300 to $900, and full repointing (repairing the mortar joints) on a typical brick chimney runs $1,000 to $2,500 depending on height and how much mortar has failed. We inspect first and give a firm written estimate." },
  { question: "How much does a chimney cap replacement cost?", answer: "A new chimney cap typically costs $150 to $500 installed, depending on chimney size, material, and whether it is a single-flue or multi-flue cap. Stainless steel caps cost more upfront but resist Jacksonville's humidity and salt air better than galvanized steel, which is why we recommend stainless or copper for most coastal and near-coastal homes." },
  { question: "Why do I need a chimney cap?", answer: "A chimney cap keeps rain, wind-driven debris, birds, squirrels, and other animals out of the flue. Without one, water runs straight down the chimney interior, saturates the masonry from the inside, and accelerates spalling and mortar failure. On a wood-burning chimney, the cap's mesh sides also act as a spark arrestor. A missing or damaged cap is one of the most common causes of chimney leaks we find in Jacksonville." },
  { question: "What causes a chimney to leak?", answer: "Most chimney leaks trace back to one of four things: failed flashing where the chimney meets the roof, a cracked or missing chimney crown (the concrete cap on top of the masonry), a missing or damaged rain cap, or deteriorated mortar joints that let water soak into the brick. Jacksonville's heavy rain and humidity accelerate all four, which is why chimney leaks often show up as ceiling stains near the fireplace wall rather than at the chimney itself." },
  { question: "What is chimney flashing and why does it fail?", answer: "Chimney flashing is the metal barrier where the chimney meets the roof deck, typically a combination of step flashing along the sides and counter-flashing embedded in the mortar joint. It fails when the metal corrodes, the sealant dries out and cracks, or the flashing was never properly stepped and sealed during the original install. Because it sits at a penetration point, failed chimney flashing is one of the most common sources of roof leaks we repair in Jacksonville." },
  { question: "What is chimney repointing and when do I need it?", answer: "Repointing (also called tuckpointing) is removing deteriorated mortar from between the bricks and replacing it with fresh mortar. You need it when you see crumbling or missing mortar joints, mortar that has washed out to more than about a half inch deep, or visible gaps between bricks. Left alone, failed mortar lets water into the chimney structure and accelerates brick spalling and structural movement. Most Jacksonville chimneys need some repointing every 20 to 25 years." },
  { question: "What is a chimney crown and how do you repair it?", answer: "The chimney crown is the concrete or mortar cap on top of the masonry stack that sheds water away from the flue and the top course of brick. Cracks in the crown let water directly into the chimney structure. Minor cracking is repaired with a flexible crown coating or sealant; a crown that is significantly cracked or spalling needs to be rebuilt in concrete with a proper wash (slope) and drip edge so water sheds clear of the brick." },
  { question: "Can you repair a leaning or cracked chimney?", answer: "It depends on the cause and extent. Minor cracking and settling in the mortar joints can often be repaired through repointing and crown repair. A chimney that is visibly leaning, separating from the house, or has structural cracks running through the brick itself needs a structural evaluation, and in some cases a licensed contractor recommends partial rebuild or removal rather than repair. We inspect and give you an honest assessment rather than patching a structural problem." },
  { question: "Do you repair chimneys on homes you didn't build the roof for?", answer: "Yes. Chimney flashing, cap, crown, and mortar repair are roof-adjacent work we handle on any Jacksonville home, regardless of who installed the original roof or chimney. If the chimney leak is actually a roof flashing or shingle problem near the chimney, we diagnose that as part of the same visit so you are not paying two contractors to find one leak." }
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/chimney-repair#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Chimney Repair and Cap Replacement", "item": "https://www.gimosroofing.com/services/chimney-repair" }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/chimney-repair#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/services/chimney-repair",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function ChimneyRepairPage() {
  return (
    <>
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
                <span className="text-primary">Chimney Repair</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Chimney Repair &amp; Cap Replacement - Jacksonville, FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                Gimo&apos;s Roofing repairs and replaces chimney caps, flashing, crowns, and mortar joints across Jacksonville and Northeast Florida. Chimneys take the worst of Jacksonville&apos;s humidity, salt air, and summer storms, and a failed cap or flashing detail is one of the most common sources of a roof leak that shows up nowhere near the actual chimney. We diagnose the real cause first, then fix it.
              </p>
              <ul className="text-gray-200 mb-6 space-y-2">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Licensed FL CCC1332453 and insured</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Cap, flashing, crown, and repointing work</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Free estimates and honest assessments</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> CertainTeed Certified roofing contractor</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-repair-in-progress-jacksonville.webp" alt="Chimney flashing and cap repair on a Jacksonville FL roof" title="Chimney repair in Jacksonville FL" fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-secondary text-center">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold">Free chimney estimates and financing available. Ivan, Owner. FL License CCC1332453.</span>
            </div>
            <span className="hidden md:block">|</span>
            <a href="tel:+19046065313" className="font-bold hover:underline">Call Now: {phone}</a>
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
              <span className="text-sm font-semibold text-secondary">5-Star Rated by Jacksonville Homeowners</span>
            </div>
            <div className="flex items-center gap-6">
              <a href="https://maps.app.goo.gl/hC3XuE5pKA2ypPAQA" target="_blank" rel="noopener" title="View Gimo's Roofing Google Reviews">
                <Image src="/google-logo.png" alt="Read Gimo's Roofing reviews on Google" title="Google Reviews" width={80} height={28} className="h-7 w-auto object-contain" />
              </a>
              <a href="https://www.yelp.com/biz/gimos-renovation-and-roofing-jacksonville" target="_blank" rel="noopener" title="View Gimo's Roofing Yelp Reviews">
                <Image src="/yelp-logo.svg" alt="Read Gimo's Roofing reviews on Yelp" title="Yelp Reviews" width={70} height={28} className="h-7 w-auto object-contain" unoptimized />
              </a>
              <a href="https://www.thumbtack.com/fl/jacksonville/roofing/gimos-renovation-roofing/service/478820963508404237" target="_blank" rel="noopener" title="View Gimo's Roofing Thumbtack Reviews">
                <Image src="/thumbtack-logo.svg" alt="Read Gimo's Roofing reviews on Thumbtack" title="Thumbtack Reviews" width={36} height={36} className="h-7 w-auto object-contain" unoptimized />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why chimney maintenance matters in Jacksonville */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Why Chimneys Fail Faster in Jacksonville</h2>
              <p className="text-gray-600 mb-4">A chimney is a masonry or metal structure sitting exposed on top of your roof, taking direct sun, driving rain, and salt air with no shingle or membrane protecting it the way the rest of the roof is protected. Jacksonville&apos;s combination of high humidity, more than 50 inches of annual rain, and a coastal air corridor that reaches well inland accelerates mortar breakdown, brick spalling, and corrosion on caps and flashing far faster than in drier climates.</p>
              <p className="text-gray-600 mb-4">Most of the chimney leaks we diagnose are not coming from the flue itself. They come from a missing or rusted-through cap, a cracked crown, or flashing that has pulled away from the masonry at the roofline. Those leaks often show up as a stain on the ceiling or wall several feet from the actual chimney, which is why chimney problems get misdiagnosed as roof leaks, and roof leaks near the chimney get misdiagnosed as chimney problems, until someone traces the water to its actual source.</p>
              <p className="text-gray-600">We treat chimney and roof flashing as one system. If your leak is at the chimney, we check the cap, crown, mortar, and flashing together rather than guessing at one component, the same way we trace hidden leak sources during <Link href="/services/roof-repair" className="text-primary hover:underline">roof repair in Jacksonville</Link>.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Where Chimney Leaks Start</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Missing or damaged cap:</strong> Rain runs straight down the flue and soaks the interior.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Cracked crown:</strong> Water enters the top of the masonry stack directly.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Failed flashing:</strong> The chimney-to-roof seam opens where metal meets shingle.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Deteriorated mortar:</strong> Water wicks into the brick through open joints.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Spalling brick:</strong> Trapped moisture freezes and thaws or expands, popping the brick face off.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Chimney Cap Replacement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Chimney Cap Replacement</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">A missing or rusted-out cap is the single most common chimney problem we find in Jacksonville. It is also one of the least expensive fixes relative to the damage it prevents.</p>
          </div>

          <div className="space-y-8">
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Why a Cap Matters</h3>
                  <p className="text-gray-600 mb-4">The chimney cap covers the top of the flue and keeps rain, wind-driven debris, birds, squirrels, and other animals from getting into the chimney. Without one, water runs directly down the interior of the flue, saturating the masonry from the inside where you cannot see it happening. On wood-burning chimneys, the mesh sides of the cap also act as a spark arrestor and keep embers from landing on the roof.</p>
                  <p className="text-gray-600 mb-4">We see galvanized steel caps rust through after 10 to 15 years in Jacksonville&apos;s humidity and coastal air. Stainless steel and copper caps cost more upfront but resist that corrosion far longer, which usually makes them the better value for homes near the coast or the St. Johns River.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $150 to $500 installed, depending on chimney size, material, and whether the flue needs a single or multi-flue cap.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Cap Materials</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Stainless steel: best corrosion resistance</li>
                    <li>&#8226; Copper: premium look, very long life</li>
                    <li>&#8226; Galvanized steel: lower cost, shorter life</li>
                    <li>&#8226; Multi-flue caps for combined systems</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Chimney Flashing Repair</h3>
                  <p className="text-gray-600 mb-4">Chimney flashing is the metal barrier at the seam where the chimney meets the roof deck, usually step flashing along the sides and counter-flashing set into a mortar joint above it. It is one of the most failure-prone details on any roof because it combines a roof penetration, a material transition, and constant thermal movement in one spot.</p>
                  <p className="text-gray-600 mb-4">We reflash chimneys with corrosion-resistant metal, properly step and lace it into the shingle courses, and set counter-flashing into a fresh mortar reglet so it sheds water instead of relying on sealant alone. Sealant-only repairs are a short-term patch; a correctly stepped and counter-flashed chimney is the actual fix.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $200 to $600, depending on chimney size and whether the surrounding shingles or mortar need to be opened up to do it correctly.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Flashing at a Glance</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Step flashing along the sides</li>
                    <li>&#8226; Counter-flashing set into mortar</li>
                    <li>&#8226; No reliance on sealant alone</li>
                    <li>&#8226; Common source of hidden leaks</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Masonry Repair */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Masonry Repair - Crown, Repointing, and Spalling Brick</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">The masonry itself takes years of Jacksonville rain, humidity, and UV before it starts showing damage. Here is how we fix it once it does.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary mb-3">Chimney Crown Repair</h3>
              <p className="text-gray-600 mb-3">The crown is the concrete or mortar cap on top of the masonry stack that sheds water away from the flue and the top course of brick. Once it cracks, water gets directly into the chimney structure, often before you notice a cap or flashing problem.</p>
              <p className="text-gray-600">Minor cracking gets a flexible crown coating or sealant. A crown that is badly cracked or spalling gets rebuilt in concrete with a proper slope and drip edge so water actually sheds clear of the brick instead of running down the face.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary mb-3">Repointing and Tuckpointing</h3>
              <p className="text-gray-600 mb-3">Mortar joints are the weakest link in any masonry chimney. Once they crumble or wash out, water wicks straight into the brick and the joint behind it, which is how a small mortar problem becomes a structural one.</p>
              <p className="text-gray-600">We grind out failed mortar to the correct depth and repoint with a mortar mix matched to the original, so the repair holds and does not trap moisture behind a mismatched, harder patch. Most Jacksonville chimneys need some repointing every 20 to 25 years.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary mb-3">Spalling Brick Repair</h3>
              <p className="text-gray-600 mb-3">Spalling is when the face of a brick pops off or flakes away, usually because water got into the brick through failed mortar or a missing cap and then pushed the surface off as it moved. It is a visible sign that water has already been getting in for a while.</p>
              <p className="text-gray-600">We replace the damaged brick, correct the moisture source that caused the spalling in the first place, such as a missing cap or open mortar joint, and reseal the masonry so the repair does not just repeat itself in a few years.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary mb-3">Leaning or Structurally Damaged Chimneys</h3>
              <p className="text-gray-600 mb-3">Minor settling and cracked mortar joints are repairable. A chimney that is visibly leaning, separating from the exterior wall, or has cracks running through the brick itself, not just the joints, is a structural issue rather than a maintenance one.</p>
              <p className="text-gray-600">We inspect and give you a straight answer. Some structural chimney problems are repairable; others need partial rebuild. We will not sell you a cosmetic patch on a structural problem.</p>
            </div>
          </div>

          <div className="mt-8 card p-6 bg-gray-50 text-center">
            <p className="text-gray-600"><strong>Typical masonry repair cost:</strong> Crown repair or recoating runs $300 to $900. Full repointing on a typical residential chimney runs $1,000 to $2,500 depending on height and how much mortar has failed. We give a firm price after inspecting the chimney in person.</p>
          </div>
        </div>
      </section>

      {/* Pricing + CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto mb-4"><strong>Gimo&apos;s Roofing diagnoses chimney leaks by checking the cap, crown, flashing, and mortar together, then fixes the actual source instead of patching the symptom.</strong> A free inspection tells you exactly what your chimney needs before any work starts. <a href={estimateUrl} id="cta-snippet-chimney-estimate" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">Get a free estimate</a> or call <a href="tel:+19046065313" id="cta-snippet-chimney-call" className="text-primary font-semibold hover:underline">(904) 606-5313</a>.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Cap Replacement</h3>
              <p className="text-3xl font-bold text-primary mb-2">$150 - $500</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Stainless, copper, or galvanized</li>
                <li>&#8226; Single or multi-flue caps</li>
                <li>&#8226; Keeps out rain, debris, animals</li>
              </ul>
            </div>
            <div className="card p-6 text-center border-2 border-primary">
              <h3 className="font-bold text-secondary mb-2">Flashing &amp; Crown Repair</h3>
              <p className="text-3xl font-bold text-primary mb-2">$200 - $900</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Step and counter-flashing</li>
                <li>&#8226; Crown crack repair or recoat</li>
                <li>&#8226; Fixes the most common leak source</li>
              </ul>
            </div>
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Repointing</h3>
              <p className="text-3xl font-bold text-primary mb-2">$1,000 - $2,500</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Mortar joint restoration</li>
                <li>&#8226; Matched mortar mix</li>
                <li>&#8226; Stops water intrusion into brick</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-center text-sm">Ranges are estimates for typical Jacksonville chimneys. Actual cost depends on chimney height, material, extent of damage, and access. We provide free estimates and detailed written quotes.</p>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Chimney work can be financed alongside a larger roofing project.</p>
            <Link href="/roof-financing-florida" className="text-primary font-semibold hover:underline">See roofing and chimney financing options &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Chimney Repair Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">From first call to finished repair, here is what to expect when Gimo&apos;s Roofing handles your chimney.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
              <p className="font-bold text-secondary mb-2">Contact us</p>
              <p className="text-gray-600 text-sm">Call (904) 606-5313 or request an estimate online. Tell us what you are seeing, a leak, visible damage, or a missing cap.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
              <p className="font-bold text-secondary mb-2">Inspect and diagnose</p>
              <p className="text-gray-600 text-sm">We check the cap, crown, flashing, and mortar together to find the actual source, not just the visible symptom.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
              <p className="font-bold text-secondary mb-2">Repair or replace</p>
              <p className="text-gray-600 text-sm">We fix the cap, flashing, crown, or mortar with materials matched to your chimney and Jacksonville's climate.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">4</div>
              <p className="font-bold text-secondary mb-2">Test and clean up</p>
              <p className="text-gray-600 text-sm">We confirm the repair sheds water correctly, clean up all debris, and explain any warranty and maintenance recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Chimney Repair Service Areas in Northeast Florida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We repair and replace chimney caps, flashing, crowns, and mortar across Duval, St. Johns, Clay, and Nassau counties. Explore our roofing pages in <Link href="/roofing-jacksonville-fl" className="text-primary hover:underline">Jacksonville</Link>, <Link href="/roofing-riverside-fl" className="text-primary hover:underline">Riverside</Link>, <Link href="/roofing-san-marco-fl" className="text-primary hover:underline">San Marco</Link>, <Link href="/roofing-st-augustine-fl" className="text-primary hover:underline">St. Augustine</Link>, and <Link href="/roofing-orange-park-fl" className="text-primary hover:underline">Orange Park</Link>.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`Chimney Repair Services in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Chimney Repair FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Related Roofing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Chimney flashing and leaks rarely stand alone. Here is how the rest of the roof fits together.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/roof-repair" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Repair</h3>
              <p className="text-gray-600 text-sm">Leak repair, shingle repair, and flashing repair, including leaks that start at the chimney and travel across the deck.</p>
            </Link>
            <Link href="/services/roof-waterproofing" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Waterproofing</h3>
              <p className="text-gray-600 text-sm">Coatings and sealant for flashing and penetrations, including the transitions around chimneys, skylights, and vents.</p>
            </Link>
            <Link href="/roof-financing-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roofing Financing</h3>
              <p className="text-gray-600 text-sm">Fixed monthly payment options so chimney and roof work can move forward without waiting for damage to spread.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Chimney and Roof Edge Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about chimney flashing, roof-edge repair, and how our warranty works.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/chimney-flashing-repair-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Chimney Flashing Repair Guide</h3>
              <p className="text-gray-600 text-sm">A deeper look at how failed chimney flashing causes roof leaks and how it&apos;s fixed.</p>
            </Link>
            <Link href="/blog/fascia-soffit-repair-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Fascia and Soffit Repair</h3>
              <p className="text-gray-600 text-sm">Protecting the roof edge, another common source of hidden water damage.</p>
            </Link>
            <Link href="/blog/roof-warranty-guide-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Warranty Guide</h3>
              <p className="text-gray-600 text-sm">What manufacturer and workmanship warranties actually cover, and what can void them.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Need a Chimney Cap, Flashing, or Masonry Repair?</h2>
          <p className="text-secondary/80 mb-6">Get a free estimate from a licensed, CertainTeed Certified Jacksonville roofing contractor. FL License CCC1332453.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Free Estimate</a>
            <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100">Apply for Financing</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
