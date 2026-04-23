import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Siding Repair - Gimo's Roofing" },
  description: "Fast siding repair from Gimo's Roofing. Vinyl siding repair, storm damage fixes, and panel replacement by trusted siding contractors. Call (904) 606-5313.",
  openGraph: {
    title: "Siding Repair - Gimo's Roofing",
    description: "Siding repair for vinyl, fiber cement, and storm damage. Licensed siding contractors you can trust. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/services/siding-repair",
  },
  alternates: { canonical: "https://www.gimosroofing.com/services/siding-repair" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const phone = "(904) 606-5313"

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
)

const repairTypes = [
  { title: "Storm Damage Repair", description: "Fast repairs for siding damaged by hurricanes, hail, wind, and severe weather events." },
  { title: "Crack & Hole Repair", description: "Fix cracks, holes, and punctures in your siding before they lead to bigger problems." },
  { title: "Section Replacement", description: "Replace damaged siding sections with matching materials for a seamless repair." },
  { title: "Warped Siding Repair", description: "Fix buckling, warping, and bulging siding caused by heat, moisture, or improper installation." },
  { title: "Rot & Water Damage", description: "Address water damage and rot in wood siding before it spreads to your home's structure." },
  { title: "Loose Siding Repair", description: "Re-secure loose panels and fasteners to prevent further damage and improve appearance." }
]

const signs = [
  "Cracks, holes, or punctures in siding",
  "Warping, buckling, or bulging panels",
  "Faded or peeling paint",
  "Loose or missing siding pieces",
  "Water stains on interior walls",
  "Increased energy bills",
  "Mold or mildew growth",
  "Visible rot on wood siding"
]

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
  { question: "Can you match my existing siding color?", answer: "In most cases, yes. We carry a wide range of siding colors and can often find exact or very close matches. For older siding, we may source from specialty suppliers or recommend replacing larger sections for uniformity." },
  { question: "How quickly can you repair storm damage?", answer: "For emergency storm damage, we offer priority scheduling. We can typically assess damage within 24-48 hours and begin repairs as soon as materials are available." },
  { question: "Is it better to repair or replace my siding?", answer: "It depends on the extent of damage and siding age. Small areas of damage on newer siding are worth repairing. Extensive damage or aging siding (15+ years) may be more cost-effective to replace entirely." },
  { question: "Do you work with insurance for siding repairs?", answer: "Yes, we regularly work with insurance companies on storm damage claims. We can document damage and provide detailed estimates for your insurance claim." },
  { question: "How much does siding repair cost in Jacksonville?", answer: "Minor repairs (patching holes, replacing a few panels) typically cost $150-500. Medium repairs (larger sections, multiple areas) run $500-1,500. Major repairs involving significant damage may cost $1,500-3,500+. Storm damage is often covered by insurance." },
  { question: "How long does siding repair take?", answer: "Most repairs are completed in 1-2 days. Simple repairs like replacing a few panels can be done in a few hours. More extensive damage requiring multiple sections may take 2-3 days." },
  { question: "Will repaired siding match the rest of my house?", answer: "New siding panels will match in style and profile, but color can be challenging with older homes. Existing siding fades over time. We discuss options upfront, and sometimes replacing a larger section or adding color-matching treatments provides better results." },
  { question: "What if my siding is discontinued?", answer: "We have access to specialty suppliers and can often find discontinued patterns. If not, we can replace sections with similar profiles or recommend strategic partial replacement that looks natural." },
  { question: "Do you repair all types of siding?", answer: "Yes, we repair vinyl, fiber cement (Hardie board), wood, engineered wood, and aluminum siding. Each material requires different techniques, and our crews are experienced with all types." },
  { question: "Can siding repair fix my water intrusion problem?", answer: "Often yes, if the damage is localized. We assess the underlying cause (sometimes flashing or house wrap also needs attention). We repair the root cause, not just the visible damage." }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/siding-repair#service",
  "@type": "Service",
  "name": "Siding Repair in Jacksonville FL",
  "serviceType": "Siding Repair",
  "description": "Siding repair in Jacksonville FL for vinyl, fiber cement, wood, and storm-damaged siding across Duval, St. Johns, Clay, and Nassau counties. Local siding contractors with fast response.",
  "url": "https://www.gimosroofing.com/services/siding-repair",
  "provider": { "@id": "https://www.gimosroofing.com/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Jacksonville, FL", "sameAs": "https://en.wikipedia.org/wiki/Jacksonville,_Florida" },
    { "@type": "City", "name": "Jacksonville Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Jacksonville_Beach,_Florida" },
    { "@type": "City", "name": "Atlantic Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Atlantic_Beach,_Florida" },
    { "@type": "City", "name": "Neptune Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Neptune_Beach,_Florida" },
    { "@type": "City", "name": "St. Augustine, FL", "sameAs": "https://en.wikipedia.org/wiki/St._Augustine,_Florida" },
    { "@type": "City", "name": "Ponte Vedra Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Ponte_Vedra_Beach,_Florida" },
    { "@type": "City", "name": "Nocatee, FL", "sameAs": "https://en.wikipedia.org/wiki/Nocatee,_Florida" },
    { "@type": "City", "name": "Orange Park, FL", "sameAs": "https://en.wikipedia.org/wiki/Orange_Park,_Florida" },
    { "@type": "City", "name": "Fernandina Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Fernandina_Beach,_Florida" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Siding Repair Options in Jacksonville FL",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Vinyl Siding Repair", "description": "Panel replacement, crack patching, and color-matched vinyl repairs." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Fiber Cement (Hardie Board) Repair", "description": "Hardie board chip, crack, and moisture-damage repair with proper finishing." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Siding Repair", "description": "Insurance-ready repairs for hurricane and wind-damaged siding across Jacksonville." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wood Siding Rot Repair", "description": "Rot removal, board replacement, and moisture correction for wood siding." } }
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
  "@id": "https://www.gimosroofing.com/services/siding-repair#faq",
  "@type": "FAQPage",
  "about": { "@id": "https://www.gimosroofing.com/services/siding-repair#service" },
  "mainEntityOfPage": "https://www.gimosroofing.com/services/siding-repair",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/siding-repair#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Siding Repair", "item": "https://www.gimosroofing.com/services/siding-repair" }
  ]
}

