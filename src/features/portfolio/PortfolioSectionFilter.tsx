'use client'
import Button from '@/components/Button'
import { useState } from 'react'
import Portfolio from './Portfolio'
import { ProjectCategory, defaultProjects } from './models'

const filterButtons: { category?: ProjectCategory; label: string }[] = [
  { category: 'web-app', label: 'Web/App Design' },
  { category: 'brand', label: 'Brand Design' },
  { category: 'clothing', label: 'Clothing' },
  { category: undefined, label: 'Other' },
]

export const PortfolioSectionFilter = ({ projects = defaultProjects }) => {
  const [filter, setFilter] = useState<ProjectCategory | undefined | null>(null)

  const changeFilter = (newFilter: typeof filter) => {
    setFilter(newFilter === filter ? null : newFilter)
  }

  const filteredProjects = projects.filter(
    project => filter === null || project.category === filter,
  )

  return (
    <section className="pb-16">
      <div className="mb-16 flex justify-center gap-8">
        {filterButtons.map(({ category, label }, index) => (
          <Button key={index} isActive={filter === category} onClick={() => changeFilter(category)}>
            {label}
          </Button>
        ))}
      </div>
      <Portfolio projects={filteredProjects} />
    </section>
  )
}

export default PortfolioSectionFilter
