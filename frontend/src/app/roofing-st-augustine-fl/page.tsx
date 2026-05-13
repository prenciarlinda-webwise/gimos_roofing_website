import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roofing St Augustine FL - Gimo's Roofing" },
  description: "Roofing contractor St Augustine FL. Roofing services in St Augustine FL for historic homes, Anastasia Island, Davis Shores. Metal roofing St Augustine FL. Call (904) 606-5313.",
  openGraph: {
    title: "Roofing St Augustine FL - Gimo's Roofing",
    description: "Roofing companies in St Augustine FL. Historic and coastal specialists. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/roofing-st-augustine-fl",
  },
  alternates: { canonical: "https://www.gimosroofing.com/roofing-st-augustine-fl" },
}

const location = "St. Augustine"
const county = "St. Johns County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Fernandina Beach", href: "/roofing-fernandina-beach-fl" }
]

const faqs = [
  { question: "Can you work on historic homes in St. Augustine's Historic District?", answer: "Yes  --  and St. Augustine's Historic District is the strictest preservation environment in Florida. Any roofing work on a contributing structure within the HP-1, HP-2, or HP-3 zoning overlays needs a Certificate of Appropriateness from the city's Historic Architectural Review Board (HARB), which meets twice a month. In-kind replacement (same material, same color, same profile as the existing roof) is usually approved at the staff level in 7-14 days. Anything that changes material  --  say, going from a 5V crimp metal to architectural shingle, or vice versa  --  has to go to the full HARB board, and they're rigorous about it. We've handled COA submittals for homes on Aviles Street, Marine Street, Charlotte Street, and the streets around the Castillo, and we know which products HARB will approve and which ones get rejected. We bring your packet through the process for you." },
  { question: "What is barrel tile and which St. Augustine homes actually have it?", answer: "Barrel tile is the curved clay or concrete S-shaped tile most people associate with Spanish Colonial architecture, but actual original barrel tile is rarer in St. Augustine than people think. The truly historic Spanish Colonial structures downtown  --  the ones built before 1900  --  typically had flat tile or coquina-supported wood roofs, not barrel tile. The Mediterranean Revival homes built between 1915 and 1940 in Davis Shores, the Lincolnville fringes, and a handful of King Street and Magnolia Avenue properties are where you find original barrel tile. The newer concrete S-tile roofs in Palencia, World Golf Village, and the Anastasia Island communities are modern installations using Eagle Roofing or Boral concrete tile. We work on all of them, but the repair approach is completely different between a 1925 clay tile roof in Davis Shores and a 2008 concrete tile roof in Palencia." },
  { question: "How much does a roof replacement actually cost in St. Augustine?", answer: "In St. Augustine the price spread is wide because the housing stock is. A standard 1,800-2,400 sq ft architectural shingle re-roof in Palencia, World Golf Village, or the Crescent Beach neighborhoods runs $11,000 to $19,000. A 2,500-3,500 sq ft home on Anastasia Island or in St. Augustine Beach with the salt-grade hardware upgrade runs $15,000 to $26,000. Concrete S-tile in Palencia or the Mediterranean homes in Davis Shores runs $32,000 to $58,000. The historic district homes on Aviles, Marine, Cordova, and the downtown side streets are by far the most expensive  --  often $45,000-$110,000  --  because of HARB material requirements, the difficulty of access on narrow streets, and the structural surprises in 80-150-year-old framing. Free written estimates with line-item pricing." },
  { question: "How does Anastasia Island and Vilano Beach salt exposure affect my roof?", answer: "Anastasia Island and Vilano Beach are barrier islands, which means salt-laden air from both the Atlantic and the Matanzas River  --  and the corrosion damage on roofs there is significantly worse than even Jacksonville Beach. Standard galvanized fasteners corrode within 5-8 years on island properties. Aluminum flashing pits and discolors. The shingles on the windward east-facing slopes of homes in Davis Shores, A Street, and the Vilano stretches off May Street lose granules years ahead of schedule. We use stainless steel fasteners, aluminum (not galvanized) flashing, and impact-rated shingles with stainless ridge cap nails on every barrier island roof in 32080 and 32084. For homes within 1,000 feet of the Atlantic, we strongly recommend aluminum standing seam metal  --  it'll outlast any shingle by 25+ years in that environment." },
  { question: "How exposed is St. Augustine to hurricanes and nor'easters?", answer: "St. Augustine sits in one of the most hurricane-exposed positions on Florida's east coast. Hurricane Matthew (2016) and Hurricane Irma (2017) caused widespread roof damage citywide; Hurricane Ian (2022) and Hurricane Nicole (2022) hit again before many homes had fully recovered. The barrier islands  --  Anastasia, Vilano, Crescent Beach, Summer Haven  --  take the worst of it because there's nothing between them and open Atlantic. The historic district downtown also gets hit hard by storm surge from the Matanzas Bay. Florida Building Code requires roofs in St. Johns County to be rated for 130+ mph wind, but on island properties we recommend exceeding that with 150 mph rated shingles, 6d ring-shank nails on a 6/12 pattern, and a fully self-adhered peel-and-stick underlayment as a secondary water barrier. We also document everything for insurance the day we install." },
  { question: "Do you work with HOAs in Palencia, World Golf Village, and St. Augustine Beach communities?", answer: "Yes. We've completed projects in Palencia, World Golf Village (Cascades, Independence, Las Calinas, King and Bear), Marsh Creek, Sea Colony, Treaty Oaks, Anastasia Dunes, and the Crescent Beach communities. Each one has its own architectural review board with its own material and color matrix  --  Palencia and WGV especially are strict about shingle color blends and tile color ranges. We maintain current sample packets for all the major St. Johns County HOAs and we prep your ARB submittal before we order materials. Most boards turn around in 2-4 weeks. We also handle the St. Johns County building permit (required for every roof replacement) and schedule the in-progress and final inspections so you don't have to coordinate any of it. Free estimates throughout 32080, 32084, 32086, 32092, and 32095." },
  { question: "Do I need a permit to replace my roof in St. Augustine?", answer: "Yes. St. Johns County requires a building permit for every roof replacement and for most repairs over a few squares of material. Properties inside the city of St. Augustine also require city-level permitting, and properties in the historic district require HARB approval before the permit will issue. We pull all the paperwork: county permit, city permit if applicable, HOA submittal if applicable, HARB COA if applicable. We schedule the dry-in inspection (after underlayment, before shingles or tile go on) and the final inspection. Permit fees in St. Johns County run roughly $150-$400 for a residential roof replacement and we include that in the quote so there are no surprises. Out-of-area roofers frequently skip the permit, which voids your insurance claim if anything happens later  --  we never do." },
  { question: "Do you provide 24/7 emergency roof repair after storms in St. Augustine?", answer: "Yes -- and we run dedicated crews into St. Johns County after every named storm. After Hurricane Matthew, Hurricane Irma, Hurricane Ian, and Hurricane Nicole, we worked St. Augustine for weeks. The most common emergency calls are wind-stripped shingles on the Anastasia Island east-facing slopes, slipped barrel tiles on the historic Davis Shores and downtown Mediterranean homes, fallen branches through the deck on the heavily-canopied Lincolnville and Palencia properties, and water intrusion through chimney flashing on the older 19th-century homes. We carry tarps, plywood for emergency deck patches, salvage barrel tile for the Davis Shores repairs, and stock architectural shingle in the most common St. Augustine colors. We are typically on-site within a few hours of a call, and we handle the insurance documentation as we go. Call (904) 606-5313." },
  { question: "What does HARB require for re-roofing in St. Augustine's Historic District?", answer: "The Historic Architectural Review Board (HARB) requires a Certificate of Appropriateness for any roofing work on a contributing structure within the HP-1, HP-2, or HP-3 overlay zones. In-kind replacement using the same material, color, and profile as your existing roof is usually approved at the staff level within 7-14 days without a full board hearing. Material changes (going from metal to shingle, or from flat tile to barrel tile) require a full HARB hearing, and the board evaluates whether the proposed material is historically appropriate for the period and style of your home. HARB also reviews color changes and will reject anything that does not fit the approved palette for the district. We have handled COA submittals on Aviles Street, Marine Street, Charlotte Street, and throughout the Lincolnville Historic District, and we know which products clear review on the first pass." },
  { question: "How do nor'easters affect St. Augustine roofs differently than hurricanes?", answer: "Hurricanes hit fast with extreme wind speeds and storm surge, but nor'easters grind on St. Augustine roofs for 2-4 days straight with sustained 40-60 mph winds and heavy rain from the northeast. That prolonged wind-driven rain is what makes nor'easters so damaging to roofs. The rain pushes water sideways under ridge caps, through aging flashing seals, and up under shingles on the north and east slopes of homes in Davis Shores, Vilano Beach, and the Anastasia Island oceanfront. Hurricanes strip shingles off in one event, but a nor'easter slowly saturates the underlayment and decking over days, causing hidden water damage that does not show up until weeks later. After any nor'easter, we recommend a professional inspection focused on the north and east roof slopes where the wind-driven rain hits hardest." }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-st-augustine-fl#service",
  "@type": "Service",
  "name": "Roofing Services in St. Augustine, FL",
  "serviceType": "Roofing Contractor",
  "provider": { "@id": "https://www.gimosroofing.com/#organization" },
  "areaServed": {
    "@type": "City",
    "name": "St. Augustine, FL",
    "sameAs": [
      "https://en.wikipedia.org/wiki/St._Augustine,_Florida"
    ]
  },
  "url": "https://www.gimosroofing.com/roofing-st-augustine-fl",
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
  "@id": "https://www.gimosroofing.com/roofing-st-augustine-fl#faq",
  "@type": "FAQPage",
  "about": { "@id": "https://www.gimosroofing.com/roofing-st-augustine-fl#service" },
  "mainEntityOfPage": "https://www.gimosroofing.com/roofing-st-augustine-fl",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-st-augustine-fl#breadcrumb",
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roofing-contractor-fl.webp" alt="Roofing contractor serving St. Augustine FL" title="Roofing contractor serving St. Augustine FL" fill className="object-cover" priority />
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
            Founded in 1565, {location} holds the distinction of being the oldest continuously occupied European settlement in the United States. From the coquina walls of the Castillo de San Marcos to the Spanish Colonial homes lining St. George Street, the city&apos;s architecture tells a story spanning nearly five centuries. Roofing in {location} demands more than standard skills  --  it requires an understanding of historical materials, preservation standards, and the unique challenges of maintaining structures that define America&apos;s oldest city.
          </p>
          <p className="text-gray-600 mb-4">
            Anastasia Island and the barrier beaches add a second layer of complexity. Properties in Davis Shores, {location} Beach, and along the Matanzas River face relentless salt spray, coastal winds, and direct hurricane exposure. The combination of historic preservation requirements downtown and harsh coastal conditions on the islands means {location} homeowners face roofing challenges found nowhere else in Northeast Florida.
          </p>
          <p className="text-gray-600">
            As a trusted roofing contractor in St Augustine FL, Gimo&apos;s Roofing serves all of {location}, from the Historic District and Lincolnville to Palencia and World Golf Village. Among roofing companies in St Augustine FL, we stand out for our historic preservation expertise and metal roofing St Augustine FL homeowners rely on for coastal durability. Whether your home needs <Link href="/services/roof-replacement" className="text-primary hover:underline">a period-appropriate roof replacement</Link>, <Link href="/services/roof-repair" className="text-primary hover:underline">barrel tile repair</Link>, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency storm damage repair</Link> on Anastasia Island, our team delivers craftsmanship that respects both your home&apos;s character and {county}&apos;s building codes.
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
              <p className="text-gray-600 text-sm">Many downtown homes are 80-150+ years old with original roof framing that may not meet modern code. Reroofing these structures often requires reinforcing decking, upgrading underlayment, and addressing decades of deferred maintenance  --  all while preserving historic character.</p>
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
              <p className="text-gray-600 text-sm">Complete tear-off and replacement with materials suited to your home&apos;s style  --  barrel tile for historic homes, coastal-grade shingles for Anastasia Island, or metal for modern properties.</p>
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
            <iframe src="https://maps.google.com/maps?q=St+Augustine,+FL+32084&t=&z=12&ie=UTF8&iwloc=&output=embed" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Service Area - St Augustine FL"></iframe>
          </div>
        </div>
      </section>

      {/* ZIP Code Coverage */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing in 32080, 32084, 32086, and 32095 - St. Augustine ZIP Codes</h2>
          <p className="text-gray-600 mb-4">
            ZIP codes 32080, 32084, 32086, and 32095 cover St. Augustine and the surrounding St. Johns County mainland. 32084 is the historic district downtown and the immediate surrounding neighborhoods, where HARB review applies to almost every visible roof change. 32080 covers Anastasia Island, Davis Shores, and St. Augustine Beach. 32086 covers the western mainland subdivisions including parts of World Golf Village and Palencia. 32095 covers the northern stretches and Vilano Beach. Each ZIP has its own dominant architectural styles, from 18th-century Spanish Colonial downtown to 2000s tile-roofed subdivisions in Palencia.
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
