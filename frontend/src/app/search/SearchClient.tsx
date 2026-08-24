'use client'

import { useState, useEffect } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { searchPages, type SearchEntry } from '@/lib/searchIndex'

const categoryStyles: Record<SearchEntry['category'], string> = {
  Service: 'bg-primary/10 text-primary',
  Location: 'bg-blue-50 text-blue-700',
  Blog: 'bg-gray-100 text-gray-600',
  Page: 'bg-gray-100 text-gray-600',
}

export default function SearchClient() {
  const searchParams = useSearchParams()
  const initialQuery = searchParams.get('q') || ''
  const [query, setQuery] = useState(initialQuery)
  const [results, setResults] = useState<SearchEntry[]>(() => searchPages(initialQuery))

  // Keep results in sync if the URL's ?q= changes (e.g. the browser back button,
  // or a link into /search?q=... from elsewhere on the site).
  useEffect(() => {
    setQuery(initialQuery)
    setResults(searchPages(initialQuery))
  }, [initialQuery])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setResults(searchPages(query))
    const url = new URL(window.location.href)
    if (query.trim()) {
      url.searchParams.set('q', query)
    } else {
      url.searchParams.delete('q')
    }
    window.history.replaceState({}, '', url.toString())
  }

  return (
    <>
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Search Gimo&apos;s Roofing</h1>
          <p className="text-lg text-gray-200 mb-8">
            Find a service, a service area, or a roofing guide from our blog.
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3" role="search">
            <label htmlFor="site-search" className="sr-only">Search the site</label>
            <input
              id="site-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try &quot;metal roofing&quot;, &quot;Jacksonville Beach&quot;, or &quot;roof financing&quot;"
              className="flex-1 rounded-lg px-4 py-3 text-secondary placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
              autoFocus
            />
            <button type="submit" className="btn btn-primary px-6 py-3 font-semibold whitespace-nowrap">
              Search
            </button>
          </form>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          {!initialQuery && !query && (
            <p className="text-gray-600 text-center">Enter a search term above to find pages on our site.</p>
          )}

          {query.trim() !== '' && (
            <p className="text-gray-500 text-sm mb-6">
              {results.length > 0
                ? `${results.length} result${results.length === 1 ? '' : 's'} for "${query}"`
                : `No results for "${query}"`}
            </p>
          )}

          {results.length === 0 && query.trim() !== '' && (
            <div className="card p-8 text-center">
              <p className="text-gray-600 mb-4">
                We couldn&apos;t find a page matching that search. Try a broader term, or contact us directly and we&apos;ll point you the right way.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="tel:+19046065313" className="btn btn-primary">Call (904) 606-5313</a>
                <Link href="/contact" className="btn bg-gray-100 text-secondary hover:bg-gray-200">Contact Us</Link>
              </div>
            </div>
          )}

          <ul className="space-y-4">
            {results.map((r) => (
              <li key={r.href}>
                <Link href={r.href} className="card p-5 block hover:shadow-md transition-shadow">
                  <div className="flex items-start justify-between gap-3 mb-1">
                    <span className="font-bold text-secondary">{r.title}</span>
                    <span className={`text-xs font-semibold px-2 py-0.5 rounded-full whitespace-nowrap ${categoryStyles[r.category]}`}>
                      {r.category}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">{r.description}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
