import OverlayPreview from '@/components/OverlayPreview'
import PreserveSearchLink from '@/components/PreserveSearchLink'
import Image from 'next/image'
import { Project, defaultProjects } from './models'

export const Portfolio = ({ projects = defaultProjects }) => (
  <div className="grid gap-8 md:grid-cols-3">
    {projects.map(project => (
      <PreserveSearchLink key={project.id} href={`/portfolio/${project.id}`} scroll={false}>
        <PortfolioCard project={project} />
      </PreserveSearchLink>
    ))}
  </div>
)

export default Portfolio

const PortfolioCard = ({ project }: { project: Project }) => (
  <article className="rounded-[2rem] bg-background p-2 text-background shadow-lg shadow-gray-100">
    <div className="overflow-hidden rounded-[1.5rem]">
      <OverlayPreview label={project.projectName}>
        <div className="w-full pb-[64%]" />
        <Image alt={project.projectName} src={project.imageUrl} fill aria-hidden />
      </OverlayPreview>
    </div>
  </article>
)
