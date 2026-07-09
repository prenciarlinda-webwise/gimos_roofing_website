import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roofing Atlantic Beach FL - Gimo's Roofing" },
  description: "Roofing contractor Atlantic Beach FL. Residential roofing in Atlantic Beach FL for Selva Marina, Beach Avenue, and coastal homes. Commercial roofing contractor Atlantic Beach FL. Call (904) 606-5313.",
  openGraph: {
    title: "Roofing Atlantic Beach FL - Gimo's Roofing",
    description: "Roofing companies Atlantic Beach FL. Residential and commercial coastal roofing. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/roofing-atlantic-beach-fl",
  },
  alternates: { canonical: "https://www.gimosroofing.com/roofing-atlantic-beach-fl" },
}

const location = "Atlantic Beach"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Neptune Beach", href: "/roofing-neptune-beach-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" }
]

const faqs = [
  { question: "How much does a roof replacement cost in Atlantic Beach?", answer: "Most Atlantic Beach roofs run $11,000 to $42,000, with location on the island driving most of the spread. A standard 1,800-2,400 sq ft architectural shingle re-roof in Royal Palms, Sea Marsh, or the Sevilla and Saltair stretches west of Mayport Road runs $13,000-$20,000. Homes in Selva Marina and Atlantic Beach Country Club run $18,000-$32,000 because of larger square footage and HOA-approved premium shingle requirements. The oceanfront and near-ocean homes along Ocean Boulevard, Beach Avenue, and the streets east of Sherry Drive run $24,000-$48,000 for impact-rated shingle with stainless hardware, and aluminum standing seam metal on those same homes pushes the range to $32,000-$70,000. Free written estimates and financing from $99/month throughout 32233." },
  { question: "What roofing materials actually hold up in Atlantic Beach's salt air?", answer: "On Atlantic Beach you have three real options. For oceanfront and near-ocean homes (Beach Avenue, Ocean Boulevard, the streets east of Sherry Drive  --  basically anything within a mile of the dunes) the gold standard is aluminum standing seam metal. Aluminum doesn't rust like galvanized steel, holds up to direct salt spray for 40-60 years, and survives the wind. Second is impact-rated Class 4 architectural shingle with stainless steel ring-shank fasteners  --  fine for the western half of Atlantic Beach including most of Selva Marina, Royal Palms, and the Sevilla and Saltair stretches. Third is concrete S-tile for the Mediterranean homes scattered through Atlantic Beach Country Club. The one to avoid: standard galvanized steel and any product fastened with electro-galvanized nails. Both will fail within 8 years east of Mayport Road." },
  { question: "Do you work with HOAs in Atlantic Beach Country Club and Selva Marina?", answer: "Yes. We've completed projects in Atlantic Beach Country Club, Selva Marina, Selva Lakes, Royal Palms, Sea Marsh, and most of the smaller Atlantic Beach HOAs. Each one has its own architectural review board with its own approved shingle and tile color matrix. Atlantic Beach Country Club especially is strict about color blends and requires GAF or CertainTeed premium architectural shingle in approved earth tones. Selva Marina has a longer-standing community standard that we've worked with for years. We prep your ARB submittal  --  product spec sheets, color samples, contractor insurance, scope of work  --  and walk it through approval before we order materials. Most boards turn around within 2-3 weeks. We've never had an Atlantic Beach ARB submittal rejected." },
  { question: "How long do roofs actually last in Atlantic Beach?", answer: "Salt air, UV, and ocean wind shave years off any roof in 32233. Standard 3-tab shingles fail at 12-15 years here  --  we don't install them anymore for that reason. Architectural shingles run 18-22 years on the eastern half of the island closer to the dunes (Beach Avenue, Ocean Boulevard, Sherry Drive corridor) and 22-26 years on the western half closer to Mayport Road. Impact-rated Class 4 architectural shingles with stainless hardware extend that to 24-28 years even on oceanfront homes. Aluminum standing seam metal lasts 40-60 years anywhere on the island. Concrete tile lasts 40-50 years but the underlayment beneath it needs replacement every 25-30 years through a lift-and-relay. The biggest factor is the hardware grade  --  we've seen perfectly good shingles fail at 8 years because the original installer used cheap galvanized fasteners." },
  { question: "Do you handle storm damage and emergency tarping in Atlantic Beach?", answer: "Yes  --  we run 24/7 emergency response throughout Atlantic Beach during and after every named storm. After Hurricane Matthew (2016) and Hurricane Irma (2017) we worked the Beaches for weeks straight. Atlantic Beach takes hurricane damage at roughly the same rate as Jacksonville Beach because the two communities share the same barrier dune line. Our crews are typically on-site within a few hours of a call for tarping, board-up, and damage documentation. Every Atlantic Beach roof has to meet the Florida Building Code 130+ mph wind requirement, and we document repairs to that standard so insurance claims don't get denied for code non-compliance. The most common after-storm calls in 32233 are wind-stripped shingles on east-facing slopes, slipped tile in Atlantic Beach Country Club, and limbs through the deck in the heavily-canopied Selva Marina streets. Call (904) 606-5313 day or night." },
  { question: "Will a new roof lower my Atlantic Beach insurance premium?", answer: "Yes, often substantially. Coastal Florida insurers  --  Citizens, Universal, Heritage, and the few private carriers still writing in 32233  --  offer wind mitigation credits of 15-45% for newer roofs with impact-rated shingles, properly nailed sheathing (6d ring-shank on a 6/12 pattern), secondary water barrier under the entire roof, and a hip roof shape. Most Atlantic Beach homes built before 2002 are paying inflated premiums on roofs that don't qualify for any of those credits. On a typical $3,500-$5,500 annual premium for an Atlantic Beach home, that's $525-$2,475 of annual savings, every year, for the life of the roof. We provide a notarized wind mitigation inspection report (form OIR-B1-1802) with every replacement so you can submit it to your carrier the same week. For most homeowners the insurance savings alone pay back the cost of upgrading to impact-rated materials in 4-6 years." },
  { question: "How does Mayport Naval Station's proximity affect Atlantic Beach roofing?", answer: "It doesn't directly affect the roofing itself, but it does affect who lives in Atlantic Beach. A significant percentage of Atlantic Beach homeowners are active duty Navy stationed at Naval Station Mayport, retired Navy, or DoD civilians, and we offer a flat 8% military discount on every roof replacement and major repair for active duty, retired military, veterans with honorable discharge, and surviving military spouses. We also work around deployment schedules  --  we've handled plenty of Atlantic Beach jobs for spouses while their service member was at sea, and we coordinate with deployed homeowners by email and video. The other thing Mayport's proximity affects is salt exposure: Atlantic Beach gets salt-laden air from both the Atlantic side and from the St. Johns River outflow at Mayport, which is why we recommend stainless hardware island-wide rather than just on the oceanfront streets." },
  { question: "Is my Atlantic Beach home in a FEMA flood zone and does that affect my roof?", answer: "Large portions of Atlantic Beach fall within FEMA flood zones AE and VE, especially the streets east of Sherry Drive, the low-lying sections near Dutton Island, and everything along the Intracoastal side near Royal Palms and Sea Marsh. While FEMA flood maps primarily govern flood insurance requirements, they also signal storm surge exposure that directly affects your roof. Homes in VE zones along Ocean Boulevard and Beach Avenue face wind-driven rain and surge overwash that can undercut soffit ventilation and push water up through the eaves during a major hurricane. We factor your specific flood zone into our material and fastener recommendation, and we install self-adhered peel-and-stick underlayment as a secondary water barrier on every Atlantic Beach home in a VE zone." },
  { question: "What's the difference between roofing on the island side vs the mainland side of the Intracoastal?", answer: "Atlantic Beach sits on a barrier island, so every home in 32233 gets more salt exposure than mainland Jacksonville. But within Atlantic Beach there is a real difference between the eastern half (Ocean Boulevard, Beach Avenue, the Sherry Drive corridor) and the western side closer to the Intracoastal Waterway near Dutton Island and the marsh. The eastern homes get direct Atlantic salt spray and need stainless steel hardware island-wide. The western homes along Seminole Road and the streets near Selva Marina get lower direct salt but higher humidity off the marsh, which drives more algae growth and soffit moisture problems. We adjust our ventilation and underlayment recommendations based on which side of the island your home actually sits on." }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-atlantic-beach-fl#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/roofing-atlantic-beach-fl",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-atlantic-beach-fl#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.gimosroofing.com/service-areas" },
    { "@type": "ListItem", "position": 3, "name": "Atlantic Beach", "item": "https://www.gimosroofing.com/roofing-atlantic-beach-fl" }
  ]
}

