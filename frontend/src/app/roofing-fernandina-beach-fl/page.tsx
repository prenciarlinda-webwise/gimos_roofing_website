import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Fernandina Beach FL - Amelia Island Roof Repair & Replacement",
  description: "Roofing in Fernandina Beach & Amelia Island FL. Victorian home & coastal specialists. Nassau County's trusted roofers. Call (904) 606-5313.",
  keywords: ["roofing fernandina beach fl", "amelia island roofers", "roofing company fernandina beach", "nassau county roofing", "victorian home roofing", "fernandina beach roof replacement"],
  alternates: { canonical: "https://www.gimosroofing.com/roofing-fernandina-beach-fl" },
}

const location = "Fernandina Beach"
const county = "Nassau County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Riverside", href: "/roofing-riverside-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" }
]

const faqs = [
  { question: `How much does roof replacement cost in ${location}?`, answer: `Roof replacement in ${location} typically ranges from $8,500 to $35,000+ depending on home size and materials. Victorian homes in the historic district or oceanfront properties on Amelia Island may require specialized materials that affect pricing. We offer free estimates and financing options.` },
  { question: `What roofing materials work best for Amelia Island's coastal environment?`, answer: `For Amelia Island's barrier island conditions, we recommend aluminum standing seam metal roofing (best salt resistance, 40-60 year lifespan), impact-resistant architectural shingles with algae protection, or tile roofing for historic character. Avoid standard galvanized steel near the ocean as it corrodes faster on barrier islands.` },
  { question: `Do you work on historic Victorian homes in Fernandina Beach?`, answer: `Yes! We specialize in roofing for Fernandina Beach's Victorian-era homes along Centre Street and the historic district. We use period-appropriate materials that maintain architectural authenticity while meeting modern Florida Building Code requirements. Our crews are experienced with steep-pitch Victorian roof lines.` },
  { question: `How does being on a barrier island affect my roof?`, answer: `Amelia Island's barrier island location means your roof faces salt spray from multiple directions, stronger sustained winds with less inland buffering, and direct Atlantic hurricane exposure. Roofs on Amelia Island typically deteriorate 20-30% faster than mainland properties. Annual inspections and salt-resistant materials are essential.` },
  { question: `Do you provide hurricane damage repair on Amelia Island?`, answer: `Yes! We offer 24/7 emergency storm response for all of ${location} and Amelia Island, including Amelia Island Plantation, Summer Beach, and American Beach. Call ${phone} for immediate tarping, damage assessment, and insurance claim assistance after any storm.` },
  { question: `Can you match historic preservation requirements for downtown Fernandina Beach?`, answer: `Absolutely. We're familiar with the historic preservation guidelines for Fernandina Beach's downtown district. We recommend materials that satisfy both preservation standards and modern wind and impact codes, including architectural shingles that replicate historic profiles and standing seam metal that matches original roofing styles.` },
  { question: `What ZIP codes do you serve in ${location}?`, answer: `We serve all of ${location} and Amelia Island, including ZIP codes 32034 and 32035. This covers Historic Downtown, Centre Street, Amelia Island Plantation, Summer Beach, American Beach, Old Town, and the Fort Clinch area. Same-day estimates available throughout Nassau County.` },
  { question: `How often should I inspect my roof on Amelia Island?`, answer: `We recommend annual inspections for all Amelia Island properties, plus after every major storm. Barrier island conditions including constant salt air, intense UV, and ocean winds cause faster wear than mainland areas. Early detection of corroded flashing, lifted shingles, or damaged underlayment prevents expensive repairs. We offer free roof inspections.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#localbusiness",
  "name": "Gimo's Roofing",
  "url": "https://www.gimosroofing.com/roofing-fernandina-beach-fl",
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
    "name": "Fernandina Beach",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Fernandina_Beach,_Florida"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services in Fernandina Beach & Amelia Island, FL",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Coastal Roofing in Fernandina Beach FL",
          "description": "Salt-resistant roofing for Fernandina Beach and Amelia Island coastal properties."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Victorian Home Roofing in Fernandina Beach FL",
          "description": "Specialized roofing for Fernandina Beach's historic Victorian homes and Centre Street district."
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
    { "@type": "ListItem", "position": 3, "name": "Fernandina Beach", "item": "https://www.gimosroofing.com/roofing-fernandina-beach-fl" }
  ]
}

export default function FernandinaBeachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & Amelia Island | {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Fernandina Beach FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Amelia Island&apos;s trusted roofer for Victorian homes, coastal properties, and resort communities. Salt-resistant materials, historic preservation expertise, and 24/7 storm response serving ZIP codes 32034 and 32035.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Coastal & Historic Specialists</span>
          </div>
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/top-rated-roofer-jacksonville.webp" alt="Top-rated roofing company in Fernandina Beach FL" title="Top-rated roofing company in Fernandina Beach FL" fill className="object-cover" priority />
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
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} &amp; Amelia Island Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            Fernandina Beach sits at the northern tip of Amelia Island, Florida&apos;s furthest-north barrier island and one of the state&apos;s most charming coastal communities. From the Victorian-era storefronts along Historic Downtown Centre Street to the resort communities of Amelia Island Plantation and Summer Beach, this bridge-access island blends historic character with coastal living in a way no other Northeast Florida town can match.
          </p>
          <p className="text-gray-600 mb-4">
            That unique character creates unique roofing challenges. Barrier island exposure means salt spray from multiple directions, direct Atlantic hurricane paths, and relentless ocean winds that inland communities simply don&apos;t experience. Add in the preservation requirements of the historic district and the high standards of resort communities like American Beach and Old Town, and you need a roofer who understands every dimension of island roofing.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we&apos;ve served {location} homeowners across every neighborhood on Amelia Island. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a complete roof replacement</Link> on a Victorian gem, <Link href="/services/roof-repair" className="text-primary hover:underline">targeted repairs</Link> on a beachfront property, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency storm repair</Link> after a hurricane, our team delivers solutions built for barrier island conditions.
          </p>
        </div>
      </section>

      {/* Why Coastal Expertise */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Amelia Island Roofs Need Coastal Expertise</h2>
          <p className="text-gray-600 mb-4">
            Amelia Island&apos;s barrier island geography creates roofing conditions that are measurably harsher than even nearby mainland communities. The combination of ocean exposure on both the Atlantic and Intracoastal sides, limited wind buffering, and constant humidity demands specialized knowledge and materials:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Island exposure to Atlantic storms:</strong> <span className="text-gray-600">As a barrier island accessed by bridge, Amelia Island sits directly in the path of Atlantic hurricanes and nor&apos;easters with no mainland buffer. Roofs here face stronger sustained winds and more intense storm surges than properties just across the Intracoastal Waterway. Florida Building Code requires 130+ mph wind ratings, but island homes benefit from exceeding those minimums.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Victorian architecture preservation:</strong> <span className="text-gray-600">Fernandina Beach&apos;s historic downtown features dozens of Victorian-era structures with steep-pitch rooflines, decorative elements, and architectural details that must be preserved during any roofing project. We select materials that look authentic to the period while delivering modern wind and impact resistance.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Salt air on a barrier island:</strong> <span className="text-gray-600">Unlike mainland coastal areas that face salt spray from one direction, barrier island properties get salt-laden air from both the ocean and the sound. This accelerates corrosion on metal fasteners, flashing, and hardware from every angle. We use stainless steel and aluminum components rated for severe coastal environments.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Resort community standards:</strong> <span className="text-gray-600">Communities like Amelia Island Plantation, Summer Beach, and the Fort Clinch area maintain strict aesthetic and quality standards. We work within HOA and community guidelines, ensuring roofing materials, colors, and installation methods meet or exceed community requirements while maximizing coastal durability.</span></div>
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
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Problems on Amelia Island</h2>
          <p className="text-gray-600 mb-6">
            After years of serving {location} and Amelia Island homeowners, we see the same barrier island roofing issues repeatedly. Catching these early saves thousands in repairs:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Salt Corrosion on Island Properties</h3>
              <p className="text-gray-600 text-sm">Barrier island homes face salt exposure from both the Atlantic and Intracoastal sides. Metal flashing, fasteners, and roof vents corrode significantly faster than on the mainland. We replace all hardware with stainless steel or aluminum rated for severe coastal zones.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Victorian Steep-Pitch Challenges</h3>
              <p className="text-gray-600 text-sm">Historic Victorian roofs feature steep pitches, multiple dormers, turrets, and complex valleys that demand specialized installation techniques. Standard crews often struggle with these angles. Our team has extensive experience with the intricate geometry of Fernandina&apos;s Victorian rooflines.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Hurricane Vulnerability as Barrier Island</h3>
              <p className="text-gray-600 text-sm">Amelia Island&apos;s barrier island position means direct hurricane landfall exposure with no inland buffering. Wind-driven rain penetrates even small gaps, and uplift forces are amplified on the island&apos;s exposed lots. Proper underlayment and fastening patterns are critical for every installation.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Historic Metal Roof Restoration</h3>
              <p className="text-gray-600 text-sm">Many of Fernandina Beach&apos;s historic homes feature original standing seam metal roofs that have weathered decades of coastal conditions. We restore and replace these systems with modern standing seam that honors the original aesthetic while providing superior wind and corrosion resistance.</p>
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
              <h4 className="font-bold text-secondary mb-2">Island Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Complete tear-off with barrier island-grade materials rated for salt exposure and 130+ mph winds. Starting at $8,500.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Storm Damage Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and nor&apos;easter damage. Tarping, repairs, and insurance claim assistance across Amelia Island.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Coastal Roof Repair</h4>
              <p className="text-gray-600 text-sm">Fix salt-corroded flashing, wind-lifted shingles, leaks, and UV damage with materials built for barrier island conditions.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Victorian Home Roofing</h4>
              <p className="text-gray-600 text-sm">Period-appropriate materials and techniques for Fernandina&apos;s historic district. Steep-pitch expertise and preservation-compliant installation.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Metal Roofing</h4>
              <p className="text-gray-600 text-sm">Aluminum standing seam for maximum salt resistance. 40-60 year lifespan, ideal for oceanfront and historic properties.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Annual barrier island property inspections. We check for salt corrosion, wind damage, and UV deterioration before they become costly problems.</p>
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
              &ldquo;Gimo&apos;s handled our Victorian home&apos;s roof replacement beautifully. They understood the historic character and chose materials that look authentic while providing modern protection. The crew was careful with our landscaping and the whole neighborhood commented on how great it looks.&rdquo;
            </blockquote>
            <p className="font-semibold text-secondary">- Patricia Wilson</p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving Fernandina Beach, Amelia Island, and all of {county}.</p>
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
          <p className="text-secondary/80 mb-6">Contact us today for expert coastal roofing services in {location} and Amelia Island.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
