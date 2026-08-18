import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "24/7 Emergency Roof Repair Jacksonville FL - Gimo's Roofing" },
  description: "Need emergency roof repair near me in Jacksonville, FL? Gimo's Roofing offers 24/7 emergency roofing for active leaks and storm damage. Call (904) 606-5313.",
  openGraph: {
    title: "Emergency Roof Repair Jacksonville FL - Gimo's Roofing",
    description: "24/7 emergency roof repair in Jacksonville FL. Same-day tarping for storm damage and active leaks. Licensed FL CCC1332453. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/services/emergency-roof-repair",
  },
  alternates: { canonical: "https://www.gimosroofing.com/services/emergency-roof-repair" },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const phone = "(904) 606-5313"

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
)

const emergencyTypes = [
  { title: "Storm Damage Roof Repair", description: "Jacksonville's severe weather can cause significant roof damage. High winds, heavy rain, and hail can tear off shingles, damage flashing, and create vulnerabilities that lead to leaks. Our emergency team responds quickly to assess and repair storm damage before it causes further problems inside your home." },
  { title: "Emergency Roof Leak Repair", description: "An active leak is a true emergency. Water entering your home can damage ceilings, walls, insulation, and personal belongings within hours. Emergency roof leak repair is one of our most common calls, and we prioritize it, often providing same-day temporary protection while the permanent fix is planned." },
  { title: "Fallen Tree and Debris Damage", description: "Trees and large debris can cause catastrophic roof damage. Whether it's a branch through your roof or an entire tree, we respond quickly to secure your home, remove debris safely, and begin the repair process." },
  { title: "Hurricane and Wind Damage", description: "Living in Jacksonville means preparing for hurricane season. When storms hit, we're ready to respond with emergency tarping, damage assessment, and repairs. We help protect your home from further damage while working with your insurance company." }
]

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
  { question: "Where can I find emergency roof repair near me in Jacksonville?", answer: "Gimo's Roofing is a local, FL-licensed emergency roofing company based in Jacksonville, serving Duval, St. Johns, Clay, and Nassau counties including Arlington, Riverside, San Marco, the Beaches, and Orange Park. Search \"emergency roof repair near me\" and you'll find us because we're actually local, not an out-of-town crew. Call (904) 606-5313 any time." },
  { question: "Is there emergency roofing near me that responds the same day?", answer: "Yes. Gimo's Roofing responds same-day to active leaks and storm damage anywhere in our Jacksonville service area. We're licensed (FL CCC1332453), local, and answer the phone, which is what separates real emergency roofing near you from a call center that books you for next week." },
  { question: "What's the difference between an emergency roofer and a regular roofing contractor?", answer: "An emergency roofer prioritizes active leaks and storm damage over scheduled work, often arriving same-day with tarping equipment on hand. Gimo's Roofing is both: a licensed general roofing contractor (FL CCC1332453) that also runs same-day emergency dispatch, so the emergency roofer who tarps your roof today can handle the permanent repair too, without bringing in a separate crew." },
  { question: "Do you offer 24 hour emergency roof repair in Jacksonville?", answer: "Yes, Gimo's Roofing provides 24 hour emergency roof repair services in Jacksonville FL, including nights, weekends, and holidays. We respond quickly to active leaks, storm damage, and urgent roofing situations. Call (904) 606-5313 for immediate assistance." },
  { question: "What qualifies as a roofing emergency?", answer: "Roofing emergencies include active water leaks entering your home, significant storm or wind damage, fallen trees or debris on your roof, and structural damage that poses safety risks. If water is entering your home or your roof is compromised, that's an emergency." },
  { question: "Will my insurance cover emergency roof repairs?", answer: "Most homeowner insurance policies cover roof damage caused by storms, wind, hail, and fallen trees. We document all damage thoroughly and can work with your insurance company on claims. You're typically responsible for your deductible." },
  { question: "How quickly can you respond to a roof emergency in Jacksonville?", answer: "We prioritize emergency calls and typically respond same-day for urgent situations in Jacksonville and surrounding areas. For active leaks, we can often provide temporary protection within hours." },
  { question: "What temporary roof repair steps should I take while waiting for a crew?", answer: "Move valuables away from the leak area. Place buckets to catch water. If safe, access your attic to place tarps over insulation. Turn off electricity in affected areas if water is near wiring. Document damage with photos for insurance." },
  { question: "How much does emergency roof repair cost?", answer: "Emergency tarping typically costs $300-800 depending on roof access and damage extent. Permanent repairs vary based on damage - minor repairs run $150-600, while major repairs cost $1,500-3,500+. Storm damage is often covered by insurance." },
  { question: "Do you provide emergency tarping services?", answer: "Yes, we provide emergency tarping to prevent further water damage while permanent repairs are planned. Tarps are secured properly to withstand additional weather and typically remain effective for 30-90 days." },
  { question: "Can I get emergency roof tarping near me the same day?", answer: "In most cases, yes. Gimo's Roofing responds same-day to active leaks and storm openings anywhere in our Jacksonville service area with heavy-duty tarps secured by wood battens and fasteners, not just weights. Search emergency roof tarping near me and call (904) 606-5313 instead of waiting on a call center to route your request." },
  { question: "Can you help with insurance claims for storm damage?", answer: "Absolutely. We document all damage with detailed photos and reports, provide itemized estimates for adjusters, and can meet with your insurance company's adjuster on-site. We've helped hundreds of homeowners navigate claims successfully." },
  { question: "Do you provide emergency commercial roof repair in Jacksonville?", answer: "Yes. We dispatch for emergency commercial roof repair on flat and low-slope roofs, including TPO and EPDM membrane leaks, HVAC curb failures, and storm damage to office, retail, and warehouse properties. We coordinate with property managers to work around business hours and provide documentation for facility and insurance records. Call (904) 606-5313." },
  { question: "What if the storm damaged my roof at night?", answer: "Call us immediately at (904) 606-5313. We respond to after-hours emergencies for active leaks and severe damage. For damage that isn't actively leaking, we can assess first thing in the morning." },
  { question: "How long do emergency repairs last?", answer: "Temporary repairs like tarping last 30-90 days. Permanent repairs are designed to last the remaining life of your roof (10-20+ years). We'll advise if damage is severe enough that full replacement is the better option." }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/emergency-roof-repair#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/services/emergency-roof-repair",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/emergency-roof-repair#breadcrumb",
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
              <h1 className="text-3xl md:text-4xl font-bold mb-2">Emergency Roof Repair Jacksonville FL</h1>
              <h2 className="text-xl md:text-2xl font-semibold text-primary mb-4">24-Hour Emergency Roofer Response</h2>
              <p className="text-lg text-gray-200 mb-6">
                Searching for emergency roof repair near me in Jacksonville? Gimo&apos;s Roofing is the local emergency roofing company that actually answers, responding fast to active leaks, storm damage, and urgent roofing issues across Duval, St. Johns, Clay, and Nassau counties, including Arlington, Riverside, San Marco, and every neighborhood in between. Call the moment something goes wrong and we&apos;ll secure your home before the damage spreads.
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
            <div className="space-y-3">
              <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
                <Image src="/images/roof-repair-in-progress-jacksonville.webp" alt="Emergency roof repair in progress in Jacksonville FL" title="Emergency roof repair in progress in Jacksonville FL" fill className="object-cover" priority />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-xl aspect-[4/3] overflow-hidden shadow-lg relative">
                  <Image src="/images/storm-damage-roof-repair.webp" alt="Storm damage roof repair Jacksonville FL" title="Storm damage roof repair in Jacksonville FL" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
                <div className="rounded-xl aspect-[4/3] overflow-hidden shadow-lg relative">
                  <Image src="/images/roof-leak-emergency-repair.webp" alt="Active roof leak emergency repair Jacksonville" title="Active roof leak emergency repair in Jacksonville" fill className="object-cover" sizes="(max-width: 1024px) 50vw, 25vw" />
                </div>
              </div>
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
              <strong>Gimo&apos;s Roofing provides emergency roof repair Jacksonville FL homeowners can call day or night, 24 hours a day, including weekends and holidays.</strong> If you searched for emergency roofing near me, emergency roofers near me, or urgent roof repair, this is the local, licensed and insured crew that actually answers. Our emergency roofing services cover active leaks, storm damage, and any urgent roofing situation across Duval, St. Johns, Clay, and Nassau counties, with rapid tarping and same-day repairs whenever the storm hits. <a href={estimateUrl} id="cta-snippet-emergency-estimate" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">Get a free estimate</a> or call <a href="tel:+19046065313" id="cta-snippet-emergency-call" className="text-primary font-semibold hover:underline">(904) 606-5313</a> now.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Rapid Response", description: "Quick response to urgent calls throughout Jacksonville and surrounding areas" },
              { title: "Temporary Tarping", description: "Immediate protection to prevent further water damage to your home" },
              { title: "Prevent Water Damage", description: "Fast action to stop leaks before they damage ceilings, walls, and belongings" },
              { title: "Weekend & Holiday Service", description: "Available day and night for 24 hour roof repair, including weekends and holidays" }
            ].map((item, index) => (
              <div key={index} className="card p-6 text-center">
                <p className="font-bold text-secondary mb-2">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
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
              <a href="https://www.yelp.com/biz/gimos-renovation-and-roofing-jacksonville" target="_blank" rel="noopener" title="View Gimo's Roofing Yelp Reviews">
                <Image src="/yelp-logo.svg" alt="Read Gimo's Roofing reviews on Yelp" title="Yelp Reviews" width={70} height={28} className="h-7 w-auto object-contain" unoptimized />
              </a>
              <a href="https://www.thumbtack.com/fl/jacksonville/roofing/gimos-renovation-roofing/service/478820963508404237" target="_blank" rel="noopener" title="View Gimo's Roofing Thumbtack Reviews">
                <Image src="/thumbtack-logo.svg" alt="Read Gimo's Roofing reviews on Thumbtack" title="Thumbtack Reviews" width={36} height={36} className="h-7 w-auto object-contain" unoptimized />
              </a>
            </div>
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
              <div key={index} className="card p-6">
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
                <p className="font-bold text-secondary mb-1">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Jacksonville Homeowners Call Us First */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Why Jacksonville Homeowners Call Us First</h2>
              <p className="text-gray-600 mb-6">When water is coming through your ceiling, you need a crew that actually shows up, not a call center that books you for next week. Here&apos;s what sets our emergency response apart.</p>

              <div className="space-y-4">
                <div className="card p-6">
                  <h3 className="font-bold text-secondary mb-2">Licensed, Local, and On the Job Fast</h3>
                  <p className="text-gray-600 text-sm">We&apos;re FL License #CCC1332453 and CertainTeed Certified, based right here in Jacksonville, not an out-of-town crew passing through after a storm. Same-day response is standard for active emergencies.</p>
                </div>
                <div className="card p-6">
                  <h3 className="font-bold text-secondary mb-2">Insurance Documentation Handled for You</h3>
                  <p className="text-gray-600 text-sm">Every emergency call includes photo and video documentation of the damage, the kind adjusters actually want to see, so your claim has the evidence it needs from day one.</p>
                </div>
                <div className="card p-6">
                  <h3 className="font-bold text-secondary mb-2">One Contractor, Start to Finish</h3>
                  <p className="text-gray-600 text-sm">The crew that tarps your roof is the same crew that handles the permanent repair. No handoff to a subcontractor, no re-explaining the damage to someone new.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/emergency-roof-repair-jacksonville-fl.webp" alt="Emergency roof repair completed by Gimo's Roofing in Jacksonville FL" title="Emergency roof repair in Jacksonville FL" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>

          <div className="mt-12 bg-red-50 border-l-4 border-red-500 rounded-xl p-8 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold text-red-700 mb-3">Watch Out for Storm Chasers</h3>
            <p className="text-gray-700">After major storms, out-of-town contractors often go door to door in Jacksonville neighborhoods, collect a deposit, and disappear before the work is done, or do repairs sloppy enough to void your insurance coverage. Ask any contractor for their FL license number before signing anything. We&apos;re FL CCC1332453, and we&apos;ll still be here next year for your warranty, not just for storm season.</p>
          </div>
        </div>
      </section>

      {/* Emergency Tarping, Backed by Real Work */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Emergency Tarping, Included in Every Response</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">Heavy-duty tarps, properly secured with wood battens and fasteners rather than just weights, buy time for a permanent repair to be planned right instead of rushed.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-4xl mx-auto">
            <div className="card p-4 text-center">
              <p className="text-2xl font-bold text-primary">$300-800</p>
              <p className="text-gray-600 text-sm">Typical tarping cost</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-2xl font-bold text-primary">Same-Day</p>
              <p className="text-gray-600 text-sm">Response for most emergencies</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-2xl font-bold text-primary">30-90 Days</p>
              <p className="text-gray-600 text-sm">Typical tarp lifespan</p>
            </div>
            <div className="card p-4 text-center">
              <p className="text-2xl font-bold text-primary">Usually Covered</p>
              <p className="text-gray-600 text-sm">By homeowners insurance</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-work-in-progress.webp" alt="Roofing crew mid-repair on a Jacksonville FL roof" title="Emergency roof repair crew at work" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/residential-shingle-reroof-in-progress-jacksonville-fl.webp" alt="Residential roof repair in progress in Jacksonville FL" title="Roof repair in progress" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
            </div>
          </div>

          <div className="mt-8 card p-6 bg-yellow-50 max-w-3xl mx-auto text-center border border-yellow-200">
            <p className="text-sm text-yellow-800"><strong>Tarping is temporary protection, not a permanent fix.</strong> We schedule the permanent repair within 30-60 days of tarping so the temporary fix never becomes the long-term one.</p>
          </div>
        </div>
      </section>

      {/* Temporary Roof Repair While You Wait */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Temporary Roof Repair Options While You Wait</h2>
            <p className="text-gray-600">
              <strong>Temporary roof repair means covering an active leak or storm opening well enough to stop water intrusion until a crew arrives, not fixing the roof for good.</strong> A tarp, a sheet of plywood, or roofing cement over a small puncture can buy hours, not weeks. Anything more than a short-term patch should wait for a licensed crew so the fix doesn&apos;t void a manufacturer warranty or complicate an insurance claim.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h3 className="font-bold text-secondary mb-3">Safe Steps Before We Arrive</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Move furniture, electronics, and valuables away from the leak</li>
                <li>• Place a bucket or container to catch dripping water</li>
                <li>• Relieve a sagging, water-filled ceiling bulge in a controlled spot rather than letting it collapse on its own</li>
                <li>• From inside the attic only, lay a tarp over wet insulation if it&apos;s safe to access</li>
                <li>• Photograph the damage from a safe distance for your insurance claim</li>
              </ul>
            </div>
            <div className="card p-6 bg-red-50 border border-red-200">
              <h3 className="font-bold text-red-700 mb-2">Skip the Ladder</h3>
              <p className="text-gray-700 text-sm">Do not climb onto a wet or storm-damaged roof to attempt a temporary roof repair yourself. Roofing material gets slick when wet, and structural damage from a storm may not be visible from the surface. Call <a href="tel:+19046065313" className="text-primary font-semibold hover:underline">{phone}</a> and we&apos;ll handle the roof so you can focus on protecting what&apos;s inside.</p>
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
              <p className="text-gray-600 mb-3"><strong>Gimo&apos;s Roofing is a Jacksonville storm damage roofing company handling hurricane, wind, and hail damage repair</strong> from minor <Link href="/services/roof-repair" className="text-primary hover:underline">roof repair in Jacksonville FL</Link> to full <Link href="/services/roof-replacement" className="text-primary hover:underline">roof replacement</Link> when damage is severe. <a href={estimateUrl} id="cta-snippet-stormdamage-estimate" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">Get a free estimate</a> or call <a href="tel:+19046065313" id="cta-snippet-stormdamage-call" className="text-primary font-semibold hover:underline">(904) 606-5313</a>.</p>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roof-leak-repair-jacksonville-fl-2.webp" alt="Storm damage roof leak repair completed in Jacksonville FL" title="Storm damage roof leak repair in Jacksonville FL" fill className="object-cover" />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-3">Hurricane Damage</h3>
              <p className="text-gray-600 text-sm mb-3">Hurricane-force winds can tear off shingles, damage flashing, and even lift roof sections. Flying debris causes punctures and impacts. We respond quickly after storms pass to secure and repair hurricane damage.</p>
              <p className="text-gray-600 text-sm"><strong>Common issues:</strong> Missing shingles, lifted flashing, debris punctures, water intrusion, structural damage</p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-3">Wind Damage</h3>
              <p className="text-gray-600 text-sm mb-3">Even non-hurricane winds can damage roofs. Gusts over 50 mph can lift shingles, break seals, and create entry points for water. Wind damage is often subtle and may not be visible from the ground.</p>
              <p className="text-gray-600 text-sm"><strong>Common issues:</strong> Lifted shingles, broken tab seals, exposed underlayment, ridge cap damage</p>
            </div>

            <div className="card p-6">
              <h3 className="font-bold text-secondary mb-3">Hail Damage</h3>
              <p className="text-gray-600 text-sm mb-3">Jacksonville occasionally experiences hail that can damage roofing materials. Hail creates dents in shingles that compromise their waterproofing ability. Damage may not leak immediately but shortens roof life.</p>
              <p className="text-gray-600 text-sm"><strong>Common issues:</strong> Dented shingles, granule loss, cracked tiles, damaged vents and flashing</p>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Commercial Roof Repair */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Emergency Commercial Roof Repair in Jacksonville</h2>
              <p className="text-gray-600 mb-4">
                A flat or low-slope commercial roof fails differently than a residential shingle roof. Ponding water, a punctured membrane, or a failed seam around an HVAC curb can flood a warehouse floor or retail space fast, and downtime costs more than the repair itself. Gimo&apos;s Roofing dispatches for emergency commercial roof repair across Jacksonville, coordinating with property managers and facility staff so the building stays operational while we work.
              </p>
              <ul className="space-y-2 text-gray-600 text-sm mb-6">
                <li>• Flat and low-slope leak response, including <Link href="/services/roof-waterproofing" className="text-primary hover:underline">TPO and EPDM roof waterproofing</Link></li>
                <li>• Emergency patching around HVAC curbs, drains, and roof penetrations</li>
                <li>• After-hours response scheduled around business operating hours</li>
                <li>• Full <Link href="/services/commercial-roofing" className="text-primary hover:underline">commercial roofing Jacksonville</Link> assessment and repair plan once the leak is stopped</li>
              </ul>
              <a href="tel:+19046065313" id="cta-snippet-commercial-call" className="text-primary font-semibold hover:underline">Call (904) 606-5313 for emergency commercial roof repair</a>
            </div>
            <div className="card p-8 bg-white">
              <h3 className="text-xl font-bold text-secondary mb-4">Built for Property Managers</h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Single point of contact from the emergency call through the final repair</li>
                <li>• Photo and video damage reports formatted for facility and insurance records</li>
                <li>• FL License #CCC1332453, CertainTeed Certified</li>
                <li>• Serving offices, retail centers, warehouses, and multi-family properties across Duval, St. Johns, Clay, and Nassau counties</li>
              </ul>
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
              We provide emergency roofing services across Duval, St. Johns, Clay, and Nassau counties, including <Link href="/roofing-southside-jax-fl" className="text-primary hover:underline">Arlington</Link> and every neighborhood listed below.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`Emergency Roof Repair in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
                      <span className="block text-sm font-semibold text-secondary group-hover:text-secondary">{area.name}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
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
            <div className="card p-8">
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Why Choose Gimo&apos;s Roofing for Emergency Service</h2>
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
              <div key={index} className="card p-6">
                <p className="font-bold text-secondary mb-2">{item.title}</p>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Gimo&apos;s Roofing Answers</span>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Emergency Roof Repair FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Storm and Emergency Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What to do before, during, and after storm damage hits your roof.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/blog/emergency-roof-repair-what-to-do" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">What to Do When Your Roof Is Leaking</h3>
              <p className="text-gray-600 text-sm">Immediate steps to limit damage while you wait for a crew.</p>
            </Link>
            <Link href="/blog/hurricane-roof-damage-signs-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Signs of Hurricane Roof Damage</h3>
              <p className="text-gray-600 text-sm">What to check on your roof after any named storm.</p>
            </Link>
            <Link href="/blog/hurricane-season-roof-prep-checklist-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Hurricane Season Prep Checklist</h3>
              <p className="text-gray-600 text-sm">How to get your roof ready before storm season starts.</p>
            </Link>
            <Link href="/blog/storm-damage-roofing-insurance" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">What Your Adjuster Isn&apos;t Telling You</h3>
              <p className="text-gray-600 text-sm">What to know before your insurance adjuster inspects storm damage.</p>
            </Link>
          </div>
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
