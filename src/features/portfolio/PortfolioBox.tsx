import Button from '@/components/Button'
import PanelBox from '@/components/PanelBox'
import PanelDivider from '@/components/PanelDivider'
import PanelHeader from '@/components/PanelHeader'
import PortfolioList from './PortfolioList'
import PortfolioListCard from './PortfolioListCard'
import { Portfolio, defaultProjects } from './portfolio'

export type PortfolioBoxProps = {
  projects?: Portfolio[]
}

export const PortfolioBox = ({ projects = defaultProjects }: PortfolioBoxProps) => (
  <PanelBox variant="light">
    <PanelHeader actions={<Button>See More</Button>}>
      <h3 className="text-5xl font-semibold">
        My <span className="text-primary">Portfolio</span>
      </h3>
    </PanelHeader>
    <PanelDivider />
    <PortfolioList>
      {projects.map((project, index) => (
        <PortfolioListCard key={index} project={project} />
      ))}
    </PortfolioList>
  </PanelBox>
)

export default PortfolioBox
