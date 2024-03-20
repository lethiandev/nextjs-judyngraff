'use client'

import PortfolioCard from './PortfolioCard'
import { withProjects } from './projects'

export type PortfolioProps = {
  category?: string
  featuredOnly?: boolean
}

export default function Portfolio({ category, featuredOnly = false }: PortfolioProps) {
  let projects = withProjects()

  if (featuredOnly) {
    projects = projects.filter(({ metadata }) => metadata?.featured)
  }

  if (category) {
    projects = projects.filter(({ metadata }) => metadata?.category === category)
  }

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-8">
      {projects.map(({ slug, metadata }) => (
        <PortfolioCard key={slug} name={metadata!.title!} imageSrc={metadata!.imageSrc!} />
      ))}
    </div>
  )
}
