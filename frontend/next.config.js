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
    ]
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(self), interest-cohort=()'
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
