import Heading from '@/components/Heading'
import PortfolioFiltered from '@/portfolio/PortfolioFiltered'
import React from 'react'

export default function PortfolioPage() {
  return (
    <React.Fragment>
      <header className="flex flex-col items-center py-[96px]">
        <Heading level={1} className="mb-4">
          My <span>Portfolio</span>
        </Heading>
        <p className="text-center">
          Explore my diverse graphic design portfolio - creativity in every pixel.
          <br />
          Get inspired or let&apos;s collaborate!
        </p>
      </header>
      <main>
        <div className="mb-16">
          <React.Suspense>
            <PortfolioFiltered />
          </React.Suspense>
        </div>
      </main>
    </React.Fragment>
  )
}
