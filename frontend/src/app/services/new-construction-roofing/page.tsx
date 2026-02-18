import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "New Construction Roofing Jacksonville FL - Builder & Custom Home",
  description: "New construction roofing in Jacksonville FL. We work with builders, contractors & custom home owners. Shingle, metal & tile installation. (904) 606-5313.",
  keywords: ["new construction roofing jacksonville fl", "new roof jacksonville fl", "new construction roof installation", "builder roofing contractor jacksonville", "custom home roofing jacksonville"],
  alternates: { canonical: "https://www.gimosroofing.com/services/new-construction-roofing" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

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

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "New Construction Roofing Jacksonville FL",
  "description": "Professional new construction roofing services in Jacksonville, Florida. Expert roofing installation for new home builds.",
  "url": "https://www.gimosroofing.com/services/new-construction-roofing",
  "provider": {
    "@type": "RoofingContractor",
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
  "serviceType": "New Construction Roofing",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "8000",
      "maxPrice": "50000",
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
    { "@type": "ListItem", "position": 3, "name": "New Construction Roofing", "item": "https://www.gimosroofing.com/services/new-construction-roofing" }
  ]
}

export default function NewConstructionRoofingPage() {
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
                <span className="text-primary">New Construction Roofing</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">New Construction Roofing Jacksonville FL - Builders & Custom Homes</h1>
              <p className="text-lg text-gray-200 mb-6">
                Building a new home in Jacksonville? Partner with experienced roofers who understand new construction. We work with builders and homeowners to install quality roofing systems from the ground up.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/new-roof-installation-blue-house-florida.webp" alt="New construction roofing in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Why Choose Us for New Construction</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-bold text-secondary mb-2">{benefit.title}</h3>
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
            <p className="text-gray-600 max-w-2xl mx-auto">Choose the perfect roofing material for your new home.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {roofTypes.map((type) => (
              <div key={type.name} className="bg-white rounded-xl shadow-md p-6">
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
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Asphalt Shingles for New Construction</h3>
                  <p className="text-gray-600 mb-4">Asphalt shingles remain the most popular choice for new home construction in Jacksonville, covering approximately 80% of new residential roofs. Modern architectural shingles (also called dimensional or laminate shingles) offer attractive profiles that mimic wood shakes or slate at a fraction of the cost.</p>
                  <p className="text-gray-600 mb-4">For new construction, we recommend GAF, Owens Corning, or CertainTeed architectural shingles with minimum 130 mph wind ratings. We install using manufacturer-required 6-nail patterns and starter strips to ensure warranty coverage and hurricane performance.</p>
                  <p className="text-gray-600"><strong>New construction cost:</strong> $4-7 per square foot, or $8,000-14,000 for typical homes.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
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

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Metal Roofing for New Construction</h3>
                  <p className="text-gray-600 mb-4">Metal roofing is increasingly popular for new Jacksonville homes, offering unmatched durability and hurricane performance. Standing seam metal roofs are rated for winds up to 180 mph and can last 50-70 years with minimal maintenance.</p>
                  <p className="text-gray-600 mb-4">For new construction, metal provides several advantages: superior energy efficiency (reflects heat to reduce cooling costs by 10-25%), potential insurance discounts, and no future replacement during your ownership. Metal is available in numerous colors and profiles to match any architectural style.</p>
                  <p className="text-gray-600"><strong>New construction cost:</strong> $8-15 per square foot, or $16,000-30,000 for typical homes.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
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

            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Tile Roofing for New Construction</h3>
                  <p className="text-gray-600 mb-4">Tile roofing provides a distinctive Mediterranean or Spanish aesthetic that&apos;s popular in upscale Jacksonville communities. Concrete and clay tiles can last 50-100 years, making them a true lifetime investment for your new home.</p>
                  <p className="text-gray-600 mb-4">New construction is the ideal time to choose tile because the roof structure can be designed to support the additional weight (900-1,200 lbs per 100 sq ft). Retrofitting tile onto an existing home often requires expensive structural reinforcement.</p>
                  <p className="text-gray-600"><strong>New construction cost:</strong> $10-20 per square foot, or $20,000-40,000 for typical homes.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
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
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">New Construction Roofing Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Here&apos;s how we work with builders and homeowners to ensure your new roof is installed correctly from the start.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="font-bold text-secondary mb-2">Planning & Design</h3>
              <p className="text-gray-600 text-sm">We review blueprints with your builder, discuss material options, and provide detailed estimates. For complex roofs, we coordinate on structural requirements.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-bold text-secondary mb-2">Scheduling</h3>
              <p className="text-gray-600 text-sm">We coordinate with your builder&apos;s timeline. Roofing typically happens after framing and decking, before interior work begins. We&apos;re flexible to keep your project on schedule.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-bold text-secondary mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">We install underlayment, flashing, and roofing materials to manufacturer specifications. Every detail matters - from nail patterns to valley integration.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="font-bold text-secondary mb-2">Inspection & Warranty</h3>
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
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Builder & Contractor Partnerships</h2>
              <p className="text-gray-600 mb-6">We work with home builders and general contractors throughout Jacksonville. Our reliability, quality work, and professional coordination make us a trusted partner for new construction projects.</p>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold">&#10003;</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-secondary">Reliable Scheduling</h3>
                    <p className="text-gray-600 text-sm">We show up when scheduled and complete work on time. Construction delays cost money - we understand the importance of keeping your project moving.</p>
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
                <a href="tel:+19046065313" className="btn btn-primary w-full text-center">Call (904) 606-5313</a>
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
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Wind Resistance</h3>
              <p className="text-gray-600 text-sm">Florida Building Code requires roofing materials and installation methods rated for your specific wind zone. Jacksonville requires minimum 130 mph wind ratings with proper nail patterns.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Underlayment</h3>
              <p className="text-gray-600 text-sm">Florida requires specific underlayment types and installation methods. We use code-compliant synthetic underlayment with proper lap requirements and fastening.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Flashing</h3>
              <p className="text-gray-600 text-sm">Proper flashing at all roof penetrations, valleys, and transitions is critical in Florida&apos;s climate. We follow manufacturer and code requirements for all flashing details.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Permits & Inspections</h3>
              <p className="text-gray-600 text-sm">All new construction roofing requires permits and inspections. We coordinate with building officials and ensure all work passes inspection.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Documentation</h3>
              <p className="text-gray-600 text-sm">We provide NOA (Notice of Acceptance) documentation for materials used, proving code compliance for your records and potential insurance requirements.</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Energy Code</h3>
              <p className="text-gray-600 text-sm">Florida energy code may require specific roof materials or colors in some areas. We advise on requirements and help you choose compliant options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">New Construction Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about roofing options and making the best choice for your new home.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/best-roofing-materials-florida" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Best Roofing Materials for Florida</h3>
              <p className="text-gray-600 text-sm">Compare shingles, metal, tile, and other options for Florida&apos;s climate.</p>
            </Link>
            <Link href="/blog/benefits-metal-roofing-florida" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Benefits of Metal Roofing</h3>
              <p className="text-gray-600 text-sm">Why metal roofing is an excellent choice for new Florida homes.</p>
            </Link>
            <Link href="/services/roof-replacement" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Frequently Asked Questions</h2>
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
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
