import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Siding Contractors Jacksonville FL - Vinyl & Fiber Cement",
  description: "Siding contractors in Jacksonville FL. Vinyl siding, Hardie board & fiber cement installation. Licensed, insured. Free estimates: (904) 606-5313.",
  keywords: ["siding contractors near me", "siding contractors jacksonville fl", "siding installation jacksonville fl", "vinyl siding jacksonville", "hardie board siding installation", "fiber cement siding"],
  alternates: { canonical: "https://www.gimosroofing.com/services/siding-installation" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const financingUrl = 'https://application.enerbank.com/#/link?spnum=8007747598&cid=118584&promo=DEL2625&loamt='

const sidingTypes = [
  { name: "Vinyl Siding", description: "The most popular siding choice. Affordable, low-maintenance, and available in countless colors and styles.", benefits: ["Affordable", "Low maintenance", "Many color options", "Weather resistant"], image: "/images/siding-installation-jacksonville-home.webp" },
  { name: "Fiber Cement Siding", description: "Premium siding that mimics wood grain. Extremely durable and resistant to rot, fire, and insects.", benefits: ["Fire resistant", "Rot proof", "Insect proof", "Long lasting"], image: "/images/siding-project-closeup.webp" },
  { name: "Wood Siding", description: "Classic, natural beauty that adds character to your home. Available in various profiles and species.", benefits: ["Natural beauty", "Customizable", "Eco-friendly", "Insulating"], image: "/images/yellow-siding-home-renovation.webp" },
  { name: "Engineered Wood", description: "Combines the beauty of wood with enhanced durability. Resists moisture, rot, and insects.", benefits: ["Wood appearance", "Enhanced durability", "Moisture resistant", "Cost-effective"], image: "/images/siding-installation-worker-ladder.webp" }
]

const benefits = [
  { title: "Enhanced Curb Appeal", description: "Transform your home's appearance with fresh, modern siding." },
  { title: "Energy Efficiency", description: "New siding with proper insulation reduces heating and cooling costs." },
  { title: "Increased Home Value", description: "Siding replacement offers one of the best ROIs for home improvements." },
  { title: "Low Maintenance", description: "Modern siding materials require minimal upkeep compared to older options." },
  { title: "Weather Protection", description: "Quality siding protects your home from rain, wind, and humidity." },
  { title: "Pest Prevention", description: "New siding eliminates entry points for insects and rodents." }
]

const faqs = [
  { question: "How long does siding installation take?", answer: "Most home siding installations take 1-2 weeks depending on home size and siding type. A 2,000 sq ft home typically takes 5-7 days. Larger homes or complex designs may take 2-3 weeks. We work efficiently while ensuring quality installation." },
  { question: "What's the best siding for Florida's climate?", answer: "Vinyl and fiber cement siding are excellent choices for Jacksonville's humid climate. Both resist moisture, won't rot, and hold up well in our weather. Fiber cement (Hardie board) offers superior durability and fire resistance, while vinyl is more budget-friendly." },
  { question: "Do you remove and dispose of old siding?", answer: "Yes, our installation includes complete removal and disposal of your old siding. We carefully remove existing materials, inspect sheathing for damage, make necessary repairs, and dispose of old materials responsibly." },
  { question: "Can you match existing siding?", answer: "In many cases, yes. For partial replacements or additions, we work to match your existing siding color and style as closely as possible. Keep in mind that existing siding fades over time, so a perfect match may not be possible with older installations." },
  { question: "How much does siding installation cost in Jacksonville?", answer: "Vinyl siding typically costs $4-8 per square foot installed. Fiber cement (Hardie board) runs $8-14 per square foot. A typical 2,000 sq ft home costs $12,000-25,000 for vinyl or $20,000-40,000 for fiber cement, including removal of old siding." },
  { question: "Do I need to be home during siding installation?", answer: "No, you don't need to be home during installation. We'll coordinate access to your property and keep you updated on progress. We do recommend being available by phone in case questions arise." },
  { question: "Will new siding lower my energy bills?", answer: "Yes, significantly. New siding with proper insulation and house wrap can reduce energy costs by 10-25%. We install insulated siding options and ensure proper air sealing during installation." },
  { question: "How long does vinyl siding last?", answer: "Quality vinyl siding lasts 20-40 years with proper installation. In Jacksonville's climate, expect 20-30 years of service life. Higher-end vinyl products with better UV resistance can last longer." },
  { question: "How long does fiber cement siding last?", answer: "Fiber cement siding (Hardie board) lasts 30-50 years, making it one of the longest-lasting siding options. It requires repainting every 15-20 years but maintains structural integrity for decades." },
  { question: "Can siding be installed over existing siding?", answer: "Sometimes, but we don't recommend it. Installing over old siding can hide moisture damage, add unnecessary weight, and create an uneven surface. We remove old siding to inspect sheathing and ensure proper installation." },
  { question: "What happens if it rains during installation?", answer: "We don't install siding in rain. If rain is expected, we ensure your home is protected with house wrap and temporary coverings. We monitor weather closely and schedule work around significant rain events." },
  { question: "Do you offer financing for siding projects?", answer: "Yes, we offer financing through EnerBank with competitive rates and terms up to 144 months. Many homeowners qualify for low monthly payments that make siding replacement affordable." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Siding Installation Jacksonville FL",
  "description": "Professional siding installation in Jacksonville, Florida. Vinyl, fiber cement, wood, and engineered wood siding.",
  "url": "https://www.gimosroofing.com/services/siding-installation",
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
  "serviceType": "Siding Installation",
  "offers": {
    "@type": "Offer",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "8000",
      "maxPrice": "45000",
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
    { "@type": "ListItem", "position": 3, "name": "Siding Installation", "item": "https://www.gimosroofing.com/services/siding-installation" }
  ]
}

export default function SidingInstallationPage() {
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
                <span className="text-primary">Siding Installation</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Siding Contractors Jacksonville FL - Installation & Replacement</h1>
              <p className="text-lg text-gray-200 mb-6">
                Licensed siding contractors serving Jacksonville. Vinyl, fiber cement, and Hardie board installation. Complete tear-off and replacement.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/siding-installation-jacksonville-home.webp" alt="Siding installation on Jacksonville home" title="Siding installation on Jacksonville home" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Siding Types Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Options We Install</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from a variety of quality siding materials, each with unique benefits for your home.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sidingTypes.map((type) => (
              <div key={type.name} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={type.image} alt={type.name} title={type.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{type.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.benefits.map((benefit) => (
                      <span key={benefit} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{benefit}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Siding Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Materials In-Depth</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Understanding the differences between siding materials helps you make the best choice for your home and budget.</p>
          </div>

          <div className="space-y-8">
            {/* Vinyl Siding Detail */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Vinyl Siding</h3>
                  <p className="text-gray-600 mb-4">Vinyl siding remains America&apos;s most popular siding choice for good reason. It&apos;s affordable, requires virtually no maintenance, and comes in hundreds of colors and styles. Modern vinyl is far superior to products from decades ago, with better UV resistance and realistic wood-grain textures.</p>
                  <p className="text-gray-600 mb-4">For Jacksonville homes, we recommend premium vinyl with enhanced UV inhibitors to prevent fading in our intense sun. Thicker panels (0.044&quot; or more) resist impact damage and last longer than builder-grade vinyl.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $4-8 per square foot installed. Premium insulated vinyl runs $6-10 per square foot.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Vinyl Pros & Cons</h4>
                  <div className="mb-4">
                    <p className="text-green-600 font-semibold text-sm mb-1">Advantages:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>&#8226; Most affordable option</li>
                      <li>&#8226; Zero maintenance required</li>
                      <li>&#8226; Never needs painting</li>
                      <li>&#8226; Huge color selection</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-600 font-semibold text-sm mb-1">Considerations:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>&#8226; Can fade in intense sun</li>
                      <li>&#8226; Less impact resistant</li>
                      <li>&#8226; Lower perceived value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Fiber Cement Detail */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Fiber Cement Siding (Hardie Board)</h3>
                  <p className="text-gray-600 mb-4">Fiber cement siding, commonly known as Hardie board (after manufacturer James Hardie), is a premium siding material made from cement, sand, and cellulose fibers. It offers the authentic look of wood with superior durability and resistance to Florida&apos;s challenging climate.</p>
                  <p className="text-gray-600 mb-4">Fiber cement is completely resistant to termites, rot, and fire - major advantages for Jacksonville homeowners. It holds paint exceptionally well and can be repainted to change your home&apos;s color scheme. While more expensive upfront, its 50+ year lifespan makes it cost-effective long-term.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $8-14 per square foot installed, including materials and labor.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Fiber Cement Pros & Cons</h4>
                  <div className="mb-4">
                    <p className="text-green-600 font-semibold text-sm mb-1">Advantages:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>&#8226; 50+ year lifespan</li>
                      <li>&#8226; Fire resistant (Class A)</li>
                      <li>&#8226; Termite and rot proof</li>
                      <li>&#8226; Authentic wood appearance</li>
                      <li>&#8226; Increases home value</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-600 font-semibold text-sm mb-1">Considerations:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>&#8226; Higher initial cost</li>
                      <li>&#8226; Requires repainting</li>
                      <li>&#8226; Heavier installation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Wood Siding Detail */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Natural Wood Siding</h3>
                  <p className="text-gray-600 mb-4">Nothing matches the natural beauty and warmth of real wood siding. Cedar and redwood are the most popular choices due to their natural resistance to decay and insects. Wood siding adds character and can be stained or painted in any color.</p>
                  <p className="text-gray-600 mb-4">In Jacksonville&apos;s humid climate, wood siding requires more maintenance than other options. Regular painting or staining (every 3-5 years) is essential to protect against moisture damage. We recommend wood siding primarily for covered areas, accent walls, or homeowners committed to ongoing maintenance.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $6-12 per square foot installed for cedar. Premium species like redwood cost more.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Wood Pros & Cons</h4>
                  <div className="mb-4">
                    <p className="text-green-600 font-semibold text-sm mb-1">Advantages:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>&#8226; Natural beauty</li>
                      <li>&#8226; Customizable finishes</li>
                      <li>&#8226; Good insulation</li>
                      <li>&#8226; Eco-friendly</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-600 font-semibold text-sm mb-1">Considerations:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>&#8226; High maintenance</li>
                      <li>&#8226; Susceptible to moisture</li>
                      <li>&#8226; Can attract insects</li>
                      <li>&#8226; Fire risk</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Engineered Wood Detail */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Engineered Wood Siding</h3>
                  <p className="text-gray-600 mb-4">Engineered wood siding (LP SmartSide is the leading brand) combines real wood fibers with resins and binders treated to resist moisture, decay, and insects. It offers the appearance of natural wood with significantly improved durability and lower maintenance requirements.</p>
                  <p className="text-gray-600 mb-4">For Jacksonville homeowners who want the wood look without the maintenance headaches of natural wood, engineered wood is an excellent middle-ground option. It&apos;s lighter than fiber cement, making installation easier, and costs less while still offering good longevity.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $5-10 per square foot installed.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Engineered Wood Pros & Cons</h4>
                  <div className="mb-4">
                    <p className="text-green-600 font-semibold text-sm mb-1">Advantages:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>&#8226; Wood appearance</li>
                      <li>&#8226; Lower maintenance than wood</li>
                      <li>&#8226; More affordable</li>
                      <li>&#8226; Treated against moisture</li>
                    </ul>
                  </div>
                  <div>
                    <p className="text-red-600 font-semibold text-sm mb-1">Considerations:</p>
                    <ul className="text-gray-600 text-sm space-y-1">
                      <li>&#8226; Requires painting</li>
                      <li>&#8226; Not as durable as fiber cement</li>
                      <li>&#8226; Can swell if damaged</li>
                    </ul>
                  </div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Installation Costs in Jacksonville</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Transparent pricing with no hidden fees. Prices include removal of old siding, installation, and cleanup.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Vinyl Siding</h3>
              <p className="text-3xl font-bold text-primary mb-2">$4 - $8</p>
              <p className="text-gray-500 text-sm mb-4">per sq ft installed</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Most affordable option</li>
                <li>&#8226; Zero maintenance</li>
                <li>&#8226; 20-40 year lifespan</li>
                <li>&#8226; Many colors available</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-2 border-primary">
              <div className="bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">MOST POPULAR</div>
              <h3 className="font-bold text-secondary mb-2">Fiber Cement</h3>
              <p className="text-3xl font-bold text-primary mb-2">$8 - $14</p>
              <p className="text-gray-500 text-sm mb-4">per sq ft installed</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Premium durability</li>
                <li>&#8226; Fire & pest resistant</li>
                <li>&#8226; 50+ year lifespan</li>
                <li>&#8226; Best long-term value</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Engineered Wood</h3>
              <p className="text-3xl font-bold text-primary mb-2">$5 - $10</p>
              <p className="text-gray-500 text-sm mb-4">per sq ft installed</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Natural wood look</li>
                <li>&#8226; Moisture treated</li>
                <li>&#8226; 25-30 year lifespan</li>
                <li>&#8226; Good middle ground</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-secondary mb-3">Example Project Costs</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <p className="text-gray-600 text-sm"><strong>1,500 sq ft home:</strong></p>
                <p className="text-gray-600 text-sm">Vinyl: $8,000 - $15,000</p>
                <p className="text-gray-600 text-sm">Fiber Cement: $15,000 - $25,000</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm"><strong>2,000 sq ft home:</strong></p>
                <p className="text-gray-600 text-sm">Vinyl: $12,000 - $20,000</p>
                <p className="text-gray-600 text-sm">Fiber Cement: $20,000 - $35,000</p>
              </div>
              <div>
                <p className="text-gray-600 text-sm"><strong>2,500+ sq ft home:</strong></p>
                <p className="text-gray-600 text-sm">Vinyl: $15,000 - $25,000</p>
                <p className="text-gray-600 text-sm">Fiber Cement: $25,000 - $45,000</p>
              </div>
            </div>
            <p className="text-gray-500 text-sm mt-4">*Estimates are for typical installations. Final pricing depends on home complexity, trim work, and material selections.</p>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Siding Installation Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">A complete siding installation involves more than just putting up new siding. Here&apos;s what to expect when you work with us.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
              <h3 className="font-bold text-secondary mb-2">Consultation & Estimate</h3>
              <p className="text-gray-600 text-sm">We inspect your current siding, measure your home, discuss material options, and provide a detailed written estimate with no hidden fees.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
              <h3 className="font-bold text-secondary mb-2">Removal & Preparation</h3>
              <p className="text-gray-600 text-sm">We carefully remove old siding, inspect sheathing for damage, make repairs as needed, and install house wrap for weather protection.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
              <h3 className="font-bold text-secondary mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">New siding is installed according to manufacturer specifications with proper fastening, flashing at windows and doors, and attention to detail.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">4</div>
              <h3 className="font-bold text-secondary mb-2">Cleanup & Walkthrough</h3>
              <p className="text-gray-600 text-sm">We clean up all debris, conduct a final walkthrough with you, and ensure you&apos;re completely satisfied before considering the job complete.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Siding Fails */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Why Siding Installations Fail</h2>
              <p className="text-gray-600 mb-4">Not all siding installations are equal. We regularly repair problems caused by improper installation. Understanding common issues helps you choose the right contractor.</p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-secondary">Improper Nailing</h3>
                  <p className="text-gray-600 text-sm">Vinyl siding must hang loosely to allow for expansion and contraction. Nailing too tightly causes buckling and warping in Jacksonville&apos;s heat.</p>
                </div>
                <div>
                  <h3 className="font-bold text-secondary">Skipping House Wrap</h3>
                  <p className="text-gray-600 text-sm">House wrap is critical for moisture protection. Some contractors skip this step to save money, leading to moisture damage behind siding.</p>
                </div>
                <div>
                  <h3 className="font-bold text-secondary">Poor Flashing at Openings</h3>
                  <p className="text-gray-600 text-sm">Windows, doors, and utility penetrations require proper flashing. Improper flashing is the most common cause of water intrusion with new siding.</p>
                </div>
                <div>
                  <h3 className="font-bold text-secondary">Not Addressing Underlying Issues</h3>
                  <p className="text-gray-600 text-sm">Installing new siding over rotted sheathing or framing creates hidden problems. We inspect and repair the substrate before installation.</p>
                </div>
              </div>
            </div>
            <div className="rounded-2xl aspect-square overflow-hidden shadow-xl relative">
              <Image src="/images/siding-project-closeup.webp" alt="Quality siding installation detail" title="Quality siding installation detail" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Benefits of New Siding</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Florida-Specific Considerations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding for Jacksonville&apos;s Climate</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Jacksonville&apos;s subtropical climate presents unique challenges for siding. Here&apos;s what we consider when recommending materials.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Humidity & Moisture</h3>
              <p className="text-gray-600 mb-3">Jacksonville averages 74% humidity year-round. This constant moisture can cause problems with certain siding materials. Wood siding is particularly susceptible to moisture-related issues like rot, warping, and mold growth.</p>
              <p className="text-gray-600"><strong>Our recommendation:</strong> Vinyl or fiber cement siding performs best in Jacksonville&apos;s humidity. Both are completely impervious to moisture damage.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Intense UV Exposure</h3>
              <p className="text-gray-600 mb-3">Northeast Florida receives intense UV radiation that can fade and degrade siding. Cheaper vinyl products fade noticeably within 5-10 years. Dark colors fade faster than light colors.</p>
              <p className="text-gray-600"><strong>Our recommendation:</strong> We use premium vinyl with enhanced UV stabilizers, or fiber cement which holds color better and can be repainted.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Hurricane & Wind</h3>
              <p className="text-gray-600 mb-3">Jacksonville sits in hurricane territory. Siding must withstand high winds and flying debris. Proper installation is as important as material selection - improperly nailed siding becomes projectiles in high winds.</p>
              <p className="text-gray-600"><strong>Our recommendation:</strong> We install to hurricane standards with proper fastening patterns. Fiber cement offers the best impact resistance.</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-secondary mb-3">Termites & Pests</h3>
              <p className="text-gray-600 mb-3">Florida&apos;s termite pressure is among the highest in the nation. Wood and some engineered wood products can attract termites if not properly protected. Even minor moisture damage creates entry points.</p>
              <p className="text-gray-600"><strong>Our recommendation:</strong> Vinyl and fiber cement are completely termite-proof. If you choose wood, we recommend cedar with proper treatment and maintenance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Installation FAQs</h2>
            <p className="text-gray-600">Common questions about siding installation in Jacksonville.</p>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about siding options, maintenance, and related exterior services.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/siding-repair" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Siding Repair Services</h3>
              <p className="text-gray-600 text-sm">Need repairs instead of replacement? We fix damaged, loose, and faded siding.</p>
            </Link>
            <Link href="/services/roof-replacement" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Replacement</h3>
              <p className="text-gray-600 text-sm">Combining roof and siding projects saves money on setup and improves coordination.</p>
            </Link>
            <Link href="/blog/vinyl-siding-maintenance-guide" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Siding Maintenance Guide</h3>
              <p className="text-gray-600 text-sm">How to care for your new siding to maximize its lifespan and appearance.</p>
            </Link>
            <Link href="/gallery" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Project Gallery</h3>
              <p className="text-gray-600 text-sm">See examples of our siding installations throughout Jacksonville.</p>
            </Link>
            <Link href="/financing" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Financing Options</h3>
              <p className="text-gray-600 text-sm">Make your siding project affordable with our financing programs.</p>
            </Link>
            <Link href="/service-areas" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Service Areas</h3>
              <p className="text-gray-600 text-sm">We serve Jacksonville and the surrounding Northeast Florida communities.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Ready for New Siding?</h2>
          <p className="text-secondary/80 mb-6">Get a free estimate for your siding installation project today. We&apos;ll help you choose the best material for your home and budget.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
