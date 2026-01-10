import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import FAQ from '@/components/FAQ'

const ProjectsMapCompact = dynamic(() => import('@/components/ProjectsMapCompact'), { ssr: false })

export const metadata: Metadata = {
  title: "Jacksonville Roofing Company - #1 Roofers Jacksonville FL",
  description: "Looking for a top-rated Jacksonville roofing company? Gimo's Roofing offers expert roof repair, replacement & installation. Free estimates: (904) 606-5313.",
  keywords: ["jacksonville roofing company", "roofing contractor jacksonville fl", "roofers jacksonville fl", "roofing jacksonville", "Gimo's Roofing"],
  openGraph: {
    title: "Jacksonville Roofing Company - #1 Roofers Jacksonville FL",
    description: "Gimo's Roofing is Jacksonville's top-rated roofing contractor. Expert roof repair, replacement & installation. Call (904) 606-5313 for a free estimate.",
    url: "https://www.gimosroofing.com",
    images: [
      {
        url: "https://www.gimosroofing.com/images/best-roofing-company-jacksonville-fl.jpg",
        width: 1200,
        height: 630,
        alt: "Gimo's Roofing - Best Roofing Company Jacksonville FL",
      },
    ],
  },
  alternates: {
    canonical: "https://www.gimosroofing.com",
  },
}

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const financingUrl = 'https://application.enerbank.com/#/link?spnum=8007747598&cid=118584&promo=DEL2625&loamt='

const roofingServices = [
  { title: 'Roof Replacement', description: 'Complete roof replacement with premium materials. Starting at $7,900 with financing available.', href: '/services/roof-replacement', image: '/images/home-page-roofing-services.webp', alt: 'Roof Replacement in Jacksonville FL', imgTitle: 'Roof Replacement in Jacksonville FL' },
  { title: 'Roof Repair', description: 'Fast, reliable roof repairs for leaks, storm damage, and general wear. Starting at $500.', href: '/services/roof-repair', image: '/images/roof-repair-in-progress-jacksonville.webp', alt: 'Roof Repair in Jacksonville FL', imgTitle: 'Roof Repair in Jacksonville FL' },
  { title: 'New Construction', description: 'Expert roofing for new home builds. We partner with builders and homeowners.', href: '/services/new-construction-roofing', image: '/images/new-roof-installation-blue-house-florida.webp', alt: 'New Construction Roofing in Jacksonville FL', imgTitle: 'New Construction Roofing in Jacksonville FL' },
  { title: 'Commercial Roofing', description: 'Professional commercial roofing services for businesses in Jacksonville.', href: '/services/commercial-roofing', image: '/images/commercial-roofing-services.webp', alt: 'Commercial Roofing in Jacksonville FL', imgTitle: 'Commercial Roofing in Jacksonville FL' }
]

const sidingServices = [
  { title: 'Siding Installation', description: 'Transform your home with professional siding installation. Vinyl, fiber cement & more.', href: '/services/siding-installation', image: '/images/home-page-siding-services.webp', alt: 'Siding Installation in Jacksonville FL', imgTitle: 'Siding Installation in Jacksonville FL' },
  { title: 'Siding Repair', description: 'Expert siding repairs to restore protection and curb appeal to your home.', href: '/services/siding-repair', image: '/images/siding-project-closeup.webp', alt: 'Siding Repair in Jacksonville FL', imgTitle: 'Siding Repair in Jacksonville FL' }
]

const serviceAreas = ['Jacksonville Beach', 'Ponte Vedra Beach', 'St. Augustine', 'Orange Park', 'Fernandina Beach', 'Nocatee', 'Riverside', 'San Marco', 'Mandarin', 'Southside Jax']

const stats = [{ number: '500+', label: 'Roofs Completed' }, { number: '15+', label: 'Years Experience' }, { number: '100%', label: 'Satisfaction' }, { number: '5.0', label: 'Star Rating' }]

const whyChooseUs = [
  { title: 'Licensed & Insured', description: 'Fully licensed contractor with comprehensive insurance.' },
  { title: 'Free Estimates', description: 'No-obligation estimates with transparent pricing.' },
  { title: 'Financing Available', description: 'Flexible financing options for your project.' },
  { title: 'Warranty Protection', description: 'Industry-leading warranties on materials and labor.' },
  { title: 'Local Expertise', description: 'Jacksonville climate and building code experts.' },
  { title: 'Quality Materials', description: 'Premium materials from GAF and Owens Corning.' }
]

