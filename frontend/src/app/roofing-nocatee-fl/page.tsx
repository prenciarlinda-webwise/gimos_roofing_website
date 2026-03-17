import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Nocatee FL - New Construction Roof Repair & Replacement",
  description: "Roofing in Nocatee FL. Twenty Mile, Crosswater & Del Webb specialists. Builder warranty inspections & roof maintenance. Call (904) 606-5313.",
  keywords: ["roofing nocatee fl", "roofing company nocatee", "roof repair nocatee fl", "nocatee roof replacement", "twenty mile roofing", "del webb nocatee roofing"],
  alternates: { canonical: "https://www.gimosroofing.com/roofing-nocatee-fl" },
}

const location = "Nocatee"
const county = "St. Johns County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Southside", href: "/roofing-southside-jax-fl" }
]

const faqs = [
  { question: `When do builder warranties expire on Nocatee homes?`, answer: `Most Nocatee builders offer a 1-2 year workmanship warranty and a 10-year structural warranty. Roofing material warranties from manufacturers like GAF or Owens Corning typically cover 25-30 years but have specific maintenance requirements. If your home was built between 2006-2016, your builder warranty has likely expired. We recommend a professional inspection to document your roof's condition before any warranty claims deadline passes.` },
  { question: `What are the HOA roofing requirements in Nocatee communities?`, answer: `Most Nocatee communities including Twenty Mile, Crosswater, Addison Park, and Del Webb have strict architectural review requirements. HOAs typically dictate approved shingle colors, materials, and profiles. We work with Nocatee HOAs regularly and carry samples of pre-approved materials. We handle the architectural review paperwork so your project stays compliant from start to finish.` },
  { question: `When should Nocatee homes get their first roof maintenance?`, answer: `We recommend a professional roof inspection at the 5-year mark for newer Nocatee homes, then annually after that. Many homes built between 2006-2018 are now due for their first maintenance. Early inspections catch builder-grade material issues, improper ventilation, and minor storm damage before they become expensive repairs. Call ${phone} for a free inspection.` },
  { question: `How much does roof replacement cost in ${location}?`, answer: `Roof replacement in ${location} typically ranges from $8,500 to $28,000+ depending on home size, roof complexity, and materials chosen. Many Nocatee homes are 2,000-4,000 sq ft with moderate roof pitches, putting most projects in the $12,000-$22,000 range. Energy-efficient upgrades and impact-resistant shingles add value but increase cost slightly. Financing available from $99/month.` },
  { question: `How should newer Nocatee homes prepare for hurricanes?`, answer: `Even newer Nocatee homes built to Florida Building Code should have annual roof inspections before hurricane season (June 1). We check for loose ridge caps, compromised sealant strips, and proper nail patterns. Homes in ZIP codes 32081 and 32259 face the same storm exposure as coastal areas. Upgrading to impact-resistant shingles can save 15-30% on insurance premiums.` },
  { question: `What energy-efficient roofing upgrades are available for Nocatee homes?`, answer: `Popular energy-efficient options for Nocatee include cool roof shingles that reflect more solar heat (reducing attic temps by 20-30 degrees), improved attic ventilation systems like ridge vents and solar-powered attic fans, radiant barrier decking, and metal roofing with reflective coatings. These upgrades can reduce cooling costs by 10-25% in Florida's climate.` },
  { question: `What are common builder-grade roofing issues in Nocatee?`, answer: `Common issues we find in Nocatee homes include minimum-spec 3-tab shingles that wear faster than architectural shingles, inadequate attic ventilation causing heat buildup and premature aging, improper flashing around roof penetrations, and insufficient drip edge installation. These builder shortcuts save money during construction but lead to earlier roof maintenance needs.` },
  { question: `How often should I get a roof inspection in ${location}?`, answer: `We recommend annual inspections for all Nocatee homes, plus after any major storm with winds exceeding 60 mph. For homes over 10 years old, semi-annual inspections (spring and fall) are ideal. Florida's heat, UV exposure, and storm activity accelerate wear even on newer roofs. We offer free roof inspections throughout ${location} and surrounding communities.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#localbusiness",
  "name": "Gimo's Roofing",
  "url": "https://www.gimosroofing.com/roofing-nocatee-fl",
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
    "name": "Nocatee",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Nocatee,_Florida"
    ]
  },
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
    { "@type": "ListItem", "position": 3, "name": "Nocatee", "item": "https://www.gimosroofing.com/roofing-nocatee-fl" }
  ]
}

export default function NocateePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
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
            <div className="text-center"><span className="text-3xl font-bold">15+</span><span className="text-sm ml-2">Years</span></div>
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
          <p className="text-gray-600 text-center mb-6">Proudly serving {location}, Town Center, and all surrounding {county} communities.</p>
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
