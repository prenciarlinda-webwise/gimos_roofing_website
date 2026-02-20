import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Roofing Orange Park FL - Affordable Roof Repair & Replacement",
  description: "Roofing in Orange Park FL. Clay County's trusted roofers. Affordable roof repair & replacement for Orange Park & Fleming Island. Call (904) 606-5313.",
  keywords: ["roofing orange park fl", "roofing company orange park fl", "roof repair orange park", "clay county roofers", "orange park roof replacement", "fleming island roofing"],
  alternates: { canonical: "https://www.gimosroofing.com/roofing-orange-park-fl" },
}

const location = "Orange Park"
const county = "Clay County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Riverside", href: "/roofing-riverside-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" }
]

const faqs = [
  { question: `How much does roof replacement cost in ${location}?`, answer: `Roof replacement in ${location} typically ranges from $7,000 to $22,000 depending on home size and materials. Clay County homes tend to be more affordable to roof than Duval County properties. We offer free estimates and financing options starting at $99/month.` },
  { question: `Does my Clay County homeowner's insurance cover roof replacement?`, answer: `Most Clay County homeowner's insurance policies cover roof damage caused by storms, fallen trees, and other covered perils. However, normal wear and aging are not covered. We work directly with insurance companies and provide detailed documentation to help maximize your claim. Call ${phone} for a free inspection.` },
  { question: `How do I know if my aging roof needs replacement?`, answer: `Signs your Orange Park roof needs attention include curling or missing shingles, granules in your gutters, visible daylight in your attic, water stains on ceilings, and a roof age over 20 years. Many homes in the Kingsley Avenue and Blanding Blvd areas were built in the 1970s-1990s and may be on their second or third roof. We offer free inspections.` },
  { question: `Does Gimo's Roofing offer military discounts?`, answer: `We appreciate our military families near NAS Jacksonville. Contact us at ${phone} to ask about available discounts and special offers for active duty, veterans, and military families throughout ${location} and Clay County.` },
  { question: `Do you offer financing for ${location} homeowners?`, answer: `Yes! We understand that budget matters for Orange Park families. We offer flexible financing options with payments as low as $99/month, making roof replacement affordable. Multiple plans available with quick approval so you don't have to wait to protect your home.` },
  { question: `What roofing materials are the best value for Orange Park homes?`, answer: `For budget-conscious Orange Park homeowners, architectural shingles offer the best balance of durability, appearance, and cost. They last 25-30 years and come in many colors. For homeowners wanting a longer-term investment, metal roofing lasts 40-60 years and can reduce energy costs. We help you find the right option for your budget.` },
  { question: `Do you serve Fleming Island and Green Cove Springs?`, answer: `Yes! We serve all of Clay County including Fleming Island, Green Cove Springs, Lakeside, and Middleburg. Our crews are familiar with the different home styles and HOA requirements throughout the county. Call ${phone} for a free estimate anywhere in Clay County.` },
  { question: `What should I do after storm damage to my Orange Park roof?`, answer: `After a storm, document any visible damage with photos, avoid going on the roof yourself, and call ${phone} for a free emergency inspection. We provide 24/7 storm response throughout Clay County, including emergency tarping to prevent further water damage. We also assist with the insurance claims process from start to finish.` }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#localbusiness",
  "name": "Gimo's Roofing",
  "url": "https://www.gimosroofing.com/roofing-orange-park-fl",
  "telephone": "+19046065313",
  "logo": "https://www.gimosroofing.com/gimos-roofing-logo.webp",
  "image": "https://www.gimosroofing.com/images/roofing-jacksonville-hero.webp",
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
  "areaServed": {
    "@type": "City",
    "name": "Orange Park",
    "sameAs": [
      "https://en.wikipedia.org/wiki/Orange_Park,_Florida"
    ]
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services in Orange Park, FL",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Affordable Roof Replacement in Orange Park FL",
          "description": "Budget-friendly roof replacement for Orange Park and Clay County families with financing available."
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Roof Repair in Orange Park FL",
          "description": "Fast, reliable roof repair services for Orange Park homeowners at competitive Clay County pricing."
        }
      }
    ]
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
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.gimosroofing.com/service-areas" },
    { "@type": "ListItem", "position": 3, "name": "Orange Park", "item": "https://www.gimosroofing.com/roofing-orange-park-fl" }
  ]
}