const faqs = [
  { question: 'How much does a new roof cost in Jacksonville, FL?', answer: 'The cost of a new roof in Jacksonville typically ranges from $7,900 to $25,000+ depending on the size of your home, materials chosen, and complexity. We offer free estimates and financing options.' },
  { question: 'How long does a roof replacement take?', answer: 'Most residential roof replacements are completed within 1-3 days, depending on size and complexity.' },
  { question: 'Do you offer emergency roof repair services?', answer: 'Yes! We offer emergency roof repair services throughout Jacksonville. Call (904) 606-5313 for immediate assistance.' },
  { question: 'What types of roofing materials do you install?', answer: 'We install asphalt shingles, metal roofing, tile roofing, and various commercial roofing systems.' },
  { question: 'Are you licensed and insured?', answer: 'Yes, Gimos Roofing is fully licensed and insured in Florida with comprehensive liability and workers comp coverage.' },
  { question: 'Do you provide warranties on your work?', answer: 'Yes! We provide manufacturer warranties on materials and our own workmanship warranty.' }
]

const serviceAreasWithUrls = [
  { name: "Jacksonville Beach", slug: "roofing-jacksonville-beach-fl", county: "Duval" },
  { name: "Ponte Vedra Beach", slug: "roofing-ponte-vedra-beach-fl", county: "St. Johns" },
  { name: "Nocatee", slug: "roofing-nocatee-fl", county: "St. Johns" },
  { name: "St. Augustine", slug: "roofing-st-augustine-fl", county: "St. Johns" },
  { name: "Orange Park", slug: "roofing-orange-park-fl", county: "Clay" },
  { name: "Fernandina Beach", slug: "roofing-fernandina-beach-fl", county: "Nassau" },
  { name: "Riverside", slug: "roofing-riverside-fl", county: "Duval" },
  { name: "San Marco", slug: "roofing-san-marco-fl", county: "Duval" },
  { name: "Mandarin", slug: "roofing-mandarin-fl", county: "Duval" },
  { name: "Southside", slug: "roofing-southside-jax-fl", county: "Duval" }
]

const StarIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
)

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const businessSchema = {
  "@context": "https://schema.org",
  "@type": "RoofingContractor",
  "name": "Gimo's Renovation & Roofing",
  "image": "https://www.gimosroofing.com/gimos-roofing-logo.webp",
  "url": "https://www.gimosroofing.com",
  "telephone": "(904) 606-5313",
  "email": "management@gimosroofing.com",
  "address": { "@type": "PostalAddress", "streetAddress": "33 24th Street East", "addressLocality": "Jacksonville", "addressRegion": "FL", "postalCode": "32206", "addressCountry": "US" },
  "geo": { "@type": "GeoCoordinates", "latitude": 30.3322, "longitude": -81.6557 },
  "openingHoursSpecification": { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], "opens": "08:00", "closes": "17:30" },
  "areaServed": serviceAreasWithUrls.map(area => ({
    "@type": "City",
    "name": area.name + ", FL",
    "url": "https://www.gimosroofing.com/" + area.slug,
    "containedInPlace": { "@type": "AdministrativeArea", "name": area.county + " County, FL" }
  })),
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Roofing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement", "url": "https://www.gimosroofing.com/services/roof-replacement" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair", "url": "https://www.gimosroofing.com/services/roof-repair" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Roofing", "url": "https://www.gimosroofing.com/services/commercial-roofing" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Construction Roofing", "url": "https://www.gimosroofing.com/services/new-construction-roofing" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Installation", "url": "https://www.gimosroofing.com/services/siding-installation" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Siding Repair", "url": "https://www.gimosroofing.com/services/siding-repair" }}
    ]
  },
  "priceRange": "$$",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "5", "reviewCount": "81" }
}

const videoSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Gimo's Roofing Project Videos",
  "itemListElement": [
    {
      "@type": "VideoObject",
      "position": 1,
      "name": "Gimo's Roofing - Roof Replacement Project in Jacksonville FL",
      "description": "Watch our team complete a professional roof replacement project in Jacksonville, Florida. See our quality workmanship and attention to detail.",
      "thumbnailUrl": "https://img.youtube.com/vi/z_0CKskIgXc/maxresdefault.jpg",
      "uploadDate": "2024-01-15",
      "contentUrl": "https://www.youtube.com/watch?v=z_0CKskIgXc",
      "embedUrl": "https://www.youtube.com/embed/z_0CKskIgXc",
      "publisher": {
        "@type": "Organization",
        "name": "Gimo's Renovation & Roofing",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.gimosroofing.com/gimos-roofing-logo.webp"
        }
      }
    },
    {
      "@type": "VideoObject",
      "position": 2,
      "name": "Gimo's Roofing - Professional Roof Installation Jacksonville",
      "description": "Professional roofing installation by Gimo's Roofing in Jacksonville, FL. Quality materials and expert craftsmanship.",
      "thumbnailUrl": "https://img.youtube.com/vi/aXKje0SbdD0/maxresdefault.jpg",
      "uploadDate": "2024-02-20",
      "contentUrl": "https://www.youtube.com/watch?v=aXKje0SbdD0",
      "embedUrl": "https://www.youtube.com/embed/aXKje0SbdD0",
      "publisher": {
        "@type": "Organization",
        "name": "Gimo's Renovation & Roofing",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.gimosroofing.com/gimos-roofing-logo.webp"
        }
      }
    },
    {
      "@type": "VideoObject",
      "position": 3,
      "name": "Gimo's Roofing - Residential Roofing Project Showcase",
      "description": "See another completed residential roofing project by Gimo's Roofing. Serving Jacksonville and Northeast Florida.",
      "thumbnailUrl": "https://img.youtube.com/vi/MLenaCM8LyQ/maxresdefault.jpg",
      "uploadDate": "2024-03-10",
      "contentUrl": "https://www.youtube.com/watch?v=MLenaCM8LyQ",
      "embedUrl": "https://www.youtube.com/embed/MLenaCM8LyQ",
      "publisher": {
        "@type": "Organization",
        "name": "Gimo's Renovation & Roofing",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.gimosroofing.com/gimos-roofing-logo.webp"
        }
      }
    }
  ]
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />

      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 md:pt-0">
        <div className="absolute inset-0">
          <Image src="/images/roofing-jacksonville-hero.webp" alt="Professional roofing services in Jacksonville FL" title="Professional roofing services in Jacksonville FL" fill className="object-cover" priority />
        </div>
        <div className="absolute inset-0 bg-secondary/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-16 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-3 py-1.5 mb-4">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse"></span>
                <span className="text-primary text-xs font-medium">Best Roofing Company Jacksonville FL</span>
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">#1 <span className="text-primary">Jacksonville Roofing Company</span> - Trusted Roofers in Jacksonville FL</h1>
              <p className="text-base text-gray-300 mb-6 leading-relaxed max-w-lg">Looking for a reliable roofing contractor Jacksonville FL? Gimo&apos;s Roofing provides professional roof replacement, repair, and installation. Jacksonville roofing experts trusted by homeowners throughout Northeast Florida.</p>

              <div className="flex flex-wrap items-center gap-3 mb-6">
                <a href="https://www.google.com/maps/place/Gimo's+Renovation+%26+Roofing" target="_blank" rel="noopener" title="View Gimo's Roofing Google Reviews" className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 hover:bg-white/20 transition-colors">
                  <div className="flex text-primary">
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </div>
                  <span className="text-xs font-medium">Google</span>
                </a>
                <a href="https://www.yelp.com/biz/gimos-roofing-jacksonville" target="_blank" rel="noopener" title="View Gimo's Roofing Yelp Reviews" className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 hover:bg-white/20 transition-colors">
                  <div className="flex text-primary">
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </div>
                  <span className="text-xs font-medium">Yelp</span>
                </a>
                <a href="https://www.thumbtack.com/fl/jacksonville/roofing/gimos-renovation-roofing/service/478820963508404237" target="_blank" rel="noopener" title="View Gimo's Roofing Thumbtack Reviews" className="flex items-center gap-1.5 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 hover:bg-white/20 transition-colors">
                  <div className="flex text-primary">
                    <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
                  </div>
                  <span className="text-xs font-medium">Thumbtack</span>
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-2 mb-6">
                <span className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-medium">Licensed & Insured</span>
                <a href={financingUrl} target="_blank" rel="noopener" title="Apply for Roofing Financing" className="bg-white/10 backdrop-blur-sm rounded-lg px-3 py-1.5 text-xs font-medium hover:bg-white/20 transition-colors">Financing Available</a>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a href={estimateUrl} target="_blank" rel="noopener" title="Get a Free Roofing Estimate Online" className="btn btn-primary px-6 py-3 w-full sm:w-auto">Get Free Estimate</a>
                <a href="tel:+19046065313" title="Call Gimo's Roofing Jacksonville" className="btn btn-secondary px-6 py-3 border-white text-white hover:bg-white hover:text-secondary w-full sm:w-auto">(904) 606-5313</a>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <h2 className="text-xl font-bold text-secondary mb-2">Get an Instant Estimate from Jacksonville&apos;s Best Roofers</h2>
                <p className="text-gray-600 text-sm mb-4">Use our free online estimator tool for an instant quote</p>
                <div className="space-y-4">
                  <div className="bg-gray-50 rounded-xl p-4 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                      <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
                    </div>
                    <h3 className="font-semibold text-secondary mb-1">Instant Online Estimator</h3>
                    <p className="text-gray-500 text-sm mb-4">Get a detailed estimate in minutes - no appointment needed</p>
                    <a href={estimateUrl} target="_blank" rel="noopener" title="Start Your Free Roofing Estimate" className="btn btn-primary w-full py-3">Start Free Estimate</a>
                  </div>
                  <div className="text-center">
                    <p className="text-gray-500 text-sm mb-2">Or call us directly</p>
                    <a href="tel:+19046065313" title="Call Gimo's Roofing Jacksonville" className="text-xl font-bold text-secondary hover:text-primary transition-colors">(904) 606-5313</a>
                  </div>
                  <div className="border-t pt-4">
                    <a href={financingUrl} target="_blank" rel="noopener" title="Apply for Roofing Financing" className="flex items-center justify-center gap-2 text-primary hover:text-primary-dark transition-colors text-sm font-medium">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                      Apply for Financing
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-primary py-6">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-secondary mb-1">{stat.number}</div>
                <div className="text-secondary/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Roofing Jacksonville FL</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">Professional Roofing & Siding Services in Northeast Florida</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">As the best roofing company Jacksonville FL, our expert roofers deliver quality craftsmanship for residential and commercial properties. From roof repairs to complete replacements, trust Jacksonville&apos;s top roofing contractor.</p>
          </div>

          {/* Roofing Services */}
          <div className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary">Roofing Services</h3>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {roofingServices.map((service) => (
                <Link key={service.title} href={service.href} title={`${service.title} Services in Jacksonville FL`} className="group">
                  <div className="card h-full border border-gray-100 hover:border-primary/30 overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <Image src={service.image} alt={service.alt} title={service.imgTitle} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                      <span className="inline-flex items-center text-primary text-sm font-semibold">Learn More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Siding Services */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/></svg>
              </div>
              <h3 className="text-xl font-bold text-secondary">Siding Services</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {sidingServices.map((service) => (
                <Link key={service.title} href={service.href} title={`${service.title} Services in Jacksonville FL`} className="group">
                  <div className="card h-full border border-gray-100 hover:border-primary/30 overflow-hidden">
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <Image src={service.image} alt={service.alt} title={service.imgTitle} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5">
                      <h4 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">{service.title}</h4>
                      <p className="text-gray-600 text-sm mb-3">{service.description}</p>
                      <span className="inline-flex items-center text-primary text-sm font-semibold">Learn More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/></svg></span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Why Choose Us</span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">Why Homeowners Trust Our Jacksonville Roofing Company</h2>
              <p className="text-base text-gray-600 mb-6">When you need roofers Jacksonville FL homeowners trust, Gimo&apos;s Roofing delivers. As Jacksonville&apos;s top-rated roofing contractor, we provide exceptional quality, transparent pricing, and outstanding customer service for every roofing Jacksonville project.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {whyChooseUs.map((item) => (
                  <div key={item.title} className="flex gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/></svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-secondary text-sm mb-0.5">{item.title}</h3>
                      <p className="text-gray-600 text-xs">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-xl relative">
                <Image src="/images/roofing-crew-installation-action.webp" alt="Gimo's Roofing crew installing roof in Jacksonville FL" title="Gimo's Roofing crew installing roof in Jacksonville FL" fill className="object-cover" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <StarIcon />
                  </div>
                  <div>
                    <div className="font-bold text-secondary">5.0 Rating</div>
                    <div className="text-xs text-gray-500">Google, Yelp & Thumbtack</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section className="py-16 bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Jacksonville Roofing Service Areas</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Local Roofing Contractor Serving These <span className="text-primary">Jacksonville Neighborhoods</span></h2>
            <p className="text-base text-gray-300 max-w-2xl mx-auto">Proudly serving Jacksonville and surrounding communities. Find trusted roofers Jacksonville FL residents recommend.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
            {serviceAreas.map((area) => (
              <Link key={area} href={"/roofing-" + area.toLowerCase().replace(/ /g, '-') + "-fl"} title={`Roofing Services in ${area}, FL`} className="group bg-white/5 hover:bg-primary rounded-xl p-4 text-center transition-all">
                <svg className="w-6 h-6 mx-auto mb-2 text-primary group-hover:text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <h3 className="text-sm font-semibold group-hover:text-secondary">{area}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects Map */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Recent Projects</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">See Our Work Across <span className="text-primary">Northeast Florida</span></h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Click on a pin to see photos from our completed roofing projects.</p>
          </div>
          <ProjectsMapCompact />
          <div className="text-center mt-6">
            <Link href="/gallery" title="View Our Roofing Project Gallery" className="text-primary font-semibold hover:underline">View Full Gallery &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">Testimonials</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">What Our Customers Say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card p-6">
              <div className="flex text-primary mb-3">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p className="text-gray-600 text-sm mb-4">&quot;Gimos Roofing did an amazing job on our roof replacement. Professional, on time, and quality exceeded expectations!&quot;</p>
              <div className="text-sm font-semibold text-secondary">John M. - Jacksonville, FL</div>
            </div>
            <div className="card p-6">
              <div className="flex text-primary mb-3">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p className="text-gray-600 text-sm mb-4">&quot;Best roofing company in Jacksonville! Fixed our leak quickly at a fair price. Great communication throughout.&quot;</p>
              <div className="text-sm font-semibold text-secondary">Sarah R. - Ponte Vedra Beach, FL</div>
            </div>
            <div className="card p-6">
              <div className="flex text-primary mb-3">
                <StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon />
              </div>
              <p className="text-gray-600 text-sm mb-4">&quot;Emergency roof repair after a storm - Gimos was there same day. Excellent service and quality work!&quot;</p>
              <div className="text-sm font-semibold text-secondary">Mike T. - Orange Park, FL</div>
            </div>
          </div>

          {/* Video Testimonials */}
          <div className="mt-12 pt-12 border-t border-gray-200">
            <h3 className="text-xl font-bold text-secondary text-center mb-6">Watch Our Work in Action</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/z_0CKskIgXc" title="Gimo's Roofing Project" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/aXKje0SbdD0" title="Gimo's Roofing Project" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
              </div>
              <div className="aspect-video rounded-xl overflow-hidden shadow-md">
                <iframe width="100%" height="100%" src="https://www.youtube.com/embed/MLenaCM8LyQ" title="Gimo's Roofing Project" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen loading="lazy"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="inline-block text-primary font-semibold text-xs uppercase tracking-wider mb-3">FAQ</span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">Frequently Asked Questions</h2>
          </div>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary-dark">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-secondary mb-4">Ready to Get Started?</h2>
          <p className="text-base text-secondary/80 mb-6">Contact Jacksonville&apos;s best roofing company today. Get a free estimate from the roofing contractor Jacksonville FL trusts most.</p>
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener" title="Get a Free Roofing Estimate Online" className="btn bg-secondary text-white hover:bg-secondary-light px-6 py-3 w-full sm:w-auto">Get Free Estimate</a>
            <a href="tel:+19046065313" title="Call Gimo's Roofing Jacksonville" className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 w-full sm:w-auto">Call (904) 606-5313</a>
            <a href={financingUrl} target="_blank" rel="noopener" title="Apply for Roofing Financing" className="btn bg-transparent border-2 border-secondary text-secondary hover:bg-secondary hover:text-white px-6 py-3 w-full sm:w-auto">Apply for Financing</a>
          </div>
        </div>
      </section>
    </>
  )
}
