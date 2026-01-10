'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts, formatDate } from '@/lib/blogData'

const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const categories = ["All", "Roofing Guide", "Homeowner Tips", "Storm & Insurance"]

export default function BlogClient() {
  const [activeCategory, setActiveCategory] = useState("All")

  // Sort by date (newest first) and then filter by category
  const sortedPosts = [...blogPosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())

  const filteredPosts = activeCategory === "All"
    ? sortedPosts
    : sortedPosts.filter(post => post.category === activeCategory)

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Roofing Tips & Guides</h1>
            <p className="text-lg text-gray-200">
              Expert advice to help you protect your home and make informed decisions about your roof.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 bg-gray-50 border-b">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-secondary'
                    : 'bg-white text-gray-600 hover:bg-primary/10 hover:text-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article key={post.slug} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow group">
                  <Link href={`/blog/${post.slug}`} className="block">
                    <div className="aspect-video overflow-hidden relative">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">
                          {post.category}
                        </span>
                        <span className="text-gray-400 text-xs">{post.readTime}</span>
                      </div>
                      <h2 className="text-lg font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <time className="text-gray-400 text-xs" dateTime={post.date}>
                          {formatDate(post.date)}
                        </time>
                        <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                          Read More
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </Link>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <p className="text-gray-500">No posts found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Have Questions About Your Roof?</h2>
          <p className="text-secondary/80 mb-6">Get a free, no-obligation estimate and expert advice from our team.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={estimateUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">
              Get Your Free Estimate
            </a>
            <a href="tel:+19046065313" className="btn bg-white text-secondary hover:bg-gray-100">
              Call (904) 606-5313
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
