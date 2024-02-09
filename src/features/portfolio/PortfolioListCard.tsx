import PanelNavigation from '@/components/PanelNavigation'
import Image from 'next/image'
import { Portfolio } from './portfolio'

export type PortfolioListCardProps = {
  project: Portfolio
}

export const PortfolioListCard = ({ project }: PortfolioListCardProps) => (
  <div className="rounded-[32px] bg-background p-2">
    <PanelNavigation>
      <div className="w-full pb-[64%]" />
      <Image
        className="rounded-[24px]"
        alt={project.projectName}
        src={project.imageUrl}
        fill
        aria-hidden
      />
    </PanelNavigation>
  </div>
)

export default PortfolioListCard
