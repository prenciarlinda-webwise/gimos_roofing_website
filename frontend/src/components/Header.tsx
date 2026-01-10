'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const navLinks = [
  { name: "Home", href: "/", title: "Gimo's Roofing Home" },
  { name: "Services", href: "/services", hasDropdown: true, title: "Roofing & Siding Services" },
  { name: "Service Areas", href: "/service-areas", title: "Jacksonville Roofing Service Areas" },
  { name: "About", href: "/about", title: "About Gimo's Roofing" },
  { name: "Gallery", href: "/gallery", title: "Roofing Project Gallery" },
  { name: "Blog", href: "/blog", title: "Jacksonville Roofing Blog" },
  { name: "Contact", href: "/contact", title: "Contact Gimo's Roofing" },
]

const roofingLinks = [
  { name: "New Construction", href: "/services/new-construction-roofing", title: "New Construction Roofing Jacksonville" },
  { name: "Roof Replacement", href: "/services/roof-replacement", title: "Roof Replacement Jacksonville FL" },
  { name: "Roof Repair", href: "/services/roof-repair", title: "Roof Repair Jacksonville FL" },
  { name: "Commercial Roofing", href: "/services/commercial-roofing", title: "Commercial Roofing Jacksonville FL" },
]

const sidingLinks = [
  { name: "Siding Installation", href: "/services/siding-installation", title: "Siding Installation Jacksonville FL" },
  { name: "Siding Repair", href: "/services/siding-repair", title: "Siding Repair Jacksonville FL" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`}>
        {/* Top Bar */}
        <div className="bg-secondary text-white py-2 hidden md:block">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
            <div className="flex items-center gap-6">
              <a href="tel:+19046065313" title="Call Gimo's Roofing Jacksonville" className="flex items-center gap-2 hover:text-primary transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (904) 606-5313
              </a>
              <span className="flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Mon-Sat: 8:00 AM - 5:30 PM
              </span>
            </div>
            <div className="flex items-center gap-4">
              <a href="https://www.facebook.com/gimosrenovation/" target="_blank" rel="noopener noreferrer" title="Gimo's Roofing on Facebook" className="hover:text-primary transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.5.5C10.6.5,9.77,3.3,9.77,5.47V7.46H7v4h2.77v10h4.73v-10h3.19l.38-4Z"/></svg>
              </a>
              <a href="https://www.instagram.com/gimosroofing/" target="_blank" rel="noopener noreferrer" title="Gimo's Roofing on Instagram" className="hover:text-primary transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
              </a>
              <a href="https://www.yelp.com/biz/gimos-roofing-jacksonville" target="_blank" rel="noopener noreferrer" title="Gimo's Roofing on Yelp" className="hover:text-primary transition-colors" aria-label="Yelp">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16,12.73l-3.88.67a.63.63,0,0,0-.37,1l2.45,3.12a.62.62,0,0,0,1-.07l1.41-3.72A.62.62,0,0,0,20.16,12.73Zm-1.54,6.27-2.34-3a.63.63,0,0,0-1.06.18l-1.3,3.77a.62.62,0,0,0,.69.83l3.64-.68A.63.63,0,0,0,18.62,19Zm-6.48,1.44L11,16.77a.62.62,0,0,0-1-.27l-2.9,2.56a.62.62,0,0,0,.27,1.06l3.72.67A.62.62,0,0,0,12.14,20.44ZM8.23,15.25l1.33-3.77a.63.63,0,0,0-.65-.84l-3.84.57a.62.62,0,0,0-.36,1l2.46,3.24A.62.62,0,0,0,8.23,15.25Zm1.68-8.08,2.48,7.23a.62.62,0,0,0,1,.27L19,9.49a.62.62,0,0,0-.28-1.06L10.6,6.72A.62.62,0,0,0,9.91,7.17Z"/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className={`bg-white shadow-md transition-all duration-300 ${scrolled ? 'py-2' : ''}`}>
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <Link href="/" title="Gimo's Roofing - Jacksonville FL Roofing Company" className="flex items-center">
                <Image
                  src="/gimos-roofing-logo.webp"
                  alt="Gimo's Roofing - Jacksonville FL Roofing Company"
                  title="Gimo's Roofing - Jacksonville FL Roofing Company"
                  width={200}
                  height={56}
                  className="h-14 w-auto"
                  priority
                />
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <div key={link.name} className="relative group">
                    <Link
                      href={link.href}
                      title={link.title}
                      className="px-4 py-2 text-gray-700 hover:text-primary font-medium transition-colors flex items-center gap-1"
                    >
                      {link.name}
                      {link.hasDropdown && (
                        <svg className="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </Link>
                    {link.hasDropdown && (
                      <div className="absolute top-full left-0 w-56 bg-white shadow-xl rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                        <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Roofing</div>
                        {roofingLinks.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            title={service.title}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                        <div className="border-t border-gray-100 my-2"></div>
                        <div className="px-4 py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Siding</div>
                        {sidingLinks.map((service) => (
                          <Link
                            key={service.name}
                            href={service.href}
                            title={service.title}
                            className="block px-4 py-2 text-gray-700 hover:bg-primary/10 hover:text-primary transition-colors"
                          >
                            {service.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="hidden lg:flex items-center gap-4">
                <a
                  href="https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Get a Free Roofing Estimate Online"
                  className="btn btn-primary"
                >
                  Free Estimate
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700 hover:text-primary"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {!mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className={`lg:hidden ${mobileMenuOpen ? '' : 'hidden'} bg-white border-t`}>
            <div className="px-4 py-2">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    title={link.title}
                    className="block py-3 text-gray-700 hover:text-primary font-medium border-b border-gray-100"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.hasDropdown && (
                    <div className="pl-4">
                      <div className="py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider">Roofing</div>
                      {roofingLinks.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          title={service.title}
                          className="block py-2 text-gray-600 hover:text-primary text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                      <div className="py-1 text-xs font-semibold text-gray-400 uppercase tracking-wider mt-2">Siding</div>
                      {sidingLinks.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          title={service.title}
                          className="block py-2 text-gray-600 hover:text-primary text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="py-4">
                <a
                  href="https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Get a Free Roofing Estimate Online"
                  className="btn btn-primary w-full justify-center"
                >
                  Free Estimate
                </a>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-0 md:h-28"></div>

      {/* Mobile Emergency Call Button */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-gradient-to-t from-secondary to-secondary/95 p-3 shadow-lg">
        <a
          href="tel:+19046065313"
          title="Call Gimo's Roofing Jacksonville"
          className="flex items-center justify-center gap-3 w-full bg-primary text-secondary font-bold py-4 px-6 rounded-xl text-lg active:scale-95 transition-transform"
          style={{ minHeight: '56px' }}
        >
          <svg className="w-6 h-6 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span>Call Now - (904) 606-5313</span>
        </a>
        <p className="text-center text-white/70 text-xs mt-2">24/7 Emergency Storm Response</p>
      </div>
    </>
  )
}
