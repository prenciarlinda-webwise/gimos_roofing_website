import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import WhatsAppWidget from '@/components/WhatsAppWidget'

const GA_MEASUREMENT_ID = 'G-62SV964X91'
const GOOGLE_ADS_ID = 'AW-17806667394'

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
    default: "Gimo's Roofing | Jacksonville's Trusted Roofing Contractor",
    template: "%s | Gimo's Roofing"
  },
  description: "Jacksonville's trusted roofing contractor. Professional roof installation, replacement & repair services. Free estimates. Financing available. Call (904) 606-5313",
  metadataBase: new URL('https://gimosroofing.com'),
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
  "@id": "https://gimosroofing.com/#organization",
  "name": "Gimo's Renovation & Roofing",
  "alternateName": "Gimo's Roofing",
  "image": "https://gimosroofing.com/gimos-roofing-logo.webp",
  "logo": {
    "@type": "ImageObject",
    "url": "https://gimosroofing.com/gimos-roofing-logo.webp",
    "width": 400,
    "height": 100
  },
  "url": "https://gimosroofing.com",
  "telephone": "(904) 606-5313",
  "email": "management@gimosroofing.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "33 24th Street East",
    "addressLocality": "Jacksonville",
    "addressRegion": "FL",
    "postalCode": "32206",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 30.3322,
    "longitude": -81.6557
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "08:00",
    "closes": "17:30"
  },
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": 30.3322,
      "longitude": -81.6557
    },
    "geoRadius": "80467"
  },
  "priceRange": "$$",
  "paymentAccepted": ["Cash", "Credit Card", "Financing Available"],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5",
    "reviewCount": "50",
    "bestRating": "5",
    "worstRating": "1"
  },
  "sameAs": [
    "https://www.facebook.com/gimosrenovation/",
    "https://www.instagram.com/gimosroofing/",
    "https://www.yelp.com/biz/gimos-roofing-jacksonville",
    "https://www.linkedin.com/company/gimo-s-renovation-roofing/"
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="bg-white text-gray-800 antialiased">
        {/* Google Analytics & Google Ads */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
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
