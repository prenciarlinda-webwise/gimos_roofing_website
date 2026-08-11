import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'
import HeroQuoteForm from '@/components/HeroQuoteForm'

export const metadata: Metadata = {
  title: { absolute: "Best Roofing Company in Jacksonville FL - Gimo's Roofing" },
  description: "Looking for the best roofing company in Jacksonville FL? Gimo's Roofing has 500+ roofs completed and 5-star reviews. Roof repair, replacement, and installation by top-rated Jacksonville roofers. Call (904) 606-5313.",
  openGraph: {
    title: "Best Roofing Company in Jacksonville FL - Gimo's Roofing",
    description: "Roofing Jacksonville FL by Gimo's Roofing. 500+ roofs, 5-star reviews, licensed & insured. Free estimates: (904) 606-5313.",
    url: "https://www.gimosroofing.com/roofing-jacksonville-fl",
    images: [{
      url: "https://www.gimosroofing.com/images/roofing-jacksonville-fl.webp",
      width: 1200,
      height: 630,
      alt: "Best Roofing Company in Jacksonville FL - Gimo's Roofing",
    }],
  },
  alternates: { canonical: "https://www.gimosroofing.com/roofing-jacksonville-fl" },
}

const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const financingUrl = 'https://application.enerbank.com/#/link?spnum=8007747598&cid=118584&promo=DEL2625&loamt='

