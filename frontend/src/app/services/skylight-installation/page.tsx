import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Skylight Installation & Repair Jacksonville FL - Gimo's Roofing" },
  description: "Skylight installation and repair in Jacksonville FL. Leak-proof flashing, energy-efficient glass, free estimates. Licensed roofing contractor. Call (904) 606-5313.",
  openGraph: {
    title: "Skylight Installation & Repair in Jacksonville FL - Gimo's Roofing",
    description: "Skylight installation and repair in Jacksonville FL with leak-proof flashing and energy-efficient glass options. Free estimates. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/services/skylight-installation",
    images: ["https://www.gimosroofing.com/images/two-story-home-skylights-roof.webp"],
  },
  alternates: { canonical: "https://www.gimosroofing.com/services/skylight-installation" },
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
  { question: "Where can I find skylight installation near me in Jacksonville?", answer: "Gimo's Roofing installs and repairs skylights across Jacksonville and Northeast Florida, including Duval, St. Johns, Clay, and Nassau counties. As a licensed roofing contractor (FL CCC1332453), we handle the roofing integration and flashing, the part that determines whether a skylight leaks or not." },
  { question: "How much does skylight installation cost?", answer: "Skylight installation in Jacksonville typically runs $1,200 to $3,500 per skylight installed, depending on the skylight type, size, and whether it's a new opening or a roof-window replacement. Fixed skylights cost less than venting or tubular models with remote controls." },
  { question: "Why do skylights leak?", answer: "Nearly all skylight leaks trace back to the flashing where the skylight meets the roofing material, not the glass itself. Improper step flashing, deteriorated sealant, or a skylight installed without integrating it into the shingle courses correctly all let water in. This is why skylight installation should be done by a roofer, not a window installer." },
  { question: "Can you replace an old leaking skylight?", answer: "Yes. We remove the old unit, inspect and repair the deck underneath for any water damage, and install a new skylight with properly stepped flashing. Most leaking skylights we replace were installed with inadequate flashing or sealant-only installations." },
  { question: "What type of skylight is best for Florida homes?", answer: "Impact-rated, low-E glass skylights are the best fit for Jacksonville. Low-E coatings cut solar heat gain, which matters in Florida's climate, and impact-rated glass holds up to hurricane-season debris. Venting skylights add natural airflow but cost more and need more careful flashing." },
  { question: "Do skylights add value to a home?", answer: "Skylights add natural light and can make a room feel larger, which is attractive to buyers, but the value depends heavily on installation quality. A properly flashed, energy-efficient skylight is a plus. A leak-prone one is a liability during a home sale." },
  { question: "Can you install a skylight during a roof replacement?", answer: "Yes, and it's often the best time to do it. Adding or replacing a skylight during a full roof replacement means the flashing integrates with new roofing material from the start, rather than being cut into an existing roof." },
  { question: "Do you repair skylight leaks without replacing the unit?", answer: "Often, yes. If the glass and frame are in good condition, we can often fix a leak by re-flashing and re-sealing the skylight rather than replacing the whole unit, saving significant cost over full replacement." }
]

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/skylight-installation#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.gimosroofing.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Skylight Installation", "item": "https://www.gimosroofing.com/services/skylight-installation" }
  ]
}

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/services/skylight-installation#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/services/skylight-installation",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function SkylightInstallationPage() {
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
                <span className="text-primary">Skylight Installation</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Skylight Installation &amp; Repair - Jacksonville, FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                Looking for skylight installation near me in Jacksonville? Gimo&apos;s Roofing installs and repairs skylights with roofer-grade flashing, the detail that actually determines whether a skylight leaks. Impact-rated, energy-efficient options built for Florida&apos;s sun and storms.
              </p>
              <ul className="text-gray-200 mb-6 space-y-2">
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> New skylight installation and replacement</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Leak repair and re-flashing</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Impact-rated, low-E glass options</li>
                <li className="flex items-center gap-2"><span className="text-primary">&#10003;</span> Licensed FL CCC1332453, CertainTeed Certified</li>
              </ul>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/two-story-home-skylights-roof.webp" alt="Skylights installed on a two-story Jacksonville FL home roof" title="Skylight installation in Jacksonville FL" fill sizes="100vw" className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="bg-primary py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-secondary text-center">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
              <span className="font-bold">Free skylight estimates and financing available. Ivan, Owner. FL License CCC1332453.</span>
            </div>
            <span className="hidden md:block">|</span>
            <a href="tel:+19046065313" className="font-bold hover:underline">Call Now: {phone}</a>
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

      {/* Why Flashing Matters */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Why a Skylight Should Be Installed by a Roofer</h2>
              <p className="text-gray-600 mb-4">A skylight is a hole cut in your roof. The glass and frame rarely fail, what fails is the flashing where that opening meets the surrounding shingles or roofing material. That is a roofing detail, not a window detail, which is why skylights installed by window companies or general contractors leak far more often than ones integrated properly into the roof system.</p>
              <p className="text-gray-600 mb-4">We step-flash every skylight into the surrounding shingle courses, the same technique we use around chimneys and other roof penetrations, rather than relying on sealant or a pre-fab flashing kit alone. Jacksonville&apos;s heavy rain and summer storms find any gap in that detail quickly.</p>
              <p className="text-gray-600">If you have an existing skylight that leaks, the fix is usually the flashing, not the glass. We inspect first and give you an honest answer on repair versus replacement, the same approach we use for <Link href="/services/chimney-repair" className="text-primary hover:underline">chimney flashing repair</Link>.</p>
            </div>
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-secondary mb-4">Skylight Types We Install</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Fixed skylights:</strong> Do not open, lowest cost, simplest flashing detail</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Venting skylights:</strong> Open manually or by remote for fresh airflow</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Tubular skylights:</strong> Compact light tubes for smaller spaces like hallways and bathrooms</span></li>
                <li className="flex items-start gap-3"><span className="text-primary mt-1">&#8226;</span><span><strong>Impact-rated, low-E glass:</strong> Recommended for Florida sun and hurricane season</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Skylight Jobs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Real Jobs</span>
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Skylight Repair and Installation in Jacksonville, FL</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">A look at the kind of skylight failures and installs we handle on Jacksonville roofs.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video relative">
                <Image src="/images/skylight-fix-jacksonville.webp" alt="Cracked skylight dome needing repair on a Jacksonville FL roof" title="Skylight repair in Jacksonville FL" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-4 bg-gray-50">
                <p className="font-bold text-secondary mb-1">Cracked skylight dome</p>
                <p className="text-gray-600 text-sm">A shattered dome like this lets rain straight into the attic. We inspect the flashing underneath before deciding between a repair and a full replacement.</p>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-md">
              <div className="aspect-video relative">
                <Image src="/images/skylight-installation-jacksonville.webp" alt="Skylight opening cut and framed into a Jacksonville FL roof deck during installation" title="Skylight installation in Jacksonville FL" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
              </div>
              <div className="p-4 bg-gray-50">
                <p className="font-bold text-secondary mb-1">Opening framed for a new skylight</p>
                <p className="text-gray-600 text-sm">Old unit removed, deck checked for water damage, and the opening framed before we step-flash the new skylight into the surrounding shingles.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing + CTA */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-gray-600 max-w-3xl mx-auto mb-4"><strong>Gimo&apos;s Roofing installs and repairs skylights with proper roofing-grade flashing, so the fix actually holds.</strong> A free inspection tells you whether you need a repair or full replacement before any work starts. <a href={estimateUrl} id="cta-snippet-skylight-estimate" target="_blank" rel="noopener" className="text-primary font-semibold hover:underline">Get a free estimate</a> or call <a href="tel:+19046065313" id="cta-snippet-skylight-call" className="text-primary font-semibold hover:underline">(904) 606-5313</a>.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Fixed Skylight</h3>
              <p className="text-3xl font-bold text-primary mb-2">$1,200 - $2,000</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Installed with stepped flashing</li>
                <li>&#8226; Low-E, impact-rated glass available</li>
                <li>&#8226; Simplest, most leak-resistant option</li>
              </ul>
            </div>
            <div className="card p-6 text-center border-2 border-primary">
              <h3 className="font-bold text-secondary mb-2">Venting Skylight</h3>
              <p className="text-3xl font-bold text-primary mb-2">$2,000 - $3,500</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Manual or remote operation</li>
                <li>&#8226; Natural airflow and light</li>
                <li>&#8226; More detailed flashing work</li>
              </ul>
            </div>
            <div className="card p-6 text-center">
              <h3 className="font-bold text-secondary mb-2">Skylight Leak Repair</h3>
              <p className="text-3xl font-bold text-primary mb-2">$250 - $800</p>
              <ul className="text-gray-600 text-sm text-left space-y-1">
                <li>&#8226; Re-flashing and re-sealing</li>
                <li>&#8226; Keeps the existing unit when possible</li>
                <li>&#8226; Fixes the actual leak source</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 text-center text-sm">Ranges are estimates for typical Jacksonville installations. Actual cost depends on skylight size, roof pitch, and whether it's a new opening. We provide free estimates and detailed written quotes.</p>

          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Skylight work can be financed alongside a larger roofing project.</p>
            <Link href="/roof-financing-florida" className="text-primary font-semibold hover:underline">See roofing and skylight financing options &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Skylight Installation Process</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">From first call to finished install, here is what to expect.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">1</div>
              <p className="font-bold text-secondary mb-2">Contact us</p>
              <p className="text-gray-600 text-sm">Call (904) 606-5313 or request an estimate. Tell us if this is a new install, a replacement, or a leak repair.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">2</div>
              <p className="font-bold text-secondary mb-2">Assess and quote</p>
              <p className="text-gray-600 text-sm">We check roof pitch, framing, and the best skylight location, then give you a firm written quote.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">3</div>
              <p className="font-bold text-secondary mb-2">Install with proper flashing</p>
              <p className="text-gray-600 text-sm">We frame the opening if needed and step-flash the skylight into the surrounding roofing material.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-secondary rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-2xl">4</div>
              <p className="font-bold text-secondary mb-2">Test and clean up</p>
              <p className="text-gray-600 text-sm">We confirm the flashing sheds water correctly, clean up all debris, and walk you through the warranty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Skylight Installation Service Areas in Northeast Florida</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We install and repair skylights across Duval, St. Johns, Clay, and Nassau counties. Explore our roofing pages in <Link href="/roofing-jacksonville-fl" className="text-primary hover:underline">Jacksonville</Link>, <Link href="/roofing-ponte-vedra-beach-fl" className="text-primary hover:underline">Ponte Vedra Beach</Link>, and <Link href="/roofing-nocatee-fl" className="text-primary hover:underline">Nocatee</Link>.
            </p>
          </div>
          <div className="space-y-8">
            {Object.entries(serviceAreasByCounty).map(([county, areas]) => (
              <div key={county}>
                <h3 className="text-lg md:text-xl font-bold text-primary mb-4 text-center md:text-left">{county} County</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <Link key={area.slug} href={`/${area.slug}`} title={`Skylight Installation in ${area.name}, FL`} className="group card hover:bg-primary p-4 text-center">
                      <span className="block text-sm font-semibold text-secondary group-hover:text-secondary">{area.name}</span>
                    </Link>
                  ))}
                </div>
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Skylight Installation FAQ</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* Related Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Related Roofing Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Skylight work often overlaps with the rest of the roof. Here is how it fits together.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/services/roof-repair" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Repair</h3>
              <p className="text-gray-600 text-sm">Leak and flashing repair, including leaks that start at a skylight and travel across the deck.</p>
            </Link>
            <Link href="/services/roof-inspection" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Inspection</h3>
              <p className="text-gray-600 text-sm">Not sure if your skylight is the source of a leak? A free inspection finds the real cause.</p>
            </Link>
            <Link href="/roof-financing-florida" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roofing Financing</h3>
              <p className="text-gray-600 text-sm">Fixed monthly payment options for skylight and roof work together.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* Related Resources */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Skylight Resources</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Learn more about skylight installation costs and planning.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/blog/skylight-installation-guide-jacksonville" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Skylight Installation Cost Guide</h3>
              <p className="text-gray-600 text-sm">A deeper look at skylight types, costs, and what drives price in Jacksonville.</p>
            </Link>
            <Link href="/blog/second-story-addition-roofing" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Second-Story Addition Roofing</h3>
              <p className="text-gray-600 text-sm">Planning a remodel? How roof penetrations like skylights fit into a larger project.</p>
            </Link>
            <Link href="/blog/roof-flashing-types-purposes" className="card p-6 group">
              <h3 className="font-bold text-secondary mb-2 group-hover:text-primary transition-colors">Roof Flashing Types and Purposes</h3>
              <p className="text-gray-600 text-sm">Why flashing, not glass, is what determines whether a skylight leaks.</p>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Ready for a Skylight That Doesn&apos;t Leak?</h2>
          <p className="text-secondary/80 mb-6">Get a free estimate from a licensed, CertainTeed Certified Jacksonville roofing contractor. FL License CCC1332453.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Free Estimate</a>
            <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100">Apply for Financing</a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">Call (904) 606-5313</a>
          </div>
        </div>
      </section>
    </>
  )
}
