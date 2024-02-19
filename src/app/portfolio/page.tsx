import { PortfolioSectionFilter } from '@/features/portfolio'

const PortfolioPage = () => (
  <section className="flex flex-col">
    <header className="flex flex-col items-center">
      <h1 className="text-5xl">My Portfolio</h1>
      <p>
        Explore my diverse graphic design portfolio – creativity in every pixel.
        <br />
        Get inspired or let's collaborate!
      </p>
    </header>
    <PortfolioSectionFilter />
  </section>
)

export default PortfolioPage
