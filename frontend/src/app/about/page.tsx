import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "About Gimo's Roofing - Jacksonville FL Roofing Contractor",
  description: "Gimo's Roofing is Jacksonville's trusted roofing contractor. Quality craftsmanship, honest pricing & 5-star reviews. Call (904) 606-5313.",
  keywords: ["about gimos roofing", "jacksonville roofing contractor", "local roofing company", "roofing company jacksonville fl", "trusted roofers"],
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'

const values = [
  {
    title: "Quality Craftsmanship",
    description: "We take pride in our work and never cut corners. Every project receives the same attention to detail.",
  },
  {
    title: "Customer First",
    description: "Your satisfaction is our priority. We communicate clearly and work around your schedule.",
  },
  {
    title: "Honest Pricing",
    description: "No hidden fees or surprise charges. We provide detailed, transparent estimates upfront.",
  },
  {
    title: "Local Expertise",
    description: "We know Jacksonville's climate and building codes. Our solutions are designed for Florida.",
  }
]

const stats = [
  { number: "500+", label: "Projects Completed" },
  { number: "5.0", label: "Star Rating" },
  { number: "100%", label: "Satisfaction Rate" },
  { number: "24/7", label: "Emergency Service" }
]

const schemaData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "mainEntity": {
    "@type": "RoofingContractor",
    "name": "Gimo's Renovation & Roofing",
    "description": "Jacksonville's trusted roofing contractor providing quality craftsmanship and exceptional customer service.",
    "foundingDate": "2020",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "33 24th Street East",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "postalCode": "32206"
    },
    "telephone": "+1-904-606-5313",
    "email": "management@gimosroofing.com",
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "About", "item": "https://www.gimosroofing.com/about" }
  ]
}

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About Gimo&apos;s Roofing
            </h1>
            <p className="text-lg text-gray-200">
              Jacksonville&apos;s trusted roofing contractor, committed to quality craftsmanship and exceptional customer service.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Gimo&apos;s Renovation & Roofing was founded with a simple mission: to provide Jacksonville homeowners and businesses with roofing services they can trust at prices they can afford.
              </p>
              <p className="text-gray-600 mb-4">
                As a locally owned and operated company, we understand the unique challenges Florida&apos;s climate presents to roofing systems. From intense summer heat to hurricane season storms, we&apos;ve seen it all and know how to protect your property.
              </p>
              <p className="text-gray-600 mb-4">
                Our team brings together experienced professionals who share a passion for quality workmanship. We treat every project—whether it&apos;s a small repair or a complete roof replacement—with the same dedication and attention to detail.
              </p>
              <p className="text-gray-600">
                Today, we&apos;re proud to be one of Jacksonville&apos;s most trusted roofing contractors, with 5-star ratings across Google, Yelp, and Thumbtack.
              </p>
            </div>
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/gimos-roofing-company-van-jobsite.webp" alt="Gimo's Roofing team at job site" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-primary">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.number}</div>
                <div className="text-secondary/80 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide everything we do at Gimo&apos;s Roofing.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <div key={value.title} className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h3 className="font-bold text-secondary mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roofing-crew-installation-action.webp" alt="Gimo's Roofing crew working on installation" fill className="object-cover" />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">
                Why Jacksonville Trusts Us
              </h2>
              <ul className="space-y-4">
                {[
                  { title: "Licensed & Insured", desc: "Fully licensed Florida roofing contractor with comprehensive insurance coverage for your protection." },
                  { title: "5-Star Reviews", desc: "Consistently rated 5 stars on Google, Yelp, and Thumbtack by satisfied customers." },
                  { title: "Quality Materials", desc: "We use only premium materials from trusted manufacturers with strong warranties." },
                  { title: "Free Estimates", desc: "Get a free, no-obligation estimate for your project with transparent, honest pricing." },
                  { title: "Financing Available", desc: "Flexible financing options to make your roofing project affordable." }
                ].map((item) => (
                  <li key={item.title} className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <h4 className="font-semibold text-secondary">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">
            Ready to Work With Us?
          </h2>
          <p className="text-secondary/80 mb-6">
            Experience the Gimo&apos;s difference. Get a free estimate for your roofing project today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">
              Get Your Free Estimate
            </a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">
              Call (904) 606-5313
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
