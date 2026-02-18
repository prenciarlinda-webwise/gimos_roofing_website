import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Siding Repair Jacksonville FL - Fast Vinyl Siding Repair",
  description: "Reliable siding repair in Jacksonville FL. Vinyl siding repair, storm damage & section replacement services. Free estimates: (904) 606-5313.",
  keywords: ["siding repair jacksonville fl", "vinyl siding repair", "siding replacement jacksonville", "storm damage siding repair", "siding contractors near me"],
  alternates: { canonical: "https://www.gimosroofing.com/services/siding-repair" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

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

const faqs = [
  { question: "Can you match my existing siding color?", answer: "In most cases, yes. We carry a wide range of siding colors and can often find exact or very close matches. For older siding, we may source from specialty suppliers or recommend replacing larger sections for uniformity." },
  { question: "How quickly can you repair storm damage?", answer: "For emergency storm damage, we offer priority scheduling. We can typically assess damage within 24-48 hours and begin repairs as soon as materials are available." },
  { question: "Is it better to repair or replace my siding?", answer: "It depends on the extent of damage and siding age. Small areas of damage on newer siding are worth repairing. Extensive damage or aging siding (15+ years) may be more cost-effective to replace entirely." },
  { question: "Do you work with insurance for siding repairs?", answer: "Yes, we regularly work with insurance companies on storm damage claims. We can document damage and provide detailed estimates for your insurance claim." },
  { question: "How much does siding repair cost in Jacksonville?", answer: "Minor repairs (patching holes, replacing a few panels) typically cost $150-500. Medium repairs (larger sections, multiple areas) run $500-1,500. Major repairs involving significant damage may cost $1,500-3,500+. Storm damage is often covered by insurance." },
  { question: "How long does siding repair take?", answer: "Most repairs are completed in 1-2 days. Simple repairs like replacing a few panels can be done in a few hours. More extensive damage requiring multiple sections may take 2-3 days." },
  { question: "Will repaired siding match the rest of my house?", answer: "New siding panels will match in style and profile, but color can be challenging with older homes. Existing siding fades over time. We discuss options upfront - sometimes replacing a larger section or adding color-matching treatments provides better results." },
  { question: "What if my siding is discontinued?", answer: "We have access to specialty suppliers and can often find discontinued patterns. If not, we can replace sections with similar profiles or recommend strategic partial replacement that looks natural." },
  { question: "Do you repair all types of siding?", answer: "Yes, we repair vinyl, fiber cement (Hardie board), wood, engineered wood, and aluminum siding. Each material requires different techniques - our crews are experienced with all types." },
  { question: "Can siding repair fix my water intrusion problem?", answer: "Often yes, if the damage is localized. We assess the underlying cause - sometimes flashing or house wrap also needs attention. We repair the root cause, not just the visible damage." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Siding Repair Jacksonville FL",
  "description": "Professional siding repair services in Jacksonville, Florida. Storm damage repair, section replacement, and more.",
  "url": "https://www.gimosroofing.com/services/siding-repair",
  "provider": {
    "@type": "HomeAndConstructionBusiness",
    "name": "Gimo's Roofing",
    "telephone": "+1-904-606-5313",
    "url": "https://www.gimosroofing.com",
    "logo": "https://www.gimosroofing.com/gimos-roofing-logo.webp",
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
    "priceRange": "$$"
  },
  "areaServed": {
    "@type": "City",
    "name": "Jacksonville",
    "addressRegion": "FL"
  },
  "serviceType": "Siding Repair",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "150",
      "maxPrice": "3500",
      "priceCurrency": "USD"
    }
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
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Siding Repair", "item": "https://www.gimosroofing.com/services/siding-repair" }
  ]
}

