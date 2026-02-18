import { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing San Marco Jacksonville FL - Mediterranean & Historic Roofs",
  description: "Roofing in San Marco Jacksonville FL. Mediterranean tile, barrel tile & historic home specialists. Roof repair & replacement. Call (904) 606-5313.",
  keywords: ["roofing san marco jacksonville fl", "san marco roofers", "barrel tile roofing jacksonville", "mediterranean roof repair", "san marco roof replacement", "st nicholas roofing"],
  alternates: { canonical: "https://www.gimosroofing.com/roofing-san-marco-fl" },
}

const location = "San Marco"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Riverside", href: "/roofing-riverside-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" }
]

const faqs = [
  { question: `How much does a barrel tile roof replacement cost in ${location}?`, answer: `Barrel tile roof replacement in ${location} typically ranges from $15,000 to $45,000+ depending on roof size, tile type (clay vs. concrete), and complexity. Clay barrel tiles cost more than concrete but last 75-100 years. We provide free estimates and financing options from $149/month.` },
  { question: `Can you match the original barrel tiles on my ${location} Mediterranean home?`, answer: `Yes! We specialize in sourcing matching barrel tiles for San Marco's Mediterranean Revival homes. We work with specialty tile suppliers to match the profile, color, and finish of original 1920s-1940s tiles. If exact matches aren't available, we can source custom-made tiles that blend seamlessly.` },
  { question: `How long do clay barrel tile roofs last in ${location}?`, answer: `Clay barrel tile roofs in ${location} typically last 75-100 years when properly maintained. The tiles themselves are extremely durable, but the underlayment beneath them needs replacement every 20-30 years. We offer tile lift-and-relay services where we remove the tiles, replace the underlayment, and reinstall the original tiles.` },
  { question: `Do you repair flat roof sections on ${location} Mediterranean homes?`, answer: `Yes! Many San Marco Mediterranean homes have flat roof sections behind parapets or between roof planes. We repair and replace flat roof membranes using TPO, modified bitumen, or silicone coatings. These hidden flat areas are common leak sources and need specialized attention.` },
  { question: `Is it worth keeping barrel tile on my ${location} home or switching to shingles?`, answer: `We strongly recommend keeping barrel tile on San Marco homes. Tile preserves the Mediterranean architectural character that makes your home valuable, lasts 3-4 times longer than shingles, and maintains property values in the neighborhood. A tile lift-and-relay is often more cost-effective than a full tile replacement.` },
  { question: `How does St. Johns River humidity affect roofs in ${location}?`, answer: `San Marco's proximity to the St. Johns River creates elevated humidity levels that promote algae growth, accelerate underlayment degradation, and increase moisture intrusion risks. Proper ventilation, moisture barriers, and annual inspections are essential for maintaining roof longevity in the 32207 ZIP code.` },
  { question: `Do you provide emergency roof repair in ${location}?`, answer: `Yes! We offer 24/7 emergency storm response for ${location}, St. Nicholas, San Jose, and surrounding neighborhoods. Call ${phone} for immediate tarping, tile securing, and water damage mitigation after any storm event.` },
  { question: `How often should I inspect my tile roof in ${location}?`, answer: `We recommend annual inspections for tile roofs in ${location}, plus after any major storm. We check for cracked or slipped tiles, deteriorating underlayment, damaged flashing, and blocked drainage. Early detection of shifted tiles prevents water damage to the underlayment and deck beneath. We offer free roof inspections.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#localbusiness",
  "name": "Gimo's Roofing",
  "url": "https://www.gimosroofing.com/roofing-san-marco-fl",
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
    "@type": "Neighborhood",
    "name": "San Marco",
    "sameAs": [
      "https://en.wikipedia.org/wiki/San_Marco,_Jacksonville"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services in San Marco, Jacksonville",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Barrel Tile Roof Replacement in San Marco FL",
          "description": "Expert barrel tile and Mediterranean roof replacement for San Marco's historic 1920s-1940s homes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Tile Roof Repair in San Marco FL",
          "description": "Specialized barrel tile repair and underlayment replacement for San Marco's Mediterranean Revival homes."
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
    { "@type": "ListItem", "position": 3, "name": "San Marco", "item": "https://www.gimosroofing.com/roofing-san-marco-fl" }
  ]
}

export default function SanMarcoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing San Marco Jacksonville FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Mediterranean tile and barrel tile roofing specialists for {location}&apos;s historic homes. Expert craftsmanship preserving 1920s architectural character in ZIP code 32207.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Barrel Tile Experts</span>
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
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} Mediterranean Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            San Marco is one of Jacksonville&apos;s most architecturally distinctive neighborhoods, developed primarily in the 1920s through 1940s with a strong Mediterranean Revival influence. The neighborhood&apos;s signature barrel tile roofs, stucco facades, and arched entryways give it a character that&apos;s unmatched anywhere else in Northeast Florida. From the boutiques of San Marco Square to the riverfront estates along the St. Johns River, these homes represent both significant history and substantial investment.
          </p>
          <p className="text-gray-600 mb-4">
            Maintaining the barrel tile roofs that define {location}&apos;s Mediterranean character requires specialized expertise that general roofing contractors simply don&apos;t have. Tile roofing is fundamentally different from shingle work, requiring knowledge of underlayment systems, tile profiles, fastening methods, and the specific challenges of working with clay and concrete barrel tiles on homes that are 80-100 years old.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we&apos;re tile roofing specialists who understand what makes {location} homes unique. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a complete barrel tile replacement</Link>, <Link href="/services/roof-repair" className="text-primary hover:underline">targeted tile repairs</Link>, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency storm damage repair</Link>, our team delivers results that honor your home&apos;s architectural heritage while providing modern waterproofing protection.
          </p>
        </div>
      </section>

      {/* Why Specialized Roofing */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why San Marco Homes Require Specialized Roofing</h2>
          <p className="text-gray-600 mb-4">
            San Marco&apos;s Mediterranean Revival architecture creates roofing requirements that are fundamentally different from typical Jacksonville neighborhoods. Standard roofing approaches don&apos;t work here. Here&apos;s why your {location} home needs a tile roofing specialist:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Mediterranean Revival barrel tile:</strong> <span className="text-gray-600">San Marco&apos;s iconic S-shaped barrel tiles require precise installation with proper overlapping, mortar or mechanical fastening, and compatible underlayment systems. Incorrect installation leads to water channeling, tile slippage, and premature failure. We source matching clay and concrete barrel tiles from specialty manufacturers.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Historic preservation standards:</strong> <span className="text-gray-600">Many San Marco homes are in or adjacent to historic districts. Replacing a barrel tile roof with architectural shingles would destroy the home&apos;s character and potentially reduce property values by tens of thousands of dollars. We maintain architectural integrity while upgrading waterproofing systems beneath original or matching tiles.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">St. Johns River humidity:</strong> <span className="text-gray-600">San Marco&apos;s position along the St. Johns River creates elevated moisture levels that accelerate underlayment degradation beneath tile roofs. The gap between tiles and underlayment can trap condensation, promoting mold growth and wood rot on the roof deck if ventilation and moisture barriers aren&apos;t properly designed.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">High property values demand quality:</strong> <span className="text-gray-600">San Marco is one of Jacksonville&apos;s most desirable neighborhoods, with home values reflecting the area&apos;s walkability, charm, and proximity to downtown. A properly maintained tile roof is essential to preserving and maximizing your investment. Cutting corners on roofing directly impacts resale value.</span></div>
            </li>
          </ul>
          <p className="text-gray-600">
            Learn more about <Link href="/blog/clay-tile-roof-lifespan-florida" className="text-primary hover:underline">clay tile roof lifespan in Florida</Link> and the <Link href="/blog/concrete-tile-roof-pros-cons-florida" className="text-primary hover:underline">pros and cons of concrete tile roofing</Link>.
          </p>
        </div>
      </section>

      {/* Common Roofing Issues */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Issues in San Marco</h2>
          <p className="text-gray-600 mb-6">
            After years of working on {location}&apos;s Mediterranean homes, we see the same issues repeatedly. Recognizing these problems early prevents costly structural damage:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Barrel Tile Cracking & Slipping</h3>
              <p className="text-gray-600 text-sm">On homes built in the 1920s-1940s, original clay tiles become brittle with age. Foot traffic during maintenance, settling foundations, and storm impacts cause cracks and displacement. Even a single slipped tile exposes the underlayment to direct UV and rain, rapidly accelerating deterioration.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Underlayment Failure Under Tile</h3>
              <p className="text-gray-600 text-sm">The tiles on a barrel tile roof can last 75-100 years, but the underlayment beneath them typically fails after 20-30 years. When underlayment degrades, water penetrates to the roof deck even though the tiles above look perfect. A tile lift-and-relay replaces the underlayment while preserving existing tiles.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Flat Roof Section Leaks</h3>
              <p className="text-gray-600 text-sm">Many San Marco Mediterranean homes feature flat roof sections behind decorative parapets or between sloped tile planes. These hidden flat areas collect water and are common leak sources. They require specialized membrane systems like TPO or modified bitumen that differ from the tile work on visible slopes.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Storm Damage on Decorative Elements</h3>
              <p className="text-gray-600 text-sm">Hurricane and tropical storm winds lift barrel tiles, crack ridge caps, and damage decorative elements like turret roofs and arched dormers that are common on San Marco&apos;s Mediterranean homes. These ornamental features require careful repair to maintain the home&apos;s architectural character.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Links */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Roofing Services in {location}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/services/roof-replacement" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Barrel Tile Replacement</h4>
              <p className="text-gray-600 text-sm">Complete barrel tile roof replacement with matching clay or concrete tiles. New underlayment, flashing, and waterproofing for lasting protection.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Tile Roof Repair</h4>
              <p className="text-gray-600 text-sm">Individual tile replacement, ridge cap repair, and mortar resealing. We source matching tiles to preserve your home&apos;s Mediterranean character.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Emergency Storm Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and storm damage. Tarping, tile securing, and insurance claim assistance for {location} homeowners.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Tile Lift & Relay</h4>
              <p className="text-gray-600 text-sm">Remove existing tiles, replace deteriorated underlayment and flashing, then reinstall original tiles. Extends roof life 20-30 years at a fraction of full replacement cost.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Flat Roof Repair</h4>
              <p className="text-gray-600 text-sm">TPO, modified bitumen, and silicone coating systems for the hidden flat roof sections common on Mediterranean-style homes in {location}.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Comprehensive tile roof evaluations for home buyers and maintenance planning. We assess tile condition, underlayment integrity, and flashing health.</p>
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
              &ldquo;Gimo&apos;s replaced the tile roof on our San Marco Mediterranean home. They sourced matching barrel tiles and the result is stunning. Professional from estimate to final cleanup. Worth every penny.&rdquo;
            </blockquote>
            <p className="font-semibold text-secondary">- Robert Chen</p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving San Marco, San Jose, St. Nicholas, and all of Jacksonville&apos;s historic neighborhoods.</p>
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
          <p className="text-secondary/80 mb-6">Contact us today for expert Mediterranean and tile roofing services in {location}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
