'use client'

import { useEffect, useRef } from 'react'
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

export default function ProjectsMapCompact() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstanceRef = useRef<L.Map | null>(null)

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return

    const container = mapRef.current
    let isMounted = true

    // Clean up any existing map instance first
    if (mapInstanceRef.current) {
      mapInstanceRef.current.remove()
      mapInstanceRef.current = null
    }

    // Clear leaflet ID from container if it exists
    if ((container as any)._leaflet_id) {
      delete (container as any)._leaflet_id
    }

    // Dynamically import Leaflet
    import('leaflet').then((L) => {
      // Don't initialize if component unmounted during async load
      if (!isMounted || !container) return

      // Double-check no map exists
      if (mapInstanceRef.current) return

      const map = L.map(container).setView([mapCenter.lat, mapCenter.lng], defaultZoom)
      mapInstanceRef.current = map

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap'
      }).addTo(map)

      const icon = L.divIcon({
        className: 'custom-pin',
        html: '<div style="background:#dab627;border:3px solid #1a1a2e;border-radius:50%;width:24px;height:24px;position:relative;"><div style="position:absolute;bottom:-8px;left:50%;transform:translateX(-50%);border-left:6px solid transparent;border-right:6px solid transparent;border-top:8px solid #1a1a2e;"></div></div>',
        iconSize: [24, 32],
        iconAnchor: [12, 32],
        popupAnchor: [0, -32]
      })

      map.fitBounds(L.latLngBounds(projects.map(p => [p.lat, p.lng] as [number, number])), { padding: [30, 30] })

      projects.forEach(p => {
        const popup = `<div class="project-popup-compact">
          <div class="title">${p.title}</div>
          <div class="address">${p.address}</div>
          <img src="${p.images[0]}" alt="Roofing project on ${p.address} by Gimo's Roofing" loading="lazy" />
        </div>`
        L.marker([p.lat, p.lng], { icon }).addTo(map).bindPopup(popup, { maxWidth: 250 })
      })
    })

    return () => {
      isMounted = false
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove()
        mapInstanceRef.current = null
      }
      // Clear leaflet ID from container
      if (container && (container as any)._leaflet_id) {
        delete (container as any)._leaflet_id
      }
    }
  }, [])

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
      <div className="projects-map-compact">
        <div ref={mapRef} className="w-full h-[350px] md:h-[400px] rounded-xl shadow-lg"></div>
      </div>
    </>
  )
}
