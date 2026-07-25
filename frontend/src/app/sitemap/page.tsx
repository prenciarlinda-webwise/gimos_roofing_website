import { Metadata } from 'next'
import Link from 'next/link'
import { blogPosts as allBlogPosts } from '@/lib/blogData'

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
  { title: "For AI Agents", href: "/ai" },
]

const servicePages = [
  { title: "Emergency Roof Repair", href: "/services/emergency-roof-repair" },
  { title: "Roof Replacement", href: "/services/roof-replacement" },
  { title: "Roof Repair", href: "/services/roof-repair" },
  { title: "New Construction Roofing", href: "/services/new-construction-roofing" },
  { title: "Commercial Roofing", href: "/services/commercial-roofing" },
  { title: "Siding Installation", href: "/services/siding-installation" },
  { title: "Siding Repair", href: "/services/siding-repair" },
  { title: "Metal Roofing", href: "/services/metal-roofing" },
  { title: "Gutter Installation, Repair & Replacement", href: "/services/roof-gutter" },
  { title: "Roof Waterproofing", href: "/services/roof-waterproofing" },
  { title: "Chimney Repair", href: "/services/chimney-repair" },
  { title: "Roof Financing Florida", href: "/roof-financing-florida" },
]

const locationPages = [
  { title: "Jacksonville", href: "/roofing-jacksonville-fl" },
  { title: "Jacksonville Beach", href: "/roofing-jacksonville-beach-fl" },
  { title: "Atlantic Beach", href: "/roofing-atlantic-beach-fl" },
  { title: "Neptune Beach", href: "/roofing-neptune-beach-fl" },
  { title: "Ponte Vedra Beach", href: "/roofing-ponte-vedra-beach-fl" },
  { title: "Nocatee", href: "/roofing-nocatee-fl" },
  { title: "St. Augustine", href: "/roofing-st-augustine-fl" },
  { title: "Orange Park", href: "/roofing-orange-park-fl" },
  { title: "Fernandina Beach", href: "/roofing-fernandina-beach-fl" },
  { title: "Riverside", href: "/roofing-riverside-fl" },
  { title: "San Marco", href: "/roofing-san-marco-fl" },
  { title: "Mandarin", href: "/roofing-mandarin-fl" },
  { title: "Southside Jacksonville", href: "/roofing-southside-jax-fl" },
  { title: "Atlantic Beach", href: "/roofing-atlantic-beach-fl" },
  { title: "Neptune Beach", href: "/roofing-neptune-beach-fl" },
]

// Dynamically get published blog posts
const now = new Date().toISOString()
const blogPosts = allBlogPosts
  .filter(post => {
    if (!post.publishDate) return true
    const pubDate = post.publishDate.includes('T') ? post.publishDate : post.publishDate + 'T00:00'
    return pubDate <= now
  })
  .map(post => ({ title: post.title, href: `/blog/${post.slug}` }))

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
