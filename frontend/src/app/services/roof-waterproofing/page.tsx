import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roof Waterproofing in Jacksonville FL - Gimo's Roofing" },
  description: "Roof waterproofing in Jacksonville FL from Gimo's Roofing. Elastomeric roof coatings, silicone, flashing sealant, and flat-roof membranes that stop leaks. Call (904) 606-5313.",
  openGraph: {
    title: "Roof Waterproofing in Jacksonville FL - Gimo's Roofing",
    description: "Roof waterproofing for flat, low-slope, and leak-prone roofs. Coatings, membranes, and sealant that stop water before it spreads. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/services/roof-waterproofing",
    images: ["https://www.gimosroofing.com/images/roof-leak-emergency-repair.webp"],
  },
  alternates: { canonical: "https://www.gimosroofing.com/services/roof-waterproofing" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
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
  { question: "What is roof waterproofing?", answer: "Roof waterproofing is the process of sealing a roof so water cannot pass through it. It includes applying liquid coatings such as elastomeric, acrylic, or silicone, sealing flashing and penetrations, installing flat-roof membranes, and adding moisture barriers below the roof deck. The goal is a continuous water-tight surface that stops leaks before they reach your insulation, drywall, and framing." },
  { question: "How long does roof waterproofing last?", answer: "It depends on the system. Acrylic and elastomeric roof coatings typically last 10 to 15 years before recoating, silicone coatings often last 15 to 20 years, and flashing or penetration sealing lasts 5 to 10 years. In Jacksonville's heat, humidity, and roughly 50 inches of rain a year, a quality silicone or elastomeric coating on a clean, properly prepared roof gives the longest service life." },
  { question: "Is roof waterproofing the same as roof replacement?", answer: "No. Waterproofing seals and extends a roof that is still structurally sound, usually at a fraction of replacement cost. A roof coating costs roughly 1.50 to 4.00 dollars per square foot, while a full replacement costs much more. If your roof has rotted decking, sagging, or widespread failure, replacement is the right call. We inspect first and tell you honestly which option fits your roof." },
  { question: "Does roof waterproofing stop active leaks?", answer: "Yes, when the leak source is identified and repaired first. We trace the leak to its source, repair damaged flashing, decking, or membrane, then apply the waterproofing system over a sound surface. Coating over an active, undiagnosed leak only traps moisture, so we always diagnose and repair before sealing." },
  { question: "How much does roof waterproofing cost in Jacksonville?", answer: "Most roof coatings run roughly 1.50 to 4.00 dollars per square foot installed, depending on the coating type and roof condition. Silicone and multi-coat systems sit at the higher end. Sealing flashing and penetrations on a residential roof is often a few hundred dollars. We provide a free inspection and a written estimate with exact pricing for your roof before any work begins." },
  { question: "What are the best waterproofing options for a flat roof?", answer: "Flat and low-slope roofs are common on commercial buildings downtown and on Southside, and they hold standing water longer than pitched roofs. The most effective options are silicone or elastomeric coatings over a cleaned surface, single-ply membranes such as TPO or EPDM, and reinforced seams at every penetration. Silicone handles ponding water well, which matters in Jacksonville's heavy rain." },
  { question: "Can you waterproof around skylights and chimneys?", answer: "Yes. Skylights, chimneys, vents, and valleys are where most roof leaks start because flashing fails there first. We reseal or replace the flashing, then apply a flexible sealant or coating that bonds to the surrounding roof so water sheds away from these vulnerable transitions instead of seeping under them." },
  { question: "Do you offer financing for roof waterproofing?", answer: "Yes. We offer financing so you can waterproof your roof now and pay over time with low monthly payments. This lets you stop a small leak before it becomes costly structural damage. You can also apply for roof financing online and we will walk you through the options during your free estimate." }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/roof-waterproofing#service",
  "@type": "Service",
  "name": "Roof Waterproofing in Jacksonville FL",
  "serviceType": "Roof Waterproofing",
  "description": "Roof waterproofing in Jacksonville FL including elastomeric and silicone roof coatings, flashing and penetration sealing, flat-roof membranes, and moisture barriers across Duval, St. Johns, Clay, and Nassau counties.",
  "url": "https://www.gimosroofing.com/services/roof-waterproofing",
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
    "name": "Roof Waterproofing Options",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Elastomeric and Acrylic Roof Coatings", "description": "Reflective liquid-applied coatings that seal the roof surface and lower attic heat." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Silicone Roof Coatings", "description": "Silicone coatings that resist ponding water on flat and low-slope roofs." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flashing and Penetration Sealing", "description": "Sealing of flashing, valleys, vents, skylights, and chimneys where leaks begin." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Flat Roof Membrane Waterproofing", "description": "TPO and EPDM membrane systems and reinforced seams for flat and low-slope roofs." } }
    ]
  }

}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/roof-waterproofing#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Roof Waterproofing", "item": "https://www.gimosroofing.com/services/roof-waterproofing" }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/roof-waterproofing#faq",
  "@type": "FAQPage",
  "about": { "@id": "https://www.gimosroofing.com/services/roof-waterproofing#service" },
  "mainEntityOfPage": "https://www.gimosroofing.com/services/roof-waterproofing",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function RoofWaterproofingPage() {
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
                <span className="text-primary">Roof Waterproofing</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Roof Waterproofing - Coatings, Sealant &amp; Membranes</h1>
              <p className="text-lg text-gray-200 mb-6">
                Searching for roof waterproofing services near me? Gimo&apos;s Roofing seals leak-prone, flat, and low-slope roofs across Duval, St. Johns, Clay, and Nassau counties. With roughly 50 inches of rain a year and a long hurricane season, Jacksonville roofs take a beating, and the right waterproofing system stops water before it reaches your insulation, drywall, and framing.
              </p>
              <ul className="text-gray-200 mb-6 space-y-2">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Licensed, insured, and locally owned</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Elastomeric, acrylic, and silicone roof coatings</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Flat-roof membranes and flashing sealing</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Free inspections and honest assessments</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-leak-emergency-repair.webp" alt="Roof waterproofing and leak sealing in Jacksonville FL" title="Roof waterproofing in Jacksonville FL" fill sizes="100vw" className="object-cover" priority />
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
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="font-bold">Recurring leaks or ceiling stains? <Link href="/services/roof-repair" className="underline hover:no-underline">Roof repair and waterproofing</Link> stop water at the source.</span>
            </div>
            <span className="hidden md:block">/</span>
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
              <span className="text-gray-300">/</span>
              <div className="flex text-primary">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <span className="text-sm font-semibold text-secondary">5-Star Rated by Jacksonville Homeowners</span>
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

      {/* What Is Roof Waterproofing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">What roof waterproofing is</h2>
            <p className="text-gray-600 mb-4">Roof waterproofing is the process of sealing a roof so water cannot pass through it. Instead of replacing the whole roof, we add a continuous water-tight layer over a surface that is still structurally sound. That layer can be a liquid-applied coating, a single-ply membrane, fresh flashing and sealant at penetrations, or a moisture barrier below the roof deck. The result is one connected surface that sheds water rather than letting it find a path inside.</p>
            <p className="text-gray-600 mb-4">As a locally owned <Link href="/" className="text-primary hover:underline">Jacksonville roofing company</Link>, we treat waterproofing as a system, not a single product. A coating only performs if the roof beneath it is clean, dry, and repaired first. We inspect the roof, trace any active leaks to their source, repair the damage, then apply the waterproofing system across the whole surface so water has nowhere to enter.</p>
            <p className="text-gray-600">Waterproofing matters here because Jacksonville averages about 50 inches of rain a year, sits in a humid coastal climate, and faces wind-driven rain from June through November. Water that gets past a tired roof does not stay in one spot. It tracks along framing, soaks insulation, and shows up as a stain on a ceiling far from where it actually entered.</p>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof waterproofing methods we use</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">There is no single best waterproofing product. We match the method to your roof type, slope, and the source of the problem. Most Jacksonville projects combine two or three of the systems below.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Elastomeric and acrylic roof coatings</h3>
              <p className="text-gray-600">Elastomeric and acrylic coatings are liquid systems rolled or sprayed over the roof to form a flexible, seamless skin. They stretch and shrink with daily heat cycles without cracking, and their reflective white finish bounces sunlight to lower attic temperatures. These coatings are a strong fit for low-slope and metal roofs that still have years of structure left.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Silicone roof coatings</h3>
              <p className="text-gray-600">Silicone coatings resist ponding water better than almost any other liquid system, which matters on flat roofs that hold puddles after Jacksonville downpours. Silicone does not break down under constant moisture or intense sun, so it holds up in our climate. It is a common choice for commercial flat roofs that cannot afford recurring leaks.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Flashing and penetration sealant</h3>
              <p className="text-gray-600">Most leaks do not start in the open field of the roof. They start at flashing and penetrations, around vents, skylights, chimneys, and valleys. We remove failed caulk and corroded metal, install or reseal flashing with correct overlap, and apply a flexible sealant that bonds to the surrounding roof so these transitions stay water-tight.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Flat-roof membranes</h3>
              <p className="text-gray-600">For flat and low-slope roofs we install single-ply membranes such as TPO and EPDM, with seams heat-welded or bonded and reinforced at every penetration. Membranes create a tough, fully sealed surface built for the standing water and foot traffic that flat commercial roofs see downtown and on Southside.</p>
            </div>
            <div className="card p-6 md:col-span-2">
              <h3 className="text-xl font-bold text-secondary mb-3">Below-roof and deck moisture barriers</h3>
              <p className="text-gray-600">During a re-roof or major repair we add a second line of defense beneath the shingles or membrane. Self-adhered underlayment and deck moisture barriers seal the roof deck so that even if the surface is breached by wind-driven rain, water still cannot reach the wood and the living space below. This layer is especially valuable in Jacksonville&apos;s wind-driven rain and is required protection in many coastal builds.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Where It Helps */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Where roof waterproofing helps most</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Waterproofing delivers the biggest return in the spots where Jacksonville roofs leak first. If you have seen any of the signs below, these are the areas we target.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Flat and low-slope roofs</h3>
              <p className="text-gray-600">Flat and low-slope roofs drain slowly, so water sits and works its way through any weak point. These roofs are common on commercial buildings downtown and on Southside, as well as on home additions and carports. A coating or membrane turns a ponding-prone surface into a sealed one.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Flashing and valleys</h3>
              <p className="text-gray-600">Valleys channel a large share of the roof&apos;s runoff, and flashing seals the transitions where roof planes meet walls. Both fail with age and humidity. Sealing and reinforcing them stops the most common entry points before they let water in.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Around vents, skylights, and chimneys</h3>
              <p className="text-gray-600">Every penetration through the roof is a potential leak. Vents, skylights, and chimneys depend on flashing and sealant that degrade over time. We reseal or reflash these features so water sheds around them instead of seeping under them.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Recurring leaks and ceiling stains</h3>
              <p className="text-gray-600">A leak that keeps coming back, or a yellow-brown stain that spreads on a ceiling, signals a chronic moisture path. After we locate and repair the source, waterproofing seals the surrounding area so the same spot does not fail again the next time it rains hard.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Benefits of waterproofing your roof</h2>
              <p className="text-gray-600 mb-4">Waterproofing is one of the highest-value steps you can take on a sound roof. It protects the structure, lowers cooling costs, and buys years of additional service life.</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-secondary">Extends roof life</h3>
                  <p className="text-gray-600 text-sm">A quality coating adds 10 to 15 years of service to a roof that is structurally sound, deferring a full replacement and the larger cost that comes with it.</p>
                </div>
                <div>
                  <h3 className="font-bold text-secondary">Reflectivity lowers attic heat</h3>
                  <p className="text-gray-600 text-sm">Reflective white coatings bounce sunlight instead of absorbing it. In Jacksonville summers that means a cooler attic and lower air-conditioning bills.</p>
                </div>
                <div>
                  <h3 className="font-bold text-secondary">Stops leaks before structural damage</h3>
                  <p className="text-gray-600 text-sm">Sealing the roof keeps water out of decking, insulation, and framing, where moisture causes rot and mold within 24 to 48 hours of getting in.</p>
                </div>
                <div>
                  <h3 className="font-bold text-secondary">Protects your investment</h3>
                  <p className="text-gray-600 text-sm">A sealed roof keeps interior finishes, drywall, and contents dry, avoiding the cascading repair costs that follow a single ignored leak.</p>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Roof material lifespans in Florida</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center justify-between"><span>Asphalt shingles</span><span className="font-semibold text-secondary">20 to 30 years</span></li>
                <li className="flex items-center justify-between"><span>Metal roofing</span><span className="font-semibold text-secondary">40 to 70 years</span></li>
                <li className="flex items-center justify-between"><span>Tile roofing</span><span className="font-semibold text-secondary">50+ years</span></li>
                <li className="flex items-center justify-between"><span>Slate roofing</span><span className="font-semibold text-secondary">75 to 150 years</span></li>
              </ul>
              <p className="text-gray-600 text-sm mt-4">Waterproofing coatings add roughly 10 to 15 years of sealed service on top of a sound roof, and silicone systems often reach 15 to 20 years before recoating is needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Waterproofing vs Repair vs Replacement */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">When waterproofing, repair, or replacement is right</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Waterproofing is not a fix for every roof. Here is how we decide which path protects your home for the lowest long-term cost.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-bold text-green-600 mb-3">Waterproofing fits when</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>&#8226; The roof is structurally sound with no rot or sagging</li>
                <li>&#8226; The surface is aging or chalking but not failing</li>
                <li>&#8226; You have a flat or low-slope roof that ponds water</li>
                <li>&#8226; Leaks are isolated to flashing and penetrations</li>
                <li>&#8226; You want to extend the roof and defer replacement</li>
              </ul>
            </div>
            <div className="card p-6 border-2 border-primary">
              <h3 className="text-lg font-bold text-secondary mb-3">Repair fits when</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>&#8226; Damage is localized to one area or slope</li>
                <li>&#8226; A few shingles, a valley, or one boot has failed</li>
                <li>&#8226; The roof is under 15 years old overall</li>
                <li>&#8226; Storm damage is confined and insurable</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">See our <Link href="/services/roof-repair" className="text-primary hover:underline">roof repair services</Link> for leak, shingle, and flashing repair.</p>
            </div>
            <div className="card p-6">
              <h3 className="text-lg font-bold text-red-600 mb-3">Replacement fits when</h3>
              <ul className="text-gray-600 text-sm space-y-2">
                <li>&#8226; The roof is 20+ years old and past its prime</li>
                <li>&#8226; Decking is rotted or the roof is sagging</li>
                <li>&#8226; Damage and wear appear across the whole roof</li>
                <li>&#8226; Repair costs approach a third of replacement</li>
              </ul>
              <p className="text-gray-600 text-sm mt-3">Coating a failing roof only traps moisture. We will tell you honestly when replacement is the better value.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof waterproofing costs in Jacksonville</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Pricing depends on roof size, type, condition, and the system we recommend. We provide a free inspection and a written estimate before any work begins.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Roof coatings</h3>
              <p className="text-3xl font-bold text-primary mb-2">$1.50 - $4.00</p>
              <p className="text-gray-600 text-sm mb-3">per square foot installed</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Acrylic and elastomeric systems</li>
                <li>&#8226; Reflective white finish</li>
                <li>&#8226; Single or multi-coat options</li>
              </ul>
            </div>
            <div className="card p-6 text-center border-2 border-primary">
              <h3 className="font-bold text-secondary mb-2">Silicone systems</h3>
              <p className="text-3xl font-bold text-primary mb-2">Upper range</p>
              <p className="text-gray-600 text-sm mb-3">at the high end of coating pricing</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Best for ponding flat roofs</li>
                <li>&#8226; 15 to 20 year service life</li>
                <li>&#8226; Strong UV and moisture resistance</li>
              </ul>
            </div>
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Flashing and sealant</h3>
              <p className="text-3xl font-bold text-primary mb-2">From a few hundred</p>
              <p className="text-gray-600 text-sm mb-3">per penetration area</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Vent, skylight, and chimney sealing</li>
                <li>&#8226; Valley reinforcement</li>
                <li>&#8226; Targeted leak-point work</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-center text-sm">Ranges are typical for Jacksonville projects. Actual cost depends on roof access, condition, and the system chosen. Financing is available so you can seal your roof now and pay over time. <Link href="/roof-financing-florida" className="text-primary hover:underline">See our roof financing options</Link>.</p>
        </div>
      </section>

      {/* Commercial / Local */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Built for Jacksonville&apos;s climate and flat roofs</h2>
              <p className="text-gray-600 mb-4">Jacksonville sees roughly 50 inches of rain a year, high year-round humidity, and wind-driven rain through a hurricane season that runs June through November. Those conditions punish flat and low-slope roofs the hardest, which is why so many of the flat commercial roofs downtown and on Southside need a reliable waterproofing system rather than another patch.</p>
              <p className="text-gray-600 mb-4">We waterproof homes and businesses across Duval, St. Johns, Clay, and Nassau counties, from <Link href="/roofing-san-marco-fl" className="text-primary hover:underline">San Marco</Link> and <Link href="/roofing-riverside-fl" className="text-primary hover:underline">Riverside</Link> to <Link href="/roofing-southside-jax-fl" className="text-primary hover:underline">Southside</Link> and <Link href="/roofing-mandarin-fl" className="text-primary hover:underline">Mandarin</Link>. Wherever you are in the metro, our <Link href="/roofing-jacksonville-fl" className="text-primary hover:underline">Jacksonville roofing</Link> crews bring the same system-based approach.</p>
              <p className="text-gray-600">For property managers and business owners, sealing a flat roof avoids the disruption and cost of a full tear-off. Pair waterproofing with our <Link href="/services/commercial-roofing" className="text-primary hover:underline">commercial roofing services</Link> to keep older buildings dry and in service for years longer.</p>
            </div>
            <div className="rounded-2xl aspect-square overflow-hidden shadow-xl relative">
              <Image src="/images/residential-roof-inspection-aerial.webp" alt="Roof inspection before waterproofing in Jacksonville FL" title="Roof inspection before waterproofing in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof waterproofing service areas in Northeast Florida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide roof waterproofing across Duval, St. Johns, Clay, and Nassau counties.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`Roof Waterproofing in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof waterproofing FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Related roofing services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Waterproofing works alongside our repair, commercial, and financing services to keep your roof sound and affordable.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/roof-repair" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof repair</h3>
              <p className="text-gray-600 text-sm">Leak, shingle, and flashing repair that fixes the source before we seal the surface.</p>
            </Link>
            <Link href="/services/commercial-roofing" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Commercial roofing</h3>
              <p className="text-gray-600 text-sm">Flat-roof systems, membranes, and coatings for Jacksonville businesses and property managers.</p>
            </Link>
            <Link href="/roof-financing-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof financing</h3>
              <p className="text-gray-600 text-sm">Low monthly payments so you can waterproof now and protect your home before a small leak grows.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Ready to waterproof your roof?</h2>
          <p className="text-secondary/80 mb-6">Get a free inspection and a detailed estimate. Licensed FL contractor CCC1332453, locally owned, and trusted across Jacksonville.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Free Estimate</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
