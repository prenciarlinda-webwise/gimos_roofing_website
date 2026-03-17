import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Emergency Roof Repair Jacksonville FL - 24/7 Storm Damage Service",
  description: "Emergency roof repair in Jacksonville FL. Gimos Roofing responds fast to active leaks, storm damage, and urgent roofing issues. Same-day service. Call (904) 606-5313.",
  keywords: ["emergency roof repair jacksonville fl", "emergency roof repair jacksonville", "24 hour roof repair jacksonville", "storm damage roof repair jacksonville", "roof leak emergency jacksonville"],
  alternates: { canonical: "https://www.gimosroofing.com/services/emergency-roof-repair" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const phone = "(904) 606-5313"

const emergencyTypes = [
  { title: "Storm Damage Roof Repair", description: "Jacksonville's severe weather can cause significant roof damage. High winds, heavy rain, and hail can tear off shingles, damage flashing, and create vulnerabilities that lead to leaks. Our emergency team responds quickly to assess and repair storm damage before it causes further problems inside your home." },
  { title: "Active Roof Leak Repair", description: "An active leak is a true emergency. Water entering your home can damage ceilings, walls, insulation, and personal belongings within hours. We prioritize active leak calls and can often provide same-day temporary protection while planning permanent repairs." },
  { title: "Fallen Tree and Debris Damage", description: "Trees and large debris can cause catastrophic roof damage. Whether it's a branch through your roof or an entire tree, we respond quickly to secure your home, remove debris safely, and begin the repair process." },
  { title: "Hurricane and Wind Damage", description: "Living in Jacksonville means preparing for hurricane season. When storms hit, we're ready to respond with emergency tarping, damage assessment, and repairs. We help protect your home from further damage while working with your insurance company." }
]

const serviceAreas = [
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Orange Park", href: "/roofing-orange-park-fl" },
  { name: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { name: "Ponte Vedra", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Southside", href: "/roofing-southside-jax-fl" },
  { name: "Riverside", href: "/roofing-riverside-fl" }
]

const faqs = [
  { question: "Do you offer 24/7 emergency roof repair in Jacksonville?", answer: "Yes, Gimos Roofing provides emergency roof repair services in Jacksonville FL. We respond quickly to active leaks, storm damage, and urgent roofing situations. Call (904) 606-5313 for immediate assistance." },
  { question: "What qualifies as a roofing emergency?", answer: "Roofing emergencies include active water leaks entering your home, significant storm or wind damage, fallen trees or debris on your roof, and structural damage that poses safety risks. If water is entering your home or your roof is compromised, that's an emergency." },
  { question: "Will my insurance cover emergency roof repairs?", answer: "Most homeowner insurance policies cover roof damage caused by storms, wind, hail, and fallen trees. We document all damage thoroughly and can work with your insurance company on claims. You're typically responsible for your deductible." },
  { question: "How quickly can you respond to a roof emergency in Jacksonville?", answer: "We prioritize emergency calls and typically respond same-day for urgent situations in Jacksonville and surrounding areas. For active leaks, we can often provide temporary protection within hours." },
  { question: "What should I do while waiting for emergency roof repair?", answer: "Move valuables away from the leak area. Place buckets to catch water. If safe, access your attic to place tarps over insulation. Turn off electricity in affected areas if water is near wiring. Document damage with photos for insurance." },
  { question: "How much does emergency roof repair cost?", answer: "Emergency tarping typically costs $300-800 depending on roof access and damage extent. Permanent repairs vary based on damage - minor repairs run $150-600, while major repairs cost $1,500-3,500+. Storm damage is often covered by insurance." },
  { question: "Do you provide emergency tarping services?", answer: "Yes, we provide emergency tarping to prevent further water damage while permanent repairs are planned. Tarps are secured properly to withstand additional weather and typically remain effective for 30-90 days." },
  { question: "Can you help with insurance claims for storm damage?", answer: "Absolutely. We document all damage with detailed photos and reports, provide itemized estimates for adjusters, and can meet with your insurance company's adjuster on-site. We've helped hundreds of homeowners navigate claims successfully." },
  { question: "What if the storm damaged my roof at night?", answer: "Call us immediately at (904) 606-5313. We respond to after-hours emergencies for active leaks and severe damage. For damage that isn't actively leaking, we can assess first thing in the morning." },
  { question: "How long do emergency repairs last?", answer: "Temporary repairs like tarping last 30-90 days. Permanent repairs are designed to last the remaining life of your roof (10-20+ years). We'll advise if damage is severe enough that full replacement is the better option." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Emergency Roof Repair Jacksonville FL",
  "serviceType": "Emergency Roof Repair",
  "description": "24/7 emergency roof repair services in Jacksonville FL for storm damage, active leaks, and urgent roofing issues.",
  "url": "https://www.gimosroofing.com/services/emergency-roof-repair",
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
    "priceRange": "$$",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Jacksonville",
    "addressRegion": "FL"
  },
  "offers": {
    "@type": "Offer",
    "availability": "https://schema.org/InStock",
    "priceCurrency": "USD",
    "priceSpecification": {
      "@type": "PriceSpecification",
      "minPrice": "300",
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
    { "@type": "ListItem", "position": 3, "name": "Emergency Roof Repair", "item": "https://www.gimosroofing.com/services/emergency-roof-repair" }
  ]
}

export default function EmergencyRoofRepairPage() {
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
                <span className="text-primary">Emergency Roof Repair</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">24/7 Emergency Roof Repair Jacksonville FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                When roof emergencies strike in Jacksonville, Gimos Roofing responds fast. Whether you have an active leak, storm damage, or structural concerns, our emergency roof repair team is available to protect your home. We provide same-day service throughout Jacksonville and surrounding areas.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={`tel:+19046065313`} className="btn btn-primary w-full sm:w-auto text-center font-bold">
                  Call Now: {phone}
                </a>
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto text-center">
                  Get Free Estimate
                </a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-repair-in-progress-jacksonville.webp" alt="Emergency roof repair in Jacksonville FL" title="Emergency roof repair in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* 24/7 Emergency Response */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">24/7 Emergency Roofing Response</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Roof emergencies don&apos;t wait for business hours, and neither do we. Our emergency response team is ready to protect your Jacksonville home when you need us most.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Rapid Response", description: "Quick response to urgent calls throughout Jacksonville and surrounding areas" },
              { title: "Temporary Tarping", description: "Immediate protection to prevent further water damage to your home" },
              { title: "Prevent Water Damage", description: "Fast action to stop leaks before they damage ceilings, walls, and belongings" },
              { title: "Weekend & Holiday Service", description: "Available when you need us, including weekends and holidays" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 text-center">
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Repairs We Handle */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Emergency Roof Repairs We Handle</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From storm damage to active leaks, our experienced team handles all types of roofing emergencies in Jacksonville.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {emergencyTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-xl font-bold text-secondary mb-3">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Emergency Repair Process */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Emergency Repair Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We&apos;ve streamlined our emergency response to get your roof protected as quickly as possible.
            </p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {[
              { step: "1", title: "Emergency Call", description: "Call us and describe your situation" },
              { step: "2", title: "Rapid Assessment", description: "We arrive quickly to assess the damage" },
              { step: "3", title: "Temporary Protection", description: "Tarping and protection if needed" },
              { step: "4", title: "Documentation", description: "Thorough damage documentation for insurance" },
              { step: "5", title: "Repair Plan", description: "Permanent repair plan and estimate" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-secondary font-bold rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  {item.step}
                </div>
                <h3 className="font-bold text-secondary mb-1">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Do During a Roof Emergency */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">What to Do During a Roof Emergency</h2>
              <p className="text-gray-600 mb-6">While waiting for our emergency team, there are steps you can take to minimize damage and protect your family.</p>

              <div className="space-y-4">
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-secondary mb-2">1. Ensure Safety First</h3>
                  <p className="text-gray-600 text-sm">If there&apos;s active water entering near electrical outlets, turn off power to affected areas. Don&apos;t attempt to climb on a damaged roof yourself - wet or damaged roofs are extremely dangerous.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-secondary mb-2">2. Contain Water Intrusion</h3>
                  <p className="text-gray-600 text-sm">Place buckets, bins, or trash cans under active leaks. Lay plastic sheeting or towels to protect flooring. If you have safe attic access, consider placing tarps over insulation to redirect water.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-secondary mb-2">3. Move Valuables</h3>
                  <p className="text-gray-600 text-sm">Relocate furniture, electronics, and personal belongings away from the leak area. Water damage can happen quickly - items don&apos;t need to be directly under a leak to be damaged by spreading moisture.</p>
                </div>
                <div className="bg-white rounded-xl shadow-md p-6">
                  <h3 className="font-bold text-secondary mb-2">4. Document Everything</h3>
                  <p className="text-gray-600 text-sm">Take photos and videos of the damage, both inside and outside if safe to do so. Document the date and time. This documentation is essential for insurance claims.</p>
                </div>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-500 rounded-xl p-8">
              <h3 className="text-xl font-bold text-red-700 mb-4">What NOT to Do</h3>
              <ul className="space-y-4 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span><strong>Don&apos;t climb on the roof</strong> - Damaged, wet roofs are extremely dangerous. Let professionals handle roof access.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span><strong>Don&apos;t ignore small leaks</strong> - Even minor leaks cause significant damage over time. Mold can develop within 24-48 hours.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span><strong>Don&apos;t make permanent repairs yourself</strong> - DIY roof repairs often cause more damage and can void warranties and insurance coverage.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span><strong>Don&apos;t delay calling</strong> - The longer water enters your home, the more extensive (and expensive) the damage becomes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-500 font-bold mt-1">✕</span>
                  <span><strong>Don&apos;t hire storm chasers</strong> - Out-of-town contractors who appear after storms often do poor work and disappear. Use local, licensed contractors.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Tarping Details */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Emergency Roof Tarping</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Emergency tarping provides critical protection while permanent repairs are planned. Here&apos;s what to expect from our tarping services.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-3">What We Do</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <span className="text-primary">&#10003;</span>
                  <span>Heavy-duty UV-resistant tarps sized for your damage area</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">&#10003;</span>
                  <span>Proper securing with wood battens and fasteners (not just weights)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">&#10003;</span>
                  <span>Coverage extending beyond damage for complete protection</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">&#10003;</span>
                  <span>Documentation photos for insurance claims</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary">&#10003;</span>
                  <span>Assessment of underlying damage extent</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-3">Tarping Details</h3>
              <ul className="space-y-3 text-gray-600">
                <li><strong>Cost:</strong> Typically $300-800 depending on damage size and roof access</li>
                <li><strong>Duration:</strong> Properly installed tarps last 30-90 days through normal weather</li>
                <li><strong>Timing:</strong> Same-day service for most emergencies</li>
                <li><strong>Insurance:</strong> Tarping costs are typically covered as part of your claim</li>
              </ul>
              <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                <p className="text-sm text-yellow-800"><strong>Important:</strong> Tarping is temporary protection, not a permanent fix. Plan for permanent repairs within 30-60 days to prevent further damage.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Storm Damage Specific */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Jacksonville Storm Damage Specialists</h2>
              <p className="text-gray-600">Living in Northeast Florida means preparing for severe weather. Our team has extensive experience with storm damage repair.</p>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-leak-emergency-repair.webp" alt="Emergency roof leak repair in Jacksonville FL" title="Emergency roof leak repair in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-3">Hurricane Damage</h3>
              <p className="text-gray-600 text-sm mb-3">Hurricane-force winds can tear off shingles, damage flashing, and even lift roof sections. Flying debris causes punctures and impacts. We respond quickly after storms pass to secure and repair hurricane damage.</p>
              <p className="text-gray-600 text-sm"><strong>Common issues:</strong> Missing shingles, lifted flashing, debris punctures, water intrusion, structural damage</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-3">Wind Damage</h3>
              <p className="text-gray-600 text-sm mb-3">Even non-hurricane winds can damage roofs. Gusts over 50 mph can lift shingles, break seals, and create entry points for water. Wind damage is often subtle and may not be visible from the ground.</p>
              <p className="text-gray-600 text-sm"><strong>Common issues:</strong> Lifted shingles, broken tab seals, exposed underlayment, ridge cap damage</p>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-bold text-secondary mb-3">Hail Damage</h3>
              <p className="text-gray-600 text-sm mb-3">Jacksonville occasionally experiences hail that can damage roofing materials. Hail creates dents in shingles that compromise their waterproofing ability. Damage may not leak immediately but shortens roof life.</p>
              <p className="text-gray-600 text-sm"><strong>Common issues:</strong> Dented shingles, granule loss, cracked tiles, damaged vents and flashing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Jacksonville Emergency Roof Repair Service Areas</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide emergency roofing services throughout Jacksonville and surrounding communities.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <span className="font-semibold text-secondary">Jacksonville</span>
                <p className="text-gray-500 text-sm">All neighborhoods</p>
              </div>
              {serviceAreas.map((area, index) => (
                <div key={index} className="text-center">
                  <Link href={area.href} className="font-semibold text-secondary hover:text-primary transition-colors">
                    {area.name}
                  </Link>
                </div>
              ))}
            </div>
            <p className="text-center mt-6 text-gray-600">
              <Link href="/service-areas" className="text-primary hover:underline">View all service areas →</Link>
            </p>
          </div>
        </div>
      </section>

      {/* Insurance Claims Assistance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Insurance Claims Assistance</h2>
              <p className="text-gray-600 mb-4">
                Storm damage often qualifies for insurance coverage. We understand the claims process and help make it easier for Jacksonville homeowners.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Thorough damage documentation with photos</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Detailed estimates for insurance adjusters</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-600">Direct communication with insurance companies</span>
                </li>
              </ul>
              <p className="text-gray-600">
                Learn more about the insurance process in our guide: <Link href="/blog/storm-damage-roofing-insurance" className="text-primary hover:underline">Storm Damage Roofing Insurance Claims</Link>
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Common Covered Damages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Wind and hurricane damage</li>
                <li>• Hail damage</li>
                <li>• Fallen trees and debris</li>
                <li>• Lightning strikes</li>
                <li>• Tornado damage</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Why Choose Gimos Roofing for Emergency Service</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Fast Response Times", description: "We prioritize emergencies and respond quickly to protect your home" },
              { title: "Licensed and Insured", description: "Fully licensed Florida roofing contractor with comprehensive insurance" },
              { title: "Experienced Storm Repairs", description: "Years of experience handling Jacksonville's severe weather damage" },
              { title: "Honest Assessments", description: "We tell you what you need, not what makes us the most money" },
              { title: "Quality Materials", description: "We use quality roofing materials for lasting repairs" },
              { title: "Insurance Assistance", description: "We help document damage and work with your insurance company" }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <h3 className="font-bold text-secondary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-8 text-center">Related Services</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/roof-repair" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Roof Repair Services</h3>
              <p className="text-gray-600 text-sm">Complete roof repair services for non-emergency situations, including leak repair, shingle replacement, and more.</p>
            </Link>
            <Link href="/services/roof-replacement" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Roof Replacement</h3>
              <p className="text-gray-600 text-sm">When repairs aren&apos;t enough, we provide complete roof replacement with quality materials and expert installation.</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Contact Us</h3>
              <p className="text-gray-600 text-sm">Get in touch for emergency help or to schedule a free inspection and estimate.</p>
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
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Need Emergency Roof Repair in Jacksonville?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Call {phone} now. We respond quickly to protect your home from further damage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:+19046065313" className="btn btn-primary text-lg px-8 py-4">
              Call Now: {phone}
            </a>
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100 text-lg px-8 py-4">
              Get Free Estimate
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
