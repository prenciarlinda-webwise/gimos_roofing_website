import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: "Contact Gimo's Roofing | Get a Free Estimate | Jacksonville FL",
  description: "Contact Gimo's Roofing for a free roofing estimate in Jacksonville FL. Call (904) 606-5313 or use our online estimator. Mon-Sat 8AM-5:30PM.",
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const financingUrl = 'https://application.enerbank.com/#/link?spnum=8007747598&cid=118584&promo=DEL2625&loamt='

const schemaData = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "mainEntity": {
    "@type": "RoofingContractor",
    "name": "Gimo's Renovation & Roofing",
    "telephone": "+1-904-606-5313",
    "email": "management@gimosroofing.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "33 24th Street East",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "postalCode": "32206"
    },
    "openingHours": "Mo-Sa 08:00-17:30"
  }
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Contact", "item": "https://gimosroofing.com/contact" }
  ]
}

export default function ContactPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="relative text-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/contact-us-hero.webp" alt="Gimo's Roofing owner with company van" fill className="object-cover" />
          <div className="absolute inset-0 bg-secondary/80"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-200">
              Ready to start your roofing project? Get in touch with Jacksonville&apos;s trusted roofing contractor.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <a href="tel:+19046065313" className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              </div>
              <h3 className="font-bold text-secondary mb-1">Call Us</h3>
              <p className="text-gray-500 text-sm mb-2">Speak directly with our team</p>
              <p className="text-primary font-semibold text-sm">(904) 606-5313</p>
            </a>

            <a href="mailto:management@gimosroofing.com" className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              </div>
              <h3 className="font-bold text-secondary mb-1">Email Us</h3>
              <p className="text-gray-500 text-sm mb-2">Send us a message anytime</p>
              <p className="text-primary font-semibold text-sm">management@gimosroofing.com</p>
            </a>

            <a href="https://maps.google.com/?q=33+24th+Street+East+Jacksonville+FL" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-lg transition-shadow group">
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>
              <h3 className="font-bold text-secondary mb-1">Visit Us</h3>
              <p className="text-gray-500 text-sm mb-2">Our office location</p>
              <p className="text-primary font-semibold text-sm">33 24th Street East, Jacksonville, FL</p>
            </a>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Get Estimate Card */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-secondary mb-4">Get Your Free Estimate</h2>
              <p className="text-gray-600 mb-6">
                Use our instant online estimator to get a quick quote for your roofing project. No waiting, no pressure - just accurate pricing.
              </p>

              <div className="space-y-4 mb-6">
                {["Instant online estimates", "No obligation or pressure", "Transparent, honest pricing"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full justify-center">
                Get Your Instant Estimate
              </a>
            </div>

            {/* Financing Card */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-secondary mb-4">Financing Available</h2>
              <p className="text-gray-600 mb-6">
                Don&apos;t let budget concerns stop your roofing project. We offer flexible financing options through EnerBank to help make your new roof affordable.
              </p>

              <div className="space-y-4 mb-6">
                {["Quick and easy application", "Competitive interest rates", "Flexible payment terms"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>

              <a href={financingUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90 w-full justify-center">
                Apply for Financing
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Business Hours</h2>
              <p className="text-gray-600 mb-6">
                We&apos;re available to serve you throughout the week. For emergency roof repairs, give us a call anytime.
              </p>

              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                <table className="w-full">
                  <tbody>
                    {[
                      { day: "Monday", hours: "8:00 AM - 5:30 PM" },
                      { day: "Tuesday", hours: "8:00 AM - 5:30 PM" },
                      { day: "Wednesday", hours: "8:00 AM - 5:30 PM" },
                      { day: "Thursday", hours: "8:00 AM - 5:30 PM" },
                      { day: "Friday", hours: "8:00 AM - 5:30 PM" },
                      { day: "Saturday", hours: "8:00 AM - 5:30 PM" },
                      { day: "Sunday", hours: "Closed" },
                    ].map((item, index, arr) => (
                      <tr key={item.day} className={index !== arr.length - 1 ? "border-b" : ""}>
                        <td className="px-4 py-3 font-medium text-secondary">{item.day}</td>
                        <td className="px-4 py-3 text-gray-600 text-right">{item.hours}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.5!2d-81.6557!3d30.3322!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE5JzU2LjAiTiA4McKwMzknMjAuNSJX!5e0!3m2!1sen!2sus!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Gimo's Roofing Location"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Follow Us */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-4">Follow Us</h2>
          <p className="text-gray-600 mb-6">
            Stay connected with Gimo&apos;s Roofing. Follow us on social media for project updates, tips, and more.
          </p>
          <div className="flex justify-center gap-4">
            <a href="https://www.facebook.com/gimosrenovation/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5L14.5.5C10.6.5,9.77,3.3,9.77,5.47V7.46H7v4h2.77v10h4.73v-10h3.19l.38-4Z"/></svg>
            </a>
            <a href="https://www.instagram.com/gimosroofing/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.65.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12s0,3.67.07,4.95c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/></svg>
            </a>
            <a href="https://www.yelp.com/biz/gimos-roofing-jacksonville" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.16,12.73l-3.88.67a.63.63,0,0,0-.37,1l2.45,3.12a.62.62,0,0,0,1-.07l1.41-3.72A.62.62,0,0,0,20.16,12.73Zm-1.54,6.27-2.34-3a.63.63,0,0,0-1.06.18l-1.3,3.77a.62.62,0,0,0,.69.83l3.64-.68A.63.63,0,0,0,18.62,19Zm-6.48,1.44L11,16.77a.62.62,0,0,0-1-.27l-2.9,2.56a.62.62,0,0,0,.27,1.06l3.72.67A.62.62,0,0,0,12.14,20.44ZM8.23,15.25l1.33-3.77a.63.63,0,0,0-.65-.84l-3.84.57a.62.62,0,0,0-.36,1l2.46,3.24A.62.62,0,0,0,8.23,15.25Zm1.68-8.08,2.48,7.23a.62.62,0,0,0,1,.27L19,9.49a.62.62,0,0,0-.28-1.06L10.6,6.72A.62.62,0,0,0,9.91,7.17Z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/gimo-s-renovation-roofing/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center text-white hover:bg-primary hover:text-secondary transition-all">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
