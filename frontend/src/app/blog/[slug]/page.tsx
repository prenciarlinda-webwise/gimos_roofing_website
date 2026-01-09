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
    title: `${post.metaTitle} | Gimo's Roofing`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getRelatedPosts(slug, 3)

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://gimosroofing.com${post.image}`,
    "datePublished": post.date,
    "author": {
      "@type": "Organization",
      "name": "Gimo's Roofing",
      "url": "https://gimosroofing.com"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Gimo's Roofing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gimosroofing.com/images/gimos-roofing-logo.webp"
      }
    }
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
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://gimosroofing.com" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://gimosroofing.com/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://gimosroofing.com/blog/${post.slug}` }
    ]
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      {faqSchema && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      )}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4">
            <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors">
              Blog
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-300">{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full font-medium">
              {post.category}
            </span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span>{post.readTime}</span>
            <span>By {post.author}</span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="relative -mt-1">
        <div className="max-w-4xl mx-auto px-4">
          <div className="aspect-video relative rounded-xl overflow-hidden shadow-xl -mt-6">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div
            className="prose prose-lg max-w-none prose-headings:text-secondary prose-a:text-primary hover:prose-a:text-primary/80"
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
