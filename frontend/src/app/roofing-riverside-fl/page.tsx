import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Riverside Jacksonville FL - Historic Home Roof Repair",
  description: "Roofing in Riverside & Avondale Jacksonville FL. Historic bungalow & craftsman home specialists. Roof repair & replacement. Call (904) 606-5313.",
  keywords: ["roofing riverside jacksonville fl", "riverside avondale roofers", "historic home roofing jacksonville", "roof repair riverside fl", "avondale roof replacement", "five points roofing"],
  alternates: { canonical: "https://www.gimosroofing.com/roofing-riverside-fl" },
}

const location = "Riverside"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Orange Park", href: "/roofing-orange-park-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" },
  { name: "Fernandina Beach", href: "/roofing-fernandina-beach-fl" }
]

const faqs = [
  { question: `How much does roof replacement cost in ${location}?`, answer: `Roof replacement in ${location} ranges from $8,500 to $35,000+ depending on home size and materials. Historic craftsman bungalows and Tudor revivals often require specialized materials that cost more than standard shingles. We provide free estimates and financing options.` },
  { question: `Do you work on historic homes in ${location} and Avondale?`, answer: `Yes! We specialize in roofing for historic homes throughout Riverside, Avondale, and Five Points. We understand local historic preservation requirements and use period-appropriate materials that maintain your home's architectural character while meeting modern building codes.` },
  { question: `What roofing materials work best for Riverside's craftsman bungalows?`, answer: `For Riverside's craftsman-style homes, we recommend architectural shingles that replicate the look of wood shake, standing seam metal in traditional profiles, or slate-look synthetic options. The goal is matching the home's period character while providing modern durability and storm resistance.` },
  { question: `Do I need special permits for roofing a historic home in ${location}?`, answer: `Homes within Riverside's historic overlay districts may require approval from the Jacksonville Historic Preservation Commission. We handle the permitting process and ensure materials and colors comply with local preservation guidelines so your project moves forward smoothly.` },
  { question: `How do steep roof pitches on ${location} homes affect roofing costs?`, answer: `Many Riverside bungalows and prairie-style homes feature steep roof pitches (8:12 or higher) that require additional safety equipment, specialized techniques, and more labor time. This typically adds 15-25% to the project cost compared to standard-pitch roofs.` },
  { question: `Do you provide emergency roof repair in ${location}?`, answer: `Yes! We offer 24/7 emergency storm response for ${location}, Avondale, and Five Points. Call ${phone} for immediate assistance with tarping, leak repair, and storm damage assessment. We also help with insurance claims.` },
  { question: `How often should I inspect my roof on a historic ${location} home?`, answer: `We recommend annual inspections for Riverside's older homes, plus after any significant storm. Homes built before 1950 may have aging structural components that need monitoring. Riverside's dense tree canopy also means more debris accumulation and potential branch damage. Free inspections available.` },
  { question: `Can you match the existing roof style on my ${location} home?`, answer: `Absolutely. Whether your home is a 1920s craftsman bungalow, a Tudor revival, or a prairie-style residence, we carry materials that match period-appropriate profiles, textures, and colors. We take photos and samples to ensure the new roof blends seamlessly with your home's character.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#localbusiness",
  "name": "Gimo's Roofing",
  "url": "https://www.gimosroofing.com/roofing-riverside-fl",
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
    "name": "Riverside",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Riverside,_Jacksonville"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services in Riverside & Avondale, Jacksonville",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Historic Home Roofing in Riverside FL",
          "description": "Expert roofing for Riverside and Avondale's historic craftsman bungalows, Tudor revivals, and prairie-style homes."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Repair in Riverside FL",
          "description": "Specialized roof repair for Riverside's century-old homes with period-appropriate materials and preservation compliance."
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
    { "@type": "ListItem", "position": 3, "name": "Riverside", "item": "https://www.gimosroofing.com/roofing-riverside-fl" }
  ]
}

export default function RiversidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Riverside Jacksonville FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Historic home roofing specialists for Riverside, Avondale, and Five Points. Craftsman bungalow and period-home experts serving ZIP codes 32204 and 32205.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Historic Home Specialists</span>
          </div>
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roofing-company-in-jacksonville.webp" alt="Professional roofing in Riverside Jacksonville FL" title="Professional roofing in Riverside Jacksonville FL" fill className="object-cover" priority />
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
            Riverside is one of Jacksonville&apos;s most treasured historic neighborhoods, established in 1868 and renowned for its stunning craftsman bungalows, prairie-style homes, and Tudor revival architecture. Stretching along the St. Johns River from Five Points through Avondale, this walkable urban district is home to Memorial Park, the Cummer Museum of Art, and the vibrant Riverside Arts Market. With homes spanning over a century of architectural styles, roofing in Riverside demands more than a standard approach.
          </p>
          <p className="text-gray-600 mb-4">
            Properties in ZIP codes 32204 and 32205 include everything from meticulously preserved 1920s bungalows along Riverside Avenue to modern condominiums near Park and King streets. Each building type presents unique roofing challenges that require an experienced contractor who understands both historic preservation and modern building codes.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we&apos;ve protected Riverside&apos;s architectural heritage with quality roofing for years. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a full roof replacement</Link> on a craftsman bungalow, <Link href="/services/roof-repair" className="text-primary hover:underline">targeted repairs</Link> on a Tudor revival, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency storm repair</Link> after a summer thunderstorm, our team delivers results that honor your home&apos;s character.
          </p>
        </div>
      </section>

      {/* Why Historic Homes Need Expert Roofers */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Riverside&apos;s Historic Homes Need Expert Roofers</h2>
          <p className="text-gray-600 mb-4">
            Roofing a historic home in Riverside isn&apos;t the same as roofing a newer subdivision house. The neighborhood&apos;s age, architectural diversity, and preservation requirements create challenges that only experienced contractors can navigate properly:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Historic preservation codes:</strong> <span className="text-gray-600">Many Riverside homes fall within historic overlay districts regulated by the Jacksonville Historic Preservation Commission. Roofing materials, colors, and profiles must comply with local guidelines to maintain the neighborhood&apos;s architectural integrity. We handle all permitting and approval requirements.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Steep roof pitches on bungalows:</strong> <span className="text-gray-600">Riverside&apos;s craftsman bungalows and prairie-style homes frequently feature steep roof pitches of 8:12 or higher, along with complex rooflines with dormers, gables, and exposed rafter tails. These require specialized safety equipment and expert installation techniques to ensure proper water shedding and long-term performance.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Aging structures needing care:</strong> <span className="text-gray-600">Homes built between 1900 and 1950 may have original wood decking, older framing, or outdated ventilation systems. A careless roofer can cause structural damage to irreplaceable components. We inspect the underlying structure before every project and make careful repairs as needed.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Period-appropriate materials:</strong> <span className="text-gray-600">A standard 3-tab shingle looks out of place on a 1925 Tudor revival. We source architectural shingles that replicate wood shake, slate-profile synthetics, standing seam metal in traditional finishes, and other materials that match the home&apos;s era while providing modern weather resistance.</span></div>
            </li>
          </ul>
          <p className="text-gray-600">
            Learn more about <Link href="/blog/best-roofing-materials-florida" className="text-primary hover:underline">the best roofing materials for Florida</Link> and how to choose <Link href="/blog/how-to-choose-roofing-contractor-jacksonville" className="text-primary hover:underline">the right roofing contractor in Jacksonville</Link>.
          </p>
        </div>
      </section>

      {/* Common Roofing Challenges */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Challenges in Riverside</h2>
          <p className="text-gray-600 mb-6">
            After years of working on Riverside&apos;s distinctive homes, we encounter the same challenges repeatedly. Understanding these issues helps homeowners plan ahead and protect their investment:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Steep-Pitch Craftsman Roofs</h3>
              <p className="text-gray-600 text-sm">Riverside&apos;s bungalows feature steep, complex rooflines with multiple dormers, exposed rafter tails, and decorative gable details. These require careful flashing work, specialized nail patterns, and experienced crews comfortable working at steep angles.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Century-Old Structures</h3>
              <p className="text-gray-600 text-sm">Many Riverside homes have original wood plank decking rather than modern plywood sheathing. Re-roofing requires careful assessment of the deck condition and, when needed, selective repairs that preserve the original structure without unnecessary replacement.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Tree Canopy Damage</h3>
              <p className="text-gray-600 text-sm">Riverside&apos;s mature live oaks and hardwood canopy provide beautiful shade but drop branches, leaves, and moss onto roofs. This debris traps moisture, promotes algae growth, and can cause puncture damage during storms. Regular maintenance is essential.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Flat Roof Sections</h3>
              <p className="text-gray-600 text-sm">Mixed-era buildings, renovated bungalows with additions, and modern condos in the Riverside area often have flat or low-slope roof sections alongside traditional pitched roofs. These require different waterproofing systems and drainage planning.</p>
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
              <h4 className="font-bold text-secondary mb-2">Historic Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Complete tear-off with period-appropriate materials for craftsman bungalows, Tudor revivals, and prairie-style homes. Preservation-compliant.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Repair</h4>
              <p className="text-gray-600 text-sm">Targeted repairs for leaks, storm damage, and aging materials on Riverside&apos;s older homes. We match existing materials for seamless results.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Emergency Storm Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and storm damage. Tarping, temporary repairs, and insurance claim assistance for Riverside homeowners.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Architectural Shingles</h4>
              <p className="text-gray-600 text-sm">Premium shingles in wood shake, slate, and traditional profiles that complement Riverside&apos;s historic architectural character.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Metal Roofing</h4>
              <p className="text-gray-600 text-sm">Standing seam metal in traditional finishes for both historic homes and modern Riverside condos. 40-60 year lifespan.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Thorough evaluations for pre-purchase buyers, historic home maintenance, and storm damage assessment. Free inspections available.</p>
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
              &ldquo;Had my 1940s bungalow re-roofed by Gimo&apos;s and they did an amazing job matching the character of the home. Crew was respectful of the property and neighbors. The roof looks perfect!&rdquo;
            </blockquote>
            <p className="font-semibold text-secondary">- Amanda Torres</p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving Riverside, Avondale, Five Points, and all of Jacksonville&apos;s historic neighborhoods.</p>
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
          <p className="text-secondary/80 mb-6">Contact us today for expert historic home roofing services in {location}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
