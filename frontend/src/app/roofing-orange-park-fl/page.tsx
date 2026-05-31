import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roofing Orange Park FL - Gimo's Roofing" },
  description: "Roofing Orange Park FL. Clay County's trusted roofers for affordable roof repair and replacement in Orange Park and Fleming Island. Call (904) 606-5313.",
  openGraph: {
    title: "Roofing Orange Park FL - Gimo's Roofing",
    description: "Roofing Orange Park FL. Clay County roof repair and replacement. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/roofing-orange-park-fl",
  },
  alternates: { canonical: "https://www.gimosroofing.com/roofing-orange-park-fl" },
}

const location = "Orange Park"
const county = "Clay County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Riverside", href: "/roofing-riverside-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" }
]

const faqs = [
  { question: "How much does a roof replacement actually cost in Orange Park?", answer: "Most Orange Park roof replacements run $9,000 to $24,000, with the spread driven by home size and material. A standard 1,500-2,000 sq ft architectural shingle re-roof in the older Lakeside, Bellair, and Loch Rane neighborhoods runs $9,500-$14,000. The newer 2,200-3,000 sq ft homes in Eagle Harbor on Fleming Island, Oakleaf Plantation, and the Argyle Forest stretches off Blanding run $13,000-$19,000. Larger homes in OakLeaf Village, Plantation Oaks, and the upscale parts of Fleming Island run $17,000-$28,000. Standing seam metal roofing  --  increasingly popular in Clay County  --  adds roughly 60-80% to a comparable shingle quote. Clay County permit fees are typically $150-$280 and we include them in the quote. Free written estimates and financing from $99/month with quick approval, including special pricing for military families stationed at NAS Jax." },
  { question: "Will my Clay County homeowner's insurance cover my roof replacement?", answer: "It depends on what caused the damage. Storm damage, fallen tree limbs, hail, and other sudden covered perils are typically paid by your policy after your deductible. Normal wear and tear, age, and gradual deterioration are not  --  that's on you regardless of carrier. We've seen most of the major Clay County insurers tighten up significantly in the last few years; Citizens, Universal, and the few private carriers still writing here are non-renewing 15-20+ year old roofs even when they're not actively leaking. If you've gotten a non-renewal letter, you have a limited window to replace before the policy lapses. We provide a notarized wind mitigation inspection (form OIR-B1-1802) with every replacement, which qualifies for 15-45% premium credits on the new policy. Call (904) 606-5313 for a free claim-prep inspection." },
  { question: "How do I tell if my Orange Park roof needs full replacement vs. repair?", answer: "Five things tell us a roof in 32065 or 32073 has reached the end of its life: shingles curling at the edges across multiple slopes (not just one corner), bare spots where the granules have washed off into the gutters, visible daylight or water staining on the decking from inside the attic, multiple leaks in different areas after the same rain event, and a roof age of 18+ years on the original 3-tab shingle stock that came on most 1980s-1990s homes along Kingsley Avenue, Blanding Blvd, and Wells Road. Any one of those is a yellow flag; two or more is a replacement, not a repair. A single leak in an isolated area on an otherwise-healthy roof is just a repair  --  and we'll tell you that honestly. We don't sell replacements that don't need to happen." },
  { question: "Does Gimo's Roofing offer military discounts for NAS Jacksonville families?", answer: "Yes. We have a long history with the military community in Clay County  --  NAS Jacksonville is just across the river and a huge percentage of Orange Park, Argyle, and Lakeside families are active duty Navy, retired Navy, or DoD civilians. We offer a flat 8% discount for active duty, retired military, veterans with honorable discharge, and surviving military spouses on every roof replacement and major repair. We also work around deployment schedules  --  we've handled plenty of jobs for spouses while their service member was at sea, and we coordinate with deployed homeowners by email and video. Bring a military ID, DD-214, or VA card to the estimate (or just tell us  --  we'll trust you). Call (904) 606-5313." },
  { question: "What should I do immediately after storm damage to my Orange Park roof?", answer: "Four steps, in order. First: don't go on the roof yourself -- wet shingles, hidden structural damage, and downed power lines kill people every year after storms in Clay County. Second: photograph everything you can see from the ground and from inside the attic, including any water staining, displaced shingles, or debris. Third: call us at (904) 606-5313 for a free emergency inspection -- we run 24/7 storm response throughout Clay County and we're typically on-site within a few hours of a call. We bring tarps and emergency plywood to lock the roof down so you stop water damage to the interior. Fourth: file your insurance claim, but don't sign anything from a door-knocking 'storm chaser' contractor. We handle the claim documentation for you as part of the job." },
  { question: "Does Clay County require the same wind mitigation standards as Duval?", answer: "Yes and no. Both Clay and Duval counties fall under the Florida Building Code, which requires 130+ mph wind-rated roofing throughout Northeast Florida. However, Clay County's building department applies a slightly different inspection process than Duval, and some Clay inspectors are stricter about nail pattern documentation during the dry-in inspection. The practical difference for homeowners in Orange Park, Fleming Island, and Oakleaf is that your wind mitigation form (OIR-B1-1802) carries the same insurance credit value as a Duval home, but the Clay County permit and inspection timeline can run 1-2 days longer. We pull Clay County permits every week and know the inspection schedule." },
  { question: "How do clay soil shifts in Orange Park affect roof structures over time?", answer: "Orange Park and much of Clay County sit on expansive clay soils that swell when wet and shrink when dry. Over 20-30 years, this seasonal movement causes subtle foundation settling in older homes along Kingsley Avenue, Wells Road, and the Loch Rane and Bellair neighborhoods. When the foundation shifts, the roof framing follows, and that shows up as cracked ridge caps, gaps at fascia board connections, and interior ceiling cracks that track along truss lines. During every Orange Park re-roof, we check the framing alignment from inside the attic and flag any structural movement before we install new materials on top of it." }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-orange-park-fl#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/roofing-orange-park-fl",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-orange-park-fl#breadcrumb",
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
            Read more about <Link href="/blog/how-to-choose-roofing-contractor-jacksonville" className="text-primary hover:underline">how to choose a roofing contractor</Link> and <Link href="/blog/cleaning-up-after-roof-replacement" className="text-primary hover:underline">what to expect during a roof replacement</Link>.
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
            Learn about <Link href="/blog/hurricane-roof-damage-signs-florida" className="text-primary hover:underline">signs of hurricane damage on your roof</Link> and <Link href="/blog/roof-maintenance-tips-florida-homeowners" className="text-primary hover:underline">roof maintenance tips for Florida homeowners</Link>.
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
            <Link href="/services/metal-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Metal Roofing</h4>
              <p className="text-gray-600 text-sm">Long-term investment with 40-60 year lifespan. Energy-efficient, low maintenance, and excellent storm protection for Clay County homes.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Free Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Honest assessments for Orange Park homeowners. We tell you what needs fixing now, what can wait, and provide a detailed written estimate.</p>
            </div>
            <Link href="/services/roof-gutter" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Gutters</h4>
              <p className="text-gray-600 text-sm">Seamless gutter installation, repair, and replacement at competitive Clay County pricing. We handle the heavy summer thunderstorm runoff and keep pine straw and oak debris from clogging your downspouts.</p>
            </Link>
            <Link href="/services/roof-waterproofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Waterproofing</h4>
              <p className="text-gray-600 text-sm">Roof coatings, leak sealing, and flashing repair for flat and low-slope roofs on Orange Park and Fleming Island homes. We seal vulnerable penetrations and valleys before clay-soil settling opens new leak points.</p>
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
            <iframe src="https://maps.google.com/maps?q=Orange+Park,+FL+32073&t=&z=12&ie=UTF8&iwloc=&output=embed" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Service Area - Orange Park FL"></iframe>
          </div>
        </div>
      </section>

      {/* ZIP Code Coverage */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing in 32065 and 32073 - Orange Park ZIP Codes</h2>
          <p className="text-gray-600 mb-4">
            ZIP codes 32065 and 32073 cover Orange Park and the surrounding Clay County residential communities. 32073 is the heart of Orange Park including Lakeside, Bellair, and the Kingsley Avenue commercial corridor. 32065 covers the western Orange Park stretches and the Argyle Forest residential area off Blanding Boulevard. Adjacent ZIPs we serve include 32003 (Fleming Island and Eagle Harbor), 32068 (Middleburg), and 32043 (Green Cove Springs). The housing stock spans 1970s ranch homes through 2000s subdivision builds, and most replacements we do here are architectural shingle in the $9,500-$22,000 range.
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
