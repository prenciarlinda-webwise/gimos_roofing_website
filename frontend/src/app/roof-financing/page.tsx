import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import FAQ from '@/components/FAQ'

export const metadata: Metadata = {
  title: { absolute: "Roof Financing Jacksonville FL - Monthly Payments from $99/mo" },
  description: "Finance your new roof in Jacksonville FL. Monthly payments from $99/mo. No prepayment penalties. Credit scores 600+. Apply in 5 minutes. Call (904) 606-5313.",
  alternates: { canonical: "https://www.gimosroofing.com/roof-financing" },
}

const phone = "(904) 606-5313"
const estimateUrl = 'https://app.roofr.com/instant-estimator/4db598a1-7ca9-4594-a916-031741fecbfc/GimosRoofing'
const enerBankUrl = 'https://enerbank.com'

const faqs = [
  { question: "What credit score do I need for roof financing?", answer: "We require a minimum credit score of 600 to qualify for roof financing through EnerBank USA. Higher credit scores typically qualify for better interest rates and more favorable terms. If your score is close to 600, it may still be worth applying as other factors like income and debt-to-income ratio are also considered." },
  { question: "How long does the financing application take?", answer: "The financing application takes about 5 minutes to complete, either online or over the phone with EnerBank USA. Most applicants receive a credit decision within 24 hours, and many receive same-day approval. Once approved, you can move forward with your roofing project immediately." },
  { question: "Are there prepayment penalties?", answer: "No. You can pay off your roof financing early at any time without any prepayment penalties or fees. If you come into extra funds or simply want to pay down your balance faster, you are free to do so with no additional cost." },
  { question: "What financing terms are available?", answer: "We offer several financing options through EnerBank USA: a 12-month same-as-cash plan (0% interest if paid in full within 12 months), a 60-month fixed-rate plan at approximately 7.99% APR, and a 120-month fixed-rate plan at approximately 9.99% APR. Your actual rate depends on your credit profile and approval." },
  { question: "Do I need to pay anything upfront?", answer: "No. You don&apos;t pay anything until the work is complete. There is no down payment required to get started. Once your financing is approved and we complete your roofing project to your satisfaction, your monthly payments begin according to your chosen plan." },
  { question: "Can I finance both roof and siding work?", answer: "Yes. Our financing covers all home improvement work including siding installation and repair. If you need both a new roof and siding, you can bundle both projects into a single financing plan, which often makes more financial sense than financing them separately." },
  { question: "What happens if I&apos;m not approved?", answer: "If your initial application is not approved, we can discuss alternative options. In some cases, a co-applicant with stronger credit can help. Higher credit scores and lower debt-to-income ratios improve your chances of approval. Contact us at (904) 606-5313 to discuss your specific situation." },
  { question: "Is financing available for commercial roofing?", answer: "Our EnerBank USA financing is designed for residential properties only. For commercial roofing projects, please contact us directly at (904) 606-5313 to discuss commercial project payment options and flexible arrangements we can offer for business properties." },
]

const financialProductSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialProduct",
  "name": "Roof Financing Jacksonville FL",
  "description": "Affordable roof financing in Jacksonville FL with monthly payments from $99/mo. No prepayment penalties. Credit scores 600+. 5-minute application through EnerBank USA.",
  "provider": {
    "@type": "RoofingContractor",
    "name": "Gimo's Roofing",
    "url": "https://www.gimosroofing.com",
    "telephone": "+19046065313",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "33 24th St E",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "postalCode": "32206",
      "addressCountry": "US"
    }
  },
  "areaServed": {
    "@type": "City",
    "name": "Jacksonville",
    "sameAs": "https://en.wikipedia.org/wiki/Jacksonville,_Florida"
  },
  "interestRate": "7.99% - 9.99% APR",
  "annualPercentageRate": "7.99 - 9.99",
  "feesAndCommissionsSpecification": "No prepayment penalties"
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.question, "acceptedAnswer": { "@type": "Answer", "text": faq.answer } }))
}

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.gimosroofing.com" },
    { "@type": "ListItem", "position": 2, "name": "Roof Financing", "item": "https://www.gimosroofing.com/roof-financing" }
  ]
}

