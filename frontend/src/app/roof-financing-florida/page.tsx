import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roof Financing in Florida - Flexible Plans | Gimo's Roofing" },
  description: "Roof financing Florida homeowners trust. Flexible roof replacement financing, $0 down, low monthly payments, and fast approvals from Gimo's Roofing. Apply today, (904) 606-5313.",
  openGraph: {
    title: "Roof Financing in Florida - Flexible Plans from Gimo's Roofing",
    description: "Roof financing Florida plans with $0 down, low monthly payments, and fast approvals. Finance a roof replacement, repair, or siding project in Jacksonville FL.",
    url: "https://www.gimosroofing.com/roof-financing-florida",
  },
  alternates: { canonical: "https://www.gimosroofing.com/roof-financing-florida" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const financingUrl = 'https://application.enerbank.com/#/link?spnum=8007747598&cid=118584&promo=DEL2625&loamt='
const phone = "(904) 606-5313"

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
)

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
  { question: "What credit score do I need for roof financing in Florida?", answer: "Most roof financing companies look for a credit score of 650 or higher for the best rates, but approvals are often available with scores starting around 600. Our lending partner reviews your full financial picture, so borderline scores can still qualify for roofing contractors financing available plans." },
  { question: "Can I finance a roof repair, or only a full replacement?", answer: "Yes, roof repair financing is available. While most homeowners use financing for full roof replacements, our plans also cover major repair projects, emergency roof repairs, and siding work. If the project exceeds a few thousand dollars, financing usually makes sense." },
  { question: "How fast is roof financing approval?", answer: "Most homeowners get an approval decision within minutes of submitting the online application. Funds are typically available the same day or the next business day, which is why storm-damaged homeowners across Florida can move quickly on repairs." },
  { question: "Do I need a down payment to finance a roof?", answer: "No. Many of our roof financing options require $0 down at signing. You can start your project without pulling money from savings, then make affordable monthly payments over the life of the loan." },
  { question: "Can I finance an emergency roof repair after storm damage?", answer: "Yes. Roof replacement financing and repair financing work well after hurricanes and severe storms, especially while waiting on insurance payouts. We can tarp the roof, begin work, and let financing cover the portion insurance won&apos;t." },
  { question: "What are the repayment terms for roof financing?", answer: "Terms typically range from 60 months (5 years) up to 144 months (12 years), depending on loan size and plan selected. Longer terms mean lower monthly payments, while shorter terms save on total interest paid." },
  { question: "Are there prepayment penalties?", answer: "No. Our financing partner does not charge prepayment penalties. You can pay off your roof financing early at any time to save on interest, which many homeowners do when insurance proceeds or tax refunds come in." },
  { question: "Can I get roof financing with bad credit?", answer: "Options exist even for homeowners with lower credit scores. While interest rates are typically higher for bad-credit financing, approvals are available. We recommend applying to see your actual offer, since a soft credit pull does not impact your score." },
  { question: "Is roof replacement tax deductible in Florida?", answer: "A standard roof replacement on a personal residence is generally not directly tax deductible. However, Energy Star-rated roofing products may qualify for the federal Energy Efficient Home Improvement Credit. Roof replacements on rental or business properties are typically depreciated as capital improvements. Always confirm with a tax professional." },
  { question: "What projects can I finance besides a new roof?", answer: "You can finance new construction roofing, major roof repairs, full roof replacements, siding installation, and siding repair projects through the same application. Combining roof and siding projects into one loan is common." }
]

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Roof Financing in Florida",
  "serviceType": "Roof Financing",
  "description": "Roof financing Florida homeowners rely on for affordable roof replacement financing, repair financing, and new roof financing options. $0 down plans, fast approvals, and terms up to 144 months across Jacksonville and Northeast Florida.",
  "url": "https://www.gimosroofing.com/roof-financing-florida",
  "provider": { "@id": "https://www.gimosroofing.com/#organization" },
  "areaServed": [
    { "@type": "City", "name": "Jacksonville, FL" },
    { "@type": "City", "name": "Jacksonville Beach, FL" },
    { "@type": "City", "name": "Atlantic Beach, FL" },
    { "@type": "City", "name": "Neptune Beach, FL" },
    { "@type": "City", "name": "St. Augustine, FL" },
    { "@type": "City", "name": "Ponte Vedra Beach, FL" },
    { "@type": "City", "name": "Nocatee, FL" },
    { "@type": "City", "name": "Orange Park, FL" },
    { "@type": "City", "name": "Fernandina Beach, FL" }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roof Financing Options in Florida",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Financing", "description": "Finance a full roof replacement with $0 down and monthly payments as low as $99." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair Financing", "description": "Spread the cost of major roof repairs across flexible monthly payments." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Construction Roofing Financing", "description": "Financing for new construction roofing projects across Northeast Florida." } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Project Financing", "description": "Combine siding installation or repair with your roof financing plan." } }
    ]
  }
