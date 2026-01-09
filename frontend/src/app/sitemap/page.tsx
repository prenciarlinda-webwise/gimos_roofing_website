import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Sitemap | Gimo's Roofing Jacksonville FL",
  description: "Complete sitemap for Gimo's Roofing website. Find all our pages including services, locations, and blog posts.",
}

const mainPages = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Services", href: "/services" },
  { title: "Gallery", href: "/gallery" },
  { title: "Service Areas", href: "/service-areas" },
  { title: "Contact", href: "/contact" },
  { title: "Blog", href: "/blog" },
]

const servicePages = [
  { title: "Roof Replacement", href: "/services/roof-replacement" },
  { title: "Roof Repair", href: "/services/roof-repair" },
  { title: "New Construction Roofing", href: "/services/new-construction-roofing" },
  { title: "Commercial Roofing", href: "/services/commercial-roofing" },
  { title: "Siding Installation", href: "/services/siding-installation" },
  { title: "Siding Repair", href: "/services/siding-repair" },
]

const locationPages = [
  { title: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { title: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { title: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { title: "Orange Park", href: "/roofing-orange-park-fl" },
  { title: "Fernandina Beach", href: "/roofing-fernandina-beach-fl" },
  { title: "Nocatee", href: "/roofing-nocatee-fl" },
  { title: "Riverside", href: "/roofing-riverside-fl" },
  { title: "San Marco", href: "/roofing-san-marco-fl" },
  { title: "Mandarin", href: "/roofing-mandarin-fl" },
  { title: "Southside Jacksonville", href: "/roofing-southside-jax-fl" },
]

const blogPosts = [
  { title: "How to Check Florida Roofing License", href: "/blog/how-to-check-florida-roofing-license" },
  { title: "Roofing Financing Options Jacksonville", href: "/blog/roofing-financing-options-jacksonville" },
  { title: "Questions to Ask Roofing Contractor", href: "/blog/questions-to-ask-roofing-contractor" },
  { title: "Flat Roof Repair Jacksonville", href: "/blog/flat-roof-repair-jacksonville" },
  { title: "When Roof Needs Replacement", href: "/blog/when-roof-needs-replacement" },
  { title: "Benefits of Metal Roofing in Florida", href: "/blog/benefits-metal-roofing-florida" },
  { title: "Tile Roofing Contractor Jacksonville", href: "/blog/tile-roofing-contractor-jacksonville" },
  { title: "Storm Damage Roofing Insurance", href: "/blog/storm-damage-roofing-insurance" },
]

export default function SitemapPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Sitemap</h1>
            <p className="text-lg text-gray-200">
              Find all pages on the Gimo&apos;s Roofing website.
            </p>
          </div>
        </div>
      </section>

      {/* Sitemap Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Main Pages */}
            <div>
              <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b-2 border-primary">Main Pages</h2>
              <ul className="space-y-2">
                {mainPages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="text-gray-600 hover:text-primary transition-colors">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Service Pages */}
            <div>
              <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b-2 border-primary">Services</h2>
              <ul className="space-y-2">
                {servicePages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="text-gray-600 hover:text-primary transition-colors">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Location Pages */}
            <div>
              <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b-2 border-primary">Service Areas</h2>
              <ul className="space-y-2">
                {locationPages.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="text-gray-600 hover:text-primary transition-colors">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Blog Posts */}
            <div>
              <h2 className="text-xl font-bold text-secondary mb-4 pb-2 border-b-2 border-primary">Blog Posts</h2>
              <ul className="space-y-2">
                {blogPosts.map((page) => (
                  <li key={page.href}>
                    <Link href={page.href} className="text-gray-600 hover:text-primary transition-colors">
                      {page.title}
                    </Link>
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
            Need Help Finding Something?
          </h2>
          <p className="text-secondary/80 mb-6">
            Contact us directly and we&apos;ll be happy to assist you.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn bg-secondary text-white hover:bg-secondary/90">
              Contact Us
            </Link>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">
              Call (904) 606-5313
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
