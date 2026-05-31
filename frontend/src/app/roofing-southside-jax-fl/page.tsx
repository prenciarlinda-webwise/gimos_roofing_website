import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roofing Southside Jacksonville FL - Gimo's Roofing" },
  description: "Roofing company Southside Jacksonville FL. Residential and commercial roofing services Southside Jacksonville FL. Baymeadows, Deerwood, Town Center. Call (904) 606-5313.",
  openGraph: {
    title: "Roofing Southside Jacksonville FL - Gimo's Roofing",
    description: "Roofing services Southside Jacksonville FL. Residential and commercial. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/roofing-southside-jax-fl",
  },
  alternates: { canonical: "https://www.gimosroofing.com/roofing-southside-jax-fl" },
}

const location = "Southside Jacksonville"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" }
]

const faqs = [
  { question: "How much does a roof replacement cost in Southside Jacksonville?", answer: "Residential roof replacements in Southside Jacksonville typically run $9,500 to $32,000. The 1,800-2,400 sq ft homes in the older Baymeadows neighborhoods, Sans Souci, and Tinseltown built in the 1980s and 1990s usually land at $11,000-$17,000 in architectural shingle. The newer 2,500-3,500 sq ft homes in Deerwood, Deerwood Country Club, and the Hodges Boulevard subdivisions run $15,000-$26,000. The larger luxury homes in Pablo Creek Reserve and the gated parts of Deerwood run $22,000-$45,000. Commercial flat roof projects price by square footage and system  --  TPO on a 10,000 sq ft office along Gate Parkway typically runs $50,000-$85,000, with larger St. Johns Town Center retail roofs running well into six figures. We line-item every quote and we provide free estimates for both residential and commercial properties throughout 32216, 32246, 32256, and 32258." },
  { question: "Do you handle commercial flat roofing along Gate Parkway and the Town Center area?", answer: "Yes  --  commercial flat roof work is roughly half of our Southside business and we do a lot of it in 32246 and 32256. We install and repair TPO (60 mil and 80 mil), EPDM, modified bitumen (torch-applied and self-adhered), and standing seam metal on offices, retail centers, restaurants, medical buildings, and warehouses throughout Gate Parkway, Town Center Parkway, Touchton Road, Belfort Road, Skinner Parkway, and the Deerwood Park business district. We've done projects ranging from 3,000 sq ft single-tenant buildings to 80,000+ sq ft warehouse roofs. We schedule the loud and disruptive work (tear-off, hot-air welding) for evening or weekend hours when needed, and we section the work so that the building stays operational throughout. We also handle the property management coordination  --  COIs, parking lot logistics, tenant notifications  --  as part of the job." },
  { question: "What roofing materials work best for Southside Jacksonville homes?", answer: "For most Southside residential homes, we recommend a heavy architectural shingle  --  GAF Timberline HDZ or CertainTeed Landmark  --  in a wind-rated package with 6d ring-shank nails on a 6/12 nail pattern and synthetic underlayment. That gives you 22-28 years of real-world life, hurricane wind ratings, and the lowest cost-per-year for the area. For homeowners in the older Baymeadows and Sans Souci areas with longer time horizons, standing seam galvalume metal lasts 50+ years and qualifies for additional insurance premium credits. For the upscale Deerwood and Pablo Creek homes, we install premium designer shingles (GAF Grand Sequoia, CertainTeed Presidential) and concrete tile where the architecture calls for it. We don't install 3-tab shingles in Southside anymore  --  the 12-15 year lifespan in Northeast Florida heat makes them a false economy." },
  { question: "How do you minimize disruption to a business during a commercial reroof?", answer: "Four ways. First, we walk the building with the property manager before the job and map out where we'll stage materials, where the dump trailer will park, and which parking areas will be closed and when. Second, we schedule the loud work (tear-off, mechanical fastening, hot-air welding) for evenings, early mornings, or weekends if the tenant mix requires it  --  we've done plenty of work after hours for medical offices in the Baymeadows medical corridor and restaurants near St. Johns Town Center. Third, we section the roof so that we never have more than one area torn down at a time, and we always dry it in before crews leave for the day so a surprise rain doesn't flood the tenant. Fourth, we communicate daily  --  written progress updates to the property manager and any affected tenants. Most of our Southside commercial projects finish on or ahead of schedule." },
  { question: "Do you provide 24/7 emergency response for Southside commercial buildings?", answer: "Yes  --  and large commercial buildings are exactly where we get the most after-storm calls in 32216, 32246, and 32256. A flat TPO or modified bitumen roof on a 30,000 sq ft Town Center retail building or a 20,000 sq ft Gate Parkway office will take catastrophic damage from a single tropical storm if any of the seams, edge metal, or penetrations are compromised, and a roof breach can dump tens of thousands of gallons into the interior in a single rain event. We respond 24/7 with tarping, emergency seam welding, edge metal replacement, and full damage documentation for the insurance claim. For property managers, we maintain after-hours direct lines so you reach a real person, not voicemail. Call (904) 606-5313 day or night." },
  { question: "What's the actual lifespan of a TPO or modified bitumen flat roof in Southside Jacksonville?", answer: "In Northeast Florida heat and humidity, here's what we see in the field: 60 mil TPO lasts 18-25 years, 80 mil TPO lasts 22-30 years, EPDM (rubber) lasts 20-30 years, modified bitumen (SBS) lasts 15-22 years, and built-up gravel roofs last 15-20 years before they need a recover or full replacement. The thinner 45 mil TPO that some discount roofers install on Gate Parkway and Baymeadows commercial buildings only lasts 10-15 years in this climate  --  we don't install it. Lifespan also depends heavily on maintenance: ponding water, debris around drains, and unaddressed punctures from HVAC servicing will cut years off any system. We offer commercial maintenance programs that include semi-annual inspections, drain cleaning, and minor repair work  --  typically pays for itself within 2-3 years by extending the roof life." },
  { question: "Do you handle insurance claims for both residential and commercial Southside roofs?", answer: "Yes, and the documentation we provide is the difference between a paid claim and a denied one. For residential, we provide a full photo report (drone overhead, slope-by-slope close-ups, attic shots), an itemized scope of damage, and a notarized wind mitigation form (OIR-B1-1802) with every replacement. For commercial, the documentation is more rigorous: structural decking assessment, infrared moisture survey if water has penetrated, HVAC and penetration condition assessment, and a code-compliance scope. We work directly with Citizens, Universal, Heritage, FedNat, State Farm, USAA, and most of the carriers writing in 32216, 32246, and 32256, and we're familiar with the adjusters who cover Southside commercial. We'll meet your adjuster on the roof, walk them through the damage, and stay on the claim until it's paid in full. We don't take public-adjuster style fees  --  the documentation is part of the job." },
  { question: "Do the newer apartment complexes on Gate Parkway use different roofing than older Southside buildings?", answer: "Yes, and the difference matters if you manage or own one. The apartment complexes built along Gate Parkway, Kernan Boulevard, and Town Center Parkway since 2010 almost universally use 60 mil or 80 mil TPO membrane on the flat sections and architectural shingle on the pitched mansard facades. The older 1980s and 1990s apartment complexes along Baymeadows Road, Hodges Boulevard, and the Sans Souci area were typically built with modified bitumen or built-up gravel roofs that are now 30-40 years old and well past their useful life. Converting an older modified bitumen roof to TPO during replacement is usually the right call because TPO welds are more reliable in Florida humidity and the reflective white membrane cuts cooling costs 10-15% in multi-unit buildings." },
  { question: "What commercial roof warranties should Southside business owners demand?", answer: "For any commercial flat roof in Southside Jacksonville, you should require at minimum a 20-year manufacturer warranty with no-dollar-limit (NDL) coverage on both materials and labor. The big three manufacturers we install for commercial projects -- GAF, Carlisle, and Firestone -- all offer NDL warranties on TPO and EPDM systems when installed by a certified contractor using their full system (membrane, adhesive, flashing, edge metal). A cheaper installer offering only a 10-year or labor-limited warranty will cost you more in the long run because any failure within the warranty period comes out of your pocket. We are certified installers for all three systems and every commercial project we complete in 32216, 32246, and 32256 carries the full manufacturer NDL warranty." }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-southside-jax-fl#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/roofing-southside-jax-fl",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-southside-jax-fl#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.gimosroofing.com/service-areas" },
    { "@type": "ListItem", "position": 3, "name": "Southside Jacksonville", "item": "https://www.gimosroofing.com/roofing-southside-jax-fl" }
  ]
}

