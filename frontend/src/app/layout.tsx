import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'
import { Analytics } from '@/components/Analytics'

const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID || 'GTM-T4W2HMRZ'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['600', '700', '800'],
  variable: '--font-heading',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: "Gimo's Roofing - Jacksonville's Trusted Roofing Contractor",
    template: "%s - Gimo's Roofing"
  },
  description: "Jacksonville's trusted roofing contractor. Professional roof installation, replacement & repair services. Free estimates. Financing available. Call (904) 606-5313",
  metadataBase: new URL('https://www.gimosroofing.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: "Gimo's Roofing",
  },
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: '/gimos-roofing-logo.webp',
    apple: '/gimos-roofing-logo.webp',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const structuredData = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "@id": "https://www.gimosroofing.com/#organization",
  "name": "Gimo's Roofing",
  "alternateName": "Gimo's Roofing",
  "image": "https://www.gimosroofing.com/gimos-roofing-logo.webp",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.gimosroofing.com/gimos-roofing-logo.webp",
    "width": 400,
    "height": 100
  },
  "url": "https://www.gimosroofing.com",
  "telephone": "(904) 606-5313",
  "email": "management@gimosroofing.com",
  "identifier": {
    "@type": "PropertyValue",
    "propertyID": "Florida Contractor License",
    "value": "CCC1332453"
  },
  "foundingDate": "2001",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "33 24th St E",
    "addressLocality": "Jacksonville",
    "addressRegion": "FL",
    "postalCode": "32206",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.3590,
    "longitude": -81.6553
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:00",
    "closes": "17:30"
  },
  "areaServed": [
    { "@type": "City", "name": "Jacksonville, FL", "sameAs": "https://en.wikipedia.org/wiki/Jacksonville,_Florida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Duval County, FL" } },
    { "@type": "City", "name": "Jacksonville Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Jacksonville_Beach,_Florida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Duval County, FL" } },
    { "@type": "City", "name": "Atlantic Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Atlantic_Beach,_Florida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Duval County, FL" } },
    { "@type": "City", "name": "Neptune Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Neptune_Beach,_Florida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Duval County, FL" } },
    { "@type": "City", "name": "St. Augustine, FL", "sameAs": "https://en.wikipedia.org/wiki/St._Augustine,_Florida", "containedInPlace": { "@type": "AdministrativeArea", "name": "St. Johns County, FL" } },
    { "@type": "City", "name": "Ponte Vedra Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Ponte_Vedra_Beach,_Florida", "containedInPlace": { "@type": "AdministrativeArea", "name": "St. Johns County, FL" } },
    { "@type": "City", "name": "Nocatee, FL", "sameAs": "https://en.wikipedia.org/wiki/Nocatee,_Florida", "containedInPlace": { "@type": "AdministrativeArea", "name": "St. Johns County, FL" } },
    { "@type": "City", "name": "Orange Park, FL", "sameAs": "https://en.wikipedia.org/wiki/Orange_Park,_Florida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Clay County, FL" } },
    { "@type": "City", "name": "Fernandina Beach, FL", "sameAs": "https://en.wikipedia.org/wiki/Fernandina_Beach,_Florida", "containedInPlace": { "@type": "AdministrativeArea", "name": "Nassau County, FL" } },
    { "@type": "Place", "name": "Riverside, Jacksonville, FL", "sameAs": "https://en.wikipedia.org/wiki/Riverside,_Jacksonville", "containedInPlace": { "@type": "AdministrativeArea", "name": "Duval County, FL" } },
    { "@type": "Place", "name": "San Marco, Jacksonville, FL", "sameAs": "https://en.wikipedia.org/wiki/San_Marco,_Jacksonville", "containedInPlace": { "@type": "AdministrativeArea", "name": "Duval County, FL" } },
    { "@type": "Place", "name": "Mandarin, Jacksonville, FL", "sameAs": "https://en.wikipedia.org/wiki/Mandarin,_Jacksonville", "containedInPlace": { "@type": "AdministrativeArea", "name": "Duval County, FL" } },
    { "@type": "Place", "name": "Southside, Jacksonville, FL", "sameAs": "https://en.wikipedia.org/wiki/Southside,_Jacksonville", "containedInPlace": { "@type": "AdministrativeArea", "name": "Duval County, FL" } }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing & Siding Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Roof Repair", "url": "https://www.gimosroofing.com/services/emergency-roof-repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement", "url": "https://www.gimosroofing.com/services/roof-replacement" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair", "url": "https://www.gimosroofing.com/services/roof-repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roofing", "url": "https://www.gimosroofing.com/services/commercial-roofing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Construction Roofing", "url": "https://www.gimosroofing.com/services/new-construction-roofing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Installation", "url": "https://www.gimosroofing.com/services/siding-installation" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Repair", "url": "https://www.gimosroofing.com/services/siding-repair" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Metal Roofing", "url": "https://www.gimosroofing.com/services/metal-roofing" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Gutter Installation, Repair and Replacement", "url": "https://www.gimosroofing.com/services/roof-gutter" } },
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Waterproofing", "url": "https://www.gimosroofing.com/services/roof-waterproofing" } }
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "94",
    "bestRating": "5",
    "worstRating": "1"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Financing Available"],
  "description": "Gimo's Roofing is a licensed, family-operated roofing contractor in Jacksonville, FL (license CCC1332453, CertainTeed Certified) with 500+ roofs completed and a 5.0-star rating. We provide roof replacement, roof repair, emergency and storm damage repair, roof leak repair, metal roofing, gutters, roof waterproofing, new construction roofing, commercial roofing, and siding across Jacksonville, the Beaches, Ponte Vedra, St. Augustine, Orange Park, Fernandina Beach, and Nocatee.",
  "knowsAbout": [
    "roofing",
    "roof replacement",
    "roof repair",
    "emergency roof repair",
    "storm damage roof repair",
    "roof leak repair",
    "hail damage roof repair",
    "wind damage roof repair",
    "asphalt shingle roofing",
    "metal roofing",
    "tile roofing",
    "flat roofing",
    "tpo roofing",
    "commercial roofing",
    "new construction roofing",
    "roof inspection",
    "roof waterproofing",
    "gutter installation",
    "gutter repair",
    "siding installation",
    "insurance claim roofing",
    "hurricane roof straps"
  ],
  "sameAs": [
    "https://www.facebook.com/gimosroofing",
    "https://www.instagram.com/gimosroofing/",
    "https://www.yelp.com/biz/gimos-renovation-and-roofing-jacksonville",
    "https://www.linkedin.com/company/gimo-s-renovation-roofing/",
    "https://www.youtube.com/channel/UC-Vq8SO3cVfOnWExWnt3K0w",
    "https://www.thumbtack.com/fl/pompano-beach/roofing/gimos-roofing/service/490737400306180103"
  ],
  "hasMap": "https://maps.app.goo.gl/hC3XuE5pKA2ypPAQA",
  "founder": {
    "@type": "Person",
    "name": "Ivan Hysaj",
    "jobTitle": "Owner"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "license",
      "name": "Florida Certified Roofing Contractor License CCC1332453",
      "recognizedBy": {
        "@type": "GovernmentOrganization",
        "name": "Florida Department of Business and Professional Regulation"
      }
    },
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "certification",
      "name": "CertainTeed Certified Installer",
      "recognizedBy": {
        "@type": "Organization",
        "name": "CertainTeed"
      }
    }
  ]
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Ahrefs Analytics */}
        <script src="https://analytics.ahrefs.com/analytics.js" data-key="5GMZmyDiD/teSNldyX+i0Q" async></script>

        {/* Preconnect to external resources for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://tile.openstreetmap.org" />
        <link rel="dns-prefetch" href="https://www.youtube.com" />

        {/* Preload hero image for faster LCP */}
        <link
          rel="preload"
          href="/images/roofing-jacksonville-hero.webp"
          as="image"
          type="image/webp"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Google Tag Manager */}
        {GTM_ID && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                  })(window,document,'script','dataLayer','${GTM_ID}');
                `,
              }}
            />

            {/* First-touch attribution tracking */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  (function() {
                    if (!document.cookie.includes('_first_source=')) {
                      var params = new URLSearchParams(window.location.search);
                      var source = params.get('utm_source') || (document.referrer ? new URL(document.referrer).hostname : 'direct');
                      var medium = params.get('utm_medium') || 'none';
                      var campaign = params.get('utm_campaign') || 'none';
                      var sourceString = source + '|' + medium + '|' + campaign;

                      var expiry = new Date();
                      expiry.setDate(expiry.getDate() + 30);
                      document.cookie = '_first_source=' + sourceString + '; expires=' + expiry.toUTCString() + '; path=/';
                    }
                  })();
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="bg-white text-gray-800 antialiased">
        {/* Google Tag Manager (noscript) */}
        {GTM_ID && (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        )}

        <Analytics />

        <Header />
        <main>
          {children}
        </main>
        <Footer />
        <WhatsAppWidget />
      </body>
    </html>
  )
}
