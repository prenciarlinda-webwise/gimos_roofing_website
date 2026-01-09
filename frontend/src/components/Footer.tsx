import Link from 'next/link'
import Image from 'next/image'

const roofingLinks = [
  { name: "New Construction", href: "/services/new-construction-roofing" },
  { name: "Roof Replacement", href: "/services/roof-replacement" },
  { name: "Roof Repair", href: "/services/roof-repair" },
  { name: "Commercial Roofing", href: "/services/commercial-roofing" },
]

const sidingLinks = [
  { name: "Siding Installation", href: "/services/siding-installation" },
  { name: "Siding Repair", href: "/services/siding-repair" },
]

const quickLinks = [
  { name: "About Us", href: "/about" },
  { name: "Service Areas", href: "/service-areas" },
  { name: "Gallery", href: "/gallery" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Free Estimate", href: "/contact" },
]

const serviceAreas = [
  "Jacksonville Beach",
  "Ponte Vedra Beach",
  "St. Augustine",
  "Orange Park",
  "Fernandina Beach",
  "Nocatee",
  "Riverside",
  "San Marco",
  "Mandarin",
  "Southside Jax",
]

const partners = [
  { name: "Fabby Cleaning Services", href: "https://fabbycleaningserv.com", nofollow: true },
  { name: "Welch Team Real Estate", href: "https://welchteam.com", nofollow: true },
  { name: "JVICON LLC", href: "https://jviconllc.com", nofollow: true },
  { name: "Eastern Shores Construction", href: "https://www.easternshoresconstruction.com", nofollow: true },
  { name: "904 Dumpster", href: "https://www.904dumpster.com", nofollow: false },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <>
      <footer className="bg-secondary text-white">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div>
              <Link href="/" className="inline-block mb-6">
                <Image
                  src="/gimos-roofing-logo-alt.webp"
                  alt="Gimo's Roofing - Jacksonville FL Roofing Company"
                  width={150}
                  height={48}
                  className="h-12 w-auto"
                />
              </Link>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Jacksonville&apos;s trusted roofing contractor providing quality craftsmanship and exceptional customer service since day one.
              </p>
              <div className="flex gap-4">
                <a href="https://www.facebook.com/gimosrenovation/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition-all" aria-label="Facebook">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.5.5C10.6.5,9.77,3.3,9.77,5.47V7.46H7v4h2.77v10h4.73v-10h3.19l.38-4Z"/></svg>
                </a>
                <a href="https://www.instagram.com/gimosroofing/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition-all" aria-label="Instagram">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
                </a>
                <a href="https://www.yelp.com/biz/gimos-roofing-jacksonville" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition-all" aria-label="Yelp">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16,12.73l-3.88.67a.63.63,0,0,0-.37,1l2.45,3.12a.62.62,0,0,0,1-.07l1.41-3.72A.62.62,0,0,0,20.16,12.73Zm-1.54,6.27-2.34-3a.63.63,0,0,0-1.06.18l-1.3,3.77a.62.62,0,0,0,.69.83l3.64-.68A.63.63,0,0,0,18.62,19Zm-6.48,1.44L11,16.77a.62.62,0,0,0-1-.27l-2.9,2.56a.62.62,0,0,0,.27,1.06l3.72.67A.62.62,0,0,0,12.14,20.44ZM8.23,15.25l1.33-3.77a.63.63,0,0,0-.65-.84l-3.84.57a.62.62,0,0,0-.36,1l2.46,3.24A.62.62,0,0,0,8.23,15.25Zm1.68-8.08,2.48,7.23a.62.62,0,0,0,1,.27L19,9.49a.62.62,0,0,0-.28-1.06L10.6,6.72A.62.62,0,0,0,9.91,7.17Z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/gimo-s-renovation-roofing/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-secondary transition-all" aria-label="LinkedIn">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-primary">Our Services</h3>
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Roofing</h4>
                <ul className="space-y-2">
                  {roofingLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">Siding</h4>
                <ul className="space-y-2">
                  {sidingLinks.map((link) => (
                    <li key={link.name}>
                      <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                        <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-primary">Quick Links</h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-gray-300 hover:text-primary transition-colors flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-primary">Contact Us</h3>
              <ul className="space-y-4">
                <li>
                  <a href="tel:+19046065313" className="flex items-start gap-3 text-gray-300 hover:text-primary transition-colors">
                    <svg className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>(904) 606-5313</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:management@gimosroofing.com" className="flex items-start gap-3 text-gray-300 hover:text-primary transition-colors">
                    <svg className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span>management@gimosroofing.com</span>
                  </a>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>33 24th Street East<br />Jacksonville, FL 32206</span>
                </li>
                <li className="flex items-start gap-3 text-gray-300">
                  <svg className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon - Sat: 8:00 AM - 5:30 PM</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Service Areas */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <h3 className="text-lg font-bold mb-4 text-primary">Service Areas</h3>
            <div className="flex flex-wrap gap-2">
              {serviceAreas.map((area) => (
                <Link
                  key={area}
                  href={`/roofing-${area.toLowerCase().replace(/\s+/g, '-')}-fl`}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-primary hover:text-secondary transition-all"
                >
                  {area}
                </Link>
              ))}
            </div>
          </div>

          {/* Trusted Partners */}
          <div className="mt-8 pt-8 border-t border-white/10">
            <h3 className="text-lg font-bold mb-4 text-primary">Trusted Partners</h3>
            <div className="flex flex-wrap gap-2">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel={partner.nofollow ? "noopener noreferrer nofollow" : "noopener noreferrer"}
                  className="px-3 py-1 bg-white/5 rounded-full text-sm text-gray-300 hover:bg-primary hover:text-secondary transition-all"
                >
                  {partner.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} Gimo&apos;s Renovation & Roofing. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link href="/privacy-policy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
                <Link href="/terms-of-service" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</Link>
                <Link href="/sitemap" className="text-gray-400 hover:text-primary transition-colors">Sitemap</Link>
              </div>
            </div>
            <div className="text-center mt-4 pt-4 border-t border-white/5">
              <p className="text-gray-500 text-xs">
                Built by <a href="https://www.websiteandseoagency.com/" target="_blank" rel="noopener" className="text-primary hover:underline">Web Wise</a>
              </p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom padding for mobile sticky CTA */}
      <div className="h-24 lg:hidden"></div>
    </>
  )
}
