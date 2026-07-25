import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roofing Mandarin FL - Gimo's Roofing" },
  description: "Roofing company Mandarin FL. Trusted roofing contractor Mandarin FL for tree damage repair, full replacements, and storm response. Call (904) 606-5313.",
  openGraph: {
    title: "Roofing Mandarin FL - Gimo's Roofing",
    description: "Roofing company Mandarin FL. Tree damage repair and roof replacements. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/roofing-mandarin-fl",
  },
  alternates: { canonical: "https://www.gimosroofing.com/roofing-mandarin-fl" },
}

const location = "Mandarin"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { name: "Orange Park", href: "/roofing-orange-park-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" },
  { name: "Riverside", href: "/roofing-riverside-fl" }
]

const faqs = [
  { question: `Do you handle tree damage roof repairs in ${location}?`, answer: `Yes! Tree damage is one of the most common calls we get from ${location} homeowners. Mandarin's mature oak canopy regularly drops limbs during storms. We provide 24/7 emergency response for fallen branches, punctured decking, and storm-related tree damage. Call ${phone} for immediate help.` },
  { question: `My Mandarin home has an original 1980s or 1990s roof. Does it need replacement?`, answer: `Most likely, yes. Standard 3-tab shingles from the 1980s and 1990s have a 20-25 year lifespan, meaning original roofs from that era are well past due. We see cracked, curling, and missing shingles on these older Mandarin roofs daily. We offer free inspections to assess your roof's condition and recommend the best course of action.` },
  { question: `How much does roof replacement cost in ${location}?`, answer: `Roof replacement in ${location} typically ranges from $7,500 to $28,000 depending on home size, materials, and complexity. Many Mandarin homes in the 1,500-2,500 sq ft range fall in the $10,000-$18,000 range for architectural shingles. We offer free estimates and financing from $99/month.` },
  { question: `Will my insurance cover an older roof in ${location}?`, answer: `Many insurers in Florida are now requiring roof replacement for homes with roofs over 15-20 years old. If your Mandarin home has an aging roof, your premiums may be higher or coverage limited. A new roof can save you 15-30% on insurance premiums. We provide documentation for insurance companies and can help with the claims process.` },
  { question: `Why does my Mandarin roof have moss and algae?`, answer: `Mandarin's dense tree canopy creates persistent shade and traps moisture on roof surfaces. This creates ideal conditions for moss, algae (the black streaks), and lichen growth. Beyond being unsightly, these organisms retain moisture against shingles and accelerate deterioration. We install algae-resistant shingles and can recommend trimming strategies to reduce shade buildup.` },
  { question: `How should I prepare my Mandarin roof for hurricane season?`, answer: `Start with a professional inspection before June. We check for loose shingles, compromised flashing, and weak spots that could fail in high winds. For Mandarin homes specifically, we also check for overhanging branches that could break and puncture your roof. Trim branches back at least 6 feet from rooflines. Call ${phone} to schedule a pre-hurricane season inspection.` },
  { question: `Do older Mandarin homes have ventilation problems?`, answer: `Yes, many 1970s-1990s Mandarin homes were built with inadequate attic ventilation by today's standards. Poor ventilation traps heat and moisture, causing premature shingle deterioration from underneath, higher energy bills, and potential mold issues. During any roof replacement, we assess and upgrade ventilation to meet current building codes, adding ridge vents and soffit vents as needed.` },
  { question: `Why do so many Mandarin homes from the 1980s have failing roof vents?`, answer: `The production builders who developed most of Mandarin's subdivisions along Old St. Augustine Road, Loretto Road, and the Julington Creek corridor in the 1980s installed the cheapest plastic turbine vents and box vents available. After 35-40 years of Florida UV, those plastic housings crack, warp, and leak. We find failed roof vents on nearly every 1980s-era Mandarin inspection in neighborhoods like Beauclerc, Christopher Point, and the stretches off Hood Road. Replacing them during a re-roof is inexpensive, but ignoring them lets water into the attic for years before you see staining on the ceiling.` },
  { question: `How does Julington Creek flooding affect roofs in nearby Mandarin neighborhoods?`, answer: `Julington Creek and its tributaries flood regularly during heavy summer rains and tropical systems, and the rising water table in neighborhoods like Julington Creek Plantation, Christopher Point, and the low areas near Mandarin Road pushes moisture up through the soil. That ground-level moisture combines with Mandarin's canopy shade to keep humidity trapped under rooflines for days after a storm. The result is accelerated underlayment rot and fastener corrosion that you would not see on higher-ground homes a mile away. If your home backs up to a creek or retention pond in Mandarin, we recommend synthetic underlayment and enhanced ridge ventilation to manage that extra moisture load.` },
  { question: `Does Mandarin's proximity to the St. Johns River increase roof humidity damage?`, answer: `Yes. Mandarin runs along the west bank of the St. Johns for miles, and homes in Beauclerc, Epping Forest, Mandarin Point, and the riverfront streets off Mandarin Road sit in a microclimate that is measurably more humid than neighborhoods a few miles inland. The river moisture feeds algae and moss growth on north-facing slopes, accelerates sealant breakdown on ridge caps, and keeps attic humidity elevated even in winter. We see more underlayment failures on riverfront Mandarin homes at 15 years than we see on comparable homes in Orange Park at 20 years. Proper soffit-to-ridge ventilation and algae-resistant shingles are the two best defenses.` }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-mandarin-fl#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/roofing-mandarin-fl",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-mandarin-fl#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.gimosroofing.com/service-areas" },
    { "@type": "ListItem", "position": 3, "name": "Mandarin", "item": "https://www.gimosroofing.com/roofing-mandarin-fl" }
  ]
}

