import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "New Construction Roofing - Gimo's Roofing" },
  description: "New construction roofing from Gimo's Roofing. Shingle, metal, and tile roof installation for builders, custom homes, and production homes. Call (904) 606-5313.",
  openGraph: {
    title: "New Construction Roofing - Gimo's Roofing",
    description: "New construction roof installation for builders and custom homes. Shingle, metal, and tile. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/services/new-construction-roofing",
  },
  alternates: { canonical: "https://www.gimosroofing.com/services/new-construction-roofing" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const phone = "(904) 606-5313"

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
)

const benefits = [
  { title: "Built from Scratch", description: "Your new home deserves a roof installed right the first time. We work from bare framing to finished product." },
  { title: "Builder Coordination", description: "We coordinate seamlessly with your general contractor and other trades to keep your project on schedule." },
  { title: "Code Compliance", description: "We ensure your new roof meets all current Florida building codes and hurricane requirements." },
  { title: "Warranty Protection", description: "Full manufacturer warranties on materials plus our workmanship guarantee for complete peace of mind." }
]

const roofTypes = [
  { name: "Asphalt Shingles", description: "The most popular choice for new construction. Affordable, durable, and available in many colors and architectural styles.", lifespan: "25-30 years", features: ["Cost-effective", "Wide color selection", "Architectural styles", "Quick installation"] },
  { name: "Metal Roofing", description: "Premium choice for new Florida homes. Standing seam and metal tiles provide superior hurricane protection and energy efficiency.", lifespan: "50-70 years", features: ["Hurricane rated", "Energy efficient", "Low maintenance", "Modern aesthetics"] },
  { name: "Tile Roofing", description: "Classic choice for Mediterranean and Spanish-style new construction. Concrete and clay tiles add timeless beauty.", lifespan: "50+ years", features: ["Fire resistant", "Timeless appeal", "Highly durable", "Increases home value"] }
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
  { question: "When should roofing be installed during new construction?", answer: "Roofing is typically installed after the framing is complete and the roof decking is in place, but before interior work begins. We coordinate with your builder to ensure proper timing and protect the structure from weather." },
  { question: "Do you work with home builders and general contractors?", answer: "Yes! We regularly partner with home builders and general contractors throughout Jacksonville. We understand construction schedules and coordinate our work to keep your project on track." },
  { question: "What roofing materials are best for new construction in Florida?", answer: "For Florida's climate, we recommend asphalt architectural shingles for budget-friendly projects, metal roofing for maximum durability and energy efficiency, or tile for a classic Florida aesthetic." },
  { question: "Does new construction roofing include gutters?", answer: "Gutter installation can be included in your roofing package. We install seamless aluminum gutters that complement your new roof and provide proper drainage." },
  { question: "How much does new construction roofing cost?", answer: "New construction roofing costs vary by material: Asphalt shingles run $4-7 per sq ft, metal roofing $8-15 per sq ft, and tile $10-20 per sq ft. For a 2,000 sq ft roof, expect $8,000-14,000 for shingles, $16,000-30,000 for metal, or $20,000-40,000 for tile." },
  { question: "How long does new construction roof installation take?", answer: "Most new construction roofs take 1-3 days depending on size and material. Shingle roofs are fastest (1-2 days), metal takes 2-3 days, and tile can take 3-5 days. We coordinate timing with your builder's schedule." },
  { question: "Do you handle permits for new construction roofing?", answer: "For new construction, the general contractor typically handles the overall building permit which includes roofing. We coordinate with your builder on inspections and ensure all work meets code requirements." },
  { question: "What warranties come with new construction roofing?", answer: "New construction roofs include manufacturer material warranties (25-50 years depending on material) plus our 5-10 year workmanship warranty. As certified installers, we can offer enhanced warranty coverage." },
  { question: "Can you install solar-ready roofing?", answer: "Yes, we can prepare your new roof for future solar installation. This includes reinforced mounting areas, proper flashing provisions, and conduit pathways. Planning ahead saves money if you add solar later." },
  { question: "Do you provide roofing for custom homes?", answer: "Absolutely. We specialize in custom home roofing with complex designs, multiple roof lines, and premium materials. We work closely with architects and builders to execute your vision." }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/new-construction-roofing#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/services/new-construction-roofing",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/new-construction-roofing#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "New Construction Roofing", "item": "https://www.gimosroofing.com/services/new-construction-roofing" }
  ]
}

