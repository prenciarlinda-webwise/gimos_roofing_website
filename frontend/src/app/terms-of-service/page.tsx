import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Terms of Service | Gimo's Roofing",
  description: "Terms of Service for Gimo's Roofing. Read about the terms and conditions that govern the use of our website and services.",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Terms of Service", "item": "https://www.gimosroofing.com/terms-of-service" }
  ]
}

export default function TermsOfServicePage() {
  const lastUpdated = "January 9, 2026"

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-gray-200">
              Please read these terms carefully before using our website or services.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none prose-headings:text-secondary">
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the website of Gimo&apos;s Renovation & Roofing (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) at gimosroofing.com, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.
            </p>

            <h2>Services Description</h2>
            <p>
              Gimo&apos;s Roofing provides roofing and siding services in Jacksonville, Florida and surrounding areas. Our services include but are not limited to:
            </p>
            <ul>
              <li>Roof replacement and installation</li>
              <li>Roof repair</li>
              <li>Commercial roofing</li>
              <li>New construction roofing</li>
              <li>Siding installation and repair</li>
            </ul>

            <h2>Estimates and Pricing</h2>
            <p>
              Estimates provided through our website or third-party tools (such as Roofr) are for informational purposes only. Final pricing will be determined after an in-person inspection and may vary based on:
            </p>
            <ul>
              <li>Actual roof measurements and conditions</li>
              <li>Material selections</li>
              <li>Scope of work required</li>
              <li>Permit requirements</li>
              <li>Other factors discovered during inspection</li>
            </ul>

            <h2>Licensing and Insurance</h2>
            <p>
              Gimo&apos;s Renovation & Roofing is a licensed roofing contractor in the State of Florida. We maintain comprehensive general liability insurance and workers&apos; compensation coverage. Proof of licensing and insurance is available upon request.
            </p>

            <h2>Contracts and Agreements</h2>
            <p>
              All roofing and siding projects require a written contract before work begins. The contract will include:
            </p>
            <ul>
              <li>Detailed scope of work</li>
              <li>Materials to be used</li>
              <li>Total project cost</li>
              <li>Payment schedule</li>
              <li>Estimated timeline</li>
              <li>Warranty information</li>
            </ul>

            <h2>Payment Terms</h2>
            <p>
              Payment terms are outlined in your project contract. In accordance with Florida law, deposits are limited to 10% of the contract price or $1,000, whichever is less, unless materials need to be specially ordered.
            </p>

            <h2>Warranties</h2>
            <p>
              Warranty coverage varies by project and materials used. Specific warranty terms will be detailed in your project contract. Manufacturer warranties are provided in addition to our workmanship warranty.
            </p>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, images, logos, and design, is the property of Gimo&apos;s Renovation & Roofing and is protected by copyright laws. You may not reproduce, distribute, or use our content without written permission.
            </p>

            <h2>Website Use</h2>
            <p>You agree not to:</p>
            <ul>
              <li>Use the website for any unlawful purpose</li>
              <li>Attempt to gain unauthorized access to any portion of the website</li>
              <li>Interfere with the proper working of the website</li>
              <li>Submit false or misleading information</li>
              <li>Use automated systems to access the website without permission</li>
            </ul>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites (such as Roofr for estimates or EnerBank for financing). We are not responsible for the content or privacy practices of these external sites.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Gimo&apos;s Renovation & Roofing shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the website or our services.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from these terms or our services shall be governed by the laws of the State of Florida. We encourage customers to contact us directly to resolve any concerns before pursuing legal action.
            </p>

            <h2>Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
            </p>

            <h2>Contact Information</h2>
            <p>For questions about these Terms of Service, please contact us:</p>
            <ul>
              <li><strong>Phone:</strong> <a href="tel:+19046065313">(904) 606-5313</a></li>
              <li><strong>Email:</strong> <a href="mailto:management@gimosroofing.com">management@gimosroofing.com</a></li>
              <li><strong>Address:</strong> 33 24th Street East, Jacksonville, FL 32206</li>
            </ul>
          </div>

          <div className="mt-12 pt-8 border-t">
            <Link href="/" className="text-primary font-semibold hover:underline">
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
