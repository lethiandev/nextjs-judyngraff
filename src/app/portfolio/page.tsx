import { PortfolioSectionFilter } from '@/features/portfolio'

const PortfolioPage = () => (
  <>
    <header className="flex flex-col items-center py-[96px]">
      <h1 className="mb-4 text-5xl font-bold">
        My <span className="text-primary">Portfolio</span>
      </h1>
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
