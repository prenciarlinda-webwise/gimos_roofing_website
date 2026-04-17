'use client'

import { useEffect, useRef } from 'react'

export default function TrustindexWidget({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const script = document.createElement('script')
    script.src = src
    script.async = true
    script.defer = true
    ref.current.appendChild(script)
  }, [src])

  return <div ref={ref} />
}
