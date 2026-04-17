import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Nocatee FL - New Construction Roof Repair & Replacement",
  description: "Roofing in Nocatee FL. Twenty Mile, Crosswater & Del Webb specialists. Builder warranty inspections & roof maintenance. Call (904) 606-5313.",
  alternates: { canonical: "https://www.gimosroofing.com/roofing-nocatee-fl" },
}

const location = "Nocatee"
const county = "St. Johns County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Southside", href: "/roofing-southside-jax-fl" }
]

const faqs = [
  { question: "When does the builder roof warranty expire on my Nocatee home?", answer: "Most Nocatee builders — including the production builders that built out Twenty Mile, Greenleaf, Coastal Oaks, and the early Crosswater phases — offered a 1-year workmanship warranty and a 2-year systems warranty on the roof. The shingle manufacturer warranty (typically GAF or Owens Corning) runs 25-30 years separately, but it has strict maintenance and ventilation requirements that void the warranty if not met. If your Nocatee home was built between 2006 and 2018, your builder coverage has expired and you're now relying on the manufacturer warranty alone — which we can help you preserve with documented inspections." },
  { question: "Do Twenty Mile, Crosswater, and Del Webb have different HOA roof rules?", answer: "Yes, every Nocatee village has its own architectural review board with specific approved materials lists. Twenty Mile typically requires architectural shingles in earth-tone colors with no metal except on accents. Crosswater allows broader color palettes but requires submittal samples before any work begins. Del Webb Ponte Vedra (the 55+ community) has the strictest review process, often requiring matching the original builder shingle line. We carry samples for all three communities and handle the ARB submittal as part of every Nocatee project." },
  { question: "My Nocatee home is 12 years old — does it need a new roof yet?", answer: "Probably not yet, but it's the right age to start thinking about it. Most Nocatee homes were built with builder-grade architectural shingles rated for 25-30 years, but Florida's UV and heat typically deliver 18-22 years of real-world life. At 12 years, what you need is a thorough inspection focused on ridge cap integrity, sealant strip adhesion, and attic ventilation — the three places where Nocatee builder-grade roofs fail first. We offer free inspections throughout 32081 and 32259." },
  { question: "How much does roof replacement cost in Nocatee?", answer: "Most Nocatee single-family homes fall between $13,000 and $22,000 for an architectural shingle replacement. The 2,200-3,200 sq ft homes that dominate Twenty Mile, Liberty Cove, and Coastal Oaks usually land in the $15,000-$19,000 range. Larger homes in Greenleaf or Del Webb with steeper pitches and tile-to-shingle conversions run higher. HOA-approved upgraded shingles (CertainTeed Landmark Pro or GAF Timberline UHDZ) add about $1,500-$2,500 over baseline. Financing is available from $99/month." },
  { question: "Should I worry about hurricane damage in Nocatee even though we're inland?", answer: "Yes — Nocatee is only about 7 miles from the Atlantic, and the open terrain along Nocatee Parkway and County Road 210 offers very little wind break. Storms hitting Ponte Vedra Beach lose almost no energy by the time they reach Crosswater and Twenty Mile. Florida Building Code requires Nocatee roofs to meet the same 130+ mph wind rating as the beach communities. We recommend a pre-season inspection every May, especially for homes built in the early Twenty Mile phases (2008-2012) where the original builder fasteners were marginal." },
  { question: "What energy-efficient upgrades work best on Nocatee homes?", answer: "Nocatee's newer homes already have decent insulation, so the biggest gains come from cool roof shingles, ridge ventilation upgrades, and radiant barrier decking. CertainTeed Landmark Solaris and GAF Timberline CS are both reflective architectural shingles approved by most Nocatee HOAs, and they typically drop attic temperatures 15-25 degrees in the summer. We've installed solar-attic fans on dozens of Twenty Mile and Greenleaf homes that cut cooling bills 10-18% the first year." },
  { question: "What builder-grade roofing problems do you see most often in Nocatee?", answer: "The three most common issues we find on 10-15 year old Nocatee roofs are: (1) minimum-spec 3-tab shingles on the original Twenty Mile and Coastal Oaks homes that are now cracking and losing granules, (2) inadequate attic ventilation across most of the early phases — almost every home is at least one ridge vent short, and (3) poorly-sealed pipe boots and flashing around HVAC penetrations causing slow leaks that don't show up until interior staining appears. None of these are catastrophic, but they all shorten roof life if ignored." },
  { question: "Do you offer free roof inspections in 32081 and 32259?", answer: "Yes — free inspections throughout all of Nocatee, including Twenty Mile, Crosswater, Greenleaf, Coastal Oaks, Addison Park, Liberty Cove, and Del Webb Ponte Vedra. We typically arrive within 2-3 business days, walk the roof, photograph any issues, and email a detailed report the same day. There's no obligation and no high-pressure pitch — we'd rather build a long-term relationship than push an unnecessary replacement. Call (904) 606-5313 to schedule." }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Roofing Services in Nocatee, FL",
  "serviceType": "Roofing Contractor",
  "provider": { "@id": "https://www.gimosroofing.com/#organization" },
  "areaServed": {
    "@type": "City",
    "name": "Nocatee, FL",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Nocatee,_Florida"
    ]
  },
  "url": "https://www.gimosroofing.com/roofing-nocatee-fl",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services in Nocatee, FL",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Builder Warranty Roof Inspection in Nocatee FL",
          "description": "Professional roof inspections for Nocatee homes with expiring builder warranties."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Replacement in Nocatee FL",
          "description": "Full roof replacement for Nocatee communities including Twenty Mile, Crosswater, and Del Webb."
        }
      }
    ]
  }
