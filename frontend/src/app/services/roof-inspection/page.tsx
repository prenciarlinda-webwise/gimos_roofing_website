import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roof Inspection Jacksonville FL - Free Estimates - Gimo's Roofing" },
  description: "Free roof inspections in Jacksonville FL. General, 4-point, wind mitigation, and pre-purchase roof inspections. Licensed, honest assessments. Call (904) 606-5313.",
  openGraph: {
    title: "Roof Inspection Jacksonville FL - Gimo's Roofing",
    description: "Free roof inspections in Jacksonville FL. General, 4-point, wind mitigation, and pre-purchase inspections from a licensed local roofer. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/services/roof-inspection",
    images: ["https://www.gimosroofing.com/images/roof-inspection-project-jacksonville-fl.webp"],
  },
  alternates: { canonical: "https://www.gimosroofing.com/services/roof-inspection" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const financingUrl = 'https://application.enerbank.com/#/link?spnum=8007747598&cid=118584&promo=DEL2625&loamt='
const phone = "(904) 606-5313"

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
)

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
  { question: "Where can I find a roof inspection near me in Jacksonville?", answer: "Gimo's Roofing is a local, FL-licensed roofing contractor (CCC1332453) offering free roof inspections across Jacksonville and Northeast Florida, including Duval, St. Johns, Clay, and Nassau counties. Call (904) 606-5313 or request one online, we typically schedule within a few days." },
  { question: "How much does a roof inspection cost?", answer: "A general roof inspection tied to a repair or replacement estimate is free with Gimo's Roofing. A standalone 4-point inspection or wind mitigation inspection, the kind insurance companies require, typically costs $75 to $150 per report and is performed by a licensed inspector." },
  { question: "What does a roof inspector actually check?", answer: "We check the shingle or roofing surface for cracking, curling, and granule loss, all flashing points (chimneys, vents, skylights, walls), the condition of the decking where visible, gutters and drainage, soffit and fascia, and signs of active or past leaks in the attic. We document everything with photos." },
  { question: "What is a 4-point inspection and do I need one?", answer: "A 4-point inspection evaluates the roof, electrical, plumbing, and HVAC systems and is required by most Florida insurers for homes over 30 years old before they will issue or renew a policy. We perform the roofing portion and can refer you to a licensed inspector for the full 4-point report if needed." },
  { question: "What is a wind mitigation inspection?", answer: "A wind mitigation inspection documents roof shape, roof-to-wall connections, roof deck attachment, and opening protection, features that reduce hurricane damage risk. The report can qualify you for meaningful discounts on Florida homeowners insurance. See our wind mitigation vs 4-point inspection guide below for the full difference." },
  { question: "Should I get a roof inspection before buying a house?", answer: "Yes. A pre-purchase roof inspection tells you the roof's real remaining life, any active leaks, and repair costs before you close, information a general home inspector often glosses over. It is one of the most valuable inspections you can get during a Florida home purchase." },
  { question: "How often should I have my roof inspected?", answer: "We recommend a roof inspection once a year, ideally before hurricane season, plus an inspection after any major storm with high winds or hail. Roofs over 15 years old benefit from more frequent checks as materials age." },
  { question: "Can a roof inspection help with an insurance claim?", answer: "Yes. If we find storm damage during an inspection, we document it thoroughly with photos and a written report you can submit with your insurance claim. We can also meet your adjuster on-site to point out damage that is easy to miss from the ground." },
  { question: "Do you inspect commercial roofs too?", answer: "Yes. We inspect flat and low-slope commercial roofs, TPO, EPDM, and metal systems, for property managers and business owners, including routine maintenance inspections and post-storm damage assessments." }
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/roof-inspection#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Roof Inspection", "item": "https://www.gimosroofing.com/services/roof-inspection" }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/roof-inspection#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/services/roof-inspection",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function RoofInspectionPage() {
  return (
    <>
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
                <span className="text-primary">Roof Inspection</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Roof Inspection - Jacksonville, FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                Looking for a roof inspection near me in Jacksonville? Gimo&apos;s Roofing provides free roof inspections across Duval, St. Johns, Clay, and Nassau counties, plus 4-point, wind mitigation, and pre-purchase inspections. We document everything with photos and give you a straight answer, not a sales pitch.
              </p>
              <ul className="text-gray-200 mb-6 space-y-2">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Free general roof inspections</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> 4-point and wind mitigation reports</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Photo documentation for insurance claims</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Licensed FL CCC1332453, CertainTeed Certified</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Inspection</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-inspection-project-jacksonville-fl.webp" alt="Roof inspection in progress on a Jacksonville FL home" title="Roof inspection in Jacksonville FL" fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-secondary text-center">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold">Free roof inspections and financing available. Ivan, Owner. FL License CCC1332453.</span>
            </div>
            <span className="hidden md:block">|</span>
            <a href="tel:+19046065313" className="font-bold hover:underline">Call Now: {phone}</a>
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
              <a href="https://www.yelp.com/biz/gimos-renovation-and-roofing-jacksonville" target="_blank" rel="noopener" title="View Gimo's Roofing Yelp Reviews">
                <Image src="/yelp-logo.svg" alt="Read Gimo's Roofing reviews on Yelp" title="Yelp Reviews" width={70} height={28} className="h-7 w-auto object-contain" unoptimized />
              </a>
              <a href="https://www.thumbtack.com/fl/jacksonville/roofing/gimos-renovation-roofing/service/478820963508404237" target="_blank" rel="noopener" title="View Gimo's Roofing Thumbtack Reviews">
                <Image src="/thumbtack-logo.svg" alt="Read Gimo's Roofing reviews on Thumbtack" title="Thumbtack Reviews" width={36} height={36} className="h-7 w-auto object-contain" unoptimized />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Get an Inspection */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Why Jacksonville Homeowners Get a Roof Inspection</h2>
              <p className="text-gray-600 mb-4">A roof inspection is the fastest way to find out what is actually going on above your ceiling before it becomes a leak, a denied insurance claim, or a surprise during a home sale. Jacksonville&apos;s combination of heat, humidity, heavy rain, and hurricane season wind puts more stress on a roof than most climates, which is why we recommend an inspection at least once a year.</p>
              <p className="text-gray-600 mb-4">Most inspections we perform fall into one of four situations: buying or selling a home, an insurance requirement (4-point or wind mitigation), after a storm to document damage, or routine maintenance on a roof over 10 years old.</p>
              <p className="text-gray-600 mb-4">Every inspection includes photo documentation, so whether you need it for your own records, an insurance adjuster, or a real estate closing, you walk away with something concrete, not just a verbal opinion.</p>
              <p className="text-gray-600">Searching for a roof cleaning service because of black streaks or algae growth? Start with an inspection instead of booking a cleaning blind. See our guide on <Link href="/blog/roof-cleaning-pros-cons-florida" className="text-primary hover:underline">roof cleaning pros and cons in Florida</Link> to understand when cleaning actually helps versus when it is masking a bigger problem.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">What We Check</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Roofing surface:</strong> Cracking, curling, granule loss, missing or lifted shingles</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Flashing:</strong> Chimneys, vents, skylights, and wall transitions</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Decking:</strong> Soft spots, sagging, or visible damage where accessible</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Gutters and drainage:</strong> Proper flow and attachment</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Attic:</strong> Signs of active or past leaks, ventilation, insulation condition</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Inspections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Types of Roof Inspections We Provide</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Different situations call for different inspections. Here is what each one covers.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">General Roof Inspection</h3>
              <p className="text-gray-600 text-sm">A full visual and physical check of the roof surface, flashing, and attic. Free with any estimate request, the standard inspection for routine maintenance or a suspected leak.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">4-Point Inspection</h3>
              <p className="text-gray-600 text-sm">Required by most Florida insurers for homes over 30 years old before issuing or renewing a policy. Covers the roof, electrical, plumbing, and HVAC. We handle the roofing portion of the report.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Wind Mitigation Inspection</h3>
              <p className="text-gray-600 text-sm">Documents hurricane-resistant features like roof shape, deck attachment, and roof-to-wall connections. Can qualify you for real discounts on Florida homeowners insurance. <Link href="/blog/wind-mitigation-vs-4-point-inspection-florida" className="text-primary hover:underline">See the full comparison</Link>.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Pre-Purchase Inspection</h3>
              <p className="text-gray-600 text-sm">A roof-specific inspection before you close on a home, covering remaining roof life, active leaks, and repair costs, information a general home inspector often only glances at.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Post-Storm Damage Inspection</h3>
              <p className="text-gray-600 text-sm">After wind, hail, or a fallen tree, we inspect and photo-document the damage for your insurance claim, and can meet your adjuster on-site.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Commercial Roof Inspection</h3>
              <p className="text-gray-600 text-sm">Routine and post-storm inspections for flat and low-slope commercial roofs, TPO, EPDM, and metal systems, for property managers and business owners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Inspections */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Recent Roof Inspections in Jacksonville</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">A look at real roof inspections completed across the Jacksonville area.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-inspection-and-repair-near-me-jacksonville-fl.webp" alt="Roof inspection and repair assessment in Jacksonville FL" title="Roof inspection and repair in Jacksonville FL" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-inspection-near-me-jacksonville-fl.webp" alt="Roof inspection near me completed in Jacksonville FL" title="Roof inspection near me in Jacksonville FL" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/aerial-roof-inspection-jacksonville-fl-4.webp" alt="Aerial drone roof inspection in Jacksonville FL" title="Aerial roof inspection in Jacksonville FL" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Pricing + CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto mb-4"><strong>General roof inspections are free with Gimo&apos;s Roofing.</strong> 4-point and wind mitigation reports run $75 to $150. Every inspection includes photo documentation. <a href={estimateUrl} id="cta-snippet-inspection-estimate" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">Schedule a free inspection</a> or call <a href="tel:+19046065313" id="cta-snippet-inspection-call" className="text-primary font-semibold hover:underline">(904) 606-5313</a>.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 text-center border-2 border-primary">
              <h3 className="font-bold text-secondary mb-2">General Inspection</h3>
              <p className="text-3xl font-bold text-primary mb-2">Free</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Full roof and attic check</li>
                <li>&#8226; Photo documentation</li>
                <li>&#8226; Written summary</li>
              </ul>
            </div>
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">4-Point Report</h3>
              <p className="text-3xl font-bold text-primary mb-2">$75 - $150</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Required by most FL insurers</li>
                <li>&#8226; Homes 30+ years old</li>
                <li>&#8226; Roofing portion of the report</li>
              </ul>
            </div>
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Wind Mitigation Report</h3>
              <p className="text-3xl font-bold text-primary mb-2">$75 - $150</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Documents storm-resistant features</li>
                <li>&#8226; Can lower insurance premiums</li>
                <li>&#8226; Pays for itself in most cases</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-center text-sm">If an inspection finds repair or replacement needs, we can move straight into a written estimate, no separate visit required.</p>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Repairs found during an inspection can be financed alongside the rest of your project.</p>
            <Link href="/roof-financing-florida" className="text-primary font-semibold hover:underline">See roofing financing options &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Roof Inspection Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">From scheduling to your written report, here is what to expect.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
              <p className="font-bold text-secondary mb-2">Schedule</p>
              <p className="text-gray-600 text-sm">Call (904) 606-5313 or request online. We typically schedule within a few days, faster for active leaks.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
              <p className="font-bold text-secondary mb-2">On-site inspection</p>
              <p className="text-gray-600 text-sm">We check the roof surface, flashing, gutters, and attic, and photograph everything we find.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
              <p className="font-bold text-secondary mb-2">Written report</p>
              <p className="text-gray-600 text-sm">You get a clear summary of what we found, with photos, whether that's good news or a repair list.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">4</div>
              <p className="font-bold text-secondary mb-2">Next steps</p>
              <p className="text-gray-600 text-sm">If repairs are needed, we provide a firm written estimate. If not, you have documentation for your records or insurer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Inspection Service Areas in Northeast Florida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide roof inspections across Duval, St. Johns, Clay, and Nassau counties, including <Link href="/roofing-southside-jax-fl" className="text-primary hover:underline">Arlington</Link> and every neighborhood listed below.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`Roof Inspection in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Inspection FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Related Roofing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">An inspection is often the first step. Here is what typically comes next.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/roof-repair" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Repair</h3>
              <p className="text-gray-600 text-sm">Fixing the leaks and damage an inspection uncovers, from a single spot repair to full re-flashing.</p>
            </Link>
            <Link href="/services/roof-replacement" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Replacement</h3>
              <p className="text-gray-600 text-sm">When an inspection finds a roof past the point of economical repair, a full replacement with transparent pricing.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Emergency Roof Repair</h3>
              <p className="text-gray-600 text-sm">Active leak or storm damage? We inspect and secure the roof the same day in most cases.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Inspection Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about Florida insurance inspections and what they mean for your roof.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/wind-mitigation-vs-4-point-inspection-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Wind Mitigation vs 4-Point Inspection</h3>
              <p className="text-gray-600 text-sm">What each Florida insurance inspection covers and which one you actually need.</p>
            </Link>
            <Link href="/blog/how-old-is-my-roof" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">How Old Is My Roof?</h3>
              <p className="text-gray-600 text-sm">How to estimate your roof's age and remaining life before your next inspection.</p>
            </Link>
            <Link href="/blog/will-insurance-cover-20-year-old-roof" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Will Insurance Cover a 20-Year-Old Roof?</h3>
              <p className="text-gray-600 text-sm">How roof age affects Florida insurance coverage and what an inspection can prove.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Schedule Your Free Roof Inspection</h2>
          <p className="text-secondary/80 mb-6">A licensed, CertainTeed Certified Jacksonville roofing contractor. FL License CCC1332453.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Free Inspection</a>
            <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100">Apply for Financing</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