export default function OrangeParkPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Orange Park FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Affordable roofing for Clay County&apos;s largest community. Competitive pricing on roof repair and replacement for Orange Park, Fleming Island, and Lakeside homes in ZIP codes 32065 and 32073.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Financing Available</span>
          </div>
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roofer-near-me.webp" alt="Reliable roofing services in Orange Park FL" title="Reliable roofing services in Orange Park FL" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10 text-secondary">
            <div className="text-center"><span className="text-3xl font-bold">500+</span><span className="text-sm ml-2">Roofs</span></div>
            <div className="text-center"><span className="text-3xl font-bold">15+</span><span className="text-sm ml-2">Years</span></div>
            <div className="text-center"><span className="text-3xl font-bold">5.0</span><span className="text-sm ml-2">Star Rating</span></div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            Orange Park is the heart of Clay County and one of Northeast Florida&apos;s most established family communities. From the neighborhoods surrounding Orange Park Town Center to the residential streets along Kingsley Avenue and Blanding Boulevard, this area is home to thousands of families who value quality, affordability, and honest service. With homes built across several decades, from the 1960s through the 2010s, {location} has a diverse housing stock that requires experienced roofers who understand each era&apos;s construction methods.
          </p>
          <p className="text-gray-600 mb-4">
            Many Orange Park homeowners are military families stationed at nearby NAS Jacksonville or veterans who chose Clay County for its excellent schools and lower cost of living. We understand that budget matters, and we&apos;re committed to delivering the best roofing value in the area without cutting corners on quality. Whether your home is in Lakeside, near Doctors Lake, or along the Blanding Blvd corridor, you deserve a roofer who respects both your home and your budget.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we&apos;ve built a strong reputation throughout Clay County for competitive pricing, expert craftsmanship, and fast project completion. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a complete roof replacement</Link>, <Link href="/services/roof-repair" className="text-primary hover:underline">targeted repairs</Link>, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency storm damage service</Link>, our team delivers results that last. Learn more about <Link href="/blog/best-roofing-materials-florida" className="text-primary hover:underline">the best roofing materials for Florida homes</Link>.
          </p>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Orange Park Homeowners Choose Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 mb-6">
            Clay County homeowners have options when it comes to roofers. Here&apos;s why families throughout Orange Park, Fleming Island, and Green Cove Springs trust us with their homes:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Competitive Clay County pricing:</strong> <span className="text-gray-600">We offer some of the best roofing prices in the area. Our low overhead and efficient crews mean you get quality materials and expert installation without paying premium prices. We beat most written estimates from other Clay County roofers.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Experience with diverse home ages:</strong> <span className="text-gray-600">Orange Park homes span from the 1960s to new construction. Older homes along Kingsley Avenue may need deck repairs and updated ventilation, while newer Lakeside homes may just need shingle replacement. We tailor our approach to your home&apos;s specific needs.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Flexible financing options:</strong> <span className="text-gray-600">We offer financing starting at $99/month so you can protect your home now and pay over time. Quick approval process with multiple plan options for every budget.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Fast completion times:</strong> <span className="text-gray-600">Most Orange Park roof replacements are completed in a single day. Our experienced crews arrive on time, work efficiently, and leave your property clean. Minimal disruption to your family&apos;s routine.</span></div>
            </li>
          </ul>
          <p className="text-gray-600">
            Read more about <Link href="/blog/how-to-choose-roofing-contractor-jacksonville" className="text-primary hover:underline">how to choose a roofing contractor</Link> and <Link href="/blog/roof-replacement-what-to-expect" className="text-primary hover:underline">what to expect during a roof replacement</Link>.
          </p>
        </div>
      </section>

      {/* Common Issues */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Issues in Orange Park</h2>
          <p className="text-gray-600 mb-6">
            After serving Clay County for years, we see recurring roofing problems specific to Orange Park&apos;s housing stock. Identifying these issues early prevents expensive repairs down the road:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Aging Shingle Roofs</h3>
              <p className="text-gray-600 text-sm">Many Orange Park homes from the 1970s-1990s are on their second or third roof with 3-tab shingles past their lifespan. Curling edges, granule loss, and brittle shingles signal it&apos;s time for a modern architectural shingle upgrade that lasts 25-30 years.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Storm & Wind Damage</h3>
              <p className="text-gray-600 text-sm">Clay County sees severe thunderstorms and occasional tropical systems that lift shingles, break seals, and send debris onto roofs. Even moderate storms can cause hidden damage that leads to leaks weeks later. Post-storm inspections are critical.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Improper Past Repairs</h3>
              <p className="text-gray-600 text-sm">We frequently find previous repairs done incorrectly by handymen or inexperienced roofers, including mismatched shingles, improper flashing, and sealant used as a permanent fix. These shortcuts often cause more problems than they solve.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Ventilation & Insulation Issues</h3>
              <p className="text-gray-600 text-sm">Older Orange Park homes often have inadequate attic ventilation and insulation, causing excessive heat buildup that warps decking and shortens shingle life. Proper ridge and soffit ventilation can extend your roof&apos;s lifespan by years and lower energy bills.</p>
            </div>
          </div>
          <p className="text-gray-600">
            Learn about <Link href="/blog/hurricane-roof-damage-signs-florida" className="text-primary hover:underline">signs of hurricane damage on your roof</Link> and <Link href="/blog/roof-maintenance-tips-florida" className="text-primary hover:underline">roof maintenance tips for Florida homeowners</Link>.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Roofing Services in {location}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/services/roof-replacement" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Complete tear-off and replacement with quality materials at competitive Clay County pricing. Starting at $7,000 with financing available.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Repair</h4>
              <p className="text-gray-600 text-sm">Fast, reliable repairs for leaks, missing shingles, damaged flashing, and storm damage. Same-week service for most Orange Park homes.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Emergency Storm Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for Clay County. Tarping, temporary repairs, and full insurance claim assistance after any storm.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Architectural Shingles</h4>
              <p className="text-gray-600 text-sm">The best value for Orange Park homes. 25-30 year lifespan, many colors available, and better wind resistance than 3-tab shingles.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Metal Roofing</h4>
              <p className="text-gray-600 text-sm">Long-term investment with 40-60 year lifespan. Energy-efficient, low maintenance, and excellent storm protection for Clay County homes.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Free Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Honest assessments for Orange Park homeowners. We tell you what needs fixing now, what can wait, and provide a detailed written estimate.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Review */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">What Our Customers Say</h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="flex items-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              ))}
            </div>
            <blockquote className="text-gray-700 text-lg italic mb-4">
              &ldquo;Outstanding service from start to finish. Gimo&apos;s crew showed up on time, worked efficiently, and my new roof looks incredible. Best price I found in the Clay County area. Definitely recommend!&rdquo;
            </blockquote>
            <p className="font-semibold text-secondary">- David Martinez</p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving Orange Park, Fleming Island, Lakeside, and all of Clay County.</p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.71590544476!2d-81.65529292427262!3d30.359022903597385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e44b1e311da61b%3A0xe141a9eec11ad009!2sGimo&#39;s%20Roofing!5e0!3m2!1sen!2s!4v1771230427854!5m2!1sen!2s" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Location"></iframe>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Frequently Asked Questions</h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Nearby Areas */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Nearby Service Areas</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <Link key={area.href} href={area.href} className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-600 hover:text-primary hover:shadow-md transition-all">
                {area.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Ready for a Free Estimate?</h2>
          <p className="text-secondary/80 mb-6">Contact us today for affordable, expert roofing services in {location} and Clay County.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
