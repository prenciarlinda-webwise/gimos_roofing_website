/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      // Sitemap redirect
      { source: '/sitemap_index.xml', destination: '/sitemap.xml', permanent: true },

      // Old site URL structure redirects
      { source: '/about-us', destination: '/about', permanent: true },
      { source: '/contact-us', destination: '/contact', permanent: true },
      { source: '/roofing-services', destination: '/services', permanent: true },
      { source: '/siding-services', destination: '/services', permanent: true },
      { source: '/roofing-and-siding-services-in-jacksonville-beach', destination: '/roofing-jacksonville-beach-fl', permanent: true },

      // Old blog post redirects
      { source: '/why-quality-roofing-matters-in-jacksonville-fl-trust-gimos-roofing-for-your-home', destination: '/blog', permanent: true },
      { source: '/protect-your-home-why-choosing-professional-roofing-services-matters', destination: '/blog', permanent: true },
      { source: '/signs-you-need-roof-repair-jacksonville', destination: '/blog', permanent: true },

      // SEO optimized redirects - removing cannibalized/irrelevant content
      { source: '/blog/when-roof-needs-replacement', destination: '/blog/roof-repair-vs-replacement-jacksonville', permanent: true },
      { source: '/blog/flat-roof-repair-jacksonville', destination: '/blog', permanent: true },

      // URL typo redirects
      { source: '/roofing-st.-augustine-fl', destination: '/roofing-st-augustine-fl', permanent: true },

      // Broken blog link redirects
      { source: '/blog/roof-insurance-claim-tips', destination: '/blog/roof-insurance-claim-florida-guide', permanent: true },
      { source: '/blog/signs-you-need-new-roof', destination: '/blog/signs-you-need-new-roof-florida', permanent: true },
      { source: '/blog/metal-roofing-jacksonville-florida', destination: '/blog/benefits-metal-roofing-florida', permanent: true },

      // Non-existent location pages
      { source: '/roofing-julington-creek-fl', destination: '/roofing-nocatee-fl', permanent: true },

      // Financing consolidation -> /roof-financing-florida
      { source: '/financing', destination: '/roof-financing-florida', permanent: true },
      { source: '/roof-financing', destination: '/roof-financing-florida', permanent: true },

      // Old WordPress URL patterns
      { source: '/feed', destination: '/blog', permanent: true },
      { source: '/comments/feed', destination: '/blog', permanent: true },
      { source: '/category/uncategorized', destination: '/blog', permanent: true },
      { source: '/author/webwise-assistant', destination: '/about', permanent: true },
      { source: '/form/free-estimate-request-form', destination: '/contact', permanent: true },
    ]
  },
  // Note: a custom headers() function previously lived here. It never did anything in production
  // (output: 'export' ignores next.config.js headers entirely - nginx.conf already sends the
  // equivalent security + Cache-Control headers for the real site), and its only live effect was
  // on `next dev`, where it immutably cached JS chunks for a year and made local changes appear
  // to not show up. Removed 2026-07-25. If a future non-export deploy target needs these headers
  // again, restore them from git history instead of re-adding blindly.
}

module.exports = nextConfig
