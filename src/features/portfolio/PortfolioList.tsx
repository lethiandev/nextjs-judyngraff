import Button from '@/components/Button'
import PanelBox from '@/components/PanelBox'
import PortfolioListCard from './PortfolioListCard'
import { Portfolio } from './portfolio'

const defaultProjects: Portfolio[] = [
  { projectName: 'Website', imageUrl: '/portfolio/website.jpeg' },
  { projectName: 'Mobile App', imageUrl: '/portfolio/mobile-app.jpeg' },
  { projectName: 'Logo Design', imageUrl: '/portfolio/logo-design.jpeg' },
]

export type PortfolioListProps = {
  projects?: Portfolio[]
}

export const PortfolioList = ({ projects = defaultProjects }: PortfolioListProps) => (
  <PanelBox variant="light">
    <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
      <h3 className="text-5xl font-semibold text-black">
        My <span className="text-lime-500">Portfolio</span>
      </h3>
      <div className="flex justify-end gap-4">
        <Button>See More</Button>
        <Button variant="outline">See More</Button>
        <Button variant="link">See More</Button>
      </div>
    </div>
    <hr className="my-8 border-on-surface-light opacity-10" />
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <PortfolioListCard key={index} project={project} />
      ))}
    </div>
  </PanelBox>
)

export default PortfolioList