,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "81",
    "bestRating": "5",
    "worstRating": "1"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/roofing-nocatee-fl",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.gimosroofing.com/service-areas" },
    { "@type": "ListItem", "position": 3, "name": "Nocatee", "item": "https://www.gimosroofing.com/roofing-nocatee-fl" }
  ]
}

export default function NocateePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location}, {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Nocatee FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Trusted roofing specialists for Nocatee&apos;s master-planned communities. Builder warranty inspections, roof maintenance, and energy-efficient upgrades for homes in ZIP codes 32081 and 32259.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ HOA Compliant</span>
          </div>
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/nocatee-roofer.webp" alt="Trusted roofer serving Nocatee FL homeowners" title="Trusted roofer serving Nocatee FL homeowners" fill className="object-cover" priority />
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
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            Nocatee is one of the fastest-growing master-planned communities in the United States, spanning portions of {county} and Duval County in Northeast Florida. Since development began in 2006, Nocatee has grown to include over 15,000 homes across dozens of distinct neighborhoods including Twenty Mile, Crosswater, Addison Park, Del Webb Nocatee, Tidewater, Greenleaf Village, Willowcove, Austin Park, and Timberland Ridge.
          </p>
          <p className="text-gray-600 mb-4">
            With the oldest Nocatee homes now approaching 20 years old and thousands more in the 5-15 year range, a growing wave of homeowners are facing their first major roof maintenance decisions. Builder warranties are expiring, builder-grade materials are showing their age, and Florida&apos;s heat, UV exposure, and storm activity are taking their toll. Many homeowners who moved into brand-new construction have never needed to think about their roof until now.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we specialize in helping Nocatee homeowners navigate this critical transition. Whether you need a <Link href="/services/roof-repair" className="text-primary hover:underline">roof repair</Link> to address early wear, a full <Link href="/services/roof-replacement" className="text-primary hover:underline">roof replacement</Link> with upgraded materials, or a professional inspection before your builder warranty expires, our team understands the unique needs of Nocatee&apos;s planned communities. We work with HOAs throughout the area and carry pre-approved materials for streamlined project approvals.
          </p>
        </div>
      </section>

      {/* Why Proactive Care */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Nocatee Homeowners Need Proactive Roof Care</h2>
          <p className="text-gray-600 mb-4">
            Living in a newer community can create a false sense of security about your roof. Here&apos;s why Nocatee homeowners should be proactive rather than reactive when it comes to roof maintenance:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Builder warranties are expiring:</strong> <span className="text-gray-600">Most Nocatee builders provided 1-2 year workmanship warranties and 10-year structural warranties. For homes built between 2006-2016, these have already lapsed. A professional inspection before expiration documents any deficiencies the builder should address. After expiration, issues become entirely the homeowner&apos;s responsibility.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">HOA standards require maintained roofs:</strong> <span className="text-gray-600">Nocatee&apos;s community associations enforce strict appearance and maintenance standards. A deteriorating roof can trigger HOA violation notices and fines. Staying ahead of wear keeps you compliant and protects property values across your neighborhood.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Florida weather tests newer materials early:</strong> <span className="text-gray-600">Even homes built to current Florida Building Code face intense UV, summer heat exceeding 95 degrees, and annual hurricane threats. Builder-grade shingles installed to minimum specifications wear faster than premium materials, especially on south- and west-facing roof slopes.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Energy efficiency upgrade opportunities:</strong> <span className="text-gray-600">Many Nocatee homes were built with standard ventilation and basic shingles. Upgrading to <Link href="/blog/best-roofing-materials-florida" className="text-primary hover:underline">cool roof technology</Link>, improved attic ventilation, or reflective materials can cut cooling costs by 10-25% while extending roof life.</span></div>
            </li>
          </ul>
          <p className="text-gray-600">
            Read more about <Link href="/blog/when-to-replace-your-roof-florida" className="text-primary hover:underline">when to replace your roof in Florida</Link> and how to recognize <Link href="/blog/hurricane-roof-damage-signs-florida" className="text-primary hover:underline">storm damage signs on your roof</Link>.
          </p>
        </div>
      </section>

      {/* Nocatee Project Showcase */}
      <section className="py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/nocatee-roofing-company.webp" alt="Nocatee roofing company completing residential project" title="Nocatee Roofing Company - Gimo's Roofing" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/roof-repair-nocatee.webp" alt="Roof repair project in Nocatee FL community" title="Roof Repair in Nocatee FL" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/nocatee-roofing-contractor.webp" alt="Nocatee roofing contractor installing new shingles" title="Nocatee Roofing Contractor - Gimo's Roofing" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Issues in Nocatee Communities</h2>
          <p className="text-gray-600 mb-6">
            After servicing homes throughout Nocatee&apos;s neighborhoods, we consistently encounter these roofing issues specific to newer construction communities:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Builder-Grade Material Aging</h3>
              <p className="text-gray-600 text-sm">Many Nocatee builders installed minimum-spec 3-tab or basic architectural shingles to keep construction costs down. These materials wear 5-8 years faster than premium options, showing granule loss and curling earlier than homeowners expect.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Ventilation Issues in Newer Homes</h3>
              <p className="text-gray-600 text-sm">Tight building envelopes in energy-efficient new construction can trap heat and moisture in the attic. Inadequate ridge vent or soffit vent installation leads to attic temperatures exceeding 150 degrees, baking shingles from underneath and voiding manufacturer warranties.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Storm Damage on Architectural Shingles</h3>
              <p className="text-gray-600 text-sm">Nocatee&apos;s open terrain and newer neighborhoods with young tree canopies offer less wind protection than established areas. Architectural shingles can sustain hidden damage from storms that isn&apos;t visible from the ground but leads to slow leaks over time.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Gutter & Drainage Problems</h3>
              <p className="text-gray-600 text-sm">Newer Nocatee homes often have minimal or no gutters installed by the builder. Without proper water management, roof runoff erodes landscaping, saturates foundations, and causes fascia board rot that compromises the roof edge over time.</p>
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
              <h4 className="font-bold text-secondary mb-2">Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Full tear-off and replacement with premium materials that outlast builder-grade shingles. HOA-approved colors and profiles for every Nocatee community.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Repair</h4>
              <p className="text-gray-600 text-sm">Fix leaks, damaged shingles, flashing failures, and ventilation issues. Targeted repairs to extend the life of your existing roof.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Emergency Storm Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and storm damage. Tarping, temporary repairs, and insurance claim assistance for Nocatee homeowners.</p>
            </Link>
            <Link href="/services/new-construction-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">New Construction Roofing</h4>
              <p className="text-gray-600 text-sm">Premium roofing installation for custom builds and new homes in Nocatee&apos;s expanding communities. Exceed builder-grade specifications from day one.</p>
            </Link>
            <Link href="/services/siding-installation" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Siding Installation</h4>
              <p className="text-gray-600 text-sm">Complete your home&apos;s exterior upgrade with professional siding installation. HOA-compliant options for Nocatee neighborhoods.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Builder Warranty Inspections</h4>
              <p className="text-gray-600 text-sm">Detailed roof inspections before your builder warranty expires. We document every issue with photos and reports to support warranty claims.</p>
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
            <h2 className="text-2xl font-bold text-secondary mb-3">5-Star Rated by Nocatee Families</h2>
            <p className="text-gray-600 mb-6">From Twenty Mile to Crosswater and Del Webb Ponte Vedra, Nocatee homeowners trust Gimo&apos;s for builder warranty inspections and full replacements alike.</p>
            <a href="https://www.google.com/search?q=Gimo%27s+Roofing+Jacksonville+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition">Read Our Reviews</a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving {location}, Town Center, and all surrounding {county} communities.</p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe src="https://maps.google.com/maps?q=Nocatee,+FL+32081&t=&z=12&ie=UTF8&iwloc=&output=embed" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Service Area - Nocatee FL"></iframe>
          </div>
        </div>
      </section>

      {/* ZIP Code Coverage */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing in 32081 and 32259 - Nocatee ZIP Codes</h2>
          <p className="text-gray-600 mb-4">
            ZIP codes 32081 and 32259 cover the master-planned Nocatee community in northern St. Johns County. 32081 is the heart of Nocatee including the Town Center, Crosswater, Twenty Mile, Greenleaf Village, Coastal Oaks, Tidewater, and Riverwood by Del Webb. 32259 covers the western edge bordering the Julington Creek Plantation area. Most homes in both ZIPs were built between 2007 and 2024, which means many are reaching their first roof-repair age and a growing number need their first replacement. Nearly every Nocatee community has its own architectural review board with specific approved shingle and tile colors.
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
          <p className="text-secondary/80 mb-6">Contact us today for expert roofing services in {location} and all of {county}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
