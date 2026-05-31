import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roof Repair - Gimo's Roofing" },
  description: "Professional roof repair from Gimo's Roofing. Leak repair, shingle repair, roof flashing repair, and storm damage repair with same-day service. Call (904) 606-5313.",
  openGraph: {
    title: "Roof Repair - Gimo's Roofing",
    description: "Fast roof repair for leaks, shingles, and flashing. Same-day service and insurance help. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/services/roof-repair",
  },
  alternates: { canonical: "https://www.gimosroofing.com/services/roof-repair" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
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
  { question: "How quickly can you repair my roof?", answer: "For emergencies like active leaks, we offer same-day or next-day service. Standard repairs are typically scheduled within 2-5 business days of your inspection. Our response time depends on current demand and weather conditions." },
  { question: "What is the most common roof repair?", answer: "Roof flashing repair and shingle replacement are the most common services we perform. About 80% of roof leaks occur around penetrations like chimneys, vents, and skylights where flashing has failed. Shingle damage from wind and age is the second most common issue." },
  { question: "How much does roof repair cost in Jacksonville?", answer: "Minor repairs typically cost $150-$600, including small leak patches and replacing a few shingles. Medium repairs run $600-$1,500 for larger areas or flashing work. Major repairs can cost $1,500-$3,500+ depending on extent of damage and materials needed." },
  { question: "Is it worth repairing an old roof?", answer: "It depends on roof age and damage extent. If your roof is under 15 years old with localized damage, repairs make sense. If it's over 20 years with multiple problem areas, replacement is often more cost-effective long-term. We provide honest assessments." },
  { question: "Do you work with insurance companies?", answer: "Yes. We work with all major insurance companies on storm damage claims. We document damage thoroughly, provide detailed estimates, and can meet with adjusters on-site. We've helped hundreds of Jacksonville homeowners navigate the claims process." },
  { question: "What if you find more damage during the repair?", answer: "We contact you immediately before proceeding. We'll show you photos, explain the additional damage, and provide a revised estimate. We never do extra work without your explicit approval." },
  { question: "How long do roof repairs last?", answer: "Quality repairs using proper materials and techniques typically last 10-20+ years. The longevity depends on the type of repair, materials used, and exposure to weather. We warranty our workmanship for a minimum of 5 years." },
  { question: "Can you repair my roof in the rain?", answer: "We don't perform repairs during active rain for safety and quality reasons. However, we can install emergency tarps to prevent further damage until conditions allow permanent repairs. We monitor weather closely and schedule accordingly." },
  { question: "Do I need to be home during the repair?", answer: "No. As long as we can access your property, you don't need to be present. We'll document everything with photos and contact you when complete. Many customers prefer this as repairs can be noisy." },
  { question: "Will my roof repair be permitted?", answer: "Minor repairs typically don't require permits in Jacksonville. For larger repairs involving structural work or significant material replacement, we pull all necessary permits and schedule required inspections." },
  { question: "What's the difference between a patch and a proper repair?", answer: "A patch is a temporary fix using sealant or tar. A proper repair involves removing damaged materials, addressing underlying issues, installing new materials correctly, and ensuring waterproof integrity. We do proper repairs, not patches." },
  { question: "Can you match my existing shingles?", answer: "In most cases, yes. We stock common shingle colors and can order specific matches. However, existing shingles fade over time, so a perfect match isn't always possible. We'll discuss options during your estimate." },
  { question: "How much does it cost to fix a roof leak in Jacksonville?", answer: "Most roof leak repairs in Jacksonville fall between about $400 and $1,500, depending on the source of the leak, roof height and pitch, and how much underlying decking or flashing is damaged. Minor flashing or pipe-boot repairs sit at the low end, while widespread water damage costs more. We trace the leak to its source and give a firm price before starting." },
  { question: "How can I get my roof repaired if I have no money?", answer: "You have options. Storm or sudden-event damage is often covered by homeowners insurance, and we help document and file the claim. For out-of-pocket repairs, we offer financing with low monthly payments so you can stop the damage now and pay over time, rather than letting a small leak become a costly structural problem." }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/roof-repair#service",
  "@type": "Service",
  "name": "Roof Repair in Jacksonville FL",
  "serviceType": "Roof Repair",
  "description": "Professional roof repair in Jacksonville FL for leaks, damaged shingles, flashing failures, and storm damage across Duval, St. Johns, Clay, and Nassau counties.",
  "url": "https://www.gimosroofing.com/services/roof-repair",
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
    "name": "Roof Repair Options",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Leak Repair", "description": "Same-day roof leak repair tracing leaks to source and replacing failed materials." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Shingle Roof Repair", "description": "Replacement of cracked, curled, missing, and wind-damaged shingles with matching materials." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Flashing Repair", "description": "Chimney, vent, skylight, and wall-transition flashing repair using correct overlap and sealants." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Storm Damage Roof Repair", "description": "Hurricane, wind, and hail damage repair with insurance claim assistance." } }
    ]
  }

}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/roof-repair#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Roof Repair", "item": "https://www.gimosroofing.com/services/roof-repair" }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/roof-repair#faq",
  "@type": "FAQPage",
  "about": { "@id": "https://www.gimosroofing.com/services/roof-repair#service" },
  "mainEntityOfPage": "https://www.gimosroofing.com/services/roof-repair",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function RoofRepairPage() {
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
                <span className="text-primary">Roof Repair</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Roof Repair - Leaks, Shingles &amp; Flashing</h1>
              <p className="text-lg text-gray-200 mb-6">
                Looking for Jacksonville roof repair nearby? Gimo&apos;s Roofing fixes roof leaks, damaged shingles, and failed flashing across Duval, St. Johns, Clay, and Nassau counties. Same-day emergency response is available for roof repair Jacksonville homeowners need fast, and most repairs are completed in one visit with materials we stock on our trucks.
              </p>
              <ul className="text-gray-200 mb-6 space-y-2">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Licensed, insured, and locally owned</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Same-day emergency response available</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Free inspections and honest assessments</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> 5-year workmanship warranty on all repairs</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-repair-in-progress-jacksonville.webp" alt="Roof repair in progress in Jacksonville FL" title="Roof repair in progress in Jacksonville FL" fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Banner */}
      <section className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-secondary text-center">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span className="font-bold">Active leak? We offer <Link href="/services/emergency-roof-repair" className="underline hover:no-underline">24/7 emergency roof repair</Link> with same-day tarping.</span>
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

      {/* Repair Types - Expanded */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Repair Services We Provide</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Gimo&apos;s Roofing delivers Jacksonville FL roof repair and roofing repair Jacksonville FL homeowners trust for every common issue, from minor shingle replacements to complex flashing repairs. Whether you need roof leak repair Jacksonville FL or a full section replacement, our crews carry materials on their trucks for same-day service across Northeast Florida whenever possible.</p>
          </div>

          <div className="space-y-8">
            {/* Leak Repair */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Roof Leak Repair</h3>
                  <p className="text-gray-600 mb-4">Roof leaks are the most urgent repair we handle. Water intrusion causes progressive damage to insulation, drywall, framing, and can lead to mold growth within 24-48 hours. As a locally owned <Link href="/" className="text-primary hover:underline">Jacksonville roofing company</Link>, we prioritize leak repairs and often complete them the same day you call.</p>
                  <p className="text-gray-600 mb-4">Common leak sources in Jacksonville homes include failed flashing around chimneys and vents, cracked pipe boots, damaged valleys, and wind-lifted shingles. We trace leaks to their source rather than just patching visible damage.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $250-$800 depending on leak location and accessibility. Complex leaks requiring extensive investigation may cost more.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Signs of Roof Leaks</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Water stains on ceilings or walls</li>
                    <li>&#8226; Dripping during or after rain</li>
                    <li>&#8226; Musty odors in attic</li>
                    <li>&#8226; Wet insulation</li>
                    <li>&#8226; Daylight visible through roof boards</li>
                    <li>&#8226; Mold or mildew growth</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Shingle Repair */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Shingle Roof Repair</h3>
                  <p className="text-gray-600 mb-4">Shingle damage is extremely common in Jacksonville due to our combination of intense sun, high humidity, and hurricane-force winds. Damaged shingles expose your roof deck to water and accelerate deterioration of surrounding shingles.</p>
                  <p className="text-gray-600 mb-4">We repair cracked, curled, missing, and wind-damaged shingles. For best results, we replace damaged shingles with matching products rather than using sealants or patches. We stock common shingle colors on our trucks for immediate repairs.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $150-$400 for small areas (1-10 shingles). Larger areas with multiple damaged sections run $400-$1,200.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Shingle Damage Types</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Missing shingles (blown off)</li>
                    <li>&#8226; Cracked or split shingles</li>
                    <li>&#8226; Curling or cupping edges</li>
                    <li>&#8226; Granule loss (bald spots)</li>
                    <li>&#8226; Lifted or unsealed tabs</li>
                    <li>&#8226; Impact damage from debris</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Flashing Repair */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Roof Flashing Repair</h3>
                  <p className="text-gray-600 mb-4">Flashing is the metal material that seals transitions and penetrations in your roof - around chimneys, vents, skylights, and where roof planes meet walls. Failed flashing causes the majority of roof leaks we repair.</p>
                  <p className="text-gray-600 mb-4">Jacksonville&apos;s humidity accelerates flashing deterioration. We see corroded, lifted, and improperly sealed flashing regularly. Proper repair involves removing old caulk and damaged sections, installing new flashing with correct overlap, and sealing with appropriate materials.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $200-$500 for pipe boot or vent flashing. Chimney flashing repair runs $400-$1,500 depending on chimney size and damage extent.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Flashing Locations</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Chimney base and corners</li>
                    <li>&#8226; Plumbing vent pipes</li>
                    <li>&#8226; HVAC penetrations</li>
                    <li>&#8226; Skylights</li>
                    <li>&#8226; Roof-to-wall transitions</li>
                    <li>&#8226; Valleys and ridges</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Storm Damage */}
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Storm Damage Roof Repair</h3>
                  <p className="text-gray-600 mb-4">Living in Jacksonville means dealing with hurricane season, severe thunderstorms, and occasional hail. Storm damage ranges from a few blown-off shingles to extensive structural damage requiring major repairs or full replacement.</p>
                  <p className="text-gray-600 mb-4">After storms, we provide <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency roof repair in Jacksonville FL</Link> including tarping to prevent further damage, thorough damage assessments with photo documentation, detailed estimates for insurance claims, and coordination with adjusters. We&apos;ve helped hundreds of homeowners through the insurance claim process.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> Varies widely based on damage. Insurance typically covers storm damage minus your deductible. We work directly with your insurance company.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Storm Damage Signs</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Missing or displaced shingles</li>
                    <li>&#8226; Dented or cracked shingles (hail)</li>
                    <li>&#8226; Debris impacts and punctures</li>
                    <li>&#8226; Damaged or missing flashing</li>
                    <li>&#8226; Gutters pulled away</li>
                    <li>&#8226; Visible daylight in attic</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Repair Costs in Jacksonville</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Transparent pricing with no surprises. We provide detailed written estimates before any work begins.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Minor Repairs</h3>
              <p className="text-3xl font-bold text-primary mb-2">$150 - $600</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Small leak patches</li>
                <li>&#8226; 1-10 shingle replacement</li>
                <li>&#8226; Single pipe boot replacement</li>
                <li>&#8226; Minor sealant repairs</li>
              </ul>
            </div>
            <div className="card p-6 text-center border-2 border-primary">
              <h3 className="font-bold text-secondary mb-2">Medium Repairs</h3>
              <p className="text-3xl font-bold text-primary mb-2">$600 - $1,500</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Multiple leak repairs</li>
                <li>&#8226; Larger shingle sections</li>
                <li>&#8226; Chimney flashing repair</li>
                <li>&#8226; Valley repairs</li>
              </ul>
            </div>
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Major Repairs</h3>
              <p className="text-3xl font-bold text-primary mb-2">$1,500 - $3,500+</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Extensive storm damage</li>
                <li>&#8226; Large area replacement</li>
                <li>&#8226; Structural repairs</li>
                <li>&#8226; Decking replacement</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-center text-sm">Prices are estimates for typical repairs. Actual costs depend on roof accessibility, materials needed, and damage extent. We provide free inspections and detailed quotes.</p>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Roof Repair Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">We make roof repairs straightforward. From first call to completed repair, here&apos;s what to expect.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
              <p className="font-bold text-secondary mb-2">Contact Us</p>
              <p className="text-gray-600 text-sm">Call (904) 606-5313 or request an estimate online. Describe your issue and we&apos;ll schedule an inspection, often same-day for emergencies.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
              <p className="font-bold text-secondary mb-2">Inspection</p>
              <p className="text-gray-600 text-sm">We inspect your roof thoroughly, identify all damage, take photos, and explain findings. You&apos;ll receive a detailed written estimate with repair options.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
              <p className="font-bold text-secondary mb-2">Repair</p>
              <p className="text-gray-600 text-sm">Once approved, we schedule your repair. Many repairs are completed same-day. We use quality materials and proven techniques for lasting results.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">4</div>
              <p className="font-bold text-secondary mb-2">Follow-Up</p>
              <p className="text-gray-600 text-sm">We clean up completely, provide before/after photos, and explain our warranty. We follow up to ensure your satisfaction with the repair.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Repairs Fail */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Why Roof Repairs Fail</h2>
              <p className="text-gray-600 mb-4">Not all roof repairs are equal. We regularly fix failed repairs done by others. Understanding common mistakes helps you choose the right contractor.</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-secondary">Using Sealant as a Permanent Fix</h3>
                  <p className="text-gray-600 text-sm">Roof sealant is a temporary solution. Proper repairs require replacing damaged materials, not covering them with tar or caulk that cracks and fails within months.</p>
                </div>
                <div>
                  <h3 className="font-bold text-secondary">Not Addressing Root Causes</h3>
                  <p className="text-gray-600 text-sm">Patching where water appears doesn&apos;t fix where water enters. We trace leaks to their actual source, which may be far from visible damage.</p>
                </div>
                <div>
                  <h3 className="font-bold text-secondary">Improper Flashing Installation</h3>
                  <p className="text-gray-600 text-sm">Flashing must be installed with correct overlap and integration with shingles. Shortcuts here cause leaks within months.</p>
                </div>
                <div>
                  <h3 className="font-bold text-secondary">Mismatched Materials</h3>
                  <p className="text-gray-600 text-sm">Using incompatible materials or cheap substitutes leads to premature failure. We use manufacturer-recommended products.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl aspect-square overflow-hidden shadow-xl relative">
              <Image src="/images/residential-roof-inspection-aerial.webp" alt="Professional roof inspection in Jacksonville" title="Professional roof inspection in Jacksonville" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Jacksonville-Specific Challenges */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Why Jacksonville Roofs Need Special Attention</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Northeast Florida&apos;s climate creates unique challenges for residential roofs. Understanding these factors helps you maintain your roof and know when repairs are needed.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Hurricane Season</h3>
              <p className="text-gray-600 mb-3">Jacksonville sits in the hurricane zone with exposure to tropical storms from June through November. High winds can lift shingles, tear off flashing, and drive rain under roofing materials. Even storms that don&apos;t directly hit Jacksonville can cause damage from wind gusts and heavy rain bands.</p>
              <p className="text-gray-600">We recommend pre-season inspections in May and post-storm inspections after any significant weather event. Early detection prevents small issues from becoming major problems.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Humidity and Heat</h3>
              <p className="text-gray-600 mb-3">Jacksonville&apos;s humidity averages 74% year-round, with summer temperatures regularly exceeding 90°F. This combination accelerates roof material degradation, promotes algae and moss growth, and causes expansion/contraction cycles that stress seams and fasteners.</p>
              <p className="text-gray-600">Asphalt shingles in Jacksonville typically last 15-20 years compared to 25-30 years in cooler, drier climates. Regular maintenance extends lifespan significantly.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Salt Air Exposure</h3>
              <p className="text-gray-600 mb-3">Homes near the coast and St. Johns River experience salt air exposure that corrodes metal flashing, fasteners, and vents. This corrosion accelerates in Jacksonville&apos;s humid environment and can cause premature failure of roof components.</p>
              <p className="text-gray-600">We use corrosion-resistant materials for coastal properties and recommend more frequent inspections for homes within 5 miles of salt water.</p>
            </div>

            <div className="card p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Sudden Storms</h3>
              <p className="text-gray-600 mb-3">Summer afternoon thunderstorms are a Jacksonville staple. These storms bring intense rain, lightning, hail, and wind gusts that can exceed 60 mph. Damage often occurs quickly and may not be immediately visible from the ground.</p>
              <p className="text-gray-600">After severe thunderstorms, look for granules in gutters, check for water stains inside, and consider a professional inspection if you suspect damage.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Repair vs Replace Decision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">When to Repair vs When to Replace</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">One of the most important decisions homeowners face is whether to repair their roof or invest in replacement. Here&apos;s how we help you make the right choice.</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card p-8">
              <h3 className="text-xl font-bold text-green-600 mb-4">Repair Makes Sense When:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">&#10003;</span>
                  <span><strong>Roof is under 15 years old</strong> - Younger roofs with localized damage are good candidates for repair. The remaining roof should have years of life left.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">&#10003;</span>
                  <span><strong>Damage is localized</strong> - If problems are confined to one area (like around a chimney or single slope), targeted repairs are cost-effective.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">&#10003;</span>
                  <span><strong>Storm damage with insurance</strong> - Insurance often covers storm damage repairs. With coverage, repairs protect your home without major out-of-pocket expense.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">&#10003;</span>
                  <span><strong>Budget constraints</strong> - Repairs can buy time if replacement isn&apos;t financially feasible right now. We&apos;ll be honest about how long repairs will last.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 mt-1">&#10003;</span>
                  <span><strong>Selling soon</strong> - If you&apos;re selling within 2-3 years, repairs may make more sense than a full replacement, depending on roof condition.</span>
                </li>
              </ul>
            </div>

            <div className="card p-8">
              <h3 className="text-xl font-bold text-red-600 mb-4">Replace Is Better When:</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">&#10007;</span>
                  <span><strong>Roof is 20+ years old</strong> - Older roofs are past their prime. Repairs become a recurring expense as different areas fail in sequence.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">&#10007;</span>
                  <span><strong>Multiple problem areas</strong> - When damage or wear appears across the roof, patching becomes impractical and replacement is more economical.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">&#10007;</span>
                  <span><strong>Repair costs exceed 30% of replacement</strong> - When repairs approach a third of replacement cost, investing in a new roof provides better long-term value.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">&#10007;</span>
                  <span><strong>Structural damage present</strong> - Rotted decking, sagging areas, or compromised trusses require replacement to properly address.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">&#10007;</span>
                  <span><strong>Repeated repairs</strong> - If you&apos;ve had multiple repairs in recent years, your roof is telling you it&apos;s reached end of life.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Not sure which option is right for you? We provide honest assessments and never push replacement when repair is the better choice.</p>
            <Link href="/services/roof-replacement" className="text-primary font-semibold hover:underline">Learn more about roof replacement &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Warranty Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Our Repair Warranty</h2>
              <p className="text-gray-600 mb-4">We stand behind our work. Every roof repair comes with a written warranty covering both materials and workmanship. If a repair we perform fails, we return to fix it at no additional cost.</p>

              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-secondary">5-Year Workmanship Warranty</h3>
                  <p className="text-gray-600 text-sm">All repairs include a minimum 5-year warranty on our labor. If the repair fails due to installation issues, we fix it free.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-secondary">Material Warranties</h3>
                  <p className="text-gray-600 text-sm">Materials carry manufacturer warranties. We use quality products from trusted brands and register warranties on your behalf when applicable.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-bold text-secondary">Transferable Coverage</h3>
                  <p className="text-gray-600 text-sm">Our workmanship warranty transfers to new homeowners if you sell, adding value to your property.</p>
                </div>
              </div>
            </div>
            <div className="bg-primary/10 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">What Our Warranty Covers</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Leaks at repaired areas</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Flashing failures</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Shingle blow-offs at repair sites</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Material defects</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Sealant failures</li>
              </ul>
              <div className="mt-6 pt-6 border-t border-primary/20">
                <h4 className="font-bold text-secondary mb-2">Warranty Exclusions</h4>
                <p className="text-gray-600 text-sm">Warranties don&apos;t cover damage from storms, falling debris, foot traffic by others, or modifications made by other contractors. Pre-existing conditions outside the repair area are also excluded.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Repair Service Areas in Northeast Florida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide roof repair across Duval, St. Johns, Clay, and Nassau counties.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`Roof Repair in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Repair FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Repair Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about roof repairs, when to repair vs replace, and how to handle insurance claims.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/roof-repair-vs-replacement-jacksonville" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Repair vs Replacement</h3>
              <p className="text-gray-600 text-sm">When does repair make sense and when is replacement the better investment?</p>
            </Link>
            <Link href="/blog/roof-leak-repair-guide-jacksonville" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Complete Leak Repair Guide</h3>
              <p className="text-gray-600 text-sm">Everything about finding and fixing roof leaks in Jacksonville homes.</p>
            </Link>
            <Link href="/blog/storm-damage-roofing-insurance" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Storm Damage Insurance Claims</h3>
              <p className="text-gray-600 text-sm">How to document damage and navigate the insurance claim process.</p>
            </Link>
            <Link href="/blog/roof-flashing-types-purposes" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Flashing Guide</h3>
              <p className="text-gray-600 text-sm">Understanding flashing types and why proper repair is critical.</p>
            </Link>
            <Link href="/blog/signs-you-need-new-roof-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Signs You Need a New Roof</h3>
              <p className="text-gray-600 text-sm">Warning signs that indicate your roof needs more than repairs.</p>
            </Link>
            <Link href="/blog/roof-insurance-claim-florida-guide" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Florida Insurance Claim Guide</h3>
              <p className="text-gray-600 text-sm">Step-by-step guide to filing a successful roof insurance claim.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Need a Roof Repair?</h2>
          <p className="text-secondary/80 mb-6">Get a free inspection and detailed estimate. Same-day service available for emergencies.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Free Estimate</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
