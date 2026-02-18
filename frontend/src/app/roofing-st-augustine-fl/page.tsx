import { Metadata } from 'next'
import Link from 'next/link'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing St Augustine FL - Historic & Coastal Roof Repair & Replacement",
  description: "Roofing in St Augustine FL. Historic home specialists & coastal roof repair. Anastasia Island, Davis Shores & downtown. Call (904) 606-5313 for free estimate.",
  keywords: ["roofing st augustine fl", "roofing company st augustine fl", "roof repair st augustine", "historic home roofing", "anastasia island roofers", "st augustine roof replacement"],
  alternates: { canonical: "https://www.gimosroofing.com/roofing-st-augustine-fl" },
}

const location = "St. Augustine"
const county = "St. Johns County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Fernandina Beach", href: "/roofing-fernandina-beach-fl" }
]

const faqs = [
  { question: `Can you work on historic homes in ${location}'s Historic District?`, answer: `Yes. We have extensive experience with historic properties in ${location}'s downtown and surrounding neighborhoods. We understand the requirements for period-appropriate materials, barrel tile matching, and maintaining the architectural character required by local preservation guidelines. We coordinate with the city's Historic Architectural Review Board (HARB) when needed.` },
  { question: `What is barrel tile roofing and is it right for my ${location} home?`, answer: `Barrel tile (also called Spanish tile or S-tile) is the curved clay or concrete tile seen on many Spanish Colonial and Mediterranean-style homes throughout ${location}. It lasts 50-75+ years, withstands hurricane winds when properly installed, and is authentic to the city's architectural heritage. We specialize in barrel tile repair, replacement, and matching for historic and newer homes alike.` },
  { question: `How do you handle roofing on Spanish Colonial architecture in ${location}?`, answer: `Spanish Colonial homes require specialized knowledge of barrel tile systems, proper underlayment for tile weight, and historically accurate color matching. We source clay tiles that match the original profiles found on homes throughout the Historic District, Davis Shores, and downtown ${location}. Our crews are trained in tile-specific installation techniques that differ significantly from standard shingle work.` },
  { question: `How much does roof replacement cost in ${location}?`, answer: `Roof replacement in ${location} ranges from $8,500 to $35,000+ depending on size, materials, and complexity. Historic homes with barrel tile or slate cost more due to material and labor requirements. Standard architectural shingle replacement averages $10,000-$18,000 for most homes. Financing available from $99/month.` },
  { question: `How do hurricanes affect roofs in ${location}?`, answer: `${location} sits directly in the hurricane corridor with exposure from both the Atlantic Ocean and the Matanzas River. Homes on Anastasia Island and along the coast face the highest wind and storm surge risk. Florida Building Code requires roofs here to withstand 130+ mph winds. We install hurricane straps, impact-resistant materials, and sealed roof decking to maximize storm protection. Call ${phone} for 24/7 emergency storm response.` },
  { question: `Does salt air damage roofs on Anastasia Island and ${location} Beach?`, answer: `Absolutely. Properties on Anastasia Island, Davis Shores, Vilano Beach, and ${location} Beach face constant salt spray that corrodes metal fasteners, degrades shingle granules, and weakens flashing. Homes within 2 miles of the ocean need salt-resistant materials like stainless steel fasteners, aluminum flashing, and marine-grade sealants. Annual inspections are essential for coastal properties.` },
  { question: `Do HOAs in ${location} communities have roofing requirements?`, answer: `Yes. Communities like Palencia, World Golf Village, and many ${location} Beach neighborhoods have specific requirements for roofing colors, materials, and styles. We work with HOAs throughout ${county} and carry samples of approved materials. We handle the approval process and paperwork so you don't have to.` },
  { question: `Do I need a permit to replace my roof in ${location}?`, answer: `Yes. ${county} requires building permits for all roof replacements and most major repairs. Properties within the Historic District have additional review requirements through the Historic Architectural Review Board. We pull all necessary permits, schedule inspections, and ensure full code compliance on every project. Our team handles the entire permitting process for you.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#localbusiness",
  "name": "Gimo's Roofing",
  "url": "https://www.gimosroofing.com/roofing-st-augustine-fl",
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
    "name": "St. Augustine",
    "sameAs": [
      "https://en.wikipedia.org/wiki/St._Augustine,_Florida"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services in St. Augustine, FL",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Historic Home Roofing in St. Augustine FL",
          "description": "Period-appropriate roofing for historic homes including barrel tile, slate, and architectural shingles in St. Augustine's Historic District."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coastal Roof Replacement in St. Augustine FL",
          "description": "Salt-resistant roof replacement for Anastasia Island, Davis Shores, and St. Augustine Beach properties."
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
    { "@type": "ListItem", "position": 3, "name": "St. Augustine", "item": "https://www.gimosroofing.com/roofing-st-augustine-fl" }
  ]
}

export default function StAugustinePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location}, {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing St Augustine FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Historic home roofing specialists in America&apos;s oldest city. Barrel tile experts, coastal-grade materials, and period-appropriate solutions for properties in ZIP codes 32080, 32084, 32086, and 32095.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>&#10003; Licensed &amp; Insured</span>
            <span>&#10003; 5-Star Rated</span>
            <span>&#10003; Historic Home Specialists</span>
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
            Founded in 1565, {location} holds the distinction of being the oldest continuously occupied European settlement in the United States. From the coquina walls of the Castillo de San Marcos to the Spanish Colonial homes lining St. George Street, the city&apos;s architecture tells a story spanning nearly five centuries. Roofing in {location} demands more than standard skills — it requires an understanding of historical materials, preservation standards, and the unique challenges of maintaining structures that define America&apos;s oldest city.
          </p>
          <p className="text-gray-600 mb-4">
            Anastasia Island and the barrier beaches add a second layer of complexity. Properties in Davis Shores, {location} Beach, and along the Matanzas River face relentless salt spray, coastal winds, and direct hurricane exposure. The combination of historic preservation requirements downtown and harsh coastal conditions on the islands means {location} homeowners face roofing challenges found nowhere else in Northeast Florida.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we serve all of {location} — from the Historic District and Lincolnville to Palencia and World Golf Village. Whether your home needs <Link href="/services/roof-replacement" className="text-primary hover:underline">a period-appropriate roof replacement</Link>, <Link href="/services/roof-repair" className="text-primary hover:underline">barrel tile repair</Link>, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency storm damage repair</Link> on Anastasia Island, our team delivers craftsmanship that respects both your home&apos;s character and {county}&apos;s building codes.
          </p>
        </div>
      </section>

      {/* Why Specialized Roofing */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why {location} Homes Need Specialized Roofing</h2>
          <p className="text-gray-600 mb-4">
            No two roofing markets in Florida are quite like {location}. The intersection of centuries-old architecture, strict historic preservation oversight, barrier island geography, and tourism-driven commercial demands creates a set of requirements that general roofing contractors often overlook:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Historic preservation standards:</strong> <span className="text-gray-600">Properties in the Historic District must comply with guidelines enforced by the Historic Architectural Review Board (HARB). Roof materials, colors, and profiles must match the period character of the structure. We source barrel tile, slate, and standing seam metal that meet preservation requirements while providing modern performance.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Coastal exposure on barrier islands:</strong> <span className="text-gray-600">Anastasia Island, Vilano Beach, and {location} Beach sit directly on the Atlantic, fully exposed to salt spray, tropical storms, and nor&apos;easters. Roofs on these barrier islands deteriorate 30-40% faster than inland properties, requiring marine-grade fasteners, salt-resistant flashing, and impact-rated materials.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Diverse architectural styles:</strong> <span className="text-gray-600">{location} features everything from 18th-century Spanish Colonial homes with barrel tile to 1920s Mediterranean Revival estates, mid-century Anastasia Island bungalows, and modern Palencia subdivisions. Each style demands different roofing materials, techniques, and aesthetic considerations.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Strict building codes and permitting:</strong> <span className="text-gray-600">{county} enforces rigorous building codes for wind resistance, and the city of {location} adds historic overlay requirements for designated properties. Navigating both the county building department and HARB review processes requires local expertise that out-of-area contractors simply lack.</span></div>
            </li>
          </ul>
          <p className="text-gray-600">
            Read more about <Link href="/blog/historic-home-roofing-florida" className="text-primary hover:underline">roofing historic homes in Florida</Link> and <Link href="/blog/clay-tile-roof-lifespan-florida" className="text-primary hover:underline">how long clay tile roofs last in our climate</Link>.
          </p>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Challenges in {location}</h2>
          <p className="text-gray-600 mb-6">
            After years of serving {location} homeowners across the Historic District, Anastasia Island, and the newer communities to the west, these are the roofing issues we encounter most frequently:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Barrel Tile Deterioration</h3>
              <p className="text-gray-600 text-sm">Spanish Colonial and Mediterranean homes throughout downtown rely on barrel tile that cracks, shifts, and loses its mortar bedding over decades. Individual tile replacement requires exact profile matching, and improper repairs can cause hidden leaks beneath the tile field.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Salt Damage on Anastasia Island</h3>
              <p className="text-gray-600 text-sm">Homes in Davis Shores, {location} Beach, and along the Intracoastal face aggressive salt corrosion. Metal flashing, roof vents, and fasteners corrode years ahead of schedule. Standard galvanized materials fail within 5-8 years near the ocean.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Hurricane &amp; Nor&apos;easter Exposure</h3>
              <p className="text-gray-600 text-sm">{location}&apos;s coastal position puts it in the direct path of Atlantic hurricanes and winter nor&apos;easters. Hurricane Matthew (2016) and Hurricane Ian (2022) caused widespread roof damage across the city, particularly on older structures with outdated fastening methods.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Aging Historic Structures</h3>
              <p className="text-gray-600 text-sm">Many downtown homes are 80-150+ years old with original roof framing that may not meet modern code. Reroofing these structures often requires reinforcing decking, upgrading underlayment, and addressing decades of deferred maintenance — all while preserving historic character.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our {location} Roofing Services</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/services/roof-replacement" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Complete tear-off and replacement with materials suited to your home&apos;s style — barrel tile for historic homes, coastal-grade shingles for Anastasia Island, or metal for modern properties.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Storm Damage Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and nor&apos;easter damage. Tarping, structural repairs, and full insurance claim assistance for {location} properties.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Repair</h4>
              <p className="text-gray-600 text-sm">Barrel tile repair, salt-corroded flashing replacement, leak repair, and shingle restoration. We match existing materials to maintain your home&apos;s appearance.</p>
            </Link>
            <Link href="/services/commercial-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Commercial Roofing</h4>
              <p className="text-gray-600 text-sm">Flat roof systems, TPO, and metal roofing for {location}&apos;s hotels, restaurants, retail shops, and tourism-dependent commercial properties.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Historic Tile Roofing</h4>
              <p className="text-gray-600 text-sm">Barrel tile, flat tile, and slate installation and repair for period-appropriate roofing on historic and Mediterranean-style homes throughout {location}.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Pre-purchase, annual maintenance, and post-storm inspections. Detailed reports for insurance, real estate transactions, and historic preservation compliance.</p>
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
              &ldquo;Excellent job! These fellas were professional. Came on time and did a great job. Cleaned up every single thing! My roof looks amazing! They came and got the job done fast. Highly recommend Gimo&apos;s Roofing.&rdquo;
            </blockquote>
            <p className="font-semibold text-secondary">- Barbara Leonard</p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving {location} and all of {county} from the Historic District to World Golf Village.</p>
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
          <p className="text-secondary/80 mb-6">Contact us today for expert roofing services in {location} and {county}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
