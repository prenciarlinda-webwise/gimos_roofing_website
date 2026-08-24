import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Metal Roofing in Jacksonville FL - Gimo's Roofing" },
  description: "Metal roofing in Jacksonville FL from Gimo's Roofing. Standing seam, 5V crimp, and metal shingles rated for 140+ mph wind and 40-70 years. Call (904) 606-5313.",
  openGraph: {
    title: "Metal Roofing in Jacksonville FL - Standing Seam & More - Gimo's Roofing",
    description: "Standing seam and metal shingle roofing built for Florida wind, sun, and salt air. 40-70 year lifespan and wind-mitigation credits. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/services/metal-roofing",
    images: ["https://www.gimosroofing.com/images/green-metal-roof-residential.webp"],
  },
  alternates: { canonical: "https://www.gimosroofing.com/services/metal-roofing" },
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
  { question: "How much does a metal roof cost in Florida?", answer: "Installed metal roofing in the Jacksonville area generally runs about $9 to $16 per square foot, or roughly $900 to $1,600 per roofing square (100 square feet). Exposed-fastener panels like 5V crimp and corrugated sit at the lower end. Standing seam, with its concealed clips and factory finishes, sits at the higher end. Final price depends on roof size, pitch, number of penetrations, tear-off of the old roof, and the metal and coating you choose. We give a firm written quote after a free inspection." },
  { question: "How long does a metal roof last in Florida?", answer: "A properly installed metal roof in Northeast Florida typically lasts 40 to 70 years. Standing seam and aluminum systems near the coast reach the upper end of that range, while exposed-fastener steel panels need fastener and gasket checks to hit 40-plus years. By comparison, asphalt shingles in Jacksonville's heat and humidity usually last 15 to 25 years, so a metal roof is often the last roof you buy for the home." },
  { question: "Does a metal roof attract lightning?", answer: "No. Metal roofing does not attract or increase the chance of a lightning strike. Lightning is drawn to the tallest path to ground regardless of roofing material. If a metal roof is struck, the metal is non-combustible and spreads the energy across a wide surface, which makes it safer than wood or asphalt that can ignite. Metal is considered one of the safer roofing choices in storm-prone Florida." },
  { question: "Is a metal roof noisy when it rains?", answer: "Not on a modern home. Metal panels installed over solid roof decking, underlayment, and attic insulation are about as quiet as any other roof in a rainstorm. The loud drumming people remember comes from old barn-style metal laid over open purlins with nothing underneath. Our residential installs include decking and underlayment, so rain noise is not a practical concern." },
  { question: "Metal roof or shingles, which is better in Jacksonville?", answer: "It depends on budget and how long you plan to own the home. Asphalt shingles cost less up front and are quick to install. Metal costs more initially but lasts two to three times longer, resists 140-plus mph wind, reflects heat to cut cooling costs, and can qualify for insurance wind-mitigation credits. For homeowners staying long term or those near the coast at the Beaches, Ponte Vedra, or Fernandina, metal usually wins on lifetime value." },
  { question: "Will a metal roof lower my insurance or earn wind-mitigation credits?", answer: "Often, yes. Florida insurers offer wind-mitigation credits for roofs with strong wind ratings, secondary water barriers, and approved attachment methods. A metal roof installed to current Florida Building Code, documented on a wind-mitigation inspection form, can reduce the windstorm portion of your premium. Credits vary by carrier and policy, so confirm specifics with your insurance agent. We provide the documentation your inspector needs." },
  { question: "What is the difference between standing seam and exposed-fastener metal roofing?", answer: "Standing seam panels lock together with raised seams and hidden clips, so no fasteners penetrate the surface where water flows. That makes it the most weathertight and the longest-lasting option, with a clean modern look. Exposed-fastener panels, such as 5V crimp and corrugated, screw directly through the metal into the deck. They cost less and install faster, but the rubber-gasket screws need periodic checking as they age. Both perform well in Florida when installed correctly." },
  { question: "Does metal roofing hold up to hurricanes and salt air on the coast?", answer: "Yes, when the right metal is specified. Properly engineered metal roofs carry wind ratings of 140 mph and higher, which suits Jacksonville's hurricane exposure. Near salt water at the Beaches, Ponte Vedra Beach, and Fernandina Beach, we recommend aluminum or premium coated systems because aluminum does not rust and resists salt corrosion far better than bare steel. We match the metal and finish to how close your home sits to the coast." },
  { question: "Can I get a metal roof on a flat or low-slope roof?", answer: "Yes. Low-slope and flat sections need a different approach than steep slopes. We use mechanically seamed standing seam or a flat metal system designed for low-pitch drainage rather than exposed-fastener panels, which require more slope to shed water. Many Jacksonville homes mix a steep main roof with low-slope additions, and we detail the transitions so they stay watertight." },
  { question: "Do you offer financing for a metal roof?", answer: "Yes. Because metal is a larger up-front investment than shingles, we offer financing with fixed monthly payments through our lending partner so you can spread the cost over time. Many homeowners use financing to upgrade to metal for the longer lifespan and energy savings rather than replacing shingles again in 15 to 20 years. Ask about current terms when you request your free estimate." },
  { question: "What are the drawbacks of a metal roof?", answer: "The main drawbacks are higher up-front cost (roughly $9 to $16 per square foot versus $4.50 to $8 for shingles), the need for installers experienced in metal so panels seal and expand correctly, and some added noise in heavy rain that proper underlayment and decking largely solve. Minor denting is possible from large hail. For most Jacksonville homeowners the 40 to 70 year lifespan, wind resistance, and energy savings outweigh these trade-offs." },
  { question: "How much does a metal roof cost on a 1,200 square foot house?", answer: "A 1,200 square foot home usually has a bit more roof area than floor area, so figure roughly 1,300 to 1,600 square feet of roof. At about $9 to $16 per installed square foot, a metal roof on that size home typically runs about $14,000 to $25,000 depending on the profile (exposed-fastener is lower, standing seam is higher), pitch, and tear-off. We provide a written, itemized quote after measuring your roof." },
  { question: "Can you install a metal roof over existing shingles?", answer: "In some cases metal can go over one existing layer of shingles using a furring or batten system, which saves on tear-off cost. However, in Florida we usually recommend a full tear-off so we can inspect and replace any damaged decking, install a proper sealed underlayment, and meet Florida Building Code wind requirements. We will tell you which approach your roof qualifies for during the inspection." }
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/metal-roofing#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Metal Roofing", "item": "https://www.gimosroofing.com/services/metal-roofing" }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/metal-roofing#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/services/metal-roofing",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function MetalRoofingPage() {
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
                <span className="text-primary">Metal Roofing</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Metal Roofing in Jacksonville FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                Searching for metal roofing Jacksonville FL homeowners can trust? Gimo&apos;s Roofing installs and replaces standing seam, 5V crimp, corrugated, and stone-coated metal shingle roofs across Duval, St. Johns, Clay, and Nassau counties. A metal roof built for Northeast Florida resists 140-plus mph wind, lasts 40 to 70 years, and reflects heat to cut cooling costs. We are FL licensed, CertainTeed Certified, and every estimate is free.
              </p>
              <ul className="text-gray-200 mb-6 space-y-2">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Wind ratings of 140-plus mph for hurricane country</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> 40 to 70 year lifespan, often a lifetime roof</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Energy-reflective finishes that lower cooling bills</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> May qualify for Florida wind-mitigation insurance credits</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/green-metal-roof-residential.webp" alt="Green standing seam metal roof on a residential home in Jacksonville FL" title="Residential metal roof in Jacksonville FL" fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-secondary text-center">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="font-bold">Upgrade to a roof that can outlast the home. Ask about <Link href="/roof-financing-florida" className="underline hover:no-underline">metal roof financing</Link> with fixed monthly payments.</span>
            </div>
            <span className="hidden md:block">/</span>
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
              <span className="text-gray-300">/</span>
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

      {/* Metal Roof Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Types of Metal Roofing We Install</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">As a locally owned <Link href="/" className="text-primary hover:underline">Jacksonville roofing company</Link>, Gimo&apos;s Roofing installs every major metal roof system used in Northeast Florida, whether you&apos;re replacing an existing roof or building new. Builders and custom home owners often choose metal for <Link href="/services/new-construction-roofing" className="text-primary hover:underline">new construction roofing</Link> projects because of its durability and hurricane performance. The right choice depends on your roof pitch, budget, how close you live to salt water, and the look you want. Here are the metal roofing options we install and replace most often.</p>
          </div>

          <div className="space-y-8">
            {/* Standing Seam */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Standing Seam Metal Roof</h3>
                  <p className="text-gray-600 mb-4">Standing seam is the premium metal roof system. Vertical panels lock together with raised seams and concealed clips, so no fasteners penetrate the surface where water runs. That makes it the most weathertight metal roof you can buy and the longest lasting, with a clean modern look that suits both contemporary and coastal Jacksonville homes.</p>
                  <p className="text-gray-600 mb-4">We install standing seam in steel and aluminum with factory-applied finishes. For homes near salt water at the Beaches, Ponte Vedra Beach, and Fernandina Beach, we typically specify aluminum because it does not rust. Standing seam also handles low-slope sections that exposed-fastener panels cannot.</p>
                  <p className="text-gray-600 mb-4"><strong>Best for:</strong> Long-term homeowners, coastal properties, and anyone wanting the most durable roof with the fewest future maintenance points.</p>
                  <p className="text-gray-600">For real installed pricing and an honest breakdown of when it is and isn&apos;t worth the extra cost, see our <Link href="/blog/standing-seam-metal-roof-pros-cons" className="text-primary hover:underline">standing seam metal roof pros and cons</Link> guide.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Standing Seam Strengths</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; No exposed fasteners to fail</li>
                    <li>&#8226; 50 to 70 year lifespan</li>
                    <li>&#8226; Handles low-slope roofs</li>
                    <li>&#8226; Wide range of factory colors</li>
                    <li>&#8226; Highest resale appeal</li>
                    <li>&#8226; Excellent salt-air option in aluminum</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Metal Shingles / Stone-Coated */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Metal Shingles and Stone-Coated Metal</h3>
                  <p className="text-gray-600 mb-4">Metal shingles, including stone-coated steel, give you the strength and lifespan of metal with the appearance of asphalt shingles, wood shake, or clay tile. They are a strong choice in neighborhoods with HOA appearance rules or for homeowners who want a traditional look without giving up metal performance.</p>
                  <p className="text-gray-600 mb-4">Stone-coated panels carry a textured granule surface bonded to a steel core, which softens the metallic look and adds sound dampening. They install in interlocking sections that resist high wind and shed Florida&apos;s heavy summer rain.</p>
                  <p className="text-gray-600"><strong>Best for:</strong> Homeowners who want metal durability with the curb appeal of shingle or tile, including HOA-governed subdivisions in Mandarin, San Marco, and Nocatee.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Profiles Available</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Shake-look stone-coated steel</li>
                    <li>&#8226; Tile-look metal panels</li>
                    <li>&#8226; Shingle-look metal</li>
                    <li>&#8226; Concealed-fastener interlock</li>
                    <li>&#8226; Granule-coated finishes</li>
                    <li>&#8226; Multiple color blends</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 5V Crimp */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">5V Crimp Metal Panels</h3>
                  <p className="text-gray-600 mb-4">5V crimp is a classic Florida exposed-fastener metal panel, named for the five-rib crimp pattern along each sheet. It is a familiar look on older Jacksonville homes, St. Augustine cottages, and rural Clay and Nassau county properties. Panels screw directly into the deck with gasketed fasteners.</p>
                  <p className="text-gray-600 mb-4">5V crimp costs less than standing seam and installs faster, which makes it a practical, durable choice on steeper roofs. The trade-off is the exposed fasteners, whose rubber gaskets should be checked periodically as the roof ages so the seal stays tight.</p>
                  <p className="text-gray-600"><strong>Best for:</strong> Budget-conscious metal upgrades, traditional Florida and historic St. Augustine looks, and steeper roof pitches.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">5V Crimp at a Glance</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Lower cost than standing seam</li>
                    <li>&#8226; Fast installation</li>
                    <li>&#8226; Traditional Florida appearance</li>
                    <li>&#8226; 40-plus year lifespan</li>
                    <li>&#8226; Exposed gasketed fasteners</li>
                    <li>&#8226; Needs periodic fastener checks</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Corrugated */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Corrugated Metal Panels</h3>
                  <p className="text-gray-600 mb-4">Corrugated metal uses a repeating wavy profile that adds rigidity and sheds water well. It is the most economical metal panel and a popular pick for garages, workshops, barns, patios, and budget-minded home roofs across the Jacksonville metro and surrounding Clay and Nassau county properties.</p>
                  <p className="text-gray-600 mb-4">Like 5V crimp, corrugated is an exposed-fastener system, so we install it with quality gasketed screws and recommend periodic inspections. Choose galvanized or coated steel inland and aluminum near the coast for the best corrosion resistance.</p>
                  <p className="text-gray-600"><strong>Best for:</strong> Outbuildings, additions, and cost-driven metal roofs where budget matters more than premium finish.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Corrugated at a Glance</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Most economical metal option</li>
                    <li>&#8226; Strong, rigid wavy profile</li>
                    <li>&#8226; Good for outbuildings</li>
                    <li>&#8226; Galvanized or coated steel</li>
                    <li>&#8226; Aluminum option for coast</li>
                    <li>&#8226; Exposed fasteners</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits in Florida */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Why Metal Roofing Makes Sense in Jacksonville</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Northeast Florida is one of the toughest climates in the country for a roof. Hurricane-season wind, intense UV, roughly 50 inches of rain a year, high humidity, and coastal salt air all attack roofing materials. Metal is built to handle every one of those forces, which is why so many Jacksonville homeowners upgrade to it.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Wind Resistance for Hurricane Country</h3>
              <p className="text-gray-600 mb-3">Jacksonville sits in the hurricane zone, and the Florida Building Code sets strict wind-load requirements for Duval, St. Johns, Clay, and Nassau counties. Properly engineered metal roofs carry wind ratings of 140 mph and higher, and standing seam systems with concealed clips perform especially well because there are no exposed tabs for wind to catch and lift.</p>
              <p className="text-gray-600">We install every metal roof to current Florida Building Code with the attachment methods inspectors look for, so your roof is documented and ready for storm season.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">40 to 70 Year Lifespan</h3>
              <p className="text-gray-600 mb-3">Asphalt shingles in Jacksonville&apos;s heat and humidity typically last 15 to 25 years. A metal roof lasts 40 to 70 years, so it commonly outlives two or three shingle roofs. For many homeowners, metal is the last roof the home will ever need, which changes the math on the higher up-front cost.</p>
              <p className="text-gray-600">Standing seam and aluminum reach the upper end of that range, while exposed-fastener steel panels reach 40-plus years with routine fastener maintenance.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Energy Efficiency and Reflectivity</h3>
              <p className="text-gray-600 mb-3">Metal roofing with a reflective or cool-roof finish bounces solar heat away instead of absorbing it like dark asphalt. In Florida&apos;s long cooling season, that can lower attic temperatures and cut cooling costs by roughly 10 to 25 percent depending on color, finish, and attic ventilation.</p>
              <p className="text-gray-600">With summer highs regularly above 90 degrees Fahrenheit in Jacksonville, a cooler attic also reduces strain on your air conditioning system and helps it last longer.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Insurance and Wind-Mitigation Credits</h3>
              <p className="text-gray-600 mb-3">Florida insurers reward storm-resistant roofs. A metal roof installed to code, with a documented wind rating, secondary water barrier, and approved attachment, can qualify for wind-mitigation credits that reduce the windstorm portion of your premium. Credits vary by carrier, so confirm with your agent.</p>
              <p className="text-gray-600">We provide the documentation your wind-mitigation inspector needs so you can claim every credit your new roof earns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Metal vs Shingles */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Metal Roof vs Asphalt Shingles in Florida</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">The choice between metal and shingles comes down to up-front budget versus lifetime value. Here is how the two stack up in the Jacksonville climate so you can decide what fits your home and how long you plan to own it.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div className="card overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-secondary text-white">
                    <th className="p-3 text-left font-bold">Factor</th>
                    <th className="p-3 text-left font-bold">Metal roof</th>
                    <th className="p-3 text-left font-bold">Asphalt shingles</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b border-gray-200"><td className="p-3 font-semibold text-secondary">Lifespan</td><td className="p-3">40 to 70 years</td><td className="p-3">15 to 25 years</td></tr>
                  <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-semibold text-secondary">Installed cost</td><td className="p-3">$9 to $16 per sq ft</td><td className="p-3">$4 to $8 per sq ft</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-3 font-semibold text-secondary">Wind rating</td><td className="p-3">140-plus mph</td><td className="p-3">110 to 130 mph</td></tr>
                  <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-semibold text-secondary">Energy efficiency</td><td className="p-3">Reflects heat, cool-roof finishes</td><td className="p-3">Absorbs heat</td></tr>
                  <tr className="border-b border-gray-200"><td className="p-3 font-semibold text-secondary">Insurance credits</td><td className="p-3">Often qualifies</td><td className="p-3">Limited</td></tr>
                  <tr className="border-b border-gray-200 bg-gray-50"><td className="p-3 font-semibold text-secondary">Maintenance</td><td className="p-3">Low, periodic fastener checks</td><td className="p-3">Moderate, more repairs over time</td></tr>
                  <tr><td className="p-3 font-semibold text-secondary">Salt-air resistance</td><td className="p-3">Excellent in aluminum</td><td className="p-3">Fair, granule loss near coast</td></tr>
                </tbody>
              </table>
            </div>
            <div>
              <p className="text-gray-600 mb-4">Asphalt shingles cost less to install and remain the most common roof on Jacksonville homes. If you plan to sell within a few years or your budget is tight today, a quality shingle roof is a sound choice, and we install those too.</p>
              <p className="text-gray-600 mb-4">Metal costs more up front but pays back over time through a longer lifespan, lower cooling bills, stronger wind performance, and potential insurance credits. For homeowners staying long term or living near salt water at the Beaches, Ponte Vedra, or Fernandina Beach, metal usually wins on lifetime value.</p>
              <p className="text-gray-600 mb-4">Either way, we give you honest numbers for both. If you want a full breakdown of replacing your current roof, see our <Link href="/services/roof-replacement" className="text-primary hover:underline">roof replacement</Link> service, and if you only need to fix what you have, our <Link href="/services/roof-repair" className="text-primary hover:underline">Jacksonville FL roof repair</Link> team can help.</p>
              <Link href="/services/roof-replacement" className="text-primary font-semibold hover:underline">Compare full roof replacement options &rarr;</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Metal Roof Installation Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">A metal roof is only as good as its installation. Florida wind and rain expose every shortcut, so we follow a careful, code-driven process on every project from the first inspection to final cleanup.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
              <p className="font-bold text-secondary mb-2">Inspection and design</p>
              <p className="text-gray-600 text-sm">We inspect your roof, measure it, check pitch and decking, and recommend the metal system and color that fits your home, location, and budget. You get a detailed written estimate.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
              <p className="font-bold text-secondary mb-2">Tear-off and deck prep</p>
              <p className="text-gray-600 text-sm">We remove the old roof, inspect the decking, and replace any rotted or soft wood. A sound deck is critical for the fastener and clip attachment a metal roof depends on.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
              <p className="font-bold text-secondary mb-2">Underlayment and panels</p>
              <p className="text-gray-600 text-sm">We install a high-temperature underlayment as a secondary water barrier, then set panels or shingles with the correct clips, fasteners, and flashing for a watertight, code-compliant roof.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">4</div>
              <p className="font-bold text-secondary mb-2">Inspection and cleanup</p>
              <p className="text-gray-600 text-sm">We detail ridges, valleys, and penetrations, clean the site with magnetic sweeps for stray fasteners, and provide documentation for your warranty and wind-mitigation inspection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Cost Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Metal Roof Cost in Florida</h2>
              <p className="text-gray-600 mb-4">Installed metal roofing in the Jacksonville area generally runs about $9 to $16 per square foot, or roughly $900 to $1,600 per roofing square (100 square feet). Where your project lands in that range depends mostly on the metal system you choose and the complexity of your roof.</p>
              <p className="text-gray-600 mb-4">Exposed-fastener systems like 5V crimp and corrugated sit at the lower end. Standing seam, with its concealed clips and factory finishes, sits at the higher end and costs more to fabricate and install. Stone-coated metal shingles fall in between.</p>
              <p className="text-gray-600 mb-4">Other factors that move the price include roof size and pitch, the number of valleys and penetrations, whether the old roof needs a full tear-off, decking repairs, and the metal and coating you select. Aluminum, recommended near salt water, costs more than steel.</p>
              <p className="text-gray-600">We do not quote a one-size-fits-all number. After a free inspection you get a firm written price with no surprises, plus financing options so the investment fits your monthly budget.</p>
            </div>
            <div className="space-y-4">
              <div className="card p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-secondary">5V Crimp and Corrugated</h3>
                  <span className="text-primary font-bold">$9 - $12 / sq ft</span>
                </div>
                <p className="text-gray-600 text-sm">Exposed-fastener panels. The most budget-friendly way into a metal roof.</p>
              </div>
              <div className="card p-6">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-secondary">Stone-Coated Metal Shingles</h3>
                  <span className="text-primary font-bold">$11 - $14 / sq ft</span>
                </div>
                <p className="text-gray-600 text-sm">Metal performance with a shingle, shake, or tile look for HOA-friendly curb appeal.</p>
              </div>
              <div className="card p-6 border-2 border-primary">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-bold text-secondary">Standing Seam</h3>
                  <span className="text-primary font-bold">$13 - $16 / sq ft</span>
                </div>
                <p className="text-gray-600 text-sm">Concealed-fastener premium system. The most weathertight and longest-lasting choice.</p>
              </div>
              <p className="text-gray-600 text-sm text-center">Ranges are estimates for typical Jacksonville homes. Aluminum, steep pitches, and complex roofs increase cost. We provide free inspections and firm written quotes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Maintenance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative order-2 lg:order-1">
              <Image src="/images/flat-metal-roof-installation.webp" alt="Flat metal roof installation on a Jacksonville FL property" title="Metal roof installation in Jacksonville FL" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Metal Roof Maintenance</h2>
              <p className="text-gray-600 mb-4">One of the biggest advantages of metal is how little it asks of you. There are no granules to lose and no shingles to curl. Still, a few simple steps keep a Florida metal roof performing for decades.</p>
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-secondary">Check Exposed Fasteners</h3>
                  <p className="text-gray-600 text-sm">On 5V crimp and corrugated roofs, have the gasketed screws inspected every few years. Rubber washers can dry out in the UV and may need tightening or replacement to keep the seal tight.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-secondary">Keep It Clean Near the Coast</h3>
                  <p className="text-gray-600 text-sm">Homes near salt water at the Beaches, Ponte Vedra, and Fernandina benefit from an occasional fresh-water rinse to clear salt buildup, which protects the finish and slows corrosion.</p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h3 className="font-bold text-secondary">Clear Debris and Check After Storms</h3>
                  <p className="text-gray-600 text-sm">Remove leaves and branches from valleys and gutters, and schedule a post-storm inspection after any named system so small issues get caught early.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Financing Your Metal Roof</h2>
              <p className="text-gray-600 mb-4">A metal roof is a larger up-front investment than shingles, but it can be the last roof your home ever needs. Financing lets you capture that long-term value now instead of replacing a shingle roof again in 15 to 20 years.</p>
              <p className="text-gray-600 mb-4">We offer financing with fixed monthly payments through our lending partner, so you can spread the cost of a standing seam or metal shingle roof over a comfortable term. Many Jacksonville homeowners use financing to upgrade to metal and start saving on cooling costs right away.</p>
              <p className="text-gray-600 mb-4">When you request a free estimate, ask about current terms. Storm-related roof replacement may also be covered by your homeowners insurance, and we help document and file those claims.</p>
              <Link href="/roof-financing-florida" className="text-primary font-semibold hover:underline">Explore roof financing options &rarr;</Link>
            </div>
            <div className="bg-primary/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Why Finance a Metal Roof</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Upgrade to metal without a large up-front outlay</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Fixed, predictable monthly payments</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Start saving on cooling costs immediately</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Avoid paying for another shingle roof in 15 years</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Insurance may cover storm-related replacement</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <p className="text-gray-600 text-sm">FL License #CCC1332453. CertainTeed Certified. Free estimates on every metal roof project. Call {phone} to get started.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Coastal / Salt Air callout with construction-site image */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Built for the Northeast Florida Coast</h2>
              <p className="text-gray-600 mb-4">Salt air is hard on roofs. Homes within a few miles of the Atlantic and the Intracoastal at Jacksonville Beach, Atlantic Beach, Neptune Beach, Ponte Vedra Beach, and Fernandina Beach face constant salt exposure that corrodes bare steel and metal fasteners faster than inland properties.</p>
              <p className="text-gray-600 mb-4">For coastal homes we specify aluminum standing seam or premium coated systems that resist salt corrosion, paired with stainless or coated fasteners. The result is a metal roof engineered for the exact conditions at your address, not a generic spec.</p>
              <p className="text-gray-600 mb-4">Inland in Mandarin, Riverside, San Marco, Orange Park, and Nocatee, galvanized and coated steel deliver excellent value while still standing up to UV, roughly 50 inches of annual rain, and hurricane-season wind.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/roofing-jacksonville-beach-fl" className="text-primary font-semibold hover:underline">Jacksonville Beach roofing &rarr;</Link>
                <Link href="/roofing-ponte-vedra-beach-fl" className="text-primary font-semibold hover:underline">Ponte Vedra Beach roofing &rarr;</Link>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/metal-roof-construction-site.webp" alt="Metal roof panels being installed at a Jacksonville FL construction site" title="Metal roof construction in Jacksonville FL" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Metal Roofing Service Areas in Northeast Florida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We install and replace metal roofs across Duval, St. Johns, Clay, and Nassau counties.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`Metal Roofing in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Metal Roofing FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Related Roofing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Comparing options or not sure metal is right for your home? Explore our other services.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/roof-replacement" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Replacement</h3>
              <p className="text-gray-600 text-sm">Full tear-off and replacement in metal, shingle, or tile with code-compliant installation.</p>
            </Link>
            <Link href="/services/roof-repair" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Repair</h3>
              <p className="text-gray-600 text-sm">Leak, shingle, and flashing repair with same-day service for Jacksonville homeowners.</p>
            </Link>
            <Link href="/roof-financing-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Financing</h3>
              <p className="text-gray-600 text-sm">Fixed monthly payments that make upgrading to a metal roof fit your budget.</p>
            </Link>
            <Link href="/roofing-jacksonville-fl" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roofing in Jacksonville</h3>
              <p className="text-gray-600 text-sm">Our full roofing services for homeowners across Duval County and the metro.</p>
            </Link>
            <Link href="/roofing-st-augustine-fl" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roofing in St. Augustine</h3>
              <p className="text-gray-600 text-sm">Metal and traditional roofing for historic St. Johns County homes.</p>
            </Link>
            <Link href="/roofing-fernandina-beach-fl" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roofing in Fernandina Beach</h3>
              <p className="text-gray-600 text-sm">Salt-air-resistant metal roofing for coastal Nassau County properties.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Metal Roofing Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about metal roofing costs, lifespan, and how it compares to asphalt shingles in Florida.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/benefits-metal-roofing-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Benefits of Metal Roofing</h3>
              <p className="text-gray-600 text-sm">Why metal is one of the best long-term roofing investments for Florida homes.</p>
            </Link>
            <Link href="/blog/metal-roof-vs-shingles-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Metal Roof vs Shingles</h3>
              <p className="text-gray-600 text-sm">A full cost and durability comparison between metal and asphalt shingle roofing.</p>
            </Link>
            <Link href="/blog/how-long-do-metal-roofs-last-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">How Long Metal Roofs Last</h3>
              <p className="text-gray-600 text-sm">Real-world lifespan, maintenance needs, and ROI for a metal roof in Florida&apos;s climate.</p>
            </Link>
            <Link href="/blog/roof-warranty-guide-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Warranty Guide</h3>
              <p className="text-gray-600 text-sm">What manufacturer and workmanship warranties actually cover, and what can void them.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Ready for a Metal Roof That Lasts Decades?</h2>
          <p className="text-secondary/80 mb-6">Get a free inspection and a firm written estimate for standing seam, metal shingle, or panel roofing. FL Licensed and CertainTeed Certified.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100">Apply for Financing</a>
          </div>
        </div>
      </section>
    </>
  )
}
