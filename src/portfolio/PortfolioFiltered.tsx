'use client'

import Button from '@/components/Button'
import React from 'react'
import { useQueryParamsToggle } from './utils'
import Portfolio from './Portfolio'

export default function PortfolioFiltered() {
  const { value: filter, change } = useQueryParamsToggle('category')

  return (
    <React.Fragment>
      <div className="mb-16 flex flex-wrap justify-center gap-4 md:gap-8">
        {categories.map(({ category, label }, index) => (
          <Button key={index} isActive={filter === category} onClick={() => change(category)}>
            {label}
          </Button>
        ))}
      </div>
      <Portfolio category={filter ?? undefined} />
    </React.Fragment>
  )
}

const categories: { category: string; label: string }[] = [
  { category: 'webapp', label: 'Web/App Design' },
  { category: 'brand', label: 'Brand Design' },
  { category: 'clothing', label: 'Clothing' },
  { category: 'other', label: 'Other' },
]