,
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "81",
    "bestRating": "5",
    "worstRating": "1"
  }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/roof-financing-florida",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Roof Financing", "item": "https://www.gimosroofing.com/roof-financing-florida" }
  ]
}

export default function RoofFinancingFloridaPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
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
                <span className="text-primary">Roof Financing</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Roof Financing in Florida - Flexible Plans from Gimo&apos;s Roofing</h1>
              <p className="text-lg text-gray-200 mb-6">
                Need roof financing Florida homeowners can actually afford? Gimo&apos;s Roofing partners with trusted lenders to offer $0 down, fast approvals, and low monthly payments on new roof financing, roof repair financing, and siding projects across Duval, St. Johns, Clay, and Nassau counties.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto text-center font-bold">
                  Apply for Roof Financing
                </a>
                <a href={`tel:+19046065313`} className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto text-center">
                  Call {phone}
                </a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/residential-roofing-services-page.webp" alt="Roof financing Florida residential project" title="Roof financing Florida homeowners trust" fill className="object-cover" priority />
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

      {/* Intro */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Affordable Roof Financing Options Across Florida</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              A roof is a major investment, but it shouldn&apos;t drain your savings. Our roof financing Florida plans let you protect your home today and pay over time with predictable monthly payments. Whether you need financing for a roof replacement, a repair after storm damage, or a full new construction project, we have roof financing companies and programs to fit every budget and credit profile.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6 text-center">
              <p className="font-bold text-secondary mb-2">Low Monthly Payments</p>
              <p className="text-gray-600 text-sm">Many homeowners qualify for payments as low as $99/month on new roof financing.</p>
            </div>
            <div className="card p-6 text-center">
              <p className="font-bold text-secondary mb-2">$0 Down Available</p>
              <p className="text-gray-600 text-sm">Start your project without pulling money from savings or your emergency fund.</p>
            </div>
            <div className="card p-6 text-center">
              <p className="font-bold text-secondary mb-2">Fast Approvals</p>
              <p className="text-gray-600 text-sm">Most applicants get a decision in minutes, not days, with our lending partner.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">How Our Roof Financing Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Financing a roof replacement with Gimo&apos;s Roofing is straightforward. Here&apos;s what to expect from application to installation.</p>
          </div>
          <div className="grid md:grid-cols-4 gap-4">
            {[
              { step: "1", title: "Apply Online", description: "Complete a short application with our lending partner. Soft credit pull, no impact to your score." },
              { step: "2", title: "Fast Approval", description: "Get a decision within minutes. Approvals are often issued before you even schedule your estimate." },
              { step: "3", title: "Schedule Install", description: "Our crews begin work on your roof replacement, repair, or siding project in Jacksonville FL." },
              { step: "4", title: "Pay Monthly", description: "Make affordable monthly payments over a plan that fits your budget. No prepayment penalty." }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-primary text-secondary font-bold rounded-full flex items-center justify-center mx-auto mb-3 text-xl">
                  {item.step}
                </div>
                <p className="font-bold text-secondary mb-1">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Financing Plans We Offer</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We partner with EnerBank, one of the most reputable roof financing companies in the country, to bring Florida homeowners flexible plans. Actual rates, promotions, and term lengths depend on credit and loan amount, but here&apos;s a snapshot of what&apos;s typically available.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card p-6">
              <p className="font-bold text-secondary mb-2">$0 Down Payment Plans</p>
              <p className="text-gray-600 text-sm mb-3">Start your roof replacement with nothing out of pocket. Great for storm-damaged homeowners waiting on insurance.</p>
              <p className="text-primary font-semibold text-sm">No down payment required</p>
            </div>
            <div className="card p-6">
              <p className="font-bold text-secondary mb-2">Low Monthly Payment Plans</p>
              <p className="text-gray-600 text-sm mb-3">Spread your investment over longer terms for payments that fit your budget.</p>
              <p className="text-primary font-semibold text-sm">From $99/month for qualified buyers</p>
            </div>
            <div className="card p-6">
              <p className="font-bold text-secondary mb-2">Promotional 0% APR Plans</p>
              <p className="text-gray-600 text-sm mb-3">When available, promotional plans let you pay no interest if paid in full within the promo period.</p>
              <p className="text-primary font-semibold text-sm">Subject to credit approval and promo availability</p>
            </div>
            <div className="card p-6">
              <p className="font-bold text-secondary mb-2">Short-Term Plans (60-84 Months)</p>
              <p className="text-gray-600 text-sm mb-3">Pay off faster and save on total interest with a 5 to 7 year plan.</p>
              <p className="text-primary font-semibold text-sm">Lower total cost over loan life</p>
            </div>
            <div className="card p-6">
              <p className="font-bold text-secondary mb-2">Extended Plans (120-144 Months)</p>
              <p className="text-gray-600 text-sm mb-3">Stretch payments over 10 to 12 years for the lowest possible monthly cost.</p>
              <p className="text-primary font-semibold text-sm">Best for larger projects</p>
            </div>
            <div className="card p-6">
              <p className="font-bold text-secondary mb-2">Bad Credit Options</p>
              <p className="text-gray-600 text-sm mb-3">Lower credit scores can still qualify for financing a roof replacement, typically at higher rates.</p>
              <p className="text-primary font-semibold text-sm">Apply to see your actual offer</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Check Your Rate Now</a>
          </div>
        </div>
      </section>

      {/* What You Can Finance */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">What You Can Finance</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Our roofing contractors financing available program covers every major exterior project we offer. Roll multiple projects into one payment.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/services/roof-replacement" className="card p-6 block">
              <h3 className="font-bold text-secondary mb-2 hover:text-primary">Roof Replacement Financing</h3>
              <p className="text-gray-600 text-sm">Full tear-off and replacement with shingle, metal, or tile roofing. Financing a roof replacement lets you upgrade materials without a large upfront cost.</p>
            </Link>
            <Link href="/services/roof-repair" className="card p-6 block">
              <h3 className="font-bold text-secondary mb-2 hover:text-primary">Roof Repair Financing</h3>
              <p className="text-gray-600 text-sm">Spread major roof repair costs across flexible monthly payments, especially useful after storm damage in Jacksonville FL.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="card p-6 block">
              <h3 className="font-bold text-secondary mb-2 hover:text-primary">Emergency Roof Repair</h3>
              <p className="text-gray-600 text-sm">Get emergency work done now, pay over time. Ideal while waiting on insurance payouts after hurricane or wind damage.</p>
            </Link>
            <Link href="/services/new-construction-roofing" className="card p-6 block">
              <h3 className="font-bold text-secondary mb-2 hover:text-primary">New Construction Roofing</h3>
              <p className="text-gray-600 text-sm">Finance roofing on new home builds or major additions across Northeast Florida.</p>
            </Link>
            <Link href="/services/siding-installation" className="card p-6 block">
              <h3 className="font-bold text-secondary mb-2 hover:text-primary">Siding Installation</h3>
              <p className="text-gray-600 text-sm">Combine new vinyl, Hardie board, or fiber cement siding with your roof financing plan.</p>
            </Link>
            <Link href="/services/siding-repair" className="card p-6 block">
              <h3 className="font-bold text-secondary mb-2 hover:text-primary">Siding Repair</h3>
              <p className="text-gray-600 text-sm">Cover storm-related siding repairs and major panel replacements under the same loan.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Tax Deduction */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Is Roof Replacement Tax Deductible?</h2>
          </div>
          <div className="card p-8">
            <p className="text-gray-600 mb-4">
              This is one of the most common questions we hear from Florida homeowners considering a new roof. The short answer: a standard roof replacement on your primary residence is generally <strong>not directly tax deductible</strong> the year you install it. The IRS considers a new roof a capital improvement that adds to your home&apos;s cost basis (useful when you later sell the home).
            </p>
            <p className="text-gray-600 mb-4">
              That said, there are cases where tax benefits may apply:
            </p>
            <ul className="text-gray-600 space-y-2 mb-4">
              <li>&#8226; <strong>Energy Star-rated roofing products</strong> may qualify for the federal Energy Efficient Home Improvement Credit. Certain metal roofs with pigmented coatings and reflective asphalt shingles can qualify.</li>
              <li>&#8226; <strong>Rental or investment properties</strong> allow the cost of a new roof to be depreciated as a capital improvement over 27.5 years.</li>
              <li>&#8226; <strong>Home office deductions</strong> may allow a prorated portion of roof costs, based on the percentage of your home used exclusively for business.</li>
              <li>&#8226; <strong>Insurance-covered roof replacements</strong> after storm damage generally don&apos;t create a deduction, but the deductible portion you pay may count toward a casualty loss in federally declared disaster areas.</li>
            </ul>
            <p className="text-gray-600">
              Always confirm with a qualified tax professional before filing. For the latest federal guidance, visit <a href="https://www.irs.gov/credits-deductions/energy-efficient-home-improvement-credit" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">IRS.gov Energy Efficient Home Improvement Credit</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Financing Service Areas in Northeast Florida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We offer roof financing across Duval, St. Johns, Clay, and Nassau counties, serving <Link href="/roofing-jacksonville-fl" className="text-primary hover:underline">Jacksonville</Link> and every surrounding community.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`Roof Financing in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
                      <span className="block text-sm font-semibold text-secondary group-hover:text-secondary">{area.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Gimo&apos;s Roofing Answers</span>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Roof Financing FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Apply for Roof Financing?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Fast approvals, flexible terms, and $0 down options. Apply now or call {phone} to talk with our team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary text-lg px-8 py-4">
              Apply for Roof Financing
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
