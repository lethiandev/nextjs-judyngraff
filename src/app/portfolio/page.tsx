import Heading from '@/components/Heading'
import { PortfolioSectionFilter } from '@/features/portfolio'

const PortfolioPage = () => (
  <>
    <header className="flex flex-col items-center py-[96px]">
      <Heading level={1} className="mb-4">
        My <span>Portfolio</span>
      </Heading>
      <p className="text-center">
        Explore my diverse graphic design portfolio – creativity in every pixel.
        <br />
        Get inspired or let&apos;s collaborate!
      </p>
    </header>
    <main>
      <PortfolioSectionFilter />
    </main>
  </>
)

export default PortfolioPage