export default function RoofFinancingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(financialProductSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-secondary py-16">
        <div className="max-w-4xl mx-auto px-4 text-center text-white">
          <p className="text-primary font-semibold mb-3">Affordable Roofing Financing in Jacksonville</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Roof Financing Jacksonville FL</h1>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Get a new roof with monthly payments starting at just $99/mo. No prepayment penalties, credit scores 600+, and a 5-minute application. Don&apos;t let cost delay the protection your home needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <a href={enerBankUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary px-6 py-3 font-semibold">Apply for Financing</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100 px-6 py-3 font-semibold">{phone}</a>
          </div>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-300">
            <span>&#10003; No Prepayment Penalties</span>
            <span>&#10003; 5-Minute Application</span>
            <span>&#10003; Same-Day Approval</span>
          </div>
          <div className="mt-10 max-w-4xl mx-auto px-4">
            <div className="rounded-2xl aspect-video overflow-hidden shadow-xl relative">
              <Image src="/images/roofing-jacksonville-hero.webp" alt="Roof financing for Jacksonville FL homeowners by Gimo&apos;s Roofing" title="Affordable roof financing in Jacksonville FL" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-primary py-5">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-10 text-secondary">
            <div className="text-center"><span className="text-3xl font-bold">$99/mo</span><span className="text-sm ml-2">Starting</span></div>
            <div className="text-center"><span className="text-3xl font-bold">600+</span><span className="text-sm ml-2">Credit Score</span></div>
            <div className="text-center"><span className="text-3xl font-bold">5 Min</span><span className="text-sm ml-2">Application</span></div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">How Roof Financing Works</h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-lg">1</div>
              <div>
                <h3 className="font-bold text-secondary mb-1">Get Your Free Estimate</h3>
                <p className="text-gray-600">We inspect your roof and provide a detailed written estimate with all costs clearly outlined. No surprises, no hidden fees.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-lg">2</div>
              <div>
                <h3 className="font-bold text-secondary mb-1">Apply for Financing</h3>
                <p className="text-gray-600">Complete a 5-minute application online or over the phone with EnerBank USA. The process is quick, simple, and secure.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-lg">3</div>
              <div>
                <h3 className="font-bold text-secondary mb-1">Get Approved</h3>
                <p className="text-gray-600">Most applicants receive a decision within 24 hours, and many receive same-day approval. You&apos;ll know your rate and terms quickly.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-lg">4</div>
              <div>
                <h3 className="font-bold text-secondary mb-1">Choose Your Terms</h3>
                <p className="text-gray-600">Select the payment plan that fits your budget &mdash; from 12-month same-as-cash to 120-month fixed-rate options.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-secondary font-bold text-lg">5</div>
              <div>
                <h3 className="font-bold text-secondary mb-1">We Start Work</h3>
                <p className="text-gray-600">Once approved, we schedule your project at a time that works for you. No payment is due until the work is complete.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Monthly Payment Examples */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-4 text-center">What Does a New Roof Cost Per Month?</h2>
          <p className="text-gray-600 text-center mb-8">Estimated monthly payments based on common roof replacement costs in Jacksonville FL.</p>
          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
              <thead>
                <tr className="bg-secondary text-white">
                  <th className="px-6 py-4 text-left font-semibold">Roof Cost</th>
                  <th className="px-6 py-4 text-center font-semibold">60-Month (7.99%)</th>
                  <th className="px-6 py-4 text-center font-semibold">120-Month (9.99%)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-100">
                  <td className="px-6 py-4 font-semibold text-secondary">$12,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">~$237/mo</td>
                  <td className="px-6 py-4 text-center text-gray-600">~$158/mo</td>
                </tr>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-secondary">$15,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">~$304/mo</td>
                  <td className="px-6 py-4 text-center text-gray-600">~$198/mo</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-secondary">$20,000</td>
                  <td className="px-6 py-4 text-center text-gray-600">~$405/mo</td>
                  <td className="px-6 py-4 text-center text-gray-600">~$264/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-4 space-y-2">
            <p className="text-sm text-gray-500 text-center">Also available: 12-month same-as-cash option (0% interest if paid in full within 12 months).</p>
            <p className="text-sm text-gray-500 text-center">Rates are estimates. Actual rate depends on credit score and approval.</p>
          </div>
        </div>
      </section>

      {/* Qualification Requirements */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-6 text-center">Qualification Requirements</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Credit score 600+</strong> <span className="text-gray-600">&mdash; higher scores qualify for better rates and terms</span></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Must own the home being improved</strong> <span className="text-gray-600">&mdash; financing is available to homeowners only</span></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">No prepayment penalties</strong> <span className="text-gray-600">&mdash; pay off early anytime without additional fees</span></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Stable employment/income history</strong> <span className="text-gray-600">&mdash; proof of consistent income strengthens your application</span></div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-primary font-bold mt-1">&#9679;</span>
              <div><strong className="text-secondary">Debt-to-income ratio considered</strong> <span className="text-gray-600">&mdash; lower existing debt improves approval chances</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Financing vs. Alternatives */}
      <section className="py-14 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Financing vs. Alternatives</h2>
          <div className="grid sm:grid-cols-2 gap-5">
            <div className="bg-white p-5 rounded-lg shadow-sm relative border-2 border-primary">
              <span className="absolute -top-3 left-4 bg-primary text-secondary text-xs font-bold px-3 py-1 rounded-full">BEST OPTION</span>
              <h3 className="font-bold text-secondary mb-2 mt-1">Contractor Financing (What We Offer)</h3>
              <p className="text-gray-600 text-sm">7.99&ndash;9.99% APR through EnerBank USA. 5-minute approval process designed specifically for home improvement projects. No home equity required, no prepayment penalties, and flexible terms from 12 to 120 months.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-bold text-secondary mb-2">HELOC / Home Equity</h3>
              <p className="text-gray-600 text-sm">Lower interest rates are possible, but requires existing home equity and can take weeks to process. Your home serves as collateral, meaning your property is at risk if you default. Best for homeowners with significant equity and time to wait.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-bold text-secondary mb-2">Credit Cards</h3>
              <p className="text-gray-600 text-sm">18&ndash;25%+ APR makes credit cards one of the most expensive ways to finance a roof. Convenient for small purchases, but extremely costly for large home improvement projects like a $12,000&ndash;$20,000 roof replacement.</p>
            </div>
            <div className="bg-white p-5 rounded-lg shadow-sm">
              <h3 className="font-bold text-secondary mb-2">Personal Loan</h3>
              <p className="text-gray-600 text-sm">Generally higher rates and shorter repayment terms than contractor financing. May be worth comparing if you have excellent credit (750+), but most homeowners find our EnerBank options more competitive and convenient.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-14">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-2xl font-bold text-secondary mb-8 text-center">Frequently Asked Questions</h2>
          <FAQ faqs={faqs} />
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-secondary mb-3">Ready to Finance Your New Roof?</h2>
          <p className="text-secondary/80 mb-6">Apply in just 5 minutes. Affordable monthly payments with no prepayment penalties.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href={enerBankUrl} target="_blank" rel="noopener noreferrer" className="btn bg-secondary text-white hover:bg-secondary/90">Apply for Financing</a>
            <a href={`tel:+1${phone.replace(/\D/g, '')}`} className="btn bg-white text-secondary hover:bg-gray-100">Call {phone}</a>
          </div>
        </div>
      </section>
    </>
  )
}
