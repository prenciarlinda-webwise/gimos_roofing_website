'use client'

import { useEffect, useRef, useState } from 'react'
import 'leaflet/dist/leaflet.css'

const projects = [
  {
    title: "Hovington Circle",
    address: "2109 Hovington Cir W, Jacksonville, FL",
    lat: 30.1897,
    lng: -81.5456,
    images: ["/images/projects/hovington-1.webp"]
  },
  {
    title: "Citron Court",
    address: "11013 Citron Ct, Jacksonville, FL",
    lat: 30.2134,
    lng: -81.5678,
    images: ["/images/projects/citron-1.webp"]
  },
  {
    title: "Gloucestershire Rd",
    address: "9092 Gloucestershire Rd, Jacksonville, FL",
    lat: 30.2456,
    lng: -81.5234,
    images: ["/images/projects/gloucestershire-1.webp"]
  },
  {
    title: "Slappy Drive",
    address: "307 NW Slappy Dr, Lake City, FL",
    lat: 30.1923,
    lng: -82.6398,
    images: ["/images/projects/slappy-1.webp"]
  },
  {
    title: "Sherry St",
    address: "Sherry St, Atlantic Beach, FL",
    lat: 30.3288,
    lng: -81.4006,
    images: ["/images/projects/sherry-st-atlantic-beach-fl.webp"]
  },
  {
    title: "Arlet Dr",
    address: "Arlet Dr, Jacksonville, FL",
    lat: 30.3211,
    lng: -81.5836,
    images: ["/images/projects/arlet-dr-jacksonville-fl.webp"]
  },
  {
    title: "Glenlaurel Oaks Cir",
    address: "Glenlaurel Oaks Cir, Jacksonville, FL",
    lat: 30.1692,
    lng: -81.5728,
    images: ["/images/projects/glenlaurel-oaks-cir-jacksonville-fl.webp"]
  },
  {
    title: "Monroe Forest Dr",
    address: "Monroe Forest Dr, Jacksonville, FL",
    lat: 30.1937,
    lng: -81.5878,
    images: ["/images/projects/monroe-forest-dr-jacksonville-fl.webp"]
  },
  {
    title: "East Hilton Ave",
    address: "East Hilton Ave, Kingsland, GA",
    lat: 30.8041,
    lng: -81.6793,
    images: ["/images/projects/east-hilton-ave-kingsland-ga.webp"]
  }
]

const mapCenter = { lat: 30.25, lng: -81.8 }
const defaultZoom = 9

const pinHtml = (active: boolean) =>
  `<div style="background:${active ? '#1a1a2e' : '#dab627'};border:3px solid ${active ? '#dab627' : '#1a1a2e'};border-radius:50%;width:${active ? 30 : 24}px;height:${active ? 30 : 24}px;position:relative;transition:all .15s;"><div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);border-left:6px solid transparent;border-right:6px solid transparent;border-top:8px solid ${active ? '#dab627' : '#1a1a2e'};"></div></div>`

export default function ProjectsMapCompact() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)
  const markersRef = useRef<L.Marker[]>([])
  const leafletRef = useRef<typeof import('leaflet') | null>(null)
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  const [mapReady, setMapReady] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return

    const container = mapRef.current
    let isMounted = true

    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }
    if ((container as any)._leaflet_id) {
      delete (container as any)._leaflet_id
    }

    import('leaflet').then((L) => {
      if (!isMounted || !container) return
      if (mapInstanceRef.current) return
      leafletRef.current = L

      const map = L.map(container).setView([mapCenter.lat, mapCenter.lng], defaultZoom)
      mapInstanceRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
      }).addTo(map)

      map.fitBounds(L.latLngBounds(projects.map(p => [p.lat, p.lng] as [number, number])), { padding: [30, 30] })

      const makeIcon = (active: boolean) => L.divIcon({
        className: 'custom-pin',
        html: pinHtml(active),
        iconSize: active ? [30, 38] : [24, 32],
        iconAnchor: active ? [15, 38] : [12, 32],
        popupAnchor: [0, -32]
      })

      markersRef.current = projects.map((p, i) => {
        const popup = `<div class="project-popup-compact">
          <div class="title">${p.title}</div>
          <div class="address">${p.address}</div>
          <img src="${p.images[0]}" alt="Roofing project on ${p.address} by Gimo's Roofing" loading="lazy" />
        </div>`
        const marker = L.marker([p.lat, p.lng], { icon: makeIcon(false) }).addTo(map).bindPopup(popup, { maxWidth: 250 })
        marker.on('mouseover', () => setActiveIndex(i))
        marker.on('popupclose', () => setActiveIndex(cur => (cur === i ? null : cur)))
        return marker
      })
      setMapReady(true)
    })

    return () => {
      isMounted = false
      markersRef.current = []
      setMapReady(false)
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
      if (container && (container as any)._leaflet_id) {
        delete (container as any)._leaflet_id
      }
    }
  }, [])

  // Sync the active pin with the hovered/selected address
  useEffect(() => {
    const L = leafletRef.current
    if (!mapReady || !L) return
    markersRef.current.forEach((m, i) => {
      const active = i === activeIndex
      m.setIcon(L.divIcon({
        className: 'custom-pin',
        html: pinHtml(active),
        iconSize: active ? [30, 38] : [24, 32],
        iconAnchor: active ? [15, 38] : [12, 32],
        popupAnchor: [0, -32]
      }))
      m.setZIndexOffset(active ? 1000 : 0)
      if (active) m.openPopup()
      else m.closePopup()
    })
  }, [activeIndex, mapReady])

  return (
    <>
      <style jsx global>{`
        .project-popup-compact {
          min-width: 200px;
          max-width: 250px;
        }
        .project-popup-compact img {
          width: 100%;
          height: 140px;
          object-fit: cover;
          border-radius: 0 0 6px 6px;
        }
        .project-popup-compact .title {
          font-weight: 600;
          font-size: 0.9rem;
          color: #1a1a2e;
          padding: 10px 10px 4px;
        }
        .project-popup-compact .address {
          font-size: 0.75rem;
          color: #666;
          padding: 0 10px 8px;
        }
        .leaflet-popup-content {
          margin: 0;
          padding: 0;
        }
      `}</style>
      <div className="projects-map-compact grid lg:grid-cols-10 gap-4">
        <div className="lg:col-span-7">
          <div ref={mapRef} className="w-full h-[350px] md:h-[450px] rounded-xl shadow-lg"></div>
        </div>
        <ul
          className="lg:col-span-3 h-auto lg:h-[450px] overflow-y-auto rounded-xl bg-white shadow-lg divide-y divide-gray-100"
          onMouseLeave={() => setActiveIndex(null)}
        >
          {projects.map((p, i) => (
            <li key={p.address}>
              <button
                type="button"
                onMouseEnter={() => setActiveIndex(i)}
                onFocus={() => setActiveIndex(i)}
                onClick={() => setActiveIndex(i)}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-colors ${activeIndex === i ? 'bg-primary/20' : 'hover:bg-gray-50'}`}
              >
                <span className={`shrink-0 w-3 h-3 rounded-full border-2 border-secondary ${activeIndex === i ? 'bg-secondary' : 'bg-primary'}`} aria-hidden="true"></span>
                <span>
                  <span className="block font-semibold text-secondary text-sm">{p.title}</span>
                  <span className="block text-xs text-gray-500">{p.address}</span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
