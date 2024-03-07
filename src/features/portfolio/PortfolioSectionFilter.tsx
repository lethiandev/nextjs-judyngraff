'use client'
import Button from '@/components/Button'
import Section from '@/components/Section'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import Portfolio from './Portfolio'
import { ProjectCategory, defaultProjects } from './models'

const filterButtons: { category: ProjectCategory; label: string }[] = [
  { category: 'web-app', label: 'Web/App Design' },
  { category: 'brand', label: 'Brand Design' },
  { category: 'clothing', label: 'Clothing' },
  { category: 'other', label: 'Other' },
]

export const PortfolioSectionFilter = ({ projects = defaultProjects }) => {
  const { filter, change } = useFilterQueryParam()

  const filteredProjects = projects.filter(
    project => filter === null || project.category === filter,
  )

  return (
    <Section variant="background">
      <div className="mb-16 flex justify-center gap-8">
        {filterButtons.map(({ category, label }, index) => (
          <Button key={index} isActive={filter === category} onClick={() => change(category)}>
            {label}
          </Button>
        ))}
      </div>
      <Portfolio projects={filteredProjects} />
    </Section>
  )
}

export default PortfolioSectionFilter

const useFilterQueryParam = <T extends string>() => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const filter = searchParams.get('filter') ?? null

  const changeSearchParams = (key: string, value: string | null) => {
    const query = new URLSearchParams(searchParams)
    if (value === null) {
      query.delete(key)
    } else {
      query.set(key, value)
    }
    return query
  }

  const change = (newFilter: T | null) => {
    const toggledFilter = filter === newFilter ? null : newFilter
    const query = changeSearchParams('filter', toggledFilter)
    router.push(`${pathname}?${query}`, { scroll: false })
  }

  return { change, filter }
}