export default function SidingRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
                <span className="text-primary">Siding Repair</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Siding Repair - Fast, Color-Matched Fixes</h1>
              <p className="text-lg text-gray-200 mb-6">
                Searching for siding repair Jacksonville homeowners can count on? Gimo&apos;s Roofing delivers Jacksonville siding repair for vinyl, Hardie board, wood, and storm-damaged panels across Duval, St. Johns, Clay, and Nassau counties. Licensed siding contractors Jacksonville FL homeowners trust for quick turnarounds and clean color matches.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">{phone}</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/siding-project-closeup.webp" alt="Siding repair project in Jacksonville FL" title="Siding repair project in Jacksonville FL" fill className="object-cover" priority />
            </div>
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
              <a href="https://www.yelp.com/biz/gimos-roofing-jacksonville" target="_blank" rel="noopener" title="View Gimo's Roofing Yelp Reviews">
                <Image src="/yelp-logo.svg" alt="Read Gimo's Roofing reviews on Yelp" title="Yelp Reviews" width={70} height={28} className="h-7 w-auto object-contain" unoptimized />
              </a>
              <a href="https://www.thumbtack.com/fl/jacksonville/roofing/gimos-renovation-roofing/service/478820963508404237" target="_blank" rel="noopener" title="View Gimo's Roofing Thumbtack Reviews">
                <Image src="/thumbtack-logo.svg" alt="Read Gimo's Roofing reviews on Thumbtack" title="Thumbtack Reviews" width={36} height={36} className="h-7 w-auto object-contain" unoptimized />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Repair Types Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Repair Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Whether you need a quick vinyl patch or full section replacement, our Jacksonville siding repair crews handle every siding material and every type of damage. As a trusted <Link href="/" className="text-primary hover:underline">Jacksonville roofing company</Link>, we back every repair with honest assessments and clean workmanship.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map((repair) => (
              <div key={repair.title} className="card p-6">
                <p className="font-bold text-secondary mb-2">{repair.title}</p>
                <p className="text-gray-600 text-sm">{repair.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Repair Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Repair Types In-Depth</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Understanding your siding damage helps you make informed decisions about repairs.</p>
          </div>

          <div className="space-y-8">
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Storm Damage Repair</h3>
                  <p className="text-gray-600 mb-4">Jacksonville&apos;s severe weather (hurricanes, thunderstorms, and high winds) takes a toll on siding. Storm damage can range from minor dents and scratches to complete panel blow-offs. Flying debris during storms often punctures siding, creating entry points for water and pests.</p>
                  <p className="text-gray-600 mb-4">We respond quickly to storm damage, providing temporary protection if needed and permanent repairs once conditions allow. We document all damage thoroughly for insurance claims and work directly with adjusters. If storm damage also affected your roof, our <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency roof repair</Link> crews can address both at once.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> Varies widely based on damage extent. Insurance typically covers storm damage minus your deductible.</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-bold text-secondary mb-3">Storm Damage Signs</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Missing or displaced panels</li>
                    <li>&#8226; Holes or punctures</li>
                    <li>&#8226; Dents and cracks</li>
                    <li>&#8226; Loose or flapping siding</li>
                    <li>&#8226; Exposed house wrap</li>
                    <li>&#8226; Water behind siding</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Warped &amp; Buckled Siding Repair</h3>
                  <p className="text-gray-600 mb-4">Warped, buckled, or bulging siding is a common problem in Jacksonville, often caused by improper installation or extreme heat. Vinyl siding must be installed with room to expand and contract. If nailed too tightly, it can&apos;t move with temperature changes and buckles.</p>
                  <p className="text-gray-600 mb-4">Warping can also result from heat reflecting off windows, grills, or dark surfaces. Once siding warps, it typically can&apos;t be fixed, and the affected panels must be replaced. We identify the cause and correct installation issues to prevent recurrence.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $200-800 depending on number of panels and cause of warping.</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-bold text-secondary mb-3">Warping Causes</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Nailed too tightly</li>
                    <li>&#8226; Heat from reflections</li>
                    <li>&#8226; Dark colors absorbing heat</li>
                    <li>&#8226; Improper fastening</li>
                    <li>&#8226; Nearby heat sources</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Water Damage &amp; Rot Repair</h3>
                  <p className="text-gray-600 mb-4">Water intrusion behind siding causes serious problems: rot in wood siding and sheathing, mold growth, pest infestations, and structural damage. Jacksonville&apos;s humidity makes these problems develop quickly once water finds its way in.</p>
                  <p className="text-gray-600 mb-4">Water damage repair involves more than replacing visible siding. We inspect the underlying sheathing for rot, check for mold, and identify how water entered. Repairs address the root cause (often failed flashing around windows, doors, or penetrations), not just the symptoms.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $500-2,000+ depending on extent of damage and whether sheathing replacement is needed.</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-bold text-secondary mb-3">Water Entry Points</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Failed window/door flashing</li>
                    <li>&#8226; Gaps at penetrations</li>
                    <li>&#8226; Cracked caulk joints</li>
                    <li>&#8226; Missing or damaged J-channel</li>
                    <li>&#8226; Improperly overlapped panels</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Impact Damage &amp; Holes</h3>
                  <p className="text-gray-600 mb-4">Siding gets damaged from impacts: lawn equipment throwing rocks, sports activities, ladder leans, and vehicle bumps. Vinyl siding is particularly susceptible to cracking on impact, especially in cold weather when it becomes more brittle.</p>
                  <p className="text-gray-600 mb-4">Holes and cracks allow water, pests, and air infiltration. Even small damage should be repaired promptly. We can often patch minor holes with color-matched repair kits, while larger damage requires panel replacement. We match your existing siding for seamless repairs.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $100-400 for minor repairs, $300-800 for panel replacements.</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-bold text-secondary mb-3">Impact Damage Types</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Holes from projectiles</li>
                    <li>&#8226; Cracks from impacts</li>
                    <li>&#8226; Dents in metal siding</li>
                    <li>&#8226; Chips in fiber cement</li>
                    <li>&#8226; Gouges from contact</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Repair Costs in Jacksonville</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Transparent pricing with detailed estimates before work begins.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 text-center">
              <p className="font-bold text-secondary mb-2">Minor Repairs</p>
              <p className="text-3xl font-bold text-primary mb-2">$150 - $500</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Hole and crack patches</li>
                <li>&#8226; 1-3 panel replacements</li>
                <li>&#8226; Re-securing loose panels</li>
                <li>&#8226; Caulk and sealant repairs</li>
              </ul>
            </div>
            <div className="card p-6 text-center border-2 border-primary">
              <p className="font-bold text-secondary mb-2">Medium Repairs</p>
              <p className="text-3xl font-bold text-primary mb-2">$500 - $1,500</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Multiple panel sections</li>
                <li>&#8226; Corner and trim repairs</li>
                <li>&#8226; Warped section replacement</li>
                <li>&#8226; Flashing corrections</li>
              </ul>
            </div>
            <div className="card p-6 text-center">
              <p className="font-bold text-secondary mb-2">Major Repairs</p>
              <p className="text-3xl font-bold text-primary mb-2">$1,500 - $3,500+</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Storm damage restoration</li>
                <li>&#8226; Water damage repairs</li>
                <li>&#8226; Sheathing replacement</li>
                <li>&#8226; Full wall sections</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-center text-sm">Prices are estimates. Actual costs depend on siding type, damage extent, and material availability. Storm damage is often covered by insurance.</p>
        </div>
      </section>

      {/* Signs You Need Repair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Signs Your Siding Needs Repair</h2>
              <p className="text-gray-600 mb-6">Look for these warning signs that indicate your siding needs professional attention:</p>
              <ul className="space-y-3">
                {signs.map((sign) => (
                  <li key={sign} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-600">{sign}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/siding-installation-worker-ladder.webp" alt="Siding repair in progress in Jacksonville FL" title="Siding repair in progress in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">When to Repair vs When to Replace</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Making the right decision between repair and replacement saves money and protects your home. Explore our <Link href="/services/siding-installation" className="text-primary hover:underline">siding installation in Jacksonville FL</Link> page if you&apos;re weighing full replacement.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-green-600 mb-4">Repair Makes Sense When:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">&#10003;</span>
                  <span><strong>Damage is localized</strong> - If only a small section is affected (like from an impact or isolated storm damage), repair is cost-effective.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">&#10003;</span>
                  <span><strong>Siding is under 10-15 years old</strong> - Newer siding in good overall condition is worth repairing rather than replacing prematurely.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">&#10003;</span>
                  <span><strong>You can find matching materials</strong> - If we can source matching or very similar siding, repairs will look seamless.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">&#10003;</span>
                  <span><strong>Repair costs are under 25% of replacement</strong> - When repair costs approach a quarter of full replacement, repairs still make financial sense.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">&#10003;</span>
                  <span><strong>Storm damage with insurance</strong> - If insurance covers the damage, repair is typically the appropriate scope.</span>
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-bold text-red-600 mb-4">Replace Is Better When:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">&#10007;</span>
                  <span><strong>Damage is widespread</strong> - Multiple problem areas across your home suggest the siding has reached end of life.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">&#10007;</span>
                  <span><strong>Siding is 15-20+ years old</strong> - Older siding near end of lifespan may not be worth investing in repairs.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">&#10007;</span>
                  <span><strong>Matching materials are unavailable</strong> - If repairs will look noticeably different, replacement provides better curb appeal.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">&#10007;</span>
                  <span><strong>Structural damage exists</strong> - If sheathing is compromised in multiple areas, replacement allows proper correction.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">&#10007;</span>
                  <span><strong>Energy efficiency is poor</strong> - New siding with proper insulation provides energy savings that offset cost.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Not sure which option is right for you? We provide honest assessments during our free inspections.</p>
            <Link href="/services/siding-installation" className="text-primary font-semibold hover:underline">Learn about siding replacement &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Siding Repair Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We make siding repairs straightforward with a proven process.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <p className="font-bold text-secondary mb-2">Inspection</p>
              <p className="text-gray-600 text-sm">We inspect your siding thoroughly, identify all damage (visible and underlying), and discuss repair options with you.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <p className="font-bold text-secondary mb-2">Material Matching</p>
              <p className="text-gray-600 text-sm">We source matching or compatible siding materials. For older siding, we check multiple suppliers to find the best match.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <p className="font-bold text-secondary mb-2">Repair</p>
              <p className="text-gray-600 text-sm">We remove damaged sections, inspect and repair underlying issues, and install new siding with proper technique.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <p className="font-bold text-secondary mb-2">Cleanup</p>
              <p className="text-gray-600 text-sm">We clean up all debris, inspect the completed work, and ensure you&apos;re satisfied with the repair.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Siding Types We Repair */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Types We Repair</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our crews are experienced with all siding materials used on Jacksonville homes, from vinyl siding repair to fiber cement patching.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Vinyl Siding</h3>
              <p className="text-gray-600 text-sm">The most common siding in Jacksonville. We repair cracks, holes, warping, and storm damage. Color matching can be challenging with older vinyl that has faded.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Fiber Cement (Hardie Board)</h3>
              <p className="text-gray-600 text-sm">Durable but can crack from impacts. We repair chips, cracks, and moisture damage. Proper painting ensures repairs blend seamlessly.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Wood Siding</h3>
              <p className="text-gray-600 text-sm">Susceptible to rot in Jacksonville&apos;s humidity. We replace rotted boards, treat for insects, and refinish to match existing siding.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Engineered Wood</h3>
              <p className="text-gray-600 text-sm">Can swell if damaged. We repair damage before moisture spreads and replace severely affected panels with matching materials.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Aluminum Siding</h3>
              <p className="text-gray-600 text-sm">Dents easily but rarely cracks. We can sometimes reshape minor dents. Severe damage requires panel replacement.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Stucco</h3>
              <p className="text-gray-600 text-sm">Common in Florida. We repair cracks, holes, and water damage. Proper texture matching is essential for invisible repairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Repair Service Areas in Northeast Florida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide siding repair across Duval, St. Johns, Clay, and Nassau counties, including <Link href="/roofing-jacksonville-fl" className="text-primary hover:underline">Jacksonville</Link> and the surrounding beaches.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`Siding Repair in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Repair FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Need Siding Repair?</h2>
          <p className="text-secondary/80 mb-6">Get a free estimate for your siding repair project today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
