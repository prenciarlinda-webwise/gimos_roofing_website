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

  const keywords = post.keywords || [post.category.toLowerCase(), "roofing jacksonville", "gimos roofing"]

  return {
    title: `${post.metaTitle} - Gimo's Roofing`,
    description: post.excerpt,
    keywords: keywords,
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
      title: `${post.metaTitle} - Gimo's Roofing`,
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
      title: `${post.metaTitle} - Gimo's Roofing`,
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

  const relatedPosts = getRelatedPosts(slug, 3)

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "RoofingContractor",
    "name": "Gimo's Renovation & Roofing",
    "url": "https://www.gimosroofing.com",
    "logo": "https://www.gimosroofing.com/gimos-roofing-logo.webp",
    "telephone": "+1-904-606-5313",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "33 24th Street East",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "postalCode": "32206",
      "addressCountry": "US"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50",
      "bestRating": "5",
      "worstRating": "1"
    }
  }

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
    "author": {
      "@type": "Organization",
      "name": "Gimo's Roofing",
      "url": "https://www.gimosroofing.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gimo's Roofing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.gimosroofing.com/gimos-roofing-logo.webp",
        "width": 400,
        "height": 100
      }
    },
    "articleSection": post.category,
    "keywords": post.keywords?.join(", ") || post.category
  }

  const faqSchema = post.faqs && post.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
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

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Header */}
      <header className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

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
        <div className="max-w-4xl mx-auto px-4">
          <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl -mt-6">
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
        <div className="max-w-3xl mx-auto px-4">
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
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
              <p className="text-sm text-gray-600">Jacksonville&apos;s trusted roofing experts with 15+ years of experience.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Table of Contents (if available) */}
      {post.tableOfContents && post.tableOfContents.length > 0 && (
        <nav className="py-4" aria-label="Table of Contents">
          <div className="max-w-3xl mx-auto px-4">
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
          </div>
        </nav>
      )}

      {/* Article Content */}
      <article className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div
            className="prose prose-lg max-w-none prose-headings:text-secondary prose-headings:scroll-mt-20 prose-a:text-primary hover:prose-a:text-primary/80 prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-semibold prose-h3:mt-8 prose-h3:mb-3"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      {/* FAQ Section */}
      {post.faqs && post.faqs.length > 0 && (
        <section className="py-12 bg-gray-50">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Frequently Asked Questions</h2>
            <FAQ faqs={post.faqs} />
          </div>
        </section>
      )}

      {/* CTA Box */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4">
          <div className="bg-gray-50 rounded-xl p-8 text-center">
            <h3 className="text-xl font-bold text-secondary mb-3">Need Professional Roofing Help?</h3>
            <p className="text-gray-600 mb-6">Get a free estimate from Jacksonville&apos;s trusted roofing experts.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3">
                Get Free Estimate
              </a>
              <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-secondary text-white hover:bg-secondary/90 px-6 py-3">
                Call {phone}
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