const neighborhoods = [
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Atlantic Beach", href: "/roofing-atlantic-beach-fl" },
  { name: "Neptune Beach", href: "/roofing-neptune-beach-fl" },
  { name: "Riverside", href: "/roofing-riverside-fl" },
  { name: "San Marco", href: "/roofing-san-marco-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Southside", href: "/roofing-southside-jax-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { name: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { name: "Nocatee", href: "/roofing-nocatee-fl" },
  { name: "Orange Park", href: "/roofing-orange-park-fl" },
  { name: "Fernandina Beach", href: "/roofing-fernandina-beach-fl" }
]

const faqs = [
  { question: "What is the best roofing company in Jacksonville FL?", answer: "Gimo's Roofing is consistently rated the best roofing company in Jacksonville FL with a 5.0-star rating across Google, Yelp, and Thumbtack. With 500+ completed roofs, 24 years of experience, and fully licensed and insured contractors, we deliver quality workmanship on every project. Our Jacksonville roofers specialize in roof replacement, roof repair, and new construction roofing throughout Duval County." },
  { question: "How much does a new roof cost in Jacksonville FL?", answer: "A new roof in Jacksonville FL typically costs between $7,900 and $25,000+ depending on your home's size, roof complexity, and materials chosen. Architectural shingles are the most popular choice, while metal roofing and tile cost more but last longer. Gimo's Roofing offers free estimates and flexible financing starting at $99/month so you can get the roof you need without financial stress." },
  { question: "How do I choose a Jacksonville roofing contractor?", answer: "When choosing a Jacksonville roofing contractor, verify their Florida license (you can check at myfloridalicense.com), confirm they carry liability insurance and workers' compensation, read Google reviews, ask for local references, and get written estimates. Avoid roofers who demand large upfront deposits or only accept cash. Gimo's Roofing is fully licensed, insured, and has 81+ five-star reviews." },
  { question: "How long does a roof last in Jacksonville FL?", answer: "In Jacksonville's hot, humid climate with hurricane exposure, standard 3-tab shingles last 15-20 years, architectural shingles last 20-30 years, metal roofing lasts 40-60 years, and tile roofing lasts 30-50+ years. Coastal areas like Jacksonville Beach may see shorter lifespans due to salt air. Regular inspections and prompt repairs extend your roof's life significantly." },
  { question: "Does Gimo's Roofing offer emergency roof repair in Jacksonville?", answer: "Yes! Gimo's Roofing provides 24/7 emergency roof repair throughout Jacksonville FL. Whether you have storm damage, an active leak, or a tree on your roof, our emergency team responds quickly with tarping, temporary repairs, and permanent solutions. Call (904) 606-5313 for immediate assistance." },
  { question: "What roofing materials are best for Jacksonville FL homes?", answer: "For Jacksonville's hurricane-prone climate, we recommend impact-resistant architectural shingles (Class 4 rated for hail and wind), aluminum standing seam metal roofing (best for coastal areas), or concrete tile for Mediterranean-style homes. All materials we install meet Florida Building Code requirements for 130+ mph wind resistance. GAF and Owens Corning are our preferred shingle manufacturers." },
  { question: "Does a new roof increase home value in Jacksonville?", answer: "Yes, a new roof typically increases Jacksonville home values by $12,000-$18,000 and provides an ROI of 60-70%. Beyond resale value, a new roof lowers insurance premiums (sometimes 15-30% savings), improves energy efficiency, and eliminates the risk of water damage. Many Jacksonville insurers require roof replacement for homes with roofs over 15-20 years old." },
  { question: "Do Jacksonville roofing companies offer financing?", answer: "Many Jacksonville roofing companies offer financing, but not all offer competitive rates. Gimo's Roofing partners with EnerBank USA to offer flexible financing with monthly payments starting at $99/month, no-interest promotional periods, and quick approval. We believe every Jacksonville homeowner deserves a quality roof regardless of budget." },
  { question: "How long does a roof replacement take in Jacksonville?", answer: "Most residential roof replacements in Jacksonville take 1-3 days depending on size, complexity, and weather. A standard single-story home (under 2,000 sq ft) is typically completed in one day. Larger homes, multi-story properties, or complete tear-offs with decking repairs may take 2-3 days. Gimo's Roofing crews arrive at 7 AM and work efficiently to minimize disruption." },
  { question: "What should I do if my roof is damaged after a Jacksonville hurricane?", answer: "After a hurricane in Jacksonville: 1) Document damage with photos/video before any temporary repairs, 2) Call your insurance company to file a claim, 3) Call Gimo's Roofing at (904) 606-5313 for emergency tarping and a damage assessment, 4) Do NOT sign contracts with storm chasers going door-to-door. We assist with the entire insurance claim process and work directly with your adjuster." },
  { question: "What is the 25% rule for roofs in Florida?", answer: "Florida's 25 percent rule comes from the Florida Building Code: if more than 25 percent of a roof section is repaired or replaced within any 12-month period, that entire section must be brought up to current code. On older Jacksonville homes this can turn a large repair into a full replacement, so we check your roof and explain how the rule applies before any work begins." },
  { question: "How can I tell if a Jacksonville roofer is honest?", answer: "Verify the Florida license at myfloridalicense.com (Gimo's is CCC1332453), confirm general liability and workers compensation insurance, read Google reviews, and get the full scope in writing with material brands and warranty terms. Be cautious of anyone who demands a large cash deposit up front, goes door to door after storms, or pressures you to sign on the spot. A reputable roofer gives an honest assessment even when a repair, not a replacement, is the right call." }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-jacksonville-fl#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/roofing-jacksonville-fl",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-jacksonville-fl#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.gimosroofing.com/service-areas" },
    { "@type": "ListItem", "position": 3, "name": "Jacksonville FL", "item": "https://www.gimosroofing.com/roofing-jacksonville-fl" }
  ]
}

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": { "@id": "https://www.gimosroofing.com/#organization" },
  "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
  "author": { "@type": "Person", "name": "Mark Jackson" },
  "reviewBody": "Gimo's roofing company did a fantastic job for me from start to finish. There was a whole crew at my house at 0700 sharp. They completed my roof in one day and it looks great! They paid attention to every detail I requested and when they were finished, they cleaned up like they were never there. Great job!"
}

export default function RoofingJacksonvilleFLPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />

      {/* Hero — full-bleed photo background, single row, text over a gradient scrim on the left, quote form on the right */}
      <section className="relative overflow-hidden bg-secondary">
        <div className="absolute inset-0">
          <Image src="/images/roofing-jacksonville-fl.webp" alt="Best roofing company in Jacksonville FL - Gimo's Roofing" title="Best Roofing Company Jacksonville FL - Gimo's Roofing" fill className="object-cover" priority />
          <div className="absolute inset-0 bg-secondary/70 lg:bg-gradient-to-r lg:from-secondary lg:via-secondary/85 lg:to-secondary/40" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <nav className="text-sm mb-6" aria-label="Breadcrumb">
                <ol className="flex items-center">
                  <li><Link href="/" className="text-gray-300 hover:text-primary">Home</Link></li>
                  <li><span className="mx-2 text-gray-400">/</span></li>
                  <li><Link href="/service-areas" className="text-gray-300 hover:text-primary">Service Areas</Link></li>
                  <li><span className="mx-2 text-gray-400">/</span></li>
                  <li><span className="text-primary">Jacksonville FL</span></li>
                </ol>
              </nav>
              <p className="text-primary font-semibold mb-3">Serving All of Jacksonville & Northeast Florida</p>
              <h1 className="text-4xl md:text-5xl font-bold mb-5">Best Roofing Company in Jacksonville FL</h1>
              <p className="text-lg text-gray-300 mb-8">
                Looking for reliable roofing Jacksonville FL homeowners recommend? Gimo&apos;s Roofing is Jacksonville&apos;s top-rated roofing contractor with 500+ completed roofs, 5.0-star reviews, and 24 years of experience. Licensed, insured, and locally owned, we deliver roofing services Jacksonville FL families trust.
              </p>
              <div className="flex flex-wrap gap-4 mb-6">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
                <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                <span>&#10003; Licensed & Insured</span>
                <span>&#10003; 5.0-Star Rated</span>
                <span>&#10003; 500+ Roofs Completed</span>
                <span>&#10003; Financing Available</span>
              </div>
            </div>
            <HeroQuoteForm location="Jacksonville" />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10 text-secondary">
            <div className="text-center"><span className="text-3xl font-bold">500+</span><span className="text-sm ml-2">Roofs Completed</span></div>
            <div className="text-center"><span className="text-3xl font-bold">24</span><span className="text-sm ml-2">Years Experience</span></div>
            <div className="text-center"><span className="text-3xl font-bold">5.0</span><span className="text-sm ml-2">Star Rating</span></div>
            <div className="text-center"><span className="text-3xl font-bold">24/7</span><span className="text-sm ml-2">Emergency Service</span></div>
          </div>
        </div>
      </section>

      {/* Local Elements: Map + Service Area (moved right after hero/stats per client direction, matching the Alpha Pro Construction reference pattern) */}
      <section className="py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="text-2xl font-bold text-secondary mb-4">Top-Rated Roofing in Jacksonville, FL</h3>
              <p className="text-gray-600 mb-4">
                Gimo&apos;s Roofing is based in Jacksonville and serves homeowners and businesses across Duval County, St. Johns County, Clay County, and Nassau County. From <Link href="/services/roof-repair" className="text-primary hover:underline">roof repair Jacksonville FL</Link> and full <Link href="/services/roof-replacement" className="text-primary hover:underline">roof replacement</Link> to <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency roof repair</Link>, <Link href="/services/metal-roofing" className="text-primary hover:underline">metal roofing</Link>, and <Link href="/services/roof-gutter" className="text-primary hover:underline">gutter installation</Link>, our crews are the same local team on every job, not subcontractors.
              </p>
              <p className="text-gray-600 mb-6">
                Being local means faster response times, real familiarity with Jacksonville&apos;s hurricane codes and salt-air coastal conditions, and a crew you can find again next year if you ever need us. Call Gimo&apos;s Roofing at <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="text-primary font-semibold hover:underline">{phone}</a> for a free estimate!
              </p>
              <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold inline-block">Get Your Free Estimate</a>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.71590544476!2d-81.65529292427262!3d30.359022903597385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e44b1e311da61b%3A0xe141a9eec11ad009!2sGimo&#39;s%20Roofing!5e0!3m2!1sen!2s!4v1771230427854!5m2!1sen!2s" width="100%" height="380" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing - Jacksonville FL Location"></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Project Gallery */}
      <section className="py-10 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/best-roof-repair-near-me-jacksonville-fl.webp" alt="Completed roof replacement project on a Jacksonville FL home" title="Roof Replacement Project - Jacksonville FL" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/roof-replacement-jacksonville.webp" alt="Jacksonville FL roof replacement by Gimo's Roofing" title="Jacksonville Roof Replacement - Gimo's Roofing" fill className="object-cover" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-md relative aspect-[4/3]">
              <Image src="/images/roofing-contractor-jacksonville.webp" alt="Licensed roofing contractor in Jacksonville FL" title="Licensed Roofing Contractor Jacksonville FL" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Why Gimo's is Jacksonville's Best */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why Gimo&apos;s Roofing is Jacksonville&apos;s Best Roofing Company</h2>
          <p className="text-gray-600 mb-4">
            Jacksonville homeowners have hundreds of roofing companies to choose from, but few deliver the combination of quality workmanship, transparent pricing, and genuine customer care that Gimo&apos;s Roofing provides. As a locally owned and operated <Link href="/" className="text-primary hover:underline">Jacksonville roofing company</Link>, we&apos;ve built our reputation one roof at a time since day one. Homeowners searching for the best roofing companies Jacksonville trusts consistently choose us for residential roofing Jacksonville projects of every size.
          </p>
          <p className="text-gray-600 mb-4">
            What sets us apart from other Jacksonville roofing companies? Every project gets our owner&apos;s personal attention. We don&apos;t use subcontractors or day laborers. Our crews are trained, experienced roofers who take pride in their craft. We use premium materials from <strong>GAF</strong> and <strong>Owens Corning</strong>, and we back every installation with manufacturer warranties plus our own workmanship guarantee. We also offer <Link href="/roof-financing-florida" className="text-primary hover:underline">flexible roof financing</Link> starting at $99/month.
          </p>
          <p className="text-gray-600">
            Whether you need a simple <Link href="/services/roof-repair" className="text-primary hover:underline">roof repair Jacksonville FL</Link> project, a complete <Link href="/services/roof-replacement" className="text-primary hover:underline">roof replacement</Link>, <Link href="/services/new-construction-roofing" className="text-primary hover:underline">new construction roofing</Link>, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency roof repair Jacksonville FL</Link> service, Jacksonville homeowners trust Gimo&apos;s Roofing to get the job done right the first time.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-3 text-center">Roofing Services in Jacksonville FL</h2>
          <p className="text-gray-600 text-center mb-8 max-w-2xl mx-auto">Our roofers Jacksonville FL homeowners recommend provide a full range of residential and commercial roofing Jacksonville Florida services throughout Duval County and Northeast Florida. Whether you need Jacksonville FL roofers for a quick fix or a full tear-off, we have you covered.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/services/roof-replacement" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Roof Replacement</h3>
              <p className="text-gray-600 text-sm">Complete tear-off and replacement with premium materials. Shingle, metal, and tile options. Starting at $7,900 with financing available.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Roof Repair Jacksonville FL</h3>
              <p className="text-gray-600 text-sm">Fast, reliable repairs for leaks, missing shingles, storm damage, and general wear. Same-week scheduling for most repairs. Starting at $500.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Emergency Roof Repair Jacksonville FL</h3>
              <p className="text-gray-600 text-sm">24/7 emergency response for active leaks, storm damage, and fallen trees. Rapid tarping and temporary repairs to protect your home.</p>
            </Link>
            <Link href="/services/new-construction-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-2">New Construction Roofing</h3>
              <p className="text-gray-600 text-sm">Expert roofing for new home builds throughout Jacksonville. We partner with builders, general contractors, and homeowners.</p>
            </Link>
            <Link href="/services/commercial-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Commercial Roofing</h3>
              <p className="text-gray-600 text-sm">Professional commercial roofing for Jacksonville businesses. Flat roofs, metal roofing, and TPO systems for offices, warehouses, and retail.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-bold text-secondary mb-2">Roof Inspections</h3>
              <p className="text-gray-600 text-sm">Free roof inspections and roof maintenance Jacksonville FL homeowners rely on. We check for damage, wear, and potential issues before they become costly problems.</p>
            </div>
            <Link href="/services/metal-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Metal Roofing</h3>
              <p className="text-gray-600 text-sm">Standing seam and aluminum metal roofs built for Jacksonville&apos;s hurricane zone, with wind ratings to 140+ mph and a 40-70 year lifespan. A long-term upgrade for Duval County homes.</p>
            </Link>
            <Link href="/services/roof-gutter" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Gutters</h3>
              <p className="text-gray-600 text-sm">Seamless gutter installation, repair, and replacement to handle Jacksonville&apos;s 50+ inches of annual rain. We keep oak and pine debris from clogging your runoff and protect your fascia.</p>
            </Link>
            <Link href="/services/roof-waterproofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Roof Waterproofing</h3>
              <p className="text-gray-600 text-sm">Roof coatings, leak sealing, and flashing repair for flat and low-slope Jacksonville roofs. We stop water intrusion at valleys, penetrations, and parapet walls before it reaches your decking.</p>
            </Link>
            <Link href="/services/chimney-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-2">Chimney Repair</h3>
              <p className="text-gray-600 text-sm">Chimney cap replacement, flashing repair, and repointing for Jacksonville homes. We stop the leaks that start where a chimney meets the roof deck, one of the most common hidden leak sources we find in Duval County.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* What Makes a Good Jacksonville Roofer */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">What to Look for in a Jacksonville Roofer</h2>
          <p className="text-gray-600 mb-6">
            Jacksonville&apos;s roofing market has no shortage of contractors, but not all Jacksonville roofing companies are created equal. After a major storm, out-of-state &ldquo;storm chasers&rdquo; flood the market with low prices and empty promises. Here&apos;s what separates a trustworthy Jacksonville roofer from the rest:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Florida License & Insurance</h3>
              <p className="text-gray-600 text-sm">Verify their license at myfloridalicense.com. Gimo&apos;s Roofing is fully licensed (Florida CCC/CRC) with comprehensive liability and workers&apos; compensation insurance. Never hire an unlicensed roofer in Jacksonville.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Local Reputation & Reviews</h3>
              <p className="text-gray-600 text-sm">Check Google, Yelp, and BBB reviews. A Jacksonville roofing company with dozens of 5-star reviews from local homeowners is far more reliable than one with no online presence. Gimo&apos;s has 81+ five-star reviews.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Written Estimates & Warranties</h3>
              <p className="text-gray-600 text-sm">Get everything in writing. Reputable Jacksonville roofing companies provide detailed written estimates, material specifications, and warranty documentation before work begins.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Local Knowledge</h3>
              <p className="text-gray-600 text-sm">Jacksonville&apos;s climate demands specific roofing knowledge: Florida Building Code wind requirements, hurricane-resistant installation methods, and materials rated for our heat, humidity, and coastal conditions.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Jacksonville-Specific Roofing Challenges */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing Challenges Unique to Jacksonville FL</h2>
          <p className="text-gray-600 mb-4">
            Jacksonville is the largest city by area in the contiguous United States, spanning over 875 square miles across diverse environments, from the Atlantic coastline to the St. Johns River basin to suburban inland neighborhoods. Each area presents distinct roofing challenges that require a Jacksonville roofer who truly understands the local environment.
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Hurricane exposure:</strong> <span className="text-gray-600">Jacksonville sits squarely in Florida&apos;s hurricane zone. The Florida Building Code requires all roofs in Duval County to withstand 130+ mph winds. Proper nail patterns (6-nail for high-wind zones), sealed underlayment, and impact-resistant materials are essential, not optional. Learn more about <Link href="/blog/hurricane-straps-roof-jacksonville" className="text-primary hover:underline">hurricane straps and roof tie-downs</Link>.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Heat and UV degradation:</strong> <span className="text-gray-600">Jacksonville averages 221 sunny days per year with summer temperatures regularly exceeding 95°F. Intense UV exposure accelerates shingle aging, causing granule loss, curling, and premature failure that often results in calls for <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency roof repair in Jacksonville FL</Link>. We install reflective and UV-resistant roofing materials to combat this.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Heavy rainfall:</strong> <span className="text-gray-600">Jacksonville receives 50+ inches of rain annually, much of it during intense summer thunderstorms. Proper drainage, sealed valleys, and quality underlayment are critical to prevent leaks and water damage. Read about <Link href="/blog/roof-repair-vs-replacement-jacksonville" className="text-primary hover:underline">when to repair vs. replace your Jacksonville roof</Link>.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Coastal salt air:</strong> <span className="text-gray-600">Homes within 10-15 miles of the Atlantic experience salt-air corrosion on metal components, including fasteners, flashing, and vents. Our <Link href="/roofing-jacksonville-beach-fl" className="text-primary hover:underline">Jacksonville Beach roofing</Link> team uses stainless steel and aluminum hardware in coastal zones.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Algae and mold growth:</strong> <span className="text-gray-600">Jacksonville&apos;s 74% average humidity creates ideal conditions for Gloeocapsa magma (black algae streaks) and mold growth on north-facing roof slopes. We install algae-resistant shingles and recommend proper attic ventilation to combat this.</span></div>
            </li>
          </ul>
        </div>
      </section>

      {/* Roofing Materials */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Best Roofing Materials for Jacksonville FL Homes</h2>
          <p className="text-gray-600 mb-6">
            Not all roofing materials perform equally in Jacksonville&apos;s demanding climate. As experienced Jacksonville roofers, we help homeowners choose the right material based on budget, home style, and location. Here are the top options:
          </p>
          <div className="space-y-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Architectural Shingles (Most Popular)</h3>
              <p className="text-gray-600 text-sm">The top choice for Jacksonville homeowners. Impact-resistant Class 4 architectural shingles from GAF or Owens Corning offer 130+ mph wind ratings, 20-30 year lifespans, and algae resistance. Cost: $8,000-$15,000 for most homes. <Link href="/blog/architectural-shingles-vs-3-tab-jacksonville" className="text-primary hover:underline">Compare architectural vs. 3-tab shingles</Link>.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Metal Roofing (Best Longevity)</h3>
              <p className="text-gray-600 text-sm">Standing seam metal roofs last 40-60 years, reflect heat to lower energy bills, and resist 160+ mph winds. Aluminum is preferred for coastal Jacksonville areas. Cost: $15,000-$30,000. <Link href="/blog/metal-roof-vs-shingles-florida" className="text-primary hover:underline">Metal roof vs. shingles comparison</Link>.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Tile Roofing (Best for Style)</h3>
              <p className="text-gray-600 text-sm">Concrete and clay tile provide a classic Florida aesthetic, superior wind resistance, and 30-50+ year lifespans. Popular in <Link href="/roofing-san-marco-fl" className="text-primary hover:underline">San Marco</Link> and <Link href="/roofing-riverside-fl" className="text-primary hover:underline">Riverside</Link> for Mediterranean and historic homes. Cost: $20,000-$40,000. <Link href="/blog/tile-roofing-contractor-jacksonville" className="text-primary hover:underline">Tile roofing guide</Link>.</p>
            </div>
          </div>
          <p className="text-gray-600">
            Not sure which material is right for your Jacksonville home? <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Get a free estimate</a> and our team will recommend the best option for your budget and needs.
          </p>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">What Jacksonville Homeowners Say About Gimo&apos;s Roofing</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-3">
                &ldquo;Gimo&apos;s roofing company did a fantastic job for me from start to finish. There was a whole crew at my house at 0700 sharp. They completed my roof in one day and it looks great! They paid attention to every detail I requested and when they were finished, they cleaned up like they were never there. Great job!&rdquo;
              </blockquote>
              <p className="font-semibold text-secondary">- Mark Jackson, Jacksonville FL</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex items-center gap-1 mb-3 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                ))}
              </div>
              <blockquote className="text-gray-700 italic mb-3">
                &ldquo;Excellent experience from start to finish. The team was professional, on time, and the quality of work exceeded our expectations. We had our entire roof replaced and couldn&apos;t be happier with the result. Highly recommend Gimo&apos;s to anyone in Jacksonville needing roofing work.&rdquo;
              </blockquote>
              <p className="font-semibold text-secondary">- Sarah Thompson, Jacksonville FL</p>
            </div>
          </div>
          <div className="text-center mt-6">
            <a href="https://www.google.com/maps/place/Gimo's+Renovation+%26+Roofing" target="_blank" rel="noopener" className="text-primary hover:underline font-semibold">Read All 81+ Reviews on Google &rarr;</a>
          </div>
        </div>
      </section>

      {/* Why Choose Gimo's */}
      <section className="py-14">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Why Jacksonville Homeowners Choose Gimo&apos;s Roofing</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>
              </div>
              <h3 className="font-bold text-secondary mb-2">Licensed & Insured</h3>
              <p className="text-gray-600 text-sm">Fully licensed Florida roofing contractor with comprehensive liability and workers&apos; comp insurance.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="font-bold text-secondary mb-2">Transparent Pricing</h3>
              <p className="text-gray-600 text-sm">Free estimates with no hidden fees. Financing from $99/month. We beat any comparable written quote.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"/></svg>
              </div>
              <h3 className="font-bold text-secondary mb-2">5.0-Star Rated</h3>
              <p className="text-gray-600 text-sm">81+ five-star reviews across Google, Yelp, and Thumbtack. Jacksonville&apos;s highest-rated roofing company.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="font-bold text-secondary mb-2">24/7 Emergency Service</h3>
              <p className="text-gray-600 text-sm">Storm damage or active leak? Our emergency team responds around the clock throughout Jacksonville.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 className="font-bold text-secondary mb-2">Locally Owned</h3>
              <p className="text-gray-600 text-sm">Not a franchise or national chain. Gimo&apos;s Roofing is owned and operated right here in Jacksonville, FL.</p>
            </div>
            <div className="text-center p-5">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <h3 className="font-bold text-secondary mb-2">Warranty Protection</h3>
              <p className="text-gray-600 text-sm">Industry-leading warranties from GAF and Owens Corning plus our own workmanship guarantee on every project.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roof Replacement Cost Section */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roof Replacement Cost in Jacksonville FL (2026)</h2>
          <p className="text-gray-600 mb-6">
            Understanding Jacksonville roofing costs helps you budget and avoid overpaying. Here&apos;s what Jacksonville homeowners typically pay for roof replacement:
          </p>
          <div className="bg-white rounded-xl overflow-hidden shadow-sm mb-6">
            <table className="w-full text-left">
              <thead className="bg-secondary text-white">
                <tr>
                  <th className="px-4 py-3 text-sm font-semibold">Material</th>
                  <th className="px-4 py-3 text-sm font-semibold">Average Cost</th>
                  <th className="px-4 py-3 text-sm font-semibold">Lifespan</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">3-Tab Shingles</td>
                  <td className="px-4 py-3 text-sm text-gray-700">$7,900 - $12,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">15-20 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Architectural Shingles</td>
                  <td className="px-4 py-3 text-sm text-gray-700">$9,500 - $18,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">20-30 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 text-sm text-gray-700">Metal Roofing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">$15,000 - $30,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">40-60 years</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-700">Tile Roofing</td>
                  <td className="px-4 py-3 text-sm text-gray-700">$20,000 - $40,000</td>
                  <td className="px-4 py-3 text-sm text-gray-700">30-50+ years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-gray-600 text-sm">
            Prices vary based on home size, roof pitch, accessibility, and existing damage. <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Get your free personalized estimate</a> for an accurate quote. <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Financing available</a> from $99/month.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Jacksonville Roofing FAQ</h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Blog Posts */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Jacksonville Roofing Resources</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link href="/blog/roof-repair-vs-replacement-jacksonville" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-1 text-sm">Roof Repair vs. Replacement in Jacksonville</h3>
              <p className="text-gray-500 text-xs">When to repair and when to replace your Jacksonville roof.</p>
            </Link>
            <Link href="/blog/architectural-shingles-vs-3-tab-jacksonville" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-1 text-sm">Architectural vs. 3-Tab Shingles</h3>
              <p className="text-gray-500 text-xs">Which shingle type is best for Jacksonville homes?</p>
            </Link>
            <Link href="/blog/hurricane-straps-roof-jacksonville" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-1 text-sm">Hurricane Straps & Roof Tie-Downs</h3>
              <p className="text-gray-500 text-xs">Why every Jacksonville roof needs hurricane straps.</p>
            </Link>
            <Link href="/blog/metal-roof-vs-shingles-florida" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-1 text-sm">Metal Roof vs. Shingles in Florida</h3>
              <p className="text-gray-500 text-xs">Compare durability, cost, and performance.</p>
            </Link>
            <Link href="/blog/roof-insurance-claim-florida-guide" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-1 text-sm">Florida Roof Insurance Claim Guide</h3>
              <p className="text-gray-500 text-xs">How to file and maximize your insurance claim.</p>
            </Link>
            <Link href="/blog/roofing-financing-options-jacksonville" className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h3 className="font-bold text-secondary mb-1 text-sm">Roofing Financing Options in Jacksonville</h3>
              <p className="text-gray-500 text-xs">Affordable payment plans for your new roof.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Neighborhoods & ZIP Coverage (merged — was two separate "where we serve" sections saying the same thing) */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-3 text-center">Jacksonville Neighborhoods We Serve</h2>
          <p className="text-gray-600 text-center mb-6">We provide roofing services throughout Jacksonville and all of Northeast Florida, covering every ZIP code across Duval County. Click a neighborhood below for location-specific information.</p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {neighborhoods.map((area) => (
              <Link key={area.href} href={area.href} className="px-4 py-2 bg-white rounded-full shadow-sm text-gray-600 hover:text-primary hover:shadow-md transition-all">
                {area.name}
              </Link>
            ))}
          </div>
          <p className="text-gray-600 max-w-3xl mx-auto">
            The most-active ZIPs in our service area are 32202 and 32206 in downtown and Springfield, 32204 and 32205 in Riverside and Avondale, 32207 in San Marco and St. Nicholas, 32210 and 32220 in the Westside, 32216, 32246, and 32256 across Southside and Deerwood, 32217 and 32257 in San Jose and Beauclerc, 32223 and 32258 in Mandarin, 32224, 32225, 32226, and 32227 across the Arlington and Intracoastal stretches, 32233 in Atlantic Beach, 32250 in Jacksonville Beach, and 32266 in Neptune Beach. Roofs in every Jacksonville ZIP face Florida heat, hurricane wind, and high humidity, but the closer to the coast you sit, the more aggressive the salt exposure becomes. Every ZIP code in our service area falls within Duval County Public Schools, Florida&apos;s sixth-largest school district, which keeps many of these neighborhoods popular with growing families.
          </p>
        </div>
      </section>

      {/* CTA — real Gimo's job-site footage as a desktop background; mobile keeps the poster frame as a static image, same pattern as the homepage hero */}
      <section className="relative overflow-hidden bg-secondary py-16">
        <div className="absolute inset-0">
          <Image src="/images/in-progress-reroof-jacksonville-fl-bg-poster.webp" alt="Gimo's Roofing crew reroofing a Jacksonville FL home" fill className="object-cover" />
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="none"
            poster="/images/in-progress-reroof-jacksonville-fl-bg-poster.webp"
            className="absolute inset-0 w-full h-full object-cover hidden lg:block"
          >
            <source src="/images/in-progress-reroof-jacksonville-fl-bg.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-secondary/75" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready for a Free Roofing Estimate in Jacksonville?</h2>
          <p className="text-gray-300 mb-6">Contact Jacksonville&apos;s best-rated roofing company today. Free estimates, financing available, and 24/7 emergency service.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary font-semibold">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