export default function SouthsideJaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving Southside Jacksonville & {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing Southside Jacksonville FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Residential and commercial roofing for Jacksonville&apos;s Southside. Baymeadows, Deerwood, St. Johns Town Center, and The Avenues. Serving ZIP codes 32216, 32246, and 32256.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Residential & Commercial</span>
          </div>
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/jacksonville-roofing-company.webp" alt="Roofing company serving Southside Jacksonville FL" title="Roofing company serving Southside Jacksonville FL" fill className="object-cover" priority />
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

      {/* Project Showcase */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/roofing-company-jacksonville.webp" alt="Roofing company serving Southside Jacksonville FL" title="Roofing Company - Southside Jacksonville FL" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/jacksonville-commercial-roofing.webp" alt="Commercial roofing services in Southside Jacksonville FL" title="Commercial Roofing - Southside Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            Southside Jacksonville is the commercial heart of Northeast Florida, home to the St. Johns Town Center, The Avenues Mall, and hundreds of office buildings, retail centers, and restaurants along Gate Parkway, Baymeadows Road, and Southside Boulevard. But the Southside is far more than a business district. Established residential neighborhoods in Baymeadows, Deerwood, Tinseltown, and the University Boulevard area house tens of thousands of families across ZIP codes 32216, 32246, and 32256.
          </p>
          <p className="text-gray-600 mb-4">
            This mix of residential and commercial properties creates the highest concentration of diverse roofing needs in the Jacksonville metro area. From flat TPO roofs on shopping centers to aging shingle roofs on 1980s and 1990s subdivision homes, the Southside demands a roofing contractor who can handle it all.
          </p>
          <p className="text-gray-600">
            As a roofing company Southside Jacksonville FL homeowners and businesses rely on, Gimo&apos;s Roofing serves both residential homeowners and commercial property managers throughout the Southside. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a complete roof replacement</Link> for your Deerwood home, <Link href="/services/commercial-roofing" className="text-primary hover:underline">commercial roofing</Link> for your office building, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency roof repair</Link> after a storm, our team delivers quality work with minimal disruption.
          </p>
        </div>
      </section>

      {/* Why Versatile Roofers */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Southside Jacksonville Needs Versatile Roofers</h2>
          <p className="text-gray-600 mb-4">
            Unlike purely residential areas, the Southside&apos;s blend of commercial corridors and residential neighborhoods requires a roofing company with broad expertise. Here&apos;s what sets Southside roofing apart:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Commercial flat roof expertise:</strong> <span className="text-gray-600">Office buildings, shopping centers, and restaurants along Gate Parkway and Baymeadows require specialized flat roofing systems like TPO, EPDM, and modified bitumen. These systems demand different skills and materials than residential steep-slope roofing.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Diverse housing stock:</strong> <span className="text-gray-600">The Southside includes newer subdivisions built in the 2000s-2010s alongside established neighborhoods from the 1980s and 1990s. Older homes in Baymeadows may be on their second or third roof, while newer Deerwood properties may need their first replacement. Each requires a different approach.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">High-traffic area requiring fast work:</strong> <span className="text-gray-600">Commercial properties near St. Johns Town Center and The Avenues can&apos;t afford extended closures or disrupted parking lots. We coordinate with property managers to complete work efficiently while keeping businesses operational.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Mixed-use buildings:</strong> <span className="text-gray-600">The Southside has a growing number of mixed-use developments with retail on the ground floor and residential above. These buildings require roofing solutions that account for both commercial durability and residential comfort.</span></div>
            </li>
          </ul>
          <p className="text-gray-600">
            Learn more about <Link href="/blog/best-roofing-materials-florida" className="text-primary hover:underline">the best roofing materials for Florida</Link> and how to <Link href="/blog/how-to-choose-roofing-contractor-jacksonville" className="text-primary hover:underline">choose the right roofing contractor in Jacksonville</Link>.
          </p>
        </div>
      </section>

      {/* Common Roofing Challenges */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Challenges on the Southside</h2>
          <p className="text-gray-600 mb-6">
            After years of serving Southside property owners, we see these issues repeatedly across both residential and commercial roofs. Early detection prevents costly damage:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Flat Roof Ponding & Leaks</h3>
              <p className="text-gray-600 text-sm">Commercial flat roofs along Southside Blvd and Gate Parkway are prone to ponding water after heavy Florida rains. Standing water deteriorates roofing membranes and causes leaks into office spaces and retail areas. Proper drainage design is critical.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Aging Subdivision Shingles</h3>
              <p className="text-gray-600 text-sm">Many Baymeadows and Tinseltown homes built in the 1980s and 1990s are on original or second-generation shingle roofs that are past their useful life. Curling edges, missing granules, and persistent leaks signal it&apos;s time for replacement.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Storm Damage on Large Buildings</h3>
              <p className="text-gray-600 text-sm">Large commercial buildings have massive roof surface areas that are highly vulnerable to hurricane and tropical storm damage. A single storm can cause tens of thousands of dollars in damage to a shopping center or office complex roof.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">HVAC Penetration Issues</h3>
              <p className="text-gray-600 text-sm">Commercial roofs on the Southside are covered with HVAC units, vents, and ductwork penetrations. Each penetration is a potential leak point. Deteriorated flashing and sealants around these units are the leading cause of commercial roof leaks.</p>
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
              <h4 className="font-bold text-secondary mb-2">Residential Roof Replacement</h4>
              <p className="text-gray-600 text-sm">Complete tear-off and replacement for Southside homes. Architectural shingles, metal, and tile options. Starting at $7,500.</p>
            </Link>
            <Link href="/services/commercial-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Commercial Roofing</h4>
              <p className="text-gray-600 text-sm">TPO, EPDM, modified bitumen, and metal systems for offices, retail, and restaurants. Minimal business disruption.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Repair</h4>
              <p className="text-gray-600 text-sm">Fast residential and commercial repairs for leaks, storm damage, and aging materials. Same-week scheduling available.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Emergency Storm Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and storm damage. Tarping, leak containment, and insurance claim assistance.</p>
            </Link>
            <Link href="/services/metal-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Metal Roofing</h4>
              <p className="text-gray-600 text-sm">Standing seam and corrugated metal for residential and commercial. 40-60 year lifespan with superior wind resistance.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Free inspections for homes and commercial properties. Detailed reports with photos and repair recommendations.</p>
            </div>
            <Link href="/services/roof-gutter" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Gutters</h4>
              <p className="text-gray-600 text-sm">Seamless gutter installation, repair, and replacement for Southside homes and high-traffic commercial properties where clogged drainage backs water onto flat and low-slope roofs.</p>
            </Link>
            <Link href="/services/roof-waterproofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Waterproofing</h4>
              <p className="text-gray-600 text-sm">Reflective roof coatings and flashing sealing for the flat and low-slope TPO and modified bitumen roofs common on Gate Parkway and Town Center commercial buildings.</p>
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
              &ldquo;Had Gimo&apos;s do our office building roof and they were outstanding. Minimal disruption to our business, finished ahead of schedule, and the quality is excellent. Already referred them to neighboring businesses.&rdquo;
            </blockquote>
            <p className="font-semibold text-secondary">- Lisa Thompson</p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving Southside Jacksonville and all of Northeast Florida&apos;s residential and commercial communities.</p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.71590544476!2d-81.65529292427262!3d30.359022903597385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e44b1e311da61b%3A0xe141a9eec11ad009!2sGimo&#39;s%20Roofing!5e0!3m2!1sen!2s!4v1771230427854!5m2!1sen!2s" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Location"></iframe>
          </div>
        </div>
      </section>

      {/* ZIP Code Coverage */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing in 32216, 32246, and 32256 - Southside Jacksonville ZIP Codes</h2>
          <p className="text-gray-600 mb-4">
            ZIP codes 32216, 32246, and 32256 cover Southside Jacksonville. 32216 is the older Baymeadows and University Boulevard area; 32246 covers Tinseltown, the Town Center area, and the Hodges Boulevard residential corridor; 32256 covers Deerwood, Deerwood Country Club, and the Pablo Creek Reserve area. The housing stock ranges from 1980s-1990s subdivisions in Baymeadows to 2000s-2010s estates in Deerwood. The Gate Parkway commercial corridor in 32246 generates most of our flat-roof TPO, EPDM, and modified bitumen commercial work, and we cover the residential side across all three ZIPs.
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
          <p className="text-secondary/80 mb-6">Contact us today for expert residential and commercial roofing services in {location}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
