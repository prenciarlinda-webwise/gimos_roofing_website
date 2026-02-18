import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roof Replacement Jacksonville FL - Shingle, Tile & Metal",
  description: "Roof replacement in Jacksonville FL. Shingle, tile & metal roof replacement. Storm damage roof replacement with insurance help. (904) 606-5313.",
  keywords: ["roof replacement jacksonville fl", "tile roof replacement", "shingle roof replacement", "metal roof replacement", "storm damage roof replacement", "roof replacement cost jacksonville fl", "roof replacement financing"],
  alternates: { canonical: "https://www.gimosroofing.com/services/roof-replacement" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const financingUrl = 'https://application.enerbank.com/#/link?spnum=8007747598&cid=118584&promo=DEL2625&loamt='

const signs = [
  { title: "Age of Roof", description: "Most roofs last 20-25 years. If yours is approaching this age, it may be time for replacement." },
  { title: "Missing Shingles", description: "Multiple missing or damaged shingles indicate your roof is failing and needs attention." },
  { title: "Sagging Roof Deck", description: "A sagging roof is a serious structural issue that requires immediate replacement." },
  { title: "Frequent Leaks", description: "If you're constantly repairing leaks, a full replacement may be more cost-effective." },
  { title: "Storm Damage", description: "Severe storm damage often necessitates complete roof replacement rather than repairs." },
  { title: "Rising Energy Bills", description: "Poor roof insulation causes higher heating/cooling costs - a new roof improves efficiency." }
]

const benefits = [
  { title: "Increased Home Value", description: "A new roof can increase your home's value by up to $15,000 or more." },
  { title: "Energy Efficiency", description: "Modern roofing materials and proper ventilation reduce energy costs." },
  { title: "Enhanced Curb Appeal", description: "Transform your home's appearance with a fresh, new roof." },
  { title: "Peace of Mind", description: "New manufacturer and workmanship warranties protect your investment." }
]

const faqs = [
  { question: "How do I know if I need a roof replacement vs. repair?", answer: "Generally, if repairs exceed 30% of a new roof's cost, or if your roof is over 20 years old with multiple issues, replacement is more cost-effective. We provide honest assessments during our free inspections." },
  { question: "What is the most expensive part of replacing a roof?", answer: "While shingles are the most visible cost, labor and structural decking repair are often the most expensive components. In Jacksonville, replacing rotted plywood (sheathing) damaged by humidity can significantly increase the total investment." },
  { question: "What is the cheapest way to replace a roof in Florida?", answer: "Opting for 3-tab asphalt shingles is the most budget-friendly option. However, for Florida weather, architectural shingles offer better wind resistance and long-term value for a slightly higher upfront cost." },
  { question: "How long does a typical roof replacement take?", answer: "Most residential roof replacements in Jacksonville take 1 to 3 days, depending on the roof's size and complexity. Weather delays (common in North Florida) can extend this timeframe." },
  { question: "Can you replace my roof while I'm living in the house?", answer: "Absolutely! Most homeowners stay in their homes during roof replacement. We work efficiently to minimize disruption and clean up thoroughly each day." },
  { question: "What happens to my old roofing materials?", answer: "We handle complete tear-off and disposal of your old roof. All debris is removed and we leave your property clean when the job is done." },
  { question: "Will my homeowner's insurance cover roof replacement?", answer: "If your roof was damaged by a covered event like a storm, insurance may cover replacement. We can help document damage and work with your insurance company." },
  { question: "How much does roof replacement cost in Jacksonville?", answer: "Shingle roofs typically cost $8,000-$20,000 for average homes. Metal roofs run $15,000-$35,000. Tile roofs cost $18,000-$45,000+. Factors include roof size, material choice, and complexity. We provide detailed written estimates." },
  { question: "Do you offer financing for roof replacement?", answer: "Yes, we offer financing through EnerBank with terms up to 144 months. Many homeowners qualify for low monthly payments starting around $99/month. Apply online or during your consultation." },
  { question: "What roof material is best for Florida hurricanes?", answer: "Metal roofing offers the best hurricane performance with wind ratings up to 180 mph. Architectural shingles with proper installation can handle 130+ mph winds. Tile roofs are heavy and wind-resistant but individual tiles can break." },
  { question: "Will a new roof lower my insurance premiums?", answer: "Often, yes. A new roof, especially one meeting current Florida Building Code requirements, can significantly reduce insurance premiums. Impact-resistant materials may qualify for additional discounts. Check with your insurer for specifics." },
  { question: "Do I need a permit for roof replacement in Jacksonville?", answer: "Yes, Jacksonville requires permits for roof replacement. We pull all necessary permits and schedule required inspections. Permit costs are included in our estimates." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Roof Replacement Jacksonville FL",
  "description": "Complete roof replacement services in Jacksonville, Florida. Professional tear-off and installation of new roofing systems.",
  "url": "https://www.gimosroofing.com/services/roof-replacement",
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
  "serviceType": "Roof Replacement",
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
    { "@type": "ListItem", "position": 3, "name": "Roof Replacement", "item": "https://www.gimosroofing.com/services/roof-replacement" }
  ]
}

export default function RoofReplacementPage() {
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
                <span className="text-primary">Roof Replacement</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Roof Replacement Jacksonville FL - Shingle, Tile & Metal</h1>
              <p className="text-lg text-gray-200 mb-6">
                Complete roof replacement for shingle, tile, and metal roofs. Storm damage replacement with insurance assistance. Financing from $99/month.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/residential-roofing-services-page.webp" alt="Residential roof replacement in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Replacement Types Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Replacement Types We Install</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We replace all roof types in Jacksonville. Complete tear-off and installation with manufacturer warranties.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Shingle Roof Replacement</h3>
              <p className="text-gray-600 text-sm mb-3">Architectural and 3-tab shingle replacement. Most affordable option with 25-30 year warranties.</p>
              <p className="text-primary font-semibold text-sm">From $7,900</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Tile Roof Replacement</h3>
              <p className="text-gray-600 text-sm mb-3">Clay and concrete tile replacement. 50+ year lifespan. Ideal for Mediterranean and Spanish-style homes.</p>
              <p className="text-primary font-semibold text-sm">From $18,000</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Metal Roof Replacement</h3>
              <p className="text-gray-600 text-sm mb-3">Standing seam and metal shingle options. 40-70 year lifespan. Hurricane-rated to 180 mph.</p>
              <p className="text-primary font-semibold text-sm">From $15,000</p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-2">Storm Damage Roof Replacement</h3>
              <p className="text-gray-600 text-sm mb-3">Insurance claim assistance. Emergency tarping. Complete documentation for adjusters.</p>
              <p className="text-primary font-semibold text-sm">Insurance Accepted</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Material Sections */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roofing Materials In-Depth</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Understanding the differences between roofing materials helps you make the best choice for your home, budget, and Jacksonville&apos;s climate.</p>
          </div>

          <div className="space-y-8">
            {/* Shingle Roofing */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Asphalt Shingle Roofing</h3>
                  <p className="text-gray-600 mb-4">Asphalt shingles remain the most popular roofing choice in Jacksonville, covering over 80% of homes. Modern architectural shingles (also called dimensional or laminate shingles) offer significant improvements over older 3-tab designs, including better wind resistance, longer warranties, and more attractive dimensional appearance.</p>
                  <p className="text-gray-600 mb-4">We install shingles from GAF, Owens Corning, CertainTeed, and other premium manufacturers. Our crews are certified installers, qualifying your roof for enhanced warranty coverage. Proper installation is critical in Florida&apos;s climate - we use 6-nail patterns, starter strips, and ice/water shield at vulnerable areas.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> $8,000-$15,000 for average Jacksonville homes (1,800-2,200 sq ft roof). Premium designer shingles cost more.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Shingle Options</h4>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-sm">3-Tab Shingles</p>
                      <p className="text-gray-600 text-sm">Budget option. 20-25 year warranty. Basic appearance.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Architectural Shingles</p>
                      <p className="text-gray-600 text-sm">Most popular. 30-year warranty. Dimensional look.</p>
                    </div>
                    <div>
                      <p className="font-semibold text-sm">Premium/Designer</p>
                      <p className="text-gray-600 text-sm">Luxury appearance. 50-year warranty. Mimics slate/wood.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Metal Roofing */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Metal Roofing</h3>
                  <p className="text-gray-600 mb-4">Metal roofing is increasingly popular in Jacksonville for its exceptional durability and hurricane performance. Standing seam metal roofs are rated for winds up to 180 mph - well above Florida Building Code requirements. Metal reflects heat, reducing cooling costs by 10-25%.</p>
                  <p className="text-gray-600 mb-4">We install standing seam (concealed fastener) and exposed fastener metal systems in steel and aluminum. Standing seam is premium but offers superior performance and aesthetics. Metal shingles provide the look of traditional shingles with metal durability. For coastal properties, we recommend aluminum or galvalume-coated steel to resist salt corrosion.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> Standing seam: $15,000-$30,000. Metal shingles: $12,000-$22,000 for average homes.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Metal Benefits</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; 40-70 year lifespan</li>
                    <li>&#8226; Up to 180 mph wind rating</li>
                    <li>&#8226; Class A fire rating</li>
                    <li>&#8226; 10-25% energy savings</li>
                    <li>&#8226; Minimal maintenance</li>
                    <li>&#8226; Insurance discounts</li>
                    <li>&#8226; 100% recyclable</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Tile Roofing */}
            <div className="bg-white rounded-xl shadow-md p-8">
              <div className="grid md:grid-cols-3 gap-6">
                <div className="md:col-span-2">
                  <h3 className="text-xl font-bold text-secondary mb-3">Tile Roofing</h3>
                  <p className="text-gray-600 mb-4">Tile roofs are prized for their distinctive appearance and exceptional longevity. Concrete and clay tiles can last 50-100 years when properly installed and maintained. They&apos;re especially popular in upscale Jacksonville neighborhoods and communities with Mediterranean or Spanish architectural styles.</p>
                  <p className="text-gray-600 mb-4">Tile roofs require stronger roof framing due to their weight (900-1,200 lbs per 100 sq ft). Not all homes can support tile without structural reinforcement. The underlayment beneath tile is critical in Florida&apos;s climate and typically needs replacement every 20-25 years, even when the tiles remain intact.</p>
                  <p className="text-gray-600"><strong>Typical cost:</strong> Concrete tile: $18,000-$30,000. Clay tile: $25,000-$45,000+ for average homes.</p>
                </div>
                <div className="bg-gray-50 rounded-lg p-6">
                  <h4 className="font-bold text-secondary mb-3">Tile Considerations</h4>
                  <ul className="text-gray-600 text-sm space-y-2">
                    <li>&#8226; 50-100 year tile lifespan</li>
                    <li>&#8226; Heavy - requires strong framing</li>
                    <li>&#8226; Individual tiles can break</li>
                    <li>&#8226; Underlayment replacement needed</li>
                    <li>&#8226; Higher installation cost</li>
                    <li>&#8226; Premium appearance</li>
                    <li>&#8226; Great resale value</li>
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Replacement Costs in Jacksonville</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Transparent pricing with detailed written estimates. No hidden fees. Financing available.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Asphalt Shingles</h3>
              <p className="text-3xl font-bold text-primary mb-2">$8K - $20K</p>
              <p className="text-gray-500 text-sm mb-4">most homes</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Most affordable option</li>
                <li>&#8226; 25-30 year warranty</li>
                <li>&#8226; 1-2 day installation</li>
                <li>&#8226; Many color options</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center border-2 border-primary">
              <div className="bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full inline-block mb-2">BEST VALUE</div>
              <h3 className="font-bold text-secondary mb-2">Metal Roofing</h3>
              <p className="text-3xl font-bold text-primary mb-2">$15K - $35K</p>
              <p className="text-gray-500 text-sm mb-4">most homes</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; 40-70 year lifespan</li>
                <li>&#8226; Hurricane rated</li>
                <li>&#8226; Energy efficient</li>
                <li>&#8226; Insurance discounts</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl shadow-md p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Tile Roofing</h3>
              <p className="text-3xl font-bold text-primary mb-2">$18K - $50K+</p>
              <p className="text-gray-500 text-sm mb-4">most homes</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; 50-100 year lifespan</li>
                <li>&#8226; Premium appearance</li>
                <li>&#8226; Best resale value</li>
                <li>&#8226; May need structural work</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="font-bold text-secondary mb-3">What Affects Your Price</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <p className="font-semibold text-sm text-secondary">Roof Size</p>
                <p className="text-gray-600 text-sm">Larger roofs cost more. Price is based on squares (100 sq ft).</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-secondary">Roof Complexity</p>
                <p className="text-gray-600 text-sm">Multiple peaks, valleys, and angles increase labor costs.</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-secondary">Decking Condition</p>
                <p className="text-gray-600 text-sm">Rotted plywood must be replaced. Common in Jacksonville&apos;s humidity.</p>
              </div>
              <div>
                <p className="font-semibold text-sm text-secondary">Material Choice</p>
                <p className="text-gray-600 text-sm">Premium materials and colors cost more than standard options.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Roof Replacement Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">A complete roof replacement involves careful preparation, quality installation, and thorough cleanup. Here&apos;s what to expect.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
              <h3 className="font-bold text-secondary mb-2">Inspection</h3>
              <p className="text-gray-600 text-sm">Free roof inspection, measurements, and detailed written estimate with material options.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
              <h3 className="font-bold text-secondary mb-2">Preparation</h3>
              <p className="text-gray-600 text-sm">We order materials, pull permits, and schedule your installation date.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
              <h3 className="font-bold text-secondary mb-2">Tear-Off</h3>
              <p className="text-gray-600 text-sm">Complete removal of old roofing. Inspection and repair of decking as needed.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">4</div>
              <h3 className="font-bold text-secondary mb-2">Installation</h3>
              <p className="text-gray-600 text-sm">New underlayment, flashing, and roofing materials installed to manufacturer specs.</p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">5</div>
              <h3 className="font-bold text-secondary mb-2">Final Inspection</h3>
              <p className="text-gray-600 text-sm">Thorough cleanup, final walkthrough, warranty registration, and permit inspection.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signs You Need Replacement */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Signs You Need a Roof Replacement</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Not sure if you need a replacement? Here are common indicators that your roof has reached the end of its lifespan.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {signs.map((sign) => (
              <div key={sign.title} className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="font-bold text-secondary mb-2">{sign.title}</h3>
                <p className="text-gray-600 text-sm">{sign.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Benefits of Roof Replacement</h2>
              <p className="text-gray-600 mb-6">A new roof is one of the best investments you can make in your home. Here&apos;s what you gain:</p>
              <div className="space-y-4">
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
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/two-story-home-roof-replacement.webp" alt="Complete roof replacement on two-story home" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-600">Common questions about roof replacement in Jacksonville.</p>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Replacement Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about roof replacement costs, materials, and financing options.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/blog/jacksonville-roof-replacement-cost-guide-2026" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Replacement Cost Guide 2026</h3>
              <p className="text-gray-600 text-sm">Complete pricing breakdown for roof replacement in Jacksonville including materials and labor.</p>
            </Link>
            <Link href="/blog/roofing-financing-options-jacksonville" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Replacement Financing Options</h3>
              <p className="text-gray-600 text-sm">Explore financing options to make your new roof affordable with monthly payments.</p>
            </Link>
            <Link href="/blog/best-roofing-materials-florida" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Best Roofing Materials for Florida</h3>
              <p className="text-gray-600 text-sm">Compare shingles, metal, tile, and flat roof options for Florida&apos;s climate.</p>
            </Link>
            <Link href="/blog/how-long-does-roof-last-florida" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">How Long Does a Roof Last in Florida?</h3>
              <p className="text-gray-600 text-sm">Understand roof lifespan expectations for different materials in Florida&apos;s climate.</p>
            </Link>
            <Link href="/blog/roof-repair-vs-replacement-jacksonville" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Repair vs Replacement Guide</h3>
              <p className="text-gray-600 text-sm">Not sure if you need repair or replacement? This guide helps you decide.</p>
            </Link>
            <Link href="/blog/roof-warranty-guide-florida" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Warranty Guide</h3>
              <p className="text-gray-600 text-sm">Understand manufacturer warranties and workmanship guarantees for your new roof.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Ready for a New Roof?</h2>
          <p className="text-secondary/80 mb-6">Get a free, no-obligation estimate for your roof replacement project today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100">Apply for Financing</a>
          </div>
        </div>
      </section>
    </>
  )
}
