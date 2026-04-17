'use client'

import dynamic from 'next/dynamic'

const ProjectsMapCompact = dynamic(() => import('@/components/ProjectsMapCompact'), { ssr: false })

export default function ProjectsMapLoader() {
  return <ProjectsMapCompact />
}
