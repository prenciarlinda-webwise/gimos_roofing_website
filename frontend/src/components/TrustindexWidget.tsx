'use client'

import { useEffect, useRef } from 'react'

export default function TrustindexWidget({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) return
    // Guard against double injection (React strict mode / remounts) which renders the widget twice
    container.innerHTML = ''
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.defer = true
    container.appendChild(script)
    return () => {
      container.innerHTML = ''
    }
  }, [src])

  return <div ref={ref} />
}
