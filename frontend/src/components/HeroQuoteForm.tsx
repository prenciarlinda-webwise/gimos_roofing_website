'use client'

import { useState, FormEvent } from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

const WHATSAPP_NUMBER = '19046976093'
const DISPLAY_PHONE = '(904) 606-5313'

interface HeroQuoteFormProps {
  /** City/service-area name shown as the form heading and pre-filled into the City field, e.g. "Jacksonville" */
  location: string
  /** Optional heading override; defaults to `Get a Free Quote in {location}` */
  heading?: string
}

export default function HeroQuoteForm({ location, heading }: HeroQuoteFormProps) {
  const [started, setStarted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    city: location,
    service: '',
    message: '',
  })

  const trackStart = () => {
    if (started) return
    setStarted(true)
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({ event: 'whatsapp_form_start', form_type: 'hero_quote_form', location })
    }
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const message = `Hi Gimo's Roofing! I'm interested in getting a free quote.

Name: ${formData.name}
Phone: ${formData.phone}
City: ${formData.city}
Service: ${formData.service}
Details: ${formData.message || 'N/A'}

Please let me know about availability and pricing. Thank you!`

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'whatsapp_form_submit',
        form_type: 'hero_quote_form',
        service_type: formData.service,
        location: formData.city,
      })
    }

    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-7">
      <h2 className="text-lg font-bold text-secondary mb-1">{heading || `Get a Free Quote in ${location}`}</h2>
      <p className="text-gray-500 text-sm mb-5">We&apos;ll reach out on WhatsApp, usually within minutes.</p>
      <form onSubmit={handleSubmit} onFocus={trackStart} className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="(904) 555-0100"
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              required
            />
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">City</label>
          <input
            type="text"
            value={formData.city}
            onChange={(e) => setFormData({ ...formData, city: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">What do you need?</label>
          <select
            value={formData.service}
            onChange={(e) => setFormData({ ...formData, service: e.target.value })}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            required
          >
            <option value="">Select one...</option>
            <option value="Roofing - Replacement">Roof Replacement</option>
            <option value="Roofing - Repair">Roof Repair</option>
            <option value="Roofing - Emergency">Emergency Roof Repair</option>
            <option value="Roofing - New Construction">New Construction Roofing</option>
            <option value="Roofing - Commercial">Commercial Roofing</option>
            <option value="Siding - Installation">Siding Installation</option>
            <option value="Siding - Repair">Siding Repair</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-1">How can we help? <span className="font-normal text-gray-400">(optional)</span></label>
          <textarea
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            placeholder="Tell us about your roof or project"
            rows={2}
            className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
          />
        </div>
        <button type="submit" className="btn btn-primary w-full font-semibold">Request My Free Quote</button>
        <p className="text-xs text-gray-500 text-center">
          Or call us directly: <a href={`tel:+1${DISPLAY_PHONE.replace(/\D/g, '')}`} className="text-primary font-semibold hover:underline">{DISPLAY_PHONE}</a>
        </p>
      </form>
    </div>
  )
}
