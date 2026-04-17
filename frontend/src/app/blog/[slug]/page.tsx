import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { blogPosts, getBlogPost, getRelatedPosts, formatDate } from '@/lib/blogData'
import FAQ from '@/components/FAQ'

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const phone = "(904) 606-5313"

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return { title: 'Post Not Found' }
  }

  return {
    title: post.metaTitle,
    description: post.excerpt,
    authors: [{ name: post.author }],
    creator: "Gimo's Roofing",
    publisher: "Gimo's Roofing",
    robots: {
      index: true,
      follow: true,
    },
    alternates: {
      canonical: `https://www.gimosroofing.com/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.excerpt,
      url: `https://www.gimosroofing.com/blog/${post.slug}`,
      siteName: "Gimo's Roofing",
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.dateModified || post.date,
      authors: [post.author],
      images: [
        {
          url: `https://www.gimosroofing.com${post.image}`,
          width: 1200,
          height: 630,
          alt: post.imageAlt || post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.excerpt,
      images: [`https://www.gimosroofing.com${post.image}`],
    },
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  // Check if post is scheduled for future publication
  if (post.publishDate) {
    const now = new Date().toISOString()
    const pubDate = post.publishDate.includes('T') ? post.publishDate : post.publishDate + 'T00:00'
    if (pubDate > now) {
      notFound()
    }
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  // Organization is defined canonically in root layout.tsx via @id: https://www.gimosroofing.com/#organization
  // All publisher/author references below reference it by @id to avoid duplication.

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://www.gimosroofing.com/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": {
      "@type": "ImageObject",
      "url": `https://www.gimosroofing.com${post.image}`,
      "width": 1200,
      "height": 630
    },
    "datePublished": `${post.date}T08:00:00.000Z`,
    "dateModified": `${post.dateModified || post.date}T08:00:00.000Z`,
    "author": { "@id": "https://www.gimosroofing.com/#organization" },
    "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
    "articleSection": post.category,
    "keywords": post.keywords?.join(", ") || post.category,
    // Speakable signals to Google AI Overview / voice assistants which sections are most "quotable"
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", "#quick-answer", "#key-takeaways"]
    },
    // About entity helps AI link the article to a specific local business and topic
    "about": {
      "@type": "Thing",
      "name": post.category
    },
    "isAccessibleForFree": true
  }

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntityOfPage": `https://www.gimosroofing.com/blog/${post.slug}`,
    "publisher": { "@id": "https://www.gimosroofing.com/#organization" },
    "mainEntity": post.faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  } : null

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://www.gimosroofing.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://www.gimosroofing.com/blog/${post.slug}` }
    ]
  }

  const whatsappNumber = '19046976093'
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Hi Gimo's Roofing! I have a question about " + post.title)}`
  const emailAddress = 'info@gimosroofing.com'

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Header */}
      <header className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-3 mb-4 text-sm">
            <Link href="/" className="text-gray-300 hover:text-primary transition-colors">Home</Link>
            <span className="text-gray-500">/</span>
            <Link href="/blog" className="text-gray-300 hover:text-primary transition-colors">Blog</Link>
            <span className="text-gray-500">/</span>
            <span className="text-primary">{post.category}</span>
          </nav>

          {/* Category Badge */}
          <div className="mb-4">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium">
              {post.category}
            </span>
          </div>

          {/* Article Title */}
          <h1 className="text-3xl md:text-4xl font-bold mb-4 max-w-4xl">{post.title}</h1>

          {/* Article Meta */}
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      <section className="relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl -mt-6 max-w-4xl">
            <Image
              src={post.image}
              alt={post.imageAlt || post.title}
              title={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Author Attribution Card */}
      <section className="py-6">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl max-w-4xl">
            <div className="w-12 h-12 relative flex-shrink-0">
              <Image
                src="/gimos-roofing-logo.webp"
                alt="Gimo's Roofing Logo"
                title="Gimo's Roofing - Jacksonville FL"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <p className="font-semibold text-secondary">Written by {post.author}</p>
              <p className="text-sm text-gray-600">Jacksonville&apos;s trusted roofing experts with 24 years of experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area: Article + Sidebar */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">

          {/* Left Column: Article Content */}
          <article className="lg:w-2/3 min-w-0">

            {/* Mobile-only Table of Contents (collapsible above content) */}
            {post.tableOfContents && post.tableOfContents.length > 0 && (
              <nav className="lg:hidden mb-8" aria-label="Table of Contents">
                <div className="bg-gray-50 rounded-xl p-6">
                  <h2 className="text-lg font-bold text-secondary mb-4">In This Article</h2>
                  <ul className="space-y-2">
                    {post.tableOfContents.map((item, index) => (
                      <li key={index}>
                        <a href={`#${item.id}`} className="text-primary hover:text-primary/80 transition-colors text-sm flex items-center gap-2">
                          <span className="text-gray-400">{index + 1}.</span>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            )}

            <div
              className="prose prose-lg max-w-none prose-headings:text-secondary prose-headings:scroll-mt-20 prose-a:text-primary hover:prose-a:text-primary/80 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>

          {/* Right Column: Sticky Sidebar */}
          <aside className="lg:w-1/3">
            <div className="lg:sticky lg:top-24 space-y-6">

              {/* Free Estimate Card */}
              <div className="bg-secondary rounded-xl p-6 text-center">
                <h3 className="text-white text-lg font-bold mb-2">Get a Free Estimate</h3>
                <p className="text-gray-300 text-sm mb-4">Instant ballpark pricing for your Jacksonville roof.</p>
                <a
                  href={estimateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-primary text-white font-bold py-3 px-4 rounded-lg hover:bg-primary/90 transition text-center text-sm"
                >
                  Get Instant Estimate
                </a>
              </div>

              {/* Contact Options Card */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-secondary font-bold mb-4">Talk to Us</h3>
                <div className="space-y-3">
                  {/* Phone */}
                  <a
                    href={`tel:+1${phone.replace(/\D/g, '')}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition group"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary group-hover:text-primary transition">{phone}</p>
                      <p className="text-xs text-gray-500">Call us directly</p>
                    </div>
                  </a>
                  {/* WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition group"
                  >
                    <div className="w-10 h-10 bg-[#25D366]/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary group-hover:text-[#25D366] transition">WhatsApp</p>
                      <p className="text-xs text-gray-500">Chat with us now</p>
                    </div>
                  </a>
                  {/* Email */}
                  <a
                    href={`mailto:${emailAddress}`}
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition group"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary group-hover:text-blue-600 transition">Email Us</p>
                      <p className="text-xs text-gray-500">{emailAddress}</p>
                    </div>
                  </a>
                  {/* Schedule Inspection */}
                  <a
                    href="/contact"
                    className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition group"
                  >
                    <div className="w-10 h-10 bg-amber-50 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-secondary group-hover:text-amber-600 transition">Free Inspection</p>
                      <p className="text-xs text-gray-500">Schedule a visit</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Table of Contents - Desktop Sidebar */}
              {post.tableOfContents && post.tableOfContents.length > 0 && (
                <nav className="hidden lg:block bg-white border border-gray-200 rounded-xl p-6" aria-label="Table of Contents">
                  <h3 className="text-secondary font-bold mb-4">In This Article</h3>
                  <ul className="space-y-2">
                    {post.tableOfContents.map((item, index) => (
                      <li key={index}>
                        <a href={`#${item.id}`} className="text-gray-600 hover:text-primary transition-colors text-sm flex items-center gap-2">
                          <span className="text-gray-400 text-xs">{index + 1}.</span>
                          {item.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}

              {/* Our Services Quick Links */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-secondary font-bold mb-4">Our Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services/roof-replacement" className="text-sm text-gray-600 hover:text-primary transition flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      Roof Replacement
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/roof-repair" className="text-sm text-gray-600 hover:text-primary transition flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      Roof Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/emergency-roof-repair" className="text-sm text-gray-600 hover:text-primary transition flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      Emergency Repair
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/commercial-roofing" className="text-sm text-gray-600 hover:text-primary transition flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      Commercial Roofing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/new-construction-roofing" className="text-sm text-gray-600 hover:text-primary transition flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      New Construction Roofing
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/siding-installation" className="text-sm text-gray-600 hover:text-primary transition flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      Siding Installation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/siding-repair" className="text-sm text-gray-600 hover:text-primary transition flex items-center gap-2">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                      Siding Repair
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Service Areas Quick Links */}
              <div className="bg-white border border-gray-200 rounded-xl p-6">
                <h3 className="text-secondary font-bold mb-4">Service Areas</h3>
                <p className="text-xs text-gray-500 mb-3">Roofing throughout Northeast Florida</p>
                <div className="flex flex-wrap gap-2">
                  <Link href="/roofing-jacksonville-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">Jacksonville</Link>
                  <Link href="/roofing-jacksonville-beach-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">Jax Beach</Link>
                  <Link href="/roofing-atlantic-beach-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">Atlantic Beach</Link>
                  <Link href="/roofing-neptune-beach-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">Neptune Beach</Link>
                  <Link href="/roofing-ponte-vedra-beach-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">Ponte Vedra</Link>
                  <Link href="/roofing-nocatee-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">Nocatee</Link>
                  <Link href="/roofing-st-augustine-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">St. Augustine</Link>
                  <Link href="/roofing-fernandina-beach-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">Fernandina Beach</Link>
                  <Link href="/roofing-san-marco-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">San Marco</Link>
                  <Link href="/roofing-riverside-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">Riverside</Link>
                  <Link href="/roofing-mandarin-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">Mandarin</Link>
                  <Link href="/roofing-southside-jax-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">Southside</Link>
                  <Link href="/roofing-orange-park-fl" className="px-2.5 py-1 bg-gray-50 rounded-full text-xs text-gray-600 hover:bg-primary hover:text-white transition">Orange Park</Link>
                </div>
              </div>

            </div>
          </aside>

        </div>
      </div>

      {/* FAQ Section */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Frequently Asked Questions</h2>
            <FAQ faqs={post.faqs} />
          </div>
        </section>
      )}

      {/* CTA Box */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-secondary rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-white mb-3">Need Professional Roofing Help?</h3>
            <p className="text-gray-300 mb-6">Get a free estimate from Jacksonville&apos;s trusted roofing experts.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="bg-primary text-white font-bold px-6 py-3 rounded-lg hover:bg-primary/90 transition">
                Get Free Estimate
              </a>
              <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="bg-white text-secondary font-bold px-6 py-3 rounded-lg hover:bg-gray-100 transition">
                Call {phone}
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="bg-[#25D366] text-white font-bold px-6 py-3 rounded-lg hover:bg-[#128C7E] transition flex items-center gap-2">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <article key={relatedPost.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                  <Link href={`/blog/${relatedPost.slug}`} className="block">
                    <div className="aspect-video overflow-hidden relative">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <span className="px-2 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-base font-bold text-secondary mt-2 mb-2 group-hover:text-primary transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-2">{relatedPost.excerpt}</p>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to Blog */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Link href="/blog" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            <svg className="w-5 h-5 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
            Back to All Articles
          </Link>
        </div>
      </section>
    </>
  )
}
