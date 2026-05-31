import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roofing San Marco Jacksonville FL - Gimo's Roofing" },
  description: "Roofing contractors San Marco Jacksonville FL. Mediterranean tile, barrel tile, and historic home roofing specialists. Repair and replacement. Call (904) 606-5313.",
  openGraph: {
    title: "Roofing San Marco Jacksonville FL - Gimo's Roofing",
    description: "Roofing contractors San Marco Jacksonville FL. Mediterranean and historic home specialists. Call (904) 606-5313.",
    url: "https://www.gimosroofing.com/roofing-san-marco-fl",
  },
  alternates: { canonical: "https://www.gimosroofing.com/roofing-san-marco-fl" },
}

const location = "San Marco"
const county = "Duval County"
const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const nearbyAreas = [
  { name: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { name: "Riverside", href: "/roofing-riverside-fl" },
  { name: "Southside Jacksonville", href: "/roofing-southside-jax-fl" },
  { name: "Mandarin", href: "/roofing-mandarin-fl" },
  { name: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { name: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" }
]

const faqs = [
  { question: "How much does a barrel tile roof replacement cost in San Marco?", answer: "A full barrel tile replacement in San Marco typically runs $24,000 to $65,000, with most of the 2,200-3,400 sq ft 1920s and 1930s homes around San Marco Square, Largo Park, and Hendricks Avenue landing between $32,000 and $48,000. Clay barrel tile (the original material on most homes east of Atlantic Boulevard) is the higher end of that range; concrete S-tile is roughly 25-35% less. The riverfront estates along River Road and Belote Place often run $55,000-$90,000 because of complex roof geometry, turrets, and multiple flat sections. A tile lift-and-relay  --  keeping your existing tiles and replacing only the underlayment  --  is usually $14,000-$22,000 and is the right call for most original tile roofs in 32207. Free estimates and financing from $149/month." },
  { question: "Can you match the original 1920s barrel tiles on my San Marco home?", answer: "Yes. The original barrel tiles on most San Marco Mediterranean Revival homes were made by Ludowici, Imperial, or smaller Florida producers between roughly 1925 and 1942, and the profiles, color blends, and weathering patterns vary block to block. We source matching salvage tile through specialty yards in Tampa and Miami for exact replacements, and for full replacements we work with Ludowici and MCA to color-blend new clay tile against your existing roof. For homes in the historic core around San Marco Boulevard and Naldo Avenue, we typically save 60-80% of the original tile during a lift-and-relay and only need replacements for the cracked or missing pieces. We bring physical tile samples to the estimate so you can see the match against your existing roof before committing." },
  { question: "How long do clay barrel tile roofs actually last in San Marco?", answer: "The clay tiles themselves on San Marco's older homes routinely hit 80-100 years  --  many of the original 1920s and 1930s tiles around Largo Road, Arcadia Place, and the streets off San Marco Boulevard are still serviceable today. What fails first is everything underneath: the felt or 30# underlayment lasts 20-30 years, the flashing around chimneys and skylights corrodes in 25-35 years, and the wood battens and decking can rot from trapped moisture under the tiles. That's why a lift-and-relay every 25-30 years is the standard maintenance cycle for a San Marco tile roof. Done correctly, the same set of clay tiles can protect a 32207 home for a century or more, while a poorly installed underlayment will leak within 10 years regardless of how good the tile above it is." },
  { question: "Do you repair the flat roof sections on San Marco Mediterranean homes?", answer: "Yes  --  and these flat sections are the single most common source of leaks we find on San Marco homes. Most of the Mediterranean Revival houses around San Marco Square, Naldo Avenue, and the streets behind Bishop Kenny have flat roof areas hidden behind decorative parapets or sandwiched between sloped tile planes. From the street they're invisible, but they collect every leaf and twig from the live oaks overhead and pond water against the parapet walls. We replace these areas with TPO membrane or self-adhered modified bitumen (we don't use hot tar in residential  --  too risky on 90-year-old decks), and we re-flash every parapet wall and tile-to-flat transition. On the larger riverfront homes off River Road, we often find three or four separate flat sections that all need attention." },
  { question: "Is it worth keeping barrel tile on my San Marco home or switching to architectural shingles?", answer: "Keep the tile. On a San Marco home, ripping off original barrel tile and replacing it with architectural shingles will cost you $40,000-$80,000 in resale value the day you list. The Mediterranean Revival aesthetic is the entire reason buyers pay a premium for the neighborhood, and an asphalt-shingled house on Largo Road or Arcadia Place will sit on the market while the tiled comps next door sell in two weeks. Beyond resale, shingles last 18-22 years here while a properly relayed tile roof lasts another 25-30  --  so you'd be spending less per year on tile even ignoring the home value impact. The only honest case for shingles is on rear additions that were built post-1970 and never had tile to begin with. We'll always tell you straight if a lift-and-relay is the smarter spend than a full tile replacement." },
  { question: "How does the St. Johns River affect roofs in San Marco?", answer: "San Marco sits on a bend in the St. Johns directly across from downtown, and the water keeps ambient humidity 5-10% higher than inland Jacksonville year-round. For tile roofs that means three real problems: the cavity between the tiles and the underlayment stays damp longer after every rain, the wood battens and decking under the tile rot faster than they would in Mandarin or Nocatee, and the north-facing slopes grow algae and moss that hold moisture against the tile. Homes within two blocks of the river  --  River Road, Belote Place, the streets off Greenridge  --  see this most aggressively, and we find rotted decking on roofs as new as 15 years old when ventilation was done poorly. Proper ridge venting and synthetic underlayment (not felt) during the next lift-and-relay is the fix." },
  { question: "Do you provide emergency roof repair in San Marco after a storm?", answer: "Yes. We run 24/7 emergency response throughout San Marco, San Jose, St. Nicholas, and the rest of 32207, and we're typically on-site within a few hours of a call after a named storm or severe thunderstorm. The most common after-storm calls in San Marco are slipped or shattered ridge cap tiles, broken tiles where live oak limbs have fallen (the canopy on Hendricks Avenue and Naldo Avenue is brutal in high winds), and water intrusion through the flat sections behind parapets. We carry salvage clay barrel tile on the truck for emergency replacements so we can lock the roof down properly instead of just throwing a tarp over it. Call (904) 606-5313 day or night." },
  { question: "How often should I inspect my tile roof in San Marco?", answer: "Once a year for tile roofs in 32207, plus a walkthrough after any tropical system or storm with winds above 50 mph. We check four things specifically on San Marco homes: cracked or slipped barrel tiles (especially on the windward south and east slopes), the condition of the underlayment visible from the attic, every flat roof section behind parapets, and the flashing around chimneys and any decorative turret elements. We also check for live oak debris jamming the valleys. Inspections are free for past customers and we keep your prior inspection records on file so we can compare year over year. Call (904) 606-5313 to schedule." },
  { question: "Is it possible to convert a San Marco barrel tile roof to standing seam metal?", answer: "Technically yes, but we advise against it on most San Marco homes. The Mediterranean Revival architecture that defines the neighborhood was designed around the barrel tile profile, and replacing it with standing seam metal changes the entire character of the home. If your home is in the San Marco Preservation Overlay, the city may require design review before approving a material change. The cases where metal makes sense are rear additions built after the original construction, flat roof sections behind parapets that are currently modified bitumen, and detached garages or carriage houses where the aesthetic impact is minimal. For the main tile roof, a lift-and-relay with new synthetic underlayment is almost always the smarter long-term investment." },
  { question: "What's the typical lead time for sourcing replacement barrel tiles in San Marco?", answer: "For the common concrete S-tile profiles used on newer San Marco homes and the post-1970 renovations, we can usually source matching tile within 1-2 weeks from Eagle Roofing or Boral distributors in Jacksonville. For original 1920s and 1930s clay barrel tile on homes around San Marco Square, Largo Road, and Arcadia Place, the lead time is longer because we source through specialty salvage yards in Tampa and Miami, and sometimes from Ludowici for new clay tile that needs to be color-blended to match. Expect 3-6 weeks for salvage clay and 6-10 weeks for custom-blended new Ludowici tile. We always recommend starting the sourcing process before the rainy season so you are not waiting on tile during hurricane season." }
]

const faqSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-san-marco-fl#faq",
  "@type": "FAQPage",
  "mainEntityOfPage": "https://www.gimosroofing.com/roofing-san-marco-fl",
  "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@id": "https://www.gimosroofing.com/roofing-san-marco-fl#breadcrumb",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Service Areas", "item": "https://www.gimosroofing.com/service-areas" },
    { "@type": "ListItem", "position": 3, "name": "San Marco", "item": "https://www.gimosroofing.com/roofing-san-marco-fl" }
  ]
}

export default function SanMarcoPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Serving {location} & {county}</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roofing San Marco Jacksonville FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Mediterranean tile and barrel tile roofing specialists for {location}&apos;s historic homes. Expert craftsmanship preserving 1920s architectural character in ZIP code 32207.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Get Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>✓ Licensed & Insured</span>
            <span>✓ 5-Star Rated</span>
            <span>✓ Barrel Tile Experts</span>
          </div>
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/5-star-roofer.webp" alt="5-star rated roofer serving San Marco Jacksonville FL" title="5-star rated roofer serving San Marco Jacksonville FL" fill className="object-cover" priority />
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
          <h2 className="text-2xl font-bold text-secondary mb-4">Your {location} Mediterranean Roofing Experts</h2>
          <p className="text-gray-600 mb-4">
            San Marco is one of Jacksonville&apos;s most architecturally distinctive neighborhoods, developed primarily in the 1920s through 1940s with a strong Mediterranean Revival influence. The neighborhood&apos;s signature barrel tile roofs, stucco facades, and arched entryways give it a character that&apos;s unmatched anywhere else in Northeast Florida. From the boutiques of San Marco Square to the riverfront estates along the St. Johns River, these homes represent both significant history and substantial investment.
          </p>
          <p className="text-gray-600 mb-4">
            Maintaining the barrel tile roofs that define {location}&apos;s Mediterranean character requires the kind of specialized expertise that only dedicated roofing contractors in San Marco Jacksonville FL can deliver. Tile roofing is fundamentally different from shingle work, requiring knowledge of underlayment systems, tile profiles, fastening methods, and the specific challenges of working with clay and concrete barrel tiles on homes that are 80-100 years old.
          </p>
          <p className="text-gray-600">
            At Gimo&apos;s Roofing, we&apos;re tile roofing specialists who understand what makes {location} homes unique. Whether you need <Link href="/services/roof-replacement" className="text-primary hover:underline">a complete barrel tile replacement</Link>, <Link href="/services/roof-repair" className="text-primary hover:underline">targeted tile repairs</Link>, or <Link href="/services/emergency-roof-repair" className="text-primary hover:underline">emergency storm damage repair</Link>, our team delivers results that honor your home&apos;s architectural heritage while providing modern waterproofing protection.
          </p>
        </div>
      </section>

      {/* Why Specialized Roofing */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Why San Marco Homes Require Specialized Roofing</h2>
          <p className="text-gray-600 mb-4">
            San Marco&apos;s Mediterranean Revival architecture creates roofing requirements that are fundamentally different from typical Jacksonville neighborhoods. Standard roofing approaches don&apos;t work here. Here&apos;s why your {location} home needs a tile roofing specialist:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Mediterranean Revival barrel tile:</strong> <span className="text-gray-600">San Marco&apos;s iconic S-shaped barrel tiles require precise installation with proper overlapping, mortar or mechanical fastening, and compatible underlayment systems. Incorrect installation leads to water channeling, tile slippage, and premature failure. We source matching clay and concrete barrel tiles from specialty manufacturers.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">Historic preservation standards:</strong> <span className="text-gray-600">Many San Marco homes are in or adjacent to historic districts. Replacing a barrel tile roof with architectural shingles would destroy the home&apos;s character and potentially reduce property values by tens of thousands of dollars. We maintain architectural integrity while upgrading waterproofing systems beneath original or matching tiles.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">St. Johns River humidity:</strong> <span className="text-gray-600">San Marco&apos;s position along the St. Johns River creates elevated moisture levels that accelerate underlayment degradation beneath tile roofs. The gap between tiles and underlayment can trap condensation, promoting mold growth and wood rot on the roof deck if ventilation and moisture barriers aren&apos;t properly designed.</span></div>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">●</span>
              <div><strong className="text-secondary">High property values demand quality:</strong> <span className="text-gray-600">San Marco is one of Jacksonville&apos;s most desirable neighborhoods, with home values reflecting the area&apos;s walkability, charm, and proximity to downtown. A properly maintained tile roof is essential to preserving and maximizing your investment. Cutting corners on roofing directly impacts resale value.</span></div>
            </li>
          </ul>
          <p className="text-gray-600">
            Learn more about <Link href="/blog/clay-tile-roof-lifespan-florida" className="text-primary hover:underline">clay tile roof lifespan in Florida</Link> and the <Link href="/blog/concrete-tile-roof-pros-cons-florida" className="text-primary hover:underline">pros and cons of concrete tile roofing</Link>.
          </p>
        </div>
      </section>

      {/* Common Roofing Issues */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Common Roofing Issues in San Marco</h2>
          <p className="text-gray-600 mb-6">
            After years of working on {location}&apos;s Mediterranean homes, we see the same issues repeatedly. Recognizing these problems early prevents costly structural damage:
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Barrel Tile Cracking & Slipping</h3>
              <p className="text-gray-600 text-sm">On homes built in the 1920s-1940s, original clay tiles become brittle with age. Foot traffic during maintenance, settling foundations, and storm impacts cause cracks and displacement. Even a single slipped tile exposes the underlayment to direct UV and rain, rapidly accelerating deterioration.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Underlayment Failure Under Tile</h3>
              <p className="text-gray-600 text-sm">The tiles on a barrel tile roof can last 75-100 years, but the underlayment beneath them typically fails after 20-30 years. When underlayment degrades, water penetrates to the roof deck even though the tiles above look perfect. A tile lift-and-relay replaces the underlayment while preserving existing tiles.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Flat Roof Section Leaks</h3>
              <p className="text-gray-600 text-sm">Many San Marco Mediterranean homes feature flat roof sections behind decorative parapets or between sloped tile planes. These hidden flat areas collect water and are common leak sources. They require specialized membrane systems like TPO or modified bitumen that differ from the tile work on visible slopes.</p>
            </div>
            <div className="bg-gray-50 p-5 rounded-lg">
              <h3 className="font-bold text-secondary mb-2">Storm Damage on Decorative Elements</h3>
              <p className="text-gray-600 text-sm">Hurricane and tropical storm winds lift barrel tiles, crack ridge caps, and damage decorative elements like turret roofs and arched dormers that are common on San Marco&apos;s Mediterranean homes. These ornamental features require careful repair to maintain the home&apos;s architectural character.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services with Links */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Our Roofing Services in {location}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <Link href="/services/roof-replacement" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Barrel Tile Replacement</h4>
              <p className="text-gray-600 text-sm">Complete barrel tile roof replacement with matching clay or concrete tiles. New underlayment, flashing, and waterproofing for lasting protection.</p>
            </Link>
            <Link href="/services/roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Tile Roof Repair</h4>
              <p className="text-gray-600 text-sm">Individual tile replacement, ridge cap repair, and mortar resealing. We source matching tiles to preserve your home&apos;s Mediterranean character.</p>
            </Link>
            <Link href="/services/emergency-roof-repair" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Emergency Storm Repair</h4>
              <p className="text-gray-600 text-sm">24/7 emergency response for hurricane and storm damage. Tarping, tile securing, and insurance claim assistance for {location} homeowners.</p>
            </Link>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Tile Lift & Relay</h4>
              <p className="text-gray-600 text-sm">Remove existing tiles, replace deteriorated underlayment and flashing, then reinstall original tiles. Extends roof life 20-30 years at a fraction of full replacement cost.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Flat Roof Repair</h4>
              <p className="text-gray-600 text-sm">TPO, modified bitumen, and silicone coating systems for the hidden flat roof sections common on Mediterranean-style homes in {location}.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h4 className="font-bold text-secondary mb-2">Roof Inspections</h4>
              <p className="text-gray-600 text-sm">Comprehensive tile roof evaluations for home buyers and maintenance planning. We assess tile condition, underlayment integrity, and flashing health.</p>
            </div>
            <Link href="/services/metal-roofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Metal Roofing</h4>
              <p className="text-gray-600 text-sm">Standing seam metal rated to 140+ mph winds with a 40-70 year lifespan, ideal for rear additions, carriage houses, and detached structures on San Marco properties.</p>
            </Link>
            <Link href="/services/roof-gutter" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Gutters</h4>
              <p className="text-gray-600 text-sm">Seamless gutter installation, repair, and replacement that handle San Marco&apos;s heavy rain and the relentless oak and pine debris from the mature canopy along Hendricks and Naldo.</p>
            </Link>
            <Link href="/services/roof-waterproofing" className="bg-white p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <h4 className="font-bold text-secondary mb-2">Roof Waterproofing</h4>
              <p className="text-gray-600 text-sm">Roof coatings, flashing sealing, and membrane systems for the hidden flat and low-slope sections behind the parapets on San Marco&apos;s Mediterranean homes.</p>
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
              &ldquo;Gimo&apos;s replaced the tile roof on our San Marco Mediterranean home. They sourced matching barrel tiles and the result is stunning. Professional from estimate to final cleanup. Worth every penny.&rdquo;
            </blockquote>
            <p className="font-semibold text-secondary">- Robert Chen</p>
          </div>
        </div>
      </section>

      {/* Google Maps */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Find Gimo&apos;s Roofing</h2>
          <p className="text-gray-600 text-center mb-6">Proudly serving San Marco, San Jose, St. Nicholas, and all of Jacksonville&apos;s historic neighborhoods.</p>
          <div className="rounded-xl overflow-hidden shadow-lg">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.71590544476!2d-81.65529292427262!3d30.359022903597385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e44b1e311da61b%3A0xe141a9eec11ad009!2sGimo&#39;s%20Roofing!5e0!3m2!1sen!2s!4v1771230427854!5m2!1sen!2s" width="100%" height="400" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Gimo's Roofing Location"></iframe>
          </div>
        </div>
      </section>

      {/* ZIP Code Coverage */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4">Roofing in 32207 - San Marco&apos;s ZIP Code</h2>
          <p className="text-gray-600 mb-4">
            ZIP code 32207 covers San Marco, San Jose, St. Nicholas, and the riverfront stretches along the St. Johns River. The housing stock is dominated by 1920s-1940s Mediterranean Revival homes with original or replacement clay barrel tile, plus mid-century ranch homes in the western portion near Atlantic Boulevard. Roofs in 32207 face elevated humidity from the river bend and aggressive live oak debris on the older streets. Most projects we do in 32207 are tile lift-and-relays on historic homes around San Marco Square or full architectural shingle replacements on the post-1960 stock further west.
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
          <p className="text-secondary/80 mb-6">Contact us today for expert Mediterranean and tile roofing services in {location}.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
