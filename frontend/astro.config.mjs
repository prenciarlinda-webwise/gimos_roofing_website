// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  },
  trailingSlash: 'ignore',
  redirects: {
    // Sitemap redirect
    '/sitemap_index.xml': '/sitemap.xml',

    // Old site URL structure redirects
    '/about-us': '/about',
    '/contact-us': '/contact',
    '/roofing-services': '/services',
    '/siding-services': '/services',
    '/roofing-and-siding-services-in-jacksonville-beach': '/roofing-jacksonville-beach-fl',

    // Old blog post redirects (redirect to blog index until new posts are created)
    '/why-quality-roofing-matters-in-jacksonville-fl-trust-gimos-roofing-for-your-home': '/blog',
    '/protect-your-home-why-choosing-professional-roofing-services-matters': '/blog',
    '/signs-you-need-roof-repair-jacksonville': '/blog',

    // Privacy policy (redirect to about until dedicated page is created)
    '/privacy-policy': '/about',
  }
});