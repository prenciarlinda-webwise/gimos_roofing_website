import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: { absolute: "Page Not Found - Gimo's Roofing" },
  description: "The page you're looking for isn't here. Browse our roofing services, location pages, or blog instead.",
  robots: { index: false, follow: true },
}

const topServices = [
  { href: '/services/roof-replacement', label: 'Roof Replacement' },
  { href: '/services/roof-repair', label: 'Roof Repair' },
  { href: '/services/emergency-roof-repair', label: 'Emergency Roof Repair' },
  { href: '/services/commercial-roofing', label: 'Commercial Roofing' },
  { href: '/services/siding-installation', label: 'Siding Installation' },
]

const topLocations = [
  { href: '/roofing-jacksonville-fl', label: 'Jacksonville' },
  { href: '/roofing-jacksonville-beach-fl', label: 'Jacksonville Beach' },
  { href: '/roofing-st-augustine-fl', label: 'St. Augustine' },
  { href: '/roofing-ponte-vedra-beach-fl', label: 'Ponte Vedra Beach' },
  { href: '/roofing-orange-park-fl', label: 'Orange Park' },
  { href: '/roofing-mandarin-fl', label: 'Mandarin' },
]

export default function NotFound() {
  return (
    <section className="bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <p className="text-primary font-bold text-sm uppercase tracking-widest mb-3">Error 404</p>
        <h1 className="text-4xl md:text-5xl font-bold text-secondary mb-4">This page slipped through the cracks</h1>
        <p className="text-gray-600 text-lg mb-2 max-w-xl mx-auto">
          The link you followed may have moved or never existed. Don&apos;t worry, you&apos;re still in good hands.
        </p>
        <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
          Pick a service or service area below, or call{' '}
          <a href="tel:+19046065313" className="text-primary font-semibold hover:underline">(904) 606-5313</a> and we&apos;ll point you the right way.
        </p>

        <div className="grid md:grid-cols-2 gap-6 text-left">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-secondary mb-3">Roofing Services</h2>
            <ul className="space-y-2">
              {topServices.map(s => (
                <li key={s.href}>
                  <Link href={s.href} className="text-primary hover:underline">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h2 className="text-lg font-bold text-secondary mb-3">Service Areas</h2>
            <ul className="space-y-2">
              {topLocations.map(l => (
                <li key={l.href}>
                  <Link href={l.href} className="text-primary hover:underline">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
            Back to Home
          </Link>
          <Link href="/blog" className="bg-white border border-gray-300 text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Visit the Blog
          </Link>
          <Link href="/contact" className="bg-white border border-gray-300 text-secondary px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
            Contact Us
          </Link>
        </div>

        <p className="text-gray-400 text-xs mt-10">
          Site built by{' '}
          <a href="https://bytriad.com/" target="_blank" rel="noopener" title="Triad - Digital Marketing Agency" className="text-primary hover:underline">
            Triad
          </a>
        </p>
      </div>
    </section>
  )
}
