import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: "Siding Installation Jacksonville FL | Vinyl Siding Contractors | Hardie Board Installation | Gimo's Roofing",
  description: "Professional siding installation in Jacksonville FL. Vinyl siding contractors, Hardie board installation, house siding replacement & exterior home remodeling. Free estimates & financing. Call (904) 606-5313.",
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const financingUrl = 'https://application.enerbank.com/#/link?spnum=8007747598&cid=118584&promo=DEL2625&loamt='

const sidingTypes = [
  { name: "Vinyl Siding", description: "The most popular siding choice. Affordable, low-maintenance, and available in countless colors and styles.", benefits: ["Affordable", "Low maintenance", "Many color options", "Weather resistant"], image: "/images/siding-installation-jacksonville-home.webp" },
  { name: "Fiber Cement Siding", description: "Premium siding that mimics wood grain. Extremely durable and resistant to rot, fire, and insects.", benefits: ["Fire resistant", "Rot proof", "Insect proof", "Long lasting"], image: "/images/siding-project-closeup.webp" },
  { name: "Wood Siding", description: "Classic, natural beauty that adds character to your home. Available in various profiles and species.", benefits: ["Natural beauty", "Customizable", "Eco-friendly", "Insulating"], image: "/images/yellow-siding-home-renovation.webp" },
  { name: "Engineered Wood", description: "Combines the beauty of wood with enhanced durability. Resists moisture, rot, and insects.", benefits: ["Wood appearance", "Enhanced durability", "Moisture resistant", "Cost-effective"], image: "/images/siding-installation-worker-ladder.webp" }
]

const benefits = [
  { title: "Enhanced Curb Appeal", description: "Transform your home's appearance with fresh, modern siding." },
  { title: "Energy Efficiency", description: "New siding with proper insulation reduces heating and cooling costs." },
  { title: "Increased Home Value", description: "Siding replacement offers one of the best ROIs for home improvements." },
  { title: "Low Maintenance", description: "Modern siding materials require minimal upkeep compared to older options." },
  { title: "Weather Protection", description: "Quality siding protects your home from rain, wind, and humidity." },
  { title: "Pest Prevention", description: "New siding eliminates entry points for insects and rodents." }
]

const faqs = [
  { question: "How long does siding installation take?", answer: "Most home siding installations take 1-2 weeks depending on home size and siding type. We work efficiently while ensuring quality installation." },
  { question: "What's the best siding for Florida's climate?", answer: "Vinyl and fiber cement siding are excellent choices for Jacksonville's humid climate. Both resist moisture, won't rot, and hold up well in our weather." },
  { question: "Do you remove and dispose of old siding?", answer: "Yes, our installation includes complete removal and disposal of your old siding. We leave your property clean when finished." },
  { question: "Can you match existing siding?", answer: "In many cases, yes. For partial replacements or additions, we work to match your existing siding color and style as closely as possible." }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Siding Installation Jacksonville FL",
  "description": "Professional siding installation in Jacksonville, Florida. Vinyl, fiber cement, wood, and engineered wood siding.",
  "url": "https://gimosroofing.com/services/siding-installation",
  "provider": { "@type": "HomeAndConstructionBusiness", "name": "Gimo's Roofing", "telephone": "+1-904-606-5313" },
  "areaServed": { "@type": "City", "name": "Jacksonville, FL" }
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

export default function SidingInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

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
                <span className="text-primary">Siding Installation</span>
              </nav>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Siding Installation in Jacksonville, FL</h1>
              <p className="text-lg text-gray-200 mb-6">
                Transform your home&apos;s exterior with professional siding installation. We offer vinyl, fiber cement, wood, and engineered wood siding options to fit your style and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100 w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/siding-installation-jacksonville-home.webp" alt="Siding installation on Jacksonville home" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Siding Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Siding Options We Install</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from a variety of quality siding materials, each with unique benefits for your home.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {sidingTypes.map((type) => (
              <div key={type.name} className="bg-white rounded-xl shadow-md overflow-hidden">
                <div className="aspect-video relative">
                  <Image src={type.image} alt={type.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">{type.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {type.benefits.map((benefit) => (
                      <span key={benefit} className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">{benefit}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Benefits of New Siding</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div key={benefit.title} className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-secondary">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
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
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Frequently Asked Questions</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Ready for New Siding?</h2>
          <p className="text-secondary/80 mb-6">Get a free estimate for your siding installation project today.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Get Your Free Estimate</a>
            <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="btn bg-white text-secondary hover:bg-gray-100">Apply for Financing</a>
          </div>
        </div>
      </section>
    </>
  )
}
