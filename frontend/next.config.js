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

      // Privacy policy
      { source: '/privacy-policy', destination: '/about', permanent: true },
    ]
  },
}

module.exports = nextConfig
