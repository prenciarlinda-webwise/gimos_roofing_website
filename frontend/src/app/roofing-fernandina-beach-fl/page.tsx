import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roofing Fernandina Beach FL - Gimo's Roofing" },
  description: "Roofing Fernandina Beach FL. Amelia Island Victorian home and coastal specialists. Nassau County's trusted roofers for repair and replacement. Call (904) 606-5313.",
  openGraph: {
    title: "Roofing Fernandina Beach FL - Gimo's Roofing",
    description: "Roofing Fernandina Beach FL. Amelia Island coastal roofing specialists. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/roofing-fernandina-beach-fl",
  },
  alternates: { canonical: "https://www.gimosroofing.com/roofing-fernandina-beach-fl" },
}

const location = "Fernandina Beach"
const county = "Nassau County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Riverside", href: "/roofing-riverside-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" }
]

const faqs = [
  { question: "How much does a roof replacement cost in Fernandina Beach?", answer: "Most Fernandina Beach roof replacements run $11,000 to $42,000, with the spread driven by location on the island and material. A standard 1,800-2,400 sq ft architectural shingle roof in the newer subdivisions off Sadler Road or Bailey Road runs $13,000-$19,000. Homes in Amelia Island Plantation and Summer Beach with the salt-grade hardware upgrade and HOA-approved premium shingle run $18,000-$28,000. The Victorian homes in the historic downtown along South 7th Street, Atlantic Avenue, and the streets around Centre Street run $24,000-$48,000 because of the steep pitches, multiple gables, and turret elements typical of Victorian architecture. Aluminum standing seam metal on the oceanfront properties along Fletcher Avenue and South Fletcher pushes the range to $32,000-$70,000. We provide free written estimates and financing from $99/month throughout 32034 and 32035." },
  { question: "What roofing materials actually hold up on Amelia Island?", answer: "On a barrier island like Amelia Island, you have three real choices and one to avoid. The best option for oceanfront and near-ocean homes (within roughly 1 mile of the Atlantic  --  Fletcher Avenue, the streets off Sadler Beach, the eastern half of Amelia Island Plantation) is aluminum standing seam metal. Aluminum doesn't rust like galvanized steel, holds up to direct salt spray for 40-60 years, and survives the wind. Second is impact-rated architectural shingle (Class 4) with stainless steel ring-shank fasteners  --  fine for the western half of the island and the downtown historic district. Third is concrete tile for the Mediterranean-style homes in the resort communities. The one to avoid: standard galvanized steel and any product fastened with electro-galvanized nails. Both will fail within 8 years anywhere on Amelia Island." },
  { question: "Do you work on historic Victorian homes in downtown Fernandina Beach?", answer: "Yes  --  and Fernandina's Victorian downtown is one of the more interesting historic districts in Florida because the housing stock is so cohesive. The streets around Centre Street, South 7th Street, Atlantic Avenue, and Beech Street are full of 1880s-1910s Victorian and Queen Anne homes with the steep pitches, multiple cross-gables, decorative bargeboards, octagonal turret elements, and original 5V crimp metal that defines the style. The Fernandina Beach Historic District requires a Certificate of Appropriateness from the Historic District Council for any visible roof change, and they're particular about material and color. We've handled COAs for properties all over the historic core and we know which products clear review (5V crimp galvalume in dark colors, certain heavy architectural shingles, standing seam metal in approved profiles) and which ones get rejected (light colors, smooth-look shingles, exposed-fastener metal in bright finishes)." },
  { question: "Why does Amelia Island weather wear roofs faster than the mainland?", answer: "Amelia Island is a true barrier island  --  it has the Atlantic on the east side, the Amelia River and Intracoastal on the west, and the Cumberland Sound to the north  --  so salt-laden air hits roofs from every direction with no inland buffering. We measure roof deterioration on Amelia Island as roughly 25-35% faster than equivalent properties on the Nassau County mainland. The damage shows up as accelerated granule loss on shingles, corroded fasteners and flashing, premature sealant failure on ridge caps, and aggressive algae growth in the constant humidity. The exposure is worst on the eastern (Atlantic) side and the northern tip near Fort Clinch, slightly better in the middle of the island, and least bad on the western side near the Amelia River. We adjust the hardware grade and material recommendation to where on the island your home actually sits." },
  { question: "Do you provide 24/7 emergency repair on Amelia Island after storms?", answer: "Yes. We run dedicated crews into Nassau County after every named storm. Amelia Island sits exposed to direct Atlantic hurricane landfall, and after Hurricane Matthew (2016) and Hurricane Irma (2017) we worked Fernandina Beach for weeks straight. The most common after-storm calls on the island are wind-stripped shingles on east-facing slopes (the Atlantic side gets hit first and worst), broken 5V crimp metal panels on the Victorian historic homes, slipped concrete tile in the Plantation and Summer Beach communities, and full-tarp jobs after live oak limbs come through the deck on the older streets near Centre Street. We carry tarps, salvage 5V metal, stock architectural shingle, and emergency deck plywood on the truck. We're typically on-site within a few hours of a call and we handle insurance documentation in real time. Call (904) 606-5313." },
  { question: "What are the historic preservation requirements for downtown Fernandina Beach?", answer: "The Fernandina Beach Historic District is governed by the Historic District Council (HDC), and any roofing change visible from a public street on a contributing structure needs a Certificate of Appropriateness. The HDC strongly prefers in-kind replacement  --  if you have a 5V crimp metal roof now, they want a new 5V crimp metal roof, in the same color family, or as close as you can get in modern product. Material changes (going from metal to shingle, or vice versa) are sometimes approved but require a full HDC hearing. Color is also strictly reviewed; the HDC's approved palette is mostly dark, weathered tones (charcoal, weathered bronze, dark gray) and they reject bright or light colors that don't fit the Victorian period character. We prep your COA packet  --  product specs, color samples, installation drawings  --  and present it to staff for review." },
  { question: "How do I find out if my Fernandina home falls under the historic overlay district?", answer: "The Fernandina Beach Historic District roughly covers the original Victorian downtown grid from the waterfront west to roughly 8th Street, and from Broome Street north to Alachua Street. If your home sits within those boundaries and was built before 1940, it is almost certainly a contributing structure subject to Historic District Council review. You can confirm by checking the Fernandina Beach zoning map on the city website or calling the Planning Department directly. If your home is in the overlay, any roof work visible from the street needs a Certificate of Appropriateness before a permit will issue. We handle the COA process start to finish and know which materials the HDC approves on first pass versus which ones trigger a full board hearing." }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-fernandina-beach-fl#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/roofing-fernandina-beach-fl",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-fernandina-beach-fl#breadcrumb",
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
            <div className="text-center"><span className="text-3xl font-bold">24</span><span className="text-sm ml-2">Years</span></div>
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
            <Link href="/services/metal-roofing" className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Metal Roofing</h4>
              <p className="text-gray-600 text-sm">Aluminum standing seam for maximum salt resistance. 40-60 year lifespan, ideal for oceanfront and historic properties.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Annual barrier island property inspections. We check for salt corrosion, wind damage, and UV deterioration before they become costly problems.</p>
            </div>
            <Link href="/services/roof-gutter" className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Gutters</h4>
              <p className="text-gray-600 text-sm">Seamless aluminum gutter installation, repair, and replacement built to move the heavy island rainfall and resist Amelia Island salt air corrosion.</p>
            </Link>
            <Link href="/services/roof-waterproofing" className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Waterproofing</h4>
              <p className="text-gray-600 text-sm">Protective roof coatings, flashing sealing, and membrane systems for the flat and low-slope sections common on coastal Fernandina Beach properties.</p>
            </Link>
            <Link href="/services/chimney-repair" className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Chimney Repair</h4>
              <p className="text-gray-600 text-sm">Chimney cap replacement, flashing, and repointing for Fernandina Beach&apos;s historic downtown homes and coastal properties, where salt air and nor&apos;easters accelerate mortar and metal corrosion.</p>
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
            <iframe src="https://maps.google.com/maps?q=Fernandina+Beach,+FL+32034&t=&z=12&ie=UTF8&iwloc=&output=embed" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Service Area - Fernandina Beach FL"></iframe>
          </div>
        </div>
      </section>

      {/* ZIP Code Coverage */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing in 32034 and 32035 - Fernandina Beach and Amelia Island ZIP Codes</h2>
          <p className="text-gray-600 mb-4">
            ZIP codes 32034 and 32035 cover Fernandina Beach and Amelia Island, with 32034 containing nearly all of the residential and commercial properties on the island and 32035 reserved for P.O. boxes. 32034 includes the Victorian historic downtown along Centre Street, the resort communities of Amelia Island Plantation and Summer Beach, the oceanfront stretches along Fletcher Avenue, the American Beach historic community, and Fort Clinch at the northern tip. Every roof in these ZIPs sits on a barrier island and needs marine-grade hardware regardless of distance from the dunes. Fernandina Beach and Amelia Island are served by the Nassau County School District.
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