export default function SidingRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
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
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Siding Repair Jacksonville FL - Vinyl & Storm Damage</h1>
              <p className="text-lg text-gray-200 mb-6">
                Expert siding repairs to restore your home&apos;s protection and curb appeal. We fix damage from storms, age, and everyday wear with quality materials and craftsmanship.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/siding-project-closeup.webp" alt="Siding repair project in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Repair Types Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Repair Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We handle all types of siding repairs to keep your home protected.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {repairTypes.map((repair) => (
              <div key={repair.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-secondary mb-2">{repair.title}</h3>
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
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Storm Damage Repair</h3>
                  <p className="text-gray-600 mb-4">Jacksonville&apos;s severe weather - hurricanes, thunderstorms, and high winds - takes a toll on siding. Storm damage can range from minor dents and scratches to complete panel blow-offs. Flying debris during storms often punctures siding, creating entry points for water and pests.</p>
                  <p className="text-gray-600 mb-4">We respond quickly to storm damage, providing temporary protection if needed and permanent repairs once conditions allow. We document all damage thoroughly for insurance claims and work directly with adjusters to ensure you receive fair coverage.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> Varies widely based on damage extent. Insurance typically covers storm damage minus your deductible.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
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

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Warped & Buckled Siding Repair</h3>
                  <p className="text-gray-600 mb-4">Warped, buckled, or bulging siding is a common problem in Jacksonville, often caused by improper installation or extreme heat. Vinyl siding must be installed with room to expand and contract - if nailed too tightly, it can&apos;t move with temperature changes and buckles.</p>
                  <p className="text-gray-600 mb-4">Warping can also result from heat reflecting off windows, grills, or dark surfaces. Once siding warps, it typically can&apos;t be fixed - the affected panels must be replaced. We identify the cause and correct installation issues to prevent recurrence.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $200-800 depending on number of panels and cause of warping.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
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

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Water Damage & Rot Repair</h3>
                  <p className="text-gray-600 mb-4">Water intrusion behind siding causes serious problems: rot in wood siding and sheathing, mold growth, pest infestations, and structural damage. Jacksonville&apos;s humidity makes these problems develop quickly once water finds its way in.</p>
                  <p className="text-gray-600 mb-4">Water damage repair involves more than replacing visible siding. We inspect the underlying sheathing for rot, check for mold, and identify how water entered. Repairs address the root cause - often failed flashing around windows, doors, or penetrations - not just the symptoms.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $500-2,000+ depending on extent of damage and whether sheathing replacement is needed.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
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

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Impact Damage & Holes</h3>
                  <p className="text-gray-600 mb-4">Siding gets damaged from impacts: lawn equipment throwing rocks, sports activities, ladder leans, and vehicle bumps. Vinyl siding is particularly susceptible to cracking on impact, especially in cold weather when it becomes more brittle.</p>
                  <p className="text-gray-600 mb-4">Holes and cracks allow water, pests, and air infiltration. Even small damage should be repaired promptly. We can often patch minor holes with color-matched repair kits, while larger damage requires panel replacement. We match your existing siding for seamless repairs.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $100-400 for minor repairs, $300-800 for panel replacements.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
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
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Minor Repairs</h3>
              <p className="text-3xl font-bold text-primary mb-2">$150 - $500</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Hole and crack patches</li>
                <li>&#8226; 1-3 panel replacements</li>
                <li>&#8226; Re-securing loose panels</li>
                <li>&#8226; Caulk and sealant repairs</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-2 border-primary">
              <h3 className="font-bold text-secondary mb-2">Medium Repairs</h3>
              <p className="text-3xl font-bold text-primary mb-2">$500 - $1,500</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Multiple panel sections</li>
                <li>&#8226; Corner and trim repairs</li>
                <li>&#8226; Warped section replacement</li>
                <li>&#8226; Flashing corrections</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Major Repairs</h3>
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
              <Image src="/images/siding-installation-worker-ladder.webp" alt="Siding repair in progress" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs Replace */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">When to Repair vs When to Replace</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Making the right decision between repair and replacement saves money and protects your home.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8">
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

            <div className="bg-white rounded-xl shadow-md p-8">
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
              <h3 className="font-bold text-secondary mb-2">Inspection</h3>
              <p className="text-gray-600 text-sm">We inspect your siding thoroughly, identify all damage (visible and underlying), and discuss repair options with you.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-bold text-secondary mb-2">Material Matching</h3>
              <p className="text-gray-600 text-sm">We source matching or compatible siding materials. For older siding, we check multiple suppliers to find the best match.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-bold text-secondary mb-2">Repair</h3>
              <p className="text-gray-600 text-sm">We remove damaged sections, inspect and repair underlying issues, and install new siding with proper technique.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="font-bold text-secondary mb-2">Cleanup</h3>
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
            <p className="text-gray-600 max-w-3xl mx-auto">Our crews are experienced with all siding materials used on Jacksonville homes.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Vinyl Siding</h3>
              <p className="text-gray-600 text-sm">The most common siding in Jacksonville. We repair cracks, holes, warping, and storm damage. Color matching can be challenging with older vinyl that has faded.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Fiber Cement (Hardie Board)</h3>
              <p className="text-gray-600 text-sm">Durable but can crack from impacts. We repair chips, cracks, and moisture damage. Proper painting ensures repairs blend seamlessly.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Wood Siding</h3>
              <p className="text-gray-600 text-sm">Susceptible to rot in Jacksonville&apos;s humidity. We replace rotted boards, treat for insects, and refinish to match existing siding.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Engineered Wood</h3>
              <p className="text-gray-600 text-sm">Can swell if damaged. We repair damage before moisture spreads and replace severely affected panels with matching materials.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Aluminum Siding</h3>
              <p className="text-gray-600 text-sm">Dents easily but rarely cracks. We can sometimes reshape minor dents. Severe damage requires panel replacement.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Stucco</h3>
              <p className="text-gray-600 text-sm">Common in Florida. We repair cracks, holes, and water damage. Proper texture matching is essential for invisible repairs.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Frequently Asked Questions</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Related Services & Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Explore our other exterior services and helpful guides for Jacksonville homeowners.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/siding-installation" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Siding Installation</h3>
              <p className="text-gray-600 text-sm">Complete siding replacement and new installation services with vinyl, fiber cement, and more.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Repair Services</h3>
              <p className="text-gray-600 text-sm">Expert roof repairs for leaks, storm damage, and general wear to complement your siding project.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Emergency Roof Repair</h3>
              <p className="text-gray-600 text-sm">24/7 emergency service for storm damage to your roof and siding. Same-day response.</p>
            </Link>
            <Link href="/blog/storm-damage-roofing-insurance" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Storm Damage Insurance Guide</h3>
              <p className="text-gray-600 text-sm">Learn how to document damage and navigate insurance claims for siding and roof repairs.</p>
            </Link>
            <Link href="/financing" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Financing Options</h3>
              <p className="text-gray-600 text-sm">Make your siding repair affordable with our flexible financing programs.</p>
            </Link>
            <Link href="/service-areas" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Service Areas</h3>
              <p className="text-gray-600 text-sm">We provide siding repair throughout Jacksonville and Northeast Florida.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Need Siding Repair?</h2>
          <p className="text-secondary/80 mb-6">Get a free estimate for your siding repair project today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
