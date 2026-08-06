import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Gutter Repair & Installation Jacksonville FL - Gimo's Roofing" },
  description: "Seamless gutter installation, repair, and replacement in Jacksonville FL. Aluminum K-style gutters, gutter guards, free estimates, and financing. Call (904) 606-5313.",
  openGraph: {
    title: "Gutter Installation, Repair & Replacement in Jacksonville FL - Gimo's Roofing",
    description: "Seamless gutter installation, repair, and replacement in Jacksonville FL. Aluminum gutters, gutter guards, and free estimates. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/services/roof-gutter",
    images: ["https://www.gimosroofing.com/images/completed-roof-project-jacksonville.webp"],
  },
  alternates: { canonical: "https://www.gimosroofing.com/services/roof-gutter" },
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
  { question: "How much does gutter installation cost in Jacksonville?", answer: "Seamless aluminum gutters run roughly $6 to $12 per linear foot installed, so a typical single-story Jacksonville home with 150 to 200 feet of gutter usually lands between about $1,200 and $3,500. Pricing depends on roof height, the number of stories, downspout count, and whether old gutters need removal. We measure your home and give a firm written estimate before any work starts." },
  { question: "Are seamless gutters better than sectional gutters?", answer: "Seamless gutters are cut from one continuous coil on-site to match the exact length of each roof run, so they have no joints along their length where leaks usually start. Sectional gutters snap together in pre-cut pieces and have seams every few feet that can separate and drip over time. For Jacksonville's 50-plus inches of annual rain, seamless aluminum is the better long-term choice for most homes." },
  { question: "How often should I clean my gutters in Jacksonville?", answer: "Most Jacksonville homes need gutter cleaning at least twice a year, in spring and fall. Homes in shaded, tree-heavy neighborhoods like Riverside, Avondale, San Marco, and Ortega with large oaks and pines often need cleaning three or four times a year. Clogged gutters overflow during summer thunderstorms and push water against the fascia, soffit, and foundation, so regular cleaning protects the whole system." },
  { question: "Are gutter guards worth it?", answer: "Gutter guards reduce how often you need to clean your gutters and help keep oak leaves, pine needles, and debris from clogging downspouts. They add roughly $4 to $10 per linear foot. In Jacksonville's heavily wooded neighborhoods the reduced cleaning and lower risk of overflow usually justify the cost, though no guard is fully maintenance-free. We can recommend a guard style that fits your roof and tree cover." },
  { question: "What are the signs I need new gutters instead of repairs?", answer: "Replace your gutters when you see multiple sagging or pulling sections, cracks or splits along several runs, rust or peeling paint on steel gutters, repeated leaks at seams, or water marks and rot on the fascia behind them. If more than a third of the system has problems or the gutters are over 20 years old, full replacement usually costs less over time than repeated repairs. We give an honest repair-or-replace assessment." },
  { question: "Do you offer financing for gutter work?", answer: "Yes. We offer financing with fixed monthly payments so you can install or replace gutters now and pay over time. Financing is helpful when gutters are part of a larger roofing project or when failing gutters are already causing fascia rot or foundation issues that should not wait. Apply online or ask us during your free estimate and we will walk you through the options." },
  { question: "What is the difference between K-style and half-round gutters?", answer: "K-style gutters have a flat back and a decorative front profile that looks like crown molding, and they hold more water than a half-round of the same width, which suits Jacksonville's heavy rain. Half-round gutters are rounded troughs often seen on historic homes in Riverside and Springfield. K-style is the more common and lower-cost choice for most homes, while half-round is usually selected for older architecture or copper installations." },
  { question: "What size gutters do I need, 5 inch or 6 inch?", answer: "Five-inch K-style gutters handle most single-story Jacksonville homes with average roof areas. Six-inch gutters carry roughly 40 percent more water and are a better fit for homes with large or steep roofs, big roof valleys that funnel water to one spot, or heavy tree debris. Because Jacksonville sees over 50 inches of rain a year, we often recommend 6-inch gutters on larger two-story homes to prevent overflow." },
  { question: "How do you decide where to place downspouts?", answer: "We place a downspout at least every 30 to 40 feet of gutter and at major roof valleys where water concentrates during heavy rain. Downspouts are routed to direct water several feet away from the foundation, often with extensions or splash blocks. Correct downspout placement and sizing matter as much as the gutter itself, since undersized or poorly located downspouts are a common cause of overflow in Jacksonville storms." },
  { question: "Can you repair gutters instead of replacing them?", answer: "Often yes. We reseal leaking seams and end caps, refasten sagging sections, replace damaged hangers, clear clogs, reattach separated joints, and repair short damaged runs. Repairs typically cost $150 to $500 and make sense when the gutters are otherwise sound and under about 15 years old. If the fascia behind the gutter is rotted or the system has widespread damage, we will explain why replacement is the better value." },
  { question: "How much does gutter repair cost in Jacksonville?", answer: "Most gutter repairs in Jacksonville run $150 to $500. Resealing a leaking seam or end cap and refastening a sagging section sit at the low end, while replacing hangers, repairing fascia, or rehanging a longer run costs more. We give a firm price after a quick inspection, and if repair costs approach the price of replacement we will tell you so you can decide." },
  { question: "How do you repair a leaking gutter seam?", answer: "We clean and dry the joint, remove old failed sealant, and reseal it with a high-quality gutter sealant or splice, then check that the section is pitched correctly so water flows to the downspout. Recurring seam leaks are one reason many Jacksonville homeowners switch to seamless aluminum gutters, which have no mid-run seams to fail." },
  { question: "How much does gutter guard installation cost?", answer: "Gutter guards in Jacksonville typically cost $4 to $10 per linear foot installed, depending on the guard type (mesh, micro-mesh, or reverse-curve). On a typical home that is roughly $800 to $2,500. Guards cut down on cleaning and clogs, which matters under the heavy oak and pine canopy in neighborhoods like Mandarin, Riverside, and Ortega." }
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/roof-gutter#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Gutter Installation, Repair and Replacement", "item": "https://www.gimosroofing.com/services/roof-gutter" }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/roof-gutter#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/services/roof-gutter",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function RoofGutterPage() {
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
                <span className="text-primary">Gutters</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Gutter Installation, Repair &amp; Replacement - Roof Gutter Jacksonville, FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                Gimo&apos;s Roofing installs, repairs, and replaces gutters across Jacksonville and Northeast Florida. Jacksonville gets more than 50 inches of rain a year, with daily summer thunderstorms and a hurricane season that runs June through November, so gutters that move water away from your roof, fascia, and foundation are not optional. We fabricate seamless aluminum gutters on-site to fit your home and serve Duval, St. Johns, Clay, and Nassau counties.
              </p>
              <ul className="text-gray-200 mb-6 space-y-2">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Licensed FL CCC1332453 and insured</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Seamless aluminum gutters cut on-site</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Free estimates and honest assessments</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> CertainTeed Certified roofing contractor</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/completed-roof-project-jacksonville.webp" alt="Completed roof and gutter project on a Jacksonville FL home" title="Completed roof and gutter project in Jacksonville FL" fill sizes="100vw" className="object-cover" priority />
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
              <span className="font-bold">Free gutter estimates and financing available. Ivan, Owner. FL License CCC1332453.</span>
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

      {/* Why gutters matter in Jacksonville */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">How Gutters Protect Your Roof and Foundation</h2>
              <p className="text-gray-600 mb-4">Gutters do one job, and they do it under heavy load in Jacksonville. They catch the water that runs off your roof and route it through downspouts away from your home. Jacksonville averages more than 50 inches of rain per year, much of it falling in short, intense summer thunderstorms that can drop an inch or more in under an hour. A roof with no gutters, or with clogged or undersized gutters, dumps that water in concentrated sheets right at the base of your walls.</p>
              <p className="text-gray-600 mb-4">When water is not controlled, it works its way into the fascia board behind the gutter, soaks the soffit, and eventually rots the wood the roof edge depends on. At ground level, repeated overflow erodes soil, saturates the area around the slab, and can lead to foundation settling and standing water near the home. Gutters that overflow during storms can also push water back under the first course of shingles at the eave, which is a common hidden source of roof leaks we trace during <Link href="/services/roof-repair" className="text-primary hover:underline">roof repair in Jacksonville, FL</Link>.</p>
              <p className="text-gray-600">For homes with large oak and pine canopies, common in older Jacksonville neighborhoods, debris is the constant enemy. Leaves and needles build up, hold moisture against the metal and fascia, and block the flow. A correctly sized gutter system with the right downspout count and, where it makes sense, gutter guards keeps water moving and protects the most expensive parts of your home.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">What Failing Gutters Damage</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Fascia and soffit:</strong> Overflow rots the wood at the roof edge.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Roof deck and shingles:</strong> Backed-up water seeps under the eave.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Foundation and slab:</strong> Pooling water leads to settling and cracks.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Siding and paint:</strong> Splash-back stains and damages exterior walls.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Landscaping:</strong> Concentrated runoff erodes beds and washes out mulch.</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gutter Installation */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Gutter Installation in Jacksonville</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We fabricate seamless aluminum gutters on-site, cut to the exact length of each roof run. Seamless gutters have no joints along their length, which removes the leak points that plague sectional gutters. For a rain-heavy climate like Jacksonville, that matters.</p>
          </div>

          <div className="space-y-8">
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Seamless Aluminum Gutters</h3>
                  <p className="text-gray-600 mb-4">Aluminum is the standard for Jacksonville homes. It does not rust, it stands up to the humidity and salt air near the coast and the St. Johns River, and it comes in baked-on color finishes that match most homes. We cut each run from a continuous coil at your property, so the only seams in the entire system are at the corners and the downspout outlets.</p>
                  <p className="text-gray-600 mb-4">Seamless aluminum gutters typically cost roughly $6 to $12 per linear foot installed. The range depends on the gauge of the aluminum, the gutter size, the height and number of stories, and how many downspouts and corners your roofline needs. We measure the full perimeter and give you a written per-foot price with no surprises.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $6 to $12 per linear foot installed. A standard single-story home with 150 to 200 feet of gutter usually runs $1,200 to $3,500.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Why Seamless</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; No joints to leak along runs</li>
                    <li>&#8226; Cut to exact length on-site</li>
                    <li>&#8226; Fewer fasteners and weak points</li>
                    <li>&#8226; Cleaner finished appearance</li>
                    <li>&#8226; Rust-free aluminum for coastal air</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">K-Style vs Half-Round Profiles</h3>
                  <p className="text-gray-600 mb-4">K-style gutters have a flat back and a front edge shaped like crown molding. They hold more water than a half-round gutter of the same width and are the most common choice on modern Jacksonville homes. Half-round gutters are rounded troughs, often chosen for historic homes in neighborhoods like Riverside, Avondale, and Springfield, or paired with copper for a specific look.</p>
                  <p className="text-gray-600 mb-4">For most homeowners we recommend K-style aluminum. It carries more water during the heavy summer downpours, costs less than half-round, and is easier to fit with gutter guards. Half-round remains the right call when the home&apos;s architecture or a copper installation calls for it.</p>
                  <p className="text-gray-600">Whichever profile fits your home, the goal is the same: move water off the roof and away from the structure fast enough to keep up with Jacksonville rainfall.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Profile at a Glance</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; K-style: holds more water, lower cost</li>
                    <li>&#8226; K-style: best fit for most homes</li>
                    <li>&#8226; Half-round: historic and copper looks</li>
                    <li>&#8226; Half-round: smoother debris flow</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Gutter Sizing and Downspouts</h3>
                  <p className="text-gray-600 mb-4">Size is not a detail to guess at. Five-inch K-style gutters handle most single-story Jacksonville homes with average roof areas. Six-inch gutters carry roughly 40 percent more water and are the better choice for larger or steeper roofs, homes with big valleys that funnel water to one point, and properties under heavy tree cover. Because Jacksonville sees more than 50 inches of rain a year, we often recommend 6-inch gutters on larger two-story homes.</p>
                  <p className="text-gray-600 mb-4">Downspouts matter as much as the gutter. We place a downspout roughly every 30 to 40 feet of run and add them at major valleys where water concentrates. Each downspout is sized and routed to carry water several feet from the foundation, using extensions or splash blocks. Undersized or poorly placed downspouts are one of the most common reasons gutters overflow in a Jacksonville storm even when the gutters themselves are clean.</p>
                  <p className="text-gray-600">We walk your roofline, count the valleys, and size the system to your actual roof area, not a one-size estimate.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Sizing Guidance</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; 5-inch: most single-story homes</li>
                    <li>&#8226; 6-inch: large, steep, or two-story roofs</li>
                    <li>&#8226; Downspout every 30 to 40 feet</li>
                    <li>&#8226; Extra downspouts at roof valleys</li>
                    <li>&#8226; Water routed away from the slab</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gutter Repair */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Gutter Repair in Jacksonville</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">If your gutters are otherwise sound, repairs are often the right call. We fix the common failures we see on Jacksonville homes and tell you honestly when a repair will hold and when it is throwing money at a system that needs replacing.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary mb-3">Sagging and Pulling Sections</h3>
              <p className="text-gray-600 mb-3">Gutters sag when the hangers fail, the fascia behind them softens, or the system has carried more weight than it was hung for after years of debris and standing water. A sagging gutter holds water in the low spot instead of draining it, which adds weight and accelerates the problem.</p>
              <p className="text-gray-600">We refasten or replace hangers, reset the proper slope toward the downspouts, and check the fascia for rot. If the fascia is gone, we address that first so new fasteners have solid wood to bite into.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary mb-3">Leaks and Separated Seams</h3>
              <p className="text-gray-600 mb-3">On sectional gutters, the joints between pieces are the first thing to leak. Corners and end caps also work loose over time. A dripping seam may look minor, but it sends water straight down the fascia and behind the gutter where you cannot see the damage building.</p>
              <p className="text-gray-600">We reseal seams and end caps, reconnect separated joints, and replace fasteners that have backed out. Where a section is too far gone to seal reliably, we recommend replacing that run rather than chasing the same leak twice.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary mb-3">Clogs and Overflow</h3>
              <p className="text-gray-600 mb-3">In Jacksonville&apos;s tree-heavy neighborhoods, oak leaves and pine needles pack downspout outlets and corners. Clogged gutters overflow in the first hard summer storm and push water against the fascia and foundation, undoing everything the gutter is supposed to do.</p>
              <p className="text-gray-600">We clear the gutters and downspouts, flush the system, and confirm it drains. If clogging is a recurring problem on your home, we will talk through gutter guards as a longer-term fix.</p>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary mb-3">Fascia Rot Behind the Gutter</h3>
              <p className="text-gray-600 mb-3">When gutters have leaked or overflowed for a long time, the fascia board behind them rots. Soft or stained fascia is a sign the damage has moved past the gutter into the structure of the roof edge.</p>
              <p className="text-gray-600">We assess the fascia and soffit, replace damaged wood, and then rehang the gutters on sound material. Addressing the fascia is part of a real repair, not an upsell, since new gutters on rotted wood will fail again.</p>
            </div>
          </div>

          <div className="mt-8 card p-6 bg-gray-50 text-center">
            <p className="text-gray-600"><strong>Typical repair cost:</strong> $150 to $500 for most gutter repairs, depending on the number of sections, roof height, and whether fascia work is needed. We give a firm price before starting.</p>
          </div>
        </div>
      </section>

      {/* Gutter Replacement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Gutter Replacement in Jacksonville</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-4"><strong>Gimo&apos;s Roofing repairs gutters when the damage is isolated to a section or two, and replaces the full system with seamless aluminum when sagging, cracking, or leaking spans multiple runs.</strong> A free inspection tells you which side of that line your gutters are on before any work starts. <a href={estimateUrl} id="cta-snippet-gutter-estimate" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">Get a free estimate</a> or call <a href="tel:+19046065313" id="cta-snippet-gutter-call" className="text-primary font-semibold hover:underline">(904) 606-5313</a>.</p>
            <p className="text-gray-600 max-w-3xl mx-auto">At some point repeated repairs cost more than a new system. We replace failing gutters with seamless aluminum sized for your roof, and we are honest about when you have crossed that line.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">When to Replace Instead of Repair</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#10003;</span><span><strong>Multiple sagging or pulling sections:</strong> When several runs are failing, replacing the system costs less than repeated hanger work.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#10003;</span><span><strong>Cracks and splits along several runs:</strong> Old aluminum and steel crack as they age and cannot be reliably sealed.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#10003;</span><span><strong>Rust or peeling on steel gutters:</strong> Steel rusts through in our humidity; aluminum replacement solves it for good.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#10003;</span><span><strong>Repeated leaks at the same seams:</strong> Sectional gutters that keep leaking are telling you to go seamless.</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#10003;</span><span><strong>Gutters over 20 years old:</strong> Past two decades, full replacement is usually the better value.</span></li>
              </ul>
            </div>
            <div className="card p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Materials and Cost</h3>
              <p className="text-gray-600 mb-4">Most replacements use seamless aluminum for its rust resistance, weight, and cost. Copper and steel are available for specific looks or historic homes, at a higher price. We match the new gutters to your home&apos;s color and resize them if the old system was undersized for your roof area, which is common on homes that overflow during storms.</p>
              <p className="text-gray-600 mb-4">A full gutter replacement on an average Jacksonville home typically runs $1,200 to $3,500. Two-story homes, larger rooflines, gutter guards, and fascia repair raise that figure. We remove and dispose of the old gutters as part of the job.</p>
              <p className="text-gray-600">If a roof replacement and new gutters make sense together, we can coordinate both. Learn more about <Link href="/services/roof-replacement" className="text-primary hover:underline">roof replacement in Jacksonville</Link>.</p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Gutter work can be financed alongside a larger project so failing gutters do not cause fascia or foundation damage while you wait.</p>
            <Link href="/roof-financing-florida" className="text-primary font-semibold hover:underline">See roofing and gutter financing options &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Gutter Guards */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Gutter Guards for Tree-Heavy Neighborhoods</h2>
              <p className="text-gray-600 mb-4">A lot of Jacksonville sits under mature oak and pine canopy. In shaded neighborhoods like Riverside, Avondale, San Marco, Ortega, and Mandarin, gutters fill with leaves and needles fast, and a clogged gutter overflows in the first heavy storm. Gutter guards reduce how much debris reaches the trough and cut down how often the system needs cleaning.</p>
              <p className="text-gray-600 mb-4">Guards add roughly $4 to $10 per linear foot depending on the style. In a heavily wooded yard the lower cleaning frequency and reduced overflow risk usually justify the cost. No guard is fully maintenance-free, especially under pine needles, so we recommend a style suited to your specific tree cover rather than a one-size product.</p>
              <p className="text-gray-600">We can add guards to a new gutter installation or fit them to existing gutters that are still in good shape. If your gutters are already failing, guards on a bad system are not worth it, and we will say so.</p>
            </div>
            <div className="bg-primary/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Where Guards Pay Off</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Homes under oak and pine canopy</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Two-story homes hard to clean safely</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Roofs that have clogged repeatedly</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Properties with steep, shaded slopes</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <h4 className="font-bold text-secondary mb-2">A Realistic Note</h4>
                <p className="text-gray-600 text-sm">Guards reduce cleaning, they do not eliminate it. Pine needles in particular can still bridge some guard styles. We match the guard to your trees and roof pitch for the best real-world result.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Gutter Costs in Jacksonville</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Clear ranges so you know what to expect. Every job gets a written estimate after we measure your roofline.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Gutter Repair</h3>
              <p className="text-3xl font-bold text-primary mb-2">$150 - $500</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Reseal leaking seams and end caps</li>
                <li>&#8226; Refasten sagging sections</li>
                <li>&#8226; Clear clogs and flush downspouts</li>
                <li>&#8226; Reattach separated joints</li>
              </ul>
            </div>
            <div className="card p-6 text-center border-2 border-primary">
              <h3 className="font-bold text-secondary mb-2">New Installation</h3>
              <p className="text-3xl font-bold text-primary mb-2">$6 - $12 / ft</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Seamless aluminum, cut on-site</li>
                <li>&#8226; 5-inch or 6-inch K-style</li>
                <li>&#8226; Downspouts sized and placed</li>
                <li>&#8226; Color matched to your home</li>
              </ul>
            </div>
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Full Replacement</h3>
              <p className="text-3xl font-bold text-primary mb-2">$1,200 - $3,500</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Remove and dispose old gutters</li>
                <li>&#8226; New seamless aluminum system</li>
                <li>&#8226; Fascia repair if needed</li>
                <li>&#8226; Optional gutter guards</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-center text-sm">Ranges are estimates for typical Jacksonville homes. Actual cost depends on home height, total footage, downspout count, gutter size, guards, and any fascia work. Gutter guards add roughly $4 to $10 per linear foot. We provide free estimates and detailed written quotes.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Gutter Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">From first call to finished system, here is what to expect when Gimo&apos;s Roofing handles your gutters.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
              <p className="font-bold text-secondary mb-2">Contact us</p>
              <p className="text-gray-600 text-sm">Call (904) 606-5313 or request an estimate online. Tell us whether you need installation, repair, or replacement.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
              <p className="font-bold text-secondary mb-2">Measure and assess</p>
              <p className="text-gray-600 text-sm">We measure your roofline, count valleys and downspout needs, check fascia condition, and recommend gutter size and profile.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
              <p className="font-bold text-secondary mb-2">Fabricate and install</p>
              <p className="text-gray-600 text-sm">We cut seamless aluminum gutters on-site to exact length, hang them at the correct slope, and set downspouts to drain away from the home.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">4</div>
              <p className="font-bold text-secondary mb-2">Test and clean up</p>
              <p className="text-gray-600 text-sm">We confirm the system drains correctly, clean up all debris, and explain your warranty and any maintenance recommendations.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Gutter Service Areas in Northeast Florida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We install, repair, and replace gutters across Duval, St. Johns, Clay, and Nassau counties. Explore our roofing pages in <Link href="/roofing-jacksonville-fl" className="text-primary hover:underline">Jacksonville</Link>, <Link href="/roofing-mandarin-fl" className="text-primary hover:underline">Mandarin</Link>, <Link href="/roofing-san-marco-fl" className="text-primary hover:underline">San Marco</Link>, <Link href="/roofing-riverside-fl" className="text-primary hover:underline">Riverside</Link>, <Link href="/roofing-jacksonville-beach-fl" className="text-primary hover:underline">Jacksonville Beach</Link>, and <Link href="/roofing-ponte-vedra-beach-fl" className="text-primary hover:underline">Ponte Vedra Beach</Link>.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`Gutter Services in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Gutter FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Related Roofing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Gutters are one part of protecting your home from Northeast Florida weather. Here is how the rest fits together.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/roof-repair" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Repair</h3>
              <p className="text-gray-600 text-sm">Leak repair, shingle repair, and flashing repair, including leaks at the eave caused by overflowing gutters.</p>
            </Link>
            <Link href="/services/roof-replacement" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Replacement</h3>
              <p className="text-gray-600 text-sm">Full roof replacement with new gutters coordinated into one project when the timing makes sense.</p>
            </Link>
            <Link href="/roof-financing-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roofing Financing</h3>
              <p className="text-gray-600 text-sm">Fixed monthly payment options so gutter and roof work can move forward without waiting for damage to spread.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Gutter Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about gutter systems, profiles, and guards for Florida homes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/gutter-systems-roofing-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Gutter Systems Guide</h3>
              <p className="text-gray-600 text-sm">A complete Florida homeowner&apos;s guide to how gutters protect your roof and foundation.</p>
            </Link>
            <Link href="/blog/sectional-vs-seamless-gutters-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Sectional vs Seamless Gutters</h3>
              <p className="text-gray-600 text-sm">Which type holds up better against Florida&apos;s heavy rain and humidity.</p>
            </Link>
            <Link href="/blog/k-style-vs-half-round-gutters-jacksonville" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">K-Style vs Half-Round Gutters</h3>
              <p className="text-gray-600 text-sm">Which profile is the better fit for your Jacksonville home.</p>
            </Link>
            <Link href="/blog/gutter-guards-jacksonville-canopy" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Are Gutter Guards Worth It?</h3>
              <p className="text-gray-600 text-sm">Types, cost, and whether guards make sense under Jacksonville&apos;s tree canopy.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Need Gutters Installed, Repaired, or Replaced?</h2>
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
