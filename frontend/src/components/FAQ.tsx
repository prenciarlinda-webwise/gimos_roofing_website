'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  faqs: FAQItem[]
}

export default function FAQ({ faqs }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
          <button
            onClick={() => toggleFAQ(index)}
            className="w-full px-5 py-4 text-left flex justify-between items-center hover:bg-gray-50"
          >
            <span className="font-semibold text-secondary text-sm pr-4">{faq.question}</span>
            <svg
              className={`w-4 h-4 text-primary transition-transform flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/>
            </svg>
          </button>
          <div className={`${openIndex === index ? '' : 'hidden'} px-5 pb-4`}>
            <p className="text-gray-600 text-sm">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  )
}
