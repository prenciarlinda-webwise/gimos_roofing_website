import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: "Privacy Policy | Gimo's Roofing",
  description: "Privacy Policy for Gimo's Roofing. Learn how we collect, use, and protect your personal information.",
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Privacy Policy", "item": "https://www.gimosroofing.com/privacy-policy" }
  ]
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "January 9, 2026"

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-secondary to-secondary/90 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-gray-200">
              Your privacy is important to us. This policy explains how we handle your information.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4">
          <p className="text-gray-500 mb-8">Last Updated: {lastUpdated}</p>

          <div className="prose prose-lg max-w-none prose-headings:text-secondary">
            <h2>Introduction</h2>
            <p>
              Gimo&apos;s Renovation & Roofing (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website gimosroofing.com or use our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>We may collect personal information that you voluntarily provide when you:</p>
            <ul>
              <li>Request a free estimate through our website or third-party tools (such as Roofr)</li>
              <li>Contact us via phone, email, or WhatsApp</li>
              <li>Fill out forms on our website</li>
              <li>Apply for financing through our partners (such as EnerBank)</li>
            </ul>
            <p>This information may include:</p>
            <ul>
              <li>Name</li>
              <li>Phone number</li>
              <li>Email address</li>
              <li>Property address</li>
              <li>Project details and preferences</li>
            </ul>

            <h3>Information Collected Automatically</h3>
            <p>When you visit our website, we may automatically collect certain information, including:</p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide estimates and respond to your inquiries</li>
              <li>Schedule and perform roofing services</li>
              <li>Communicate with you about your project</li>
              <li>Improve our website and services</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Comply with legal obligations</li>
            </ul>

            <h2>Third-Party Services</h2>
            <p>We use the following third-party services that may collect information:</p>
            <ul>
              <li><strong>Google Analytics:</strong> To analyze website traffic and usage patterns</li>
              <li><strong>Google Ads:</strong> To measure advertising effectiveness</li>
              <li><strong>Roofr:</strong> To provide instant roofing estimates</li>
              <li><strong>EnerBank:</strong> To process financing applications</li>
              <li><strong>WhatsApp:</strong> For customer communication</li>
              <li><strong>Cloudflare:</strong> For website security and performance</li>
            </ul>
            <p>Each of these services has its own privacy policy governing the use of your information.</p>

            <h2>Cookies and Tracking Technologies</h2>
            <p>
              We use cookies and similar tracking technologies to track activity on our website and improve your experience. You can instruct your browser to refuse all cookies or indicate when a cookie is being sent.
            </p>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have the right to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Opt out of marketing communications</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2>Children&apos;s Privacy</h2>
            <p>
              Our website is not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last Updated&quot; date.
            </p>

            <h2>Contact Us</h2>
            <p>If you have questions about this Privacy Policy, please contact us:</p>
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