export default function MandarinPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Mandarin FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Trusted roofers for Mandarin&apos;s tree-lined neighborhoods. Specializing in aging roof replacement, tree damage repair, and moss prevention for homes in ZIP codes 32223, 32257, and 32258.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Free Estimates</span>
          </div>
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/gimos-roofing-jacksonville.webp" alt="Gimos Roofing serving Mandarin Jacksonville FL" title="Gimos Roofing serving Mandarin Jacksonville FL" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10 text-secondary">
            <div className="text-center"><span className="text-3xl font-bold">500+</span><span className="text-sm ml-2">Roofs</span></div>
            <div className="text-center"><span className="text-3xl font-bold">24</span><span className="text-sm ml-2">Years</span></div>
            <div className="text-center"><span className="text-3xl font-bold">5.0</span><span className="text-sm ml-2">Star Rating</span></div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            Mandarin is one of Jacksonville&apos;s most beloved neighborhoods, known for its massive live oaks, quiet suburban streets, and established family communities stretching along the St. Johns River. From the historic Mandarin Road corridor and Beauclerc to Loretto, Crown Point, and the neighborhoods bordering Julington Creek, this area is defined by mature landscaping and homes built primarily from the 1970s through the 2000s.
          </p>
          <p className="text-gray-600 mb-4">
            That beautiful tree canopy comes with a cost to your roof. Mandarin&apos;s towering oaks and dense shade create a unique set of roofing challenges that inland neighborhoods without heavy canopy simply don&apos;t face. Persistent shade traps moisture, fallen branches cause impact damage, and leaf debris clogs gutters and valleys. Combined with an aging housing stock where many original roofs are now 25-40 years old, {location} homeowners face roofing decisions that require local expertise.
          </p>
          <p className="text-gray-600">
            As a trusted roofing company in Mandarin FL, Gimo&apos;s Roofing has served homeowners throughout the San Jose Boulevard corridor and surrounding neighborhoods for years. As an experienced roofing contractor in Mandarin FL, we understand the specific challenges that come with roofing under heavy canopy and know which materials perform best in shaded, moisture-prone environments. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a full roof replacement</Link> on a 1980s home or <Link href="/services/roof-repair" className="text-primary hover:underline">targeted repairs</Link> from the last storm, our team delivers reliable results. <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">Emergency roof repair</Link> is available 24/7 throughout {location}.
          </p>
        </div>
      </section>

      {/* Why Mandarin Roofs Face Unique Challenges */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Mandarin Roofs Face Unique Challenges</h2>
          <p className="text-gray-600 mb-4">
            Mandarin&apos;s character as a tree-covered, established suburban community creates roofing conditions that differ significantly from newer developments or open-canopy neighborhoods. Here&apos;s what sets {location} apart:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Mature oak canopy:</strong> <span className="text-gray-600">Mandarin&apos;s signature live oaks and water oaks create dense shade over rooflines, trapping moisture and promoting organic growth. Branches overhang roofs, dropping leaves, acorns, and Spanish moss that accumulate in valleys and gutters. During storms, dead branches become projectiles that puncture shingles and crack decking.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Aging housing stock (1970s-2000s):</strong> <span className="text-gray-600">The majority of Mandarin homes were built between 1975 and 2005. Many still have their original roofs or first-generation replacements that are now reaching end of life. Older 3-tab shingles, outdated underlayment, and insufficient ventilation systems are common finds during our inspections along Mandarin Road and in Beauclerc subdivisions.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">St. Johns River humidity:</strong> <span className="text-gray-600">Mandarin&apos;s position along the St. Johns River means elevated humidity levels, especially for homes in Beauclerc and along the riverfront. This persistent moisture accelerates shingle deterioration, promotes algae and mold growth, and can lead to premature underlayment failure on shaded roof slopes.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Mix of original and replacement roofs:</strong> <span className="text-gray-600">Some Mandarin homes are on their second or even third roof, while others still have aging original materials. This creates a wide range of conditions across the neighborhood. Homes that were re-roofed in the early 2000s with budget materials are now showing premature failure, while well-maintained premium replacements from the same era still have years of life remaining.</span></div>
            </li>
          </ul>
        </div>
      </section>

      {/* Common Roofing Problems in Mandarin */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Problems in Mandarin</h2>
          <p className="text-gray-600 mb-6">
            After years of working on Mandarin roofs from Crown Point to Loretto, we see the same issues consistently. Recognizing these early can save you thousands in repair costs:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Tree Debris & Branch Damage</h3>
              <p className="text-gray-600 text-sm">Falling branches during thunderstorms are the number one cause of emergency roof calls in Mandarin. Even small limbs can crack shingles, dent flashing, and puncture underlayment. Accumulated leaf debris in valleys and gutters holds moisture against the roof surface, causing rot and leaks over time.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Moss & Algae Under Canopy</h3>
              <p className="text-gray-600 text-sm">Mandarin&apos;s shaded roofs are prime territory for moss, algae (black streaks), and lichen. These organisms thrive in the moisture trapped by tree canopy and retain water against shingle surfaces. Left untreated, they break down protective granules and significantly shorten roof lifespan.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Aging Shingle Deterioration</h3>
              <p className="text-gray-600 text-sm">Many Mandarin homes still have 3-tab shingles from the 1990s or early 2000s that are curling, cracking, and losing granules. These aging shingles become brittle and fail to seal properly, making them vulnerable to wind uplift and water intrusion during Florida&apos;s frequent summer storms.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Poor Ventilation in Older Homes</h3>
              <p className="text-gray-600 text-sm">Homes built in the 1970s and 1980s throughout Mandarin often have inadequate attic ventilation. Insufficient airflow traps heat and moisture, causing shingles to deteriorate from both sides. This leads to premature aging, higher cooling costs, and potential mold growth in attic spaces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Roofing Services in {location}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/services/roof-replacement" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Complete tear-off and replacement with modern architectural shingles or metal. Ideal for Mandarin&apos;s aging 1980s-2000s roofs. Starting at $7,500.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Tree Damage & Storm Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for fallen branches, storm damage, and tarping. Insurance claim assistance included.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Repair</h4>
              <p className="text-gray-600 text-sm">Fix leaks, replace damaged shingles, repair flashing, and address moss or algae damage on Mandarin&apos;s shaded roofs.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Architectural Shingles</h4>
              <p className="text-gray-600 text-sm">Premium algae-resistant shingles designed to perform under heavy canopy. 25-30 year lifespan with manufacturer warranty.</p>
            </div>
            <Link href="/services/metal-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Metal Roofing</h4>
              <p className="text-gray-600 text-sm">Standing seam and metal shingle options. Superior impact resistance against falling branches, 40-60 year lifespan.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Free comprehensive inspections for aging roofs. We assess ventilation, shingle condition, and canopy-related damage.</p>
            </div>
            <Link href="/services/roof-gutter" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Gutters</h4>
              <p className="text-gray-600 text-sm">Seamless gutter installation, repair, and replacement sized for Mandarin&apos;s heavy summer rains and the constant leaf and acorn debris dropping from the oak canopy.</p>
            </Link>
            <Link href="/services/roof-waterproofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Waterproofing</h4>
              <p className="text-gray-600 text-sm">Protective roof coatings and flashing sealing that keep moisture out where Mandarin&apos;s shaded, humid roof slopes stay wet long after the rain stops.</p>
            </Link>
            <Link href="/services/chimney-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Chimney Repair</h4>
              <p className="text-gray-600 text-sm">Chimney cap replacement and flashing repair for Mandarin homes under heavy oak canopy, where shade keeps chimney masonry damp long after storms pass and accelerates mortar breakdown.</p>
            </Link>
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
              &ldquo;Great work! They replaced my entire roof in one day. Very professional crew, cleaned up perfectly. Highly recommend Gimo&apos;s Roofing for anyone in the Mandarin area.&rdquo;
            </blockquote>
            <p className="font-semibold text-secondary">- Cindy Beasley</p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving Mandarin, Beauclerc, Loretto, Crown Point, and all of South Jacksonville.</p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.71590544476!2d-81.65529292427262!3d30.359022903597385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e44b1e311da61b%3A0xe141a9eec11ad009!2sGimo&#39;s%20Roofing!5e0!3m2!1sen!2s!4v1771230427854!5m2!1sen!2s" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Location"></iframe>
          </div>
        </div>
      </section>

      {/* ZIP Code Coverage */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing in 32223, 32257, and 32258 - Mandarin ZIP Codes</h2>
          <p className="text-gray-600 mb-4">
            ZIP codes 32223, 32257, and 32258 cover Mandarin and the surrounding St. Johns River residential communities in southern Duval County. 32223 is the heart of Mandarin including the older established neighborhoods along Mandarin Road, San Jose Boulevard, and the streets near Mandarin Park. 32257 covers the western and southern stretches including parts of the Loretto and Beauclerc areas. 32258 covers the southernmost edge bordering St. Johns County. The dense live oak canopy throughout all three ZIPs is the single biggest factor affecting roof life here, followed by the high humidity from the river. All three Mandarin ZIP codes fall within Duval County Public Schools.
          </p>
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
          <p className="text-secondary/80 mb-6">Contact us today for expert roofing services in {location}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
