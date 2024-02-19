import PanelNavigation from '@/components/PanelNavigation'
import Image from 'next/image'
import { Project, defaultProjects } from './models'

export const Portfolio = ({ projects = defaultProjects }) => (
  <div className="grid gap-8 md:grid-cols-3">
    {projects.map((project, index) => (
      <PortfolioCard key={index} project={project} />
    ))}
  </div>
)

export default Portfolio

const PortfolioCard = ({ project }: { project: Project }) => (
  <article className="rounded-[32px] bg-background p-2">
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
  </article>
)
