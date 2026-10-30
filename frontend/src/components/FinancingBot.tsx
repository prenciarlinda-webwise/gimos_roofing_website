'use client'

import { useCallback, useEffect, useRef, useState } from 'react'

const WHATSAPP_NUMBER = '19046976093'
const WA_PATH = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z'
const STORAGE_KEY = 'gimos_financing_bot_seen'

const topics = [
  { id: 'leak', label: 'Active roof leak', message: "Hi Gimo's Roofing! I have a roof emergency (active leak) and need to ask about financing options." },
  { id: 'storm', label: 'Storm damage', message: "Hi Gimo's Roofing! My roof was damaged in a storm and I'd like to ask about financing options." },
  { id: 'replace', label: 'Full replacement', message: "Hi Gimo's Roofing! I need a roof replacement and want to ask about financing and payment plans." },
]

function track(event: string, extra: Record<string, unknown> = {}) {
  if (typeof window !== 'undefined' && window.dataLayer) {
    window.dataLayer.push({ event, form_type: 'financing_bot', ...extra })
  }
}

function readSeen() {
  try {
    return window.sessionStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

function writeSeen() {
  try {
    window.sessionStorage.setItem(STORAGE_KEY, '1')
  } catch {
    /* storage blocked, bot just may re-appear next page load */
  }
}

function RobotSvg({ svgRef }: { svgRef: React.MutableRefObject<SVGSVGElement | null> }) {
  return (
    <svg
      ref={svgRef}
      viewBox="0 0 120 150"
      className="fb-robot w-full h-full overflow-visible"
      role="img"
      aria-label="Friendly Gimo's Roofing robot waving"
      style={{ ['--ex' as string]: '0px', ['--ey' as string]: '0px' }}
    >
      <defs>
        <linearGradient id="fb-metal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#f4f6fa" />
          <stop offset="1" stopColor="#b9c1d1" />
        </linearGradient>
        <clipPath id="fb-shirt-clip">
          <path d="M30 88 Q60 82 90 88 L96 128 Q60 136 24 128 Z" />
        </clipPath>
      </defs>

      {/* ground shadow */}
      <ellipse cx="60" cy="144" rx="30" ry="5" fill="#000" opacity="0.18" className="fb-shadow" />

      <g className="fb-bob">
        {/* antenna */}
        <line x1="60" y1="22" x2="60" y2="8" stroke="#8a93a6" strokeWidth="3" strokeLinecap="round" />
        <circle cx="60" cy="6" r="5" fill="#dab627" className="fb-bulb" />

        {/* hard hat */}
        <path d="M32 40 Q34 14 60 14 Q86 14 88 40 Z" fill="#dab627" stroke="#b89a1f" strokeWidth="1.5" />
        <rect x="26" y="38" width="68" height="7" rx="3.5" fill="#f0d04a" stroke="#b89a1f" strokeWidth="1.5" />
        <rect x="55" y="14" width="10" height="24" rx="3" fill="#f0d04a" opacity="0.7" />

        {/* head */}
        <rect x="32" y="44" width="56" height="42" rx="14" fill="url(#fb-metal)" stroke="#8a93a6" strokeWidth="2" />
        {/* ears */}
        <rect x="26" y="57" width="7" height="16" rx="3" fill="#8a93a6" />
        <rect x="87" y="57" width="7" height="16" rx="3" fill="#8a93a6" />
        {/* visor */}
        <rect x="38" y="52" width="44" height="22" rx="10" fill="#1a1a2e" />
        {/* eyes */}
        <g className="fb-eyes" style={{ transform: 'translate(var(--ex), var(--ey))' }}>
          <g className="fb-blink">
            <ellipse cx="50" cy="63" rx="5" ry="6" fill="#f0d04a" />
            <ellipse cx="70" cy="63" rx="5" ry="6" fill="#f0d04a" />
            <circle cx="51" cy="61" r="1.6" fill="#fff" />
            <circle cx="71" cy="61" r="1.6" fill="#fff" />
          </g>
        </g>
        {/* smile */}
        <path d="M50 79 Q60 86 70 79" fill="none" stroke="#1a1a2e" strokeWidth="2.5" strokeLinecap="round" />
        {/* cheeks */}
        <circle cx="42" cy="78" r="3" fill="#ff9fa8" opacity="0.7" />
        <circle cx="78" cy="78" r="3" fill="#ff9fa8" opacity="0.7" />

        {/* left arm */}
        <path d="M30 96 Q16 104 20 120" fill="none" stroke="#8a93a6" strokeWidth="7" strokeLinecap="round" />
        <circle cx="20" cy="122" r="6" fill="#dab627" stroke="#b89a1f" strokeWidth="1.5" />

        {/* waving right arm */}
        <g className="fb-wave" style={{ transformOrigin: '92px 96px' }}>
          <path d="M92 96 Q106 92 108 74" fill="none" stroke="#8a93a6" strokeWidth="7" strokeLinecap="round" />
          <circle cx="108" cy="71" r="6" fill="#dab627" stroke="#b89a1f" strokeWidth="1.5" />
        </g>

        {/* t-shirt body */}
        <path d="M30 88 Q60 82 90 88 L96 128 Q60 136 24 128 Z" fill="#1a1a2e" stroke="#0f0f1a" strokeWidth="1.5" />
        {/* sleeves */}
        <path d="M30 88 L22 100 L32 106 L38 92 Z" fill="#1a1a2e" />
        <path d="M90 88 L98 100 L88 106 L82 92 Z" fill="#1a1a2e" />
        {/* collar */}
        <path d="M48 85 Q60 94 72 85" fill="none" stroke="#2d2d44" strokeWidth="3" strokeLinecap="round" />

        {/* Gimo's Roofing logo on the shirt, cropped to house + wordmark */}
        <g clipPath="url(#fb-shirt-clip)">
          <svg x="36" y="94" width="48" height="34" viewBox="85 110 650 400" preserveAspectRatio="xMidYMid meet">
            <image href="/gimos-roofing-logo.webp" width="800" height="600" />
          </svg>
        </g>

        {/* legs */}
        <rect x="42" y="130" width="10" height="10" rx="3" fill="#8a93a6" />
        <rect x="68" y="130" width="10" height="10" rx="3" fill="#8a93a6" />
        <rect x="38" y="138" width="18" height="7" rx="3.5" fill="#dab627" stroke="#b89a1f" strokeWidth="1" />
        <rect x="64" y="138" width="18" height="7" rx="3.5" fill="#dab627" stroke="#b89a1f" strokeWidth="1" />
      </g>
    </svg>
  )
}

export default function FinancingBot() {
  const [visible, setVisible] = useState(false)
  const [open, setOpen] = useState(false)
  const [topic, setTopic] = useState(topics[0].id)
  const [popped, setPopped] = useState(false)
  const svgRef = useRef<SVGSVGElement | null>(null)
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const shown = useRef(false)

  const reveal = useCallback(() => {
    if (shown.current) return
    shown.current = true
    setVisible(true)
    if (!readSeen()) {
      setOpen(true)
      writeSeen()
      track('financing_bot_auto_open')
    }
  }, [])

  // Appear after a bit of scrolling, or after 20s on the page.
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (max > 0 && window.scrollY / max > 0.25) reveal()
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    const timer = window.setTimeout(reveal, 20000)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.clearTimeout(timer)
    }
  }, [reveal])

  // Eyes follow the pointer.
  useEffect(() => {
    if (!visible) return
    const onMove = (e: PointerEvent) => {
      const svg = svgRef.current
      if (!svg) return
      const r = svg.getBoundingClientRect()
      const dx = e.clientX - (r.left + r.width / 2)
      const dy = e.clientY - (r.top + r.height * 0.42)
      const dist = Math.hypot(dx, dy) || 1
      const k = Math.min(1, dist / 250)
      svg.style.setProperty('--ex', `${(dx / dist) * 3.5 * k}px`)
      svg.style.setProperty('--ey', `${(dy / dist) * 3 * k}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [visible])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!visible) return null

  const current = topics.find((t) => t.id === topic) ?? topics[0]
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(current.message)}`

  const toggle = () => {
    if (!open) track('financing_bot_open')
    setOpen((v) => !v)
  }

  const poke = () => {
    setPopped(true)
    window.setTimeout(() => setPopped(false), 700)
  }

  return (
    <>
    {open && (
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className="fb-overlay fixed inset-0 z-[55] bg-gray-300/60 backdrop-blur-[1px]"
      />
    )}
    <div
      ref={wrapRef}
      className={`fixed z-[60] pointer-events-none flex ${
        open
          ? 'inset-x-0 bottom-24 lg:bottom-10 flex-col items-center gap-1'
          : 'right-3 sm:right-6 bottom-28 lg:bottom-6 items-end gap-2'
      }`}
    >
      <style>{`
        @keyframes fb-in { from { opacity:0; transform: translateY(40px) scale(.8) } to { opacity:1; transform: none } }
        @keyframes fb-bob { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-4px) } }
        @keyframes fb-wave { 0%,60%,100% { transform: rotate(0) } 10%,30%,50% { transform: rotate(-22deg) } 20%,40% { transform: rotate(8deg) } }
        @keyframes fb-blink { 0%,92%,100% { transform: scaleY(1) } 96% { transform: scaleY(.1) } }
        @keyframes fb-bulb { 0%,100% { opacity:1 } 50% { opacity:.35 } }
        @keyframes fb-pop { 0% { transform: scale(1) } 40% { transform: scale(1.18) rotate(-6deg) } 100% { transform: scale(1) } }
        @keyframes fb-bubble { from { opacity:0; transform: translateY(14px) scale(.92) } to { opacity:1; transform:none } }
        @keyframes fb-overlay { from { opacity:0 } to { opacity:1 } }
        .fb-overlay { animation: fb-overlay .3s ease-out both }
        .fb-avatar { animation: fb-in .6s cubic-bezier(.2,1.3,.4,1) both }
        .fb-avatar.fb-popped { animation: fb-pop .6s ease }
        .fb-bob { animation: fb-bob 2.6s ease-in-out infinite }
        .fb-wave { animation: fb-wave 3.2s ease-in-out infinite }
        .fb-blink { animation: fb-blink 4.5s infinite; transform-origin: 60px 63px; transform-box: view-box }
        .fb-bulb { animation: fb-bulb 1.4s ease-in-out infinite }
        .fb-eyes { transition: transform .08s linear }
        .fb-bubble { animation: fb-bubble .35s ease-out both }
        @media (prefers-reduced-motion: reduce) {
          .fb-avatar, .fb-bob, .fb-wave, .fb-blink, .fb-bulb, .fb-bubble, .fb-overlay { animation: none !important }
        }
      `}</style>

      <button
        type="button"
        onClick={() => {
          poke()
          toggle()
        }}
        id="cta-financing-bot"
        aria-expanded={open}
        aria-label={open ? 'Close financing helper' : 'Open financing helper: text us about roof financing'}
        className={`fb-avatar ${popped ? 'fb-popped' : ''} pointer-events-auto relative w-24 h-28 sm:w-28 sm:h-32 shrink-0 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-primary/60 rounded-2xl`}
      >
        <RobotSvg svgRef={svgRef} />
        {!open && (
          <span className="absolute top-0 right-0 flex h-4 w-4">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500" />
          </span>
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Roofing emergency help"
          className="fb-bubble pointer-events-auto relative order-first w-[min(20rem,calc(100vw-2rem))] rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 p-4"
        >
          <span className="absolute -bottom-2 left-1/2 -ml-2 h-4 w-4 rotate-45 bg-white ring-1 ring-black/10 [clip-path:polygon(100%_0,100%_100%,0_100%)]" aria-hidden="true" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="absolute top-2 right-2 w-7 h-7 rounded-full text-gray-400 hover:text-gray-700 hover:bg-gray-100 flex items-center justify-center"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <span className="inline-flex items-center gap-1.5 rounded-full bg-red-600 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-white">
            <span className="h-2 w-2 rounded-full bg-white animate-pulse" aria-hidden="true" />
            24/7 Emergency Help
          </span>
          <p className="mt-2 pr-6 font-heading font-extrabold text-secondary text-xl leading-tight">
            Roofing Emergency? Get Help And Financing Today
          </p>
          <p className="mt-1.5 text-sm text-gray-600">
            Every hour of water damage costs more. Message us now and a real person at Gimo&apos;s will answer fast.
          </p>

          <p className="mt-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">What&apos;s Happening?</p>
          <div className="mt-1.5 flex flex-wrap gap-1.5">
            {topics.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTopic(t.id)}
                aria-pressed={topic === t.id}
                className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-colors ${
                  topic === t.id
                    ? 'bg-secondary text-primary border-secondary'
                    : 'bg-white text-secondary border-gray-300 hover:border-secondary'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            id="cta-financing-bot-whatsapp"
            onClick={() => {
              track('whatsapp_form_submit', { service_type: current.id })
              track('whatsapp_click', { destination_url: 'wa.me' })
            }}
            className="mt-3 flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#128C7E] text-white font-bold py-3 px-4 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d={WA_PATH} />
            </svg>
            Chat on WhatsApp
          </a>

          <a
            href="tel:+19046065313"
            id="cta-financing-bot-call"
            onClick={() => track('financing_bot_call_click', { topic: current.id })}
            className="mt-2 flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary-dark text-secondary font-bold py-3 px-4 rounded-xl transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Call Now: (904) 606-5313
          </a>
        </div>
      )}
    </div>
    </>
  )
}