export default function AtlanticBeachPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & The Beaches</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Atlantic Beach FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Coastal roofing specialists for Atlantic Beach homes. Salt-resistant materials, HOA-compliant installation in Selva Marina and Atlantic Beach Country Club, and 24/7 storm response throughout ZIP code 32233.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Coastal Specialists</span>
          </div>
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/jacksonville-roofer.webp" alt="Professional roofing services in Atlantic Beach FL" title="Professional roofing services in Atlantic Beach FL" fill className="object-cover" priority />
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
          <h2 className="text-2xl font-bold text-secondary mb-4">Your Atlantic Beach Coastal Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            <strong>Gimo&apos;s Roofing is a licensed roofing contractor (FL CCC1332453) serving Atlantic Beach, FL,</strong> offering roof replacement, roof repair, and storm damage repair for homes throughout ZIP code 32233. The team specializes in salt-resistant, coastal-grade materials built for direct Atlantic exposure, with 24/7 emergency response and HOA-compliant installation for Selva Marina and Atlantic Beach Country Club. <a href={estimateUrl} id="cta-snippet-atlanticbeach-estimate" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">Get a free roof estimate</a> or call <a href={`tel:+1${phone.replace(/\D/g, '')}`} id="cta-snippet-atlanticbeach-call" className="text-primary font-semibold hover:underline">{phone}</a>.
          </p>
          <p className="text-gray-600 mb-4">
            Atlantic Beach sits at the northern end of the Beaches communities, stretching from the Mayport Naval Station boundary at the north down to the Neptune Beach line at Atlantic Boulevard. With around 14,000 residents spread across the historic Beach Avenue district, the gated Selva Marina and Atlantic Beach Country Club communities, and the established Royal Palms, Saltair, and Sevilla neighborhoods west of Mayport Road, Atlantic Beach offers a quieter, more residential feel than its Jacksonville Beach neighbor  --  with the same brutal salt air and coastal exposure.
          </p>
          <p className="text-gray-600 mb-4">
            Living within a mile of the Atlantic in 32233 means every roof here faces accelerated deterioration compared to inland Jacksonville properties. Standard 3-tab shingles that last 25 years in Mandarin only last 12-15 years on a beachside Atlantic Beach home. The salt corrosion attacks metal flashing and fasteners, the wind drives rain into any gap in the seal, and the constant humidity feeds algae and underlayment breakdown.
          </p>
          <p className="text-gray-600">
            As a residential roofing contractor in Atlantic Beach FL, Gimo&apos;s Roofing has completed coastal roofing projects across every neighborhood on the island. Among roofing companies in Atlantic Beach FL, we stand out because we understand which materials hold up in 32233&apos;s salt-air environment and which fail prematurely. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a complete roof replacement</Link> on a Selva Marina home or <Link href="/services/roof-repair" className="text-primary hover:underline">targeted repairs</Link> on a Beach Avenue oceanfront, our team delivers solutions built for barrier-island conditions. <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">Emergency roof repair</Link> is available 24/7 throughout the Beaches.
          </p>
        </div>
      </section>

      {/* Why Coastal Materials */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Atlantic Beach Roofs Need Coastal-Grade Materials</h2>
          <p className="text-gray-600 mb-4">
            Atlantic Beach&apos;s combination of direct ocean exposure, year-round humidity averaging 74%, intense reflected UV from sand and water, and hurricane-force winds creates a roofing environment that&apos;s fundamentally different from inland Jacksonville. Here&apos;s what happens to standard materials in 32233:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Salt corrosion from two directions:</strong> <span className="text-gray-600">Atlantic Beach gets salt-laden air from both the Atlantic Ocean and the St. Johns River outflow at Mayport, attacking metal fasteners, flashing, drip edges, and roof vents from multiple angles. Standard galvanized nails can start corroding within 5-7 years near the beach. We use stainless steel or hot-dipped galvanized fasteners on every Atlantic Beach installation.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">UV degradation:</strong> <span className="text-gray-600">Sunlight reflected off the ocean and white sand effectively doubles UV exposure on Atlantic Beach roofs. This accelerates shingle granule loss, underlayment breakdown, and sealant failure. We install UV-resistant materials designed for high-exposure environments.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Wind uplift on the dune line:</strong> <span className="text-gray-600">Florida Building Code requires roofs in Atlantic Beach to withstand wind speeds of 130+ mph. The streets along Beach Avenue, Ocean Boulevard, and east of Sherry Drive face stronger sustained winds and more intense gusts than properties west of Mayport Road. Proper nail patterns and adhesion are critical.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">HOA standards in gated communities:</strong> <span className="text-gray-600">Selva Marina, Atlantic Beach Country Club, and the smaller HOA neighborhoods enforce strict roofing guidelines covering material type, color, profile, and contractor qualifications. We carry approved samples and manage the entire ARB approval process for you.</span></div>
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
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Problems in Atlantic Beach</h2>
          <p className="text-gray-600 mb-6">
            After years of serving Atlantic Beach homeowners across every neighborhood in 32233, we see the same coastal roofing issues repeatedly. Catching these early saves thousands in repairs:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Corroded Flashing &amp; Fasteners</h3>
              <p className="text-gray-600 text-sm">Metal flashing around vents, chimneys, and roof edges corrodes faster in salt air, especially on east-facing slopes. We replace with aluminum or stainless steel components designed for coastal exposure.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Wind-Lifted Shingles</h3>
              <p className="text-gray-600 text-sm">Ocean winds peel back shingle edges along Beach Avenue and Ocean Boulevard, breaking the seal strip and allowing water intrusion. Even moderate tropical storms can lift improperly installed shingles.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Premature Granule Loss</h3>
              <p className="text-gray-600 text-sm">UV and wind-driven sand strip protective granules from shingles years ahead of schedule. The east-facing slopes show this first, often within 8-10 years on standard shingles.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Selva Marina Live Oak Damage</h3>
              <p className="text-gray-600 text-sm">The mature live oak canopy through Selva Marina drops limbs onto roofs during summer thunderstorms. Packed valleys and limb impact damage are recurring issues for the older homes through the heart of the community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Coastal Roofing Services in {location}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/services/roof-replacement" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Beach Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Complete tear-off with coastal-grade materials rated for salt exposure and 130+ mph winds. Starting at $11,000 for Atlantic Beach homes.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Storm Damage Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and tropical storm damage. Tarping, repairs, and full insurance claim assistance throughout 32233.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Coastal Roof Repair</h4>
              <p className="text-gray-600 text-sm">Fix salt-corroded flashing, wind-lifted shingles, leaks, and UV damage with materials built for Atlantic Beach conditions.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Standing Seam Metal</h4>
              <p className="text-gray-600 text-sm">Aluminum standing seam for maximum salt resistance. 40-60 year lifespan, ideal for Beach Avenue and Ocean Boulevard oceanfront properties.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">HOA-Compliant Roofing</h4>
              <p className="text-gray-600 text-sm">Selva Marina, Atlantic Beach Country Club, and Royal Palms approved materials. We manage the full ARB submittal process for you.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Twice-yearly Atlantic Beach property inspections. We check for salt corrosion, wind damage, and UV deterioration before they become costly problems.</p>
            </div>
            <Link href="/services/metal-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Metal Roofing</h4>
              <p className="text-gray-600 text-sm">Aluminum metal roofing rated for 140+ mph winds with a 40-70 year lifespan, engineered to resist the salt air corrosion that destroys standard metal on Atlantic Beach&apos;s oceanfront streets.</p>
            </Link>
            <Link href="/services/roof-gutter" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Gutters</h4>
              <p className="text-gray-600 text-sm">Seamless aluminum gutter installation, repair, and replacement built to move heavy coastal downpours away from your foundation across Selva Marina and the Beach Avenue district.</p>
            </Link>
            <Link href="/services/roof-waterproofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Waterproofing</h4>
              <p className="text-gray-600 text-sm">Roof coatings and flashing sealing that lock out wind-driven rain and salt moisture on Atlantic Beach homes, including the low-slope sections vulnerable to coastal surge overwash.</p>
            </Link>
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
            <h2 className="text-2xl font-bold text-secondary mb-3">5-Star Rated by Atlantic Beach Homeowners</h2>
            <p className="text-gray-600 mb-6">From oceanfront homes on Beach Avenue to the gated Selva Marina community, our crew has earned 5-star reviews across the Atlantic Beach community.</p>
            <a href="https://www.google.com/search?q=Gimo%27s+Roofing+Jacksonville+reviews" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center bg-primary text-white font-bold py-3 px-6 rounded-lg hover:bg-primary/90 transition">Read Our Reviews</a>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving Atlantic Beach and all of Northeast Florida&apos;s coastal communities.</p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe src="https://maps.google.com/maps?q=Atlantic+Beach,+FL+32233&t=&z=13&ie=UTF8&iwloc=&output=embed" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Service Area - Atlantic Beach FL"></iframe>
          </div>
        </div>
      </section>

      {/* ZIP Code Coverage */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing in 32233 - Atlantic Beach ZIP Code</h2>
          <p className="text-gray-600 mb-4">
            ZIP code 32233 covers all of the City of Atlantic Beach, from the Mayport Naval Station boundary at the north down to the Neptune Beach line at Atlantic Boulevard. The ZIP includes the historic Beach Avenue oceanfront district, the gated Selva Marina and Atlantic Beach Country Club communities, and the established Royal Palms, Saltair, Sevilla, and Sea Marsh neighborhoods west of Mayport Road. Roofs in 32233 face the same salt air and hurricane exposure as Jacksonville Beach but with stricter HOA architectural review in the gated communities and more aggressive live oak canopy in the heart of Selva Marina.
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
          <p className="text-secondary/80 mb-6">Contact us today for expert coastal roofing services in {location}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