export default function NewConstructionRoofingPage() {
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
                <span className="text-primary">New Construction Roofing</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">New Construction Roofing - Builders &amp; Custom Homes</h1>
              <p className="text-lg text-gray-200 mb-6">
                Building a new home nearby? As a trusted new construction roofer Jacksonville builders rely on, Gimo&apos;s Roofing partners with builders and custom home owners across Duval, St. Johns, Clay, and Nassau counties to install quality roofing systems from bare decking to finished roof.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">{phone}</a>
              </div>
            </div>
            <div className="space-y-3">
              <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
                <Image src="/images/new-roof-installation-blue-house-florida.webp" alt="New construction roofing in Jacksonville FL" title="New construction roofing in Jacksonville FL" fill className="object-cover" priority />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl aspect-[4/3] overflow-hidden shadow-lg relative">
                  <Image src="/images/new-roof-company.webp" alt="New home roof installation Jacksonville" title="New home roof installation in Jacksonville" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="rounded-xl aspect-[4/3] overflow-hidden shadow-lg relative">
                  <Image src="/images/metal-roof-construction-site.webp" alt="Metal roof new construction jobsite" title="Metal roof new construction in Jacksonville" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
              </div>
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

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Why Choose Us for New Construction Roofing</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Gimo&apos;s Roofing delivers new construction roofing in Jacksonville FL that meets Florida Building Code, stays on your builder&apos;s schedule, and is backed by full manufacturer warranties. Our crews handle everything from framing sign-off through final inspection.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="card p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <p className="font-bold text-secondary mb-2">{benefit.title}</p>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Roofing Materials Overview */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roofing Materials for New Construction</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the perfect roofing material for your new home. Unsure which system fits best? Our <Link href="/blog/best-roofing-materials-florida" className="text-primary hover:underline">best roofing materials for Florida guide</Link> breaks down every option.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {roofTypes.map((type) => (
              <div key={type.name} className="card p-6">
                <h3 className="text-xl font-bold text-secondary mb-2">{type.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                <p className="text-primary font-semibold mb-3">Lifespan: {type.lifespan}</p>
                <ul className="space-y-2">
                  {type.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Materials */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Choosing the Right Material for Your New Home</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Understanding the details of each roofing material helps you make the best decision for your new construction project.</p>
          </div>

          <div className="space-y-8">
            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Asphalt Shingles for New Construction</h3>
                  <p className="text-gray-600 mb-4">Asphalt shingles remain the most popular choice for new home construction in Jacksonville, covering approximately 80% of new residential roofs. Modern architectural shingles (also called dimensional or laminate shingles) offer attractive profiles that mimic wood shakes or slate at a fraction of the cost.</p>
                  <p className="text-gray-600 mb-4">For new construction, we recommend GAF, Owens Corning, or CertainTeed architectural shingles with minimum 130 mph wind ratings. As a certified <Link href="/" className="text-primary hover:underline">Jacksonville roofing company</Link>, we install using manufacturer-required 6-nail patterns and starter strips to ensure warranty coverage and hurricane performance.</p>
                  <p className="text-gray-600"><strong>New construction cost:</strong> $4-7 per square foot, or $8,000-14,000 for typical homes.</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-bold text-secondary mb-3">Shingle Options</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; 3-Tab: Budget option, basic look</li>
                    <li>&#8226; Architectural: Most popular, dimensional appearance</li>
                    <li>&#8226; Designer: Premium look, mimics natural materials</li>
                    <li>&#8226; Impact Resistant: Insurance discounts available</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Metal Roofing for New Construction</h3>
                  <p className="text-gray-600 mb-4">Metal roofing is increasingly popular for new Jacksonville homes, offering unmatched durability and hurricane performance. Standing seam metal roofs are rated for winds up to 180 mph and can last 50-70 years with minimal maintenance. Learn more in our <Link href="/blog/benefits-metal-roofing-florida" className="text-primary hover:underline">benefits of metal roofing in Florida</Link> guide.</p>
                  <p className="text-gray-600 mb-4">For new construction, metal provides several advantages: superior energy efficiency (reflects heat to reduce cooling costs by 10-25%), potential insurance discounts, and no future replacement during your ownership. Metal is available in numerous colors and profiles to match any architectural style.</p>
                  <p className="text-gray-600"><strong>New construction cost:</strong> $8-15 per square foot, or $16,000-30,000 for typical homes.</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-bold text-secondary mb-3">Metal Options</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Standing Seam: Premium, concealed fasteners</li>
                    <li>&#8226; Metal Shingles: Traditional appearance</li>
                    <li>&#8226; Steel: Most economical</li>
                    <li>&#8226; Aluminum: Best for coastal homes</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="card p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Tile Roofing for New Construction</h3>
                  <p className="text-gray-600 mb-4">Tile roofing provides a distinctive Mediterranean or Spanish aesthetic that&apos;s popular in upscale Jacksonville communities. Concrete and clay tiles can last 50-100 years, making them a true lifetime investment for your new home.</p>
                  <p className="text-gray-600 mb-4">New construction is the ideal time to choose tile because the roof structure can be designed to support the additional weight (900-1,200 lbs per 100 sq ft). Retrofitting tile onto an existing home often requires expensive structural reinforcement.</p>
                  <p className="text-gray-600"><strong>New construction cost:</strong> $10-20 per square foot, or $20,000-40,000 for typical homes.</p>
                </div>
                <div className="card p-6">
                  <h4 className="font-bold text-secondary mb-3">Tile Options</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; Concrete: More affordable, many profiles</li>
                    <li>&#8226; Clay: Premium, traditional Mediterranean</li>
                    <li>&#8226; Barrel/S-Tile: Classic Spanish style</li>
                    <li>&#8226; Flat Tile: Modern, clean appearance</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Construction Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">New Construction Roofing Process</h2>
              <p className="text-gray-600">Here&apos;s how we work with builders and homeowners to ensure your new roof is installed correctly from the start.</p>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/new-roof-company.webp" alt="New construction roofing in Jacksonville FL" title="New construction roofing in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <p className="font-bold text-secondary mb-2">Planning &amp; Design</p>
              <p className="text-gray-600 text-sm">We review blueprints with your builder, discuss material options, and provide detailed estimates. For complex roofs, we coordinate on structural requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <p className="font-bold text-secondary mb-2">Scheduling</p>
              <p className="text-gray-600 text-sm">We coordinate with your builder&apos;s timeline. Roofing typically happens after framing and decking, before interior work begins. We&apos;re flexible to keep your project on schedule.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <p className="font-bold text-secondary mb-2">Installation</p>
              <p className="text-gray-600 text-sm">We install underlayment, flashing, and roofing materials to manufacturer specifications. Every detail matters, from nail patterns to valley integration.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <p className="font-bold text-secondary mb-2">Inspection &amp; Warranty</p>
              <p className="text-gray-600 text-sm">We coordinate required inspections, ensure code compliance, and register manufacturer warranties. You receive all documentation for your records.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Builder Partnership */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Builder &amp; Contractor Partnerships</h2>
              <p className="text-gray-600 mb-6">We work with home builders and general contractors throughout Jacksonville. Our reliability, quality work, and professional coordination make us a trusted partner for new construction projects, including communities across our <Link href="/roofing-nocatee-fl" className="text-primary hover:underline">Nocatee service area</Link>.</p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">&#10003;</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Reliable Scheduling</h3>
                    <p className="text-gray-600 text-sm">We show up when scheduled and complete work on time. Construction delays cost money, so we understand the importance of keeping your project moving.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">&#10003;</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Clean Job Sites</h3>
                    <p className="text-gray-600 text-sm">We clean up daily and leave your site ready for other trades. No debris, no delays, no complaints from neighbors.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">&#10003;</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Professional Communication</h3>
                    <p className="text-gray-600 text-sm">Your project manager gets direct communication. Updates, scheduling, and any issues are handled promptly and professionally.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">&#10003;</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Volume Pricing</h3>
                    <p className="text-gray-600 text-sm">Builders working on multiple homes can take advantage of volume pricing. We offer competitive rates for ongoing partnerships.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">We Work With</h3>
              <ul className="space-y-3 text-gray-600 mb-6">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Custom home builders</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Production builders</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> General contractors</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Developers</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Property managers</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Homeowners building custom</li>
              </ul>
              <div className="border-t pt-6">
                <p className="text-sm text-gray-600 mb-4">Interested in partnering with us on new construction projects?</p>
                <a href="tel:+19046065313" className="btn btn-primary w-full text-center">Call {phone}</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Florida Building Code */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Florida Building Code Compliance</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Florida has some of the strictest building codes in the nation for roofing. We ensure your new roof meets all requirements.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Wind Resistance</h3>
              <p className="text-gray-600 text-sm">Florida Building Code requires roofing materials and installation methods rated for your specific wind zone. Jacksonville requires minimum 130 mph wind ratings with proper nail patterns, which helps your new home avoid the need for <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency roof repair in Jacksonville FL</Link> after hurricane season.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Underlayment</h3>
              <p className="text-gray-600 text-sm">Florida requires specific underlayment types and installation methods. We use code-compliant synthetic underlayment with proper lap requirements and fastening.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Flashing</h3>
              <p className="text-gray-600 text-sm">Proper flashing at all roof penetrations, valleys, and transitions is critical in Florida&apos;s climate. We follow manufacturer and code requirements for all flashing details.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Permits &amp; Inspections</h3>
              <p className="text-gray-600 text-sm">All new construction roofing requires permits and inspections. We coordinate with building officials and ensure all work passes inspection.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">We provide NOA (Notice of Acceptance) documentation for materials used, proving code compliance for your records and potential insurance requirements.</p>
            </div>
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-2">Energy Code</h3>
              <p className="text-gray-600 text-sm">Florida energy code may require specific roof materials or colors in some areas. We advise on requirements and help you choose compliant options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">New Construction Roofing Service Areas in Northeast Florida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We install new construction roofing across Duval, St. Johns, Clay, and Nassau counties. If you need work on an existing roof instead, see our <Link href="/services/roof-replacement" className="text-primary hover:underline">roof replacement service</Link>.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`New Construction Roofing in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
                      <span className="block text-sm font-semibold text-secondary group-hover:text-secondary">{area.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">New Construction Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about roofing options and making the best choice for your new home.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/best-roofing-materials-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Best Roofing Materials for Florida</h3>
              <p className="text-gray-600 text-sm">Compare shingles, metal, tile, and other options for Florida&apos;s climate.</p>
            </Link>
            <Link href="/blog/benefits-metal-roofing-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Benefits of Metal Roofing</h3>
              <p className="text-gray-600 text-sm">Why metal roofing is an excellent choice for new Florida homes.</p>
            </Link>
            <Link href="/services/roof-replacement" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Replacement Services</h3>
              <p className="text-gray-600 text-sm">Information about our roof replacement services for existing homes.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Gimo&apos;s Roofing Answers</span>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">New Construction Roofing FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Building a New Home?</h2>
          <p className="text-secondary/80 mb-6">Get a free estimate for your new construction roofing project.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
