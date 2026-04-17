interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  faqs: FAQItem[]
}

export default function FAQ({ faqs }: FAQProps) {
  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <details key={index} className="group border border-gray-200 rounded-xl overflow-hidden">
          <summary className="list-none cursor-pointer px-5 py-4 flex justify-between items-center hover:bg-gray-50">
            <h3 className="m-0 font-semibold text-secondary text-sm pr-4">{faq.question}</h3>
            <svg
              className="w-4 h-4 text-primary transition-transform flex-shrink-0 group-open:rotate-180"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </summary>
          <div className="px-5 pb-4">
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
